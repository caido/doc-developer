# Manage Replay Sessions

Replay sessions allow you to replay HTTP requests, and collections help organize related sessions. You can programmatically create, manage, and interact with replay sessions and collections.

## Session Management

### Creating a Session

To create a new replay session:

```ts
await sdk.replay.createSession(source, collectionId);
```

The `source` parameter is a `RequestSource` object that can either be a raw HTTP request (with `type: "Raw"`, `raw` string, and `connectionInfo`) or a reference to an existing request by ID (with `type: "ID"` and `id` string). The optional `collectionId` adds the session to a specific collection.

### Getting Sessions

To retrieve all replay sessions:

```ts
const sessions = sdk.replay.getSessions();
```

### Renaming a Session

To rename a session:

```ts
await sdk.replay.renameSession(sessionId, "New Session Name");
```

### Deleting Sessions

To delete one or more sessions:

```ts
const deletedIds = await sdk.replay.deleteSessions([sessionId1, sessionId2]);
```

Returns an array of IDs that were successfully deleted.

## Collection Management

### Creating a Collection

To create a new collection:

```ts
const collection = await sdk.replay.createCollection("My Collection");
```

::: tip
Use collections to organize related replay sessions, making it easier to manage and find specific sessions for testing scenarios.
:::

### Getting Collections

To retrieve all collections:

```ts
const collections = sdk.replay.getCollections();
```

### Renaming a Collection

To rename a collection:

```ts
await sdk.replay.renameCollection(collectionId, "New Collection Name");
```

### Deleting a Collection

To delete a collection:

```ts
const deleted = await sdk.replay.deleteCollection(collectionId);
```

Returns `true` if the collection was successfully deleted.

::: warning
Deleting a collection does not delete the sessions it contains. Sessions are moved to the default location when their collection is deleted.
:::

## Tab Management

### Getting Tabs

To get all open replay tabs:

```ts
const tabs = sdk.replay.getTabs();
```

### Opening a Tab

To open a session in a new tab:

```ts
sdk.replay.openTab(sessionId, { select: true });
```

The `select` option (default: `true`) determines whether to select the tab after opening it.

### Closing a Tab

To close a tab:

```ts
sdk.replay.closeTab(sessionId);
```

## Sending Requests

To send a request to the Replay backend:

```ts
await sdk.replay.sendRequest(requestId);
```

## Subscribing to Session Changes

To listen for changes to the current replay session:

```ts
const handler = sdk.replay.onCurrentSessionChange((event) => {
  console.log("Session changed to:", event.sessionId);
});

// Later, stop listening
handler.stop();
```

## Adding Indicators to Sessions

Indicators are visual badges displayed next to session names in the collections tree. They're useful for highlighting important sessions or showing status information.

### Adding a Session Indicator

```ts
const indicator = sdk.replay.addSessionIndicator(sessionId, {
  icon: "fas fa-exclamation-triangle",
  description: "Security warning",
});
```

The `addSessionIndicator` method returns a handle object with a `remove` method to remove the indicator later:

```ts
// Later, remove the indicator
indicator.remove();
```

### Indicator Options

- `icon` - Font Awesome icon class (e.g., `"fas fa-check"`, `"fas fa-warning"`)
- `description` - Tooltip text shown on hover

## Adding Response View Modes

You can add custom response view modes to the Replay page:

```ts
sdk.replay.addResponseViewMode({
  label: "My Custom Response View",
  view: {
    component: MyResponseComponent,
  },
});
```

For more information on creating response view modes, see the [Add View Modes](/guides/view_modes.md) guide.

::: info
Sessions and collections are persisted across Caido restarts, so programmatically created items will remain available.
:::

## Examples

### Session Manager Plugin

This example creates a comprehensive session and collection management interface. It displays all replay sessions and collections, allows opening sessions in tabs, creating new collections, and deleting items. It also subscribes to session change events.

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

  sdk.navigation.addPage("/replay-manager", {
    body: root,
  });

  // Listen for session changes
  sdk.replay.onCurrentSessionChange((event) => {
    sdk.log.info("Current session changed to:", event.sessionId);
  });
};
```

```vue
<script setup lang="ts">
import Button from "primevue/button";
import { inject, onMounted, ref } from "vue";

