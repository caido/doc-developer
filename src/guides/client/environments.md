# Environments and Variables

The Client SDK exposes Caido's environments and their variables through `client.environment`. Environments hold named values (plain or secret) that you can reference in requests and workflows, which is useful for parameterizing scripts across different targets, API keys, or stages.

::: info
Environments are project-scoped. A project must be open on the instance for these calls to succeed. Every project also starts with a default `Global` environment that you can use directly or alongside your own.
:::

## List Environments

To get every environment in the current project, await `client.environment.list()`:

```ts
const envs = await client.environment.list();
for (const env of envs) {
  console.log(`${env.name} (${env.variables.length} variable(s))`);
}
```

Each entry is a plain `Environment` object with `id`, `name`, `version`, and `variables`.

## Create an Environment

To create a new environment, call `client.environment.create()` with a name and the initial variables. Variables can be `"PLAIN"` (visible) or `"SECRET"` (masked):

```ts
const env = await client.environment.create({
  name: "staging",
  variables: [
    { name: "API_URL", value: "https://api.staging.example.com", kind: "PLAIN" },
    { name: "API_KEY", value: "secret-123", kind: "SECRET" },
  ],
});

console.log("Created environment", env.id);
```

`create()` returns an `EnvironmentInstance` that you keep around to manage variables on this environment. The instance tracks the environment's version internally, so successive variable changes update the local state automatically without needing to refetch.

## Get a Single Environment

To pick up an existing environment for variable management, look it up by ID with `client.environment.get(id)`. It returns an `EnvironmentInstance` or `undefined` when the environment does not exist:

```ts
const env = await client.environment.get("2");
if (env === undefined) {
  throw new Error("Environment not found");
}
```

## Add, Update, and Delete Variables

To change variables on an environment, use the instance methods. Each call writes through to Caido and refreshes the local state:

```ts
// Add a new variable
await env.addVariable({ name: "REGION", value: "us-east-1", kind: "PLAIN" });

// Update an existing variable by name (merges with the current value)
await env.updateVariable("API_KEY", { value: "secret-rotated" });

// Delete a variable by name
await env.deleteVariable("REGION");

console.log(env.variables);
```

The variable list available on `env.variables` always reflects the latest server state after each call.

## Select the Active Environment

Only one environment is active at a time in Caido. To switch the active environment from a script, call `client.environment.select(id)`. Pass `undefined` to deselect the current one:

```ts
// Make this environment active
const active = await client.environment.select(env.id);
console.log("Active environment:", active?.name);

// Deselect
await client.environment.select();
```

## Delete an Environment

To remove an environment, call `client.environment.delete(id)`:

```ts
await client.environment.delete(env.id);
```

::: warning
Deletion is permanent and removes all variables on the environment. Any request or workflow that references variables from the deleted environment will fail until you point them at another environment.
:::

## Example

The script below provisions a `staging` environment with two variables, selects it, and prints the final state:

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

  const env = await client.environment.create({
    name: "staging",
    variables: [
      { name: "API_URL", value: "https://api.staging.example.com", kind: "PLAIN" },
      { name: "API_KEY", value: "secret-123", kind: "SECRET" },
    ],
  });

  await env.addVariable({ name: "REGION", value: "us-east-1", kind: "PLAIN" });
  await env.updateVariable("API_KEY", { value: "secret-rotated" });

  await client.environment.select(env.id);

  console.log(`Active: ${env.name}`);
  for (const v of env.variables) {
    const display = v.kind === "SECRET" ? "***" : v.value;
    console.log(`  ${v.name} = ${display} (${v.kind})`);
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
node ./index.ts
```

A successful run prints:

```txt
[caido] Attempting to load cached token
[caido] Loaded token from cache
Active: staging
  API_URL = https://api.staging.example.com (PLAIN)
  API_KEY = *** (SECRET)
  REGION = us-east-1 (PLAIN)
```
