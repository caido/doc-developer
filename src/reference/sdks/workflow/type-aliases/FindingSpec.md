[@caido/sdk-workflow](../index.md) / FindingSpec

# Type Alias: FindingSpec

> **FindingSpec**: `object`

A mutable Finding not yet created.

## Type declaration

### dedupeKey?

> `optional` **dedupeKey**: `string`

Deduplication key for findings.
If a finding with the same dedupe key already exists, it will not be created.

### description?

> `optional` **description**: `string`

The description of the finding.

### reporter

> **reporter**: `string`

The name of the reporter.
It will be used to group findings.

### request

> **request**: [`Request`](Request.md)

The associated [Request](Request.md).

### title

> **title**: `string`

The title of the finding.
