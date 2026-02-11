[@caido/quickjs-types](../index.md) / llrt/string\_decoder

# llrt/string\_decoder

## Classes

### StringDecoder

#### Constructors

##### Constructor

> **new StringDecoder**(`encoding?`: [`BufferEncoding`](buffer.md#bufferencoding)): [`StringDecoder`](#stringdecoder)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`BufferEncoding`](buffer.md#bufferencoding) |

###### Returns

[`StringDecoder`](#stringdecoder)

#### Methods

##### end()

> **end**(`buffer?`: `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer)): `string`

Returns any remaining input stored in the internal buffer as a string. Bytes
representing incomplete UTF-8 and UTF-16 characters will be replaced with
substitution characters appropriate for the character encoding.

If the `buffer` argument is provided, one final call to `stringDecoder.write()` is performed before returning the remaining input.
After `end()` is called, the `stringDecoder` object can be reused for new input.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer?` | `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | The bytes to decode. |

###### Returns

`string`

##### write()

> **write**(`buffer`: `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer)): `string`

Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
returned string and stored in an internal buffer for the next call to `stringDecoder.write()` or `stringDecoder.end()`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | The bytes to decode. |

###### Returns

`string`
