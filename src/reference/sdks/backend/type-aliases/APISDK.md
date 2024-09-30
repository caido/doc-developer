[@caido/sdk-backend](../index.md) / APISDK

# Type Alias: APISDK\<API, Events\>

> **APISDK**\<`API`, `Events`\>: `object`

The SDK for the API RPC service.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

## Type declaration

### register()

Registers a new backend function for the RPC.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | keyof `API` |
| `callback` | (`sdk`, ...`args`) => `any` |

#### Returns

`void`

#### Example

```ts
sdk.api.register("multiply", (sdk: SDK, a: number, b: number) => {
   return a * b;
});
```

### send()

Sends an event to the frontend plugin.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | keyof `Events` |
| ...`args` | `any`[] |

#### Returns

`void`

#### Example

```ts
sdk.api.send("myEvent", 5, "hello");
```
