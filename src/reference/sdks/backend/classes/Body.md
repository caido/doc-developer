[@caido/sdk-backend](../index.md) / Body

# Class: Body

The body of a Request or Response.

Calling `to<FORMAT>` will try to convert the body to the desired format.

## Constructors

### new Body()

> **new Body**(`data`): [`Body`](Body.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `number`[] \| `Uint8Array` |

#### Returns

[`Body`](Body.md)

## Methods

### toJson()

> **toJson**(): `any`

Try to parse the body as JSON.

#### Returns

`any`

#### Throws

If the body is not valid JSON.

***

### toRaw()

> **toRaw**(): `Uint8Array`

Get the raw body as an array of bytes.

#### Returns

`Uint8Array`

***

### toText()

> **toText**(): `string`

Parse the body as a string.

Unprintable characters will be replaced with `�`.

#### Returns

`string`
