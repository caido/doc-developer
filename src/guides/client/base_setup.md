# Base Setup

This guide walks through configuring authentication, caching the resulting tokens, connecting to your Caido instance, and making your first API call to confirm everything works.

## Authenticate

The `Client` supports three authentication methods, exposed through the `auth` option. Pick the one that matches your environment:

1. **Personal Access Token** for headless scripts and CI/CD pipelines.
2. **Browser Login** for interactive scripts where a human can approve the login.
3. **Direct Token** when you already hold an access token from another source.

### 1. Personal Access Token

The SDK uses the PAT to automatically approve a device authorization flow against the Caido Cloud, so no human interaction is required.

[Create a PAT](https://docs.caido.io/dashboard/guides/create_pat.html) from your [Caido Dashboard](https://dashboard.caido.io/developer), then pass the token to the `Client` constructor:

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    pat: "caido_xxxxx",
  },
});
```

::: warning
Do not commit your PAT to source control. Read it from an environment variable or a secret manager instead:

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    pat: process.env["CAIDO_PAT"]!,
  },
});
```
:::

### 2. Browser Login

The SDK starts a device authorization flow and surfaces a verification URL that the user opens in their browser to approve the login.

Provide an `onRequest` callback to handle the URL:

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    onRequest: (request) => {
      console.log(`Open this URL to log in: ${request.verificationUrl}`);
    },
  },
});
```

If `onRequest` is omitted, the SDK logs the URL to the console using its default logger.

### 3. Direct Token

Use this when you already have an access token (and optionally a refresh token), for example from a parent process or an earlier session.

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    token: "access_token_string",
  },
});
```

To allow the SDK to refresh the access token automatically, pass a token pair:

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    token: {
      accessToken: "...",
      refreshToken: "...",
    },
  },
});
```

::: info
A bare access token cannot be refreshed. Once it expires, you must provide a new token or switch to the Personal Access Token or Browser Login method.
:::

## Cache the Access Token

Once the SDK exchanges your PAT (or completes the browser flow) for an access token and a refresh token, it can cache them on disk or in `localStorage`. On subsequent runs, the cached tokens are loaded first, so the authentication flow is skipped until the tokens expire.

### File cache

For Node.js scripts. The path is absolute or relative to the current working directory.

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    pat: process.env["CAIDO_PAT"]!,
    cache: { file: ".caido-token.json" },
  },
});
```

The cache file is written with permissions `0o600` (read and write for the owner only).

### LocalStorage cache

For browser-based tools. The string is the key under which the cache is stored.

```ts
const client = new Client({
  url: "http://localhost:8080",
  auth: {
    pat: "caido_xxxxx",
    cache: { localstorage: "caido-token" },
  },
});
```

::: info
For custom cache implementations (encrypted storage, secret managers, etc.), see the Advanced section.
:::

## Connect to the Instance

Before making any API call, call `connect()` to authenticate and verify the instance is reachable:

```ts
await client.connect();
```

By default, `connect()` waits for the instance to be ready by polling its `/health` endpoint. To skip the ready check or customize the polling:

```ts
// Skip the ready check entirely
await client.connect({ ready: false });

// Custom polling
await client.connect({
  ready: {
    interval: 1000,
    retries: 10,
    timeout: 10000,
  },
});
```

## Get the Viewer

Once connected, call `client.user.viewer()` to retrieve the authenticated user. This is the recommended first call to confirm that authentication and connectivity are wired up correctly.

```ts
const viewer = await client.user.viewer();
console.log(viewer);
```

The result is one of three user kinds:

- `CloudUser`: a cloud-authenticated user with a full profile (email, name, subscription).
- `GuestUser`: a guest user with only an `id`.
- `ScriptUser`: a script-authenticated user with only an `id`.

You can branch on `viewer.kind` to access the profile of a `CloudUser`:

```ts
if (viewer.kind === "CloudUser") {
  console.log(`Logged in as ${viewer.profile.identity.email}`);
}
```

## Example

The script below combines everything above using PAT authentication and a file cache.

### index.ts

```ts
import { Client } from "@caido/sdk-client";

async function main() {
  const instanceUrl =
    process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080";
  const pat = process.env["CAIDO_PAT"];

  if (!pat) {
    console.error("CAIDO_PAT environment variable is required");
    process.exit(1);
  }

  const client = new Client({
    url: instanceUrl,
    auth: {
      pat: pat,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  const viewer = await client.user.viewer();
  console.log("Viewer:", JSON.stringify(viewer, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it with:

```bash
export CAIDO_PAT=caido_xxxxx
node ./index.ts
```

A successful run logs the authentication flow followed by the authenticated user, for example:

```txt
[caido] Attempting to load cached token
[caido] Failed to load cached token from file
[caido] Starting authentication flow
[caido] Authentication flow completed
[caido] Saving token to cache
Viewer: {
  "kind": "CloudUser",
  "id": "<your-user-id>",
  "profile": {
    "identity": {
      "email": "you@example.com",
      "name": "Your Name"
    },
    "subscription": {
      "plan": {
        "name": "<plan-name>"
      },
      "entitlements": [
        {
          "name": "feature:..."
        }
      ]
    }
  }
}
```

On subsequent runs, the cached token is reused and the `Starting authentication flow` lines are replaced with `Loaded token from cache`.
