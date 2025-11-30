# Shared

### Bytes

> **Bytes** = `string` \| `number`[] \| `Uint8Array`

Types that can be converted to bytes in inputs.

***

### Cursor

> **Cursor** = `string` & `object`

A cursor for pagination.

#### Type Declaration

##### \_\_cursor?

> `optional` **\_\_cursor**: `never`

***

### ID

> **ID** = `string` & `object`

A unique identifier.

#### Type Declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

***

### RawOption

> **RawOption** = `object`

Option to return raw value

#### Properties

##### raw

> **raw**: `true`

***

### RequestSource

> **RequestSource** = [`ID`](#id) \| [`Request`](requests.md#request) \| [`RequestSpec`](requests.md#requestspec) \| [`RequestSpecRaw`](requests.md#requestspecraw)

The source of a request.
