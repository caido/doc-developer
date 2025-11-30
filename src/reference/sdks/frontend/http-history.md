# HTTP History

### HTTPHistorySDK

> **HTTPHistorySDK** = `object`

Utilities to interact with the HTTP History page.

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

##### addResponseEditorExtension()

> **addResponseEditorExtension**: (`extension`: `Extension`) => `void`

Add an extension to the response editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `extension` | `Extension` | The extension to add. |

###### Returns

`void`

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`HTTPHistorySlotContent`](other.md#httphistoryslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
sdk.httpHistory.addToSlot(HTTPHistorySlot.ToolbarPrimary, {
  type: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});

sdk.httpHistory.addToSlot(HTTPHistorySlot.ToolbarPrimary, {
  type: "Custom",
  definition: MyComponent,
});

sdk.httpHistory.addToSlot(HTTPHistorySlot.ToolbarPrimary, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

##### getQuery()

> **getQuery**: () => [`HTTPQL`](utils.md#httpql)

Get the current HTTPQL query.

###### Returns

[`HTTPQL`](utils.md#httpql)

The current HTTPQL query.

##### getScopeId()

> **getScopeId**: () => [`ID`](utils.md#id) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](utils.md#id) \| `undefined`

The current scope ID.

##### scrollTo()

> **scrollTo**: (`id`: [`ID`](utils.md#id)) => `void`

Scrolls the HTTP History table to a specific entry.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the entry to scroll to. |

###### Returns

`void`

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](utils.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the HTTP History table results.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`HTTPQL`](utils.md#httpql) | The HTTPQL query. |

###### Returns

`void`

##### setScope()

> **setScope**: (`id`: [`ID`](utils.md#id) \| `undefined`) => `Promise`\<`void`\>

Set the current scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` | The ID of the scope to set. |

###### Returns

`Promise`\<`void`\>

***

### HTTPHistorySlot

> `const` **HTTPHistorySlot**: `object`

The slots in the HTTP History UI.

#### Type Declaration

##### ToolbarPrimary

> `readonly` **ToolbarPrimary**: `"toolbar-primary"`

The toolbar.
