[@caido/sdk-workflow](../index.md) / RequestSpec

# Class: RequestSpec

A mutable Request not yet sent.

## Constructors

### new RequestSpec()

> **new RequestSpec**(`url`): [`RequestSpec`](RequestSpec.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

[`RequestSpec`](RequestSpec.md)

## Methods

### getBody()

> **getBody**(): `undefined` \| [`Body`](Body.md)

#### Returns

`undefined` \| [`Body`](Body.md)

***

### getHeader()

> **getHeader**(`name`): `undefined` \| `string`[]

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`[]

***

### getHeaders()

> **getHeaders**(): [`Record`](../type-aliases/Record.md)\<`string`, `string`[]\>

#### Returns

[`Record`](../type-aliases/Record.md)\<`string`, `string`[]\>

***

### getHost()

> **getHost**(): `string`

#### Returns

`string`

***

### getMethod()

> **getMethod**(): `string`

#### Returns

`string`

***

### getPath()

> **getPath**(): `string`

#### Returns

`string`

***

### getPort()

> **getPort**(): `number`

#### Returns

`number`

***

### getQuery()

> **getQuery**(): `string`

#### Returns

`string`

***

### getTls()

> **getTls**(): `boolean`

#### Returns

`boolean`

***

### removeHeader()

> **removeHeader**(`name`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### setBody()

> **setBody**(`body`, `options`?): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`Bytes`](../type-aliases/Bytes.md) \| [`Body`](Body.md) |
| `options`? | [`SetBodyOptions`](../type-aliases/SetBodyOptions.md) |

#### Returns

`void`

***

### setHeader()

> **setHeader**(`name`, `value`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

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

### setMethod()

> **setMethod**(`method`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |

#### Returns

`void`

***

### setPath()

> **setPath**(`path`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

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

### setQuery()

> **setQuery**(`query`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

#### Returns

`void`

***

### setRaw()

> **setRaw**(`raw`): [`RequestSpecRaw`](RequestSpecRaw.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](../type-aliases/Bytes.md) |

#### Returns

[`RequestSpecRaw`](RequestSpecRaw.md)

***

### setTls()

> **setTls**(`tls`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tls` | `boolean` |

#### Returns

`void`
