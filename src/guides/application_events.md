# Subscribe to Application Events

You can subscribe to various application events to react to state changes in Caido, such as project selection, workflow lifecycle, replay session changes, and backend plugin events.

## Subscribing to Backend Plugin Events

To listen for events sent from your backend plugin:

```ts
sdk.backend.onEvent("my-event", (data) => {
  console.log("Received event:", data);
});
```

::: info
For more details on backend events, see [Sending Events to the Frontend](/guides/events.md).
:::

::: warning
Be careful not to create infinite loops when reacting to events. For example, updating workflow state in a workflow update handler could trigger another update event.
:::

## Subscribing to Project Events

### Project Selection Changes

To listen for when the current project changes:

```ts
const handler = sdk.projects.onCurrentProjectChange((event) => {
  console.log("Project changed to:", event.projectId);
});

// Later, stop listening
handler.stop();
```

## Subscribing to Workflow Events

### Workflow Created

```ts
const handler = sdk.workflows.onCreatedWorkflow((workflow) => {
  console.log("Workflow created:", workflow.name);
});
```

### Workflow Updated

```ts
const handler = sdk.workflows.onUpdatedWorkflow((workflow) => {
  console.log("Workflow updated:", workflow.name);
});
```

### Workflow Deleted

```ts
const handler = sdk.workflows.onDeletedWorkflow((workflowId) => {
  console.log("Workflow deleted:", workflowId);
});
```

::: info
For more details on workflow events, see [How to Interact with Workflows](/guides/workflows.md).
:::

## Subscribing to Replay Session Events

### Current Session Changes

To listen for when the current replay session changes:

```ts
const handler = sdk.replay.onCurrentSessionChange((event) => {
  console.log("Session changed to:", event.sessionId);
});
```

::: info
For more details on replay events, see [How to Manage Replay Sessions and Collections](/guides/replay.md).
:::

## Subscribing to Navigation Events

### Page Changes

To listen for page navigation changes:

```ts
const handler = sdk.navigation.onPageChange((event) => {
  console.log("Page changed to:", event.routeId);
});
```

::: info
For more details on navigation events, see [How to Listen to Page Navigation Changes](/guides/navigation_events.md).
:::

## Examples

### Project-Specific Configuration

This example manages project-specific configuration by listening to project change events. When switching projects, it cleans up resources from the previous project and loads configuration for the new project.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  let currentProjectId: string | undefined;

  sdk.projects.onCurrentProjectChange((event) => {
    const previousProject = currentProjectId;
    currentProjectId = event.projectId;

    // Clean up previous project
    if (previousProject) {
      sdk.log.info(`Leaving project: ${previousProject}`);
      // Clean up project-specific resources
    }

    // Initialize new project
    if (currentProjectId) {
      sdk.log.info(`Entering project: ${currentProjectId}`);
      // Load project-specific configuration
      loadProjectConfig(currentProjectId);
    }
  });

  const loadProjectConfig = (projectId: string) => {
    // Load configuration specific to this project
    sdk.log.info(`Loading config for project: ${projectId}`);
  };
};
```

### Workflow Automation

This example reacts to workflow lifecycle events to trigger automation or notifications. It logs when workflows are created, updated, or deleted, and can perform actions like updating related UI or cleaning up resources.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // React to workflow changes
  sdk.workflows.onCreatedWorkflow((workflow) => {
    sdk.log.info(`New workflow created: ${workflow.name}`);
    // Trigger automation or notifications
  });

  sdk.workflows.onUpdatedWorkflow((workflow) => {
    sdk.log.info(`Workflow updated: ${workflow.name}`);
    // Update related UI or data
  });

  sdk.workflows.onDeletedWorkflow((workflowId) => {
    sdk.log.info(`Workflow deleted: ${workflowId}`);
    // Clean up related resources
  });
};
```

::: tip
Application events enable reactive programming patterns. Use them to keep your plugin's state synchronized with Caido's state.
:::

::: info
All event subscription methods return a `ListenerHandle` with a `stop()` method. Call `stop()` when your plugin is unloaded to prevent memory leaks.
:::
