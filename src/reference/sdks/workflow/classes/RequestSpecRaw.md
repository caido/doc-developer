[@caido/sdk-workflow](../index.md) / RequestSpecRaw

# Class: RequestSpecRaw

A mutable raw Request not yet sent.

## Constructors

### new RequestSpecRaw()

> **new RequestSpecRaw**(`url`): [`RequestSpecRaw`](RequestSpecRaw.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

[`RequestSpecRaw`](RequestSpecRaw.md)

## Methods

### getHost()

> **getHost**(): `string`

#### Returns

`string`

***

### getPort()

> **getPort**(): `number`

#### Returns

`number`

***

### getRaw()

> **getRaw**(): `Uint8Array`

#### Returns

`Uint8Array`

***

### getTls()

> **getTls**(): `boolean`

#### Returns

`boolean`

***

### setHost()

> **setHost**(`host`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | `string` |

#### Returns

`void`

***

### setPort()

> **setPort**(`port`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |

#### Returns

`void`

***

### setRaw()

> **setRaw**(`raw`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](../type-aliases/Bytes.md) |

#### Returns

`void`

***

### setTls()

> **setTls**(`tls`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tls` | `boolean` |

#### Returns

`void`
