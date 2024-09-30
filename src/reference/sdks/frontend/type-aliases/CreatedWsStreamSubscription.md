[@caido/sdk-frontend](../index.md) / CreatedWsStreamSubscription

# Type Alias: CreatedWsStreamSubscription

> **CreatedWsStreamSubscription**: `object`

## Type declaration

### createdStream

> **createdStream**: `object`

### createdStream.snapshot

> **snapshot**: `number`

### createdStream.streamEdge

> **streamEdge**: `object`

### createdStream.streamEdge.\_\_typename

> **\_\_typename**: `"StreamEdge"`

### createdStream.streamEdge.cursor

> **cursor**: `string`

### createdStream.streamEdge.node

> **node**: `object`

### createdStream.streamEdge.node.\_\_typename

> **\_\_typename**: `"Stream"`

### createdStream.streamEdge.node.createdAt

> **createdAt**: `Date`

### createdStream.streamEdge.node.direction

> **direction**: [`StreamDirection`](StreamDirection.md)

### createdStream.streamEdge.node.host

> **host**: `string`

### createdStream.streamEdge.node.id

> **id**: `string`

### createdStream.streamEdge.node.isTls

> **isTls**: `boolean`

### createdStream.streamEdge.node.path

> **path**: `string`

### createdStream.streamEdge.node.port

> **port**: `number`

### createdStream.streamEdge.node.protocol

> **protocol**: [`StreamProtocol`](StreamProtocol.md)

### createdStream.streamEdge.node.source

> **source**: [`Source`](Source.md)
