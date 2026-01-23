# Manage Sitemap

The Sitemap SDK allows you to interact with the Sitemap page, manage entries, work with the tree structure, control scope, add indicators, and extend editors with custom functionality.

## Entry Management

### Getting Tree Entries

To retrieve all sitemap entries in tree format:

```ts
const entries = sdk.sitemap.getTreeEntries();
```

This returns root entries (`SitemapRootEntry`) that contain the full tree structure. Each entry has:
- `id` - The unique identifier
- `label` - The display label
- `kind` - The entry type (Domain, Directory, Request, etc.)
- `parentId` - Optional parent entry ID
- `childState` - Whether children are loaded, loading, or not loaded

### Loading Children

To load children for a specific entry (if they haven't been loaded yet):

```ts
const children = await sdk.sitemap.getChildren(entryId);
```

This will fetch and load children asynchronously if they haven't been loaded yet.

## Entry Kinds

Sitemap entries can be of different kinds:

```ts
import { SitemapEntryKind } from "@caido/sdk-frontend";

// Available kinds:
SitemapEntryKind.Domain      // "DOMAIN"
SitemapEntryKind.Directory   // "DIRECTORY"
SitemapEntryKind.Request     // "REQUEST"
SitemapEntryKind.RequestBody // "REQUEST_BODY"
SitemapEntryKind.RequestQuery // "REQUEST_QUERY"
```

## Scope Management

### Getting Current Scope

To get the current scope ID:

```ts
const scopeId = sdk.sitemap.getScopeId();
```

Returns `undefined` if no scope is currently set.

### Setting Scope

To set the current scope:

```ts
await sdk.sitemap.setScope(scopeId);
```

Pass `undefined` to clear the current scope.

::: tip
For more information on scopes, see the [Scopes](/guides/scopes.md) guide.
:::

## Adding Indicators

Indicators are visual badges displayed next to entry names in the sitemap tree. They're useful for highlighting important entries or showing status information.

### Adding an Entry Indicator

```ts
const indicator = sdk.sitemap.addEntryIndicator(entryId, {
  icon: "fas fa-exclamation-triangle",
  description: "Security warning",
});
```

The `addEntryIndicator` method returns a handle object with a `remove` method to remove the indicator later:

```ts
// Later, remove the indicator
indicator.remove();
```

## Listening to Child State Updates

You can listen for changes to entry child states (when children are loaded, loading, etc.):

```ts
const handle = sdk.sitemap.onEntryChildStateUpdate((event) => {
  console.log(`Entry ${event.entryId} child state changed:`, event.newChildState);
});

// Later, stop listening
handle.stop();
```

The event contains:
- `entryId` - The ID of the entry that changed
- `newChildState` - The new child state (`"LOADED"`, `"LOADING"`, or `"NOT_LOADED"`)

## Extending Editors

You can add CodeMirror extensions to the request editor on the Sitemap page:

```ts
import { Extension } from "@codemirror/state";

const myExtension: Extension = [
  // Your CodeMirror extension configuration
];

sdk.sitemap.addRequestEditorExtension(myExtension);
```

For more information on creating editor extensions, see the [Extend Editors](/guides/editor_extensions.md) guide.

## Adding View Modes

You can add custom request and response view modes to the Sitemap page:

### Request View Modes

```ts
sdk.sitemap.addRequestViewMode({
  label: "My Custom View",
  view: {
    component: MyComponent,
  },
});
```

### Response View Modes

```ts
sdk.sitemap.addResponseViewMode({
  label: "My Custom Response View",
  view: {
    component: MyResponseComponent,
  },
});
```

For more information on creating view modes, see the [Add View Modes](/guides/view_modes.md) guide.

## Page Context

You can access the Sitemap page context to get information about the current state:

```ts
const context = sdk.window.getPageContext();
if (context?.kind === "Sitemap") {
  // Access Sitemap-specific context
  const { entrySelection, requestSelection } = context;
}
```

The Sitemap page context includes:
- `kind` - Always `"Sitemap"`
- `entrySelection` - Current entry selection
- `requestSelection` - Current request selection

## Examples

### Entry Highlighter Plugin

This example adds indicators to entries based on their type:

```ts
import type { Caido } from "@caido/sdk-frontend";
import { SitemapEntryKind } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const highlightEntries = () => {
    const entries = sdk.sitemap.getTreeEntries();
    
    const processEntry = (entry: any) => {
      // Add indicator for request entries
      if (entry.kind === SitemapEntryKind.Request) {
        sdk.sitemap.addEntryIndicator(entry.id, {
          icon: "fas fa-file-code",
          description: "Request entry",
        });
      }
      
      // Recursively process children if they exist
      if (entry.children) {
        entry.children.forEach(processEntry);
      }
    };
    
    entries.forEach(processEntry);
  };

  // Highlight entries when sitemap is accessed
  sdk.navigation.onPageChange((page) => {
    if (page.id === "sitemap") {
      highlightEntries();
    }
  });
};
```

### Scope-Based Entry Filter

This example monitors scope changes and highlights entries that match the current scope:

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  let currentScopeId: string | undefined;
  const indicators = new Map<string, any>();

  const updateHighlights = () => {
    // Remove old indicators
    indicators.forEach((indicator) => indicator.remove());
    indicators.clear();

    if (!currentScopeId) return;

    const entries = sdk.sitemap.getTreeEntries();
    
    const processEntry = (entry: any) => {
      // Add indicator for entries in scope
      // (This is a simplified example - you'd check actual scope matching)
      if (entry.kind === "REQUEST") {
        const indicator = sdk.sitemap.addEntryIndicator(entry.id, {
          icon: "fas fa-check-circle",
          description: "In scope",
        });
        indicators.set(entry.id, indicator);
      }
      
      if (entry.children) {
        entry.children.forEach(processEntry);
      }
    };
    
    entries.forEach(processEntry);
  };

  // Listen for scope changes
  sdk.navigation.onPageChange((page) => {
    if (page.id === "sitemap") {
      const newScopeId = sdk.sitemap.getScopeId();
      if (newScopeId !== currentScopeId) {
        currentScopeId = newScopeId;
        updateHighlights();
      }
    }
  });
};
```

### Child State Monitor

This example monitors child state changes and logs when entries are being loaded:

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const handle = sdk.sitemap.onEntryChildStateUpdate((event) => {
    if (event.newChildState === "LOADING") {
      sdk.log.info(`Loading children for entry: ${event.entryId}`);
    } else if (event.newChildState === "LOADED") {
      sdk.log.info(`Children loaded for entry: ${event.entryId}`);
    }
  });

  // Cleanup on plugin unload (if your plugin supports it)
  // handle.stop();
};
```

