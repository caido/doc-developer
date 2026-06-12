# Extract Requests

The Client SDK exposes the proxied HTTP history of a Caido instance through `client.request`. You can list requests with filters, ordering, and pagination, or fetch a single request by ID. This is the foundation for any automation that needs to read or process traffic captured by the proxy.

::: info
A project must be open on the instance for these calls to succeed. If no project is loaded, the database is not connected and the SDK will throw an error.
:::

## List Requests

To list requests, start a chain with `client.request.list()` and await it. The result is a paginated `Connection` with `pageInfo` (cursors) and `edges` (the requests):

```ts
const page = await client.request.list().first(10);

for (const edge of page.edges) {
  const req = edge.node.request;
  const code = edge.node.response?.statusCode ?? "no response";
  console.log(`${req.method} ${req.host}${req.path} -> ${code}`);
}
```

Each `edge.node` is a `{ request, response? }` pair. The response is `undefined` when the request did not complete (for example, an in-flight or dropped request).

## Filter with HTTPQL

To narrow the list, chain `.filter()` with an [HTTPQL](https://docs.caido.io/app/reference/httpql.html) query string. The same syntax used in the Caido HTTP History UI works here:

```ts
const errors = await client.request
  .list()
  .filter('resp.code.gte:400')
  .first(50);

console.log(`Got ${errors.edges.length} error response(s)`);
```

Integer values are unquoted (`resp.code.gte:400`), string values are quoted (`req.host.cont:"example.com"`). Combine clauses with `AND` / `OR` and parentheses, for example `'req.host.cont:"example.com" AND resp.code.gte:400'`.

## Order Results

To control sort order, chain `.ascending(target, field)` or `.descending(target, field)`. The `target` is `"req"` or `"resp"`, and the `field` is one of the supported order fields:

- Request fields: `created_at`, `host`, `method`, `path`, `query`, `ext`, `source`, `id`
- Response fields: `code`, `length`, `roundtrip`

```ts
const latest = await client.request
  .list()
  .descending("req", "created_at")
  .first(10);
```

## Skip Raw Bodies

To skip raw request and response bodies when you only need metadata (faster, less memory), call `.includeRaw(false)`. By default, every entry comes back with its full raw bytes attached.

```ts
const meta = await client.request.list().includeRaw(false).first(100);
// meta.edges[i].node.request.raw is undefined
```

To selectively keep one side, pass an object:

```ts
client.request.list().includeRaw({ request: true, response: false });
```

## Scope to a Caido Scope

To restrict the list to a specific Caido scope (the scopes you define under the **Scope** feature), chain `.scope(scopeId)`. You can list and look up scope IDs via `client.scope`:

```ts
const inScope = await client.request.list().scope(scopeId).first(50);
```

## Paginate

To walk through more results than fit in a single page, call `.next()` on the returned connection. It returns the next page or `undefined` when there are no more:

```ts
let page = await client.request.list().first(50);
while (page) {
  for (const edge of page.edges) {
    // process edge.node
  }
  page = await page.next();
}
```

Cursors in `page.pageInfo.startCursor` / `endCursor` are opaque strings. Treat them as a black box and feed them back to `.after(cursor)` or `.before(cursor)` if you need manual control.

## Get a Single Request

To fetch one request when you already know its ID, use `client.request.get(id)`. It returns the same `{ request, response? }` shape as a list edge, or `undefined` when the request does not exist:

```ts
const item = await client.request.get("1");
if (item === undefined) {
  throw new Error("Request not found");
}

console.log(item.request.method, item.request.host, item.request.path);
console.log("Response status:", item.response?.statusCode);
```

Pass an options object to skip the raw bodies on a per-call basis:

```ts
const item = await client.request.get("1", {
  requestRaw: false,
  responseRaw: false,
});
```

## Examples

The script below lists the latest 10 requests ordered by creation time, prints a one-line summary of each, and decodes the raw response of the first one.

### index.ts

```ts
import { Client } from "@caido/sdk-client";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  const page = await client.request
    .list()
    .descending("req", "created_at")
    .first(10);

  for (const edge of page.edges) {
    const req = edge.node.request;
    const code = edge.node.response?.statusCode ?? "no response";
    console.log(`${req.method} ${req.host}${req.path} -> ${code}`);
  }

  const first = page.edges[0]?.node;
  if (first?.response?.raw) {
    const text = new TextDecoder().decode(first.response.raw);
    console.log("\n--- Raw response of first request ---");
    console.log(text.slice(0, 500));
  }
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

A successful run prints a summary line per request followed by the first 500 bytes of the first response:

```txt
[caido] Attempting to load cached token
[caido] Loaded token from cache
GET detectportal.firefox.com/success.txt -> 200
GET detectportal.firefox.com/success.txt -> 200
GET detectportal.firefox.com/canonical.html -> 200
...

--- Raw response of first request ---
HTTP/1.1 200 OK
Server: nginx
Content-Length: 8
...
```
