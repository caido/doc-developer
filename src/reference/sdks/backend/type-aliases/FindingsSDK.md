[@caido/sdk-backend](../index.md) / FindingsSDK

# Type Alias: FindingsSDK

> **FindingsSDK**: `object`

The SDK for the Findings service.

## Type declaration

### create()

Creates a new Finding.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | [`FindingSpec`](FindingSpec.md) |

#### Returns

`Promise`\<[`Finding`](Finding.md)\>

#### Throws

If the request cannot be saved.

#### Example

```ts
await sdk.findings.create({
  title: "Title",
  description: "Description",
  reporter: "Reporter",
  dedupe: `${request.getHost()}-${request.getPath()}`,
  request,
});
```

### get()

Try to get a [Finding](Finding.md) for a request.
Since a request can have multiple findings, this will return the first one found.
You can also filter by reporter to get a specific finding.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GetFindingInput`](GetFindingInput.md) |

#### Returns

`Promise`\<`undefined` \| [`Finding`](Finding.md)\>

#### Example

```ts
await sdk.findings.get({
 reporter: "Reporter",
 request,
});
```
