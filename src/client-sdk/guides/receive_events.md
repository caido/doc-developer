# Receive Plugin Events

Plugin backends can emit events that the Client SDK lets you listen to over a streaming connection. This is useful for surfacing work as it happens (interactions arriving, scans completing, sessions changing) or for reacting to backend state from a long-running script.

This guide covers the explicit `subscribeEvent("name")` form, which works for any installed plugin without extra setup. For fully typed events (inferred payload types for known events), see the next guide on the npm spec packages.

::: info
A runnable version of this guide lives in the SDK repository at [`examples/pluginEvent`](https://github.com/caido/sdk-js/tree/main/packages/sdk-client/examples/pluginEvent). Event names emitted by a plugin (like `interaction:received` for `quickssrf`) come from the plugin's own source. Look for `sdk.api.send("name", ...)` calls in the plugin's backend code or check its repository under [caido-community](https://github.com/caido-community).
:::

## Get the Plugin Handle

To subscribe to events from an installed plugin, you first need its **package handle**. Use `client.plugin.pluginPackage()` to look up the installed plugin by its [manifest ID](./install_plugin.md#1-from-the-caido-store):

```ts
const pkg = await client.plugin.pluginPackage("quickssrf");
if (pkg === undefined) {
  throw new Error("quickssrf is not installed");
}
```

`pluginPackage()` returns `undefined` when no installed plugin matches the manifest ID, so always check the result before subscribing.

## Listen for an Event

To start listening, call `pkg.subscribeEvent(name)`. It returns an `AsyncIterable` that yields the arguments emitted by the backend each time the event fires. Iterate over it with a `for await` loop:

```ts
type Interaction = {
  protocol: string;
  remoteAddress: string;
  timestamp: string;
};

type InteractionReceivedEvent = {
  sessionId: string;
  interactions: Interaction[];
};

for await (const [event] of pkg.subscribeEvent("interaction:received")) {
  const typed = event as InteractionReceivedEvent;
  console.log(
    `Got ${typed.interactions.length} interaction(s) for session ${typed.sessionId}`,
  );
}
```

The destructuring `[event]` takes the first argument the backend passed to `sdk.api.send("interaction:received", payload)`. Since the explicit form is untyped (the SDK does not know what shape each event carries), cast or annotate the value yourself.

::: info
For events with multiple arguments, destructure them all: `for await (const [a, b, c] of pkg.subscribeEvent("name"))`. For events with no arguments, the destructured value is `undefined`.
:::

## Multi-Backend Plugins

To listen to events from a specific backend in a package that ships more than one, pass the object form of `subscribeEvent` with the target backend's `manifestId`:

```ts
for await (const [event] of pkg.subscribeEvent({
  name: "myEvent",
  manifestId: "specific-backend",
})) {
  console.log(event);
}
```

If the package has only one backend, the `manifestId` is optional and the SDK picks it automatically.

## Stop a Subscription

To stop receiving events, `break` out of the `for await` loop:

```ts
for await (const [event] of pkg.subscribeEvent("interaction:received")) {
  if (someCondition) break;
}
```

Internally, the SDK keeps a single upstream connection open while at least one listener is active and tears it down when the last one leaves.

## Examples

The script below creates a `quickssrf` session, then listens for `interaction:received` events tied to that session. Once running, trigger the printed SSRF URL externally (for example, `curl <url>`) to see events arrive.

### index.ts

```ts
import { Client } from "@caido/sdk-client";

type Result<T> =
  | { kind: "Ok"; value: T }
  | { kind: "Error"; error: string };

type Provider = {
  id: string;
  name: string;
  url: string;
};

type Session = {
  id: string;
  providerId: string;
  url: string;
};

type Interaction = {
  protocol: string;
  remoteAddress: string;
  timestamp: string;
};

type InteractionReceivedEvent = {
  sessionId: string;
  interactions: Interaction[];
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

  const session = await pkg.callFunction<Result<Session>>({
    name: "createSession",
    arguments: [providers.value[0]!.id],
  });
  if (session.kind === "Error") {
    throw new Error(`createSession failed: ${session.error}`);
  }

  console.log("Listening for interactions on", session.value.url);

  for await (const [event] of pkg.subscribeEvent("interaction:received")) {
    const typed = event as InteractionReceivedEvent;
    if (typed.sessionId !== session.value.id) continue;
    for (const interaction of typed.interactions) {
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
npx tsx ./index.ts
```

Then trigger the SSRF URL printed at the start, for example with `curl <url>`. The script prints each interaction as it arrives and keeps running until you stop it with Ctrl+C:

```txt
[caido] Loaded token from cache
Listening for interactions on https://oast.site/abcdef1234567890
Interaction received: {
  protocol: 'http',
  remoteAddress: '203.0.113.42',
  timestamp: '2026-05-08T19:00:00Z'
}
```
