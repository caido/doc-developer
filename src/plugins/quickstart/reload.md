# Hot Reload

Even for simple changes such as updating a plugin's metadata, you will need to rebuild, uninstall, and reinstall to update changes in Caido. This can become repetitive.

Instead of uninstalling, rebuilding, and installing your plugin to view the changes you make during development, Caido offers the [Devtools](https://github.com/caido-community/devtools) plugin that will auto-update the plugin whenever code changes are detected.

To use the Devtools plugin:

1. First navigate to the [Plugins](https://docs.caido.io/app/quickstart/plugins) interface, select Community Store, and click `+ Install`.

2. Next, run the following command from the root directory of the plugin to both build and watch for file changes:

``` bash
pnpm watch
```

<img alt="Output of pnpm watch command." src="/_images/pnpm_watch.png" center/>

3. Then, input the development server URL in the Devtools plugin and click the `Connect` button.

<img alt="Development server URL input." src="/_images/pnpm_watch_server.png" center/>
