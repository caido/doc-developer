# JSON

### JSONCompatible

> **JSONCompatible**\<`T`\> = `unknown` *extends* `T` ? `never` : `{ [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]> }`

A type that ensures all properties of T are JSON-compatible.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### JSONValue

> **JSONValue** = [`JSONPrimitive`](other.md#jsonprimitive) \| [`JSONValue`](#jsonvalue)[] \| \{\[`key`: `string`\]: [`JSONValue`](#jsonvalue); \}

A JSON-serializable value.
