# Manage Match and Replace

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
  query: "resp.code.eq:200",
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

::: info
Active rules are processed in priority order. Higher priority rules are applied first. Use `getActiveRules()` to see the processing order.
:::

### Updating a Rule

To update a rule:

```ts
const updated = await sdk.matchReplace.updateRule(ruleId, {
  name: "Updated Rule Name",
  query: "resp.code.eq:404",
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

## Examples

### Auto-Enable Rules

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

### Rule Priority Management

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
