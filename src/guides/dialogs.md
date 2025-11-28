# Showing Dialogs

Dialogs are modal windows that can display custom components, collect user input, or show important information. They provide a way to create focused interactions with users.

## Showing a Dialog

To show a dialog, use `sdk.window.showDialog()`:

```ts
const dialog = sdk.window.showDialog(component, options);
```

The method returns a `Dialog` object that can be used to programmatically close the dialog.

## Basic Dialog

```ts
const content = document.createElement("div");
content.textContent = "This is a dialog";

const dialog = sdk.window.showDialog(content);
```

## Dialog Options

You can customize the dialog behavior with options:

```ts
const dialog = sdk.window.showDialog(component, {
  title: "My Dialog",
  modal: true,
  closable: true,
  closeOnEscape: true,
  draggable: false,
  position: "center",
});
```

### Available Options

- `title` - The title displayed in the dialog header
- `modal` - Whether the dialog blocks interaction with the rest of the application (default: `true`)
- `closable` - Whether the dialog can be closed (default: `true`)
- `closeOnEscape` - Whether pressing Escape closes the dialog (default: `true`)
- `draggable` - Whether the dialog can be dragged (default: `false`)
- `position` - Dialog position: `"left"`, `"right"`, `"top"`, `"bottom"`, `"center"`, `"topleft"`, `"topright"`, `"bottomleft"`, `"bottomright"` (default: `"center"`)

## Closing a Dialog

You can close a dialog programmatically using the returned `Dialog` object:

```ts
const dialog = sdk.window.showDialog(content);

// Later, close the dialog
dialog.close();
```

## Example: Confirmation Dialog

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const showConfirmationDialog = (sdk: CaidoSDK, message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "16px";

    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    container.appendChild(messageEl);

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "8px";
    buttonContainer.style.justifyContent = "flex-end";

    const confirmButton = sdk.ui.button({
      variant: "primary",
      label: "Confirm",
    });
    confirmButton.addEventListener("click", () => {
      dialog.close();
      resolve(true);
    });

    const cancelButton = sdk.ui.button({
      variant: "secondary",
      label: "Cancel",
    });
    cancelButton.addEventListener("click", () => {
      dialog.close();
      resolve(false);
    });

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);
    container.appendChild(buttonContainer);

    const dialog = sdk.window.showDialog(container, {
      title: "Confirmation",
      modal: true,
      closable: true,
    });
  });
};

const createPage = (sdk: CaidoSDK) => {
  const button = sdk.ui.button({
    variant: "primary",
    label: "Delete Item",
  });

  button.addEventListener("click", async () => {
    const confirmed = await showConfirmationDialog(
      sdk,
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      sdk.window.showToast("Item deleted", { variant: "success" });
    } else {
      sdk.window.showToast("Cancelled", { variant: "info" });
    }
  });

  const card = sdk.ui.card({
    body: button,
  });

  sdk.navigation.addPage("/dialog-example", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: Form Dialog

```ts
const showFormDialog = (sdk: CaidoSDK): Promise<string | null> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "16px";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter value";
    input.style.padding = "8px";
    container.appendChild(input);

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "8px";
    buttonContainer.style.justifyContent = "flex-end";

    const submitButton = sdk.ui.button({
      variant: "primary",
      label: "Submit",
    });
    submitButton.addEventListener("click", () => {
      dialog.close();
      resolve(input.value || null);
    });

    const cancelButton = sdk.ui.button({
      variant: "secondary",
      label: "Cancel",
    });
    cancelButton.addEventListener("click", () => {
      dialog.close();
      resolve(null);
    });

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(submitButton);
    container.appendChild(buttonContainer);

    const dialog = sdk.window.showDialog(container, {
      title: "Enter Value",
      modal: true,
    });

    // Focus the input when dialog opens
    input.focus();
  });
};
```

## Dialog Positions

You can position dialogs in different locations:

```ts
// Center (default)
sdk.window.showDialog(content, { position: "center" });

// Top right
sdk.window.showDialog(content, { position: "topright" });

// Bottom left
sdk.window.showDialog(content, { position: "bottomleft" });
```

::: tip
Use modal dialogs for critical actions that require user attention. Non-modal dialogs are useful for displaying information that doesn't block the user's workflow.
:::

::: warning
Always provide a way to close dialogs, either through a close button or by enabling `closable` and `closeOnEscape` options.
:::

