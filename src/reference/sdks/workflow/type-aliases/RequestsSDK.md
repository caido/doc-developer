[@caido/sdk-workflow](../index.md) / RequestsSDK

# Type Alias: RequestsSDK

> **RequestsSDK**: `object`

The SDK for the Requests service.

## Type declaration

### get()

Get a request by its unique [ID](ID.md).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](ID.md) |

#### Returns

`Promise`\<`undefined` \| [`RequestResponseOpt`](RequestResponseOpt.md)\>

#### Example

```ts
await sdk.requests.get("1");
```

### inScope()

Checks if a request is in scope.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`Request`](Request.md) \| [`RequestSpec`](../classes/RequestSpec.md) |

#### Returns

`boolean`

#### Example

```ts
if (sdk.requests.inScope(request)) {
 sdk.console.log("In scope");
}
```

### query()

Query requests of the current project.

#### Returns

[`RequestsQuery`](RequestsQuery.md)

#### Example

```ts
const page = await sqk.requests.query().first(2).execute();
sdk.console.log(`ID: ${page.items[1].request.getId()}`);
```

### send()

Sends a request.

This respects the upstream proxy settings.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`RequestSpec`](../classes/RequestSpec.md) \| [`RequestSpecRaw`](../classes/RequestSpecRaw.md) |

#### Returns

`Promise`\<[`RequestResponse`](RequestResponse.md)\>

#### Throws

If the request cannot be sent.

#### Example

```ts
const spec = new RequestSpec("https://example.com");
try {
  const res = await sdk.requests.send(request)
  sdk.console.log(res.request.getId());
  sdk.console.log(res.response.getCode());
} catch (err) {
  sdk.console.error(err);
}
```
