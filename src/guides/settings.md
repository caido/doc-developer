# Custom Settings Pages

The Settings SDK allows you to add custom settings pages to Caido's settings interface. This is useful for providing plugin-specific configuration options that users can access through the main settings menu.

## Adding a Settings Page

To add a custom settings page, use the `addToSlot` method with the `SettingsSlot.PluginsSection` slot:

```ts
import { SettingsSlot } from "@caido/sdk-frontend";

sdk.settings.addToSlot(SettingsSlot.PluginsSection, {
  type: "Custom",
  name: "My Plugin Settings",
  definition: MySettingsComponent,
});
```

### Settings Slot Content

The settings slot content requires:
- `type` - Must be `"Custom"`
- `name` - The display name shown in the settings sidebar
- `definition` - Your Vue component definition

## Settings Component

Your settings component is a standard Vue component that will be rendered in the settings page. You can use any Vue features and Caido SDK methods:

```vue
<script setup lang="ts">
import { ref } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

const settingValue = ref("default");

const saveSettings = () => {
  // Save settings using storage SDK
  props.sdk.storage.set({ mySetting: settingValue.value });
  props.sdk.window.showToast("Settings saved", { variant: "success" });
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-bold mb-4">My Plugin Settings</h2>
    
    <div class="mb-4">
      <label class="block mb-2">
        Setting Value:
        <input
          v-model="settingValue"
          type="text"
          class="w-full p-2 border rounded mt-1"
        />
      </label>
    </div>
    
    <button
      @click="saveSettings"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Save Settings
    </button>
  </div>
</template>
```

## Available Slots

Currently, the Settings SDK provides one slot:

- `SettingsSlot.PluginsSection` - The plugins section in the settings sidebar

## Examples

### Simple Settings Page

This example creates a basic settings page with a text input and save button:

```vue
<!-- MySettings.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

const apiKey = ref("");

onMounted(() => {
  // Load saved settings
  const saved = props.sdk.storage.get() as { apiKey?: string } | null;
  if (saved?.apiKey) {
    apiKey.value = saved.apiKey;
  }
});

const save = () => {
  props.sdk.storage.set({ apiKey: apiKey.value });
  props.sdk.window.showToast("API key saved", { variant: "success" });
};
</script>

<template>
  <div class="p-6 space-y-4">
    <h2 class="text-xl font-bold">My Plugin Configuration</h2>
    
    <div>
      <label class="block mb-2 font-medium">
        API Key:
        <input
          v-model="apiKey"
          type="password"
          placeholder="Enter your API key"
          class="w-full p-2 mt-1 border border-gray-600 rounded bg-gray-800 text-white"
        />
      </label>
    </div>
    
    <button
      @click="save"
      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
    >
      Save
    </button>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import { SettingsSlot } from "@caido/sdk-frontend";
import MySettings from "./MySettings.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.settings.addToSlot(SettingsSlot.PluginsSection, {
    type: "Custom",
    name: "My Plugin",
    definition: MySettings,
  });
};
```

### Advanced Settings with Multiple Options

This example creates a more complex settings page with multiple configuration options:

```vue
<!-- AdvancedSettings.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

interface Settings {
  enabled: boolean;
  theme: "light" | "dark" | "auto";
  timeout: number;
  notifications: boolean;
}

const settings = ref<Settings>({
  enabled: true,
  theme: "auto",
  timeout: 5000,
  notifications: true,
});

onMounted(() => {
  const saved = props.sdk.storage.get() as Settings | null;
  if (saved) {
    settings.value = { ...settings.value, ...saved };
  }
});

const save = () => {
  props.sdk.storage.set(settings.value);
  props.sdk.window.showToast("Settings saved", { variant: "success" });
};

const reset = () => {
  settings.value = {
    enabled: true,
    theme: "auto",
    timeout: 5000,
    notifications: true,
  };
  save();
};
</script>

<template>
  <div class="p-6 space-y-6">
    <h2 class="text-xl font-bold">Advanced Plugin Settings</h2>
    
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <label class="font-medium">Enable Plugin</label>
        <input
          v-model="settings.enabled"
          type="checkbox"
          class="w-4 h-4"
        />
      </div>
      
      <div>
        <label class="block mb-2 font-medium">Theme</label>
        <select
          v-model="settings.theme"
          class="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>
      
      <div>
        <label class="block mb-2 font-medium">
          Timeout (ms): {{ settings.timeout }}
        </label>
        <input
          v-model.number="settings.timeout"
          type="range"
          min="1000"
          max="30000"
          step="1000"
          class="w-full"
        />
      </div>
      
      <div class="flex items-center justify-between">
        <label class="font-medium">Enable Notifications</label>
        <input
          v-model="settings.notifications"
          type="checkbox"
          class="w-4 h-4"
        />
      </div>
    </div>
    
    <div class="flex gap-2">
      <button
        @click="save"
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Save
      </button>
      <button
        @click="reset"
        class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
      >
        Reset to Defaults
      </button>
    </div>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import { SettingsSlot } from "@caido/sdk-frontend";
import AdvancedSettings from "./AdvancedSettings.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.settings.addToSlot(SettingsSlot.PluginsSection, {
    type: "Custom",
    name: "Advanced Plugin",
    definition: AdvancedSettings,
  });
};
```

::: tip
Settings pages are a great way to provide configuration options for your plugin. Use the Storage SDK to persist settings across sessions. See the [Frontend Storage](/guides/frontend_storage.md) guide for more information.
:::

