# How to Listen to Page Navigation Changes

You can subscribe to page navigation changes to react when users navigate between different pages in Caido. This is useful for updating UI based on the current page, performing page-specific initialization, or cleaning up resources.

## Subscribing to Page Changes

To listen for page navigation changes, use `sdk.navigation.onPageChange()`:

```ts
const handler = sdk.navigation.onPageChange((event) => {
  console.log("Page changed to:", event.routeId);
  console.log("Path:", event.path);
});
```

The callback receives a `PageChangeEvent` object containing:
- `routeId` - The route ID of the new page
- `path` - The path of the new page

## Stopping the Listener

The method returns a `ListenerHandle` object with a `stop()` method to unsubscribe:

```ts
const handler = sdk.navigation.onPageChange((event) => {
  // Handle page change
});

// Later, stop listening
handler.stop();
```

## Example: Page-Specific Initialization

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  let currentPage: string | undefined;

  const handler = sdk.navigation.onPageChange((event) => {
    // Clean up previous page
    if (currentPage) {
      sdk.log.debug("Leaving page:", currentPage);
      // Perform cleanup
    }

    // Initialize new page
    currentPage = event.routeId;
    sdk.log.debug("Entering page:", currentPage);

    // Perform page-specific initialization
    if (event.routeId === "replay") {
      sdk.log.info("Replay page opened");
      // Initialize replay-specific features
    } else if (event.routeId === "http-history") {
      sdk.log.info("HTTP History page opened");
      // Initialize HTTP history features
    }
  });

  // Store handler for cleanup if needed
  // handler.stop() can be called when plugin is unloaded
};
```

## Example: Updating UI Based on Current Page

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const statusText = document.createElement("p");
  statusText.textContent = "Current page: Unknown";

  const updateStatus = (routeId: string) => {
    statusText.textContent = `Current page: ${routeId}`;
  };

  // Subscribe to page changes
  sdk.navigation.onPageChange((event) => {
    updateStatus(event.routeId || "unknown");
  });

  // Get initial page state
  // Note: You may need to check the current page on initialization

  const card = sdk.ui.card({
    body: statusText,
  });

  sdk.navigation.addPage("/page-tracker", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Conditional Feature Activation

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  let featureEnabled = false;

  const handler = sdk.navigation.onPageChange((event) => {
    // Enable feature only on specific pages
    if (event.routeId === "replay" || event.routeId === "http-history") {
      if (!featureEnabled) {
        featureEnabled = true;
        sdk.log.info("Feature enabled for", event.routeId);
        // Activate feature
      }
    } else {
      if (featureEnabled) {
        featureEnabled = false;
        sdk.log.info("Feature disabled");
        // Deactivate feature
      }
    }
  });
};
```

## Route IDs

Common route IDs include:
- `"replay"` - Replay page
- `"http-history"` - HTTP History page
- `"search"` - Search page
- `"sitemap"` - Sitemap page
- `"intercept"` - Intercept page
- `"findings"` - Findings page
- Custom plugin page paths (e.g., `"/my-plugin-page"`)

::: tip
Use page change events to optimize performance by only loading resources when needed for specific pages.
:::

::: info
The `onPageChange` callback is called after the page has changed. To perform actions before navigation, you may need to use other mechanisms depending on your use case.
:::

