[@caido/sdk-backend](../index.md) / DefineAPI

# Type Alias: DefineAPI\<API\>

> **DefineAPI**\<`API`\>: `{ [K in keyof API]: DefineAPICallback<API[K]> }`

## Type Parameters

| Type Parameter |
| ------ |
| `API` *extends* [`Record`](Record.md)\<`string`, (...`args`) => [`MaybePromise`](MaybePromise.md)\<`any`\>\> |
