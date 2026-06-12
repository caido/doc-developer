# Call GraphQL Directly

The high-level SDKs on `Client` (`client.request`, `client.finding`, `client.environment`, etc.) cover the most common operations against a Caido instance. When you need something the high-level SDKs do not expose, drop down to `client.graphql` and run your own queries, mutations, or subscriptions against Caido's GraphQL API directly.

:::: info
The `gql` template tag is not re-exported by the SDK. Install [`@urql/core`](https://www.npmjs.com/package/@urql/core) (the GraphQL client the SDK is built on) to get it:

::: code-group
```bash [pnpm]
pnpm add @urql/core
```

```bash [npm]
npm install @urql/core
```

```bash [yarn]
yarn add @urql/core
```
:::

Any tag that returns a `TypedDocumentNode` also works, such as `graphql-tag`.
::::

## Run a Query

To run a query, build a document with `gql` and pass it to `client.graphql.query()`. The first generic parameter types the response data:

```ts
import { gql } from "@urql/core";

const ViewerQuery = gql<{ viewer: { __typename: string; id: string } }>`
  query CustomViewer {
    viewer {
      __typename
      ... on CloudUser { id }
      ... on GuestUser { id }
      ... on ScriptUser { id }
    }
  }
`;

const result = await client.graphql.query(ViewerQuery);
console.log(result.viewer);
```

## Pass Variables

To parameterize a query, declare its variables with `$` syntax inside the document and pass them as the second argument to `query()`. The second generic parameter types the variable map:

```ts
const RequestQuery = gql<
  { request: { id: string; host: string; method: string; path: string } | null },
  { id: string }
>`
  query CustomRequest($id: ID!) {
    request(id: $id) {
      id
      host
      method
      path
    }
  }
`;

const result = await client.graphql.query(RequestQuery, { id: "1" });
console.log(result.request);
```

## Run a Mutation

Mutations use the same shape with `client.graphql.mutation()`:

```ts
const RenameMutation = gql<
  {
    renameReplaySessionCollection: {
      collection: { id: string; name: string } | null;
    };
  },
  { id: string; name: string }
>`
  mutation RenameCollection($id: ID!, $name: String!) {
    renameReplaySessionCollection(id: $id, name: $name) {
      collection { id name }
    }
  }
`;

const result = await client.graphql.mutation(RenameMutation, {
  id: "1",
  name: "Renamed via raw GraphQL",
});

console.log(result.renameReplaySessionCollection.collection);
```

## Subscribe to a Subscription

Subscriptions are exposed through `client.graphql.subscribe()` and return an `AsyncIterable` that yields each event as it arrives. Iterate with `for await` and `break` out of the loop to disconnect:

```ts
const NewRequests = gql<{
  createdRequest: {
    requestEdge: {
      cursor: string;
      node: { id: string; host: string; method: string; path: string };
    };
  };
}>`
  subscription NewRequests {
    createdRequest {
      requestEdge {
        cursor
        node { id host method path }
      }
    }
  }
`;

for await (const event of client.graphql.subscribe(NewRequests)) {
  const req = event.createdRequest.requestEdge.node;
  console.log(`New request: ${req.method} ${req.host}${req.path}`);
}
```

## Find Available Operations

Caido's GraphQL endpoint lives at `<instanceUrl>/graphql` and supports standard introspection. Point any GraphQL explorer (Apollo Studio, Insomnia, GraphiQL, etc.) at that URL with your access token in the `Authorization` header to browse the full schema, including every type, field, and input.

For TypeScript signatures, the SDK's source repository also ships generated bindings under [`packages/sdk-client/src/graphql/__generated__/`](https://github.com/caido/sdk-js/tree/main/packages/sdk-client/src/graphql) that mirror every operation the high-level SDKs use. They are useful as a reference for fragment shapes and required arguments.

## Errors

Raw GraphQL calls throw the same error types the high-level SDKs use:

- `NetworkUserError`: the request did not reach the server
- `OperationUserError`: the server rejected the query (invalid fields, type errors, missing arguments)
- `NoDataUserError`: the server accepted the query but returned no data

```ts
import { OperationUserError } from "@caido/sdk-client";

try {
  await client.graphql.query(RequestQuery, { id: "doesNotExist" });
} catch (error) {
  if (error instanceof OperationUserError) {
    console.error("GraphQL rejected the query:", error.message);
  } else {
    throw error;
  }
}
```

## Examples

The script below uses a raw query to fetch the authenticated user, replicating what `client.user.viewer()` does internally:

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import { gql } from "@urql/core";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  const ViewerQuery = gql<{ viewer: { __typename: string; id: string } }>`
    query CustomViewer {
      viewer {
        __typename
        ... on CloudUser { id }
        ... on GuestUser { id }
        ... on ScriptUser { id }
      }
    }
  `;

  const result = await client.graphql.query(ViewerQuery);
  console.log(
    `Authenticated as ${result.viewer.__typename} ${result.viewer.id}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it with:

```bash
export CAIDO_PAT=caido_xxxxx
npx tsx ./index.ts
```

A successful run prints:

```txt
[caido] Loaded token from cache
Authenticated as CloudUser 01JX49W2EBZBSVT8HBRXCDD8XB
```
