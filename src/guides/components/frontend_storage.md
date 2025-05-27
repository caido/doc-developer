# Storing Frontend Data

By default, the frontend component of a plugin is stateless, meaning data will be lost between Caido sessions. However, if your plugin needs to persist data in the frontend you can utilize the storage system through `sdk.storage`.

The storage system is defined by the [StorageSDK](/reference/sdks/frontend/#sdk) interface and provides these methods:

- `set()`: Puts new data into the storage.
- `get()`: Fetches the current data from storage.
- `onChange()`: Sets up a listener that runs when the storage changes.

## User Preferences

To demonstrate its usage, let's create a frontend interface that offers light and dark theme options by clicking on the associated buttons.

<img alt="Light and dark themes." src="/_images/ui_themes.png" center/>

::: tip
To view the entire frontend script, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import "./styles/index.css";

import type { FrontendSDK } from "./types";

export const init = async (sdk: FrontendSDK) => {
  const root = document.createElement("div");
  root.style.height = "100%";
  root.style.width = "100%";
  root.id = `plugin--frontend-vanilla`;

  const container = document.createElement("div");

  const lightButton = sdk.ui.button({
    variant: "primary",
    label: "Light",
  });

  const darkButton = sdk.ui.button({
    variant: "primary",
    label: "Dark",
  });

  // Function to apply theme.
  const applyTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      root.style.backgroundColor = "#202227";
    } else {
      root.style.backgroundColor = "#D2D3D5";
    }
  };

  // Add event listeners.
  lightButton.addEventListener("click", () => {
    applyTheme("light");
  });

  darkButton.addEventListener("click", () => {
    applyTheme("dark");
  });

  // Assemble UI.
  container.appendChild(lightButton);
  container.appendChild(darkButton);
  root.appendChild(container);

  sdk.navigation.addPage("/frontend-storage-demo", {
    body: root,
  });

  sdk.sidebar.registerItem("Frontend Storage Demo", "/frontend-storage-demo");
};
```

</details>
:::

To persist the theme selection between Caido application closes and launches, we can add the following code to the file:

To save the theme choice to storage so it can be recalled, we can use `sdk.storage.set` on the `theme`. To account for the time it takes to write the data to storage, this `updateTheme` function will need to be `async`.

``` ts
  const updateTheme = async (theme: "light" | "dark") => {
    await sdk.storage.set({ theme });
  };
```

Next, we use `sdk.storage.get` to check if a theme has been saved before and apply it to when the page loads.

``` ts
  const loadSettings = () => {
    const settings = sdk.storage.get() as { theme: "light" | "dark" } | null;
    if (settings?.theme) {
      applyTheme(settings.theme);
    }
  };
```

We will also need to add the `updateTheme` function to the buttons. Now, clicking a button will both save the theme choice and change the color of the interface.

``` ts
  lightButton.addEventListener("click", () => {
    updateTheme("light");
    applyTheme("light");
  });

  darkButton.addEventListener("click", () => {
    updateTheme("dark");
    applyTheme("dark");
  });
```

By subscribing to any changes with `onChange`, we can add reactivity using the reference to disable the button of the currently selected theme.

``` ts
  sdk.storage.onChange((newSettings) => {
    const settings = newSettings as { theme: "light" | "dark" } | null;
    if (settings?.theme) {
      applyTheme(settings.theme);
      if (settings.theme === "light") {
        lightButton.setAttribute("disabled", "true");
        darkButton.removeAttribute("disabled");
      } else {
        lightButton.removeAttribute("disabled");
        darkButton.setAttribute("disabled", "true");
      }
    }
  });
```

To load saved settings when the page reloads, we call the `loadSettings` function defined earlier.

``` ts
  loadSettings();
```

::: tip
To view the entire modified frontend script, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import "./styles/index.css";

import type { FrontendSDK } from "./types";

export const init = async (sdk: FrontendSDK) => {
  const root = document.createElement("div");
  root.style.height = "100%";
  root.style.width = "100%";
  root.id = `plugin--frontend-vanilla`;

  const container = document.createElement("div");

  const lightButton = sdk.ui.button({
    variant: "primary",
    label: "Light",
  });

  const darkButton = sdk.ui.button({
    variant: "primary",
    label: "Dark",
  });


  // Function to update theme.
  const updateTheme = async (theme: "light" | "dark") => {
    await sdk.storage.set({ theme });
  };

  // Function to apply theme.
  const applyTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      root.style.backgroundColor = "#202227";
    } else {
      root.style.backgroundColor = "#D2D3D5";
    }
  };

  // Function to load settings.
  const loadSettings = () => {
    const settings = sdk.storage.get() as { theme: "light" | "dark" } | null;
    if (settings?.theme) {
      applyTheme(settings.theme);
    }
  };

  // Add event listeners.
  lightButton.addEventListener("click", () => {
    updateTheme("light");
    applyTheme("light");
  });

  darkButton.addEventListener("click", () => {
    updateTheme("dark");
    applyTheme("dark");
  });

  // Subscribe to storage changes.
  sdk.storage.onChange((newSettings) => {
    const settings = newSettings as { theme: "light" | "dark" } | null;
    if (settings?.theme) {
      applyTheme(settings.theme);
      // Update button states based on current theme
      if (settings.theme === "light") {
        lightButton.setAttribute("disabled", "true");
        darkButton.removeAttribute("disabled");
      } else {
        lightButton.removeAttribute("disabled");
        darkButton.setAttribute("disabled", "true");
      }
    }
  });

  // Assemble UI.
  container.appendChild(lightButton);
  container.appendChild(darkButton);

  // Load saved settings on init.
  loadSettings();

  root.appendChild(container);

  sdk.navigation.addPage("/frontend-storage-demo", {
    body: root,
  });

  sdk.sidebar.registerItem("Frontend Storage Demo", "/frontend-storage-demo");
};
```

</details>
:::

::: info

- Although frontend storage actually exists in the backend, it is inaccessible by the backend component. To share data with the backend component of a plugin, you will need to [create and call a custom function](/guides/components/rpc.md).

- Stored data needs to be JSON serializable.
:::
