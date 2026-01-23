# Manage Automate Sessions and Entries

The Automate SDK allows you to interact with the Automate page, manage sessions and entries, add indicators, and extend the request/response editors with custom functionality.

## Session Management

### Getting Sessions

To retrieve all automate sessions:

```ts
const sessions = sdk.automate.getSessions();
```

Each session contains:
- `id` - The unique identifier
- `name` - The session name
- `createdAt` - The creation date
- `entryIds` - Array of entry IDs in the session

### Getting Entries

To get all entries for a specific session:

```ts
const entries = sdk.automate.getEntries(sessionId);
```

Each entry contains:
- `id` - The unique identifier
- `name` - The entry name
- `createdAt` - The creation date

## Adding Indicators

Indicators are visual badges displayed next to entry names in the collections tree. They're useful for highlighting important entries or showing status information.

### Adding an Entry Indicator

```ts
const indicator = sdk.automate.addEntryIndicator(entryId, {
  icon: "fas fa-exclamation-triangle",
  description: "Security warning",
});
```

The `addEntryIndicator` method returns a handle object with a `remove` method to remove the indicator later:

```ts
// Later, remove the indicator
indicator.remove();
```

### Indicator Options

- `icon` - Font Awesome icon class (e.g., `"fas fa-check"`, `"fas fa-warning"`)
- `description` - Tooltip text shown on hover

## Extending Editors

You can add CodeMirror extensions to the request editor on the Automate page:

```ts
import { Extension } from "@codemirror/state";

const myExtension: Extension = [
  // Your CodeMirror extension configuration
];

sdk.automate.addRequestEditorExtension(myExtension);
```

For more information on creating editor extensions, see the [Extend Editors](/guides/editor_extensions.md) guide.

## Adding View Modes

You can add custom request and response view modes to the Automate page:

### Request View Modes

```ts
sdk.automate.addRequestViewMode({
  label: "My Custom View",
  view: {
    component: MyComponent,
  },
});
```

### Response View Modes

```ts
sdk.automate.addResponseViewMode({
  label: "My Custom Response View",
  view: {
    component: MyResponseComponent,
  },
});
```

For more information on creating view modes, see the [Add View Modes](/guides/view_modes.md) guide.

## Page Context

You can access the Automate page context to get information about the current state:

```ts
const context = sdk.window.getPageContext();
if (context?.kind === "Automate") {
  // Access Automate-specific context
  const { selection, requestSelection } = context;
}
```

The Automate page context includes:
- `kind` - Always `"Automate"`
- `selection` - Current selection of sessions or entries
- `requestSelection` - Current request selection

## Examples

### Session Monitor Plugin

This example creates a plugin that monitors automate sessions and adds indicators to entries based on custom criteria:

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const checkEntries = () => {
    const sessions = sdk.automate.getSessions();
    
    sessions.forEach((session) => {
      const entries = sdk.automate.getEntries(session.id);
      
      entries.forEach((entry) => {
        // Add indicator for entries created in the last hour
        const oneHourAgo = Date.now() - 60 * 60 * 1000;
        if (entry.createdAt.getTime() > oneHourAgo) {
          sdk.automate.addEntryIndicator(entry.id, {
            icon: "fas fa-clock",
            description: "Recently created",
          });
        }
      });
    });
  };

  // Check entries periodically
  setInterval(checkEntries, 60000); // Every minute
  
  // Initial check
  checkEntries();
};
```

### Custom Request Analyzer

This example adds a custom view mode to analyze automate requests:

```vue
<script setup lang="ts">
import { computed } from "vue";
import type { Caido, RequestFull } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
  request: RequestFull;
}>();

const analysis = computed(() => {
  const body = props.request.body || "";
  const headers = props.request.headers || {};
  
  return {
    bodySize: body.length,
    hasAuth: !!headers.authorization,
    method: props.request.method,
  };
});
</script>

<template>
  <div class="p-4">
    <h3 class="font-bold mb-2">Request Analysis</h3>
    <div class="space-y-1">
      <div>Body Size: {{ analysis.bodySize }} bytes</div>
      <div>Has Auth: {{ analysis.hasAuth ? "Yes" : "No" }}</div>
      <div>Method: {{ analysis.method }}</div>
    </div>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import RequestAnalyzer from "./RequestAnalyzer.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.automate.addRequestViewMode({
    label: "Request Analyzer",
    view: {
      component: RequestAnalyzer,
    },
  });
};
```

