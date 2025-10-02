# Fetching Proxied Requests

In this guide, we'll cover how to fetch proxied requests in a backend plugin.

## query()

The `query()` method queries proxied requests belonging to the current [Project](https://docs.caido.io/guides/projects.html).

```ts
let query = sdk.requests.query();
```

This method returns the results as a [RequestsQuery](/reference/sdks/backend/#requestsquery) object.

## execute()

Queries for requests are executed with the `execute()` method.

```ts
const results = await query.execute();
```

::: info
Caido utilizes cursor-based pagination, meaning that instead of the dataset being divided into fixed subsets across numbered "pages" as seen in offset-based pagination, references to requests rely on their unique "cursors" which identify their position.

By referencing a request's cursor, you can fetch it or mark it as the starting position for operations on the dataset.
:::

This method returns a Promise that resolves to a [RequestsConnection](/reference/sdks/backend/#requestsconnection) object that represents the returned dataset, in this case the requests.

The `RequestsConnection` object has two parent fields: `items` and `pageInfo`.

### items

The `items` field is an array of `RequestsConnectionItem` objects. The fields of the `RequestConnectionItem` object are:

- `request`: The [Request](/reference/sdks/backend/#request) object itself.
- `cursor`: The cursor of the associated request.
- `response`: The paired [Response](/reference/sdks/backend/#response-3) object of the associated request if available.

### pageInfo

The fields of the `pageInfo` object are:

- `startCursor` - The cursor of the starting request in the dataset.
- `endCursor` - The cursor of the ending request in the dataset.
- `hasPreviousPage` - Returns either `true` or `false` to indicate whether more data before the current set is available.
- `hasNextPage` - Returns either `true` or `false` to indicate whether more data after the current set is available.

## Refining Your Dataset View

However, for Projects with a large number of requests, executing such a broad query would be memory exhaustive and inefficient. To account for this, Caido's SDK also offers a variety of additional methods that can be chained in order to refine the view of the requests dataset.

### Filtering

With the `filter()` method, you can target specific requests using [HTTPQL](https://docs.caido.io/reference/httpql.html) query statements as a parameter.

```ts
 let query = sdk.requests.query().filter('req.host.eq:"example.com"');
```

### Sorting

The following methods can be used to sort results to determine their ordering:

- `ascending()` - Sorts results in ascending order.
- `descending()` - Sorts results in descending order.

Both methods can target either requests or responses by supplying either `"req"` or `"resp"` as their first parameter.

The element that determines the sort order is either a [RequestOrderField](/reference/sdks/backend/#requestorderfield) or a [ResponseOrderField](/reference/sdks/backend/#responseorderfield) depending on the target and is supplied as the second parameter.

```ts
query = query.ascending("req", "id");
```

#### Cursor

The following methods can be used to paginate through the dataset:

- `after()` - Fetches requests that come after a cursor.
- `before()` - Fetches requests that come before a cursor.

#### Limiting

The following methods can be used to limit the number of requests to process:

- `first()` - Specifies the number of requests from the beginning of the dataset view.
- `last()` - Specifies the number of requests from the end of the dataset view.

Both `first()` and `last()` take an integer as their parameter that represents the number of requests to process.

## Building and Executing a Query

### /packages/backend/src/index.ts

```ts
import type { DefineAPI, SDK } from "caido:plugin";

export async function fetchRequests(sdk: SDK) {
  let totalRequestsQueried = 0;

  while (true) {
    let cursor = null;
    let query = sdk.requests
      .query()
      .filter('req.host.eq:"example.com"')
      .first(1000);

    query = query.ascending("req", "created_at");

    if (cursor) {
      query = query.after(cursor);
    }

    const requests = await query.execute();

    totalRequestsQueried += requests.items.length;

    if (requests.pageInfo.hasNextPage) {
      cursor = requests.pageInfo.endCursor;
    } else {
      break;
    }
  }

  return totalRequestsQueried;
}

export type API = DefineAPI<{
  fetchRequests: typeof fetchRequests;
}>;

export async function init(sdk: SDK<API>) {
  sdk.api.register("fetchRequests", fetchRequests);
}
```

### Script Breakdown

First, the necessary type aliases are imported. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return.

```ts
import type { DefineAPI, SDK } from "caido:plugin";
```

Next, the function is defined. The function takes the `sdk` parameter typed using the `SDK` alias to give the function access to it's utilities. To keep track of the total number of requests queried, the `totalRequestsQueried` variable is created with an initial value of `0`. A `while` loop is created to continuously process the dataset. The `cursor` variable is initially set to `null` since we are starting from the very beginning of the dataset and don't have a previous position to continue from. The dataset is queried for any requests that have been made to `example.com` using the HTTPQL statement `req.host.eq:"example.com"` in the `.filter()` method. With `.first(1000)` the query processes batches of 1,000 requests at a time.

```ts
export async function fetchRequests(sdk: SDK) {
  let totalRequestsQueried = 0;

  while (true) {
    let cursor = null;
    let query = sdk.requests
      .query()
      .filter('req.host.eq:"example.com"')
      .first(1000);
```

Next, the request batches are sorted in ascending order, by their `created_at` time for a chronological view of the dataset. The `if` statement implements pagination by marking a cursor pointing to where the processing left off and instructs the query to start from this position, not the very beginning. With the query constructed, it is executed with the `await` directive to account for the processing time. The returned `RequestsConnection` object is stored in the `requests` variable.

```ts
    query = query.ascending("req", "created_at");

    if (cursor) {
      query = query.after(cursor);
    }

    const requests = await query.execute();
```

The number of requests that match the query in each processed batch are added to the existing total. The `if` statement checks if there are more pages to process. If there are more pages, `requests.pageInfo.endCursor` saves the cursor pointing to the last request of the current batch in the `cursor` variable. With this updated cursor, processing will always begin where it left off.

```ts
    totalRequestsQueried += requests.items.length;

    if (requests.pageInfo.hasNextPage) {
      cursor = requests.pageInfo.endCursor;
    } else {
      break;
    }
  }

  return totalRequestsQueried;
}
```

The `fetchRequests` function is [added to the API](/guides/components/rpc.md) and exported so it can be used in other files. Finally, the base `SDK` is extended bu adding the `<API>`. In order to register the function, we use the `sdk.api.register()` method which takes two parameters: a string name for the function and the function it refers to. We give the name `"fetchRequests"` to the `fetchRequests` function.

```ts
export type API = DefineAPI<{
  fetchRequests: typeof fetchRequests;
}>;

export async function init(sdk: SDK<API>) {
  sdk.api.register("fetchRequests", fetchRequests);
}
```

::: tip
To view how the endpoint can be called with a frontend plugin, expand the following:

<details>
<summary>Full Script</summary>

```vue
<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";

import { useSDK } from "@/plugins/sdk";

// Retrieve the SDK instance to interact with the backend.
const sdk = useSDK();

const loading = ref(false);
const result = ref<number | null>(null);

const fetchRequests = async () => {
  loading.value = true;
  try {
    // Call the backend fetchRequests function.
    result.value = await sdk.backend.fetchRequests();
  } catch (e) {
    console.error("Error fetching requests:", e);
    result.value = null;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="p-4">
    <Button
      label="Fetch Requests"
      :loading="loading"
      @click="fetchRequests"
      class="mb-2"
    />
    <div v-if="result !== null">
      <p>Total requests queried: {{ result }}</p>
    </div>
  </div>
</template>
```

</details>
:::
