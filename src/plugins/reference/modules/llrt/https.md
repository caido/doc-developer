[@caido/quickjs-types](../index.md) / llrt/https

# llrt/https

## Classes

### Agent

An `Agent` is responsible for managing connection persistence
and reuse for HTTP clients. Currently only a small subset of the options
are supported.

#### Constructors

##### Constructor

> **new Agent**(`opts?`: [`AgentOptions`](#agentoptions)): [`Agent`](#agent)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts?` | [`AgentOptions`](#agentoptions) |

###### Returns

[`Agent`](#agent)

## Interfaces

### AgentOptions

#### Properties

##### ca?

> `optional` **ca**: `string` \| [`Buffer`](buffer.md#buffer) \| (`string` \| [`Buffer`](buffer.md#buffer))[]

Optionally override the trusted CA certificates. Default is to trust
the well-known CAs curated by Mozilla. Mozilla's CAs are completely
replaced when CAs are explicitly specified using this option.

##### rejectUnauthorized?

> `optional` **rejectUnauthorized**: `boolean`

Whether to reject unauthorized certificates. Default is `true`.
