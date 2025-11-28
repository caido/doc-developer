# Working with HTTPQL Queries and Filters

HTTPQL is Caido's query language for filtering HTTP requests. You can programmatically create, manage, and apply filters, as well as set HTTPQL queries on pages like HTTP History and Search.

## Managing Saved Filters

### Creating a Filter

To create a saved filter:

```ts
const filter = await sdk.filters.create({
  name: "My Filter",
  alias: "my-filter",
  query: "status:200",
});
```

- `name` - The display name of the filter
- `alias` - A short identifier used in HTTPQL queries (e.g., `preset:my-filter`)
- `query` - The HTTPQL query expression

### Getting All Filters

To retrieve all saved filters:

```ts
const filters = await sdk.filters.getAll();
```

### Updating a Filter

To update an existing filter:

```ts
const updatedFilter = await sdk.filters.update(filterId, {
  name: "Updated Filter Name",
  query: "status:200 method:GET",
});
```

### Deleting a Filter

To delete a filter:

```ts
await sdk.filters.delete(filterId);
```

## Setting HTTPQL Queries on Pages

### HTTP History

You can get and set the current HTTPQL query on the HTTP History page:

```ts
// Get current query
const currentQuery = sdk.httpHistory.getQuery();

// Set query
sdk.httpHistory.setQuery("status:200 method:GET");

// Scroll to a specific request by ID
sdk.httpHistory.scrollTo(requestId);
```

### Search

Similarly, you can manage queries on the Search page:

```ts
// Get current query
const currentQuery = sdk.search.getQuery();

// Set query
sdk.search.setQuery("status:404");

// Scroll to a specific request by ID
sdk.search.scrollTo(requestId);
```

## Example: Filter Management Plugin

This example creates a complete filter management interface that displays all saved filters, allows creating new filters, applying filters to HTTP History, and deleting existing filters. Each filter shows its name, alias, and query.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  // Filter list
  const filterList = document.createElement("div");
  filterList.id = "filter-list";

  const refreshFilterList = async () => {
    filterList.innerHTML = "";
    const filters = await sdk.filters.getAll();

    if (filters.length === 0) {
      filterList.textContent = "No filters found";
      return;
    }

    filters.forEach((filter) => {
      const filterItem = document.createElement("div");
      filterItem.style.padding = "8px";
      filterItem.style.border = "1px solid #ccc";
      filterItem.style.marginBottom = "8px";

      const name = document.createElement("h3");
      name.textContent = filter.name;
      filterItem.appendChild(name);

      const alias = document.createElement("p");
      alias.textContent = `Alias: ${filter.alias}`;
      filterItem.appendChild(alias);

      const query = document.createElement("p");
      query.textContent = `Query: ${filter.query}`;
      filterItem.appendChild(query);

      const applyButton = sdk.ui.button({
        variant: "primary",
        label: "Apply to HTTP History",
        size: "small",
      });
      applyButton.addEventListener("click", () => {
        sdk.httpHistory.setQuery(filter.query);
        sdk.navigation.goTo({ id: "http-history" });
        sdk.window.showToast("Filter applied", { variant: "success" });
      });
      filterItem.appendChild(applyButton);

      const deleteButton = sdk.ui.button({
        variant: "secondary",
        label: "Delete",
        size: "small",
      });
      deleteButton.addEventListener("click", async () => {
        await sdk.filters.delete(filter.id);
        refreshFilterList();
        sdk.window.showToast("Filter deleted", { variant: "success" });
      });
      filterItem.appendChild(deleteButton);

      filterList.appendChild(filterItem);
    });
  };

  // Create filter button
  const createButton = sdk.ui.button({
    variant: "primary",
    label: "Create New Filter",
  });
  createButton.addEventListener("click", async () => {
    const filter = await sdk.filters.create({
      name: `Filter ${Date.now()}`,
      alias: `filter-${Date.now()}`,
      query: "status:200",
    });
    if (filter) {
      refreshFilterList();
      sdk.window.showToast("Filter created", { variant: "success" });
    }
  });

  container.appendChild(createButton);
  container.appendChild(filterList);

  refreshFilterList();

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/filter-manager", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Dynamic Query Building

This example creates a query builder interface with input fields for status code, HTTP method, and path. It dynamically constructs HTTPQL queries from the input values and applies them to HTTP History.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const buildQuery = (filters: {
  status?: number;
  method?: string;
  path?: string;
}): string => {
  const parts: string[] = [];

  if (filters.status) {
    parts.push(`status:${filters.status}`);
  }
  if (filters.method) {
    parts.push(`method:${filters.method}`);
  }
  if (filters.path) {
    parts.push(`path:*${filters.path}*`);
  }

  return parts.join(" ");
};

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  // Status input
  const statusInput = document.createElement("input");
  statusInput.type = "number";
  statusInput.placeholder = "Status code (e.g., 200)";
  container.appendChild(statusInput);

  // Method input
  const methodInput = document.createElement("input");
  methodInput.type = "text";
  methodInput.placeholder = "Method (e.g., GET)";
  container.appendChild(methodInput);

  // Path input
  const pathInput = document.createElement("input");
  pathInput.type = "text";
  pathInput.placeholder = "Path (e.g., /api)";
  container.appendChild(pathInput);

  // Apply button
  const applyButton = sdk.ui.button({
    variant: "primary",
    label: "Apply Filter",
  });
  applyButton.addEventListener("click", () => {
    const query = buildQuery({
      status: statusInput.value ? parseInt(statusInput.value) : undefined,
      method: methodInput.value || undefined,
      path: pathInput.value || undefined,
    });

    if (query) {
      sdk.httpHistory.setQuery(query);
      sdk.navigation.goTo({ id: "http-history" });
      sdk.window.showToast("Filter applied", { variant: "success" });
    } else {
      sdk.window.showToast("Please enter at least one filter", { variant: "warning" });
    }
  });
  container.appendChild(applyButton);

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/query-builder", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Using Filter Presets

This example demonstrates creating a filter with an alias and then using that filter as a preset in HTTPQL queries. The preset can be referenced using the `preset:` prefix followed by the alias.

```ts
// Create a filter with an alias
const filter = await sdk.filters.create({
  name: "Successful GET Requests",
  alias: "success-get",
  query: "status:200 method:GET",
});

// Use the filter in a query
sdk.httpHistory.setQuery("preset:success-get");
```

## HTTPQL Query Examples

Common HTTPQL query patterns:

```ts
// Status code
"status:200"
"status:>=400"

// HTTP method
"method:GET"
"method:POST"

// Path
"path:/api/users"
"path:*api*"

// Combined
"status:200 method:GET path:/api"
"status:>=400 OR status:<200"
```

::: tip
Use saved filters to create reusable query presets that can be referenced with the `preset:` prefix in HTTPQL queries.
:::

::: info
The `scrollTo()` method is useful for highlighting specific requests after applying a filter, making it easier for users to find relevant results.
:::

