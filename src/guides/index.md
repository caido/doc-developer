# Getting Started

Caido allows users to develop custom features in the form of plugins.

Plugin development is done in JavaScript and consists of many parts:

- A `caido.config.ts`/`manifest.json` file
- A frontend plugin
- A backend plugin

These parts are packaged together in a single entity known as a **plugin package**.

For more information on the structure of a plugin package, see [Plugin Architecture](/concepts/essentials/package.md).

<VideoContainer url="https://komododecks.com/embed/recordings/5twR5WEktb0IADgKYp5z?onlyRecording=1" />

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

## Hot Reload

Instead of uninstalling, rebuilding, and installing your plugin to view the changes you make during development, Caido offers the [Devtools](https://github.com/caido-community/devtools) plugin that will auto-update the plugin whenever code changes are detected.

To use the Devtools plugin:

1. First navigate to the [Plugins](https://docs.caido.io/guides/plugins.html) interface, select Community Store, and click `+ Install`.

2. Next, run the following command from the root directory of the plugin to both build and watch for file changes:

``` bash
pnpm watch
```

<img alt="Output of pnpm watch command." src="/_images/pnpm_watch.png" center/>

3. Then, input the development server URL in the Devtools plugin and click the `Connect` button.

<img alt="Development server URL input." src="/_images/pnpm_watch_server.png" center/>

## What's next?

Now that you've created your first package, you can start building out your own frontend and backend plugins.

We highly recommend looking at existing plugins in the [Community Store](https://github.com/caido-community) to get an idea of what's possible. All plugins are open-sourced and available for you to review and learn from.

There are also a few guides available on this site to help you get started.

::: tip
[Learn how to leverage AI tools to build Caido plugins.](./vibe_coding.md)
:::
