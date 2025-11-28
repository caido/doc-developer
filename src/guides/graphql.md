# Querying the GraphQL API

Caido provides a GraphQL API for advanced data queries and custom operations. You can interact with this API through the `sdk.graphql` utilities.

## GraphQL SDK

The GraphQL SDK provides utilities for querying Caido's GraphQL API. The exact methods and structure depend on your Caido version and configuration.

## Examples

### Basic GraphQL Query

This example demonstrates a basic GraphQL query that fetches all projects with their IDs and names. It shows the structure of a simple query operation using the GraphQL SDK.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const queryData = async (sdk: CaidoSDK) => {
  // Use sdk.graphql to execute queries
  // The exact API depends on your Caido version
  const result = await sdk.graphql.query({
    query: `
      query {
        projects {
          id
          name
        }
      }
    `,
  });

  return result;
};
```

### GraphQL Query Plugin

This example creates an interactive GraphQL query explorer page with a textarea for entering queries, an execute button, and a results display area. It includes error handling and loading states for a complete query interface.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  const queryInput = document.createElement("textarea");
  queryInput.placeholder = "Enter GraphQL query...";
  queryInput.style.width = "100%";
  queryInput.style.minHeight = "200px";
  queryInput.style.padding = "8px";
  queryInput.style.fontFamily = "monospace";
  queryInput.value = `query {
  projects {
    id
    name
  }
}`;

  const executeButton = sdk.ui.button({
    variant: "primary",
    label: "Execute Query",
  });

  const resultText = document.createElement("pre");
  resultText.style.padding = "16px";
  resultText.style.backgroundColor = "#f5f5f5";
  resultText.style.borderRadius = "4px";
  resultText.style.overflow = "auto";
  resultText.style.maxHeight = "400px";

  executeButton.addEventListener("click", async () => {
    const query = queryInput.value.trim();
    if (!query) {
      sdk.window.showToast("Please enter a query", { variant: "warning" });
      return;
    }

    resultText.textContent = "Executing...";
    executeButton.disabled = true;

    try {
      // Execute GraphQL query
      const result = await sdk.graphql.query({
        query,
      });

      resultText.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
      resultText.textContent = `Error: ${error}`;
      sdk.log.error("GraphQL query failed:", error);
    } finally {
      executeButton.disabled = false;
    }
  });

  container.appendChild(queryInput);
  container.appendChild(executeButton);
  container.appendChild(resultText);

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/graphql-explorer", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

### Custom GraphQL Operations

This example demonstrates both GraphQL queries with variables and mutations. It shows how to query requests with a filter variable and how to perform a mutation to update a request, both using typed variables.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const customQuery = async (sdk: CaidoSDK) => {
  const result = await sdk.graphql.query({
    query: `
      query GetRequests($filter: String) {
        requests(filter: $filter) {
          id
          method
          url
          status
        }
      }
    `,
    variables: {
      filter: "status:200",
    },
  });

  return result;
};

const customMutation = async (sdk: CaidoSDK) => {
  const result = await sdk.graphql.mutate({
    mutation: `
      mutation UpdateRequest($id: ID!, $data: RequestInput!) {
        updateRequest(id: $id, data: $data) {
          id
          method
          url
        }
      }
    `,
    variables: {
      id: "request-id",
      data: {
        method: "POST",
      },
    },
  });

  return result;
};

export const init = (sdk: CaidoSDK) => {
  // Use custom queries and mutations
  // Implementation depends on your specific needs
};
```

::: tip
GraphQL provides a flexible way to query exactly the data you need. Use it for complex queries that aren't easily expressed through the standard SDK methods.
:::

::: info
The GraphQL API structure may vary between Caido versions. Refer to your Caido version's GraphQL schema documentation for available queries and mutations.
:::

::: warning
GraphQL queries can be powerful but also complex. Ensure you understand the schema and query structure before executing queries, especially mutations that modify data.
:::
