# Manage Scopes

Scopes define which requests and responses are included or excluded from various operations in Caido. You can programmatically create, update, delete, and query scopes, as well as set the active scope on different pages.

::: tip
Use scopes to filter requests programmatically across different pages. This is useful for automation and workflow management.
:::

## Creating and Managing Scopes

### Creating a Scope

Create a new scope using `sdk.scopes.createScope()`. The `allowlist` specifies URLs that should be included, while `denylist` specifies URLs that should be excluded. Both support wildcard patterns.

```ts
const scope = await sdk.scopes.createScope({
  name: "My Scope",
  allowlist: ["*example.com", "*github.com"],
  denylist: ["*caido.io"],
});
```

### Getting All Scopes

Retrieve all available scopes using `sdk.scopes.getScopes()`:

```ts
const scopes = sdk.scopes.getScopes();
```

### Updating a Scope

Update an existing scope by providing the scope ID and the fields you want to change. You can update the name, allowlist, or denylist. All fields are optional.

```ts
const updatedScope = await sdk.scopes.updateScope(scopeId, {
  name: "Updated Scope Name",
  allowlist: ["*example.com"],
  denylist: ["*caido.io", "*test.com"],
});
```

### Deleting a Scope

Delete a scope by its ID. The method returns `true` if the scope was successfully deleted.

```ts
const deleted = await sdk.scopes.deleteScope(scopeId);
```

### Getting the Current Scope

To get the currently selected scope:

```ts
const currentScope = sdk.scopes.getCurrentScope();
```

Returns the currently selected scope, or `undefined` if no scope is selected.

### Subscribing to Scope Changes

To subscribe to changes in the currently selected scope:

```ts
const handler = sdk.scopes.onCurrentScopeChange((event) => {
  console.log(`Scope ${event.scopeId} got selected!`);
});

// Later, stop listening
handler.stop();
```

The callback receives an event object with a `scopeId` property that contains the ID of the newly selected scope, or `undefined` if no scope is selected.

::: info
The subscription handler returns an object with a `stop()` method that can be called to unsubscribe from scope changes.
:::

## Adding Components to Scope Slots

You can add custom components to scope slots to extend the Scopes page UI. Available slots are:

- `ScopeSlot.CreateHeader` - The header area of the preset form create component, to the left of the ScopeTooltip
- `ScopeSlot.UpdateHeader` - The header area of the preset form update component, to the left of the ScopeTooltip

### Adding a Button to a Slot

Add a button with a label, icon, and click handler:

```ts
import { ScopeSlot } from "@caido/sdk-frontend";

sdk.scopes.addToSlot(ScopeSlot.UpdateHeader, {
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
import { ScopeSlot } from "@caido/sdk-frontend";

// First register the command
sdk.commands.register("my-command", {
  name: "My Command",
  run: () => {
    sdk.window.showToast("Command executed", { variant: "info" });
  },
});

// Then add to slot
sdk.scopes.addToSlot(ScopeSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

### Adding a Custom Component to a Slot

Add a custom Vue component:

```ts
import { ScopeSlot } from "@caido/sdk-frontend";
import MyComponent from "./MyComponent.vue";

sdk.scopes.addToSlot(ScopeSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});
```

## Setting Scopes on Different Pages

Different pages in Caido provide scope operations specific to their context. You can get the current scope ID and set a new scope for each page.

### Setting Scope on HTTP History

Get the current scope ID or set a new scope for the HTTP History page:

```ts
// Get current scope
const currentScopeId = sdk.httpHistory.getScopeId();

// Set scope
await sdk.httpHistory.setScope(scopeId);
```

### Setting Scope on Search

Get the current scope ID or set a new scope for the Search page:

```ts
// Get current scope
const currentScopeId = sdk.search.getScopeId();

// Set scope
await sdk.search.setScope(scopeId);
```

### Setting Scope on Sitemap

Get the current scope ID or set a new scope for the Sitemap page:

```ts
// Get current scope
const currentScopeId = sdk.sitemap.getScopeId();

// Set scope
await sdk.sitemap.setScope(scopeId);
```

### Setting Scope on Intercept

Get the current scope ID or set a new scope for the Intercept page:

```ts
// Get current scope
const currentScopeId = sdk.intercept.getScopeId();

// Set scope
sdk.intercept.setScope(scopeId);
```

::: info
Scope operations on different pages may have different return types. HTTP History and Search return promises, while Intercept returns void.
:::

## Using Wildcard Patterns

Scope allowlists and denylists support wildcard patterns to match multiple URLs:

- `*example.com` - Matches any subdomain of example.com
- `example.com` - Matches exactly example.com
- `*` - Matches everything (when used in allowlist)

Create a scope with wildcard patterns to filter production URLs while excluding test and development environments:

```ts
const scope = await sdk.scopes.createScope({
  name: "Production Scope",
  allowlist: ["*prod.example.com", "*api.example.com"],
  denylist: ["*test.example.com", "*dev.example.com"],
});
```

## Examples

### Scope Management Plugin

This example creates a scope management interface that lists all scopes with their allowlists and denylists. It provides buttons to create new scopes and delete existing ones, with automatic list refreshing.

```ts
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import type { Caido } from "@caido/sdk-frontend";

