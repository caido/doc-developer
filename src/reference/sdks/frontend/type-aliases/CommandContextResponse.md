[@caido/sdk-frontend](../index.md) / CommandContextResponse

# Type Alias: CommandContextResponse

> **CommandContextResponse**: `object`

The context for a command that is executed on a response pane.

## Type declaration

### request

> **request**: `object`

The request that is associated with the response.

### request.host

> **host**: `string`

### request.id

> **id**: `string`

### request.isTls

> **isTls**: `boolean`

### request.path

> **path**: `string`

### request.port

> **port**: `number`

### request.query

> **query**: `string`

### response

> **response**: `object`

The response that is currently open in the response pane.

### response.id

> **id**: `string`

### response.raw

> **raw**: `string`

### response.roundtripTime

> **roundtripTime**: `number`

### response.statusCode

> **statusCode**: `number`

### selection

> **selection**: `string`

The currently selected text in the response pane.

### type

> **type**: `"ResponseContext"`
