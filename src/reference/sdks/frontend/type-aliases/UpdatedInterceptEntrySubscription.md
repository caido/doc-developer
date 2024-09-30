[@caido/sdk-frontend](../index.md) / UpdatedInterceptEntrySubscription

# Type Alias: UpdatedInterceptEntrySubscription

> **UpdatedInterceptEntrySubscription**: `object`

## Type declaration

### updatedInterceptEntry

> **updatedInterceptEntry**: `object`

### updatedInterceptEntry.interceptEntryEdge

> **interceptEntryEdge**: `object`

### updatedInterceptEntry.interceptEntryEdge.\_\_typename

> **\_\_typename**: `"InterceptEntryEdge"`

### updatedInterceptEntry.interceptEntryEdge.cursor

> **cursor**: `string`

### updatedInterceptEntry.interceptEntryEdge.node

> **node**: `object`

### updatedInterceptEntry.interceptEntryEdge.node.\_\_typename

> **\_\_typename**: `"InterceptEntry"`

### updatedInterceptEntry.interceptEntryEdge.node.id

> **id**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request

> **request**: `object`

### updatedInterceptEntry.interceptEntryEdge.node.request.\_\_typename

> **\_\_typename**: `"Request"`

### updatedInterceptEntry.interceptEntryEdge.node.request.alteration

> **alteration**: [`Alteration`](Alteration.md)

### updatedInterceptEntry.interceptEntryEdge.node.request.createdAt

> **createdAt**: `Date`

### updatedInterceptEntry.interceptEntryEdge.node.request.edited

> **edited**: `boolean`

### updatedInterceptEntry.interceptEntryEdge.node.request.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### updatedInterceptEntry.interceptEntryEdge.node.request.host

> **host**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.id

> **id**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.isTls

> **isTls**: `boolean`

### updatedInterceptEntry.interceptEntryEdge.node.request.length

> **length**: `number`

### updatedInterceptEntry.interceptEntryEdge.node.request.metadata

> **metadata**: `object`

### updatedInterceptEntry.interceptEntryEdge.node.request.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### updatedInterceptEntry.interceptEntryEdge.node.request.metadata.color?

> `optional` **color**: `string` \| `null`

### updatedInterceptEntry.interceptEntryEdge.node.request.metadata.id

> **id**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.method

> **method**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.path

> **path**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.port

> **port**: `number`

### updatedInterceptEntry.interceptEntryEdge.node.request.query

> **query**: `string`

### updatedInterceptEntry.interceptEntryEdge.node.request.response?

> `optional` **response**: `object` \| `null`

### updatedInterceptEntry.interceptEntryEdge.node.request.source

> **source**: [`Source`](Source.md)

### updatedInterceptEntry.snapshot

> **snapshot**: `number`
