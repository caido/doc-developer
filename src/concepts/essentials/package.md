# Plugin Architecture

As Caido utilizes a **client/server architecture** - inherently, this means plugin development consists of many parts:

- A manifest.json file
- A frontend plugin
- A backend plugin

You can conceptualize the difference between these parts in the context of operating a car.

The frontend includes all the buttons, dials, pedals, and other controls available to you as the driver. Some components, such as sun visors and the rear-view mirror, are purely frontend. However, most frontend components communicate with the "under-the-hood" backend. This relationship is what allows actions like pressing the gas pedal to accelerate the engine - or, in the context of Caido; clicking a button to send a request.

The manifest.json file acts as the blueprint of the car, defining how all the components fit together.

These parts are packaged together in a single entity known as a **plugin package**.

### manifest.json

The `manifest.json` configuration file defines the plugin package structure and also contains metadata used by the Caido installer.

Here's an example of what the `manifest.json` file should look like:

```json
{
  "id": "authmatrix",
  "name": "AuthMatrix",
  "version": "0.2.0",
  "description": "Grid-based authorization testing across multiple users and roles.",
  "author": {
    "name": "Caido Labs Inc.",
    "email": "dev@caido.io",
    "url": "https://github.com/caido-community/authmatrix"
  },
  "plugins": [
    {
      "kind": "frontend",
      "id": "authmatrix-frontend",
      "name": "Authmatrix Frontend",
      "entrypoint": "frontend/script.js",
      "style": "frontend/style.css",
      "backend": {
        "id": "authmatrix-backend"
      }
    },
    {
      "kind": "backend",
      "id": "authmatrix-backend",
      "name": "Authmatrix Backend",
      "runtime": "javascript",
      "entrypoint": "backend/script.js"
    }
  ]
}
```

::: info
For more information on the `manifest.json` file, refer to the [manifest.json reference](/reference/manifest.md).
:::

### Frontend Plugin

A "_page_" in Caido simply refers to a user interface. For example, the [Replay](https://docs.caido.io/reference/features/testing/replay.html) and [Automate](https://docs.caido.io/reference/features/testing/automate.html) side menu tabs each produce their own page.

Within these pages are components and elements specific to the feature, such as option menus and buttons. It is through these components and elements that the appearance is customized or communication with the backend occurs.

Think of the Caido application as a browser window with multiple open tabs, each corresponding to a specific page.

Frontend plugins allow you to:

- Add new pages, components and elements.
- Modify the appearance, behavior and functionality of the user-interface.
- Handle user interactions, render data and communicate with the backend server via Caido's API.

::: info
You can find the full list of available frontend SDK functions in the [frontend SDK reference](/reference/sdks/frontend/index.md).
:::

### Backend Plugin

The backend refers to what is available server-side, what is "_under-the-hood_" or "_out-of-sight_". By incorporating a backend aspect to your plugin, you can extend upon the server-side functionality.

Backend plugins allow you to:

- Interact with the application's data and databases.
- Perform HTTP requests to external APIs.
- Handle computationally intensive tasks.
- Respond to events that occur within Caido.

::: info
You can find the full list of available backend SDK functions in the [backend SDK reference](/reference/sdks/backend/index.md).
:::
