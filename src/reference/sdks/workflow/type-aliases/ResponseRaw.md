[@caido/sdk-workflow](../index.md) / ResponseRaw

# Type Alias: ResponseRaw

> **ResponseRaw**: `object`

An immutable saved raw Response.

## Type declaration

### toBytes()

Get the raw response as an array of bytes.

#### Returns

`Uint8Array`

### toText()

Parse the raw response as a string.

Unprintable characters will be replaced with `�`.

#### Returns

`string`
