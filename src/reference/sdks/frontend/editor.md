# Editor

### Editor

> **Editor** = `object`

Generic editor interface.

#### Properties

##### focus()

> **focus**: () => `void`

Focus the editor.

###### Returns

`void`

##### getEditorView()

> **getEditorView**: () => `EditorView`

Get the editor view.

###### Returns

`EditorView`

The CodeMirror [EditorView](https://codemirror.net/docs/ref/#view.EditorView).

##### getSelectedText()

> **getSelectedText**: () => `string`

Get the currently selected text of the editor.

###### Returns

`string`

##### isReadOnly()

> **isReadOnly**: () => `boolean`

Check whether the editor is read-only.

###### Returns

`boolean`

Whether the editor is read-only.

##### replaceSelectedText()

> **replaceSelectedText**: (`text`: `string`) => `void`

Replace the currently selected text of the editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to replace the selection with. |

###### Returns

`void`

***

### HTTPRequestEditor

> **HTTPRequestEditor** = `object`

An HTTP request editor interface.

#### Properties

##### getEditorView()

> **getEditorView**: () => `EditorView`

Get the editor view.

###### Returns

`EditorView`

The CodeMirror [EditorView](https://codemirror.net/docs/ref/#view.EditorView).

##### getElement()

> **getElement**: () => `HTMLElement`

Get the editor element.
Append this to your DOM to display the editor.

###### Returns

`HTMLElement`

The editor element.

***

### HTTPResponseEditor

> **HTTPResponseEditor** = `object`

An HTTP response editor interface.

#### Properties

##### getEditorView()

> **getEditorView**: () => `EditorView`

Get the editor view.

###### Returns

`EditorView`

The CodeMirror [EditorView](https://codemirror.net/docs/ref/#view.EditorView).

##### getElement()

> **getElement**: () => `HTMLElement`

Get the editor element.
Append this to your DOM to display the editor.

###### Returns

`HTMLElement`

The editor element.
