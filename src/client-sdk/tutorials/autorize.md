# Using the Autorize API

The goal of this tutorial is to drive the [Caido Autorize](https://github.com/caido-community/autorize) plugin from an external script using the [Client SDK](https://github.com/caido/sdk-js). By the end, you will be able to install Autorize against a Caido instance, configure user profiles that mutate authorization headers, run authorization tests against requests in your proxy history, and interpret the results to determine whether endpoints enforce proper access control.

This is useful for automated authorization testing across many endpoints, regression testing after access control changes, and any workflow where you need to verify that different user roles see the correct responses without manually replaying each request through the UI.

## 1. Prerequisites

::: info Requirements
- [Node.js](https://nodejs.org/en/) 18 or higher
- A running Caido instance with an open project
- A [Personal Access Token](https://docs.caido.io/dashboard/concepts/pat.html) (PAT) for your account
- At least one request in the project's HTTP history. This tutorial uses `caido.local` as the example target, so send any request through your Caido proxy to that host before starting (or substitute your own host throughout).
:::

## 2. Setting up the script

### Initializing the project

Create a working directory for the script and initialize it:

```bash
mkdir caido-autorize-tutorial
cd caido-autorize-tutorial
pnpm init
```

Add `"type": "module"` to `package.json` so Node treats the `.ts` file as an ES module, which the `import` statements below require.

### Installing dependencies

Install the Client SDK and the Autorize spec package. The spec package is what makes the Autorize functions and events typed when you call them through the SDK:

```bash
pnpm add @caido/sdk-client @caido-community/autorize
```

::: info
The [`@caido-community/autorize`](https://www.npmjs.com/package/@caido-community/autorize) package is the spec for the Autorize plugin. The Client SDK uses it to type the calls in this tutorial. See [Use a Plugin's NPM Spec Package](/client-sdk/guides/spec_typing.md) for the broader concept.
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

## 3. Connecting and installing Autorize

Create `index.ts`. The first thing the script does is connect to the Caido instance using the PAT from the environment, then either look up or install the Autorize plugin:

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as AutorizeSpec } from "@caido-community/autorize";

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
  let pkg = await client.plugin.pluginPackage<AutorizeSpec>("autorize");
  if (pkg === undefined) {
    console.log("Installing Autorize...");
    pkg = await client.plugin.install<AutorizeSpec>({ manifestId: "autorize" });
  }
  console.log("Autorize ready");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

The `AutorizeSpec` generic on `pluginPackage` and `install` is what makes the rest of the script's calls typed: `pkg.createTemplate(...)`, `pkg.getTemplate(...)`, and so on, all autocomplete with the correct argument and return types. The lookup-then-install pattern is idiomatic: `pluginPackage()` returns `undefined` when the plugin is not present, and `install()` returns a fresh handle when it is invoked.

For more on installing plugins from a script, see the [Install a Plugin](/client-sdk/guides/install_plugin.md) guide.

## 4. Configuring user profiles

Autorize works by replaying each request with different authorization credentials to see if the endpoint enforces access control. You configure this through **user profiles**, where each profile defines a set of **mutations** that transform the original request before it is replayed.

Use `pkg.updateConfig()` to add one or more profiles. Each profile needs an `id`, a `name`, an `enabled` flag, and a list of `mutations`:

```ts
const updated = await pkg.updateConfig({
  userProfiles: [
    {
      id: "low-priv",
      name: "Low-Privilege User",
      enabled: true,
      mutations: [
        {
          kind: "HeaderReplace",
          header: "Authorization",
          value: "Bearer low-priv-token-xxx",
        },
      ],
    },
  ],
});

if (updated.kind === "Error") {
  throw new Error(updated.error);
}

// Read back the config to know how many results to expect later
const cfg = await pkg.getConfig();
if (cfg.kind === "Error") throw new Error(cfg.error);
```

The available mutation kinds are:

- `HeaderAdd`, `HeaderRemove`, `HeaderReplace`: add, remove, or replace an HTTP header.
- `CookieAdd`, `CookieRemove`, `CookieReplace`: add, remove, or replace a cookie.
- `RawMatchAndReplace`: match a string (or regex with `regex: true`) in the raw request and replace it.

When Autorize tests a request, it sends one replay per enabled profile using that profile's mutations, plus a **no-auth** replay that strips the `Authorization` header entirely. The results show whether each profile can still access the endpoint.

::: info
Autorize functions return an `APIResult<T>` envelope of the form `{ kind: "Ok"; value }` or `{ kind: "Error"; error }`. Always branch on `result.kind` before using the value. This convention is shared by other community plugins like Scanner.
:::

## 5. Finding a target request

Authorization tests run against existing requests in the project's HTTP history. To get the request ID for a target, use [`client.request.list()`](/client-sdk/guides/extract_requests.md) with an [HTTPQL](https://docs.caido.io/app/reference/httpql.html) filter on the host:

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

## 6. Creating a template

A **template** represents a single authorization test. Call `pkg.createTemplate(requestId)` with the ID of the request you want to test. Autorize replays the request with each enabled profile's mutations and collects the results:

```ts
const created = await pkg.createTemplate(target.id);
if (created.kind === "Error") {
  throw new Error(created.error);
}

const templateId = created.value.id;
console.log(`Template created: id=${templateId}`);
console.log(`  ${created.value.request.method} ${created.value.request.url}`);
```

The returned `Template` includes the template `id`, a deduplication `key` derived from the request's method, host, and path, and a `results` array that fills in as Autorize processes the replays.

## 7. Waiting for results

After creating a template, Autorize processes the replays asynchronously. Poll `pkg.getTemplate(id)` until the `results` array contains all expected entries. With one enabled user profile and `testNoAuth` enabled (the default), there are three results: one baseline, one mutated, and one no-auth:

```ts
let template = created.value;
const enabledProfiles = cfg.value.userProfiles.filter((p) => p.enabled);
const expectedResults = 1 + enabledProfiles.length + (cfg.value.testNoAuth ? 1 : 0);

while (template.results.length < expectedResults) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const got = await pkg.getTemplate(templateId);
  if (got.kind === "Error") {
    throw new Error(got.error);
  }
  template = got.value;
  console.log(`  results: ${template.results.length}/${expectedResults}`);
}
```

::: tip
For scripts that create many templates, subscribe to the `template:completed` event instead of polling. See [Receive Plugin Events](/client-sdk/guides/receive_events.md). Polling is shown here because it keeps the example self-contained.
:::

## 8. Interpreting the results

Each result in the `results` array is tagged with a `type` and a `kind`. The `type` tells you which replay produced it:

- `"baseline"`: the original request, replayed without any mutations.
- `"mutated"`: the request replayed with a user profile's mutations applied. The `userProfileId` and `userProfileName` fields identify which profile was used.
- `"no-auth"`: the request replayed with the `Authorization` header stripped.

Each mutated and no-auth result carries an `accessState` with a `kind` field:

- `"authorized"`: the endpoint returned a response similar to the baseline, indicating the low-privilege or unauthenticated user can still access it. This is the finding you care about in authorization testing.
- `"unauthorized"`: the endpoint returned a different response, indicating access was properly denied.
- `"uncertain"`: Autorize could not determine whether access was granted or denied.

```ts
for (const result of template.results) {
  if (result.kind === "Error") {
    console.log(`  ERROR: ${result.error}`);
    continue;
  }

  if (result.type === "baseline") {
    console.log(
      `  [baseline] ${result.response.code} (${result.response.length} bytes)`,
    );
  } else if (result.type === "mutated") {
    console.log(
      `  [mutated] "${result.userProfileName}" -> ${result.response.code} access=${result.accessState.kind}`,
    );
  } else if (result.type === "no-auth") {
    console.log(
      `  [no-auth] -> ${result.response.code} access=${result.accessState.kind}`,
    );
  }
}
```

## 9. Cleaning up

Templates persist in the project until they are deleted. Remove the template at the end of the script to keep the project tidy:

::: warning
The `updateConfig` call below resets `userProfiles` to an empty array. If you already have Autorize profiles configured in this project, save them with `getConfig()` before the script runs and restore them here instead.
:::

```ts
await pkg.deleteTemplate(templateId);
await pkg.updateConfig({ userProfiles: [] });
console.log("Cleaned up");
```

## Examples

The script below combines every step into a single file. It connects, ensures Autorize is installed, configures a low-privilege user profile, finds the first `caido.local` request, creates a template, waits for the results, prints them, and cleans up.

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as AutorizeSpec } from "@caido-community/autorize";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  // 1. Look up or install Autorize
  let pkg = await client.plugin.pluginPackage<AutorizeSpec>("autorize");
  if (pkg === undefined) {
    pkg = await client.plugin.install<AutorizeSpec>({ manifestId: "autorize" });
  }

  // 2. Configure a low-privilege user profile
  const updated = await pkg.updateConfig({
    userProfiles: [
      {
        id: "low-priv",
        name: "Low-Privilege User",
        enabled: true,
        mutations: [
          {
            kind: "HeaderReplace",
            header: "Authorization",
            value: "Bearer low-priv-token-xxx",
          },
        ],
      },
    ],
  });
  if (updated.kind === "Error") throw new Error(updated.error);

  // 3. Read back the config to know how many results to expect
  const cfg = await pkg.getConfig();
  if (cfg.kind === "Error") throw new Error(cfg.error);

  // 4. Find a target request
  const page = await client.request
    .list()
    .filter('req.host.eq:"caido.local"')
    .first(1);
  const target = page.edges[0]?.node.request;
  if (target === undefined) {
    throw new Error("Send a request to caido.local through the Caido proxy first");
  }

  // 5. Create a template (starts authorization test)
  const created = await pkg.createTemplate(target.id);
  if (created.kind === "Error") throw new Error(created.error);
  const templateId = created.value.id;
  console.log(`Template created for ${created.value.request.method} ${created.value.request.url}`);

  // 6. Wait for all results
  let template = created.value;
  const enabledProfiles = cfg.value.userProfiles.filter((p) => p.enabled);
  const expectedResults = 1 + enabledProfiles.length + (cfg.value.testNoAuth ? 1 : 0);
  while (template.results.length < expectedResults) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const got = await pkg.getTemplate(templateId);
    if (got.kind === "Error") throw new Error(got.error);
    template = got.value;
  }

  // 7. Print results
  console.log(`\nResults (${template.results.length}):`);
  for (const result of template.results) {
    if (result.kind === "Error") {
      console.log(`  ERROR: ${result.error}`);
      continue;
    }
    if (result.type === "baseline") {
      console.log(`  [baseline] ${result.response.code} (${result.response.length} bytes)`);
    } else if (result.type === "mutated") {
      console.log(`  [mutated] "${result.userProfileName}" -> ${result.response.code} access=${result.accessState.kind}`);
    } else if (result.type === "no-auth") {
      console.log(`  [no-auth] -> ${result.response.code} access=${result.accessState.kind}`);
    }
  }

  // 8. Cleanup
  await pkg.deleteTemplate(templateId);
  await pkg.updateConfig({ userProfiles: [] });
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

A successful run against a `caido.local` target prints something like:

```txt
[caido] Loaded token from cache
Template created for GET http://caido.local/api/users

Results (3):
  [baseline] 200 (1842 bytes)
  [mutated] "Low-Privilege User" -> 200 (1842 bytes) access=authorized
  [no-auth] -> 200 (1842 bytes) access=authorized
```

In this example, both the low-privilege user and the unauthenticated request received the same 200 response as the baseline, so Autorize marked them as `authorized`. This means the endpoint does not enforce access control and any user can reach it.

## Script Breakdown

The script performs the following operations:

1. **Connect**: authenticates against the Caido instance using a PAT and caches the resulting tokens on disk so subsequent runs skip the auth flow. See [Base Setup](/client-sdk/guides/base_setup.md) for details.
2. **Plugin handle**: looks up Autorize by manifest ID, installing it via the SDK if it is not yet present. See [Install a Plugin](/client-sdk/guides/install_plugin.md).
3. **User profile**: configures a low-privilege user whose `Authorization` header is replaced with a different token. Autorize will replay every tested request with this profile's mutations applied.
4. **Target lookup**: queries the HTTP history with an HTTPQL filter to find a request to test. See [Extract Requests](/client-sdk/guides/extract_requests.md) and the [HTTPQL reference](https://docs.caido.io/app/reference/httpql.html).
5. **Template**: creates an authorization test template from the target request. Autorize replays the request as the baseline, once per enabled profile, and once without auth.
6. **Results**: polls until all expected results arrive, then prints each result's type, response code, and access state.
7. **Cleanup**: deletes the template and resets the user profiles so they do not interfere with future tests.

## Next Steps

You can extend this tutorial in several directions:

- Add multiple user profiles (admin, editor, viewer) to test role-based access control across several privilege levels.
- Create templates for many requests by looping over `client.request.list()` results, building an authorization matrix across your entire API surface.
- Subscribe to the `template:completed` event instead of polling, as described in [Receive Plugin Events](/client-sdk/guides/receive_events.md).
- Use `pkg.getTemplatesExportData(templateIds)` to export results for reporting or integration with other tools.
