[@caido/sdk-frontend](../index.md) / CreatedDataExportTaskSubscription

# Type Alias: CreatedDataExportTaskSubscription

> **CreatedDataExportTaskSubscription**: `object`

## Type declaration

### createdDataExportTask

> **createdDataExportTask**: `object`

### createdDataExportTask.exportTaskEdge

> **exportTaskEdge**: `object`

### createdDataExportTask.exportTaskEdge.cursor

> **cursor**: `string`

### createdDataExportTask.exportTaskEdge.node

> **node**: `object`

### createdDataExportTask.exportTaskEdge.node.\_\_typename

> **\_\_typename**: `"DataExportTask"`

### createdDataExportTask.exportTaskEdge.node.export

> **export**: `object`

### createdDataExportTask.exportTaskEdge.node.export.\_\_typename

> **\_\_typename**: `"DataExport"`

### createdDataExportTask.exportTaskEdge.node.export.createdAt

> **createdAt**: `Date`

### createdDataExportTask.exportTaskEdge.node.export.error?

> `optional` **error**: `string` \| `null`

### createdDataExportTask.exportTaskEdge.node.export.format

> **format**: [`DataExportFormat`](DataExportFormat.md)

### createdDataExportTask.exportTaskEdge.node.export.id

> **id**: `string`

### createdDataExportTask.exportTaskEdge.node.export.name

> **name**: `string`

### createdDataExportTask.exportTaskEdge.node.export.path

> **path**: `string`

### createdDataExportTask.exportTaskEdge.node.export.size

> **size**: `number`

### createdDataExportTask.exportTaskEdge.node.export.status

> **status**: [`DataExportStatus`](DataExportStatus.md)

### createdDataExportTask.exportTaskEdge.node.id

> **id**: `string`
