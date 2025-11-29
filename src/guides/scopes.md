# Manage Scopes

Scopes define which requests and responses are included or excluded from various operations in Caido. You can programmatically create, update, delete, and query scopes, as well as set the active scope on different pages.

::: tip
Use scopes to filter requests programmatically across different pages. This is useful for automation and workflow management.
:::

## Creating and Managing Scopes

### Creating a Scope

Create a new scope using `sdk.scopes.createScope()`. The `allowlist` specifies URLs that should be included, while `denylist` specifies URLs that should be excluded. Both support wildcard patterns.

```ts
const scope = await sdk.scopes.createScope({
  name: "My Scope",
  allowlist: ["*example.com", "*github.com"],
  denylist: ["*caido.io"],
});
```

### Getting All Scopes

Retrieve all available scopes using `sdk.scopes.getScopes()`:

```ts
const scopes = sdk.scopes.getScopes();
```

### Updating a Scope

Update an existing scope by providing the scope ID and the fields you want to change. You can update the name, allowlist, or denylist. All fields are optional.

```ts
const updatedScope = await sdk.scopes.updateScope(scopeId, {
  name: "Updated Scope Name",
  allowlist: ["*example.com"],
  denylist: ["*caido.io", "*test.com"],
});
```

### Deleting a Scope

Delete a scope by its ID. The method returns `true` if the scope was successfully deleted.

```ts
const deleted = await sdk.scopes.deleteScope(scopeId);
```

## Setting Scopes on Different Pages

Different pages in Caido provide scope operations specific to their context. You can get the current scope ID and set a new scope for each page.

### Setting Scope on HTTP History

Get the current scope ID or set a new scope for the HTTP History page:

```ts
// Get current scope
const currentScopeId = sdk.httpHistory.getScopeId();

// Set scope
await sdk.httpHistory.setScope(scopeId);
```

### Setting Scope on Search

Get the current scope ID or set a new scope for the Search page:

```ts
// Get current scope
const currentScopeId = sdk.search.getScopeId();

// Set scope
await sdk.search.setScope(scopeId);
```

### Setting Scope on Sitemap

Get the current scope ID or set a new scope for the Sitemap page:

```ts
// Get current scope
const currentScopeId = sdk.sitemap.getScopeId();

// Set scope
await sdk.sitemap.setScope(scopeId);
```

### Setting Scope on Intercept

Get the current scope ID or set a new scope for the Intercept page:

```ts
// Get current scope
const currentScopeId = sdk.intercept.getScopeId();

// Set scope
sdk.intercept.setScope(scopeId);
```

::: info
Scope operations on different pages may have different return types. HTTP History and Search return promises, while Intercept returns void.
:::

## Using Wildcard Patterns

Scope allowlists and denylists support wildcard patterns to match multiple URLs:

- `*example.com` - Matches any subdomain of example.com
- `example.com` - Matches exactly example.com
- `*` - Matches everything (when used in allowlist)

Create a scope with wildcard patterns to filter production URLs while excluding test and development environments:

```ts
const scope = await sdk.scopes.createScope({
  name: "Production Scope",
  allowlist: ["*prod.example.com", "*api.example.com"],
  denylist: ["*test.example.com", "*dev.example.com"],
});
```

## Examples

### Scope Management Plugin

This example creates a scope management interface that lists all scopes with their allowlists and denylists. It provides buttons to create new scopes and delete existing ones, with automatic list refreshing.

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

### Setting Scope on Page Navigation

This example automatically sets a specific scope when navigating to the HTTP History page. It creates or finds a scope named "Auto Scope" and applies it whenever the user visits HTTP History.

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
