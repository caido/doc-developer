# Search

### SearchPageContext

> **SearchPageContext** = `object`

Search page context.

#### Properties

##### kind

> **kind**: `"Search"`

***

### SearchSDK

> **SearchSDK** = `object`

Utilities to interact with the Search page.

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

> **addRequestViewMode**: (`options`: [`RequestViewModeOptions`](request.md#requestviewmodeoptions)\<[`RequestReadableViewModeProps`](request.md#requestreadableviewmodeprops)\>) => `void`

Add a custom request view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RequestViewModeOptions`](request.md#requestviewmodeoptions)\<[`RequestReadableViewModeProps`](request.md#requestreadableviewmodeprops)\> | The view mode options. |

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

##### addToSlot()

> **addToSlot**: \<`T`\>(`slot`: `T`, `content`: [`SearchSlotContent`](#searchslotcontent)\[`T`\]) => `void`

Add content to a slot in the Search UI.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`SearchSlot`](#searchslot) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `slot` | `T` | The slot to add content to. |
| `content` | [`SearchSlotContent`](#searchslotcontent)\[`T`\] | The content to add. |

###### Returns

`void`

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

##### scrollTo()

> **scrollTo**: (`id`: [`ID`](utils.md#id)) => `void`

Scrolls the Search table to a specific request.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the request to scroll to. |

###### Returns

`void`

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](utils.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the search table results.

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

### SearchSlotContent

> **SearchSlotContent**\<`TProps`\> = \{ \[K in SearchSlot\]: ButtonSlotContent \| CustomSlotContent\<TProps\> \| CommandSlotContent \}

Content that can be added to search slots.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TProps` *extends* [`SlotContentPropsGroup`](slots.md#slotcontentpropsgroup) | [`SlotContentProps`](slots.md#slotcontentprops) |

***

### SearchSlot

> `const` **SearchSlot**: `object`

The slots in the Search UI.

#### Type Declaration

##### ToolbarPrimary

> `readonly` **ToolbarPrimary**: `"search-toolbar-primary"`

The primary slot in the search toolbar.
