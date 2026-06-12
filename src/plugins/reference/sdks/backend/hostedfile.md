# HostedFile

### HostedFile

> **HostedFile** = `object`

A hosted file.

#### Properties

##### id

> **id**: `string`

The unique Caido [ID](shared.md#id) of the project.

##### name

> **name**: `string`

The name of the project.

##### path

> **path**: `string`

The path of the file.

***

### HostedFileSDK

> **HostedFileSDK** = `object`

The SDK for the HostedFile service.

#### Methods

##### create()

> **create**(`spec`: [`HostedFileSpec`](#hostedfilespec)): `Promise`\<[`HostedFile`](#hostedfile)\>

Create a hosted file.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | [`HostedFileSpec`](#hostedfilespec) |

###### Returns

`Promise`\<[`HostedFile`](#hostedfile)\>

###### Example

```js
await sdk.hostedFile.create({ name: "My File", content: "Hello, world!" });
```

##### getAll()

> **getAll**(): `Promise`\<[`HostedFile`](#hostedfile)[]\>

Get all hosted files.

###### Returns

`Promise`\<[`HostedFile`](#hostedfile)[]\>

###### Example

```js
await sdk.hostedFile.getAll();
```

***

### HostedFileSpec

> **HostedFileSpec** = `object`

A specification for creating a hosted file.

#### Properties

##### content

> **content**: [`Bytes`](shared.md#bytes)

##### name

> **name**: `string`
