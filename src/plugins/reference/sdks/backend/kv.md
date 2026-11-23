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

### KVSDK

> **KVSDK** = `object`

The SDK for the key-value store.

#### Methods

##### define()

> **define**(`key`: `string`, `options`: [`KVDefineOptions`](#kvdefineoptions)): `Promise`\<`void`\>

Defines a new key-value pair. Only call this once per key.
If the key is not defined, it will be created at first set with default options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to define. |
| `options` | [`KVDefineOptions`](#kvdefineoptions) | The options for the key. |

###### Returns

`Promise`\<`void`\>

##### del()

> **del**(`key`: `string`): `Promise`\<`void`\>

Deletes a key-value pair from the key-value store.

No-op if the key is not defined.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key to delete. |

###### Returns

`Promise`\<`void`\>

##### get()

> **get**\<`T`\>(`key`: `string`): `Promise`\<`T` \| `undefined`\>

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

The value or undefined if the key is not defined.

##### on()

###### Call Signature

> **on**(`event`: `"set"`, `callback`: \<`T`\>(`key`: `string`, `value`: `T`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\>): `void`

Registers a callback for when a key-value pair is set.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"set"` | The event to register for. |
| `callback` | \<`T`\>(`key`: `string`, `value`: `T`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\> | The callback to register. |

###### Returns

`void`

###### Call Signature

> **on**(`event`: `"delete"`, `callback`: (`key`: `string`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\>): `void`

Registers a callback for when a key-value pair is deleted.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"delete"` | The event to register for. |
| `callback` | (`key`: `string`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\> | The callback to register. |

###### Returns

`void`

##### set()

> **set**\<`T`\>(`key`: `string`, `value`: `T`): `Promise`\<`void`\>

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
