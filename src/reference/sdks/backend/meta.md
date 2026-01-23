# Meta

### MetaSDK

> **MetaSDK** = `object`

The SDK for metadata information about the plugin.

#### Methods

##### assetsPath()

> **assetsPath**(): `string`

The directory of the plugin's assets in Caido Data.
You can read static data from your plugin in this directory.
You shouldn't write anything there, as the contents can be reset at any time.

###### Returns

`string`

##### db()

> **db**(): `Promise`\<[`Database`](other.md#database)\>

Get a sqlite database for the plugin stored in Caido Data.
You can use this to store data related to your plugin.

###### Returns

`Promise`\<[`Database`](other.md#database)\>

##### id()

> **id**(): `string`

The id of the plugin.

###### Returns

`string`

##### path()

> **path**(): `string`

The directory of the plugin in Caido Data.
You can store data related to your plugin in this directory.

###### Returns

`string`

##### updateAvailable()

> **updateAvailable**(): `Promise`\<`boolean`\>

Check if an update is available for the plugin.

###### Returns

`Promise`\<`boolean`\>

###### Throws

If Caido Cloud is offline.

##### version()

> **version**(): `string`

Get the version of the plugin.
This uses the semver format.

###### Returns

`string`
