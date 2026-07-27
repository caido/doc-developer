# Configuring a Plugin

In the plugin folder, you will see a `caido.config.ts` file.

<img alt="Configuration file." src="/_images/config_file.png" center/>

---

<img alt="Configuration file metadata." src="/_images/config_metadata.png" center/>

## id

The value of the `id` variable is used by Caido as a plugin specific identifier. This means that each plugin's `id` must be a unique value.

Let's start with changing the value of the `id` variable from `frontend-vue` to `plugin-demo`:

```ts
const id = "plugin-demo";
```

## General Information

The `name`, `description`, `version`, and `author` attributes store information that will be displayed in Caido once the plugin is installed:

```ts
export default defineConfig({
  id, // References the plugin's unique identifier.
  name: "Frontend Vue", // The display name.
  description: "Plugin template with frontend using VueJS", // Optional description.
  version: "0.0.0", // Semantic versioning label.
  author: {
    name: "Caido Labs Inc.", // Developer name.
    email: "dev@caido.io", // Developer contact email address.
    url: "https://caido.io", // Developer website.
  },
```

---

<img alt="Displayed metadata." src="/_images/plugin_metadata_row.png" center/>

For this tutorial, change the attributes to match the following:

```ts
  name: "Plugin Demo",
  description: "Plugin demo from tutorial.",
  version: "0.0.1",
  author: {
    name: "Me",
    email: "me@example.com",
    url: "https://example.com",
  },
```

## Component Definitions

::: info
A Caido plugin can consist of either:

- A backend component
- Or, a backend component combined with a frontend component

In this tutorial, the plugin includes a frontend component because we entered `y` for the prompt _"Will your plugin package customize the Caido UI?"_:

<img alt="UI prompt." src="/_images/ui_prompt.png" center/>
:::

In the `plugins` array, the backend and frontend plugin components are defined:

```ts
  plugins: [
    {
      kind: "backend", // Component type.
      id: "backend", //  Unique identifier.
      root: "packages/backend", // Path to component source code.
    },
    {
      kind: 'frontend',
      id: "frontend",
      root: 'packages/frontend',
      // Links the components:
      backend: {
        id: "backend",
      },
```

Each component can also include a `name` attribute that stores the component's display name when the plugin's metadata details are expanded:

<img alt="Displayed metadata extended." src="/_images/plugin_metadata_components.png" center/>

Add the `name` attribute to each component and set the values to `Backend Component` and `Frontend Component` respectively:

```ts
  plugins: [
    {
      kind: "backend",
      id: "backend",
      root: "packages/backend",
      name: "Backend Component",
    },
    {
      kind: 'frontend',
      id: "frontend",
      root: 'packages/frontend',
      name: "Frontend Component",
      backend: {
        id: "backend",
      },
```

## Review

By now, your `caido.config.ts` file should match the following:

```ts
import { defineConfig } from '@caido-community/dev';
import vue from '@vitejs/plugin-vue';
import tailwindcss from "tailwindcss";
// @ts-expect-error no declared types at this time
import tailwindPrimeui from "tailwindcss-primeui";
import tailwindCaido from "@caido/tailwindcss";
import path from "path";
import prefixwrap from "postcss-prefixwrap";

const id = "plugin-demo";
export default defineConfig({
  id,
  name: "Plugin Demo",
  description: "Plugin demo from tutorial.",
  version: "0.0.1",
  author: {
    name: "Me",
    email: "me@example.com",
    url: "https://example.com",
  },
  plugins: [
    {
      kind: "backend",
      id: "backend",
      root: "packages/backend",
      name: "Backend Component",
    },
    {
      kind: 'frontend',
      id: "frontend",
      root: 'packages/frontend',
      name: "Frontend Component",
      backend: {
        id: "backend",
      },
      vite: {
        plugins: [vue()],
        build: {
          rollupOptions: {
            external: [
              '@caido/frontend-sdk', 
              "@codemirror/autocomplete", 
              "@codemirror/commands", 
              "@codemirror/language", 
              "@codemirror/lint", 
              "@codemirror/search", 
              "@codemirror/state", 
              "@codemirror/view", 
              "@lezer/common", 
              "@lezer/highlight", 
              "@lezer/lr",
              "vue",

            ]
          }
        },
        resolve: {
          alias: [
            {
              find: "@",
              replacement: path.resolve(__dirname, "packages/frontend/src"),
            },
          ],
        },
        css: {
          postcss: {
            plugins: [
              // This plugin wraps the root element in a unique ID
              // This is necessary to prevent styling conflicts between plugins
              prefixwrap(`#plugin--${id}`),

              tailwindcss({
                corePlugins: {
                  preflight: false,
                },
                content: [
                  './packages/frontend/src/**/*.{vue,ts}',
                  './node_modules/@caido/primevue/dist/primevue.mjs'
                ],
                // Check the [data-mode="dark"] attribute on the <html> element to determine the mode
                // This attribute is set in the Caido core application
                darkMode: ["selector", '[data-mode="dark"]'],
                plugins: [

                  // This plugin injects the necessary Tailwind classes for PrimeVue components
                  tailwindPrimeui,

                  // This plugin injects the necessary Tailwind classes for the Caido theme
                  tailwindCaido,
                ],
              })
            ]
          }
        }
      }
    }
  ]
});
```

## What's next?

Once the attributes have been set, continue with [Building a Plugin](/plugins/quickstart/build.md).
