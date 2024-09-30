[@caido/sdk-frontend](../index.md) / PromisifiedReturnType

# Type Alias: PromisifiedReturnType\<T\>

> **PromisifiedReturnType**\<`T`\>: `ReturnType`\<`T`\> *extends* `Promise`\<infer U\> ? `Promise`\<`U`\> : `Promise`\<`ReturnType`\<`T`\>\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `unknown` |
