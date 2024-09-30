[@caido/sdk-frontend](../index.md) / CreatedRequestSubscription

# Type Alias: CreatedRequestSubscription

> **CreatedRequestSubscription**: `object`

## Type declaration

### createdRequest

> **createdRequest**: `object`

### createdRequest.requestEdge

> **requestEdge**: `object`

### createdRequest.requestEdge.\_\_typename

> **\_\_typename**: `"RequestEdge"`

### createdRequest.requestEdge.cursor

> **cursor**: `string`

### createdRequest.requestEdge.node

> **node**: `object`

### createdRequest.requestEdge.node.\_\_typename

> **\_\_typename**: `"Request"`

### createdRequest.requestEdge.node.alteration

> **alteration**: [`Alteration`](Alteration.md)

### createdRequest.requestEdge.node.createdAt

> **createdAt**: `Date`

### createdRequest.requestEdge.node.edited

> **edited**: `boolean`

### createdRequest.requestEdge.node.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### createdRequest.requestEdge.node.host

> **host**: `string`

### createdRequest.requestEdge.node.id

> **id**: `string`

### createdRequest.requestEdge.node.isTls

> **isTls**: `boolean`

### createdRequest.requestEdge.node.length

> **length**: `number`

### createdRequest.requestEdge.node.metadata

> **metadata**: `object`

### createdRequest.requestEdge.node.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### createdRequest.requestEdge.node.metadata.color?

> `optional` **color**: `string` \| `null`

### createdRequest.requestEdge.node.metadata.id

> **id**: `string`

### createdRequest.requestEdge.node.method

> **method**: `string`

### createdRequest.requestEdge.node.path

> **path**: `string`

### createdRequest.requestEdge.node.port

> **port**: `number`

### createdRequest.requestEdge.node.query

> **query**: `string`

### createdRequest.requestEdge.node.response?

> `optional` **response**: `object` \| `null`

### createdRequest.requestEdge.node.source

> **source**: [`Source`](Source.md)

### createdRequest.snapshot

> **snapshot**: `number`
