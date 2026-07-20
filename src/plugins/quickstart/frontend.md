# Frontend Component Basics

As mentioned, in this tutorial, the plugin includes a frontend component because we entered `y` for the prompt _"Will your plugin package customize the Caido UI?"_:

<img alt="UI prompt." src="/_images/ui_prompt.png" center/>

The frontend component gives the plugin a user interface in Caido.

<img alt="Plugin user interface." src="/_images/installed_plugin.png" center/>

## Pages

Each user interface in Caido is referred to as a "page".

::: tip
Think of the Caido application as a browser window with multiple open tabs for different web pages. But instead of the tabs being listed across the top of the window, they are listed in the side navigation menu.
:::

To demonstrate this concept, open Caido in a browser window by navigating to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) (_or the custom listening address you have configured_).

As you select different interfaces, view the changes to the URL in the browser's address bar. For example, selecting the **Intercept** interface presents the [http://127.0.0.1:8080/#/intercept](http://127.0.0.1:8080/#/intercept) page.

<img alt="Intercept interface in the browser." src="/_images/intercept_page.png" center/>

For plugins, the display name in the side navigation menu and URL page is specified in the `/packages/frontend/src/index.ts` file.

The `sdk.navigation.addPage()` function takes a page name as a parameter and adds the page to Caido:

```ts
  sdk.navigation.addPage("/my-plugin", {
    body: root,
  });
```

The `sdk.sidebar.registerItem()` function takes a display name as a parameter and links it to the page name:

```ts
  sdk.sidebar.registerItem("My Plugin", "/my-plugin");
```

Open the `/demo/packages/frontend/src/index.ts` file and change the parameter values to match the following:

```ts
  sdk.navigation.addPage("/plugin-demo", {
    body: root,
  });

  // Add a sidebar item
  sdk.sidebar.registerItem("Plugin Demo", "/plugin-demo");
```

Then, enter the following terminal command to rebuild the plugin package:

```bash
pnpm build
```

Be aware that if you try and install the plugin, since the `id` matches the previous installation, an error message will be displayed.

<img alt="Error message." src="/_images/plugin_installed_error.png" center/>

You must first navigate to the **Installed** tab of the **Plugins** interface **click** on the `Uninstall` button of the **Plugin Demo** row, and **click** the `Uninstall` button in the confirmation prompt.

<img alt="Uninstall button." src="/_images/plugin_uninstall.png" center/>

---

<img alt="Uninstall confirmation button." src="/_images/confirm_uninstall.png" center/>

Once the plugin is uninstalled, **click** on the `Install Package` button and select the latest `/demo/dist/plugin_package.zip` file to install the updated plugin.

<img alt="Install Package button." src="/_images/install_package_button.png" center/>

---

<img alt="Selecting the plugin_package.zip file." src="/_images/plugin_package_file_select.png" center/>

Once the plugin is installed, navigate to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser window. The display name for the plugin in the side navigation menu will now be **</> Plugin Demo** and the URL will be [http://127.0.0.1:8080/#/plugin-demo](http://127.0.0.1:8080/#/plugin-demo).

<img alt="Updated plugin display name and page." src="/_images/updated_plugin_page.png" center/>

## What's next?