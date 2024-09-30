[@caido/sdk-frontend](../index.md) / CreatedSitemapEntrySubscription

# Type Alias: CreatedSitemapEntrySubscription

> **CreatedSitemapEntrySubscription**: `object`

## Type declaration

### createdSitemapEntry

> **createdSitemapEntry**: `object`

### createdSitemapEntry.ancestorIds

> **ancestorIds**: `string`[]

### createdSitemapEntry.requestEdge?

> `optional` **requestEdge**: `object` \| `null`

### createdSitemapEntry.sitemapEntryEdge

> **sitemapEntryEdge**: `object`

### createdSitemapEntry.sitemapEntryEdge.\_\_typename

> **\_\_typename**: `"SitemapEntryEdge"`

### createdSitemapEntry.sitemapEntryEdge.cursor

> **cursor**: `string`

### createdSitemapEntry.sitemapEntryEdge.node

> **node**: `object`

### createdSitemapEntry.sitemapEntryEdge.node.\_\_typename

> **\_\_typename**: `"SitemapEntry"`

### createdSitemapEntry.sitemapEntryEdge.node.hasDescendants

> **hasDescendants**: `boolean`

### createdSitemapEntry.sitemapEntryEdge.node.id

> **id**: `string`

### createdSitemapEntry.sitemapEntryEdge.node.kind

> **kind**: [`SitemapEntryKind`](SitemapEntryKind.md)

### createdSitemapEntry.sitemapEntryEdge.node.label

> **label**: `string`

### createdSitemapEntry.sitemapEntryEdge.node.metadata?

> `optional` **metadata**: `object` \| `null`

### createdSitemapEntry.sitemapEntryEdge.node.parentId?

> `optional` **parentId**: `string` \| `null`

### createdSitemapEntry.snapshot

> **snapshot**: `number`
