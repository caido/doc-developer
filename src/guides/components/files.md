# Adding Files

To include additional files in your Caido plugins, you can add the `assets` property key to either the frontend or backend component objects in the `caido.config.ts` file. The key value is an array that stores the locations of any files accessible to the plugin.

In this guide we'll cover how to add a file to a plugin named `myfile.txt`.

## Shared Steps

In the root directory of your plugin package, create a new directory named `assets`. Within this directory, create the `myfile.txt` file, write content to it, and save it. The file can now be referenced with:

``` ts
assets : ["./assets/myfile.txt"]
```

::: tip TIPS

- Glob syntax (`*`) is supported to reference multiple files.
- When just a directory is specified, Caido will recursively include all files within it.
:::

::: info
The `assets` key can also be added to a plugin's `manifest.json` file. However, multiple locations can not be defined with this method.
:::

## Adding Files to the Frontend Component

Open the `caido.config.ts` file and add the property to the `frontend` component object:

<img alt="Event output." src="/_images/frontend_assets_key.png" center/>

### /packages/frontend/src/index.ts

To read the file, the `sdk.assets.get()` method can be called.

``` ts
const file = await sdk.assets.get("myfile.txt");
```

::: tip
To view the entire frontend script, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import "./styles/index.css";

import type { FrontendSDK } from "./types";

// Note that the init function is async to account for fetching the files.
export const init = async (sdk: FrontendSDK) => {

  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  root.id = `plugin--frontend-vanilla`;

  const parent = document.createElement("div");
  parent.classList.add("h-full", "flex", "justify-center", "items-center");

  const container = document.createElement("div");
  container.classList.add("flex", "flex-col", "gap-1", "p-4");

  const file = await sdk.assets.get("myfile.txt");
  // For large files or to process in chunks, use file.asReadableStream() instead.
  const content = await file.asString();
  container.textContent = content;

  parent.appendChild(container);

  root.appendChild(parent);

  sdk.navigation.addPage("/view-file-plugin", {
    body: root,
  });

  sdk.sidebar.registerItem("View File Plugin", "/view-file-plugin");
};
```

</details>
:::

## Adding Files to the Backend Component

Open the `caido.config.ts` file and add the property to the `backend` component object:

``` ts
assets : ["./assets/myfile.txt"]
```

<img alt="Event output." src="/_images/backend_assets_key.png" center/>

### /packages/backend/src/index.ts

By [creating a custom backend function](./rpc.md) to read the file, we can later call it from the frontend:

``` ts
import type { DefineAPI, SDK } from "caido:plugin";
import { readFile } from 'fs/promises';
import path from "path";

const readMyFile = async (sdk: SDK) => {
  try {
    const filePath = path.join(sdk.meta.assetsPath(), "myfile.txt");
    const contents = await readFile(filePath, { encoding: 'utf8' });
    sdk.console.log(contents);
    return contents;
  } catch (err: any) {
    sdk.console.error(err.message);
    throw err;
  }
};

export type API = DefineAPI<{
  readMyFile: typeof readMyFile;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("readMyFile", readMyFile);
}
```

::: tip
To view the entire frontend script, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import "./styles/index.css";

import type { FrontendSDK } from "./types";

export const init = async (sdk: FrontendSDK) => {
  const root = document.createElement("div");
  Object.assign(root.style, {
    height: "100%",
    width: "100%",
  });

  root.id = `plugin--frontend-vanilla`;

  const parent = document.createElement("div");
  parent.classList.add("h-full", "flex", "justify-center", "items-center");

  const container = document.createElement("div");
  container.classList.add("flex", "flex-col", "gap-1", "p-4");

  try {
    // Call the backend readMyFile() function to read myfile.txt.
    const content = await sdk.backend.readMyFile();
    container.textContent = content;
  } catch (error: any) {
    container.textContent = `Error reading file: ${error.message}`;
  }

  parent.appendChild(container);

  root.appendChild(parent);

  sdk.navigation.addPage("/view-file-plugin", {
    body: root,
  });

  sdk.sidebar.registerItem("View File Plugin", "/view-file-plugin");
};
```

</details>
:::

## The Result

<img alt="Event output." src="/_images/view_file_frontend.png" center/>
