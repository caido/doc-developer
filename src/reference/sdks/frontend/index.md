# @caido/sdk-frontend

This is the reference for the frontend SDK used by frontend plugins.
[Caido](type-aliases/Caido.md) is the main interface that provides access to various services and functionalities.

## Type Aliases

### BackendEndpoints

> **BackendEndpoints**: `object`

#### Index Signature

 \[`key`: `string`\]: (...`args`: `any`[]) => `any`

***

### BackendEvents

> **BackendEvents**: `object`

#### Index Signature

 \[`key`: `string`\]: (...`args`: `any`[]) => `void`

***

### Caido\<T, E\>

> **Caido**\<`T`, `E`\>: `object`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`BackendEndpoints`](index.md#backendendpoints) | `Record`\<`string`, `never`\> |
| `E` *extends* [`BackendEvents`](index.md#backendevents) | `Record`\<`string`, `never`\> |

#### Type declaration

##### backend

> **backend**: [`ToBackendRPC`](index.md#tobackendrpct-e)\<`T`, `E`\>

##### commandPalette

> **commandPalette**: `object`

Utilities to interact with the command palette.

##### commandPalette.register()

> **register**: (`commandId`: `string`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to register. |

###### Returns

`void`

##### commands

> **commands**: `object`

Utilities to interact with commands

##### commands.register()

> **register**: (`id`: `string`, `options`: `object`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the command. |
| `options` | `object` | Options for the command. |
| `options.group`? | `string` | The group this command belongs to. |
| `options.name` | `string` | The name of the command. |
| `options.run` | (`context`: [`CommandContext`](index.md#commandcontext)) => `void` | The function to run when the command is executed. |
| `options.when`? | (`context`: [`CommandContext`](index.md#commandcontext)) => `boolean` | A function to determine if the command is available. |

###### Returns

`void`

##### findings

> **findings**: `object`

Utilities to interact with findings

##### findings.createFinding()

> **createFinding**: (`requestId`: `string`, `options`: `object`) => `Promise`\<[`Finding`](index.md#finding) \| `undefined`\>

Create a finding.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestId` | `string` | The id of the request the finding is associated with. |
| `options` | `object` | Options for the finding. |
| `options.dedupeKey`? | `string` | The dedupe key of the finding. |
| `options.description`? | `string` | The description of the finding. |
| `options.reporter` | `string` | The reporter of the finding. |
| `options.title` | `string` | The title of the finding. |

###### Returns

`Promise`\<[`Finding`](index.md#finding) \| `undefined`\>

The created finding.

##### graphql

> **graphql**: `Sdk`

##### menu

> **menu**: `object`

Utilities to insert menu items and context-menus throughout the UI.

##### menu.registerItem()

> **registerItem**: (`item`: [`MenuItem`](index.md#menuitem)) => `void`

Register a menu item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`MenuItem`](index.md#menuitem) | The menu item to register. |

###### Returns

`void`

##### navigation

> **navigation**: `object`

Utilities to interact with navigation.

##### navigation.addPage()

> **addPage**: (`path`: `string`, `options`: `object`) => `void`

Add a page to the navigation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the page. |
| `options` | `object` | Options for the page. |
| `options.body` | `HTMLElement` | The body of the page. |
| `options.topbar`? | `HTMLElement` | The topbar of the page. |

###### Returns

`void`

##### navigation.goTo()

> **goTo**: (`path`: `string`) => `void`

Navigate to a path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to navigate to. |

###### Returns

`void`

##### scopes

> **scopes**: `object`

Utilities to interact with scopes

##### scopes.createScope()

> **createScope**: (`options`: `object`) => `Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

Create a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options for the scope. |
| `options.allowlist` | `string`[] | The list of included items in the scope. |
| `options.denylist` | `string`[] | The list of excluded items in the scope. |
| `options.name` | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

The created scope.

##### scopes.deleteScope()

> **deleteScope**: (`id`: `string`) => `Promise`\<`boolean`\>

Delete a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the scope to delete. |

###### Returns

`Promise`\<`boolean`\>

Whether the scope was deleted.

##### scopes.getScopes()

> **getScopes**: () => [`Scope`](index.md#scope)[]

Get all scopes.

###### Returns

[`Scope`](index.md#scope)[]

A list of scopes.

##### scopes.updateScope()

> **updateScope**: (`id`: `string`, `options`: `object`) => `Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

Update a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the scope to update. |
| `options` | `object` | Options for the scope. |
| `options.allowlist`? | `string`[] | The list of included items in the scope. |
| `options.denylist`? | `string`[] | The list of excluded items in the scope. |
| `options.name`? | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

The updated scope.

##### shortcuts

> **shortcuts**: `object`

Utilities to interact with shortcuts.

##### shortcuts.register()

> **register**: (`commandId`: `string`, `keys`: `string`[]) => `void`

Register a shortcut.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to run when the shortcut is triggered. |
| `keys` | `string`[] | The keys of the shortcut. |

###### Returns

`void`

##### sidebar

> **sidebar**: `object`

Utilities to interact with the sidebar.

##### sidebar.registerItem()

> **registerItem**: (`name`: `string`, `path`: `string`, `options`?: `object`) => [`SidebarItem`](index.md#sidebaritem)

Register a sidebar item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the sidebar item. |
| `path` | `string` | The path that the user will be navigated to when the sidebar item is clicked. |
| `options`? | `object` | Options for the sidebar item. |
| `options.group`? | `string` | The group the sidebar item belongs to. |
| `options.icon`? | `string` | The icon of the sidebar item. |
| `options.isExternal`? | `boolean` | Whether the path points to an external URL. |

###### Returns

[`SidebarItem`](index.md#sidebaritem)

The created sidebar item.

##### storage

> **storage**: `object`

Utilities to interact with frontend-plugin storage.

##### storage.get()

> **get**: () => [`JSONValue`](index.md#jsonvalue)

Get the storage.

###### Returns

[`JSONValue`](index.md#jsonvalue)

The storage.

##### storage.onChange()

> **onChange**: (`callback`: (`value`: [`JSONValue`](index.md#jsonvalue)) => `void`) => `void`

Subscribe to storage changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`value`: [`JSONValue`](index.md#jsonvalue)) => `void` | The callback to call when the storage changes. |

###### Returns

`void`

##### storage.set()

> **set**: \<`T`\>(`value`: [`JSONCompatible`](index.md#jsoncompatiblet)\<`T`\>) => `Promise`\<`void`\>

Set the storage.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`JSONCompatible`](index.md#jsoncompatiblet)\<`T`\> | The value to set the storage to |

###### Returns

`Promise`\<`void`\>

A promise that resolves when the storage has been set.

##### ui

> **ui**: `object`

Utilities to create UI components.

##### ui.button()

> **button**: (`options`?: `object`) => `HTMLElement`

Create a button.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the button. |
| `options.label`? | `string` | The label of the button. |
| `options.leadingIcon`? | `string` | The leading icon of the button. |
| `options.size`? | `"small"` \| `"medium"` \| `"large"` | The size of the button. |
| `options.trailingIcon`? | `string` | The trailing icon of the button. |
| `options.variant`? | `"primary"` \| `"secondary"` \| `"tertiary"` | The variant of the button. |

###### Returns

`HTMLElement`

The button element.

##### ui.card()

> **card**: (`options`?: `object`) => `HTMLElement`

Create a card.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the card. |
| `options.body`? | `HTMLElement` | The body of the card. |
| `options.footer`? | `HTMLElement` | The footer of the card. |
| `options.header`? | `HTMLElement` | The header of the card. |

###### Returns

`HTMLElement`

The card element.

##### ui.httpRequestEditor()

> **httpRequestEditor**: () => [`HTTPRequestEditor`](index.md#httprequesteditor-1)

Create an HTTP request editor

###### Returns

[`HTTPRequestEditor`](index.md#httprequesteditor-1)

The HTTP request editor.

##### ui.httpResponseEditor()

> **httpResponseEditor**: () => [`HTTPResponseEditor`](index.md#httpresponseeditor-1)

Create an HTTP response editor

###### Returns

[`HTTPResponseEditor`](index.md#httpresponseeditor-1)

The HTTP response editor.

##### ui.well()

> **well**: (`options`?: `object`) => `HTMLElement`

Create a well.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the well. |
| `options.body`? | `HTMLElement` | The body of the well. |
| `options.footer`? | `HTMLElement` | The footer of the well. |
| `options.header`? | `HTMLElement` | The header of the well. |

###### Returns

`HTMLElement`

The well element.

##### window

> **window**: `object`

Utilities to interact with the active page.

##### window.getActiveEditor()

> **getActiveEditor**: () => [`Editor`](index.md#editor) \| `undefined`

Get the active editor.

###### Returns

[`Editor`](index.md#editor) \| `undefined`

The active editor.

##### window.showToast()

> **showToast**: (`message`: `string`, `options`?: `object`) => `void`

Show a toast message.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The message to show. |
| `options`? | `object` | Options for the toast message. |
| `options.duration`? | `number` | The duration of the toast message in milliseconds. |
| `options.variant`? | `"success"` \| `"error"` \| `"warning"` \| `"info"` | The variant of the toast message. |

###### Returns

`void`

***

### CommandContext

> **CommandContext**: [`CommandContextBase`](index.md#commandcontextbase) \| [`CommandContextRequestRow`](index.md#commandcontextrequestrow) \| [`CommandContextRequest`](index.md#commandcontextrequest) \| [`CommandContextResponse`](index.md#commandcontextresponse)

***

### CommandContextBase

> **CommandContextBase**: `object`

The base context for a command.
This context is used for commands that are not executed in a specific context, such as via shortcuts and the command palette.

#### Type declaration

##### type

> **type**: `"BaseContext"`

***

### CommandContextRequest

> **CommandContextRequest**: `object`

The context for a command that is executed on a request pane.

#### Type declaration

##### request

> **request**: `object`

The request that is currently open in the request pane.

##### request.host

> **host**: `string`

##### request.isTls

> **isTls**: `boolean`

##### request.path

> **path**: `string`

##### request.port

> **port**: `number`

##### request.query

> **query**: `string`

##### request.raw

> **raw**: `string`

##### selection

> **selection**: `string`

The currently selected text in the request pane.

##### type

> **type**: `"RequestContext"`

***

### CommandContextRequestRow

> **CommandContextRequestRow**: `object`

The context for a command that is executed on a row in the request table.

#### Type declaration

##### requests

> **requests**: `object`[]

The requests that are selected in the request table.

##### type

> **type**: `"RequestRowContext"`

***

### CommandContextResponse

> **CommandContextResponse**: `object`

The context for a command that is executed on a response pane.

#### Type declaration

##### request

> **request**: `object`

The request that is associated with the response.

##### request.host

> **host**: `string`

##### request.id

> **id**: `string`

##### request.isTls

> **isTls**: `boolean`

##### request.path

> **path**: `string`

##### request.port

> **port**: `number`

##### request.query

> **query**: `string`

##### response

> **response**: `object`

The response that is currently open in the response pane.

##### response.id

> **id**: `string`

##### response.raw

> **raw**: `string`

##### response.roundtripTime

> **roundtripTime**: `number`

##### response.statusCode

> **statusCode**: `number`

##### selection

> **selection**: `string`

The currently selected text in the response pane.

##### type

> **type**: `"ResponseContext"`

***

### Editor

> **Editor**: `object`

Generic editor interface.

#### Type declaration

##### focus()

> **focus**: () => `void`

Focus the editor.

###### Returns

`void`

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

### Finding

> **Finding**: `object`

Represents a finding.

#### Type declaration

##### description?

> `optional` **description**: `string`

The description of the finding.

##### host

> **host**: `string`

The host of the request attached to this finding

##### id

> **id**: `string`

The ID of the finding.

##### path

> **path**: `string`

The path of the request attached to this finding

##### reporter

> **reporter**: `string`

The reporter of the finding.

##### title

> **title**: `string`

The title of the finding.

***

### HTTPRequestEditor

> **HTTPRequestEditor**: `object`

#### Type declaration

##### getEditorView()

> **getEditorView**: () => `EditorView`

###### Returns

`EditorView`

##### getElement()

> **getElement**: () => `HTMLElement`

###### Returns

`HTMLElement`

***

### HTTPResponseEditor

> **HTTPResponseEditor**: `object`

#### Type declaration

##### getEditorView()

> **getEditorView**: () => `EditorView`

###### Returns

`EditorView`

##### getElement()

> **getElement**: () => `HTMLElement`

###### Returns

`HTMLElement`

***

### JSONCompatible\<T\>

> **JSONCompatible**\<`T`\>: `unknown` *extends* `T` ? `never` : `{ [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]> }`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### JSONPrimitive

> **JSONPrimitive**: `string` \| `number` \| `boolean` \| `null` \| `undefined`

***

### JSONValue

> **JSONValue**: [`JSONPrimitive`](index.md#jsonprimitive) \| [`JSONValue`](index.md#jsonvalue)[] \| `object`

***

### MenuItem

> **MenuItem**: [`RequestRowMenuItem`](index.md#requestrowmenuitem) \| [`SettingsMenuItem`](index.md#settingsmenuitem) \| [`RequestMenuItem`](index.md#requestmenuitem) \| [`ResponseMenuItem`](index.md#responsemenuitem)

***

### NotAssignableToJson

> **NotAssignableToJson**: `bigint` \| `symbol` \| `Function`

***

### PromisifiedReturnType\<T\>

> **PromisifiedReturnType**\<`T`\>: `ReturnType`\<`T`\> *extends* `Promise`\<infer U\> ? `Promise`\<`U`\> : `Promise`\<`ReturnType`\<`T`\>\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `unknown`[]) => `unknown` |

***

### RequestMenuItem

> **RequestMenuItem**: `object`

A context-menu item that appears when right-clicking a request pane.

#### Type declaration

##### commandId

> **commandId**: `string`

The command ID to execute when the menu item is clicked.

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"Request"`

***

### RequestRowMenuItem

> **RequestRowMenuItem**: `object`

A context-menu item that appears when right-clicking a request row.

#### Type declaration

##### commandId

> **commandId**: `string`

The command ID to execute when the menu item is clicked.

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"RequestRow"`

***

### ResponseMenuItem

> **ResponseMenuItem**: `object`

A context-menu item that appears when right-clicking a response pane.

#### Type declaration

##### commandId

> **commandId**: `string`

The command ID to execute when the menu item is

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"Response"`

***

### Scope

> **Scope**: `object`

Represents a scope.

#### Type declaration

##### allowlist

> **allowlist**: `string`[]

The list of included items.

##### denylist

> **denylist**: `string`[]

The list of excluded items.

##### id

> **id**: `string`

The unique ID of the scope.

##### name

> **name**: `string`

The name of the scope.

***

### SettingsMenuItem

> **SettingsMenuItem**: `object`

A menu item that appears in the settings menu.

#### Type declaration

##### label

> **label**: `string`

The label of the menu item.

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### path

> **path**: `string`

The path that the user will be navigated to when the menu item is clicked

##### type

> **type**: `"Settings"`

***

### SidebarItem

> **SidebarItem**: `object`

Represents a sidebar item.

#### Type declaration

##### setCount()

> **setCount**: (`count`: `number`) => `void`

Set the value of a notification badge next to the sidebar item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `count` | `number` | The number to display in the badge. A value of 0 will hide the badge. |

###### Returns

`void`

***

### ToBackendRPC\<T, E\>

> **ToBackendRPC**\<`T`, `E`\>: `{ [K in keyof T]: Function }` & `object`

#### Type declaration

##### onEvent()

> **onEvent**: \<`K`\>(`event`: `K`, `callback`: `E`\[`K`\]) => `object`

Subscribe to a backend event.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* keyof `E` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `K` | The event to subscribe to. |
| `callback` | `E`\[`K`\] | The callback to call when the event is emitted. |

###### Returns

`object`

An object with a `stop` method that can be called to stop listening to the event.

###### stop()

> **stop**: () => `void`

###### Returns

`void`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BackendEndpoints`](index.md#backendendpoints) |
| `E` *extends* [`BackendEvents`](index.md#backendevents) |
