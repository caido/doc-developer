# Register Shortcuts

Keyboard shortcuts provide quick access to commands, improving the user experience for power users and enabling accessibility features.

## Registering a Shortcut

To register a keyboard shortcut for a command, use `sdk.shortcuts.register()`:

```ts
sdk.shortcuts.register("my-command", ["Control", "Shift", "K"]);
```

The first parameter is the command ID (the same ID used when registering the command), and the second parameter is an array of individual keys that form the key combination.

::: warning
Avoid registering shortcuts that conflict with Caido's built-in shortcuts. Common shortcuts like `["Control", "C"]`, `["Control", "V"]`, `["Control", "Z"]` are reserved for standard operations.
:::

## Key Combination Format

Key combinations are specified as an array of individual key strings. Each key should be a valid [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) value:

- Modifier keys: `"Control"`, `"Alt"`, `"Shift"`, `"Meta"` (Command on Mac)
- Regular keys: Any letter, number, or special key (e.g., `"K"`, `"F1"`, `"Enter"`)
- Combinations: Array of keys like `["Control", "K"]`, `["Control", "Shift", "F"]`, `["Alt", "F1"]`

```ts
// Single modifier
sdk.shortcuts.register("save", ["Control", "S"]);

// Multiple modifiers
sdk.shortcuts.register("find", ["Control", "Shift", "F"]);

// Alt key
sdk.shortcuts.register("open-settings", ["Alt", "S"]);
```

## Complete Example

```ts
// First, register the command
sdk.commands.register("quick-action", {
  name: "Quick Action",
  run: () => {
    sdk.window.showToast("Quick action executed!", { variant: "info" });
  },
});

// Then register the keyboard shortcut
sdk.shortcuts.register("quick-action", ["Control", "K"]);
```

You can register multiple key combinations for the same command by calling `register` multiple times:

```ts
sdk.shortcuts.register("quick-action", ["Control", "K"]);
sdk.shortcuts.register("quick-action", ["Control", "Q"]);
sdk.shortcuts.register("quick-action", ["F5"]);
```

## Platform Considerations

- On macOS, `"Meta"` refers to the Command key (⌘)
- On Windows/Linux, `"Meta"` refers to the Windows/Super key
- `"Control"` works consistently across platforms
- Consider providing platform-specific shortcuts if needed

## Examples

### Command with Shortcut

This example registers a command that toggles a feature, assigns it a keyboard shortcut (Control+T), and also makes it available in the command palette. This demonstrates the complete setup for a command with keyboard access.

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
  sdk.shortcuts.register("toggle-feature", ["Control", "T"]);

  // Also register to command palette
  sdk.commandPalette.register("toggle-feature");
};
```

::: tip
Keyboard shortcuts work globally when the command is available. Use the `when` property on commands to control when shortcuts are active.
:::