import App from "./views/App.vue";

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

  sdk.navigation.addPage("/scope-manager", {
    body: root,
  });
};
```

```vue
<script setup lang="ts">
import Button from "primevue/button";
import { inject, onMounted, ref } from "vue";

import type { CaidoSDK } from "../index";

const sdk = inject<CaidoSDK>("sdk");
const scopes = ref<Array<{ id: string; name: string; allowlist: string[]; denylist: string[] }>>([]);

const refreshScopes = () => {
  if (!sdk) return;
  scopes.value = sdk.scopes.getScopes();
};

const createScope = async () => {
  if (!sdk) return;
  const scope = await sdk.scopes.createScope({
    name: `Scope ${Date.now()}`,
    allowlist: ["*example.com"],
    denylist: [],
  });
  if (scope) {
    refreshScopes();
    sdk.window.showToast("Scope created", { variant: "success" });
  }
};

const deleteScope = async (id: string) => {
  if (!sdk) return;
  await sdk.scopes.deleteScope(id);
  refreshScopes();
  sdk.window.showToast("Scope deleted", { variant: "success" });
};

onMounted(() => {
  refreshScopes();
});
</script>

<template>
  <div class="h-full flex flex-col p-4 gap-4">
    <Button label="Create New Scope" @click="createScope" />
    <div v-if="scopes.length === 0" class="text-gray-400">No scopes found</div>
    <div v-else class="flex flex-col gap-2">
      <div
        v-for="scope in scopes"
        :key="scope.id"
        class="p-2 border border-gray-600 rounded"
      >
        <h3 class="font-bold mb-1">{{ scope.name }}</h3>
        <p class="text-sm text-gray-400">Allowlist: {{ scope.allowlist.join(", ") }}</p>
        <p class="text-sm text-gray-400">Denylist: {{ scope.denylist.join(", ") }}</p>
        <Button
          label="Delete"
          severity="secondary"
          size="small"
          class="mt-2"
          @click="deleteScope(scope.id)"
        />
      </div>
    </div>
  </div>
</template>
```

### Setting Scope on Page Navigation

This example automatically sets a specific scope when navigating to the HTTP History page. It creates or finds a scope named "Auto Scope" and applies it whenever the user visits HTTP History.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Get or create a scope
  let targetScopeId: string | undefined;

  const initializeScope = async () => {
    const scopes = sdk.scopes.getScopes();
    let scope = scopes.find((s) => s.name === "Auto Scope");

    if (!scope) {
      scope = await sdk.scopes.createScope({
        name: "Auto Scope",
        allowlist: ["*example.com"],
        denylist: [],
      });
    }

    if (scope) {
      targetScopeId = scope.id;
    }
  };

  // Set scope when navigating to HTTP History
  sdk.navigation.onPageChange(async (event) => {
    if (event.routeId === "http-history" && targetScopeId) {
      await sdk.httpHistory.setScope(targetScopeId);
      sdk.log.info("Scope set for HTTP History");
    }
  });

  initializeScope();
};
```

### Tracking Current Scope Changes

This example subscribes to scope selection changes and logs information about the currently selected scope whenever it changes.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const handler = sdk.scopes.onCurrentScopeChange((event) => {
    if (event.scopeId) {
      const scope = sdk.scopes.getCurrentScope();
      if (scope) {
        sdk.log.info(`Scope selected: ${scope.name}`);
        sdk.log.info(`Allowlist: ${scope.allowlist.join(", ")}`);
        sdk.log.info(`Denylist: ${scope.denylist.join(", ")}`);
      }
    } else {
      sdk.log.info("No scope selected");
    }
  });

  // Store handler for cleanup if needed
  // handler.stop();
};
```

### Adding Custom Actions to Scope Slots

This example adds a custom button to the scope update header that duplicates the current scope when clicked.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { ScopeSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.scopes.addToSlot(ScopeSlot.UpdateHeader, {
    type: "Button",
    label: "Duplicate Scope",
    icon: "fas fa-copy",
    onClick: async () => {
      const currentScope = sdk.scopes.getCurrentScope();
      if (currentScope) {
        const duplicated = await sdk.scopes.createScope({
          name: `${currentScope.name} (Copy)`,
          allowlist: [...currentScope.allowlist],
          denylist: [...currentScope.denylist],
        });
        if (duplicated) {
          sdk.window.showToast(`Scope "${duplicated.name}" created`, {
            variant: "success",
          });
        }
      } else {
        sdk.window.showToast("No scope selected", { variant: "warning" });
      }
    },
  });
};
```
