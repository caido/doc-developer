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

##### assets

> **assets**: [`AssetsSDK`](index.md#assetssdk)

Utilities to interact with the plugin's static assets.

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

##### intercept

> **intercept**: [`InterceptSDK`](index.md#interceptsdk)

Utilities to interact with the Intercept page.

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

##### runtime

> **runtime**: [`RuntimeSDK`](index.md#runtimesdk)

Utilities to interact with the runtime.

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

##### sitemap

> **sitemap**: [`SitemapSDK`](index.md#sitemapsdk)

Utilities to interact with the Sitemap page.

##### storage

> **storage**: [`StorageSDK`](index.md#storagesdk)

Utilities to interact with frontend-plugin storage.

##### ui

> **ui**: [`UISDK`](index.md#uisdk)

Utilities to create UI components.

##### window

> **window**: [`WindowSDK`](index.md#windowsdk)

Utilities to interact with the active page.

##### workflows

> **workflows**: [`WorkflowSDK`](index.md#workflowsdk)

Utilities to interact with workflows.

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

> **BackendSDK**\<`T`, `E`\>: `{ [K in keyof T]: (args: Parameters<T[K]>) => PromisifiedReturnType<T[K]> }` & `object`

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
| `options`? | \{ `label`: `string`; `leadingIcon`: [`Icon`](index.md#icon); `size`: `"small"` \| `"medium"` \| `"large"`; `trailingIcon`: [`Icon`](index.md#icon); `variant`: `"primary"` \| `"secondary"` \| `"tertiary"`; \} | Options for the button. |
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
| `options`? | \{ `body`: `HTMLElement`; `footer`: `HTMLElement`; `header`: `HTMLElement`; \} | Options for the card. |
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
| `options`? | \{ `body`: `HTMLElement`; `footer`: `HTMLElement`; `header`: `HTMLElement`; \} | Options for the well. |
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
| `options` | \{ `allowlist`: `string`[]; `denylist`: `string`[]; `name`: `string`; \} | Options for the scope. |
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
| `options` | \{ `allowlist`: `string`[]; `denylist`: `string`[]; `name`: `string`; \} | Options for the scope. |
| `options.allowlist`? | `string`[] | The list of included items in the scope. |
| `options.denylist`? | `string`[] | The list of excluded items in the scope. |
| `options.name`? | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](index.md#scope) \| `undefined`\>

The updated scope.

## Findings

### Finding

> **Finding**: `object`

Represents a [https://docs.caido.io/reference/features/logging/findings\|Finding](https://docs.caido.io/reference/features/logging/findings|Finding).

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
| `options` | \{ `dedupeKey`: `string`; `description`: `string`; `reporter`: `string`; `title`: `string`; \} | Options for the finding. |
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
If the request has not yet been saved in the database, the id will be undefined.

###### request.host

> **host**: `string`

###### request.id

> **id**: [`ID`](index.md#id-3) \| `undefined`

###### request.isTls

> **isTls**: `boolean`

###### request.path

> **path**: `string`

###### request.port

> **port**: `number`

###### request.query

> **query**: `string`

###### request.raw

> **raw**: `string`

###### request.streamId?

> `optional` **streamId**: [`ID`](index.md#id-3)

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

###### request.host

> **host**: `string`

###### request.id

> **id**: [`ID`](index.md#id-3)

###### request.isTls

> **isTls**: `boolean`

###### request.path

> **path**: `string`

###### request.port

> **port**: `number`

###### request.query

> **query**: `string`

###### request.streamId?

> `optional` **streamId**: [`ID`](index.md#id-3)

##### response

> **response**: `object`

The response that is currently open in the response pane.

###### response.id

> **id**: [`ID`](index.md#id-3)

###### response.raw

> **raw**: `string`

###### response.roundtripTime

> **roundtripTime**: `number`

###### response.statusCode

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
| `options` | \{ `group`: `string`; `name`: `string`; `run`: (`context`: [`CommandContext`](index.md#commandcontext)) => `Promise`\<`void`\> \| `void`; `when`: (`context`: [`CommandContext`](index.md#commandcontext)) => `Promise`\<`boolean`\> \| `boolean`; \} | Options for the command. |
| `options.group`? | `string` | The group this command belongs to. |
| `options.name` | `string` | The name of the command. |
| `options.run` | (`context`: [`CommandContext`](index.md#commandcontext)) => `Promise`\<`void`\> \| `void` | The function to run when the command is executed. |
| `options.when`? | (`context`: [`CommandContext`](index.md#commandcontext)) => `Promise`\<`boolean`\> \| `boolean` | A function to determine if the command is available. |

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
| `options` | \{ `body`: `HTMLElement`; `onEnter`: () => `void`; `topbar`: `HTMLElement`; \} | Options for the page. |
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
| `options`? | \{ `duration`: `number`; `variant`: `"success"` \| `"error"` \| `"warning"` \| `"info"`; \} | Options for the toast message. |
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

##### ~~register()~~

> **register**: (`commandId`: `string`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to register. |

###### Returns

`void`

###### Deprecated

Use `sdk.commandPalette.addToSlot` instead.

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
| `options`? | \{ `group`: `string`; `icon`: [`Icon`](index.md#icon); `isExternal`: `boolean`; \} | Options for the sidebar item. |
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

> **id**: [`ID`](index.md#id-3)

The ID of the collection.

##### name

> **name**: `string`

The name of the collection.

##### sessionIds

> **sessionIds**: [`ID`](index.md#id-3)[]

The sessions in the collection.

***

### ReplaySDK

> **ReplaySDK**: `object`

Utilities to interact with Replay.

#### Type declaration

##### addRequestEditorExtension()

> **addRequestEditorExtension**: (`extension`: `Extension`) => `void`

Add an extension to the request editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `extension` | `Extension` | The extension to add. |

###### Returns

`void`

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](index.md#defineaddtoslotfntmap)\<\{ `session-toolbar-primary`: [`ButtonSlotContent`](index.md#buttonslotcontent) \| [`CustomSlotContent`](index.md#customslotcontenttprops) \| [`CommandSlotContent`](index.md#commandslotcontent); `session-toolbar-secondary`: [`ButtonSlotContent`](index.md#buttonslotcontent) \| [`CustomSlotContent`](index.md#customslotcontenttprops) \| [`CommandSlotContent`](index.md#commandslotcontent); `topbar`: [`ButtonSlotContent`](index.md#buttonslotcontent) \| [`CustomSlotContent`](index.md#customslotcontenttprops) \| [`CommandSlotContent`](index.md#commandslotcontent); \}\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
addToSlot(ReplaySlot.SessionToolbarPrimary, {
  kind: "Command",
  commandId: "my-command",
  icon: "my-icon",
});

addToSlot(ReplaySlot.SessionToolbarSecondary, {
  kind: "Custom",
  component: MyComponent,
});

addToSlot(ReplaySlot.Topbar, {
  kind: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});
```

##### closeTab()

> **closeTab**: (`sessionId`: [`ID`](index.md#id-3)) => `void`

Close a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](index.md#id-3) | The ID of the session to close. |

###### Returns

`void`

##### createCollection()

> **createCollection**: (`name`: `string`) => `Promise`\<[`ReplayCollection`](index.md#replaycollection)\>

Create a new collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the collection to create. |

###### Returns

`Promise`\<[`ReplayCollection`](index.md#replaycollection)\>

##### deleteCollection()

> **deleteCollection**: (`id`: [`ID`](index.md#id-3)) => `Promise`\<`boolean`\>

Delete a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the collection to delete. |

###### Returns

`Promise`\<`boolean`\>

Whether the collection was deleted.

##### deleteSessions()

> **deleteSessions**: (`sessionIds`: [`ID`](index.md#id-3)[]) => `Promise`\<[`ID`](index.md#id-3)[]\>

Delete a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionIds` | [`ID`](index.md#id-3)[] | The IDs of the sessions to delete. |

###### Returns

`Promise`\<[`ID`](index.md#id-3)[]\>

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

##### moveSession()

> **moveSession**: (`sessionId`: [`ID`](index.md#id-3), `collectionId`: [`ID`](index.md#id-3)) => `Promise`\<[`ReplaySession`](index.md#replaysession)\>

Move a session to a different collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](index.md#id-3) | The ID of the session to move. |
| `collectionId` | [`ID`](index.md#id-3) | The ID of the collection to move the session to. |

###### Returns

`Promise`\<[`ReplaySession`](index.md#replaysession)\>

The updated session.

##### openTab()

> **openTab**: (`sessionId`: [`ID`](index.md#id-3)) => `void`

Open a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](index.md#id-3) | The ID of the session to open. |

###### Returns

`void`

##### renameCollection()

> **renameCollection**: (`id`: [`ID`](index.md#id-3), `name`: `string`) => `Promise`\<[`ReplayCollection`](index.md#replaycollection)\>

Rename a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the collection to rename. |
| `name` | `string` | The new name of the collection. |

###### Returns

`Promise`\<[`ReplayCollection`](index.md#replaycollection)\>

The updated collection.

##### renameSession()

> **renameSession**: (`id`: [`ID`](index.md#id-3), `name`: `string`) => `Promise`\<[`ReplaySession`](index.md#replaysession)\>

Rename a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the session to rename. |
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

> **collectionId**: [`ID`](index.md#id-3)

The ID of the collection the session belongs to.

##### id

> **id**: [`ID`](index.md#id-3)

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

> **sessionId**: [`ID`](index.md#id-3)

The ID of the session associated with this tab.

## HTTP History

### HTTPHistorySDK

> **HTTPHistorySDK**: `object`

Utilities to interact with the HTTP History page.

#### Type declaration

##### addRequestEditorExtension()

> **addRequestEditorExtension**: (`extension`: `Extension`) => `void`

Add an extension to the request editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `extension` | `Extension` | The extension to add. |

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

##### getQuery()

> **getQuery**: () => [`HTTPQL`](index.md#httpql)

Get the current HTTPQL query.

###### Returns

[`HTTPQL`](index.md#httpql)

The current HTTPQL query.

##### getScopeId()

> **getScopeId**: () => [`ID`](index.md#id-3) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](index.md#id-3) \| `undefined`

The current scope ID.

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](index.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the HTTP History table results.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query. |

###### Returns

`void`

##### setScope()

> **setScope**: (`id`: [`ID`](index.md#id-3) \| `undefined`) => `Promise`\<`void`\>

Set the current scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) \| `undefined` | The ID of the scope to set. |

###### Returns

`Promise`\<`void`\>

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

##### getScopeId()

> **getScopeId**: () => [`ID`](index.md#id-3) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](index.md#id-3) \| `undefined`

The current scope ID.

##### setQuery()

> **setQuery**: (`query`: [`HTTPQL`](index.md#httpql)) => `void`

Set the HTTPQL query that will be applied on the search table results.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query. |

###### Returns

`void`

##### setScope()

> **setScope**: (`id`: [`ID`](index.md#id-3) \| `undefined`) => `Promise`\<`void`\>

Set the current scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) \| `undefined` | The ID of the scope to set. |

###### Returns

`Promise`\<`void`\>

## Files

### Asset

> **Asset**: `object`

A static asset.

#### Type declaration

##### asArrayBuffer()

> **asArrayBuffer**: () => `Promise`\<`ArrayBuffer`\>

###### Returns

`Promise`\<`ArrayBuffer`\>

##### asJson()

> **asJson**: \<`T`\>() => `Promise`\<`T`\>

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

###### Returns

`Promise`\<`T`\>

##### asReadableStream()

> **asReadableStream**: () => `ReadableStream`

###### Returns

`ReadableStream`

##### asString()

> **asString**: () => `Promise`\<`string`\>

###### Returns

`Promise`\<`string`\>

***

### AssetsSDK

> **AssetsSDK**: `object`

Utilities to interact with the plugin's static assets.

#### Type declaration

##### get()

> **get**: (`path`: `string`) => `Promise`\<[`Asset`](index.md#asset)\>

Get a file from the assets folder.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

###### Returns

`Promise`\<[`Asset`](index.md#asset)\>

The asset file.

***

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

##### getVars()

> **getVars**: () => [`EnvironmentVariable`](index.md#environmentvariable)[]

Get all environment variables available in the global environment and the selected environment.

###### Returns

[`EnvironmentVariable`](index.md#environmentvariable)[]

All environment variables.

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

> **id**: [`ID`](index.md#id-3)

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
| `options` | \{ `alias`: `string`; `name`: `string`; `query`: [`HTTPQL`](index.md#httpql); \} | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. Used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`). Should be unique and follow the format `[a-zA-Z0-9_-]+`. |
| `options.name` | `string` | The name of the filter. Should be unique. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](index.md#filter)\>

The created filter.

##### delete()

> **delete**: (`id`: [`ID`](index.md#id-3)) => `Promise`\<`void`\>

Deletes a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the filter to delete. |

###### Returns

`Promise`\<`void`\>

##### getAll()

> **getAll**: () => [`Filter`](index.md#filter)[]

Gets all filters.

###### Returns

[`Filter`](index.md#filter)[]

The filters.

##### update()

> **update**: (`id`: [`ID`](index.md#id-3), `options`: `object`) => `Promise`\<[`Filter`](index.md#filter)\>

Updates a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the filter to update. |
| `options` | \{ `alias`: `string`; `name`: `string`; `query`: [`HTTPQL`](index.md#httpql); \} | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. |
| `options.name` | `string` | The name of the filter. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](index.md#filter)\>

The updated filter.

## Intercept

### InterceptSDK

> **InterceptSDK**: `object`

Utilities to interact with the Intercept page.

#### Type declaration

##### getScopeId()

> **getScopeId**: () => [`ID`](index.md#id-3) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](index.md#id-3) \| `undefined`

The current scope ID.

##### setScope()

> **setScope**: (`id`: [`ID`](index.md#id-3) \| `undefined`) => `void`

Set the current scope.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](index.md#id-3) \| `undefined` |

###### Returns

`void`

## Match and Replace

### MatchReplaceCollection

> **MatchReplaceCollection**: `object`

A collection in Match and Replace.

#### Type declaration

##### id

> **id**: [`ID`](index.md#id-3)

##### name

> **name**: `string`

##### ruleIds

> **ruleIds**: [`ID`](index.md#id-3)[]

***

### MatchReplaceMatcherRaw

> **MatchReplaceMatcherRaw**: [`MatchReplaceMatcherRawRegex`](index.md#matchreplacematcherrawregex) \| [`MatchReplaceMatcherRawValue`](index.md#matchreplacematcherrawvalue) \| [`MatchReplaceMatcherRawFull`](index.md#matchreplacematcherrawfull)

A matcher for raw operations in Match and Replace.

***

### MatchReplaceMatcherRawFull

> **MatchReplaceMatcherRawFull**: `object`

This matcher will match the entire section.

#### Type declaration

##### kind

> **kind**: `"MatcherRawFull"`

***

### MatchReplaceMatcherRawRegex

> **MatchReplaceMatcherRawRegex**: `object`

This matcher will match using a regex over the section.

#### Type declaration

##### kind

> **kind**: `"MatcherRawRegex"`

##### regex

> **regex**: `string`

***

### MatchReplaceMatcherRawValue

> **MatchReplaceMatcherRawValue**: `object`

This matcher will match the value if present in the section.

#### Type declaration

##### kind

> **kind**: `"MatcherRawValue"`

##### value

> **value**: `string`

***

### MatchReplaceOperationBody

> **MatchReplaceOperationBody**: [`KeepOperation`](index.md#keepoperationt)\<[`MatchReplaceOperationBodyRaw`](index.md#matchreplaceoperationbodyraw)\>

An operation for the body section.

***

### MatchReplaceOperationBodyRaw

> **MatchReplaceOperationBodyRaw**: `object`

A raw operation for the body section.

#### Type declaration

##### kind

> **kind**: `"OperationBodyRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](index.md#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationFirstLineRaw

> **MatchReplaceOperationFirstLineRaw**: `object`

A raw operation for the request first line.

#### Type declaration

##### kind

> **kind**: `"OperationFirstLineRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](index.md#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationHeader

> **MatchReplaceOperationHeader**: [`MatchReplaceOperationHeaderRaw`](index.md#matchreplaceoperationheaderraw) \| [`MatchReplaceOperationHeaderAdd`](index.md#matchreplaceoperationheaderadd) \| [`MatchReplaceOperationHeaderRemove`](index.md#matchreplaceoperationheaderremove) \| [`MatchReplaceOperationHeaderUpdate`](index.md#matchreplaceoperationheaderupdate)

An operation for the header section.

***

### MatchReplaceReplacer

> **MatchReplaceReplacer**: [`MatchReplaceReplacerTerm`](index.md#matchreplacereplacerterm) \| [`MatchReplaceReplacerWorkflow`](index.md#matchreplacereplacerworkflow)

A replacer in Match and Replace.

***

### MatchReplaceReplacerTerm

> **MatchReplaceReplacerTerm**: `object`

A replacer that replaces with a term.
If the matcher is a regex, groups will be interpolated.

#### Type declaration

##### kind

> **kind**: `"ReplacerTerm"`

##### term

> **term**: `string`

***

### MatchReplaceReplacerWorkflow

> **MatchReplaceReplacerWorkflow**: `object`

A replacer that replaces with the result of a workflow.
The input of the workflow depends on the operation and matcher.

#### Type declaration

##### kind

> **kind**: `"ReplacerWorkflow"`

##### workflowId

> **workflowId**: [`ID`](index.md#id-3)

***

### MatchReplaceRule

> **MatchReplaceRule**: `object`

A rule in Match and Replace.

#### Type declaration

##### collectionId

> **collectionId**: [`ID`](index.md#id-3)

The ID of the collection the rule belongs to.

##### id

> **id**: [`ID`](index.md#id-3)

The ID of the rule.

##### isEnabled

> **isEnabled**: `boolean`

Whether the rule is enabled.

##### name

> **name**: `string`

The name of the rule.

##### query

> **query**: [`HTTPQL`](index.md#httpql)

The HTTPQL query to match the rule against.
Only requests that match the query will be affected by the rule.

##### section

> **section**: [`MatchReplaceSection`](index.md#matchreplacesection)

The section of the rule.

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
| `options` | \{ `name`: `string`; \} | The options for the collection. |
| `options.name` | `string` | The name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

##### createRule()

> **createRule**: (`options`: `object`) => `Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

Create a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `collectionId`: [`ID`](index.md#id-3); `name`: `string`; `query`: [`HTTPQL`](index.md#httpql); `section`: [`MatchReplaceSection`](index.md#matchreplacesection); \} | The options for the rule. |
| `options.collectionId` | [`ID`](index.md#id-3) | The ID of the collection the rule belongs to. |
| `options.name` | `string` | The name of the rule. |
| `options.query` | [`HTTPQL`](index.md#httpql) | The HTTPQL query to match the rule against. |
| `options.section` | [`MatchReplaceSection`](index.md#matchreplacesection) | - |

###### Returns

`Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

##### deleteCollection()

> **deleteCollection**: (`id`: [`ID`](index.md#id-3)) => `Promise`\<`void`\>

Delete a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the collection. |

###### Returns

`Promise`\<`void`\>

##### deleteRule()

> **deleteRule**: (`id`: [`ID`](index.md#id-3)) => `Promise`\<`void`\>

Delete a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the rule. |

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

> **selectRule**: (`id`: [`ID`](index.md#id-3) \| `undefined`) => `void`

Select a rule to be displayed in the UI.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) \| `undefined` | The ID of the rule, or undefined to clear the selection. |

###### Returns

`void`

##### toggleRule()

> **toggleRule**: (`id`: [`ID`](index.md#id-3), `enabled`: `boolean`) => `Promise`\<`void`\>

Toggle a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the rule. |
| `enabled` | `boolean` | Whether the rule should be enabled. |

###### Returns

`Promise`\<`void`\>

##### updateCollection()

> **updateCollection**: (`id`: [`ID`](index.md#id-3), `options`: `object`) => `Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

Update a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the collection. |
| `options` | \{ `name`: `string`; \} | The new values for the collection. |
| `options.name` | `string` | The new name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](index.md#matchreplacecollection)\>

##### updateRule()

> **updateRule**: (`id`: [`ID`](index.md#id-3), `options`: `object`) => `Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

Update a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) | The ID of the rule. |
| `options` | \{ `name`: `string`; `query`: [`HTTPQL`](index.md#httpql); `section`: [`MatchReplaceSection`](index.md#matchreplacesection); \} | The new values for the rule. |
| `options.name` | `string` | The new name of the rule. |
| `options.query`? | [`HTTPQL`](index.md#httpql) | The new HTTPQL query of the rule. |
| `options.section` | [`MatchReplaceSection`](index.md#matchreplacesection) | The new section of the rule. |

###### Returns

`Promise`\<[`MatchReplaceRule`](index.md#matchreplacerule)\>

***

### MatchReplaceSectionRequestFirstLine

> **MatchReplaceSectionRequestFirstLine**: `object`

A section for the request first line.

#### Type declaration

##### kind

> **kind**: `"SectionRequestFirstLine"`

##### operation

> **operation**: [`MatchReplaceOperationFirstLine`](index.md#matchreplaceoperationfirstline)

***

### MatchReplaceSectionResponseFirstLine

> **MatchReplaceSectionResponseFirstLine**: `object`

A section for the response first line.

#### Type declaration

##### kind

> **kind**: `"SectionResponseFirstLine"`

##### operation

> **operation**: [`MatchReplaceOperationFirstLine`](index.md#matchreplaceoperationfirstline)

## Other

### ButtonSlotContent

> **ButtonSlotContent**: [`DefineSlotContent`](index.md#defineslotcontentttype-p)\<`"Button"`, \{ `icon`: `string`; `label`: `string`; `onClick`: () => `void`; \}\>

***

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

### CommandSlotContent

> **CommandSlotContent**: [`DefineSlotContent`](index.md#defineslotcontentttype-p)\<`"Command"`, \{ `commandId`: [`CommandID`](index.md#commandid); `icon`: `string`; \}\>

***

### CustomSlotContent\<TProps\>

> **CustomSlotContent**\<`TProps`\>: [`DefineSlotContent`](index.md#defineslotcontentttype-p)\<`"Custom"`, \{ `component`: `Component`\<`TProps`\>; \}\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TProps` *extends* `Record`\<`string`, `unknown`\> | `Record`\<`string`, `unknown`\> |

***

### DefineAddToSlotFn()\<TMap\>

> **DefineAddToSlotFn**\<`TMap`\>: \<`K`\>(`slot`: `K`, `spec`: `TMap`\[`K`\]) => `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `TMap` *extends* `Record`\<`string`, [`DefineSlotContent`](index.md#defineslotcontentttype-p)\<`string`, `Record`\<`string`, `unknown`\>\>\> |

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `slot` | `K` |
| `spec` | `TMap`\[`K`\] |

#### Returns

`void`

***

### DefineSlotContent\<TType, P\>

> **DefineSlotContent**\<`TType`, `P`\>: `object` & `P`

#### Type declaration

##### type

> **type**: `TType`

#### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `string` |
| `P` *extends* `Record`\<`string`, `unknown`\> |

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

### EnvironmentVariable

> **EnvironmentVariable**: `object`

#### Type declaration

##### isSecret

> **isSecret**: `boolean`

Whether the environment variable is a secret.

##### name

> **name**: `string`

The name of the environment variable.

##### value

> **value**: `string`

The value of the environment variable.

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

A [https://fontawesome.com/icons\|FontAwesome](https://fontawesome.com/icons|FontAwesome) icon class.

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

> **JSONValue**: [`JSONPrimitive`](index.md#jsonprimitive) \| [`JSONValue`](index.md#jsonvalue)[] \| \{\}

***

### KeepOperation\<T\>

> **KeepOperation**\<`T`\>: `T` & `object`

#### Type declaration

##### \_\_operation?

> `optional` **\_\_operation**: `never`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### ListenerHandle

> **ListenerHandle**: `object`

A handle for a listener.

#### Type declaration

##### stop()

> **stop**: () => `void`

Stop the listener.

###### Returns

`void`

***

### MatchReplaceMatcherName

> **MatchReplaceMatcherName**: `object`

#### Type declaration

##### kind

> **kind**: `"MatcherName"`

##### name

> **name**: `string`

***

### MatchReplaceOperationFirstLine

> **MatchReplaceOperationFirstLine**: [`KeepOperation`](index.md#keepoperationt)\<[`MatchReplaceOperationFirstLineRaw`](index.md#matchreplaceoperationfirstlineraw)\>

***

### MatchReplaceOperationHeaderAdd

> **MatchReplaceOperationHeaderAdd**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationHeaderAdd"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationHeaderRaw

> **MatchReplaceOperationHeaderRaw**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationHeaderRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](index.md#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationHeaderRemove

> **MatchReplaceOperationHeaderRemove**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationHeaderRemove"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

***

### MatchReplaceOperationHeaderUpdate

> **MatchReplaceOperationHeaderUpdate**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationHeaderUpdate"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationMethod

> **MatchReplaceOperationMethod**: [`KeepOperation`](index.md#keepoperationt)\<[`MatchReplaceOperationMethodUpdate`](index.md#matchreplaceoperationmethodupdate)\>

***

### MatchReplaceOperationMethodUpdate

> **MatchReplaceOperationMethodUpdate**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationMethodUpdate"`

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationPath

> **MatchReplaceOperationPath**: [`KeepOperation`](index.md#keepoperationt)\<[`MatchReplaceOperationPathRaw`](index.md#matchreplaceoperationpathraw)\>

***

### MatchReplaceOperationPathRaw

> **MatchReplaceOperationPathRaw**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationPathRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](index.md#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationQuery

> **MatchReplaceOperationQuery**: [`MatchReplaceOperationQueryRaw`](index.md#matchreplaceoperationqueryraw) \| [`MatchReplaceOperationQueryAdd`](index.md#matchreplaceoperationqueryadd) \| [`MatchReplaceOperationQueryRemove`](index.md#matchreplaceoperationqueryremove) \| [`MatchReplaceOperationQueryUpdate`](index.md#matchreplaceoperationqueryupdate)

***

### MatchReplaceOperationQueryAdd

> **MatchReplaceOperationQueryAdd**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationQueryAdd"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationQueryRaw

> **MatchReplaceOperationQueryRaw**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationQueryRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](index.md#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationQueryRemove

> **MatchReplaceOperationQueryRemove**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationQueryRemove"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

***

### MatchReplaceOperationQueryUpdate

> **MatchReplaceOperationQueryUpdate**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationQueryUpdate"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](index.md#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceOperationStatusCode

> **MatchReplaceOperationStatusCode**: [`KeepOperation`](index.md#keepoperationt)\<[`MatchReplaceOperationStatusCodeUpdate`](index.md#matchreplaceoperationstatuscodeupdate)\>

***

### MatchReplaceOperationStatusCodeUpdate

> **MatchReplaceOperationStatusCodeUpdate**: `object`

#### Type declaration

##### kind

> **kind**: `"OperationStatusCodeUpdate"`

##### replacer

> **replacer**: [`MatchReplaceReplacer`](index.md#matchreplacereplacer)

***

### MatchReplaceSection

> **MatchReplaceSection**: [`MatchReplaceSectionRequestBody`](index.md#matchreplacesectionrequestbody) \| [`MatchReplaceSectionRequestFirstLine`](index.md#matchreplacesectionrequestfirstline) \| [`MatchReplaceSectionRequestHeader`](index.md#matchreplacesectionrequestheader) \| [`MatchReplaceSectionRequestMethod`](index.md#matchreplacesectionrequestmethod) \| [`MatchReplaceSectionRequestPath`](index.md#matchreplacesectionrequestpath) \| [`MatchReplaceSectionRequestQuery`](index.md#matchreplacesectionrequestquery) \| [`MatchReplaceSectionResponseBody`](index.md#matchreplacesectionresponsebody) \| [`MatchReplaceSectionResponseFirstLine`](index.md#matchreplacesectionresponsefirstline) \| [`MatchReplaceSectionResponseHeader`](index.md#matchreplacesectionresponseheader) \| [`MatchReplaceSectionResponseStatusCode`](index.md#matchreplacesectionresponsestatuscode)

***

### MatchReplaceSectionRequestBody

> **MatchReplaceSectionRequestBody**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionRequestBody"`

##### operation

> **operation**: [`MatchReplaceOperationBody`](index.md#matchreplaceoperationbody)

***

### MatchReplaceSectionRequestHeader

> **MatchReplaceSectionRequestHeader**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionRequestHeader"`

##### operation

> **operation**: [`MatchReplaceOperationHeader`](index.md#matchreplaceoperationheader)

***

### MatchReplaceSectionRequestMethod

> **MatchReplaceSectionRequestMethod**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionRequestMethod"`

##### operation

> **operation**: [`MatchReplaceOperationMethod`](index.md#matchreplaceoperationmethod)

***

### MatchReplaceSectionRequestPath

> **MatchReplaceSectionRequestPath**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionRequestPath"`

##### operation

> **operation**: [`MatchReplaceOperationPath`](index.md#matchreplaceoperationpath)

***

### MatchReplaceSectionRequestQuery

> **MatchReplaceSectionRequestQuery**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionRequestQuery"`

##### operation

> **operation**: [`MatchReplaceOperationQuery`](index.md#matchreplaceoperationquery)

***

### MatchReplaceSectionResponseBody

> **MatchReplaceSectionResponseBody**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionResponseBody"`

##### operation

> **operation**: [`MatchReplaceOperationBody`](index.md#matchreplaceoperationbody)

***

### MatchReplaceSectionResponseHeader

> **MatchReplaceSectionResponseHeader**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionResponseHeader"`

##### operation

> **operation**: [`MatchReplaceOperationHeader`](index.md#matchreplaceoperationheader)

***

### MatchReplaceSectionResponseStatusCode

> **MatchReplaceSectionResponseStatusCode**: `object`

#### Type declaration

##### kind

> **kind**: `"SectionResponseStatusCode"`

##### operation

> **operation**: [`MatchReplaceOperationStatusCode`](index.md#matchreplaceoperationstatuscode)

***

### NotAssignableToJson

> **NotAssignableToJson**: `bigint` \| `symbol` \| `Function`

***

### OnCreatedWorkflowCallback()

> **OnCreatedWorkflowCallback**: (`event`: `object`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `workflow`: [`Workflow`](index.md#workflow); \} |
| `event.workflow` | [`Workflow`](index.md#workflow) |

#### Returns

`void`

***

### OnDeletedWorkflowCallback()

> **OnDeletedWorkflowCallback**: (`event`: `object`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `id`: [`ID`](index.md#id-3); \} |
| `event.id` | [`ID`](index.md#id-3) |

#### Returns

`void`

***

### OnUpdatedWorkflowCallback()

> **OnUpdatedWorkflowCallback**: (`event`: `object`) => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `workflow`: [`Workflow`](index.md#workflow); \} |
| `event.workflow` | [`Workflow`](index.md#workflow) |

#### Returns

`void`

***

### PromisifiedReturnType\<T\>

> **PromisifiedReturnType**\<`T`\>: `ReturnType`\<`T`\> *extends* `Promise`\<infer U\> ? `Promise`\<`U`\> : `Promise`\<`ReturnType`\<`T`\>\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `unknown`[]) => `unknown` |

***

### ReplaySlot

> **ReplaySlot**: *typeof* [`ReplaySlot`](index.md#replayslot-1)\[keyof *typeof* [`ReplaySlot`](index.md#replayslot-1)\]

***

### SlotContent

> **SlotContent**: [`ButtonSlotContent`](index.md#buttonslotcontent) \| [`CustomSlotContent`](index.md#customslotcontenttprops) \| [`CommandSlotContent`](index.md#commandslotcontent)

***

### ReplaySlot

> `const` **ReplaySlot**: `object`

#### Type declaration

##### SessionToolbarPrimary

> `readonly` **SessionToolbarPrimary**: `"session-toolbar-primary"`

##### SessionToolbarSecondary

> `readonly` **SessionToolbarSecondary**: `"session-toolbar-secondary"`

##### Topbar

> `readonly` **Topbar**: `"topbar"`

***

### API

Renames and re-exports [Caido](index.md#caidot-e)

## Runtime

### RuntimeSDK

> **RuntimeSDK**: `object`

Utilities to interact with the runtime.

#### Type declaration

##### version

###### Get Signature

> **get** **version**(): `string`

Get the current version of Caido.

###### Returns

`string`

## Sitemap

### SitemapSDK

> **SitemapSDK**: `object`

Utilities to interact with the Sitemap page.

#### Type declaration

##### getScopeId()

> **getScopeId**: () => [`ID`](index.md#id-3) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](index.md#id-3) \| `undefined`

The current scope ID.

##### setScope()

> **setScope**: (`id`: [`ID`](index.md#id-3) \| `undefined`) => `void`

Set the current scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](index.md#id-3) \| `undefined` | The ID of the scope to set. |

###### Returns

`void`

## Workflows

### Workflow

> **Workflow**: `object`

A workflow

#### Type declaration

##### description

> **description**: `string`

##### id

> **id**: `string`

##### kind

> **kind**: [`WorkflowKind`](index.md#workflowkind)

##### name

> **name**: `string`

***

### WorkflowKind

> **WorkflowKind**: `"Convert"` \| `"Active"` \| `"Passive"`

The kind of workflow.

***

### WorkflowSDK

> **WorkflowSDK**: `object`

Utilities to interact with workflows.

#### Type declaration

##### getWorkflows()

> **getWorkflows**: () => [`Workflow`](index.md#workflow)[]

Get all workflows.

###### Returns

[`Workflow`](index.md#workflow)[]

All workflows.

##### onCreatedWorkflow()

> **onCreatedWorkflow**: (`callback`: [`OnCreatedWorkflowCallback`](index.md#oncreatedworkflowcallback)) => [`ListenerHandle`](index.md#listenerhandle)

Register a callback to be called when a workflow is created.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnCreatedWorkflowCallback`](index.md#oncreatedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](index.md#listenerhandle)

##### onDeletedWorkflow()

> **onDeletedWorkflow**: (`callback`: [`OnDeletedWorkflowCallback`](index.md#ondeletedworkflowcallback)) => [`ListenerHandle`](index.md#listenerhandle)

Register a callback to be called when a workflow is deleted.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnDeletedWorkflowCallback`](index.md#ondeletedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](index.md#listenerhandle)

##### onUpdatedWorkflow()

> **onUpdatedWorkflow**: (`callback`: [`OnUpdatedWorkflowCallback`](index.md#onupdatedworkflowcallback)) => [`ListenerHandle`](index.md#listenerhandle)

Register a callback to be called when a workflow is updated.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnUpdatedWorkflowCallback`](index.md#onupdatedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](index.md#listenerhandle)
