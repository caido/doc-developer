# Get Version Information

You can retrieve the current Caido version to check compatibility, enable version-specific features, or display version information in your plugin.

## Getting the Version

To get the current Caido version:

```ts
const version = sdk.runtime.version;
```

The version is returned as a string (e.g., `"1.0.0"`).

::: warning
Always test your plugin on the minimum required version to ensure compatibility. Version checks help prevent runtime errors but don't guarantee feature availability.
:::

## Examples

### Version Check

This example checks if the current Caido version meets a minimum requirement (1.2.0). It parses the version string, compares it to the minimum version, and displays a warning toast if the version is too old.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  const version = sdk.runtime.version;
  sdk.log.info(`Caido version: ${version}`);

  // Check for minimum version
  const [major, minor, patch] = version.split(".").map(Number);
  if (major < 1 || (major === 1 && minor < 2)) {
    sdk.window.showToast("This plugin requires Caido 1.2.0 or higher", {
      variant: "warning",
    });
  }
};
```

### Version Display

This example displays the current Caido version and plugin compatibility status.

```vue
<script setup lang="ts">
import { inject, computed } from "vue";

const sdk = inject<CaidoSDK>("sdk");
const version = computed(() => sdk?.runtime.version || "Unknown");
</script>

<template>
  <div class="p-4">
    <div class="p-4 bg-gray-800 rounded">
      <h3 class="text-lg font-bold mb-2">Caido Version</h3>
      <p><strong>Version:</strong> {{ version }}</p>
      <p><strong>Plugin Compatibility:</strong> ✓ Compatible</p>
    </div>
  </div>
</template>
```

::: info
For information on creating pages and setting up Vue components, see [Create a Page](/guides/page.md).
:::

::: tip
Use version checks to ensure your plugin works correctly across different Caido versions and to provide helpful error messages when requirements aren't met.
:::

::: info
Version strings follow semantic versioning (major.minor.patch). Parse the version string to compare versions programmatically.
:::
