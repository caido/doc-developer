[@caido/sdk-frontend](../index.md) / CreatedAutomateEntryRequestSubscription

# Type Alias: CreatedAutomateEntryRequestSubscription

> **CreatedAutomateEntryRequestSubscription**: `object`

## Type declaration

### createdAutomateEntryRequest

> **createdAutomateEntryRequest**: `object`

### createdAutomateEntryRequest.automateEntryRequestEdge

> **automateEntryRequestEdge**: `object`

### createdAutomateEntryRequest.automateEntryRequestEdge.\_\_typename

> **\_\_typename**: `"AutomateEntryRequestEdge"`

### createdAutomateEntryRequest.automateEntryRequestEdge.cursor

> **cursor**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node

> **node**: `object`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.\_\_typename

> **\_\_typename**: `"AutomateEntryRequest"`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.automateEntryId

> **automateEntryId**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.error?

> `optional` **error**: `string` \| `null`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.payloads

> **payloads**: `object`[]

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request

> **request**: `object`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.\_\_typename

> **\_\_typename**: `"Request"`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.alteration

> **alteration**: [`Alteration`](Alteration.md)

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.createdAt

> **createdAt**: `Date`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.edited

> **edited**: `boolean`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.fileExtension?

> `optional` **fileExtension**: `string` \| `null`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.host

> **host**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.id

> **id**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.isTls

> **isTls**: `boolean`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.length

> **length**: `number`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.metadata

> **metadata**: `object`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.metadata.\_\_typename

> **\_\_typename**: `"RequestMetadata"`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.metadata.color?

> `optional` **color**: `string` \| `null`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.metadata.id

> **id**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.method

> **method**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.path

> **path**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.port

> **port**: `number`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.query

> **query**: `string`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.response?

> `optional` **response**: `object` \| `null`

### createdAutomateEntryRequest.automateEntryRequestEdge.node.request.source

> **source**: [`Source`](Source.md)

### createdAutomateEntryRequest.automateEntryRequestEdge.node.sequenceId

> **sequenceId**: `string`

### createdAutomateEntryRequest.snapshot

> **snapshot**: `number`
