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

### Getting the Current Rule

To get the currently selected rule:

```ts
const currentRule = sdk.matchReplace.getCurrentRule();
```

Returns the currently selected rule, or `undefined` if no rule is selected.

### Subscribing to Rule Changes

To subscribe to changes in the currently selected rule:

```ts
const handler = sdk.matchReplace.onCurrentRuleChange((event) => {
  console.log(`Rule ${event.ruleId} got selected!`);
});

// Later, stop listening
handler.stop();
```

The callback receives an event object with a `ruleId` property that contains the ID of the newly selected rule, or `undefined` if no rule is selected.

::: info
The subscription handler returns an object with a `stop()` method that can be called to unsubscribe from rule changes.
:::

## Adding Components to Match and Replace Slots

You can add custom components to match and replace slots to extend the Match and Replace page UI. Available slots are:

- `MatchReplaceSlot.CreateHeader` - The header area of the rule form create component
- `MatchReplaceSlot.UpdateHeader` - The header area of the rule form update component

### Adding a Button to a Slot

Add a button with a label, icon, and click handler:

```ts
import { MatchReplaceSlot } from "@caido/sdk-frontend";

sdk.matchReplace.addToSlot(MatchReplaceSlot.UpdateHeader, {
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
import { MatchReplaceSlot } from "@caido/sdk-frontend";

// First register the command
sdk.commands.register("my-command", {
  name: "My Command",
  run: () => {
    sdk.window.showToast("Command executed", { variant: "info" });
  },
});

// Then add to slot
sdk.matchReplace.addToSlot(MatchReplaceSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

### Adding a Custom Component to a Slot

Add a custom Vue component:

```ts
import { MatchReplaceSlot } from "@caido/sdk-frontend";
import MyComponent from "./MyComponent.vue";

sdk.matchReplace.addToSlot(MatchReplaceSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});
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

### Tracking Current Rule Changes

This example subscribes to rule selection changes and logs information about the currently selected rule whenever it changes.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const handler = sdk.matchReplace.onCurrentRuleChange((event) => {
    if (event.ruleId) {
      const rule = sdk.matchReplace.getCurrentRule();
      if (rule) {
        sdk.log.info(`Rule selected: ${rule.name}`);
        sdk.log.info(`Query: ${rule.query}`);
        sdk.log.info(`Enabled: ${rule.isEnabled}`);
      }
    } else {
      sdk.log.info("No rule selected");
    }
  });

  // Store handler for cleanup if needed
  // handler.stop();
};
```

### Adding Custom Actions to Match and Replace Slots

This example adds a custom button to the rule update header that duplicates the current rule when clicked.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { MatchReplaceSlot } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.matchReplace.addToSlot(MatchReplaceSlot.UpdateHeader, {
    type: "Button",
    label: "Duplicate Rule",
    icon: "fas fa-copy",
    onClick: async () => {
      const currentRule = sdk.matchReplace.getCurrentRule();
      if (currentRule) {
        const duplicated = await sdk.matchReplace.createRule({
          collectionId: currentRule.collectionId,
          name: `${currentRule.name} (Copy)`,
          query: currentRule.query,
          section: currentRule.section,
          sources: [],
        });
        sdk.window.showToast(`Rule "${duplicated.name}" created`, {
          variant: "success",
        });
      } else {
        sdk.window.showToast("No rule selected", { variant: "warning" });
      }
    },
  });
};
```
