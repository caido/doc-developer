# Storage

### StorageSDK

> **StorageSDK** = `object`

Utilities to interact with frontend-plugin storage.

#### Properties

##### get()

> **get**: () => [`JSONValue`](json.md#jsonvalue)

Get the storage.

###### Returns

[`JSONValue`](json.md#jsonvalue)

The storage.

##### onChange()

> **onChange**: (`callback`: (`value`: [`JSONValue`](json.md#jsonvalue)) => `void`) => `void`

Subscribe to storage changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`value`: [`JSONValue`](json.md#jsonvalue)) => `void` | The callback to call when the storage changes. |

###### Returns

`void`

##### set()

> **set**: \<`T`\>(`value`: [`JSONCompatible`](json.md#jsoncompatible)\<`T`\>) => `Promise`\<`void`\>

Set the storage.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`JSONCompatible`](json.md#jsoncompatible)\<`T`\> | The value to set the storage to |

###### Returns

`Promise`\<`void`\>

A promise that resolves when the storage has been set.
