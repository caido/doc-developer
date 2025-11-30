# Projects

### Project

> **Project** = `object`

A saved immutable Project.

#### Methods

##### getId()

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the project.

###### Returns

[`ID`](shared.md#id)

##### getName()

> **getName**(): `string`

The name of the project.

###### Returns

`string`

##### getPath()

> **getPath**(): `string`

The directory where the project is located.

###### Returns

`string`

##### getStatus()

> **getStatus**(): [`ProjectStatus`](#projectstatus)

The status of the project.

###### Returns

[`ProjectStatus`](#projectstatus)

##### getVersion()

> **getVersion**(): `string`

The version of the project.
The format is `MAJOR.MINOR.PATCH`.

###### Returns

`string`

***

### ProjectsSDK

> **ProjectsSDK** = `object`

The SDK for the Projects service.

#### Methods

##### getCurrent()

> **getCurrent**(): `Promise`\<[`Project`](#project) \| `undefined`\>

Get the currently selected [Project](#project) if any.

###### Returns

`Promise`\<[`Project`](#project) \| `undefined`\>

###### Example

```js
await sdk.projects.getCurrent();
```

***

### ProjectStatus

> **ProjectStatus** = `"ready"` \| `"restoring"` \| `"error"`

A [Project](#project) status.
