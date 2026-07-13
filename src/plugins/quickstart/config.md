# Configuring a Plugin

In the plugin template directory, you will see a `caido.config.ts` file.

<img alt="Configuration file." src="/_images/config_file.png" center/>

This file contains multiple metadata fields for information about the plugin that will be displayed in Caido.

<img alt="Displayed metadata." src="/_images/plugin_metadata.png" center/>

```js
const id = "frontend-vue";
export default defineConfig({
  id, // A global, unique identifier.
  name: "Frontend Vue", // The display name.
  description: "Plugin template with frontend using VueJS", // Optional description.
  version: "0.0.0", // Semantic versioning label.
  author: {
    name: "Caido Labs Inc.", // Developer name.
    email: "dev@caido.io", // Developer contact email address.
    url: "https://caido.io", // Developer website.
  },
  plugins: [
    {
      kind: "backend",
      id: "backend",
      root: "packages/backend",
      name: "Backend Component" // Optional display name.
    },
    {
      kind: 'frontend',
      id: "frontend",
      root: 'packages/frontend',
      name: "Frontend Component" // Optional display name.
      backend: {
        id: "backend",
      },
```

::: warning
Plugins with the same `id` will overwrite each other upon installation.
:::

Once the metadata fields have been set, continue with [Building a Plugin](/plugins/quickstart/build.md).
