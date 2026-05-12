# Using the Scanner API

The goal of this tutorial is to drive the [Caido Scanner](https://github.com/caido-community/scanner) plugin from an external script using the [Client SDK](https://github.com/caido/sdk-js). By the end, you will be able to install Scanner against a Caido instance, run an active scan against a request already captured in your proxy history, and read the resulting findings, all without opening the Caido UI.

This is useful for security automation (running scans on a schedule, scanning batches of requests collected by another tool), CI/CD pipelines (checking new endpoints against a baseline), and any workflow where opening the Caido UI is not an option.

## 1. Prerequisites

::: info Requirements
- [Node.js](https://nodejs.org/en/) 18 or higher
- A running Caido instance with an open project
- A [Personal Access Token](https://docs.caido.io/dashboard/concepts/pat.html) (PAT) for your account
- At least one request to your target host in the project's HTTP history. This tutorial uses `caido.local` as the example target, so send any request through your Caido proxy to that host before starting (or substitute your own host throughout).
:::

## 2. Setting up the script

### Initializing the project

Create a working directory for the script and initialize it:

```bash
mkdir caido-scanner-tutorial
cd caido-scanner-tutorial
pnpm init
```

Add `"type": "module"` to `package.json` so Node treats the `.ts` file as an ES module, which the `import` statements below require.

### Installing dependencies

Install the Client SDK and the Scanner spec package. The spec package is what makes the Scanner functions and events typed when you call them through the SDK:

```bash
pnpm add @caido/sdk-client @caido-community/scanner
```

::: info
The [`@caido-community/scanner`](https://www.npmjs.com/package/@caido-community/scanner) package is the spec for the Scanner plugin. The Client SDK uses it to type the calls in this tutorial. See [Use a Plugin's NPM Spec Package](/guides/client/spec_typing.md) for the broader concept.
:::

### Setting environment variables

Export your PAT and (optionally) the instance URL:

```bash
export CAIDO_PAT=caido_xxxxx
export CAIDO_INSTANCE_URL=http://localhost:8080
```

::: warning
Never commit the PAT to source control. Treat it like a password and store it in your shell's secret manager or a `.env` file that is gitignored.
:::

## 3. Connecting and installing Scanner

Create `index.ts`. The first thing the script does is connect to the Caido instance using the PAT from the environment, then either look up or install the Scanner plugin:

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as ScannerSpec } from "@caido-community/scanner";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();
  console.log("Connected to Caido");

  // Look up the installed plugin, install if missing
  let pkg = await client.plugin.pluginPackage<ScannerSpec>("scanner");
  if (pkg === undefined) {
    console.log("Installing Scanner...");
    pkg = await client.plugin.install<ScannerSpec>({ manifestId: "scanner" });
  }
  console.log("Scanner ready");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

Two things to note. The `ScannerSpec` generic on `pluginPackage` and `install` is what makes the rest of the script's calls typed: `pkg.startActiveScan(...)`, `pkg.getChecks()`, and so on, all autocomplete with the correct argument and return types. The lookup-then-install pattern is idiomatic: `pluginPackage()` returns `undefined` when the plugin is not present, and `install()` returns a fresh handle when it is invoked.

For more on installing plugins from a script, see the [Install a Plugin](/guides/client/install_plugin.md) guide.

## 4. Discovering available checks

Before running a scan, you can list the checks Scanner ships with. This is useful for picking which checks to include or exclude from your scan, and for understanding what Scanner can detect:

```ts
const checks = await pkg.getChecks();
if (checks.kind === "Error") {
  throw new Error(checks.error);
}

console.log(`Scanner ships with ${checks.value.length} checks`);
for (const check of checks.value.slice(0, 5)) {
  console.log(`  ${check.id} [${check.type}] - ${check.name}`);
}
```

Each check exposes its `id`, `name`, `description`, `type` (`"passive"` or `"active"`), `tags`, and `severities`. You can filter for specific types or IDs by passing options:

```ts
const activeOnly = await pkg.getChecks({ type: "active" });
const specific = await pkg.getChecks({ include: ["reflected-xss", "sql-injection"] });
```

::: info
Scanner functions return a `Result<T>` envelope of the form `{ kind: "Ok"; value }` or `{ kind: "Error"; error }`. Always branch on `result.kind` before using the value. This is a Scanner convention; other plugins may use different shapes.
:::

## 5. Finding a target request

Active scans run against existing requests in the project's HTTP history. To get the request ID for a target, use [`client.request.list()`](/guides/client/extract_requests.md) with an [HTTPQL](https://docs.caido.io/reference/httpql.html) filter on the host:

```ts
const page = await client.request
  .list()
  .filter('req.host.eq:"caido.local"')
  .first(1);

const target = page.edges[0]?.node.request;
if (target === undefined) {
  throw new Error(
    "No requests to caido.local found in this project. " +
    "Send a request through the Caido proxy to that host first.",
  );
}

console.log(`Target: ${target.method} ${target.host}${target.path} (id=${target.id})`);
```

The filter syntax is the same one you use in the Caido HTTP History UI. Adjust it for your own target host.

## 6. Configuring and starting the scan

The active scan is configured with a `ScanConfig` object. Each field controls a different aspect of the scan:

```ts
const start = await pkg.startActiveScan({
  requestIDs: [target.id],
  title: `Scan of ${target.host}${target.path}`,
  scanConfig: {
    aggressivity: "low",
    scopeIDs: [],
    concurrentChecks: 2,
    concurrentRequests: 3,
    concurrentTargets: 1,
    requestsDelayMs: 0,
    scanTimeout: 60000,
    checkTimeout: 30000,
    severities: ["info", "low", "medium", "high", "critical"],
  },
});

if (start.kind === "Error") {
  throw new Error(start.error);
}

const sessionId = start.value.id;
console.log(`Scan started: ${sessionId} (kind=${start.value.kind})`);
```

The fields:

- `aggressivity`: `"low"`, `"medium"`, or `"high"`. Higher aggressivity sends more probe requests per check.
- `scopeIDs`: limit the scan to requests within specific Caido scopes. An empty array means no scope restriction.
- `concurrentChecks`, `concurrentRequests`, `concurrentTargets`: parallelism knobs that trade speed for load on the target.
- `requestsDelayMs`: delay between requests, useful for rate-limited targets.
- `scanTimeout` and `checkTimeout`: timeouts in milliseconds.
- `severities`: which severities to surface in the results.

`startActiveScan` returns a `Session` in the `Pending` state. The scan starts asynchronously.

## 7. Tracking progress

The session transitions through states as the scan runs: `Pending → Running → Done` (or `Interrupted` / `Error`). The simplest way to track it is to poll `getScanSession` until the kind is no longer `Pending` or `Running`:

```ts
let session = start.value;
while (session.kind === "Pending" || session.kind === "Running") {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const got = await pkg.getScanSession(sessionId);
  if (got.kind === "Error") {
    throw new Error(got.error);
  }
  session = got.value;
  const done = session.kind === "Running" ? session.progress.checksHistory.length : 0;
  const total = session.kind === "Running" ? session.progress.checksTotal : 0;
  console.log(`  status=${session.kind} progress=${done}/${total}`);
}

console.log(`Scan finished with status: ${session.kind}`);
```

::: tip
For long-running scans, subscribe to the `session:progress` event instead of polling. See [Receive Plugin Events](/guides/client/receive_events.md). Polling is shown here because it keeps the example self-contained.
:::

## 8. Reading the findings

When the session reaches `Done`, the `progress.checksHistory` array contains one `CheckExecution` for every check that ran. Each execution carries the findings it produced:

```ts
if (session.kind !== "Done") {
  console.log("Scan did not complete successfully:", session.kind);
  return;
}

const findings = [];
for (const execution of session.progress.checksHistory) {
  for (const finding of execution.findings) {
    findings.push({ checkID: execution.checkID, finding });
  }
}

console.log(`\nTotal findings: ${findings.length}`);
for (const { checkID, finding } of findings) {
  console.log(`  [${finding.severity}] ${finding.name} (${checkID})`);
  console.log(`    ${finding.description}`);
}
```

Each `Finding` has a `name`, `description`, `severity`, and a `correlation` block that pins the finding to a request and optionally a byte range within it.

## 9. Cleaning up

Scan sessions persist in the project until they are deleted. Remove the session at the end of the script to keep the project tidy:

```ts
await pkg.deleteScanSession(sessionId);
console.log("Scan session deleted");
```

## Example

The script below combines every step into a single file. It connects, ensures Scanner is installed, finds the first `caido.local` request, runs an active scan, prints the findings, and cleans up.

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as ScannerSpec } from "@caido-community/scanner";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  // 1. Look up or install Scanner
  let pkg = await client.plugin.pluginPackage<ScannerSpec>("scanner");
  if (pkg === undefined) {
    pkg = await client.plugin.install<ScannerSpec>({ manifestId: "scanner" });
  }

  // 2. Find a target request
  const page = await client.request
    .list()
    .filter('req.host.eq:"caido.local"')
    .first(1);
  const target = page.edges[0]?.node.request;
  if (target === undefined) {
    throw new Error("Send a request to caido.local through the Caido proxy first");
  }

  // 3. Start the scan
  const start = await pkg.startActiveScan({
    requestIDs: [target.id],
    title: `Scan of ${target.host}${target.path}`,
    scanConfig: {
      aggressivity: "low",
      scopeIDs: [],
      concurrentChecks: 2,
      concurrentRequests: 3,
      concurrentTargets: 1,
      requestsDelayMs: 0,
      scanTimeout: 60000,
      checkTimeout: 30000,
      severities: ["info", "low", "medium", "high", "critical"],
    },
  });
  if (start.kind === "Error") {
    throw new Error(start.error);
  }
  const sessionId = start.value.id;
  console.log(`Scan started: ${sessionId}`);

  // 4. Wait for the scan to finish
  let session = start.value;
  while (session.kind === "Pending" || session.kind === "Running") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const got = await pkg.getScanSession(sessionId);
    if (got.kind === "Error") {
      throw new Error(got.error);
    }
    session = got.value;
  }

  // 5. Print findings
  if (session.kind === "Done") {
    const findings = session.progress.checksHistory.flatMap((execution) =>
      execution.findings.map((finding) => ({
        checkID: execution.checkID,
        finding,
      })),
    );
    console.log(`Scan finished with ${findings.length} finding(s):`);
    for (const { checkID, finding } of findings) {
      console.log(`  [${finding.severity}] ${finding.name} (${checkID})`);
    }
  } else {
    console.log(`Scan ended with status: ${session.kind}`);
  }

  // 6. Cleanup
  await pkg.deleteScanSession(sessionId);
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

A successful run against a `caido.local` target prints something like:

```txt
[caido] Attempting to load cached token
[caido] Loaded token from cache
Scan started: ascan-xxxxxxxxxxx
Scan finished with 1 finding(s):
  [medium] Missing X-Frame-Options Header (anti-clickjacking)
```

Exact findings will vary based on what the target's response contains.

## Script Breakdown

The script performs the following operations:

1. **Connect**: authenticates against the Caido instance using a PAT and caches the resulting tokens on disk so subsequent runs skip the auth flow. See [Base Setup](/guides/client/base_setup.md) for details.
2. **Plugin handle**: looks up Scanner by manifest ID, installing it via the SDK if it is not yet present. See [Install a Plugin](/guides/client/install_plugin.md).
3. **Target lookup**: queries the HTTP history with an HTTPQL filter to find a request to scan. See [Extract Requests](/guides/client/extract_requests.md) and the [HTTPQL reference](https://docs.caido.io/reference/httpql.html).
4. **Active scan**: builds a `ScanConfig`, calls `startActiveScan`, and polls the resulting `Session` until it transitions out of `Running`.
5. **Findings**: flattens `progress.checksHistory[*].findings` into a single list and prints each by severity and check ID.
6. **Cleanup**: deletes the session so it does not accumulate in the project.

## Next Steps

You can extend this tutorial in several directions:

- Subscribe to the `session:progress` event instead of polling, as described in [Receive Plugin Events](/guides/client/receive_events.md).
- Scan multiple requests in one session by passing more IDs to `requestIDs`.
- Persist findings to Caido as native [findings](/guides/client/manage_findings.md) tied to the original request.
- Move on to [Using the Authorize API](./autorize.md) for a different style of automated security testing.
