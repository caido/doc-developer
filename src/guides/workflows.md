# Interact with Workflows

Workflows in Caido allow you to automate sequences of actions. You can programmatically retrieve workflows and subscribe to workflow lifecycle events to react to changes.

## Getting Workflows

To retrieve all workflows:

```ts
const workflows = sdk.workflows.getWorkflows();
```

## Subscribing to Workflow Events

You can subscribe to three types of workflow events:

### Workflow Created

To listen for when a workflow is created:

```ts
const handler = sdk.workflows.onCreatedWorkflow((workflow) => {
  console.log("Workflow created:", workflow.name);
});

// Later, stop listening
handler.stop();
```

### Workflow Updated

To listen for when a workflow is updated:

```ts
const handler = sdk.workflows.onUpdatedWorkflow((workflow) => {
  console.log("Workflow updated:", workflow.name);
});

// Later, stop listening
handler.stop();
```

### Workflow Deleted

To listen for when a workflow is deleted:

```ts
const handler = sdk.workflows.onDeletedWorkflow((workflowId) => {
  console.log("Workflow deleted:", workflowId);
});

// Later, stop listening
handler.stop();
```

::: warning
Be mindful of performance when subscribing to workflow events. Avoid performing expensive operations in event handlers, especially if workflows change frequently.
:::

## Examples

### Workflow Automation

This example demonstrates reactive workflow management by subscribing to workflow lifecycle events. It logs workflow changes and can trigger automation, notifications, or UI updates when workflows are created, updated, or deleted.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Get all workflows on initialization
  const workflows = sdk.workflows.getWorkflows();
  sdk.log.info(`Found ${workflows.length} workflows`);

  // React to workflow changes
  sdk.workflows.onCreatedWorkflow((workflow) => {
    sdk.log.info(`New workflow created: ${workflow.name}`);
    // Perform actions when a new workflow is created
    // e.g., send notification, update UI, etc.
  });

  sdk.workflows.onUpdatedWorkflow((workflow) => {
    sdk.log.info(`Workflow updated: ${workflow.name}`);
    // React to workflow updates
    // e.g., refresh related data, update cache, etc.
  });

  sdk.workflows.onDeletedWorkflow((workflowId) => {
    sdk.log.info(`Workflow deleted: ${workflowId}`);
    // Clean up resources related to the deleted workflow
  });
};
```

### Workflow Discovery

This example implements a workflow discovery system that logs all workflows on initialization and re-discovers them whenever workflows are created or deleted. This keeps the plugin's workflow list synchronized with Caido's state.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const discoverWorkflows = () => {
    const workflows = sdk.workflows.getWorkflows();

    workflows.forEach((workflow) => {
      sdk.log.info(`Workflow: ${workflow.name} (ID: ${workflow.id})`);
    });

    return workflows;
  };

  // Discover workflows on initialization
  const workflows = discoverWorkflows();

  // Re-discover when workflows change
  sdk.workflows.onCreatedWorkflow(() => {
    discoverWorkflows();
  });

  sdk.workflows.onDeletedWorkflow(() => {
    discoverWorkflows();
  });
};
```

::: tip
Use workflow events to keep your plugin's state synchronized with workflow changes, enabling reactive behavior and automation.
:::

::: info
Workflow events are fired for all workflow changes, not just those made by your plugin. This allows you to react to user actions and other plugin modifications.
:::
