# Configure Package

Caido packages are configured using the `caido.config.ts` file. This file is located in the root of your plugin's directory.
This file is used by the `caido-dev` CLI to build your plugin into a `plugin_package.zip` file.

If you've created a new package with `pnpm create @caido-community/plugin`, the `caido.config.ts` file will be created for you.

Here's what a typical `caido.config.ts` file looks like:

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

You can find more information about the `caido.config.ts` file in the [Config Reference](/reference/config) page.

## Updating Package Details

Most plugins will only need to update the `id`, `name`, `description`, `author`, and `version` fields.

### ID

The `id` field is a unique identifier used to identify your plugin in Caido. This must be a string that is unique across all plugins.

### Name

The `name` field is the name of your plugin. This is the name that will be displayed when a user installs your plugin.

Keep your names concise, and avoid using the term "Caido" in the name. (e.g. "Auth Tester" instead of "Caido Auth Tester")

### Description

The `description` field is a short description of your plugin. This will be displayed when a user installs your plugin.

### Author

The `author` field is an object comprised of a `name`, `email`, and `url`.

- `name` is the name of the author.
- `email` is a contact email address for the author.
- `url` is a URL that links to the author's website.

### Version

The `version` field is a string that represents the version of your plugin using [Semantic Versioning](https://semver.org/).

When creating a new release of your plugin, you should increment this version number.

## Updating Plugin Details

Packages are comprised of one or more plugins that may need to be configured differently. You can find more information about plugins in the [Plugin Architecture](/concepts/package) page.

These options usually don't need to be updated, but you can if needed.

### Frontend Plugins

For frontend plugins, `caido-dev` uses [Vite](https://vitejs.dev/) to build your plugin. This means you can specify additional Vite options in your `caido.config.ts` file.

If you created your package with `pnpm create @caido-community/plugin`, the `caido.config.ts` file will be created with a default set of Vite options. We suggest you start with these options, and then update them if needed.

### Backend Plugins

For backend plugins, `caido-dev` uses [tsup](https://tsup.egoist.dev/) to build your plugin. The `tsup` options are not currently configurable.
