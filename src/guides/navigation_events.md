# Listen to Navigation Events

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

::: tip
Use page change events to optimize performance by only loading resources when needed for specific pages.
:::

::: info
The `onPageChange` callback is called after the page has changed. To perform actions before navigation, you may need to use other mechanisms depending on your use case.
:::

## Stopping the Listener

The method returns a `ListenerHandle` object with a `stop()` method to unsubscribe:

```ts
const handler = sdk.navigation.onPageChange((event) => {
  // Handle page change
});

// Later, stop listening
handler.stop();
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

## Examples

### Page-Specific Initialization

This example performs cleanup when leaving pages and initialization when entering new pages. It tracks the current page and executes page-specific setup code for Replay and HTTP History pages.

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

### Conditional Feature Activation

This example conditionally enables or disables a feature based on the current page. The feature is only active on Replay or HTTP History pages, and is automatically deactivated when navigating to other pages.

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
