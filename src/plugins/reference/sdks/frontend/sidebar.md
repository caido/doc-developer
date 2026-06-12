# Sidebar

### SidebarItem

> **SidebarItem** = `object`

Represents a sidebar item.

#### Properties

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

> **SidebarSDK** = `object`

Utilities to interact with the sidebar.

#### Properties

##### registerItem()

> **registerItem**: (`name`: `string`, `path`: `string`, `options?`: `object`) => [`SidebarItem`](#sidebaritem)

Register a sidebar item.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the sidebar item. |
| `path` | `string` | The path that the user will be navigated to when the sidebar item is clicked. |
| `options?` | \{ `group?`: `string`; `icon?`: [`Icon`](utils.md#icon); `isExternal?`: `boolean`; \} | Options for the sidebar item. |
| `options.group?` | `string` | The group the sidebar item belongs to. |
| `options.icon?` | [`Icon`](utils.md#icon) | The [Icon](utils.md#icon) of the sidebar item. |
| `options.isExternal?` | `boolean` | Whether the path points to an external URL. |

###### Returns

[`SidebarItem`](#sidebaritem)

The created sidebar item.

###### Example

```ts
sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
  icon: "fas fa-rocket",
});
```
