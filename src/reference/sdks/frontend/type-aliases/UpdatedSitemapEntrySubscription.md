[@caido/sdk-frontend](../index.md) / UpdatedSitemapEntrySubscription

# Type Alias: UpdatedSitemapEntrySubscription

> **UpdatedSitemapEntrySubscription**: `object`

## Type declaration

### updatedSitemapEntry

> **updatedSitemapEntry**: `object`

### updatedSitemapEntry.ancestorIds

> **ancestorIds**: `string`[]

### updatedSitemapEntry.oldRequest?

> `optional` **oldRequest**: `object` \| `null`

### updatedSitemapEntry.requestEdge

> **requestEdge**: `object`

### updatedSitemapEntry.requestEdge.\_\_typename

> **\_\_typename**: `"RequestEdge"`

### updatedSitemapEntry.requestEdge.cursor

> **cursor**: `string`

### updatedSitemapEntry.requestEdge.node

> **node**: `object`

### updatedSitemapEntry.requestEdge.node.\_\_typename

> **\_\_typename**: `"Request"`

### updatedSitemapEntry.requestEdge.node.alteration

> **alteration**: [`Alteration`](Alteration.md)

### updatedSitemapEntry.requestEdge.node.createdAt

> **createdAt**: `Date`

### updatedSitemapEntry.requestEdge.node.edited

> **edited**: `boolean`

### updatedSitemapEntry.requestEdge.node.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### updatedSitemapEntry.requestEdge.node.host

> **host**: `string`

### updatedSitemapEntry.requestEdge.node.id

> **id**: `string`

### updatedSitemapEntry.requestEdge.node.isTls

> **isTls**: `boolean`

### updatedSitemapEntry.requestEdge.node.length

> **length**: `number`

### updatedSitemapEntry.requestEdge.node.metadata

> **metadata**: `object`

### updatedSitemapEntry.requestEdge.node.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### updatedSitemapEntry.requestEdge.node.metadata.color?

> `optional` **color**: `string` \| `null`

### updatedSitemapEntry.requestEdge.node.metadata.id

> **id**: `string`

### updatedSitemapEntry.requestEdge.node.method

> **method**: `string`

### updatedSitemapEntry.requestEdge.node.path

> **path**: `string`

### updatedSitemapEntry.requestEdge.node.port

> **port**: `number`

### updatedSitemapEntry.requestEdge.node.query

> **query**: `string`

### updatedSitemapEntry.requestEdge.node.response?

> `optional` **response**: `object` \| `null`

### updatedSitemapEntry.requestEdge.node.source

> **source**: [`Source`](Source.md)

### updatedSitemapEntry.sitemapEntryEdge

> **sitemapEntryEdge**: `object`

### updatedSitemapEntry.sitemapEntryEdge.\_\_typename

> **\_\_typename**: `"SitemapEntryEdge"`

### updatedSitemapEntry.sitemapEntryEdge.cursor

> **cursor**: `string`

### updatedSitemapEntry.sitemapEntryEdge.node

> **node**: `object`

### updatedSitemapEntry.sitemapEntryEdge.node.\_\_typename

> **\_\_typename**: `"SitemapEntry"`

### updatedSitemapEntry.sitemapEntryEdge.node.hasDescendants

> **hasDescendants**: `boolean`

### updatedSitemapEntry.sitemapEntryEdge.node.id

> **id**: `string`

### updatedSitemapEntry.sitemapEntryEdge.node.kind

> **kind**: [`SitemapEntryKind`](SitemapEntryKind.md)

### updatedSitemapEntry.sitemapEntryEdge.node.label

> **label**: `string`

### updatedSitemapEntry.sitemapEntryEdge.node.metadata?

> `optional` **metadata**: `object` \| `null`

### updatedSitemapEntry.sitemapEntryEdge.node.parentId?

> `optional` **parentId**: `string` \| `null`

### updatedSitemapEntry.snapshot

> **snapshot**: `number`
