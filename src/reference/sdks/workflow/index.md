# @caido/sdk-workflow

## SDK

### SDK

> **SDK** = `object`

The SDK object available to all scripts.

#### Properties

##### console

> **console**: [`Console`](other.md#console)

The console for logging.

This is currently the same as the global `console`.

##### env

> **env**: [`EnvironmentSDK`](environment.md#environmentsdk)

The SDK for the Environment service.

##### findings

> **findings**: [`FindingsSDK`](findings.md#findingssdk)

The SDK for the Findings service.

##### graphql

> **graphql**: [`GraphQLSDK`](graphql.md#graphqlsdk)

The SDK for the GraphQL service.

##### hostedFile

> **hostedFile**: [`HostedFileSDK`](hostedfile.md#hostedfilesdk)

The SDK for the HostedFile service.

##### net

> **net**: [`NetSDK`](net.md#netsdk)

The SDK for the Net service.

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

#### Methods

##### asString()

> **asString**(`array`: [`Bytes`](shared.md#bytes)): `string`

Converts bytes to a string.

Unprintable characters will be replaced with `�`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | [`Bytes`](shared.md#bytes) |

###### Returns

`string`

###### Example

```js
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

## API Reference

- [Data](data.md)
- [Requests](requests.md)
- [Findings](findings.md)
- [Replay](replay.md)
- [Projects](projects.md)
- [Shared](shared.md)
- [Environment](environment.md)
- [GraphQL](graphql.md)
- [HostedFile](hostedfile.md)
- [Net](net.md)
- [Other](other.md)
- [Runtime](runtime.md)
- [Scope](scope.md)
