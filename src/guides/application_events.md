# Subscribing to Application Events

You can subscribe to various application events to react to state changes in Caido, such as project selection, workflow lifecycle, replay session changes, and backend plugin events.

## Backend Plugin Events

To listen for events sent from your backend plugin:

```ts
sdk.backend.onEvent("my-event", (data) => {
  console.log("Received event:", data);
});
```

::: info
For more details on backend events, see [Sending Events to the Frontend](/guides/events.md).
:::

## Project Events

### Project Selection Changes

To listen for when the current project changes:

```ts
const handler = sdk.projects.onCurrentProjectChange((event) => {
  console.log("Project changed to:", event.projectId);
});

// Later, stop listening
handler.stop();
```

## Workflow Events

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

## Replay Session Events

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

## Navigation Events

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

## Example: Comprehensive Event Monitor

This example creates a comprehensive event monitoring page that subscribes to all major application events (projects, workflows, replay sessions, navigation, and backend events). It displays all events in a scrollable log with timestamps and event types.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  const eventLog = document.createElement("div");
  eventLog.id = "event-log";
  eventLog.style.maxHeight = "400px";
  eventLog.style.overflowY = "auto";
  eventLog.style.padding = "8px";
  eventLog.style.backgroundColor = "#f5f5f5";
  eventLog.style.borderRadius = "4px";
  eventLog.style.fontFamily = "monospace";
  eventLog.style.fontSize = "12px";

  const addLogEntry = (type: string, message: string) => {
    const entry = document.createElement("div");
    entry.style.marginBottom = "4px";
    entry.style.padding = "4px";
    entry.style.borderLeft = "3px solid #2196f3";
    entry.innerHTML = `<strong>[${type}]</strong> ${message} <span style="color: #666;">(${new Date().toLocaleTimeString()})</span>`;
    eventLog.appendChild(entry);
    eventLog.scrollTop = eventLog.scrollHeight;
  };

  // Subscribe to all events
  sdk.projects.onCurrentProjectChange((event) => {
    addLogEntry("Project", `Changed to: ${event.projectId || "None"}`);
  });

  sdk.workflows.onCreatedWorkflow((workflow) => {
    addLogEntry("Workflow", `Created: ${workflow.name}`);
  });

  sdk.workflows.onUpdatedWorkflow((workflow) => {
    addLogEntry("Workflow", `Updated: ${workflow.name}`);
  });

  sdk.workflows.onDeletedWorkflow((workflowId) => {
    addLogEntry("Workflow", `Deleted: ${workflowId}`);
  });

  sdk.replay.onCurrentSessionChange((event) => {
    addLogEntry("Replay", `Session changed to: ${event.sessionId || "None"}`);
  });

  sdk.navigation.onPageChange((event) => {
    addLogEntry("Navigation", `Page changed to: ${event.routeId}`);
  });

  // Backend events (if your backend sends events)
  sdk.backend.onEvent("custom-event", (data) => {
    addLogEntry("Backend", `Custom event: ${JSON.stringify(data)}`);
  });

  container.appendChild(eventLog);

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/event-monitor", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Project-Specific Configuration

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

## Example: Workflow Automation

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

## Example: Real-Time Updates

This example demonstrates real-time UI updates based on application events. It listens to replay session changes and page navigation events, calling update functions to keep the UI synchronized with the current state.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Update UI in real-time based on events
  sdk.replay.onCurrentSessionChange((event) => {
    if (event.sessionId) {
      // Update UI to reflect current session
      updateSessionUI(event.sessionId);
    }
  });

  sdk.navigation.onPageChange((event) => {
    // Update UI based on current page
    updatePageUI(event.routeId);
  });

  const updateSessionUI = (sessionId: string) => {
    // Update UI elements related to the current session
    sdk.log.debug("Updating UI for session:", sessionId);
  };

  const updatePageUI = (routeId: string) => {
    // Update UI elements based on the current page
    sdk.log.debug("Updating UI for page:", routeId);
  };
};
```

::: tip
Application events enable reactive programming patterns. Use them to keep your plugin's state synchronized with Caido's state.
:::

::: info
All event subscription methods return a `ListenerHandle` with a `stop()` method. Call `stop()` when your plugin is unloaded to prevent memory leaks.
:::

::: warning
Be careful not to create infinite loops when reacting to events. For example, updating workflow state in a workflow update handler could trigger another update event.
:::

