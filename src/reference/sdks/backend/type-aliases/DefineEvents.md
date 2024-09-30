[@caido/sdk-backend](../index.md) / DefineEvents

# Type Alias: DefineEvents\<Events\>

> **DefineEvents**\<`Events`\>: `{ [K in keyof Events]: DefineEventCallback<Events[K]> }`

## Type Parameters

| Type Parameter |
| ------ |
| `Events` *extends* [`Record`](Record.md)\<`string`, (...`args`) => [`MaybePromise`](MaybePromise.md)\<`void`\>\> |
