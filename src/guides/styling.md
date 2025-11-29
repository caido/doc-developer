# Use the Component Library

Caido plugins use [PrimeVue](https://tailwind.primevue.org/) as the component library, with custom styling to match the core application’s look and feel.

You can explore our **UI Kit** at [ui-kit.caido.io](https://ui-kit.caido.io), which showcases the available styled components, their usage examples, and source code snippets.  

This guide covers how to integrate these components to ensure a seamless user experience.

## Starting from the VueJS Template

When running the `pnpm create @caido-community/plugin` command to initialize a new plugin project, you are given the option to use the [Vue.js](https://vuejs.org/) framework.

When using this option, instead of building the plugin page in the frontend `index.ts` file, now the `App.vue` file is responsible for the plugin page's layout, state, and user interactions.

However, the initialization, configuration, SDK setup, routing, and registration are still handled by `index.ts`.

::: info
[Learn about the concepts behind this.](/concepts/ui.md)
:::

## Adding the Toast Component

By default, the plugin template includes the core PrimeVue `Button` and `TextInput` components which are made available globally via `app.use(PrimeView)` in the `index.ts` file.

::: tip
All of the components and configuration options offered by the PrimeVue package can be viewed by visiting their [official documentation](https://tailwind.primevue.org/vite/). You can also view them in the `~\node_modules\.pnpm\primevue@4.1.0_vue@X.X.XX_typescript@X.X.X_` directory of your project.
:::

::: warning
Caido supports PrimeVue v4.1.0. If a style is not working properly, first try downgrading the `primevue` entry in the frontend `package.json` file. If this does not resolve the issue, please [let us know](https://docs.caido.io/report_bug.html)!
:::

If you want to add additional components, simply import them. For example, if you wanted to display [Toast](https://primevue.org/toast/) messages:

### /packages/frontend/src/views/App.vue

``` ts
<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
// Import both Toast and its hook function.
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

import { ref } from "vue";

// Add the hook to provide the API.
const toast = useToast();

const counter = ref(0);

const onIncrementClick = () => {
  // Configure the options for the Toast message.
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Counter incremented!",
    life: 3000
  });
  counter.value++;
};
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <Toast /> // Add the component.
    <div class="flex flex-col gap-1">
      <Button label="Increment counter" @click="onIncrementClick" />
      <InputText :model-value="counter" readonly />
    </div>
  </div>
</template>
```

### /packages/frontend/src/index.ts

Since Toast is not included in the core components of PrimeVue, you will also need to add to the frontend `index.ts` file:

``` ts
import ToastService from "primevue/toastservice";
```

Finally, register the `ToastService` globally:

``` ts
app.use(ToastService);
```

## The Result

<img alt="Adding Toast component." src="/_images/toast_messages.png" center/>
