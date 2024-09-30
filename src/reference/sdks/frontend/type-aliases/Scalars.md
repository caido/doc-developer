[@caido/sdk-frontend](../index.md) / Scalars

# Type Alias: Scalars

> **Scalars**: `object`

All built-in and custom scalars, mapped to their actual values

## Type declaration

### Alias

> **Alias**: `object`

### Alias.input

> **input**: `string`

### Alias.output

> **output**: `string`

### Blob

> **Blob**: `object`

### Blob.input

> **input**: `string`

### Blob.output

> **output**: `string`

### Boolean

> **Boolean**: `object`

### Boolean.input

> **input**: `boolean`

### Boolean.output

> **output**: `boolean`

### DateTime

> **DateTime**: `object`

A datetime with timezone offset.

The input is a string in RFC3339 format, e.g. "2022-01-12T04:00:19.12345Z"
or "2022-01-12T04:00:19+03:00". The output is also a string in RFC3339
format, but it is always normalized to the UTC (Z) offset, e.g.
"2022-01-12T04:00:19.12345Z".

### DateTime.input

> **input**: `Date`

### DateTime.output

> **output**: `Date`

### Float

> **Float**: `object`

### Float.input

> **input**: `number`

### Float.output

> **output**: `number`

### HTTPQL

> **HTTPQL**: `object`

### HTTPQL.input

> **input**: `string`

### HTTPQL.output

> **output**: `string`

### ID

> **ID**: `object`

### ID.input

> **input**: `string`

### ID.output

> **output**: `string`

### Image

> **Image**: `object`

### Image.input

> **input**: `string`

### Image.output

> **output**: `string`

### Int

> **Int**: `object`

### Int.input

> **input**: `number`

### Int.output

> **output**: `number`

### JSON

> **JSON**: `object`

A scalar that can represent any JSON value.

### JSON.input

> **input**: [`JSONValue`](JSONValue.md)

### JSON.output

> **output**: [`JSONValue`](JSONValue.md)

### JsonObject

> **JsonObject**: `object`

### JsonObject.input

> **input**: [`JSONValue`](JSONValue.md)

### JsonObject.output

> **output**: [`JSONValue`](JSONValue.md)

### JsonRaw

> **JsonRaw**: `object`

### JsonRaw.input

> **input**: `string`

### JsonRaw.output

> **output**: `string`

### Port

> **Port**: `object`

### Port.input

> **input**: `number`

### Port.output

> **output**: `number`

### Rank

> **Rank**: `object`

### Rank.input

> **input**: `string`

### Rank.output

> **output**: `string`

### Sensitive

> **Sensitive**: `object`

### Sensitive.input

> **input**: `string`

### Sensitive.output

> **output**: `string`

### Snapshot

> **Snapshot**: `object`

### Snapshot.input

> **input**: `number`

### Snapshot.output

> **output**: `number`

### String

> **String**: `object`

### String.input

> **input**: `string`

### String.output

> **output**: `string`

### Timestamp

> **Timestamp**: `object`

### Timestamp.input

> **input**: `Date`

### Timestamp.output

> **output**: `Date`

### Token

> **Token**: `object`

### Token.input

> **input**: `string`

### Token.output

> **output**: `string`

### Upload

> **Upload**: `object`

### Upload.input

> **input**: `File`

### Upload.output

> **output**: `File`

### Uri

> **Uri**: `object`

### Uri.input

> **input**: `string`

### Uri.output

> **output**: `string`

### Url

> **Url**: `object`

URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/)

### Url.input

> **input**: `string`

### Url.output

> **output**: `string`

### Version

> **Version**: `object`

### Version.input

> **input**: `string`

### Version.output

> **output**: `string`
