# Manage Findings

The Client SDK exposes the findings stored in the current Caido project through `client.finding`. Findings are security observations attached to a specific request. You can list them, look one up by ID, and create or update them from a script.

::: info
Findings are project-scoped. A project must be open on the instance for any of these calls to succeed.
:::

## List Findings

To list findings, start a chain with `client.finding.list()` and await it. The result is a `Connection<Finding>` with `pageInfo` (cursors) and `edges`:

```ts
const page = await client.finding.list().first(10);

for (const edge of page.edges) {
  const f = edge.node;
  console.log(`[${f.reporter}] ${f.title} at ${f.host}${f.path}`);
}
```

The `Finding` shape includes `id`, `requestId`, `title`, `reporter`, `description`, `dedupeKey`, `host`, `path`, `hidden`, and `createdAt`.

## Filter by Reporter

To narrow the list, chain `.filter({ reporter: "<name>" })`. This is the only filter field currently supported on findings:

```ts
const mine = await client.finding
  .list()
  .filter({ reporter: "my-plugin" })
  .first(50);

console.log(`Got ${mine.edges.length} finding(s) from "my-plugin"`);
```

## Order Results

To control sort order, chain `.order({ by, ordering })`. The `by` field is one of `"CREATED_AT"`, `"HOST"`, `"ID"`, `"PATH"`, `"REPORTER"`, `"TITLE"`, and `ordering` is `"ASC"` or `"DESC"`:

```ts
const latest = await client.finding
  .list()
  .order({ by: "CREATED_AT", ordering: "DESC" })
  .first(10);
```

## Paginate

To walk through more findings than fit in a single page, call `.next()` on the returned connection. It returns the next page or `undefined` when there are no more:

```ts
let page = await client.finding.list().first(50);
while (page) {
  for (const edge of page.edges) {
    // process edge.node
  }
  page = await page.next();
}
```

## Get a Single Finding

To fetch one finding when you already know its ID, use `client.finding.get(id)`. It returns the `Finding` directly, or `undefined` when the finding does not exist:

```ts
const finding = await client.finding.get("1");
if (finding === undefined) {
  throw new Error("Finding not found");
}

console.log(finding.title, "->", finding.description);
```

## Create a Finding

To create a new finding tied to an existing request, use `client.finding.create(requestId, options)`. The `host` and `path` are pulled automatically from the request:

```ts
const finding = await client.finding.create("1", {
  title: "Potential SSRF",
  reporter: "my-scanner",
  description: "The `redirect_url` parameter is reflected in an outbound request.",
  dedupeKey: "ssrf:/canonical.html:redirect_url",
});

console.log("Created finding", finding.id);
```

The `dedupeKey` is optional but recommended for automated scanners: Caido uses it to skip creating duplicate findings on subsequent runs.

## Update a Finding

To change a finding's title, description, or hidden state, use `client.finding.update(id, options)`. All three fields are required, so fetch the finding first if you only want to change one:

```ts
const current = await client.finding.get("1");
if (current === undefined) {
  throw new Error("Finding not found");
}

await client.finding.update(current.id, {
  title: current.title,
  description: "Updated description with reproduction steps.",
  hidden: current.hidden,
});
```

## Example

The script below lists every finding in the project, ordered by creation time, and paginates through the full list:

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

  let page = await client.finding
    .list()
    .order({ by: "CREATED_AT", ordering: "DESC" })
    .first(50);

  let total = 0;
  while (page) {
    for (const edge of page.edges) {
      const f = edge.node;
      console.log(`[${f.createdAt.toISOString()}] ${f.title} - ${f.host}${f.path}`);
      total++;
    }
    page = await page.next();
  }

  console.log(`\nTotal: ${total} finding(s)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Run it with:

```bash
export CAIDO_PAT=caido_xxxxx
node ./index.ts
```

A successful run prints one line per finding followed by a total count:

```txt
[caido] Attempting to load cached token
[caido] Loaded token from cache
[2026-05-11T14:02:04.976Z] SDK test finding (updated) - detectportal.firefox.com/canonical.html
[2026-05-11T13:53:58.784Z] SDK test finding (updated) - detectportal.firefox.com/canonical.html

Total: 2 finding(s)
```
