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

##### env

> **env**: [`EnvironmentSDK`](index.md#environmentsdk)

Utilities to interact with the environment.

##### files

> **files**: [`FilesSDK`](index.md#filessdk)

Utilities to interact with the Files page.

##### filters

> **filters**: [`FiltersSDK`](index.md#filterssdk)

Utilities to interact with Filters page.

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

Utilities to interact with findings

##### graphql

> **graphql**: `GraphqlSDK`

Utilities to interact with the GraphQL API.

##### httpHistory

> **httpHistory**: [`HTTPHistorySDK`](index.md#httphistorysdk)

Utilities to interact with the HTTP History page.

##### matchReplace

> **matchReplace**: [`MatchReplaceSDK`](index.md#matchreplacesdk)

Utilities to interact with Match and Replace page.

##### menu

> **menu**: [`MenuSDK`](index.md#menusdk)

Utilities to insert menu items and context-menus throughout the UI.

##### navigation

> **navigation**: [`NavigationSDK`](index.md#navigationsdk)

Utilities to interact with navigation.

##### replay

> **replay**: [`ReplaySDK`](index.md#replaysdk)

Utilities to interact with the Replay page.

##### scopes

> **scopes**: [`ScopesSDK`](index.md#scopessdk)

Utilities to interact with scopes

##### search

> **search**: [`SearchSDK`](index.md#searchsdk)

Utilities to interact with the Search page.

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

> **id**: [`ID`](index.md#id-5)

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

> **deleteScope**: (`id`: [`ID`](index.md#id-5)) => `Promise`\<`boolean`\>

Delete a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The id of the scope to delete. |

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

> **updateScope**: (`id`: [`ID`](index.md#id-5), `options`: `object`) => `Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

Update a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The id of the scope to update. |
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

> **id**: [`ID`](index.md#id-5)

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

> **createFinding**: (`requestId`: [`ID`](index.md#id-5), `options`: `object`) => `Promise`\<[`Finding`](index.md#finding) \| `undefined`\>

Create a [Finding](index.md#finding).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestId` | [`ID`](index.md#id-5) | The id of the request the finding is associated with. |
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

> **id**: [`ID`](index.md#id-5)

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

> **id**: [`ID`](index.md#id-5)

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
The path must start with "/settings/".

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
| `options.onEnter`? | () => `void` | The callback to execute when the page is entered. |
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
| `keys` | `string`[] | The keys of the shortcut. Check out [hotkeys-js](https://github.com/jaywcjlove/hotkeys-js?tab=readme-ov-file#supported-keys) for the list of supported keys. |

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

## Replay

### ReplayCollection

> **ReplayCollection**: `object`

A collection in Replay.

#### Type declaration

##### id

> **id**: [`ID`](index.md#id-5)

The ID of the collection.

##### name

> **name**: `string`

The name of the collection.

##### sessionIds

> **sessionIds**: [`ID`](index.md#id-5)[]

The sessions in the collection.

***

### ReplaySDK

> **ReplaySDK**: `object`

Utilities to interact with Replay.

#### Type declaration

##### closeTab()

> **closeTab**: (`sessionId`: [`ID`](index.md#id-5)) => `void`

Close a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](index.md#id-5) | The ID of the session to close. |

###### Returns

`void`

##### getCollections()

> **getCollections**: () => [`ReplayCollection`](index.md#replaycollection)[]

Get the list of all replay collections.

###### Returns

[`ReplayCollection`](index.md#replaycollection)[]

The list of all replay collections.

##### getSessions()

> **getSessions**: () => [`ReplaySession`](index.md#replaysession)[]

Get the list of all replay sessions.

###### Returns

[`ReplaySession`](index.md#replaysession)[]

The list of all replay sessions.

##### getTabs()

> **getTabs**: () => [`ReplayTab`](index.md#replaytab)[]

Get the list of all open replay tabs.

###### Returns

[`ReplayTab`](index.md#replaytab)[]

The list of all open replay tabs.

##### openTab()

> **openTab**: (`sessionId`: [`ID`](index.md#id-5)) => `void`

Open a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](index.md#id-5) | The ID of the session to open. |

###### Returns

`void`

##### renameSession()

> **renameSession**: (`id`: [`ID`](index.md#id-5), `name`: `string`) => `Promise`\<[`ReplaySession`](index.md#replaysession)\>

Rename a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the session to rename. |
| `name` | `string` | The new name of the session. |

###### Returns

`Promise`\<[`ReplaySession`](index.md#replaysession)\>

The updated session.

***

### ReplaySession

> **ReplaySession**: `object`

A session in Replay.

#### Type declaration

##### collectionId

> **collectionId**: [`ID`](index.md#id-5)

The ID of the collection the session belongs to.

##### id

> **id**: [`ID`](index.md#id-5)

The ID of the session.

##### name

> **name**: `string`

The name of the session.

***

### ReplayTab

> **ReplayTab**: `object`

A replay tab.

#### Type declaration

##### sessionId

> **sessionId**: [`ID`](index.md#id-5)

The ID of the session associated with this tab.

## HTTP History

### HTTPHistorySDK

> **HTTPHistorySDK**: `object`

Utilities to interact with the HTTP History page.

#### Type declaration

##### getQuery()

> **getQuery**: () => [`HTTPQL`](index.md#httpql)

Get the current HTTPQL query.

###### Returns

[`HTTPQL`](index.md#httpql)

The current HTTPQL query.

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](index.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the HTTP History table results.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query. |

###### Returns

`void`

## Search

### SearchSDK

> **SearchSDK**: `object`

Utilities to interact with the Search page.

#### Type declaration

##### getQuery()

> **getQuery**: () => [`HTTPQL`](index.md#httpql)

Get the current HTTPQL query.

###### Returns

[`HTTPQL`](index.md#httpql)

The current HTTPQL query.

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](index.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the search table results.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query. |

###### Returns

`void`

## Files

### FilesSDK

> **FilesSDK**: `object`

SDK for interacting with the Files page.

#### Type declaration

##### create()

> **create**: (`file`: `File`) => `Promise`\<[`HostedFile`](index.md#hostedfile)\>

Uploads a file to the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `File` | The file to upload. |

###### Returns

`Promise`\<[`HostedFile`](index.md#hostedfile)\>

The uploaded file.

##### delete()

> **delete**: (`id`: `string`) => `Promise`\<`void`\>

Deletes a file from the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the file to delete. |

###### Returns

`Promise`\<`void`\>

The deleted file.

##### getAll()

> **getAll**: () => [`HostedFile`](index.md#hostedfile)[]

Gets all hosted files.

###### Returns

[`HostedFile`](index.md#hostedfile)[]

The files.

##### rename()

> **rename**: (`id`: `string`, `name`: `string`) => `Promise`\<[`HostedFile`](index.md#hostedfile)\>

Renames a file on the host.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the file to rename. |
| `name` | `string` | The new name of the file. |

###### Returns

`Promise`\<[`HostedFile`](index.md#hostedfile)\>

The renamed file.

***

### HostedFile

> **HostedFile**: `object`

A hosted file.

#### Type declaration

##### createdAt

> **createdAt**: `Date`

The date the file was created.

##### id

> **id**: `string`

The ID of the file.

##### name

> **name**: `string`

The name of the file.

##### path

> **path**: `string`

The path of the file.

##### size

> **size**: `number`

The size of the file in bytes.

##### updatedAt

> **updatedAt**: `Date`

The date the file was updated.

## Environment

### EnvironmentSDK

> **EnvironmentSDK**: `object`

Utilities to interact with the environment.

#### Type declaration

##### getVar()

> **getVar**: (`name`: `string`) => `string` \| `undefined`

Get the value of an environment variable.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the environment variable. |

###### Returns

`string` \| `undefined`

The value of the environment variable.

## Filters

### Filter

> **Filter**: `object`

Represents a filter.

#### Type declaration

##### alias

> **alias**: `string`

The alias of the filter.
This alias is used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`).

##### id

> **id**: [`ID`](index.md#id-5)

The ID of the filter.

##### name

> **name**: `string`

The name of the filter.

##### query

> **query**: [`HTTPQL`](index.md#httpql)

The HTTPQL expression of the filter.

***

### FiltersSDK

> **FiltersSDK**: `object`

SDK for interacting with the Filters page.

#### Type declaration

##### create()

> **create**: (`options`: `object`) => `Promise`\<[`Filter`](index.md#filter)\>

Creates a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. Used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`). Should be unique and follow the format `[a-zA-Z0-9_-]+`. |
| `options.name` | `string` | The name of the filter. Should be unique. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](index.md#filter)\>

The created filter.

##### delete()

> **delete**: (`id`: [`ID`](index.md#id-5)) => `Promise`\<`void`\>

Deletes a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the filter to delete. |

###### Returns

`Promise`\<`void`\>

##### getAll()

> **getAll**: () => [`Filter`](index.md#filter)[]

Gets all filters.

###### Returns

[`Filter`](index.md#filter)[]

The filters.

##### update()

> **update**: (`id`: [`ID`](index.md#id-5), `options`: `object`) => `Promise`\<[`Filter`](index.md#filter)\>

Updates a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the filter to update. |
| `options` | `object` | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. |
| `options.name` | `string` | The name of the filter. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](index.md#filter)\>

The updated filter.

## Match and Replace

### MatchReplaceCollection

> **MatchReplaceCollection**: `object`

A collection in Match and Replace.

#### Type declaration

##### id

> **id**: [`ID`](index.md#id-5)

##### name

> **name**: `string`

##### ruleIds

> **ruleIds**: [`ID`](index.md#id-5)[]

***

### MatchReplaceRule

> **MatchReplaceRule**: `object`

A rule in Match and Replace.

#### Type declaration

##### collectionId

> **collectionId**: [`ID`](index.md#id-5)

The ID of the collection the rule belongs to.

##### id

> **id**: [`ID`](index.md#id-5)

The ID of the rule.

##### isEnabled

> **isEnabled**: `boolean`

Whether the rule is enabled.

##### isRegex

> **isRegex**: `boolean`

Whether the match term is a regex.

##### matchTerm

> **matchTerm**: `string`

The match term of the rule.

##### name

> **name**: `string`

The name of the rule.

##### query

> **query**: [`HTTPQL`](index.md#httpql)

The HTTPQL query to match the rule against.
Only requests that match the query will be affected by the rule.

##### replaceTerm

> **replaceTerm**: `string`

The replace term of the rule.

##### strategy

> **strategy**: [`MatchReplaceStrategy`](index.md#matchreplacestrategy)

The strategy of the rule.

***

### MatchReplaceSDK

> **MatchReplaceSDK**: `object`

Utilities to interact with the Match and Replace page.

#### Type declaration

##### createCollection()

> **createCollection**: (`options`: `object`) => `Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

Create a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options for the collection. |
| `options.name` | `string` | The name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

##### createRule()

> **createRule**: (`options`: `object`) => `Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

Create a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options for the rule. |
| `options.collectionId` | [`ID`](index.md#id-5) | The ID of the collection the rule belongs to. |
| `options.isEnabled` | `boolean` | Whether the rule is enabled. |
| `options.isRegex` | `boolean` | Whether the match term is a regex. |
| `options.matchTerm` | `string` | The match term of the rule. |
| `options.name` | `string` | The name of the rule. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query to match the rule against. |
| `options.replaceTerm` | `string` | The replace term of the rule. |
| `options.strategy` | [`MatchReplaceStrategy`](index.md#matchreplacestrategy) | The strategy of the rule. |

###### Returns

`Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

##### deleteCollection()

> **deleteCollection**: (`id`: [`ID`](index.md#id-5)) => `Promise`\<`void`\>

Delete a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the collection. |

###### Returns

`Promise`\<`void`\>

##### deleteRule()

> **deleteRule**: (`id`: [`ID`](index.md#id-5)) => `Promise`\<`void`\>

Delete a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the rule. |

###### Returns

`Promise`\<`void`\>

##### getActiveRules()

> **getActiveRules**: () => [`MatchReplaceRule`](index.md#matchreplacerule)[]

Get all active rules.
Rules are ordered in priority from highest to lowest.

###### Returns

[`MatchReplaceRule`](index.md#matchreplacerule)[]

All active rules.

##### getCollections()

> **getCollections**: () => [`MatchReplaceCollection`](index.md#matchreplacecollection)[]

Get all collections.

###### Returns

[`MatchReplaceCollection`](index.md#matchreplacecollection)[]

##### getRules()

> **getRules**: () => [`MatchReplaceRule`](index.md#matchreplacerule)[]

Get all rules.

###### Returns

[`MatchReplaceRule`](index.md#matchreplacerule)[]

All rules.

##### selectRule()

> **selectRule**: (`id`: [`ID`](index.md#id-5) \| `undefined`) => `void`

Select a rule to be displayed in the UI.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) \| `undefined` | The ID of the rule, or undefined to clear the selection. |

###### Returns

`void`

##### updateCollection()

> **updateCollection**: (`id`: [`ID`](index.md#id-5), `options`: `object`) => `Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

Update a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the collection. |
| `options` | `object` | The new values for the collection. |
| `options.name` | `string` | The new name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

##### updateRule()

> **updateRule**: (`id`: [`ID`](index.md#id-5), `options`: `object`) => `Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

Update a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-5) | The ID of the rule. |
| `options` | `object` | The new values for the rule. |
| `options.isEnabled` | `boolean` | Whether the rule is enabled. |
| `options.isRegex` | `boolean` | Whether the match term is a regex. |
| `options.matchTerm` | `string` | The new match term of the rule. |
| `options.name` | `string` | The new name of the rule. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The new HTTPQL query of the rule. |
| `options.replaceTerm` | `string` | The new replace term of the rule. |
| `options.strategy` | [`MatchReplaceStrategy`](index.md#matchreplacestrategy) | The new strategy of the rule. |

###### Returns

`Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

## Other

### CommandID

> **CommandID**: `string` & `object`

A unique command identifier.

#### Type declaration

##### \_\_commandId?

> `optional` **\_\_commandId**: `never`

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

### HTTPQL

> **HTTPQL**: `string` & `object`

An HTTPQL expression.

#### Type declaration

##### \_\_httpql?

> `optional` **\_\_httpql**: `never`

#### Example

```ts
`req.method.eq:"POST"`
```

***

### HTTPRequestEditor

> **HTTPRequestEditor**: `object`

#### Type declaration

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

> **HTTPResponseEditor**: `object`

#### Type declaration

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

### Icon

> **Icon**: `string` & `object`

A [https://fontawesome.com/icons|FontAwesome](https://fontawesome.com/icons|FontAwesome) icon class.

#### Type declaration

##### \_\_icon?

> `optional` **\_\_icon**: `never`

#### Example

```ts
"fas fa-rocket"
```

***

### ID

> **ID**: `string` & `object`

A unique Caido identifier per type.

#### Type declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

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

### MatchReplaceStrategy

> **MatchReplaceStrategy**: `"REQUEST_FIRST_LINE"` \| `"REQUEST_HEADER"` \| `"REQUEST_BODY"` \| `"RESPONSE_FIRST_LINE"` \| `"RESPONSE_HEADER"` \| `"RESPONSE_BODY"`

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
