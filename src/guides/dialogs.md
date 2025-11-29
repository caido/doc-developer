# Show Dialogs

When you need to display a modal window to collect user input, show important information, or confirm an action, use dialogs to create focused interactions with users.

## Show a Simple Dialog

To display a basic dialog, create a DOM element and pass it to `sdk.window.showDialog()`. The method returns a `Dialog` object that you can use to programmatically close the dialog later.

```ts
const content = document.createElement("div");
content.textContent = "This is a dialog";

const dialog = sdk.window.showDialog(content);
```

## Customize Dialog Behavior

You can customize how the dialog appears and behaves by passing an options object as the second parameter. Common options include setting a title, controlling whether the dialog is modal, and configuring how users can close it.

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

The `modal` option controls whether the dialog blocks interaction with the rest of the application (default: `true`). Set `closable` to control whether users can close the dialog (default: `true`), and `closeOnEscape` to allow closing with the Escape key (default: `true`). Use `draggable` to make the dialog draggable (default: `false`), and `position` to set where it appears: `"left"`, `"right"`, `"top"`, `"bottom"`, `"center"`, `"topleft"`, `"topright"`, `"bottomleft"`, or `"bottomright"` (default: `"center"`).

::: tip
Use modal dialogs for critical actions that require user attention. Non-modal dialogs are useful for displaying information that doesn't block the user's workflow.
:::

::: warning
Always provide a way to close dialogs, either through a close button or by enabling `closable` and `closeOnEscape` options.
:::

## Close a Dialog Programmatically

Close a dialog programmatically by calling the `close()` method on the `Dialog` object returned from `showDialog()`. This is useful when you need to close the dialog based on user actions or application logic.

```ts
const dialog = sdk.window.showDialog(content);

// Later, close the dialog
dialog.close();
```

## Examples

### Confirmation Dialog

This example creates a reusable confirmation dialog function that displays a message and returns a promise resolving to `true` if confirmed or `false` if cancelled.

```ts
import Button from "primevue/button";

const showConfirmationDialog = (sdk: CaidoSDK, message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.className = "p-5 flex flex-col gap-4";

    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    container.appendChild(messageEl);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex gap-2 justify-end";

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
    confirmButton.addEventListener("click", () => {
      dialog.close();
      resolve(true);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700";
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
```

To use this dialog in a Vue component, call it from a button click handler:

```vue
<script setup lang="ts">
import Button from "primevue/button";
import { inject } from "vue";

const sdk = inject<CaidoSDK>("sdk");

const handleDelete = async () => {
  const confirmed = await showConfirmationDialog(
    sdk!,
    "Are you sure you want to delete this item?"
  );

  if (confirmed) {
    sdk?.window.showToast("Item deleted", { variant: "success" });
  } else {
    sdk?.window.showToast("Cancelled", { variant: "info" });
  }
};
</script>

<template>
  <Button label="Delete Item" @click="handleDelete" />
</template>
```

::: info
For information on creating pages and setting up Vue components, see [Create a Page](/guides/page.md).
:::

### Form Dialog

This example creates a dialog with a text input field that collects user input. The dialog returns the entered value when submitted, or `null` if cancelled. The input is automatically focused when the dialog opens.

```ts
const showFormDialog = (sdk: CaidoSDK): Promise<string | null> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.className = "p-5 flex flex-col gap-4";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter value";
    input.className = "px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white";
    container.appendChild(input);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex gap-2 justify-end";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
    submitButton.addEventListener("click", () => {
      dialog.close();
      resolve(input.value || null);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className = "px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700";
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
