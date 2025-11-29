# Access Static Assets

Static assets are files bundled with your plugin that can be accessed at runtime. You can load configuration files, images, templates, data files, and other resources from the assets folder.

## Getting an Asset

To get a file from the assets folder:

```ts
const asset = await sdk.assets.get("path/to/file.txt");
```

The path is relative to your plugin's assets directory.

## Converting Assets to Different Formats

Once you have an asset, you can convert it to different formats:

### Converting to String

```ts
const content = await asset.asString();
```

### Converting to JSON

```ts
const data = await asset.asJson<MyType>();
```

### Converting to ArrayBuffer

```ts
const buffer = await asset.asArrayBuffer();
```

### Converting to ReadableStream

```ts
const stream = asset.asReadableStream();
```

::: tip
Use `asReadableStream()` for large files to process them in chunks and avoid loading the entire file into memory.
:::

## Asset Path Configuration

Assets are configured in your `caido.config.ts`:

```ts
export default defineConfig({
  frontend: {
    assets: ["./assets/**/*"],
  },
});
```

::: warning
Assets are bundled with your plugin, so large files will increase the plugin size. Consider loading external resources at runtime for very large files.
:::

## Examples

### Loading Configuration

This example loads a JSON configuration file from assets and parses it into a typed TypeScript object. It demonstrates error handling and logging for configuration loading operations.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

interface PluginConfig {
  apiKey: string;
  endpoint: string;
  timeout: number;
}

const loadConfig = async (sdk: CaidoSDK): Promise<PluginConfig> => {
  const asset = await sdk.assets.get("config.json");
  const config = await asset.asJson<PluginConfig>();
  return config;
};

export const init = async (sdk: CaidoSDK) => {
  try {
    const config = await loadConfig(sdk);
    sdk.log.info("Loaded config:", config);
    // Use configuration
  } catch (error) {
    sdk.log.error("Failed to load config:", error);
  }
};
```

### Loading Multiple Assets

This example demonstrates loading multiple assets in parallel using Promise.all. It loads a JSON config file, a text template, and a data JSON file simultaneously, converting each to its appropriate format.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const loadAssets = async (sdk: CaidoSDK) => {
  const [config, template, data] = await Promise.all([
    sdk.assets.get("config.json").then((a) => a.asJson()),
    sdk.assets.get("template.txt").then((a) => a.asString()),
    sdk.assets.get("data.json").then((a) => a.asJson()),
  ]);

  return { config, template, data };
};

export const init = async (sdk: CaidoSDK) => {
  try {
    const assets = await loadAssets(sdk);
    sdk.log.info("Loaded all assets:", assets);
  } catch (error) {
    sdk.log.error("Failed to load assets:", error);
  }
};
```
