# Create a Page

Plugin pages provide a graphical user interface in the Caido application. There are multiple SDK objects and methods available to assist you in customization.

## Creating Pages and Navigating

Used to create pages in the application and navigate to them.

### Adding a Page

```ts
sdk.navigation.addPage("/my-plugin-page", {
    body: card;
    topbar: bar;
});
```

This creates a page of which the contents are the [card](#creating-a-card) you will learn how to create below.

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

## Creating UI Components

Used to create visual elements. Content options for each element are also provided. These elements provide a way to sectionalize the user-interface of your plugin.

### Creating a Button

```ts
const deleteButton = sdk.ui.button({
  variant: "primary",
  label: "Delete",
  trailingIcon: "fas fa-trash-can",
  size: "small",
});
```

All button properties are optional and include:

- `variant` - Specifies the button type and can have a value of `"primary"`, `"secondary"` or `"tertiary"`.
- `label` - Specifies the inner string within the button.
- `leadingIcon` - Adds an icon at the leading side of the button.
- `trailingIcon` - Addsan icon at the trailing side of the button.
- `size` - Specifies the button size and can have a value of `"small"`, `"medium"` or `"large"`.

### Creating a Card

```ts
const card = sdk.ui.card({
  header: headerContainer,
  body: bodyText,
  footer: footerText,
});
```

A **card** is a layout component. Similar to an HTML file, Cards consist of `header`, `body` and `footer` properties.

All properties are optional. The value of each property is a defined HTML element.

::: tip
To use multiple HTML elements, combine them using `<div></div>` tags:

```ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {
  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);

  const bar = document.createElement("p");
  bar.textContent = "Topbar.";

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyText,
    footer: footerText,
  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
    topbar: bar,
  });
};

export const init = (sdk: CaidoSDK) => {
  // Register commands
  // Commands are registered with a unique identifier and a handler function
  // The run function is called when the command is executed
  // These commands can be registered in various places like command palette, context menu, etc.

  // Register page
  createPage(sdk);

  // Register sidebar
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

The `init` function contains the `createPage(sdk)` function to register the page and the `.registerItem` method to make it available in the sidebar when the plugin initializes.
:::

<img alt="Add page SKD." src="/_images/add_page_sdk.png" center/>

### Creating a Well

```ts
const well = sdk.ui.well({
  header: title,
  body: paragraph,
  footer: advisory,
});
```

A **well** is a layout component. Wells are similar to cards in that they consist of `header`, `body` and `footer` properties.

All properties are optional. The value of each property is a defined HTML element.

### Creating a Request Editor

```ts
const reqEditor = sdk.ui.httpRequestEditor();
const reqEditorPane = reqEditor.getElement();
```

### Creating a Response Editor

```ts
const respEditor = sdk.ui.httpResponseEditor();
const respEditorPane = respEditor.getElement();
```

::: tip
For an example of a page with request and response editors, expand the following:

<details>
<summary>Example</summary>

```ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {
  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const reqEditor = sdk.ui.httpRequestEditor();
  const reqEditorPane = reqEditor.getElement();
  const respEditor = sdk.ui.httpResponseEditor();
  const respEditorPane = respEditor.getElement();

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);

  const bodyContainer = document.createElement("div");
  bodyContainer.appendChild(bodyText);

  const editorsContainer = document.createElement("div");
  editorsContainer.classList.add("editors-container");

  reqEditorPane.classList.add("editor-pane");
  respEditorPane.classList.add("editor-pane");

  editorsContainer.appendChild(reqEditorPane);
  editorsContainer.appendChild(respEditorPane);

  bodyContainer.appendChild(editorsContainer);

  const bar = document.createElement("p");
  bar.textContent = "Topbar.";

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyContainer,
    footer: footerText,
  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
    topbar: bar,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

</details>
:::

::: tip
To view the CSS rules of the editors shown below, expand the following:

<details>
<summary>Example</summary>

``` css
.editors-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.editor-pane {
  flex: 1;
  min-width: 300px;
  min-height: 500px;
  margin: 0 10px;
}

.editor-pane h2 {
  margin: 0;
  padding: 10px;
  border-radius: 4px;
}
```

</details>
:::

<img alt="Page with request and response editors." src="/_images/page_with_req_resp_editors.png" center/>

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

::: tip
For an example of how to trigger Toast messages on button clicks, expand the following:

<details>
<summary>Example</summary>

```ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {
  const messageButton = sdk.ui.button({
    variant: "primary",
    label: "Message Button",
  });

  messageButton.addEventListener("click", async () => {
    sdk.window.showToast("Message to display.", {
      variant: "info",
      duration: 3000,
    });
  });

  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);
  headerContainer.appendChild(messageButton);

  const bar = document.createElement("p");
  bar.textContent = "Topbar.";

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyText,
    footer: footerText,
  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
    topbar: bar,
  });
};

export const init = (sdk: CaidoSDK) => {
  // Register commands
  // Commands are registered with a unique identifier and a handler function
  // The run function is called when the command is executed
  // These commands can be registered in various places like command palette, context menu, etc.

  // Register page
  createPage(sdk);

  // Register sidebar
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

</details>
:::

<img alt="Toast messages SKD." src="/_images/toast_message_sdk.png" center/>
