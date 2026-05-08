# Call a Plugin Function

Once a plugin is installed, the Client SDK lets you invoke functions exposed by its backend over the network. This is useful for driving a plugin from a script, integrating it into a wider automation, or testing its behavior end-to-end.

This guide covers the explicit `callFunction()` form, which works for any installed plugin without extra setup. For fully typed direct calls (e.g. `pkg.getProviders()` instead of `pkg.callFunction({ name: "getProviders" })`), see the next guide on the npm spec packages.

::: info
A runnable version of this guide lives in the SDK repository at [`examples/functionCall`](https://github.com/caido/sdk-js/tree/main/packages/sdk-client/examples/functionCall). Function names exposed by a plugin (like `getProviders`, `createSession` for `quickssrf`) come from the plugin's own source. Look for `sdk.api.register("name", ...)` calls in the plugin's backend code or check its repository under [caido-community](https://github.com/caido-community).
:::

## Get the Plugin Handle

To call a function on an installed plugin, you first need its **package handle**. Use `client.plugin.pluginPackage()` to look up the installed plugin by its [manifest ID](./install_plugin.md#1-from-the-caido-store):

```ts
const pkg = await client.plugin.pluginPackage("quickssrf");
if (pkg === undefined) {
  throw new Error("quickssrf is not installed");
}
```

`pluginPackage()` returns `undefined` when no installed plugin matches the manifest ID, so always check the result before calling functions on it.

::: info
If you are installing the plugin in the same script, you can skip the lookup since `client.plugin.install()` returns the same handle directly.
:::

## Call a Function

Use `pkg.callFunction()` with a generic type for the return value. The function name is a string (the same name the backend used in `sdk.api.register()`), and arguments are passed as an array.

### Without Arguments

```ts
type Result<T> =
  | { kind: "Ok"; value: T }
  | { kind: "Error"; error: string };

type Provider = {
  id: string;
  name: string;
  kind: string;
  url: string;
  enabled: boolean;
};

const providers = await pkg.callFunction<Result<Provider[]>>({
  name: "getProviders",
});
```

### With Arguments

Pass positional arguments through the `arguments` array. They are JSON-serialized before being sent to the backend, so any JSON-compatible value is accepted.

```ts
type Session = {
  id: string;
  providerId: string;
  url: string;
  status: string;
};

const providerId = providers.value[0].id;

const session = await pkg.callFunction<Result<Session>>({
  name: "createSession",
  arguments: [providerId],
});
```

::: info
The return shape is defined entirely by the plugin. The `Result<T>` wrapper used above is a `quickssrf` convention, not a Caido SDK one. Other plugins return whatever shape they want, and you supply the matching TypeScript type as the generic parameter.
:::

## Multi-Backend Plugins

A package can ship more than one backend plugin. When that is the case, `callFunction()` needs to know which backend owns the function. Pass the `manifestId` of the target backend:

```ts
await pkg.callFunction({
  name: "myFunction",
  manifestId: "specific-backend",
  arguments: [],
});
```

If the package has only one backend, the `manifestId` field is optional and the SDK picks it automatically.

## Errors

`callFunction()` throws a `PluginFunctionCallError` when the backend returns an error response (for example, when the function name is not registered or the backend itself throws):

```ts
import { PluginFunctionCallError } from "@caido/sdk-client";

try {
  await pkg.callFunction({ name: "doesNotExist" });
} catch (error) {
  if (error instanceof PluginFunctionCallError) {
    console.error("Function call failed:", error.message);
  } else {
    throw error;
  }
}
```

Plugins that use a `Result`-style return value (like `quickssrf`) signal _functional_ failures through the return shape rather than throwing, so the `try/catch` above only covers transport- and runtime-level errors.

## Example

The script below looks up the installed `quickssrf` plugin, fetches its available providers, and creates a session against the first one.

### index.ts

```ts
import { Client } from "@caido/sdk-client";

type Result<T> =
  | { kind: "Ok"; value: T }
  | { kind: "Error"; error: string };

type Provider = {
  id: string;
  name: string;
  kind: string;
  url: string;
  enabled: boolean;
};

type Session = {
  id: string;
  providerId: string;
  url: string;
  status: string;
};

async function main() {
  const client = new Client({
    url: process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080",
    auth: {
      pat: process.env["CAIDO_PAT"]!,
      cache: { file: ".caido-token.json" },
    },
  });

  await client.connect();

  const pkg = await client.plugin.pluginPackage("quickssrf");
  if (pkg === undefined) {
    throw new Error("quickssrf is not installed");
  }

  const providers = await pkg.callFunction<Result<Provider[]>>({
    name: "getProviders",
  });
  if (providers.kind === "Error") {
    throw new Error(`getProviders failed: ${providers.error}`);
  }

  const firstProvider = providers.value[0];
  if (firstProvider === undefined) {
    throw new Error("No providers available");
  }

  const session = await pkg.callFunction<Result<Session>>({
    name: "createSession",
    arguments: [firstProvider.id],
  });
  if (session.kind === "Error") {
    throw new Error(`createSession failed: ${session.error}`);
  }

  console.log("Session URL:", session.value.url);
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
[caido] Loaded token from cache
Session URL: https://oast.site/abcdef1234567890
```
