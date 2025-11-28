# Creating and Managing Match and Replace Rules

Match and Replace rules allow you to automatically modify HTTP requests and responses based on matching conditions. You can programmatically create, manage, and control match and replace rules and collections.

## Collection Management

### Creating a Collection

To create a new match and replace collection:

```ts
const collection = await sdk.matchReplace.createCollection({
  name: "My Collection",
});
```

### Getting Collections

To retrieve all collections:

```ts
const collections = sdk.matchReplace.getCollections();
```

### Updating a Collection

To update a collection:

```ts
const updated = await sdk.matchReplace.updateCollection(collectionId, {
  name: "Updated Collection Name",
});
```

### Deleting a Collection

To delete a collection:

```ts
await sdk.matchReplace.deleteCollection(collectionId);
```

## Rule Management

### Creating a Rule

To create a new match and replace rule:

```ts
const rule = await sdk.matchReplace.createRule({
  collectionId: collection.id,
  name: "My Rule",
  query: "status:200",
  section: "RequestHeaders",
});
```

The `section` parameter specifies which part of the request/response to match and replace (e.g., `RequestHeaders`, `ResponseBody`, etc.).

### Getting Rules

To retrieve all rules:

```ts
const rules = sdk.matchReplace.getRules();
```

### Getting Active Rules

To get only the active (enabled) rules:

```ts
const activeRules = sdk.matchReplace.getActiveRules();
```

Rules are returned in priority order from highest to lowest.

### Updating a Rule

To update a rule:

```ts
const updated = await sdk.matchReplace.updateRule(ruleId, {
  name: "Updated Rule Name",
  query: "status:404",
  section: "ResponseBody",
});
```

### Deleting a Rule

To delete a rule:

```ts
await sdk.matchReplace.deleteRule(ruleId);
```

### Toggling a Rule

To enable or disable a rule:

```ts
await sdk.matchReplace.toggleRule(ruleId, true); // Enable
await sdk.matchReplace.toggleRule(ruleId, false); // Disable
```

### Selecting a Rule

To select a rule for display in the UI:

```ts
sdk.matchReplace.selectRule(ruleId);
```

To clear the selection:

```ts
sdk.matchReplace.selectRule(undefined);
```

## Example: Rule Manager Plugin

This example creates a comprehensive interface for managing match and replace rule collections and individual rules. It displays collections with their rule counts, lists all rules with their queries, and provides buttons to toggle rule states, create collections, and delete items.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  // Collections list
  const collectionsList = document.createElement("div");
  collectionsList.id = "collections-list";

  const refreshCollections = () => {
    collectionsList.innerHTML = "";
    const collections = sdk.matchReplace.getCollections();

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

      const ruleCount = document.createElement("p");
      ruleCount.textContent = `${collection.ruleIds.length} rules`;
      collectionItem.appendChild(ruleCount);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.matchReplace.deleteCollection(collection.id);
        refreshCollections();
        sdk.window.showToast("Collection deleted", { variant: "success" });
      });
      collectionItem.appendChild(deleteButton);

      collectionsList.appendChild(collectionItem);
    });
  };

  // Rules list
  const rulesList = document.createElement("div");
  rulesList.id = "rules-list";

  const refreshRules = () => {
    rulesList.innerHTML = "";
    const rules = sdk.matchReplace.getRules();

    if (rules.length === 0) {
      rulesList.textContent = "No rules found";
      return;
    }

    rules.forEach((rule) => {
      const ruleItem = document.createElement("div");
      ruleItem.style.padding = "8px";
      ruleItem.style.border = "1px solid #ccc";
      ruleItem.style.marginBottom = "8px";

      const name = document.createElement("h3");
      name.textContent = rule.name;
      ruleItem.appendChild(name);

      const query = document.createElement("p");
      query.textContent = `Query: ${rule.query}`;
      ruleItem.appendChild(query);

      const toggleButton = sdk.ui.button({
        variant: rule.enabled ? "primary" : "secondary",
        label: rule.enabled ? "Disable" : "Enable",
        size: "small",
      });
      toggleButton.addEventListener("click", async () => {
        await sdk.matchReplace.toggleRule(rule.id, !rule.enabled);
        refreshRules();
        sdk.window.showToast(`Rule ${rule.enabled ? "disabled" : "enabled"}`, {
          variant: "success",
        });
      });
      ruleItem.appendChild(toggleButton);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.matchReplace.deleteRule(rule.id);
        refreshRules();
        sdk.window.showToast("Rule deleted", { variant: "success" });
      });
      ruleItem.appendChild(deleteButton);

      rulesList.appendChild(ruleItem);
    });
  };

  // Create collection button
  const createCollectionButton = sdk.ui.button({
    variant: "primary",
    label: "Create Collection",
  });
  createCollectionButton.addEventListener("click", async () => {
    const collection = await sdk.matchReplace.createCollection({
      name: `Collection ${Date.now()}`,
    });
    if (collection) {
      refreshCollections();
      sdk.window.showToast("Collection created", { variant: "success" });
    }
  });

  container.appendChild(createCollectionButton);
  container.appendChild(collectionsList);
  container.appendChild(rulesList);

  refreshCollections();
  refreshRules();

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/match-replace-manager", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Auto-Enable Rules

This example automatically enables all rules in a specific collection named "Auto Rules" when the plugin initializes. It finds the collection, filters rules belonging to it, and enables any that are currently disabled.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Get all active rules
  const activeRules = sdk.matchReplace.getActiveRules();
  sdk.log.info(`Found ${activeRules.length} active rules`);

  // Enable all rules in a specific collection
  const collections = sdk.matchReplace.getCollections();
  const targetCollection = collections.find((c) => c.name === "Auto Rules");

  if (targetCollection) {
    const allRules = sdk.matchReplace.getRules();
    const collectionRules = allRules.filter((r) =>
      targetCollection.ruleIds.includes(r.id)
    );

    collectionRules.forEach(async (rule) => {
      if (!rule.enabled) {
        await sdk.matchReplace.toggleRule(rule.id, true);
        sdk.log.info(`Enabled rule: ${rule.name}`);
      }
    });
  }
};
```

## Example: Rule Priority Management

This example demonstrates how to access and log rule priority information. It retrieves all active rules (which are automatically sorted by priority) and logs each rule's name and priority value.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Get active rules (already sorted by priority)
  const activeRules = sdk.matchReplace.getActiveRules();

  activeRules.forEach((rule, index) => {
    sdk.log.info(`Rule ${index + 1}: ${rule.name} (Priority: ${rule.priority})`);
  });
};
```

::: tip
Use collections to organize related match and replace rules, making it easier to enable/disable groups of rules together.
:::

::: info
Active rules are processed in priority order. Higher priority rules are applied first. Use `getActiveRules()` to see the processing order.
:::

::: warning
Be careful when creating rules that modify request/response data, as they can affect the behavior of your application testing. Test rules thoroughly before enabling them.
:::

