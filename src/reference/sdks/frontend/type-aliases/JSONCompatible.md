[@caido/sdk-frontend](../index.md) / JSONCompatible

# Type Alias: JSONCompatible\<T\>

> **JSONCompatible**\<`T`\>: `unknown` *extends* `T` ? `never` : `{ [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]> }`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
