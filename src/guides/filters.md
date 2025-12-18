# Use HTTPQL Queries

HTTPQL is Caido's query language for filtering HTTP requests. You can programmatically create, manage, and apply filters, as well as set HTTPQL queries on pages like HTTP History and Search.

## Managing Saved Filters

### Creating a Filter

To create a saved filter:

```ts
const filter = await sdk.filters.create({
  name: "My Filter",
  alias: "my-filter",
  query: "resp.code.eq:200",
});
```

- `name` - The display name of the filter
- `alias` - A short identifier used in HTTPQL queries (e.g., `preset:my-filter`)
- `query` - The HTTPQL query expression

::: tip
Use saved filters to create reusable query presets that can be referenced with the `preset:` prefix in HTTPQL queries.
:::

### Getting All Filters

To retrieve all saved filters:

```ts
const filters = await sdk.filters.getAll();
```

### Updating a Filter

To update an existing filter:

```ts
const updatedFilter = await sdk.filters.update(filterId, {
  name: "Updated Filter Name",
  query: "resp.code.eq:200 AND req.method.eq:\"GET\"",
});
```

### Deleting a Filter

To delete a filter:

```ts
await sdk.filters.delete(filterId);
```

### Getting the Current Filter

To get the currently selected filter:

```ts
const currentFilter = sdk.filters.getCurrentFilter();
```

Returns the currently selected filter, or `undefined` if no filter is selected.

### Subscribing to Filter Changes

To subscribe to changes in the currently selected filter:

```ts
const handler = sdk.filters.onCurrentFilterChange((event) => {
  console.log(`Filter ${event.filterId} got selected!`);
});

// Later, stop listening
handler.stop();
```

The callback receives an event object with a `filterId` property that contains the ID of the newly selected filter, or `undefined` if no filter is selected.

::: info
The subscription handler returns an object with a `stop()` method that can be called to unsubscribe from filter changes.
:::

## Adding Components to Filter Slots

You can add custom components to filter slots to extend the Filters page UI. Available slots are:

- `FilterSlot.CreateHeader` - The header area of the preset form create component
- `FilterSlot.UpdateHeader` - The header area of the preset form update component

### Adding a Button to a Slot

Add a button with a label, icon, and click handler:

```ts
import { FilterSlot } from "@caido/sdk-frontend";

sdk.filters.addToSlot(FilterSlot.UpdateHeader, {
  type: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});
```

### Adding a Command to a Slot

Add a button that triggers a registered command:

```ts
import { FilterSlot } from "@caido/sdk-frontend";

// First register the command
sdk.commands.register("my-command", {
  name: "My Command",
  run: () => {
    sdk.window.showToast("Command executed", { variant: "info" });
  },
});

// Then add to slot
sdk.filters.addToSlot(FilterSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

### Adding a Custom Component to a Slot

Add a custom Vue component:

```ts
import { FilterSlot } from "@caido/sdk-frontend";
import MyComponent from "./MyComponent.vue";

sdk.filters.addToSlot(FilterSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});
```

## Setting HTTPQL Queries on Pages

### HTTP History

You can get and set the current HTTPQL query on the HTTP History page:

```ts
// Get current query
const currentQuery = sdk.httpHistory.getQuery();

// Set query
sdk.httpHistory.setQuery("resp.code.eq:200 AND req.method.eq:\"GET\"");

// Scroll to a specific request by ID
sdk.httpHistory.scrollTo(requestId);
```

::: info
The `scrollTo()` method is useful for highlighting specific requests after applying a filter, making it easier for users to find relevant results.
:::

### Search

Similarly, you can manage queries on the Search page:

```ts
// Get current query
const currentQuery = sdk.search.getQuery();

// Set query
sdk.search.setQuery("resp.code.eq:404");

// Scroll to a specific request by ID
sdk.search.scrollTo(requestId);
```

## Examples

### Dynamic Query Building

This example creates a query builder interface with input fields for status code, HTTP method, and path. It dynamically constructs HTTPQL queries from the input values and applies them to HTTP History.

```ts
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import type { Caido } from "@caido/sdk-frontend";

import App from "./views/QueryBuilder.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const app = createApp(App);
  
  app.provide("sdk", sdk);
  
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  app.mount(root);

  sdk.navigation.addPage("/query-builder", {
    body: root,
  });
};
```

```vue
<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import { inject, ref } from "vue";

import type { CaidoSDK } from "../index";

const sdk = inject<CaidoSDK>("sdk");
const status = ref<number | null>(null);
const method = ref<string>("");
const path = ref<string>("");

const buildQuery = (): string => {
  const parts: string[] = [];

  if (status.value) {
    parts.push(`resp.code.eq:${status.value}`);
  }
  if (method.value) {
    parts.push(`req.method.eq:"${method.value}"`);
  }
  if (path.value) {
    parts.push(`req.path.contains:"${path.value}"`);
  }

  return parts.join(" AND ");
};

const applyFilter = () => {
  if (!sdk) return;
  const query = buildQuery();

  if (query) {
    sdk.httpHistory.setQuery(query);
    sdk.navigation.goTo({ id: "http-history" });
    sdk.window.showToast("Filter applied", { variant: "success" });
  } else {
    sdk.window.showToast("Please enter at least one filter", { variant: "warning" });
  }
};
</script>

<template>
  <div class="h-full flex flex-col p-4 gap-4">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium">Status Code</label>
      <InputNumber v-model="status" placeholder="e.g., 200" inputClass="w-full" />
    </div>
    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium">Method</label>
      <InputText v-model="method" placeholder="e.g., GET" />
    </div>
    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium">Path</label>
      <InputText v-model="path" placeholder="e.g., /api" />
    </div>
    <Button label="Apply Filter" @click="applyFilter" />
  </div>
</template>
```

### Using Filter Presets

This example demonstrates creating a filter with an alias and then using that filter as a preset in HTTPQL queries. The preset can be referenced using the `preset:` prefix followed by the alias.

```ts
// Create a filter with an alias
const filter = await sdk.filters.create({
  name: "Successful GET Requests",
  alias: "success-get",
  query: "resp.code.eq:200 AND req.method.eq:\"GET\"",
});

// Use the filter in a query
sdk.httpHistory.setQuery("preset:success-get");
```

### Tracking Current Filter Changes

This example subscribes to filter selection changes and logs information about the currently selected filter whenever it changes.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const handler = sdk.filters.onCurrentFilterChange((event) => {
    if (event.filterId) {
      const filter = sdk.filters.getCurrentFilter();
      if (filter) {
        sdk.log.info(`Filter selected: ${filter.name} (${filter.alias})`);
        sdk.log.info(`Query: ${filter.query}`);
      }
    } else {
      sdk.log.info("No filter selected");
    }
  });

  // Store handler for cleanup if needed
  // handler.stop();
};
```

### Adding Custom Actions to Filter Slots

This example adds a custom button to the filter update header that duplicates the current filter when clicked.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { FilterSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.filters.addToSlot(FilterSlot.UpdateHeader, {
    type: "Button",
    label: "Duplicate Filter",
    icon: "fas fa-copy",
    onClick: async () => {
      const currentFilter = sdk.filters.getCurrentFilter();
      if (currentFilter) {
        const duplicated = await sdk.filters.create({
          name: `${currentFilter.name} (Copy)`,
          alias: `${currentFilter.alias}-copy`,
          query: currentFilter.query,
        });
        sdk.window.showToast(`Filter "${duplicated.name}" created`, {
          variant: "success",
        });
      } else {
        sdk.window.showToast("No filter selected", { variant: "warning" });
      }
    },
  });
};
```
