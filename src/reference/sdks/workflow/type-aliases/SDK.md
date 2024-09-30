[@caido/sdk-workflow](../index.md) / SDK

# Type Alias: SDK

> **SDK**: `object`

The SDK object available to all scripts.

## Type declaration

### console

> **console**: [`Console`](Console.md)

The console.

This is currently the same as the global `console`.

### findings

> **findings**: [`FindingsSDK`](FindingsSDK.md)

The SDK for the Findings service.

### requests

> **requests**: [`RequestsSDK`](RequestsSDK.md)

The SDK for the Requests services

### asString()

Converts bytes to a string.

Unprintable characters will be replaced with `�`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | [`Bytes`](Bytes.md) |

#### Returns

`string`
