# @caido/sdk-frontend

This is the reference for the frontend SDK used by frontend plugins.
[Caido](#caido-t-e) is the main interface that provides access to various services and functionalities.

## SDK

### Caido\<T, E\>

> **Caido**\<`T`, `E`\>: `object`

Utilities for frontend plugins.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`BackendEndpoints`](index.md#backendendpoints) | `Record`\<`string`, `never`\> |
| `E` *extends* [`BackendEvents`](index.md#backendevents) | `Record`\<`string`, `never`\> |

#### Type declaration

##### backend

> **backend**: [`BackendSDK`](index.md#backendsdkt-e)\<`T`, `E`\>

Utilities to interact with the backend plugin.

##### commandPalette

> **commandPalette**: [`CommandPaletteSDK`](index.md#commandpalettesdk)

Utilities to interact with the command palette.

##### commands

> **commands**: [`CommandsSDK`](index.md#commandssdk)

Utilities to interact with commands

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

Utilities to interact with findings

##### graphql

> **graphql**: `GraphqlSDK`

Utilities to interact with the GraphQL API.

##### menu

> **menu**: [`MenuSDK`](index.md#menusdk)

Utilities to insert menu items and context-menus throughout the UI.

##### navigation

> **navigation**: [`NavigationSDK`](index.md#navigationsdk)

Utilities to interact with navigation.

##### scopes

> **scopes**: [`ScopesSDK`](index.md#scopessdk)

Utilities to interact with scopes

##### shortcuts

> **shortcuts**: [`ShortcutsSDK`](index.md#shortcutssdk)

Utilities to interact with shortcuts.

##### sidebar

> **sidebar**: [`SidebarSDK`](index.md#sidebarsdk)

Utilities to interact with the sidebar.

##### storage

> **storage**: [`StorageSDK`](index.md#storagesdk)

Utilities to interact with frontend-plugin storage.

##### ui

> **ui**: [`UISDK`](index.md#uisdk)

Utilities to create UI components.

##### window

> **window**: [`WindowSDK`](index.md#windowsdk)

Utilities to interact with the active page.

## Backend

### BackendEndpoints

> **BackendEndpoints**: `object`

Endpoints provided by the backend plugin.

#### Index Signature

 \[`key`: `string`\]: (...`args`: `any`[]) => `any`

***

### BackendEvents

> **BackendEvents**: `object`

Events emitted by the backend plugin.

#### Index Signature

 \[`key`: `string`\]: (...`args`: `any`[]) => `void`

***

### BackendSDK\<T, E\>

> **BackendSDK**\<`T`, `E`\>: `{ [K in keyof T]: Function }` & `object`

Utilities to interact with the backend plugin.

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

## UI

### UISDK

> **UISDK**: `object`

Utilities to create UI components.

#### Type declaration

##### button()

> **button**: (`options`?: `object`) => `HTMLElement`

Create a button.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the button. |
| `options.label`? | `string` | The label of the button. |
| `options.leadingIcon`? | [`Icon`](index.md#icon) | The leading icon of the button. |
| `options.size`? | `"small"` \| `"medium"` \| `"large"` | The size of the button. |
| `options.trailingIcon`? | [`Icon`](index.md#icon) | The trailing icon of the button. |
| `options.variant`? | `"primary"` \| `"secondary"` \| `"tertiary"` | The variant of the button. |

###### Returns

`HTMLElement`

The button element.

###### Example

```ts
const deleteButton = sdk.ui.button({
  variant: "primary",
  label: "Delete",
  trailingIcon: "fas fa-trash-can",
  size: "small",
});
```

##### card()

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

##### httpRequestEditor()

> **httpRequestEditor**: () => [`HTTPRequestEditor`](index.md#httprequesteditor)

Create an HTTP request editor

###### Returns

[`HTTPRequestEditor`](index.md#httprequesteditor)

The HTTP request editor.

##### httpResponseEditor()

> **httpResponseEditor**: () => [`HTTPResponseEditor`](index.md#httpresponseeditor)

Create an HTTP response editor

###### Returns

[`HTTPResponseEditor`](index.md#httpresponseeditor)

The HTTP response editor.

##### well()

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

## Scopes

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

> **id**: [`ID`](index.md#id-3)

The unique ID of the scope.

##### name

> **name**: `string`

The name of the scope.

***

### ScopesSDK

> **ScopesSDK**: `object`

Utilities to interact with scopes

#### Type declaration

##### createScope()

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

###### Example

```ts
const newScope = await sdk.scopes.createScope({
  name: "Example",
  allowlist: ["*example.com", "*github.com"],
  denylist: ["*caido.io"],
});
```

##### deleteScope()

> **deleteScope**: (`id`: [`ID`](index.md#id-3)) => `Promise`\<`boolean`\>

Delete a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The id of the scope to delete. |

###### Returns

`Promise`\<`boolean`\>

Whether the scope was deleted.

##### getScopes()

> **getScopes**: () => [`Scope`](index.md#scope)[]

Get all scopes.

###### Returns

[`Scope`](index.md#scope)[]

A list of scopes.

##### updateScope()

> **updateScope**: (`id`: [`ID`](index.md#id-3), `options`: `object`) => `Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

Update a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The id of the scope to update. |
| `options` | `object` | Options for the scope. |
| `options.allowlist`? | `string`[] | The list of included items in the scope. |
| `options.denylist`? | `string`[] | The list of excluded items in the scope. |
| `options.name`? | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

The updated scope.

## Findings

### Finding

> **Finding**: `object`

Represents a [https://docs.caido.io/reference/features/logging/findings|Finding](https://docs.caido.io/reference/features/logging/findings|Finding).

#### Type declaration

##### description?

> `optional` **description**: `string`

The description of the finding.

##### host

> **host**: `string`

The host of the request attached to this finding

##### id

> **id**: [`ID`](index.md#id-3)

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

### FindingsSDK

> **FindingsSDK**: `object`

Utilities to interact with findings

#### Type declaration

##### createFinding()

> **createFinding**: (`requestId`: [`ID`](index.md#id-3), `options`: `object`) => `Promise`\<[`Finding`](index.md#finding) \| `undefined`\>

Create a [Finding](index.md#finding).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestId` | [`ID`](index.md#id-3) | The id of the request the finding is associated with. |
| `options` | `object` | Options for the finding. |
| `options.dedupeKey`? | `string` | If a finding with the same deduplication key already exists, it will not create a new finding. |
| `options.description`? | `string` | The description of the finding. |
| `options.reporter` | `string` | The reporter of the finding. |
| `options.title` | `string` | The title of the finding. |

###### Returns

`Promise`\<[`Finding`](index.md#finding) \| `undefined`\>

The created finding.

## Commands

### CommandContext

> **CommandContext**: [`CommandContextBase`](index.md#commandcontextbase) \| [`CommandContextRequestRow`](index.md#commandcontextrequestrow) \| [`CommandContextRequest`](index.md#commandcontextrequest) \| [`CommandContextResponse`](index.md#commandcontextresponse)

Represents the context in which a command is executed.

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

> **id**: [`ID`](index.md#id-3)

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

> **id**: [`ID`](index.md#id-3)

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

### CommandsSDK

> **CommandsSDK**: `object`

Utilities to interact with commands

#### Type declaration

##### register()

> **register**: (`id`: [`CommandID`](index.md#commandid), `options`: `object`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`CommandID`](index.md#commandid) | The id of the command. |
| `options` | `object` | Options for the command. |
| `options.group`? | `string` | The group this command belongs to. |
| `options.name` | `string` | The name of the command. |
| `options.run` | (`context`: [`CommandContext`](index.md#commandcontext)) => `void` | The function to run when the command is executed. |
| `options.when`? | (`context`: [`CommandContext`](index.md#commandcontext)) => `boolean` | A function to determine if the command is available. |

###### Returns

`void`

###### Example

```ts
sdk.commands.register("hello", {
  name: "Print to console.",
  run: () => console.log("Hello world!"),
  group: "Custom Commands",
});
```

## Menu

### MenuItem

> **MenuItem**: [`RequestRowMenuItem`](index.md#requestrowmenuitem) \| [`SettingsMenuItem`](index.md#settingsmenuitem) \| [`RequestMenuItem`](index.md#requestmenuitem) \| [`ResponseMenuItem`](index.md#responsemenuitem)

A content-menu item.

***

### MenuSDK

> **MenuSDK**: `object`

Utilities to insert menu items and context-menus throughout the UI.

#### Type declaration

##### registerItem()

> **registerItem**: (`item`: [`MenuItem`](index.md#menuitem)) => `void`

Register a menu item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`MenuItem`](index.md#menuitem) | The menu item to register. |

###### Returns

`void`

###### Example

```ts
sdk.menu.registerItem({
  type: "Request",
  commandId: "hello",
  leadingIcon: "fas fa-hand",
});
```

***

### RequestMenuItem

> **RequestMenuItem**: `object`

A context-menu item that appears when right-clicking a request pane.

#### Type declaration

##### commandId

> **commandId**: [`CommandID`](index.md#commandid)

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

> **commandId**: [`CommandID`](index.md#commandid)

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

> **commandId**: [`CommandID`](index.md#commandid)

The command ID to execute when the menu item is

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"Response"`

***

### SettingsMenuItem

> **SettingsMenuItem**: `object`

A menu item that appears in the settings menu.

#### Type declaration

##### label

> **label**: `string`

The label of the menu item.

##### leadingIcon?

> `optional` **leadingIcon**: [`Icon`](index.md#icon)

The [Icon](index.md#icon) to display to the left of the menu item.

##### path

> **path**: `string`

The path that the user will be navigated to when the menu item is clicked

##### type

> **type**: `"Settings"`

## Navigation

### NavigationSDK

> **NavigationSDK**: `object`

Utilities to interact with navigation.

#### Type declaration

##### addPage()

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

##### goTo()

> **goTo**: (`path`: `string`) => `void`

Navigate to a path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to navigate to. |

###### Returns

`void`

###### Example

```ts
sdk.navigation.goTo("/my-plugin-page");
```

## Window

### WindowSDK

> **WindowSDK**: `object`

Utilities to interact with the active page.

#### Type declaration

##### getActiveEditor()

> **getActiveEditor**: () => [`Editor`](index.md#editor) \| `undefined`

Get the active editor.

###### Returns

[`Editor`](index.md#editor) \| `undefined`

The active editor.

##### showToast()

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

## Storage

### StorageSDK

> **StorageSDK**: `object`

Utilities to interact with frontend-plugin storage.

#### Type declaration

##### get()

> **get**: () => [`JSONValue`](index.md#jsonvalue)

Get the storage.

###### Returns

[`JSONValue`](index.md#jsonvalue)

The storage.

##### onChange()

> **onChange**: (`callback`: (`value`: [`JSONValue`](index.md#jsonvalue)) => `void`) => `void`

Subscribe to storage changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`value`: [`JSONValue`](index.md#jsonvalue)) => `void` | The callback to call when the storage changes. |

###### Returns

`void`

##### set()

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

## Shortcuts

### ShortcutsSDK

> **ShortcutsSDK**: `object`

Utilities to interact with shortcuts.

#### Type declaration

##### register()

> **register**: (`commandId`: [`CommandID`](index.md#commandid), `keys`: `string`[]) => `void`

Register a shortcut.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | [`CommandID`](index.md#commandid) | The id of the command to run when the shortcut is triggered. |
| `keys` | `string`[] | The keys of the shortcut. |

###### Returns

`void`

## Command Palette

### CommandPaletteSDK

> **CommandPaletteSDK**: `object`

Utilities to interact with the command palette.

#### Type declaration

##### register()

> **register**: (`commandId`: `string`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to register. |

###### Returns

`void`

## Sidebar

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

### SidebarSDK

> **SidebarSDK**: `object`

Utilities to interact with the sidebar.

#### Type declaration

##### registerItem()

> **registerItem**: (`name`: `string`, `path`: `string`, `options`?: `object`) => [`SidebarItem`](index.md#sidebaritem)

Register a sidebar item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the sidebar item. |
| `path` | `string` | The path that the user will be navigated to when the sidebar item is clicked. |
| `options`? | `object` | Options for the sidebar item. |
| `options.group`? | `string` | The group the sidebar item belongs to. |
| `options.icon`? | [`Icon`](index.md#icon) | The [Icon](index.md#icon) of the sidebar item. |
| `options.isExternal`? | `boolean` | Whether the path points to an external URL. |

###### Returns

[`SidebarItem`](index.md#sidebaritem)

The created sidebar item.

###### Example

```ts
sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
  icon: "fas fa-rocket",
});
```

## Other

### CommandID

> **CommandID**: `string` & `object`

A unique command identifier.

#### Type declaration

##### \_\_commandId

> **\_\_commandId**: `never`

#### Example

```ts
"my-super-command"
```

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

### Icon

> **Icon**: `string` & `object`

A [https://fontawesome.com/icons|FontAwesome](https://fontawesome.com/icons|FontAwesome) icon class.

#### Type declaration

##### \_\_icon

> **\_\_icon**: `never`

#### Example

```ts
"fas fa-rocket"
```

***

### ID

> **ID**: `string` & `object`

A unique Caido identifier per type.

#### Type declaration

##### \_\_id

> **\_\_id**: `never`

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

### NotAssignableToJson

> **NotAssignableToJson**: `bigint` \| `symbol` \| `Function`

***

### PromisifiedReturnType\<T\>

> **PromisifiedReturnType**\<`T`\>: `ReturnType`\<`T`\> *extends* `Promise`\<infer U\> ? `Promise`\<`U`\> : `Promise`\<`ReturnType`\<`T`\>\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `unknown`[]) => `unknown` |
