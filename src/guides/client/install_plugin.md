# Install a Plugin

The Client SDK can install plugin packages on your Caido instance programmatically. This is useful for scripting plugin deployment, bootstrapping CI/CD environments, or pre-configuring instances before handing them to other users.

The `client.plugin.install()` method accepts two source shapes:

1. **Manifest ID** to install a plugin published in the [Caido community store](https://github.com/caido/store).
2. **Package file** to install a plugin from a local `.zip` archive.

::: info
Both methods enable the installed plugins automatically. No separate enable step is required.
:::

## 1. From the Caido Store

To install a plugin from the store, you need its **manifest ID**. This is the `id` field declared in the plugin's `manifest.json` file, and it is what uniquely identifies the plugin in the store. You can find it in the [store manifest](https://github.com/caido/store/blob/main/plugin_packages.json) or in the plugin's repository under [caido-community](https://github.com/caido-community).

### index.ts

```ts
import { Client } from "@caido/sdk-client";

async function main() {
  const client = new Client({
    url: "http://localhost:8080",
    auth: { pat: process.env["CAIDO_PAT"]! },
  });

  await client.connect();

  const pkg = await client.plugin.install({ manifestId: "scanner" });

  console.log("Installed:", pkg.manifestId);
}

main();
```

## 2. From a Local Package File

To install a plugin from a local archive, you need its **plugin package**. This is a signed `.zip` file attached to each [plugin release](/guides/repository.md#5-create-a-release) on GitHub. Download the archive, load it into a `File` object, then pass it to `install()`.

### index.ts

```ts
import { readFileSync } from "node:fs";

import { Client } from "@caido/sdk-client";

async function main() {
  const client = new Client({
    url: "http://localhost:8080",
    auth: { pat: process.env["CAIDO_PAT"]! },
  });

  await client.connect();

  const buffer = readFileSync("./plugin_package.zip");
  const file = new File([new Uint8Array(buffer)], "plugin_package.zip", {
    type: "application/zip",
  });

  const pkg = await client.plugin.install({ file });

  console.log("Installed:", pkg.manifestId);
}

main();
```

## Re-installing an Existing Plugin

To re-install a plugin that is already installed, you need to bypass the version check that `install()` performs by default. Without it, the call rejects with an `AlreadyInstalled` error whenever the new version is not greater than the installed version. Pass `force: true` to overwrite the installed package regardless of version:

```ts
const pkg = await client.plugin.install({
  manifestId: "scanner",
  force: true,
});
```

## The Returned Package Handle

When `install()` succeeds, it returns a `PluginPackageHandle` that describes the installed package and every plugin inside it. A single package can ship a backend plugin, a frontend plugin, and a workflow plugin, each with its own ID and `enabled` flag.

```txt
{
  id: "068a80a3-c1ab-4116-8b89-e7ee64be4534",
  manifestId: "scanner",
  plugins: [
    { kind: "PluginBackend",  manifestId: "backend",  enabled: true },
    { kind: "PluginFrontend", manifestId: "frontend", enabled: true }
  ]
}
```

The handle also exposes `callFunction()` and `subscribeEvent()` for interacting with a backend plugin's exported functions and events. Those are covered in the next guides.

## Example

The script below bootstraps a Caido instance by installing several plugins from the store. Plugins that are already installed at the same or newer version are skipped, and the failure is reported without aborting the rest of the run.

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

  const manifestIds = ["scanner", "quickssrf", "autorize"];

  for (const manifestId of manifestIds) {
    try {
      const pkg = await client.plugin.install({ manifestId });
      console.log(`Installed ${pkg.manifestId} (${pkg.plugins.length} plugins)`);
    } catch (error) {
      console.error(`Failed to install ${manifestId}:`, error);
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

A successful run prints:

```txt
[caido] Loaded token from cache
Installed scanner (2 plugins)
Installed quickssrf (2 plugins)
Installed autorize (2 plugins)
```
