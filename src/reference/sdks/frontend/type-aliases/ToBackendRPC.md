[@caido/sdk-frontend](../index.md) / ToBackendRPC

# Type Alias: ToBackendRPC\<T, E\>

> **ToBackendRPC**\<`T`, `E`\>: `{ [K in keyof T]: Function }` & `object`

## Type declaration

### onEvent()

> **onEvent**: \<`K`\>(`event`, `callback`) => `object`

Subscribe to a backend event.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `E` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to subscribe to. |
| `callback` | `E`\[`K`\] | The callback to call when the event is emitted. |

#### Returns

`object`

An object with a `stop` method that can be called to stop listening to the event.

##### stop()

> **stop**: () => `void`

###### Returns

`void`

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BackendEndpoints`](BackendEndpoints.md) |
| `E` *extends* [`BackendEvents`](BackendEvents.md) |
