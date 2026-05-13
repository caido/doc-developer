# Caching of Tokens

After a script authenticates against a Caido instance, the SDK keeps the resulting access token in memory for the rest of the process. To preserve that state across script runs without repeating the [authentication flow](./auth_methods.md) every time, the SDK can serialize it to a cache and reload it on the next connection.

The SDK ships with two built-in caches (file-based for Node and localStorage-based for browsers) and accepts a custom implementation for everything else.

## File

The file cache writes the token state to a JSON file on disk. It is the natural choice for Node.js scripts and CI/CD environments where local disk is available and acceptable.

The file is written with `0o600` permissions (read and write for the owner only) to limit accidental exposure to other users on the same machine. Beyond that, the file content is plain JSON: anyone with file system access can read the tokens.

The file cache is not suitable for shared, networked, or untrusted storage. For those scenarios, see [Custom Implementation](#custom-implementation).

## Local Storage

The localStorage cache writes the token state to the browser's `localStorage` under a key. It is the built-in choice for SDK use inside a browser environment.

Like the file cache, the stored value is plain JSON. Browser sandboxing scopes the storage to the origin, but anything running in the same origin (including third-party scripts loaded into the page) can read it.

## Custom Implementation

For everything that does not fit the file or localStorage models, scripts can implement the `TokenCache` interface (`load`, `save`, `clear`) and pass an instance to the `Client` constructor. Common motivations include:

- Encrypted storage on disk
- Tokens stored in a remote secret manager (Vault, AWS Secrets Manager, etc.)
- Shared cache across multiple workers (Redis, database)
- In-memory cache for tests

A custom cache is opaque to the SDK: it only calls the three interface methods, and the implementation owns where and how the tokens are stored.

## Refresh

Access tokens have a limited lifetime. When an authenticated request fails because the access token has expired or been revoked, the SDK uses the cached refresh token to mint a new access token through the instance's `refreshAuthenticationToken` mutation. The new tokens replace the old ones in memory and are written back to the cache.

The renewal happens reactively rather than on a timer: the SDK does not consult the cached `expiresAt` to refresh proactively. It waits until the server rejects a request, then refreshes and retries. From the script's point of view, the failure is invisible.

A cache holding only an access token (no refresh token) can serve a single short run but cannot recover when the access token expires. Pairing access tokens with refresh tokens is what keeps cached state usable over time.