import type { CaidoSDK } from "../index";

const sdk = inject<CaidoSDK>("sdk");

const sessions = ref<Array<{ id: string; name?: string }>>([]);
const collections = ref<Array<{ id: string; name: string; sessionIds: string[] }>>([]);

const refreshSessions = () => {
  if (!sdk) return;
  sessions.value = sdk.replay.getSessions();
};

const refreshCollections = () => {
  if (!sdk) return;
  collections.value = sdk.replay.getCollections();
};

const openSession = (sessionId: string) => {
  if (!sdk) return;
  sdk.replay.openTab(sessionId);
  sdk.navigation.goTo({ id: "replay" });
};

const deleteSession = async (sessionId: string) => {
  if (!sdk) return;
  await sdk.replay.deleteSessions([sessionId]);
  refreshSessions();
  sdk.window.showToast("Session deleted", { variant: "success" });
};

const createCollection = async () => {
  if (!sdk) return;
  const collection = await sdk.replay.createCollection(`Collection ${Date.now()}`);
  if (collection) {
    refreshCollections();
    sdk.window.showToast("Collection created", { variant: "success" });
  }
};

const deleteCollection = async (collectionId: string) => {
  if (!sdk) return;
  await sdk.replay.deleteCollection(collectionId);
  refreshCollections();
  sdk.window.showToast("Collection deleted", { variant: "success" });
};

onMounted(() => {
  refreshSessions();
  refreshCollections();
});
</script>

<template>
  <div class="h-full flex flex-col p-4 gap-4 overflow-auto">
    <div>
      <h2 class="text-lg font-bold mb-2">Collections</h2>
      <Button label="Create Collection" @click="createCollection" class="mb-2" />
      <div v-if="collections.length === 0" class="text-gray-400">No collections found</div>
      <div v-else class="flex flex-col gap-2">
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="p-2 border border-gray-600 rounded"
        >
          <h3 class="font-bold mb-1">{{ collection.name }}</h3>
          <p class="text-sm text-gray-400">{{ collection.sessionIds.length }} sessions</p>
          <Button
            label="Delete"
            severity="secondary"
            size="small"
            class="mt-2"
            @click="deleteCollection(collection.id)"
          />
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-lg font-bold mb-2">Sessions</h2>
      <div v-if="sessions.length === 0" class="text-gray-400">No sessions found</div>
      <div v-else class="flex flex-col gap-2">
        <div
          v-for="session in sessions"
          :key="session.id"
          class="p-2 border border-gray-600 rounded"
        >
          <h3 class="font-bold mb-1">{{ session.name || `Session ${session.id}` }}</h3>
          <div class="flex gap-2 mt-2">
            <Button
              label="Open"
              size="small"
              @click="openSession(session.id)"
            />
            <Button
              label="Delete"
              severity="secondary"
              size="small"
              @click="deleteSession(session.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Auto-Organize Sessions

This example automatically organizes replay sessions by creating or finding a collection called "Automated Sessions" and listening for session changes to potentially move sessions into this collection.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Create a collection for automated sessions
  let autoCollectionId: string | undefined;

  const initializeCollection = async () => {
    const collections = sdk.replay.getCollections();
    let collection = collections.find((c) => c.name === "Automated Sessions");

    if (!collection) {
      collection = await sdk.replay.createCollection("Automated Sessions");
    }

    if (collection) {
      autoCollectionId = collection.id;
    }
  };

  // When a session is created, add it to the collection
  sdk.replay.onCurrentSessionChange(async (event) => {
    if (event.sessionId && autoCollectionId) {
      // Move session to collection (if not already there)
      const sessions = sdk.replay.getSessions();
      const session = sessions.find((s) => s.id === event.sessionId);
      if (session) {
        // Session management logic here
        sdk.log.info("Session organized:", event.sessionId);
      }
    }
  });

  initializeCollection();
};
```
