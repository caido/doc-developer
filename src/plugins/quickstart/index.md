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

When prompted, enter a name for your plugin package (_i.e. `demo`_). This will create a new directory containing the template.

<img alt="Name prompt." src="/_images/name_prompt.png" center/>

Another prompt will ask if the plugin package will "customize the Caido UI". Entering `y` (yes) or `n` (no) will determine if the plugin has a frontend component or not.

::: warning NOTE
Enter `y` to continue with the Getting Started guide.
:::

<img alt="UI prompt." src="/_images/ui_prompt.png" center/>

Next, navigate into the template directory (_i.e. `demo`_):

```bash
cd demo
```

Now, install the dependencies:

```bash
pnpm install
```

Once the dependencies have been installed, open the template directory in your editor of choice and continue with the [Configuring a Plugin](/plugins/guides/config.md) guide.
