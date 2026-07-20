# Building a Plugin

To build the plugin files into an installable package, enter the following terminal command:

```bash
pnpm build
```

The output will resemble:

<img alt="Build output." src="/_images/plugin_build.png" center/>

Once the plugin is built, a `plugin_package.zip` file will be created in the `/dist` directory.

<img alt="The plugin_package.zip file." src="/_images/plugin_package_file.png" center/>

In Caido, navigate to the **Plugins** interface and click on the `Install Package` button.

<img alt="Plugins interface." src="/_images/plugins_interface.png" center/>

Select the `/demo/dist/plugin_package.zip` file to install the plugin.

<img alt="Selecting the plugin_package.zip file." src="/_images/plugin_package_file_select.png" center/>

A new row will be added to list of installed plugins in the table of the **Installed** tab.

<img alt="Installed plugins list." src="/_images/installed_plugins.png" center/>

The plugin will also appear in the **Plugins** section of the side navigation menu.

<img alt="Installed plugins side navigation menu list." src="/_images/installed_plugin.png" center/>

## What's next?

You may have noticed that even though the plugin's display name was set to `Demo Plugin` in the `/demo/caido.config.ts` file, it is displayed as **</> My Plugin** in the side navigation menu.

Continue with [Frontend Component Basics](/plugins/quickstart/frontend.md).