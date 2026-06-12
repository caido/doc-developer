# Python SDK

A community-maintained Python port of the official [JavaScript Client SDK](https://github.com/caido/sdk-js), hosted at [`caido-community/sdk-py`](https://github.com/caido-community/sdk-py) under the MIT license. The client is published to PyPI as [`caido-sdk-client`](https://pypi.org/project/caido-sdk-client/).

The repository is a monorepo with two packages that mirror the JavaScript split:

- `caido-sdk-client` is the high-level client that scripts use to interact with a Caido instance.
- `caido-server-auth` is the lower-level authentication library that the client builds on.

The Python SDK is `asyncio`-based, and its type names match the JavaScript SDK closely (`Client`, `PATAuthOptions`, `AuthCacheFile`, and so on).

A minimal usage looks like:

```python
client = Client(
    "http://localhost:8080",
    auth=PATAuthOptions(
        pat="caido_xxxxxx",
        cache=AuthCacheFile(file=".secrets.json"),
    ),
)
await client.connect()
```

## Differences from the JavaScript SDK

The Python SDK supports all three [authentication methods](./auth_methods.md) and the file and custom variants of [token caching](./auth_caching.md). The `localStorage` cache variant has no equivalent in Python, since the language does not have a browser storage model.
