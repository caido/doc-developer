# Getting Started

Caido allows users to develop custom features in the form of plugins.

Plugin development is done in JavaScript and consists of many parts:

- A `manifest.json` file
- A frontend plugin
- A backend plugin

These parts are packaged together in a single entity known as a **plugin package**.

For more information on the structure of a plugin package, see [Plugin Architecture](/concepts/essentials/package.md).

## Creating a Plugin Package

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
