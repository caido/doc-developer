# Backend

### BackendEndpoints

> **BackendEndpoints** = `object`

Endpoints provided by the backend plugin.

#### Index Signature

\[`key`: `string`\]: (...`args`: `any`[]) => `any`

***

### BackendEvents

> **BackendEvents** = `object`

Events emitted by the backend plugin.

#### Index Signature

\[`key`: `string`\]: (...`args`: `any`[]) => `void`

***

### BackendSDK

> **BackendSDK**\<`T`, `E`\> = `{ [K in keyof T]: (args: Parameters<T[K]>) => PromisifiedReturnType<T[K]> }` & `object`

Utilities to interact with the backend plugin.

#### Type Declaration

##### onEvent()

> **onEvent**: \<`K`\>(`event`: `K`, `callback`: `E`\[`K`\]) => `object`

Subscribe to a backend event.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `E` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to subscribe to. |
| `callback` | `E`\[`K`\] | The callback to call when the event is emitted. |

###### Returns

`object`

An object with a `stop` method that can be called to stop listening to the event.

###### stop()

> **stop**: () => `void`

###### Returns

`void`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BackendEndpoints`](#backendendpoints) |
| `E` *extends* [`BackendEvents`](#backendevents) |
