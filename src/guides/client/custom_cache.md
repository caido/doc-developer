# Custom Cache Implementation

The SDK ships with two built-in token caches: a file-based one for Node.js scripts and a `localStorage`-based one for browser tools. For everything else (encrypted storage, secret managers, shared state across workers, test mocks), implement the `TokenCache` interface yourself and pass an instance to the `Client` constructor.

::: info
If you only need a basic file or `localStorage` cache, use the `{ file }` or `{ localstorage }` options described in [Base Setup](./base_setup.md#cache-the-access-token). A custom implementation is only worth the extra code when you need behavior the built-in caches do not provide.
:::

## The TokenCache Interface

To plug in your own cache, implement three methods. The SDK exports the interface and the payload type:

```ts
import type { TokenCache, CachedToken } from "@caido/sdk-client";

// For reference, this is the shape you implement:
interface TokenCache {
  load(): Promise<CachedToken | undefined>;
  save(token: CachedToken): Promise<void>;
  clear(): Promise<void>;
}

interface CachedToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: string;
}
```

When the SDK calls each method:

- **`load()`** runs once at the start of `client.connect()`. Return the cached token, or `undefined` to trigger a fresh authentication flow.
- **`save()`** runs after the SDK obtains a new token: after a PAT exchange, a browser login, a direct token (`auth.token`) being set, or a refresh.
- **`clear()`** is never called automatically by the SDK. It exists for your own code to invalidate the cache when needed (for example, on logout or after detecting a revoked token).

## Build an In-Memory Cache

The simplest custom cache holds the token in memory for the lifetime of the process. This is useful for short-lived scripts that make several authenticated calls but should not write to disk:

```ts
import type { TokenCache, CachedToken } from "@caido/sdk-client";

class InMemoryCache implements TokenCache {
  private stored: CachedToken | undefined;

  async load(): Promise<CachedToken | undefined> {
    return this.stored;
  }

  async save(token: CachedToken): Promise<void> {
    this.stored = token;
  }

  async clear(): Promise<void> {
    this.stored = undefined;
  }
}
```

Wire it in via the `auth.cache` option:

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    pat: process.env["CAIDO_PAT"]!,
    cache: new InMemoryCache(),
  },
});

await client.connect();
```

The first `connect()` will run the full PAT exchange (since `load()` returns `undefined`) and then call `save()` with the resulting tokens. Subsequent `connect()` calls in the same process (for example, after recreating the `Client`) reuse the cached token without re-authenticating.

## Encrypted Storage

To store tokens encrypted at rest (when writing to a shared filesystem, a synced drive, or a CI cache), wrap a persistence layer with your encryption primitive:

```ts
import { readFile, writeFile, unlink } from "node:fs/promises";
import type { TokenCache, CachedToken } from "@caido/sdk-client";

class EncryptedFileCache implements TokenCache {
  private readonly path: string;
  private readonly key: Buffer;

  constructor(path: string, key: Buffer) {
    this.path = path;
    this.key = key;
  }

  async load(): Promise<CachedToken | undefined> {
    const ciphertext = await readFile(this.path).catch(() => undefined);
    if (!ciphertext) return undefined;
    const plaintext = decrypt(ciphertext, this.key); // your encryption primitive
    return JSON.parse(plaintext) as CachedToken;
  }

  async save(token: CachedToken): Promise<void> {
    const plaintext = JSON.stringify(token);
    const ciphertext = encrypt(plaintext, this.key); // your encryption primitive
    await writeFile(this.path, ciphertext, { mode: 0o600 });
  }

  async clear(): Promise<void> {
    await unlink(this.path).catch(() => {});
  }
}
```

Use a key from your OS keychain, a secret manager, or a derived key from a passphrase. Avoid hard-coding it in source.

## Secret Manager

To store tokens in a remote secret manager (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager, etc.), delegate to that service's SDK from your implementation. Sketch using AWS Secrets Manager:

```ts
import type { TokenCache, CachedToken } from "@caido/sdk-client";
import type { SecretsManager } from "@aws-sdk/client-secrets-manager";

class SecretsManagerCache implements TokenCache {
  private readonly client: SecretsManager;
  private readonly secretId: string;

  constructor(client: SecretsManager, secretId: string) {
    this.client = client;
    this.secretId = secretId;
  }

  async load(): Promise<CachedToken | undefined> {
    try {
      const result = await this.client.getSecretValue({ SecretId: this.secretId });
      return result.SecretString
        ? (JSON.parse(result.SecretString) as CachedToken)
        : undefined;
    } catch {
      return undefined;
    }
  }

  async save(token: CachedToken): Promise<void> {
    await this.client.putSecretValue({
      SecretId: this.secretId,
      SecretString: JSON.stringify(token),
    });
  }

  async clear(): Promise<void> {
    await this.client.deleteSecret({
      SecretId: this.secretId,
      ForceDeleteWithoutRecovery: true,
    });
  }
}
```

The same pattern applies to any backing store: implement the three methods against its API.

## Manually Clearing the Cache

The SDK never calls `clear()` on its own. Invoke it from your code when you want to invalidate the cached token, for example after detecting an authentication error or when explicitly signing out:

```ts
const cache = new InMemoryCache();
// ... use the client ...
await cache.clear();
```

On the next `connect()`, `load()` will return `undefined` and the SDK will run a fresh authentication flow.

## Examples

A complete script that uses an in-memory cache, connects, fetches the viewer, and clears the cache on exit:

### index.ts

```ts
import {
  Client,
  type TokenCache,
  type CachedToken,
} from "@caido/sdk-client";

class InMemoryCache implements TokenCache {
  private stored: CachedToken | undefined;

  async load(): Promise<CachedToken | undefined> {
    return this.stored;
  }

  async save(token: CachedToken): Promise<void> {
    this.stored = token;
  }

  async clear(): Promise<void> {
    this.stored = undefined;
  }
}

async function main() {
  const cache = new InMemoryCache();

  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache,
    },
  });

  await client.connect();

  const viewer = await client.user.viewer();
  console.log("Authenticated as", viewer.kind);

  await cache.clear();
  console.log("Cache cleared");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it with:

```bash
export CAIDO_PAT=caido_xxxxx
npx tsx ./index.ts
```

A successful run prints the auth flow followed by the viewer kind and the clear confirmation:

```txt
[caido] Attempting to load cached token
[caido] Starting authentication flow
[caido] Authentication flow completed
[caido] Saving token to cache
Authenticated as CloudUser
Cache cleared
```
