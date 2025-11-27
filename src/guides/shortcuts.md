# How to Register Keyboard Shortcuts

Keyboard shortcuts provide quick access to commands, improving the user experience for power users and enabling accessibility features.

## Registering a Shortcut

To register a keyboard shortcut for a command, use `sdk.shortcuts.register()`:

```ts
sdk.shortcuts.register("my-command", ["Ctrl+Shift+K"]);
```

The first parameter is the command ID (the same ID used when registering the command), and the second parameter is an array of key combinations.

## Key Combination Format

Key combinations are specified as strings using the following format:

- Modifier keys: `Ctrl`, `Alt`, `Shift`, `Meta` (Command on Mac)
- Regular keys: Any letter, number, or special key
- Combinations: `"Ctrl+K"`, `"Ctrl+Shift+K"`, `"Alt+F1"`

```ts
// Single modifier
sdk.shortcuts.register("save", ["Ctrl+S"]);

// Multiple modifiers
sdk.shortcuts.register("find", ["Ctrl+Shift+F"]);

// Alt key
sdk.shortcuts.register("open-settings", ["Alt+S"]);
```

## Complete Example

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

// First, register the command
sdk.commands.register("quick-action", {
  name: "Quick Action",
  run: () => {
    sdk.window.showToast("Quick action executed!", { variant: "info" });
  },
});

// Then register the keyboard shortcut
sdk.shortcuts.register("quick-action", ["Ctrl+K", "Ctrl+Q"]);
```

You can register multiple key combinations for the same command:

```ts
sdk.shortcuts.register("quick-action", ["Ctrl+K", "Ctrl+Q", "F5"]);
```

## Platform Considerations

- On macOS, `Meta` refers to the Command key (⌘)
- On Windows/Linux, `Meta` refers to the Windows/Super key
- `Ctrl` works consistently across platforms
- Consider providing platform-specific shortcuts if needed

## Example: Command with Shortcut

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Register command
  sdk.commands.register("toggle-feature", {
    name: "Toggle Feature",
    run: () => {
      // Toggle logic here
      sdk.log.info("Feature toggled");
    },
  });

  // Register keyboard shortcut
  sdk.shortcuts.register("toggle-feature", ["Ctrl+T"]);

  // Also register to command palette
  sdk.commandPalette.register("toggle-feature");
};
```

::: tip
Keyboard shortcuts work globally when the command is available. Use the `when` property on commands to control when shortcuts are active.
:::

::: warning
Avoid registering shortcuts that conflict with Caido's built-in shortcuts. Common shortcuts like `Ctrl+C`, `Ctrl+V`, `Ctrl+Z` are reserved for standard operations.
:::

