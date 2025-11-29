# Create a Page

Plugin pages provide a graphical user interface in the Caido application. Pages are created using Vue.js components with PrimeVue and Tailwind CSS for styling.

::: info
Vue.js is the standard approach for creating plugin pages in Caido. When you initialize a plugin using `pnpm create @caido-community/plugin`, you can choose the Vue.js template option. This guide shows how to create pages using Vue components. For more information about using PrimeVue components and styling, see [Using the Component Library](/guides/styling.md).
:::

## Creating Pages and Navigating

Used to create pages in the application and navigate to them.

### Adding a Page

Pages are created by setting up a Vue application and mounting it to a root element, which is then passed to `sdk.navigation.addPage()`. The Vue app handles the page's layout, state, and user interactions.

```ts
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import App from "./views/App.vue";

export const init = (sdk: CaidoSDK) => {
  const app = createApp(App);
  
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  app.mount(root);

  sdk.navigation.addPage("/my-plugin-page", {
    body: root,
  });
};
```

This creates a page where the contents are defined in your `App.vue` component. The Vue app is mounted to a root `div` element, which is then passed as the `body` property to `addPage`.

The `topbar` property is optional and appears to the right of the Caido logo in the top-left corner.

::: warning
The inclusion of a topbar will remove the Browser button, >\_Commands button, Forwarding/Queuing button, Project Dropdown Menu and Account Menu from the top-right corner of the Caido UI in your plugin page.
:::

### Navigating to a Page

```ts
sdk.navigation.goTo("/my-plugin-page");
```

## Adding Sidebar Items

Used to add an entry to the left-hand navigation menu in the Caido user-interface to navigate between pages.

```ts
sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
  icon: "fas fa-rocket",
});
```

The `icon` property is optional and adds a [FontAwesome](https://fontawesome.com/icons) icon at the leading side of the button.

::: info

- The `group` property is optional and dictates which category the entry will be under in the left-hand side menu.
- The `isExternal` property is optional and takes a boolean value of _true_ if the path points to an external URL.
  :::

## Building UI Components with PrimeVue

UI components are built using PrimeVue components styled with Tailwind CSS. PrimeVue provides a comprehensive set of components that match Caido's design system.

### Using PrimeVue Components

Import and use PrimeVue components directly in your Vue components. For example, to create a button:

```vue
<script setup lang="ts">
import Button from "primevue/button";
</script>

<template>
  <Button label="Delete" icon="fas fa-trash-can" severity="danger" size="small" />
</template>
```

PrimeVue components support various props for customization:

- `label` - The button text
- `icon` - FontAwesome icon class
- `severity` - Button style (`primary`, `secondary`, `success`, `info`, `warning`, `danger`)
- `size` - Button size (`small`, `medium`, `large`)

### Creating Layouts with Tailwind CSS

Use Tailwind CSS utility classes to create layouts. For example, to create a card-like layout:

```vue
<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-4 border-b border-gray-700">
      <h1 class="text-xl font-bold">Hello world!</h1>
      <p class="text-gray-400">Lorem ipsum.</p>
    </div>
    <div class="flex-1 p-4">
      <p>Paragraph.</p>
    </div>
    <div class="p-4 border-t border-gray-700">
      <p>Footer text.</p>
    </div>
  </div>
</template>
```

::: tip
For a complete example of creating a page with Vue components, see the example below. This shows how to set up a Vue app in `index.ts` and create the page layout in `App.vue`:

```ts
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

import App from "./views/App.vue";

export type CaidoSDK = Caido<API>;

export const init = (sdk: CaidoSDK) => {
  const app = createApp(App);
  
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  app.mount(root);

  sdk.navigation.addPage("/my-plugin-page", {
    body: root,
  });

  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

The `App.vue` component defines the page layout:

```vue
<script setup lang="ts">
import Button from "primevue/button";
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-4 border-b border-gray-700">
      <h1 class="text-xl font-bold">Hello world!</h1>
      <p class="text-gray-400">Lorem ipsum.</p>
    </div>
    <div class="flex-1 p-4">
      <p>Paragraph.</p>
    </div>
    <div class="p-4 border-t border-gray-700">
      <p>Footer text.</p>
    </div>
  </div>
</template>
```

The `init` function creates the Vue app, mounts it to a root element, and registers the page with `addPage`. The sidebar item is registered to make the page accessible from the navigation menu.
:::

<img alt="Add page SKD." src="/_images/add_page_sdk.png" center/>

## Interacting with Windows and Editors

Used to interact with text within the application environment, allowing text selection, replacement, read permission designations, focusing and editor related messaging.

### Interacting with Text Within Editors

```ts
let currentSelection = sdk.window.getActiveEditor()?.getSelectedText();
```

This takes the value of the current highlight-selected text and stores it in a variable.

```ts
sdk.window
  .getActiveEditor()
  ?.replaceSelectedText("Text that will replace the selection.");
```

This takes the value of the current highlight-selected text and replaces it with the arguement value.

### Displaying a Toast Message

```ts
sdk.window.showToast("Message to display.", {
  variant: "info",
  duration: 3000,
});
```

This displays a banner containing the specified message.

All message properties are optional and include:

- `variant` - Specifies the message type and can have a value of `"success"`, `"error"`, `"warning"` or `"info"`.
- `duration` - Specifies the amount of time a message will be displayed in milliseconds.

## Examples

### Basic Page with Button

This example creates a simple page with a button that displays a toast message when clicked.

```vue
<script setup lang="ts">
import Button from "primevue/button";
import { inject } from "vue";

const sdk = inject<CaidoSDK>("sdk");

const handleClick = () => {
  sdk?.window.showToast("Message to display.", {
    variant: "info",
    duration: 3000,
  });
};
</script>

<template>
  <div class="h-full flex flex-col p-4">
    <div class="mb-4">
      <h1 class="text-xl font-bold mb-2">Hello world!</h1>
      <p class="text-gray-400">Lorem ipsum.</p>
    </div>
    <div class="flex-1">
      <p>Paragraph.</p>
    </div>
    <div class="mt-4">
      <Button label="Message Button" @click="handleClick" />
    </div>
  </div>
</template>
```

The corresponding `index.ts` file:

```ts
import { Classic } from "@caido/primevue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

import App from "./views/App.vue";

export type CaidoSDK = Caido<API>;

export const init = (sdk: CaidoSDK) => {
  const app = createApp(App);
  
  app.provide("sdk", sdk);
  
  app.use(PrimeVue, {
    unstyled: true,
    pt: Classic,
  });

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  app.mount(root);

  sdk.navigation.addPage("/my-plugin-page", {
    body: root,
  });

  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

<img alt="Toast messages SKD." src="/_images/toast_message_sdk.png" center/>
