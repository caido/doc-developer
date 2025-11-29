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

## Asset Path Configuration

Assets are configured in your `caido.config.ts`:

```ts
export default defineConfig({
  frontend: {
    assets: ["./assets/**/*"],
  },
});
```

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

### Loading Text Templates

This example loads a text template file from the assets directory and displays it in a page. It handles loading errors gracefully by showing an error message if the template file cannot be found or loaded.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const loadTemplate = async (sdk: CaidoSDK, templateName: string): Promise<string> => {
  const asset = await sdk.assets.get(`templates/${templateName}.txt`);
  return await asset.asString();
};

const createPage = async (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";

  try {
    const template = await loadTemplate(sdk, "welcome");
    const content = document.createElement("div");
    content.textContent = template;
    container.appendChild(content);
  } catch (error) {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = `Failed to load template: ${error}`;
    errorMsg.style.color = "red";
    container.appendChild(errorMsg);
  }

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/template-viewer", {
    body: card,
  });
};

export const init = async (sdk: CaidoSDK) => {
  await createPage(sdk);
};
```

### Processing Large Files

This example demonstrates how to process large asset files efficiently using streams. It reads the file in chunks, processes them incrementally, and logs progress every 100 chunks to avoid loading the entire file into memory at once.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const processLargeFile = async (sdk: CaidoSDK, filename: string) => {
  const asset = await sdk.assets.get(filename);
  const stream = asset.asReadableStream();
  const reader = stream.getReader();
  const decoder = new TextDecoder();

  let buffer = "";
  let chunkCount = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunkCount++;
    buffer += decoder.decode(value, { stream: true });

    // Process chunks as they arrive
    if (chunkCount % 100 === 0) {
      sdk.log.info(`Processed ${chunkCount} chunks`);
    }
  }

  sdk.log.info(`Finished processing. Total chunks: ${chunkCount}`);
  return buffer;
};

export const init = async (sdk: CaidoSDK) => {
  // Process large file in chunks
  await processLargeFile(sdk, "large-data.txt");
};
```

### Loading Binary Data

This example loads a binary image file from assets, converts it to a Blob, creates an object URL, and displays it in an image element. This demonstrates how to work with binary assets like images.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const loadImage = async (sdk: CaidoSDK, imagePath: string): Promise<ArrayBuffer> => {
  const asset = await sdk.assets.get(imagePath);
  return await asset.asArrayBuffer();
};

const createPage = async (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";

  try {
    const imageBuffer = await loadImage(sdk, "images/logo.png");
    const blob = new Blob([imageBuffer], { type: "image/png" });
    const url = URL.createObjectURL(blob);

    const img = document.createElement("img");
    img.src = url;
    img.style.maxWidth = "100%";
    container.appendChild(img);
  } catch (error) {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = `Failed to load image: ${error}`;
    errorMsg.style.color = "red";
    container.appendChild(errorMsg);
  }

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/image-viewer", {
    body: card,
  });
};

export const init = async (sdk: CaidoSDK) => {
  await createPage(sdk);
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

::: tip
Use `asReadableStream()` for large files to process them in chunks and avoid loading the entire file into memory.
:::

::: info
Asset paths are relative to your plugin's assets directory. Use glob patterns in your config to include multiple files.
:::

::: warning
Assets are bundled with your plugin, so large files will increase the plugin size. Consider loading external resources at runtime for very large files.
:::
