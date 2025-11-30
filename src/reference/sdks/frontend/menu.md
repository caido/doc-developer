# Menu

### MenuItem

> **MenuItem** = [`RequestRowMenuItem`](#requestrowmenuitem) \| [`SettingsMenuItem`](#settingsmenuitem) \| [`RequestMenuItem`](#requestmenuitem) \| [`ResponseMenuItem`](#responsemenuitem)

A content-menu item.

***

### MenuSDK

> **MenuSDK** = `object`

Utilities to insert menu items and context-menus throughout the UI.

#### Properties

##### registerItem()

> **registerItem**: (`item`: [`MenuItem`](#menuitem)) => `void`

Register a menu item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`MenuItem`](#menuitem) | The menu item to register. |

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

> **RequestMenuItem** = `object`

A context-menu item that appears when right-clicking a request pane.

#### Properties

##### commandId

> **commandId**: [`CommandID`](other.md#commandid)

The command ID to execute when the menu item is clicked.

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"Request"`

***

### RequestRowMenuItem

> **RequestRowMenuItem** = `object`

A context-menu item that appears when right-clicking a request row.

#### Properties

##### commandId

> **commandId**: [`CommandID`](other.md#commandid)

The command ID to execute when the menu item is clicked.

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"RequestRow"`

***

### ResponseMenuItem

> **ResponseMenuItem** = `object`

A context-menu item that appears when right-clicking a response pane.

#### Properties

##### commandId

> **commandId**: [`CommandID`](other.md#commandid)

The command ID to execute when the menu item is

##### leadingIcon?

> `optional` **leadingIcon**: `string`

The icon to display to the left of the menu item.

##### type

> **type**: `"Response"`

***

### SettingsMenuItem

> **SettingsMenuItem** = `object`

A menu item that appears in the settings menu.

#### Properties

##### label

> **label**: `string`

The label of the menu item.

##### leadingIcon?

> `optional` **leadingIcon**: [`Icon`](utils.md#icon)

The [Icon](utils.md#icon) to display to the left of the menu item.

##### path

> **path**: `string`

The path that the user will be navigated to when the menu item is clicked
The path must start with "/settings/".

##### type

> **type**: `"Settings"`
