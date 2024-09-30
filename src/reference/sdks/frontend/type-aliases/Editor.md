[@caido/sdk-frontend](../index.md) / Editor

# Type Alias: Editor

> **Editor**: `object`

Generic editor interface.

## Type declaration

### focus()

> **focus**: () => `void`

Focus the editor.

#### Returns

`void`

### getSelectedText()

> **getSelectedText**: () => `string`

Get the currently selected text of the editor.

#### Returns

`string`

### isReadOnly()

> **isReadOnly**: () => `boolean`

Check whether the editor is read-only.

#### Returns

`boolean`

Whether the editor is read-only.

### replaceSelectedText()

> **replaceSelectedText**: (`text`) => `void`

Replace the currently selected text of the editor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to replace the selection with. |

#### Returns

`void`
