[@caido/sdk-backend](../index.md) / MetaSDK

# Type Alias: MetaSDK

> **MetaSDK**: `object`

The SDK for metadata information about the plugin.

## Type declaration

### db()

Get a sqlite database for the plugin stored in Caido Data.
You can use this to store data related to your plugin.

#### Returns

`Promise`\<[`Database`](../classes/Database.md)\>

### path()

The directory of the plugin in Caido Data.
You can store data related to your plugin in this directory.

#### Returns

`string`
