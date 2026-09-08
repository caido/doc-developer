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

> **BackendSDK**\<`T`, `E`\> = `{ [K in keyof ResolvedAPI<T>]: (args: Parameters<ResolvedAPI<T>[K]>) => PromisifiedReturnType<ResolvedAPI<T>[K]> }` & `object`

Utilities to interact with the backend plugin.

#### Type Declaration

##### onEvent()

> **onEvent**: \<`K`\>(`event`: `K`, `callback`: [`ResolvedEvents`](other.md#resolvedevents)\<`T`, `E`\>\[`K`\]) => `object`

Subscribe to a backend event.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof [`ResolvedEvents`](other.md#resolvedevents)\<`T`, `E`\> |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to subscribe to. |
| `callback` | [`ResolvedEvents`](other.md#resolvedevents)\<`T`, `E`\>\[`K`\] | The callback to call when the event is emitted. |

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
| `T` *extends* [`BackendEndpoints`](#backendendpoints) \| [`BackendSpec`](#backendspec) |
| `E` *extends* [`BackendEvents`](#backendevents) |

***

### BackendSpec

> **BackendSpec** = `object`

A specification for the backend plugin.

#### Properties

##### api

> **api**: [`BackendEndpoints`](#backendendpoints)

##### events

> **events**: [`BackendEvents`](#backendevents)
