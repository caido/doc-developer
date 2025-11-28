# Managing Replay Sessions and Collections

Replay sessions allow you to replay HTTP requests, and collections help organize related sessions. You can programmatically create, manage, and interact with replay sessions and collections.

## Session Management

### Creating a Session

To create a new replay session:

```ts
await sdk.replay.createSession(source, collectionId);
```

The `source` parameter specifies where the request comes from (e.g., from HTTP History). The optional `collectionId` adds the session to a specific collection.

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

## Example: Session Manager Plugin

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  // Sessions list
  const sessionsList = document.createElement("div");
  sessionsList.id = "sessions-list";

  const refreshSessions = () => {
    sessionsList.innerHTML = "";
    const sessions = sdk.replay.getSessions();

    if (sessions.length === 0) {
      sessionsList.textContent = "No sessions found";
      return;
    }

    sessions.forEach((session) => {
      const sessionItem = document.createElement("div");
      sessionItem.style.padding = "8px";
      sessionItem.style.border = "1px solid #ccc";
      sessionItem.style.marginBottom = "8px";

      const name = document.createElement("h3");
      name.textContent = session.name || `Session ${session.id}`;
      sessionItem.appendChild(name);

      const openButton = sdk.ui.button({
        variant: "primary",
        label: "Open",
        size: "small",
      });
      openButton.addEventListener("click", () => {
        sdk.replay.openTab(session.id);
        sdk.navigation.goTo({ id: "replay" });
      });
      sessionItem.appendChild(openButton);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.replay.deleteSessions([session.id]);
        refreshSessions();
        sdk.window.showToast("Session deleted", { variant: "success" });
      });
      sessionItem.appendChild(deleteButton);

      sessionsList.appendChild(sessionItem);
    });
  };

  // Collections list
  const collectionsList = document.createElement("div");
  collectionsList.id = "collections-list";

  const refreshCollections = () => {
    collectionsList.innerHTML = "";
    const collections = sdk.replay.getCollections();

    if (collections.length === 0) {
      collectionsList.textContent = "No collections found";
      return;
    }

    collections.forEach((collection) => {
      const collectionItem = document.createElement("div");
      collectionItem.style.padding = "8px";
      collectionItem.style.border = "1px solid #ccc";
      collectionItem.style.marginBottom = "8px";

      const name = document.createElement("h3");
      name.textContent = collection.name;
      collectionItem.appendChild(name);

      const sessionCount = document.createElement("p");
      sessionCount.textContent = `${collection.sessionIds.length} sessions`;
      collectionItem.appendChild(sessionCount);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.replay.deleteCollection(collection.id);
        refreshCollections();
        sdk.window.showToast("Collection deleted", { variant: "success" });
      });
      collectionItem.appendChild(deleteButton);

      collectionsList.appendChild(collectionItem);
    });
  };

  // Create collection button
  const createCollectionButton = sdk.ui.button({
    variant: "primary",
    label: "Create Collection",
  });
  createCollectionButton.addEventListener("click", async () => {
    const collection = await sdk.replay.createCollection(`Collection ${Date.now()}`);
    if (collection) {
      refreshCollections();
      sdk.window.showToast("Collection created", { variant: "success" });
    }
  });

  container.appendChild(createCollectionButton);
  container.appendChild(collectionsList);
  container.appendChild(sessionsList);

  refreshSessions();
  refreshCollections();

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/replay-manager", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);

  // Listen for session changes
  sdk.replay.onCurrentSessionChange((event) => {
    sdk.log.info("Current session changed to:", event.sessionId);
  });
};
```

## Example: Auto-Organize Sessions

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

::: tip
Use collections to organize related replay sessions, making it easier to manage and find specific sessions for testing scenarios.
:::

::: info
Sessions and collections are persisted across Caido restarts, so programmatically created items will remain available.
:::

::: warning
Deleting a collection does not delete the sessions it contains. Sessions are moved to the default location when their collection is deleted.
:::

