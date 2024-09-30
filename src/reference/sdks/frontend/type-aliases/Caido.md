[@caido/sdk-frontend](../index.md) / Caido

# Type Alias: Caido\<T, E\>

> **Caido**\<`T`, `E`\>: `object`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`BackendEndpoints`](BackendEndpoints.md) | `Record`\<`string`, `never`\> |
| `E` *extends* [`BackendEvents`](BackendEvents.md) | `Record`\<`string`, `never`\> |

## Type declaration

### backend

> **backend**: [`ToBackendRPC`](ToBackendRPC.md)\<`T`, `E`\>

### commandPalette

> **commandPalette**: `object`

Utilities to interact with the command palette.

### commandPalette.register()

> **register**: (`commandId`) => `void`

Register a command.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to register. |

#### Returns

`void`

### commands

> **commands**: `object`

Utilities to interact with commands

### commands.register()

> **register**: (`id`, `options`) => `void`

Register a command.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the command. |
| `options` | `object` | Options for the command. |
| `options.group`? | `string` | The group this command belongs to. |
| `options.name` | `string` | The name of the command. |
| `options.run` | (`context`) => `void` | The function to run when the command is executed. |
| `options.when`? | (`context`) => `boolean` | A function to determine if the command is available. |

#### Returns

`void`

### findings

> **findings**: `object`

Utilities to interact with findings

### findings.createFinding()

> **createFinding**: (`requestId`, `options`) => `Promise`\<[`Finding`](Finding.md) \| `undefined`\>

