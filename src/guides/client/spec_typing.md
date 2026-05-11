# Use a Plugin's NPM Spec Package

Some plugins publish a small npm package containing the TypeScript types for their backend functions and events. When you install that spec package and pass it as a generic to the Client SDK, you get fully typed function calls, autocomplete on method names, typed event payloads, and zero hand-written type definitions.

This is the recommended way to call a plugin from a script when a spec package is available. For plugins that do not publish a spec, fall back to the explicit forms shown in [Call a Plugin Function](./call_function.md) and [Receive Plugin Events](./receive_events.md).

::: info
A runnable version of this guide lives in the SDK repository at [`examples/functionCallSpec`](https://github.com/caido/sdk-js/tree/main/packages/sdk-client/examples/functionCallSpec). Spec packages live under the [`@caido-community`](https://www.npmjs.com/org/caido-community) npm scope. Their source code is in the plugin's repository under [caido-community](https://github.com/caido-community), usually inside a `packages/shared` folder.
:::

## Install the Spec Package

To get typed access to a plugin, install its spec package. The convention is `@caido-community/<plugin-manifest-id>`. For example, the spec for the `quickssrf` plugin is published as `@caido-community/quickssrf`:

::: code-group
```bash [pnpm]
pnpm add @caido-community/quickssrf
```

```bash [npm]
npm install @caido-community/quickssrf
```

```bash [yarn]
yarn add @caido-community/quickssrf
```
:::

## Pass the Spec to the Client

To enable typed access, import the `Spec` type from the package and pass it as a generic to `client.plugin.pluginPackage()` (or `client.plugin.install()`):

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as QuickSSRFSpec } from "@caido-community/quickssrf";

const client = new Client({ url: "http://localhost:8080" });
await client.connect();

const pkg = await client.plugin.pluginPackage<QuickSSRFSpec>("quickssrf");
if (pkg === undefined) {
  throw new Error("quickssrf is not installed");
}
```

From this point, every function and event exposed by the plugin is typed on the `pkg` handle.

## Call Typed Functions

To call a function, access it directly on the `pkg` handle as if it were a local method. The SDK proxies the call to the backend and returns a properly typed promise:

```ts
const providers = await pkg.getProviders();
// providers is typed as Result<Provider[]>

if (providers.kind === "Error") {
  throw new Error(providers.error);
}

const session = await pkg.createSession(providers.value[0].id);
// session is typed as Result<Session>
```

A few things that change compared to the explicit `callFunction()` form:

- **Autocomplete** lists every function declared in the spec (`getProviders`, `createSession`, `addProvider`, etc.) as you type `pkg.`
- **Argument types** are checked at compile time. Passing the wrong number or shape of arguments is a TypeScript error before you ever run the script.
- **Return types** flow through automatically. No need to specify a generic on each call.

::: info
Under the hood, the typed methods still call the same backend endpoint as `callFunction()`. The spec adds type information at compile time without changing what happens at runtime.
:::

## Receive Typed Events

Event subscriptions also benefit from the spec. Event names are autocompleted from the spec's `events` map, and the destructured payload is fully typed:

```ts
for await (const [event] of pkg.subscribeEvent("interaction:received")) {
  // event is typed as { sessionId: string; interactions: Interaction[] }
  if (event.sessionId !== session.value.id) continue;
  for (const interaction of event.interactions) {
    console.log(interaction);
  }
}
```

For more on event subscriptions (including multi-backend disambiguation and stopping a subscription), see [Receive Plugin Events](./receive_events.md). The mechanics are identical; the spec only adds types.

## When No Spec Package Exists

Not every plugin publishes a spec package. When one is not available, use the explicit forms instead:

- [Call a Plugin Function](./call_function.md) for `pkg.callFunction<T>({ name, arguments })`
- [Receive Plugin Events](./receive_events.md) for `pkg.subscribeEvent("name")` with manually cast payloads

You can still get the function and event names from the plugin's backend source code (look for `sdk.api.register(...)` and `sdk.api.send(...)` calls in its [caido-community](https://github.com/caido-community) repository).

## Example

The script below uses the `@caido-community/quickssrf` spec to call functions and receive events with full type safety.

### index.ts

```ts
import { Client } from "@caido/sdk-client";
import type { Spec as QuickSSRFSpec } from "@caido-community/quickssrf";

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  const pkg = await client.plugin.pluginPackage<QuickSSRFSpec>("quickssrf");
  if (pkg === undefined) {
    throw new Error("quickssrf is not installed");
  }

  const providers = await pkg.getProviders();
  if (providers.kind === "Error") {
    throw new Error(`getProviders failed: ${providers.error}`);
  }

  const session = await pkg.createSession(providers.value[0]!.id);
  if (session.kind === "Error") {
    throw new Error(`createSession failed: ${session.error}`);
  }

  console.log("Listening for interactions on", session.value.url);

  for await (const [event] of pkg.subscribeEvent("interaction:received")) {
    if (event.sessionId !== session.value.id) continue;
    for (const interaction of event.interactions) {
      console.log("Interaction received:", interaction);
    }
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

Then trigger the SSRF URL printed at the start (for example, `curl <url>`) to see typed interactions arrive on the subscription.
