# Creating a Command

Commands are used to register actions to expose functionality, bind actions to the user-interface and implement business logic.

### Registering a Command

```ts
sdk.commands.register("hello", {
  name: "Print to console.",
  run: () => console.log("Hello world!"),
  group: "Custom Commands",
});
```

This creates a command.

- "hello" is the `id` that is used to reference the command.
- "Print to console." is the command `name` that will be displayed in context menus and within the command palette.
- "Custom Commands" is the category `group` within the command palette that the command will be listed under.

::: info
The optional `when` property defines a conditional that must be met for the command to be available.

_For example, to explicity set the command to be available at all times, `when: () => true` can be used._
:::

### Adding a Command to the Command Palette

```ts
sdk.commandPalette.register("hello");
```

This registers the previously created command to the command palette.

<img alt="Register command SDK." src="/_images/register_command_sdk.png" center/>
