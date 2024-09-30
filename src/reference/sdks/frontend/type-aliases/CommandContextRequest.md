[@caido/sdk-frontend](../index.md) / CommandContextRequest

# Type Alias: CommandContextRequest

> **CommandContextRequest**: `object`

The context for a command that is executed on a request pane.

## Type declaration

### request

> **request**: `object`

The request that is currently open in the request pane.

### request.host

> **host**: `string`

### request.isTls

> **isTls**: `boolean`

### request.path

> **path**: `string`

### request.port

> **port**: `number`

### request.query

> **query**: `string`

### request.raw

> **raw**: `string`

### selection

> **selection**: `string`

The currently selected text in the request pane.

### type

> **type**: `"RequestContext"`
