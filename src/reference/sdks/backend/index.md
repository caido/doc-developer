# @caido/sdk-backend

## SDK

### SDK

The SDK object available to all scripts.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Properties

##### api

> **api**: [`APISDK`](api.md#apisdk)\<`API`, `Events`\>

The SDK for the API RPC service.

##### console

> **console**: [`Console`](other.md#console)

The console.

This is currently the same as the global `console`.

##### env

> **env**: [`EnvironmentSDK`](environment.md#environmentsdk)

The SDK for the Environment service.

##### events

> **events**: [`EventsSDK`](events.md#eventssdk)\<`API`, `Events`\>

The SDK for the Events service.

##### findings

> **findings**: [`FindingsSDK`](findings.md#findingssdk)

The SDK for the Findings service.

##### graphql

> **graphql**: [`GraphQLSDK`](graphql.md#graphqlsdk)

The SDK for the GraphQL service.

##### hostedFile

> **hostedFile**: [`HostedFileSDK`](hostedfile.md#hostedfilesdk)

The SDK for the HostedFile service.

##### meta

> **meta**: [`MetaSDK`](meta.md#metasdk)

The SDK for metadata information about the plugin.

##### projects

> **projects**: [`ProjectsSDK`](projects.md#projectssdk)

The SDK for the Projects service.

##### replay

> **replay**: [`ReplaySDK`](replay.md#replaysdk)

The SDK for the Replay service.

##### requests

> **requests**: [`RequestsSDK`](requests.md#requestssdk)

The SDK for the Requests service.

##### runtime

> **runtime**: [`RuntimeSDK`](runtime.md#runtimesdk)

The SDK for the runtime information.

##### scope

> **scope**: [`ScopeSDK`](scope.md#scopesdk)

The SDK for the Scope service.

## API Reference

- [Meta](meta.md)
- [API](api.md)
- [Events](events.md)
- [Requests](requests.md)
- [Findings](findings.md)
- [Replay](replay.md)
- [Projects](projects.md)
- [Shared](shared.md)
- [Environment](environment.md)
- [GraphQL](graphql.md)
- [HostedFile](hostedfile.md)
- [Other](other.md)
- [Runtime](runtime.md)
- [Scope](scope.md)
