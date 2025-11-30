# Sitemap

### SitemapSDK

> **SitemapSDK** = `object`

Utilities to interact with the Sitemap page.

#### Properties

##### addRequestEditorExtension()

> **addRequestEditorExtension**: (`extension`: `Extension`) => `void`

Add an extension to the request editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `extension` | `Extension` | The extension to add. |

###### Returns

`void`

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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` | The ID of the scope to set. |

###### Returns

`void`