Create a finding.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestId` | `string` | The id of the request the finding is associated with. |
| `options` | `object` | Options for the finding. |
| `options.dedupeKey`? | `string` | The dedupe key of the finding. |
| `options.description`? | `string` | The description of the finding. |
| `options.reporter` | `string` | The reporter of the finding. |
| `options.title` | `string` | The title of the finding. |

#### Returns

`Promise`\<[`Finding`](Finding.md) \| `undefined`\>

The created finding.

### graphql

> **graphql**: [`Sdk`](Sdk.md)

### menu

> **menu**: `object`

Utilities to insert menu items and context-menus throughout the UI.

### menu.registerItem()

> **registerItem**: (`item`) => `void`

Register a menu item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`MenuItem`](MenuItem.md) | The menu item to register. |

#### Returns

`void`

### navigation

> **navigation**: `object`

Utilities to interact with navigation.

### navigation.addPage()

> **addPage**: (`path`, `options`) => `void`

Add a page to the navigation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the page. |
| `options` | `object` | Options for the page. |
| `options.body` | `HTMLElement` | The body of the page. |
| `options.topbar`? | `HTMLElement` | The topbar of the page. |

#### Returns

`void`

### navigation.goTo()

> **goTo**: (`path`) => `void`

Navigate to a path.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to navigate to. |

#### Returns

`void`

### scopes

> **scopes**: `object`

Utilities to interact with scopes

### scopes.createScope()

> **createScope**: (`options`) => `Promise`\<[`Scope`](Scope.md) \| `undefined`\>

Create a scope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | Options for the scope. |
| `options.allowlist` | `string`[] | The list of included items in the scope. |
| `options.denylist` | `string`[] | The list of excluded items in the scope. |
| `options.name` | `string` | The name of the scope. |

#### Returns

`Promise`\<[`Scope`](Scope.md) \| `undefined`\>

The created scope.

### scopes.deleteScope()

> **deleteScope**: (`id`) => `Promise`\<`boolean`\>

Delete a scope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the scope to delete. |

#### Returns

`Promise`\<`boolean`\>

Whether the scope was deleted.

### scopes.getScopes()

> **getScopes**: () => [`Scope`](Scope.md)[]

Get all scopes.

#### Returns

[`Scope`](Scope.md)[]

A list of scopes.

### scopes.updateScope()

> **updateScope**: (`id`, `options`) => `Promise`\<[`Scope`](Scope.md) \| `undefined`\>

Update a scope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the scope to update. |
| `options` | `object` | Options for the scope. |
| `options.allowlist`? | `string`[] | The list of included items in the scope. |
| `options.denylist`? | `string`[] | The list of excluded items in the scope. |
| `options.name`? | `string` | The name of the scope. |

#### Returns

`Promise`\<[`Scope`](Scope.md) \| `undefined`\>

The updated scope.

### shortcuts

> **shortcuts**: `object`

Utilities to interact with shortcuts.

### shortcuts.register()

> **register**: (`commandId`, `keys`) => `void`

Register a shortcut.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | The id of the command to run when the shortcut is triggered. |
| `keys` | `string`[] | The keys of the shortcut. |

#### Returns

`void`

### sidebar

> **sidebar**: `object`

Utilities to interact with the sidebar.

### sidebar.registerItem()

> **registerItem**: (`name`, `path`, `options`?) => [`SidebarItem`](SidebarItem.md)

Register a sidebar item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the sidebar item. |
| `path` | `string` | The path that the user will be navigated to when the sidebar item is clicked. |
| `options`? | `object` | Options for the sidebar item. |
| `options.group`? | `string` | The group the sidebar item belongs to. |
| `options.icon`? | `string` | The icon of the sidebar item. |
| `options.isExternal`? | `boolean` | Whether the path points to an external URL. |

#### Returns

[`SidebarItem`](SidebarItem.md)

The created sidebar item.

### storage

> **storage**: `object`

Utilities to interact with frontend-plugin storage.

### storage.get()

> **get**: () => [`JSONValue`](JSONValue.md)

Get the storage.

#### Returns

[`JSONValue`](JSONValue.md)

The storage.

### storage.onChange()

> **onChange**: (`callback`) => `void`

Subscribe to storage changes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`value`) => `void` | The callback to call when the storage changes. |

#### Returns

`void`

### storage.set()

> **set**: \<`T`\>(`value`) => `Promise`\<`void`\>

Set the storage.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`JSONCompatible`](JSONCompatible.md)\<`T`\> | The value to set the storage to |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the storage has been set.

### ui

> **ui**: `object`

Utilities to create UI components.

### ui.button()

> **button**: (`options`?) => `HTMLElement`

Create a button.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the button. |
| `options.label`? | `string` | The label of the button. |
| `options.leadingIcon`? | `string` | The leading icon of the button. |
| `options.size`? | `"small"` \| `"medium"` \| `"large"` | The size of the button. |
| `options.trailingIcon`? | `string` | The trailing icon of the button. |
| `options.variant`? | `"primary"` \| `"secondary"` \| `"tertiary"` | The variant of the button. |

#### Returns

`HTMLElement`

The button element.

### ui.card()

> **card**: (`options`?) => `HTMLElement`

Create a card.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the card. |
| `options.body`? | `HTMLElement` | The body of the card. |
| `options.footer`? | `HTMLElement` | The footer of the card. |
| `options.header`? | `HTMLElement` | The header of the card. |

#### Returns

`HTMLElement`

The card element.

### ui.httpRequestEditor()

> **httpRequestEditor**: () => [`HTTPRequestEditor`](HTTPRequestEditor.md)

Create an HTTP request editor

#### Returns

[`HTTPRequestEditor`](HTTPRequestEditor.md)

The HTTP request editor.

### ui.httpResponseEditor()

> **httpResponseEditor**: () => [`HTTPResponseEditor`](HTTPResponseEditor.md)

Create an HTTP response editor

#### Returns

[`HTTPResponseEditor`](HTTPResponseEditor.md)

The HTTP response editor.

### ui.well()

> **well**: (`options`?) => `HTMLElement`

Create a well.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | `object` | Options for the well. |
| `options.body`? | `HTMLElement` | The body of the well. |
| `options.footer`? | `HTMLElement` | The footer of the well. |
| `options.header`? | `HTMLElement` | The header of the well. |

#### Returns

`HTMLElement`

The well element.

### window

> **window**: `object`

Utilities to interact with the active page.

### window.getActiveEditor()

> **getActiveEditor**: () => [`Editor`](Editor.md) \| `undefined`

Get the active editor.

#### Returns

[`Editor`](Editor.md) \| `undefined`

The active editor.

### window.showToast()

> **showToast**: (`message`, `options`?) => `void`

Show a toast message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The message to show. |
| `options`? | `object` | Options for the toast message. |
| `options.duration`? | `number` | The duration of the toast message in milliseconds. |
| `options.variant`? | `"success"` \| `"error"` \| `"warning"` \| `"info"` | The variant of the toast message. |

#### Returns

`void`
