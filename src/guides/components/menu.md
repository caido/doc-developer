# Customizing Context Menus

The context menu is the list of actions/options that appears when right-clicking within an application.

## menu

Used to register right-click context menu actions/options and create a plugin specific settings page, allowing quick access to your plugin functionality.

### To register an entry to the context menu:

```ts
sdk.menu.registerItem({
  type: "Request",
  commandId: "hello",
  leadingIcon: "fas fa-hand",
});
```

This registers the previously created [command](./command.md) to the context menu.

The `type` property specifies which context menu to add the action/option to:

- `Request` makes it available when right-clicking in a request pane.
- `RequestRow` makes it available when right-clicking on a request in a table.
- `Response` makes it available when right-clicking in a response pane.
- `Settings` makes it available when right-clicking in the settings menu.

The `commandId` value is the name of the registered command to execute.

The `leadingIcon` property is optional and adds an icon on the leading side of the entry.

::: info
When using the `Settings` value - an additional property of `path` exists which takes a string value of the path to be navigated to.
:::

<img alt="Register context menu SKD." src="/_images/register_menu_sdk.png" center/>
