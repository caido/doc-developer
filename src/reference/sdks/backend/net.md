# Net

### ConnectionInfo

Information about a target.

#### Constructors

##### Constructor

> **new ConnectionInfo**(`url`: `string`): [`ConnectionInfo`](#connectioninfo)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`ConnectionInfo`](#connectioninfo)

#### Accessors

##### host

###### Get Signature

> **get** **host**(): `string`

###### Returns

`string`

###### Set Signature

> **set** **host**(`value`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

###### Returns

`void`

##### port

###### Get Signature

> **get** **port**(): `number`

###### Returns

`number`

###### Set Signature

> **set** **port**(`value`: `number`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

###### Returns

`void`

##### sni

###### Get Signature

> **get** **sni**(): `string` \| `undefined`

###### Returns

`string` \| `undefined`

###### Set Signature

> **set** **sni**(`value`: `string` \| `null`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `null` |

###### Returns

`void`

##### tls

###### Get Signature

> **get** **tls**(): `boolean`

###### Returns

`boolean`

###### Set Signature

> **set** **tls**(`value`: `boolean`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

###### Returns

`void`

***

### Connection

> **Connection** = `object`

A TCP connection.

#### Methods

##### receive()

> **receive**(`size?`: `number`): `Promise`\<`Uint8Array`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `size?` | `number` |

###### Returns

`Promise`\<`Uint8Array`\>

##### send()

> **send**(`bytes`: [`Bytes`](shared.md#bytes)): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | [`Bytes`](shared.md#bytes) |

###### Returns

`Promise`\<`void`\>

***

### NetSDK

> **NetSDK** = `object`

The SDK for the Net service.

#### Methods

##### connect()

###### Call Signature

> **connect**(`info`: [`ConnectionInfo`](#connectioninfo)): `Promise`\<[`Connection`](#connection)\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `info` | [`ConnectionInfo`](#connectioninfo) |

###### Returns

`Promise`\<[`Connection`](#connection)\>

###### Call Signature

> **connect**(`url`: `string`): `Promise`\<[`Connection`](#connection)\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

`Promise`\<[`Connection`](#connection)\>
