[@caido/sdk-frontend](../index.md) / CreatedInterceptEntrySubscription

# Type Alias: CreatedInterceptEntrySubscription

> **CreatedInterceptEntrySubscription**: `object`

## Type declaration

### createdInterceptEntry

> **createdInterceptEntry**: `object`

### createdInterceptEntry.interceptEntryEdge

> **interceptEntryEdge**: `object`

### createdInterceptEntry.interceptEntryEdge.\_\_typename

> **\_\_typename**: `"InterceptEntryEdge"`

### createdInterceptEntry.interceptEntryEdge.cursor

> **cursor**: `string`

### createdInterceptEntry.interceptEntryEdge.node

> **node**: `object`

### createdInterceptEntry.interceptEntryEdge.node.\_\_typename

> **\_\_typename**: `"InterceptEntry"`

### createdInterceptEntry.interceptEntryEdge.node.id

> **id**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request

> **request**: `object`

### createdInterceptEntry.interceptEntryEdge.node.request.\_\_typename

> **\_\_typename**: `"Request"`

### createdInterceptEntry.interceptEntryEdge.node.request.alteration

> **alteration**: [`Alteration`](Alteration.md)

### createdInterceptEntry.interceptEntryEdge.node.request.createdAt

> **createdAt**: `Date`

### createdInterceptEntry.interceptEntryEdge.node.request.edited

> **edited**: `boolean`

### createdInterceptEntry.interceptEntryEdge.node.request.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### createdInterceptEntry.interceptEntryEdge.node.request.host

> **host**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.id

> **id**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.isTls

> **isTls**: `boolean`

### createdInterceptEntry.interceptEntryEdge.node.request.length

> **length**: `number`

### createdInterceptEntry.interceptEntryEdge.node.request.metadata

> **metadata**: `object`

### createdInterceptEntry.interceptEntryEdge.node.request.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### createdInterceptEntry.interceptEntryEdge.node.request.metadata.color?

> `optional` **color**: `string` \| `null`

### createdInterceptEntry.interceptEntryEdge.node.request.metadata.id

> **id**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.method

> **method**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.path

> **path**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.port

> **port**: `number`

### createdInterceptEntry.interceptEntryEdge.node.request.query

> **query**: `string`

### createdInterceptEntry.interceptEntryEdge.node.request.response?

> `optional` **response**: `object` \| `null`

### createdInterceptEntry.interceptEntryEdge.node.request.source

> **source**: [`Source`](Source.md)

### createdInterceptEntry.snapshot

> **snapshot**: `number`
