# Intercept

### InterceptMessageId

> **InterceptMessageId** = `string` & `object`

A unique intercept message identifier.

#### Type Declaration

##### \_\_interceptMessageId?

> `optional` **\_\_interceptMessageId**: `never`

***

### InterceptPageContext

> **InterceptPageContext** = `object`

Intercept page context.

#### Properties

##### kind

> **kind**: `"Intercept"`

##### requestSelection

> **requestSelection**: [`Selection`](utils.md#selection)\<[`InterceptMessageId`](#interceptmessageid)\>

##### responseSelection

> **responseSelection**: [`Selection`](utils.md#selection)\<[`InterceptMessageId`](#interceptmessageid)\>

##### websocketSelection

> **websocketSelection**: [`Selection`](utils.md#selection)\<[`InterceptMessageId`](#interceptmessageid)\>

***

### InterceptSDK

> **InterceptSDK** = `object`

Utilities to interact with the Intercept page.

#### Properties

##### addRequestViewMode()

> **addRequestViewMode**: (`options`: [`RequestViewModeOptions`](request.md#requestviewmodeoptions)\<[`RequestWritableViewModeProps`](request.md#requestwritableviewmodeprops)\>) => `void`

Add a custom request view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RequestViewModeOptions`](request.md#requestviewmodeoptions)\<[`RequestWritableViewModeProps`](request.md#requestwritableviewmodeprops)\> | The view mode options. |

###### Returns

`void`

##### addResponseViewMode()

> **addResponseViewMode**: (`options`: [`ResponseViewModeOptions`](response.md#responseviewmodeoptions)\<[`ResponseViewModeProps`](response.md#responseviewmodeprops)\>) => `void`

Add a custom response view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ResponseViewModeOptions`](response.md#responseviewmodeoptions)\<[`ResponseViewModeProps`](response.md#responseviewmodeprops)\> | The view mode options. |

###### Returns

`void`

##### getScopeId()

> **getScopeId**: () => [`ID`](utils.md#id) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](utils.md#id) \| `undefined`

The current scope ID.

##### getSelectedRequest()

> **getSelectedRequest**: () => [`RequestFull`](request.md#requestfull) \| `undefined`

Get the currently selected request.

###### Returns

[`RequestFull`](request.md#requestfull) \| `undefined`

The currently selected request.

##### getSelectedResponse()

> **getSelectedResponse**: () => [`ResponseFull`](response.md#responsefull) \| `undefined`

Get the currently selected response.

###### Returns

[`ResponseFull`](response.md#responsefull) \| `undefined`

The currently selected response.

##### setScope()

> **setScope**: (`id`: [`ID`](utils.md#id) \| `undefined`) => `void`

Set the current scope.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` |

###### Returns

`void`
