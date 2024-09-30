[@caido/sdk-backend](../index.md) / SDK

# Interface: SDK\<API, Events\>

The SDK object available to all scripts.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

## Properties

### api

> **api**: [`APISDK`](../type-aliases/APISDK.md)\<`API`, `Events`\>

The SDK for the API RPC service.

***

### console

> **console**: [`Console`](../type-aliases/Console.md)

The console.

This is currently the same as the global `console`.

***

### events

> **events**: [`EventsSDK`](../type-aliases/EventsSDK.md)\<`API`, `Events`\>

The SDK for the Events service.

***

### findings

> **findings**: [`FindingsSDK`](../type-aliases/FindingsSDK.md)

The SDK for the Findings service.

***

### meta

> **meta**: [`MetaSDK`](../type-aliases/MetaSDK.md)

The SDK for metadata information about the plugin.

***

### requests

> **requests**: [`RequestsSDK`](../type-aliases/RequestsSDK.md)

The SDK for the Requests services
