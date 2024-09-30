[@caido/sdk-backend](../index.md) / Response

# Type Alias: Response

> **Response**: `object`

An immutable saved Response.

## Type declaration

### getBody()

#### Returns

`undefined` \| [`Body`](../classes/Body.md)

### getCode()

#### Returns

`number`

### getCreatedAt()

#### Returns

`Date`

### getHeader()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`undefined` \| `string`[]

### getHeaders()

#### Returns

[`Record`](Record.md)\<`string`, `string`[]\>

### getId()

#### Returns

[`ID`](ID.md)

### getRaw()

#### Returns

[`ResponseRaw`](ResponseRaw.md)

### getRoundtripTime()

#### Returns

`number`
