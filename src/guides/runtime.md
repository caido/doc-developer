# Getting Caido Version Information

You can retrieve the current Caido version to check compatibility, enable version-specific features, or display version information in your plugin.

## Getting the Version

To get the current Caido version:

```ts
const version = sdk.runtime.version;
```

The version is returned as a string (e.g., `"1.0.0"`).

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

This example creates a page that displays the current Caido version and plugin compatibility status. It shows the version information in a formatted card with styling.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  const versionInfo = document.createElement("div");
  versionInfo.style.padding = "16px";
  versionInfo.style.backgroundColor = "#f5f5f5";
  versionInfo.style.borderRadius = "4px";

  const version = sdk.runtime.version;
  versionInfo.innerHTML = `
    <h3>Caido Version</h3>
    <p><strong>Version:</strong> ${version}</p>
    <p><strong>Plugin Compatibility:</strong> ✓ Compatible</p>
  `;

  container.appendChild(versionInfo);

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/version-info", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

### Feature Detection

This example implements a feature availability checker that determines if specific features are available based on the Caido version. It checks version requirements for features like "advanced-filters" and "ai-integration" and enables or disables features accordingly.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const checkFeatureAvailability = (sdk: CaidoSDK, feature: string): boolean => {
  const version = sdk.runtime.version;
  const [major, minor] = version.split(".").map(Number);

  // Feature availability based on version
  const features: Record<string, { minMajor: number; minMinor: number }> = {
    "advanced-filters": { minMajor: 1, minMinor: 3 },
    "ai-integration": { minMajor: 1, minMinor: 5 },
  };

  const requirement = features[feature];
  if (!requirement) {
    return true; // Unknown feature, assume available
  }

  return (
    major > requirement.minMajor ||
    (major === requirement.minMajor && minor >= requirement.minMinor)
  );
};

export const init = (sdk: CaidoSDK) => {
  if (checkFeatureAvailability(sdk, "advanced-filters")) {
    sdk.log.info("Advanced filters are available");
    // Enable advanced filter features
  } else {
    sdk.log.warn("Advanced filters require Caido 1.3.0 or higher");
    // Use fallback features
  }
};
```

### Compatibility Check

This example performs a comprehensive version compatibility check with a custom version comparison function. If the version is incompatible, it displays an error toast and prevents plugin initialization, otherwise it logs successful initialization.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const MIN_VERSION = "1.2.0";

const compareVersions = (v1: string, v2: string): number => {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;

    if (part1 < part2) return -1;
    if (part1 > part2) return 1;
  }

  return 0;
};

export const init = (sdk: CaidoSDK) => {
  const version = sdk.runtime.version;

  if (compareVersions(version, MIN_VERSION) < 0) {
    sdk.window.showToast(
      `This plugin requires Caido ${MIN_VERSION} or higher. Current version: ${version}`,
      { variant: "error", duration: 5000 }
    );
    sdk.log.error(`Version mismatch: ${version} < ${MIN_VERSION}`);
    return;
  }

  sdk.log.info(`Plugin initialized on Caido ${version}`);
};
```

::: tip
Use version checks to ensure your plugin works correctly across different Caido versions and to provide helpful error messages when requirements aren't met.
:::

::: info
Version strings follow semantic versioning (major.minor.patch). Parse the version string to compare versions programmatically.
:::

::: warning
Always test your plugin on the minimum required version to ensure compatibility. Version checks help prevent runtime errors but don't guarantee feature availability.
:::
