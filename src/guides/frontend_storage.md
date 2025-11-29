# Store Frontend Data

By default, the frontend component of a plugin is stateless, meaning data will be lost between Caido sessions. However, if your plugin needs to persist data in the frontend you can utilize the storage system through `sdk.storage`.

The storage system is defined by the [StorageSDK](/reference/sdks/frontend/#sdk) interface and provides these methods:

- `set()`: Puts new data into the storage.
- `get()`: Fetches the current data from storage.
- `onChange()`: Sets up a listener that runs when the storage changes.

## User Preferences

To demonstrate its usage, let's create a frontend interface that offers light and dark theme options.

### App.vue

``` ts
<script setup lang="ts">
import Button from "primevue/button";
import { useSDK } from "@/plugins/sdk";
import { ref, onMounted, watch } from "vue";

const sdk = useSDK();

const currentTheme = ref<"light" | "dark" | null>(null);

const updateTheme = async (theme: "light" | "dark") => {
  await sdk.storage.set({ theme });
  currentTheme.value = theme;
};

const applyTheme = (theme: "light" | "dark") => {
  const root = document.getElementById('plugin--frontend-vue');
  if (root) {
    if (theme === "dark") {
      root.style.backgroundColor = "#202227";
    } else {
      root.style.backgroundColor = "#FFFFFF";
    }
  }
};

const loadSettings = () => {
  const settings = sdk.storage.get() as { theme: "light" | "dark" } | null;
  if (settings?.theme) {
    currentTheme.value = settings.theme;
    applyTheme(settings.theme);
  } else {
    currentTheme.value = "light";
    applyTheme("light");
  }
};

watch(currentTheme, (newTheme) => {
  if (newTheme) {
    applyTheme(newTheme);
  }
});

sdk.storage.onChange((newSettings) => {
  const settings = newSettings as { theme: "light" | "dark" } | null;
  if (settings?.theme) {
    currentTheme.value = settings.theme;
  }
});

onMounted(() => {
  loadSettings();
});
</script>

<template>
  <div class="h-full flex justify-center items-center" :style="{ backgroundColor: currentTheme === 'dark' ? '#202227' : '#FFFFFF' }">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <!-- Light theme button -->
        <Button 
          label="Light" 
          @click="updateTheme('light')"
          :disabled="currentTheme === 'light'"
        />
        <!-- Dark theme button -->
        <Button 
          label="Dark" 
          @click="updateTheme('dark')"
          :disabled="currentTheme === 'dark'"
        />
      </div>
    </div>
  </div>
</template>
```

### Script Breakdown

First, the `<script>` block with TypeScript support is opened and the Caido SDK is imported along with three Vue reactivity utilities:

- `ref`: Tracks value changes to automatically update the user interface.
- `onMounted`: Registers a callback function that will be executed after a component has been added to the user interface.
- `watch`: Monitors for changes to reactive components and executes a callback function when a change occurs.

``` ts
<script setup lang="ts">
import Button from "primevue/button";
import { useSDK } from "@/plugins/sdk";
import { ref, onMounted, watch } from "vue";
```

The Caido SDK is initialized so the plugin can access its functionality.

``` ts
const sdk = useSDK();
```

A variable named `currentTheme` is defined that will dynamically store the theme selection, starting with `null` to account for the first initialization.

``` ts
const currentTheme = ref<"light" | "dark" | null>(null);
```

Next, an asynchronous function named `updateTheme` is defined to save the current theme selection in storage using `sdk.storage.set()`.

``` ts
const updateTheme = async (theme: "light" | "dark") => {
  await sdk.storage.set({ theme });
  currentTheme.value = theme;
};
```

To apply the theme to the user interface, the `applyTheme` function switches the background color of the user interface.

``` ts
const applyTheme = (theme: "light" | "dark") => {
  const root = document.getElementById('plugin--frontend-vue');
  if (root) {
    if (theme === "dark") {
      root.style.backgroundColor = "#202227";
    } else {
      root.style.backgroundColor = "#FFFFFF";
    }
  }
};
```

To retrieve the saved theme setting from storage, `sdk.storage.get()` is called by the `loadSettings` function. If a theme exists in storage, it will be applied. If there is no saved theme selection, the theme will default to light.

``` ts
const loadSettings = () => {
  const settings = sdk.storage.get() as { theme: "light" | "dark" } | null;
  if (settings?.theme) {
    currentTheme.value = settings.theme;
    applyTheme(settings.theme);
  } else {
    currentTheme.value = "light";
    applyTheme("light");
  }
};
```

The `watch` utility is used to monitor for changes to the value of the `currentTheme` variable and calls the `applyTheme` function if the value changes:

``` ts
watch(currentTheme, (newTheme) => {
  if (newTheme) {
    applyTheme(newTheme);
  }
});
```

With `sdk.storage.onChange()`, if a theme change is made from other user interfaces, they will be applied to this plugin's user interface as well.

``` ts
sdk.storage.onChange((newSettings) => {
  const settings = newSettings as { theme: "light" | "dark" } | null;
  if (settings?.theme) {
    currentTheme.value = settings.theme;
  }
});
```

When the page is loaded, the `loadSettings()` function will be called.

``` ts
onMounted(() => {
  loadSettings();
});
</script>
```

A button for both themes are added to the user interface that will call the `updateTheme` function to update the saved theme in storage when clicked. If the corresponding theme is already saved, its button will be disabled.

``` vue
<template>
  <div class="h-full flex justify-center items-center" :style="{ backgroundColor: currentTheme === 'dark' ? '#202227' : '#FFFFFF' }">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <!-- Light theme button -->
        <Button 
          label="Light" 
          @click="updateTheme('light')"
          :disabled="currentTheme === 'light'"
        />
        <!-- Dark theme button -->
        <Button 
          label="Dark" 
          @click="updateTheme('dark')"
          :disabled="currentTheme === 'dark'"
        />
      </div>
    </div>
  </div>
</template>
```

::: info

- Although frontend storage actually exists in the backend, it is inaccessible by the backend component. To share data with the backend component of a plugin, you will need to [create and call a custom function](/guides/rpc.md).

- Stored data needs to be JSON serializable.
:::
