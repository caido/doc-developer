[@caido/sdk-frontend](../index.md) / CreatedFindingSubscription

# Type Alias: CreatedFindingSubscription

> **CreatedFindingSubscription**: `object`

## Type declaration

### createdFinding

> **createdFinding**: `object`

### createdFinding.findingEdge

> **findingEdge**: `object`

### createdFinding.findingEdge.cursor

> **cursor**: `string`

### createdFinding.findingEdge.node

> **node**: `object`

### createdFinding.findingEdge.node.createdAt

> **createdAt**: `Date`

### createdFinding.findingEdge.node.description?

> `optional` **description**: `string` \| `null`

### createdFinding.findingEdge.node.host

> **host**: `string`

### createdFinding.findingEdge.node.id

> **id**: `string`

### createdFinding.findingEdge.node.path

> **path**: `string`

### createdFinding.findingEdge.node.reporter

> **reporter**: `string`

### createdFinding.findingEdge.node.request

> **request**: `object`

### createdFinding.findingEdge.node.request.\_\_typename

> **\_\_typename**: `"Request"`

### createdFinding.findingEdge.node.request.alteration

> **alteration**: [`Alteration`](Alteration.md)

### createdFinding.findingEdge.node.request.createdAt

> **createdAt**: `Date`

### createdFinding.findingEdge.node.request.edited

> **edited**: `boolean`

### createdFinding.findingEdge.node.request.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### createdFinding.findingEdge.node.request.host

> **host**: `string`

### createdFinding.findingEdge.node.request.id

> **id**: `string`

### createdFinding.findingEdge.node.request.isTls

> **isTls**: `boolean`

### createdFinding.findingEdge.node.request.length

> **length**: `number`

### createdFinding.findingEdge.node.request.metadata

> **metadata**: `object`

### createdFinding.findingEdge.node.request.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### createdFinding.findingEdge.node.request.metadata.color?

> `optional` **color**: `string` \| `null`

### createdFinding.findingEdge.node.request.metadata.id

> **id**: `string`

### createdFinding.findingEdge.node.request.method

> **method**: `string`

### createdFinding.findingEdge.node.request.path

> **path**: `string`

### createdFinding.findingEdge.node.request.port

> **port**: `number`

### createdFinding.findingEdge.node.request.query

> **query**: `string`

### createdFinding.findingEdge.node.request.response?

> `optional` **response**: `object` \| `null`

### createdFinding.findingEdge.node.request.source

> **source**: [`Source`](Source.md)

### createdFinding.findingEdge.node.title

> **title**: `string`

### createdFinding.snapshot

> **snapshot**: `number`
