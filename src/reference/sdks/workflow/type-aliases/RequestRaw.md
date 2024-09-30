[@caido/sdk-workflow](../index.md) / RequestRaw

# Type Alias: RequestRaw

> **RequestRaw**: `object`

An immutable saved raw Request.

## Type declaration

### toBytes()

Get the raw request as an array of bytes.

#### Returns

`Uint8Array`

### toText()

Parse the raw request as a string.

Unprintable characters will be replaced with `�`.

#### Returns

`string`
