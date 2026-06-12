# Files

### Asset

> **Asset** = `object`

A static asset.

#### Properties

##### asArrayBuffer()

> **asArrayBuffer**: () => `Promise`\<`ArrayBuffer`\>

###### Returns

`Promise`\<`ArrayBuffer`\>

##### asJson()

> **asJson**: \<`T`\>() => `Promise`\<`T`\>

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

###### Returns

`Promise`\<`T`\>

##### asReadableStream()

> **asReadableStream**: () => `ReadableStream`

###### Returns

`ReadableStream`

##### asString()

> **asString**: () => `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

***

### AssetsSDK

> **AssetsSDK** = `object`

Utilities to interact with the plugin's static assets.

#### Properties

##### get()

> **get**: (`path`: `string`) => `Promise`\<[`Asset`](#asset)\>

Get a file from the assets folder.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

###### Returns

`Promise`\<[`Asset`](#asset)\>

The asset file.

***

### FilesPageContext

> **FilesPageContext** = `object`

Files page context.

#### Properties

##### kind

> **kind**: `"Files"`

***

### FilesSDK

> **FilesSDK** = `object`

SDK for interacting with the Files page.

#### Properties

##### create()

> **create**: (`file`: `File`) => `Promise`\<[`HostedFile`](#hostedfile)\>

Uploads a file to the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `File` | The file to upload. |

###### Returns

`Promise`\<[`HostedFile`](#hostedfile)\>

The uploaded file.

##### delete()

> **delete**: (`id`: `string`) => `Promise`\<`void`\>

Deletes a file from the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the file to delete. |

###### Returns

`Promise`\<`void`\>

The deleted file.

##### getAll()

> **getAll**: () => [`HostedFile`](#hostedfile)[]

Gets all hosted files.

###### Returns

[`HostedFile`](#hostedfile)[]

The files.

##### onDeletedHostedFile()

> **onDeletedHostedFile**: (`callback`: (`fileId`: `string`) => `void`) => `ListenerHandle`

Listen for deleted hosted files.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`fileId`: `string`) => `void` | The callback function that receives the file ID. |

###### Returns

`ListenerHandle`

A handle object with a `stop` method to stop listening.

###### Example

```ts
const handle = sdk.files.onDeletedHostedFile((fileId) => {
  console.log(`Hosted file deleted:`, fileId);
});

// Later, stop listening
handle.stop();
```

##### onUpdatedHostedFile()

> **onUpdatedHostedFile**: (`callback`: (`event`: [`HostedFile`](#hostedfile)) => `void`) => `ListenerHandle`

Listen for updated hosted files.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`HostedFile`](#hostedfile)) => `void` | The callback function that receives the hosted file. |

###### Returns

`ListenerHandle`

A handle object with a `stop` method to stop listening.

###### Example

```ts
const handle = sdk.files.onUpdatedHostedFile((hostedFile) => {
  console.log(`Hosted file updated:`, hostedFile);
});

// Later, stop listening
handle.stop();
```

##### onUploadedHostedFile()

> **onUploadedHostedFile**: (`callback`: (`event`: [`HostedFile`](#hostedfile)) => `void`) => `ListenerHandle`

Listen for uploaded hosted files.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`HostedFile`](#hostedfile)) => `void` | The callback function that receives the hosted file. |

###### Returns

`ListenerHandle`

A handle object with a `stop` method to stop listening.

###### Example

```ts
const handle = sdk.files.onUploadedHostedFile((hostedFile) => {
  console.log(`Hosted file uploaded:`, hostedFile);
});

// Later, stop listening
handle.stop();
```

##### rename()

> **rename**: (`id`: `string`, `name`: `string`) => `Promise`\<[`HostedFile`](#hostedfile)\>

Renames a file on the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the file to rename. |
| `name` | `string` | The new name of the file. |

###### Returns

`Promise`\<[`HostedFile`](#hostedfile)\>

The renamed file.

***

### HostedFile

> **HostedFile** = `object`

A hosted file.

#### Properties

##### createdAt

> **createdAt**: `Date`

The date the file was created.

##### id

> **id**: `string`

The ID of the file.

##### name

> **name**: `string`

The name of the file.

##### path

> **path**: `string`

The path of the file.

##### size

> **size**: `number`

The size of the file in bytes.

##### status

> **status**: `"ready"` \| `"error"`

The status of the file.

##### updatedAt

> **updatedAt**: `Date`

The date the file was updated.
