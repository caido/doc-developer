# Getting Started

Caido allows users to develop custom features in the form of plugins.

Conceptualize them as extensive [Workflows](https://docs.caido.io/concepts/essentials/workflows.html). While they both provide task automation - plugins offer a greater level of complexity and flexibility.

Plugins are written in JavaScript.

## Plugin Packages

As Caido utilizes a **client/server architecture** - inherently, this means plugin development consists of many parts:

- A manifest.json file
- A frontend plugin
- A backend plugin

These parts are packaged together in a single entity known as a **plugin package**.

### Manifest.json

The `manifest.json` configuration file defines the plugin package structure and also contains metadata used by the Caido installer.

Here's an example of what the `manifest.json` file should look like:

```json
{
  "id": "authmatrix",
  "name": "AuthMatrix",
  "version": "0.2.0",
  "description": "Grid-based authorization testing across multiple users and roles.",
  "author": {
    "name": "Caido Labs Inc.",
    "email": "dev@caido.io",
    "url": "https://github.com/caido-community/authmatrix"
  },
  "plugins": [
    {
      "kind": "frontend",
      "id": "authmatrix-frontend",
      "name": "Authmatrix Frontend",
      "entrypoint": "frontend/script.js",
      "style": "frontend/style.css",
      "backend": {
        "id": "authmatrix-backend"
      }
    },
    {
      "kind": "backend",
      "id": "authmatrix-backend",
      "name": "Authmatrix Backend",
      "runtime": "javascript",
      "entrypoint": "backend/script.js"
    }
  ]
}
```

::: info
For more information on the `manifest.json` file, refer to the [manifest.json reference](/reference/manifest.md).
:::

### Frontend Plugin

Frontend plugins allow you to customize the UI of the Caido application:

- Add new pages, components and elements.
- Modify the appearance, behavior and functionality of the user-interface.
- Handle user interactions, render data and communicate with the backend server via Caido's API.

::: info
You can find the full list of available frontend SDK functions in the [frontend SDK reference](/reference/sdks/frontend/index.md).
:::

### Backend Plugin

Backend plugins allow you to extend the server-side functionality of the Caido application:

- Interact with the application's data and databases.
- Perform HTTP requests to external APIs.
- Handle computationally intensive tasks.
- Respond to events that occur within Caido.

::: info
You can find the full list of available backend SDK functions in the [backend SDK reference](/reference/sdks/backend/index.md).
:::

## Creating Your First Plugin Package

::: info Requirements
Plugins are developed in JavaScript and require the following to be installed on your device:

- [Node.js](https://nodejs.org/en/) (Version 18+ or 20+)
- [pnpm](https://pnpm.io/installation)

:::

To get started with plugin development, run the following command:

```bash
pnpm create @caido-community/plugin
```

Then follow the prompts! This will create a new directory containing a template plugin package.

From inside the package directory, run the following command to install the project dependencies:

```bash
pnpm install
```

Finally, run the following command to build your plugin into a `dist/plugin_package.zip` file:

```bash
pnpm build
```

You can then install this plugin package directly from the Caido application.

## What's Next?

Now that you've created your first package, you can start building out your own frontend and backend plugins.

We highly recommend looking at existing plugins in the Community Store to get an idea of what's possible. All plugins are open-sourced and available for you to review and learn from.

There are also a few guides available on this site to help you get started.
