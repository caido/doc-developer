[@caido/sdk-frontend](../index.md) / UpdatedRequestSubscription

# Type Alias: UpdatedRequestSubscription

> **UpdatedRequestSubscription**: `object`

## Type declaration

### updatedRequest

> **updatedRequest**: `object`

### updatedRequest.requestEdge

> **requestEdge**: `object`

### updatedRequest.requestEdge.\_\_typename

> **\_\_typename**: `"RequestEdge"`

### updatedRequest.requestEdge.cursor

> **cursor**: `string`

### updatedRequest.requestEdge.node

> **node**: `object`

### updatedRequest.requestEdge.node.\_\_typename

> **\_\_typename**: `"Request"`

### updatedRequest.requestEdge.node.alteration

> **alteration**: [`Alteration`](Alteration.md)

### updatedRequest.requestEdge.node.createdAt

> **createdAt**: `Date`

### updatedRequest.requestEdge.node.edited

> **edited**: `boolean`

### updatedRequest.requestEdge.node.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### updatedRequest.requestEdge.node.host

> **host**: `string`

### updatedRequest.requestEdge.node.id

> **id**: `string`

### updatedRequest.requestEdge.node.isTls

> **isTls**: `boolean`

### updatedRequest.requestEdge.node.length

> **length**: `number`

### updatedRequest.requestEdge.node.metadata

> **metadata**: `object`

### updatedRequest.requestEdge.node.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### updatedRequest.requestEdge.node.metadata.color?

> `optional` **color**: `string` \| `null`

### updatedRequest.requestEdge.node.metadata.id

> **id**: `string`

### updatedRequest.requestEdge.node.method

> **method**: `string`

### updatedRequest.requestEdge.node.path

> **path**: `string`

### updatedRequest.requestEdge.node.port

> **port**: `number`

### updatedRequest.requestEdge.node.query

> **query**: `string`

### updatedRequest.requestEdge.node.response?

> `optional` **response**: `object` \| `null`

### updatedRequest.requestEdge.node.source

> **source**: [`Source`](Source.md)

### updatedRequest.snapshot

> **snapshot**: `number`
