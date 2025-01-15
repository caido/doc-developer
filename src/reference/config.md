# caido.config.ts

The `caido.config.ts` file is used to configure your package.
It will used to generate the [`manifest.json`](./manifest.md) automatically.

```ts
import { defineConfig } from "@caido-community/dev";

export default defineConfig({
  id: "my-plugin",
  name: "My Plugin",
  description: "A plugin for Caido",
  version: "0.0.0",
  author: {
    name: "Caido Labs Inc.",
    email: "dev@caido.io",
    url: "https://caido.io"
  },
  plugins: [
    {
      kind: "frontend",
      id: "my-frontend",
      name: "My Frontend",
      root: "packages/my-frontend",
      backend: {
        id: "my-backend"
      }
    },
    {
      kind: "backend",
      id: "my-backend",
      name: "My Backend",
      root: "packages/my-backend",
    }
  ]
});
```

## Global Options

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| id | `string` | Yes | Must be unique and must only consist of lowercase letters, numbers, hyphens and underscores (the order of which must satisfy the regex: `^[a-z]+(?:[_-][a-z0-9]+)*$`). |
| name | `string` | Yes | The name of your plugin. This is the name that will be displayed when a user installs your plugin. |
| description | `string` | Yes | The description of your plugin. This is the description that will be displayed when a user installs your plugin. |
| version | `string` | Yes | Represents the version of your plugin using [Semantic Versioning](https://semver.org/). |

## Author Options

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| name | `string` | Yes | The name of the author of your plugin. |
| email | `string` | No | The email of the author of your plugin. |
| url | `string` | No | The URL of the author of your plugin. |

## Frontend Plugin Options

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| kind | `"frontend"` | Yes | The kind of plugin. |
| id | `string` | Yes | The id of the plugin. |
| name | `string` | No | The name of the plugin. Defaults to the id. |
| root | `string` | Yes | The root directory of the frontend plugin. (e.g. `packages/my-frontend`) |
| backend.id | `string` | Yes | The id of the backend plugin that this frontend plugin is associated with. |
| vite | [`ViteConfig`](https://vite.dev/config/) | No | Additional Vite configuration for the frontend plugin. |

## Backend Plugin Options

| Option | Type | Required | Description |
| --- | --- | --- | --- |
| kind | `"backend"` | Yes | The kind of plugin. |
| id | `string` | Yes | The id of the plugin. |
| name | `string` | No | The name of the plugin. Defaults to the id. |
| root | `string` | Yes | The root directory of the backend plugin. (e.g. `packages/my-backend`) |
