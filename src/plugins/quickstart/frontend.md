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

## /packages/frontend/src/index.ts

Plugin pages are created via the `/packages/frontend/src/index.ts` file.

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

## /packages/frontend/src/views/App.vue

While the `/packages/frontend/src/index.ts` file creates the plugin page, the `/packages/frontend/src/views/App.vue` file defines the components of the page using:

- [Vue.js](https://vuejs.org/): A JavaScript framework for building user interfaces as reusable components. Each `.vue` file typically defines the page structure in a `<template>` section and the logic in a `<script>` section. When data changes, Vue updates the interface for you.

- [PrimeVue](https://primevue.org/): A component library built for Vue. It provides ready-made UI elements such as buttons, dialogs, and inputs. Caido uses the `@caido/primevue` package so these components match the look of the application.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework. You style layout and spacing with classes in the markup (for example, `flex`, `gap-4`, and `p-4`) instead of writing custom CSS. Caido's `@caido/tailwindcss` package and the `tailwindcss-primeui` bridge connect Tailwind to PrimeVue so components pick up Caido's theme.

In short: Vue provides the structure and reactivity, PrimeVue provides the UI controls, and Tailwind provides the layout and visual styling.

::: info
For more information about using PrimeVue components and styling, see [Using the Component Library](/plugins/guides/styling.md) and [UI Styling](/plugins/concepts/ui.md).
:::

The plugin template frontend component page features a `Generate random string` button. Each time this button is clicked, a string of random alphanumeric characters is generated and displayed.

<img alt="Plugin template button." src="/_images/plugin_template_button.png" center/>

```ts
<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref } from "vue";

import { useSDK } from "@/plugins/sdk";

// Retrieve the SDK instance to interact with the backend
const sdk = useSDK();

const myVar = ref("Hello World");

// Call the backend to generate a random string
const onGenerateClick = async () => {
  const result = await sdk.backend.generateRandomString(10);
  myVar.value = result;
};
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="flex flex-col gap-1">
      <Button label="Generate random string" @click="onGenerateClick" />
      <InputText :model-value="myVar" readonly />
    </div>
  </div>
</template>
```

## Rebuilding

Now, enter the following terminal command to rebuild the plugin package:

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

To learn how the frontend interacts with the backend component of a plugin, continue with [Backend Component Basics](/plugins/quickstart/backend.md).