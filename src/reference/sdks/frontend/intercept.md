# Intercept

### InterceptSDK

> **InterceptSDK** = `object`

Utilities to interact with the Intercept page.

#### Properties

##### addRequestViewMode()

> **addRequestViewMode**: (`options`: [`RequestViewModeOptions`](request.md#requestviewmodeoptions)) => `void`

Add a custom request view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RequestViewModeOptions`](request.md#requestviewmodeoptions) | The view mode options. |

###### Returns

`void`

##### getScopeId()

> **getScopeId**: () => [`ID`](utils.md#id) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](utils.md#id) \| `undefined`

The current scope ID.

##### setScope()

> **setScope**: (`id`: [`ID`](utils.md#id) \| `undefined`) => `void`

Set the current scope.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` |

###### Returns

`void`
