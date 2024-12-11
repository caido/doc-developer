# Using the Component Library

Plugin pages provide a graphical user interface in the Caido application and can be customized.

When running the `pnpm create @caido-community/plugin` command to initialize a new plugin project, you are given the option to use the [Vue.js](https://vuejs.org/) framework.

When using this option, instead of building the plugin page in the frontend `index.ts` file, now the `App.vue` file is responsible for the plugin page's layout, state, and user interactions.

However, the initialization, configuration, SDK setup, routing, and registration are still handled by `index.ts`.

::: info
For conceptual information regarding this guide - click [here](/concepts/frontend/ui.md).
:::

## Using Components

To view all the components and their configuration options offered by the PrimeVue package - click [here](https://tailwind.primevue.org/vite/). You can also view them in the `~\node_modules\.pnpm\primevue@4.1.0_vue@X.X.XX_typescript@X.X.X_` directory of your project.

::: warning
Caido supports PrimeVue v4.1.0. If a style is not working properly, first try downgrading the `primevue` entry in the frontend `package.json` file. If this does not resolve the issue, please [let us know](https://docs.caido.io/report_bug.html)!
:::

### /packages/frontend/src/views/App.vue

By default, the plugin template includes the core PrimeVue `Button` and `TextInput` components which are made available globally via `app.use(PrimeView)` in the `index.ts` file:

``` ts
<script setup lang="ts">
// Import the Button and InputText components from the PrimeVue UI library.
import Button from "primevue/button";
import InputText from "primevue/inputtext";

// Import the SDK interface used to interact with Caido.
import { useSDK } from "@/plugins/sdk";

// Import the ref function from Vue.js to dynamically update content.
import { ref } from "vue";

// Retrieve the SDK instance to interact with the backend.
const sdk = useSDK();

// Inital placeholder text in InputText component.
const myVar = ref("Hello World");

// Call the backend to generate a random string.
const onGenerateClick = async () => {
  const result = await sdk.backend.generateRandomString(10);
  // Update placeholder text to random string.
  myVar.value = result;
};
</script>

// InputText component that displays value of myVar.
<template>
  <div class="h-full flex justify-center items-center">
    <div class="flex flex-col gap-1">
      <Button label="Generate random string" @click="onGenerateClick" />
      <InputText :model-value="myVar" readonly />
    </div>
  </div>
</template>
```

## Adding Components

If you want to add additional components, simply import them. For example, if you wanted to display [Toast](https://primevue.org/toast/) messages:

### /packages/frontend/src/views/App.vue

::: warning
In the examples below, comments are just used to highlight changes. Do not actually comment out these lines.
:::

Add the necessary imports:

``` ts
// <script setup lang="ts">
// import Button from "primevue/button";
// import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
```

Then add the hook to provide the API:

``` ts
// const sdk = useSDK();
const toast = useToast();
```

Change the `onGenerateClick` button handler function to generate a Toast message with your desired options:

``` ts
// const onGenerateClick = async () => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Button clicked!",
    life: 3000
  });
  // const result = await sdk.backend.generateRandomString(10);
  // myVar.value = result;
// };
```

Then, include the Toast component in the template:

``` ts
// <template>
  // <div class="h-full flex justify-center items-center">
    <Toast />
    // <div class="flex flex-col gap-1">
      // <Button label="Generate random string" @click="onGenerateClick" />
      // <InputText :model-value="myVar" readonly />
    // </div>
  // </div>
// </template>
```

### /packages/frontend/src/index.ts

Since Toast is not included in the core components of PrimeVue, you will also need to add to the frontend `index.ts` file:

``` ts
// import { Classic } from "@caido/primevue";
// import PrimeVue from "primevue/config";
// import { createApp } from "vue";
import ToastService from "primevue/toastservice";
```

Finally, register the `ToastService` globally:

``` ts
  // app.use(SDKPlugin, sdk);

  // Add Toast Service
  app.use(ToastService);
```

## The Result

<img alt="Adding Toast component." src="/_images/toast_component.png" center/>
