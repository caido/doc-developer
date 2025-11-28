# Creating and Managing Scopes

Scopes define which requests and responses are included or excluded from various operations in Caido. You can programmatically create, update, delete, and query scopes, as well as set the active scope on different pages.

## Core Scope Operations

### Creating a Scope

To create a new scope, use `sdk.scopes.createScope()`:

```ts
const scope = await sdk.scopes.createScope({
  name: "My Scope",
  allowlist: ["*example.com", "*github.com"],
  denylist: ["*caido.io"],
});
```

The `allowlist` specifies URLs that should be included, while `denylist` specifies URLs that should be excluded. Both support wildcard patterns.

### Getting All Scopes

To retrieve all available scopes:

```ts
const scopes = sdk.scopes.getScopes();
```

### Updating a Scope

To update an existing scope:

```ts
const updatedScope = await sdk.scopes.updateScope(scopeId, {
  name: "Updated Scope Name",
  allowlist: ["*example.com"],
  denylist: ["*caido.io", "*test.com"],
});
```

You can update the name, allowlist, or denylist. All fields are optional.

### Deleting a Scope

To delete a scope:

```ts
const deleted = await sdk.scopes.deleteScope(scopeId);
```

Returns `true` if the scope was successfully deleted.

## Page-Specific Scope Operations

Different pages in Caido provide scope operations specific to their context.

### HTTP History

```ts
// Get current scope
const currentScopeId = sdk.httpHistory.getScopeId();

// Set scope
await sdk.httpHistory.setScope(scopeId);
```

### Search

```ts
// Get current scope
const currentScopeId = sdk.search.getScopeId();

// Set scope
await sdk.search.setScope(scopeId);
```

### Sitemap

```ts
// Get current scope
const currentScopeId = sdk.sitemap.getScopeId();

// Set scope
await sdk.sitemap.setScope(scopeId);
```

### Intercept

```ts
// Get current scope
const currentScopeId = sdk.intercept.getScopeId();

// Set scope
sdk.intercept.setScope(scopeId);
```

## Example: Scope Management Plugin

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  // Scope list
  const scopeList = document.createElement("div");
  scopeList.id = "scope-list";

  const refreshScopeList = () => {
    scopeList.innerHTML = "";
    const scopes = sdk.scopes.getScopes();

    if (scopes.length === 0) {
      scopeList.textContent = "No scopes found";
      return;
    }

    scopes.forEach((scope) => {
      const scopeItem = document.createElement("div");
      scopeItem.style.padding = "8px";
      scopeItem.style.border = "1px solid #ccc";
      scopeItem.style.marginBottom = "8px";

      const name = document.createElement("h3");
      name.textContent = scope.name;
      scopeItem.appendChild(name);

      const allowlist = document.createElement("p");
      allowlist.textContent = `Allowlist: ${scope.allowlist.join(", ")}`;
      scopeItem.appendChild(allowlist);

      const denylist = document.createElement("p");
      denylist.textContent = `Denylist: ${scope.denylist.join(", ")}`;
      scopeItem.appendChild(denylist);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.scopes.deleteScope(scope.id);
        refreshScopeList();
        sdk.window.showToast("Scope deleted", { variant: "success" });
      });
      scopeItem.appendChild(deleteButton);

      scopeList.appendChild(scopeItem);
    });
  };

  // Create scope button
  const createButton = sdk.ui.button({
    variant: "primary",
    label: "Create New Scope",
  });
  createButton.addEventListener("click", async () => {
    const scope = await sdk.scopes.createScope({
      name: `Scope ${Date.now()}`,
      allowlist: ["*example.com"],
      denylist: [],
    });
    if (scope) {
      refreshScopeList();
      sdk.window.showToast("Scope created", { variant: "success" });
    }
  });

  container.appendChild(createButton);
  container.appendChild(scopeList);

  refreshScopeList();

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/scope-manager", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Setting Scope on Page Navigation

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // Get or create a scope
  let targetScopeId: string | undefined;

  const initializeScope = async () => {
    const scopes = sdk.scopes.getScopes();
    let scope = scopes.find((s) => s.name === "Auto Scope");

    if (!scope) {
      scope = await sdk.scopes.createScope({
        name: "Auto Scope",
        allowlist: ["*example.com"],
        denylist: [],
      });
    }

    if (scope) {
      targetScopeId = scope.id;
    }
  };

  // Set scope when navigating to HTTP History
  sdk.navigation.onPageChange(async (event) => {
    if (event.routeId === "http-history" && targetScopeId) {
      await sdk.httpHistory.setScope(targetScopeId);
      sdk.log.info("Scope set for HTTP History");
    }
  });

  initializeScope();
};
```

## Scope Patterns

Scope allowlists and denylists support wildcard patterns:

- `*example.com` - Matches any subdomain of example.com
- `example.com` - Matches exactly example.com
- `*` - Matches everything (when used in allowlist)

```ts
const scope = await sdk.scopes.createScope({
  name: "Production Scope",
  allowlist: ["*prod.example.com", "*api.example.com"],
  denylist: ["*test.example.com", "*dev.example.com"],
});
```

::: tip
Use scopes to filter requests programmatically across different pages. This is useful for automation and workflow management.
:::

::: info
Scope operations on different pages may have different return types. HTTP History and Search return promises, while Intercept returns void.
:::

