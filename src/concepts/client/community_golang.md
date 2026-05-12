# Golang SDK

A community-maintained Go port of the official [JavaScript Client SDK](https://github.com/caido/sdk-js), hosted at [`caido-community/sdk-go`](https://github.com/caido-community/sdk-go) under the MIT license. It mirrors the API surface of `@caido/sdk-client` and uses [`genqlient`](https://github.com/Khan/genqlient) for type-safe GraphQL code generation, tracking the same schema the official SDK consumes.

The Go SDK exposes the same domain-specific clients as the JavaScript SDK (requests, intercept, replay, findings, scopes, projects, environments, hosted files, workflows, tasks, filters, plugins, and more), plus low-level GraphQL access for operations not covered by domain methods.

Initialization mirrors the JavaScript SDK's `Client` constructor:

```go
client, _ := caido.NewClient(caido.Options{
    URL:  "http://localhost:8080",
    Auth: caido.PATAuth("caido_xxxxx"),
})
client.Connect(context.Background())
```

## Differences from the JavaScript SDK

Coverage of the authentication model is intentional rather than exhaustive:

- **Browser Login** is not exposed in the public API. Only [Personal Access Token](./auth_methods.md#personal-access-token) (`caido.PATAuth`) and [Direct Token](./auth_methods.md#direct-token) (`caido.TokenAuth(accessToken, refreshToken)`) are supported.
- **[Token caching](./auth_caching.md)** is not built in. Tokens are held in memory for the lifetime of the `Client`, and refresh is driven by an optional `TokenRefreshFunc` callback that the script provides. Persisting tokens across runs is the script's responsibility.
