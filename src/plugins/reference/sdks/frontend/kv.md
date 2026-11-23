# KV

### KVDefineOptions

> **KVDefineOptions** = `object`

Options for defining a key-value pair.

#### Properties

##### exportable?

> `optional` **exportable**: `boolean`

Whether the key-value pair is exportable.

Usually this should be true for keys that are settings that you would want to
transfer between Caido instances.

###### Default

```ts
false
```

***

### KVEvents

> **KVEvents** = `object`

Represents the events that can be emitted by the key-value store.

#### Properties

##### delete()

> **delete**: (`key`: `string`) => `Promise`\<`void`\> \| `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

###### Returns

`Promise`\<`void`\> \| `void`

##### set()

> **set**: \<`T`\>(`key`: `string`, `value`: `T`) => `Promise`\<`void`\> \| `void`

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`KVValue`](#kvvalue) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `T` |

###### Returns

`Promise`\<`void`\> \| `void`

***

### KVSDK

> **KVSDK** = `object`

The SDK for the key-value store.

Plugin package data shared across frontend and backend surfaces of the same
plugin package. Not per-user; separate from [StorageSDK](storage.md#storagesdk).

#### Properties

##### define()

> **define**: (`key`: `string`, `options`: [`KVDefineOptions`](#kvdefineoptions)) => `Promise`\<`void`\>

Defines a new key-value pair. Only call this once per key.
If the key is not defined, it will be created at first set with default options.
Defining a key alone does not notify listeners.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to define. |
| `options` | [`KVDefineOptions`](#kvdefineoptions) | The options for the key. |

###### Returns

`Promise`\<`void`\>

##### del()

> **del**: (`key`: `string`) => `Promise`\<`void`\>

Deletes a key-value pair from the key-value store.

No-op if the key is not defined.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete. |

###### Returns

`Promise`\<`void`\>

##### get()

> **get**: \<`T`\>(`key`: `string`) => `Promise`\<`T` \| `undefined`\>

Gets a value from the key-value store.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`KVValue`](#kvvalue) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to get. |

###### Returns

`Promise`\<`T` \| `undefined`\>

The stored value (including null) or undefined if the key is not defined.

##### on()

> **on**: \<`E`\>(`event`: `E`, `callback`: [`KVEvents`](#kvevents)\[`E`\]) => [`ListenerHandle`](utils.md#listenerhandle)

Registers a callback for when a key-value pair is set.

Fires for writes from any surface of the plugin package, including the
local writer.

###### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`KVEvents`](#kvevents) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `E` | The event to register for. |
| `callback` | [`KVEvents`](#kvevents)\[`E`\] | The callback to register. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

A handle to stop listening.

##### set()

> **set**: \<`T`\>(`key`: `string`, `value`: `T`) => `Promise`\<`void`\>

Sets a value in the key-value store.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`KVValue`](#kvvalue) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to set. |
| `value` | `T` | The value to set. |

###### Returns

`Promise`\<`void`\>

***

### KVValue

> **KVValue** = `string` \| `number` \| `boolean` \| [`KVValue`](#kvvalue)[] \| `null` \| \{\[`key`: `string`\]: [`KVValue`](#kvvalue); \}

Represents any valid value for the key-value store.
It needs to be serializable to JSON.
