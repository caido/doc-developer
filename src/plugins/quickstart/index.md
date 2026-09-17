# Creating Your First Plugin

In addition to the multitude of official/community developed plugins that are available for installation, you can also **create your own plugins**.

::: info REQUIREMENTS
Plugin code is written in JavaScript and development requires:

- [Node.js](https://nodejs.org/en/) (Version 18+ or 20+)
- [pnpm](https://pnpm.io/installation)
:::

## Downloading the Plugin Template

To get started, download the plugin template with the following terminal command:

```bash
pnpm create @caido-community/plugin
```

A prompt will ask: "What is the name of your plugin package?" 

Enter `demo` as the name of your plugin package. This will create a new folder containing the plugin's files.

<img alt="Name prompt." src="/_images/name_prompt.png" center/>

Another prompt will ask: "Will your plugin package customize the Caido UI?"

Enter `y`  (yes) to continue.

<img alt="UI prompt." src="/_images/ui_prompt.png" center/>

Next, navigate into the plugin folder:

```bash
cd demo
```

Now, install the dependencies:

```bash
pnpm install
```

## What's next?

Once the dependencies have been installed, open the `demo` folder in a editor of your choice and continue with the [Configuring a Plugin](/plugins/guides/config.md) guide.
