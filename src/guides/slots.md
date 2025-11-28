# Adding Components to UI Slots

UI slots allow you to extend Caido's interface by adding custom components to specific locations, such as toolbars and footers. You can add buttons, commands, or custom components to these slots.

## Available Slots

### Footer Slots

Footer slots are available via `sdk.footer.addToSlot()`:

- `FooterSlot.FooterSlotPrimary` - Primary footer slot
- `FooterSlot.FooterSlotSecondary` - Secondary footer slot

### Replay Slots

Replay slots are available via `sdk.replay.addToSlot()`:

- `ReplaySlot.SessionToolbarPrimary` - Left side of the session toolbar
- `ReplaySlot.SessionToolbarSecondary` - Right side of the session toolbar
- `ReplaySlot.Topbar` - Topbar area

## Slot Content Types

You can add three types of content to slots:

### Button

A button with a label, icon, and click handler:

```ts
sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
  kind: "Button",
  label: "My Button",
  icon: "fas fa-rocket",
  onClick: () => {
    console.log("Button clicked");
  },
});
```

### Command

A button that triggers a registered command:

```ts
// First register the command
sdk.commands.register("my-command", {
  name: "My Command",
  run: () => {
    sdk.window.showToast("Command executed", { variant: "info" });
  },
});

// Then add to slot
sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
  kind: "Command",
  commandId: "my-command",
  icon: "fas fa-star",
});
```

### Custom Component

A custom component definition:

```ts
sdk.footer.addToSlot(FooterSlot.FooterSlotSecondary, {
  kind: "Custom",
  component: {
    render: (container: HTMLElement) => {
      const div = document.createElement("div");
      div.textContent = "Custom content";
      div.style.padding = "8px";
      container.appendChild(div);
    },
  },
});
```

## Example: Footer Actions

This example demonstrates adding multiple types of content to footer slots: a button with a click handler, a command button, and a custom status indicator component.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FooterSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Register a command
  sdk.commands.register("quick-action", {
    name: "Quick Action",
    run: () => {
      sdk.window.showToast("Quick action executed", { variant: "success" });
    },
  });

  // Add button to primary footer slot
  sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
    kind: "Button",
    label: "Custom Action",
    icon: "fas fa-bolt",
    onClick: () => {
      sdk.log.info("Custom action triggered");
    },
  });

  // Add command to primary footer slot
  sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
    kind: "Command",
    commandId: "quick-action",
    icon: "fas fa-star",
  });

  // Add custom component to secondary footer slot
  sdk.footer.addToSlot(FooterSlot.FooterSlotSecondary, {
    kind: "Custom",
    component: {
      render: (container: HTMLElement) => {
        const status = document.createElement("span");
        status.textContent = "Plugin Active";
        status.style.padding = "4px 8px";
        status.style.backgroundColor = "#4caf50";
        status.style.color = "white";
        status.style.borderRadius = "4px";
        container.appendChild(status);
      },
    },
  });
};
```

## Example: Replay Toolbar Extensions

This example adds custom buttons and components to different Replay toolbar slots, including the primary toolbar (left side), secondary toolbar (right side), and topbar area.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { ReplaySlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Add to session toolbar primary (left side)
  sdk.replay.addToSlot(ReplaySlot.SessionToolbarPrimary, {
    kind: "Button",
    label: "Custom Replay Action",
    icon: "fas fa-play",
    onClick: () => {
      sdk.log.info("Replay action triggered");
    },
  });

  // Add to session toolbar secondary (right side)
  sdk.replay.addToSlot(ReplaySlot.SessionToolbarSecondary, {
    kind: "Command",
    commandId: "my-replay-command",
    icon: "fas fa-cog",
  });

  // Add to topbar
  sdk.replay.addToSlot(ReplaySlot.Topbar, {
    kind: "Custom",
    component: {
      render: (container: HTMLElement) => {
        const badge = document.createElement("div");
        badge.textContent = "Replay Extension";
        badge.style.padding = "4px 8px";
        badge.style.backgroundColor = "#2196f3";
        badge.style.color = "white";
        badge.style.borderRadius = "4px";
        container.appendChild(badge);
      },
    },
  });
};
```

## Example: Dynamic Slot Content

This example creates a custom component that tracks and displays a click counter. The button updates its label each time it's clicked and shows a toast notification.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FooterSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  let clickCount = 0;

  sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
    kind: "Custom",
    component: {
      render: (container: HTMLElement) => {
        const button = document.createElement("button");
        button.textContent = `Clicks: ${clickCount}`;
        button.style.padding = "8px 16px";
        button.addEventListener("click", () => {
          clickCount++;
          button.textContent = `Clicks: ${clickCount}`;
          sdk.window.showToast(`Clicked ${clickCount} times`, { variant: "info" });
        });
        container.appendChild(button);
      },
    },
  });
};
```

## Example: Status Indicator

This example creates a status indicator component that shows a colored dot and connection status text. The status updates every 5 seconds to reflect the current connection state.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FooterSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.footer.addToSlot(FooterSlot.FooterSlotSecondary, {
    kind: "Custom",
    component: {
      render: (container: HTMLElement) => {
        const indicator = document.createElement("div");
        indicator.style.display = "flex";
        indicator.style.alignItems = "center";
        indicator.style.gap = "8px";

        const dot = document.createElement("div");
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = "#4caf50";

        const text = document.createElement("span");
        text.textContent = "Connected";

        indicator.appendChild(dot);
        indicator.appendChild(text);
        container.appendChild(indicator);

        // Update status periodically
        setInterval(() => {
          const isConnected = Math.random() > 0.1; // Example check
          dot.style.backgroundColor = isConnected ? "#4caf50" : "#f44336";
          text.textContent = isConnected ? "Connected" : "Disconnected";
        }, 5000);
      },
    },
  });
};
```

## Slot Import

You need to import the slot constants:

```ts
import { FooterSlot } from "@caido/sdk-frontend";
import { ReplaySlot } from "@caido/sdk-frontend";
```

## Best Practices

- Use buttons for simple actions that don't need command registration
- Use commands when you want the action to be available in multiple places (command palette, menus, etc.)
- Use custom components for complex UI or dynamic content
- Keep slot content concise to maintain a clean interface
- Consider the visual hierarchy when adding multiple items to the same slot

::: tip
Slots are a powerful way to extend Caido's UI without creating custom pages. Use them to add plugin-specific functionality that integrates seamlessly with the existing interface.
:::

::: info
Slot content is rendered when the relevant page is active. For footer slots, content is always visible. For Replay slots, content is only visible on the Replay page.
:::

::: warning
Be mindful of slot space limitations. Too many items in a slot can clutter the interface. Consider grouping related actions or using custom components to organize multiple controls.
:::

