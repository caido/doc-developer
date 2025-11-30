# Window

### Dialog

> **Dialog** = `object`

A dialog instance that can be closed programmatically.

#### Properties

##### close()

> **close**: () => `void`

###### Returns

`void`

***

### DialogOptions

> **DialogOptions** = `object`

Options for configuring a dialog.

#### Properties

##### closable?

> `optional` **closable**: `boolean`

##### closeOnEscape?

> `optional` **closeOnEscape**: `boolean`

##### draggable?

> `optional` **draggable**: `boolean`

##### modal?

> `optional` **modal**: `boolean`

##### position?

> `optional` **position**: `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"center"` \| `"topleft"` \| `"topright"` \| `"bottomleft"` \| `"bottomright"`

##### title?

> `optional` **title**: `string`

***

### WindowSDK

> **WindowSDK** = `object`

Utilities to interact with the active page.

#### Properties

##### getActiveEditor()

> **getActiveEditor**: () => [`Editor`](editor.md#editor) \| `undefined`

Get the active editor.

###### Returns

[`Editor`](editor.md#editor) \| `undefined`

The active editor.

##### showDialog()

> **showDialog**: (`component`: [`ComponentDefinition`](utils.md#componentdefinition), `options?`: [`DialogOptions`](#dialogoptions)) => [`Dialog`](#dialog)

Show a dialog component.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `component` | [`ComponentDefinition`](utils.md#componentdefinition) | The custom slot content to display in the dialog. |
| `options?` | [`DialogOptions`](#dialogoptions) | Options for the dialog. |

###### Returns

[`Dialog`](#dialog)

A dialog object that can be used to close the dialog.

##### showToast()

> **showToast**: (`message`: `string`, `options?`: `object`) => `void`

Show a toast message.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The message to show. |
| `options?` | \{ `duration?`: `number`; `variant?`: `"success"` \| `"error"` \| `"warning"` \| `"info"`; \} | Options for the toast message. |
| `options.duration?` | `number` | The duration of the toast message in milliseconds. |
| `options.variant?` | `"success"` \| `"error"` \| `"warning"` \| `"info"` | The variant of the toast message. |

###### Returns

`void`
