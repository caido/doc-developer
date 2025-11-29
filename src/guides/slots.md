# Add to UI Slots

UI slots allow you to extend Caido's interface by adding custom components to specific locations, such as toolbars and footers. You can add buttons, commands, or custom components to these slots.

## Finding Available Slots

### Footer Slots

Footer slots are available via `sdk.footer.addToSlot()`:

- `FooterSlot.FooterSlotPrimary` - Primary footer slot
- `FooterSlot.FooterSlotSecondary` - Secondary footer slot

### Replay Slots

Replay slots are available via `sdk.replay.addToSlot()`:

- `ReplaySlot.SessionToolbarPrimary` - Left side of the session toolbar
- `ReplaySlot.SessionToolbarSecondary` - Right side of the session toolbar
- `ReplaySlot.Topbar` - Topbar area

## Adding Different Types of Content to Slots

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

A custom Vue component from a `.vue` file:

```vue
<!-- CustomStatus.vue -->
<script setup lang="ts">
// Component logic here
</script>

<template>
  <div class="p-2">
    Custom content
  </div>
</template>
```

```ts
import CustomStatus from "./CustomStatus.vue";

sdk.footer.addToSlot(FooterSlot.FooterSlotSecondary, {
  kind: "Custom",
  component: {
    component: CustomStatus,
  },
});
```

## Component Props

Custom slot components automatically receive the SDK as an implicit prop. You don't need to pass it explicitly when registering the component.

If your Vue component defines an `sdk` prop, it will automatically receive the SDK instance:

```vue
<script setup lang="ts">
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();
</script>
```

## Importing Slot Constants

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

::: warning
Be mindful of slot space limitations. Too many items in a slot can clutter the interface. Consider grouping related actions or using custom components to organize multiple controls.
:::

## Examples

### Footer Actions

This example demonstrates adding multiple types of content to footer slots: a button with a click handler, a command button, and a custom status indicator component.

First, create the status indicator component:

```vue
<!-- StatusIndicator.vue -->
<script setup lang="ts">
// Component logic here
</script>

<template>
  <span class="px-2 py-1 bg-green-500 text-white rounded">
    Plugin Active
  </span>
</template>
```

Then, register all slot content types:

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FooterSlot } from "@caido/sdk-frontend";
import StatusIndicator from "./StatusIndicator.vue";

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
      component: StatusIndicator,
    },
  });
};
```

### Dynamic Slot Content

This example creates a custom component that tracks and displays a click counter. The button updates its label each time it's clicked and shows a toast notification.

First, create a Vue component with reactive state. The SDK is automatically passed as a prop, so you only need to define it in the component:

```vue
<!-- ClickCounter.vue -->
<script setup lang="ts">
import { ref } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

const count = ref(0);

const handleClick = () => {
  count.value++;
  props.sdk.window.showToast(`Clicked ${count.value} times`, { variant: "info" });
};
</script>

<template>
  <button
    @click="handleClick"
    class="px-4 py-2"
  >
    Clicks: {{ count }}
  </button>
</template>
```

Then, register the component in a slot. You don't need to pass the SDK prop explicitly:

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FooterSlot } from "@caido/sdk-frontend";
import ClickCounter from "./ClickCounter.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.footer.addToSlot(FooterSlot.FooterSlotPrimary, {
    kind: "Custom",
    component: {
      component: ClickCounter,
    },
  });
};
```

::: tip
Slots are a powerful way to extend Caido's UI without creating custom pages. Use them to add plugin-specific functionality that integrates seamlessly with the existing interface.
:::

::: info
Slot content is rendered when the relevant page is active. For footer slots, content is always visible. For Replay slots, content is only visible on the Replay page.
:::
