# Extending Editors with CodeMirror

You can extend the request and response editors in Caido with CodeMirror extensions to add custom functionality like syntax highlighting, validation, autocomplete, custom keybindings, and editor themes.

## Adding Editor Extensions

Editor extensions are available on multiple pages in Caido. You can add extensions to request editors and response editors (where available).

### Request Editor Extensions

Request editor extensions are available on:

- HTTP History (`sdk.httpHistory.addRequestEditorExtension()`)
- Replay (`sdk.replay.addRequestEditorExtension()`)
- Search (`sdk.search.addRequestEditorExtension()`)
- Sitemap (`sdk.sitemap.addRequestEditorExtension()`)
- Automate (`sdk.automate.addRequestEditorExtension()`)
- Findings (`sdk.findings.addRequestEditorExtension()`)

```ts
import { Extension } from "@codemirror/state";

const myExtension: Extension = [
  // Your CodeMirror extension configuration
];

sdk.httpHistory.addRequestEditorExtension(myExtension);
```

### Response Editor Extensions

Response editor extensions are available on:

- HTTP History (`sdk.httpHistory.addResponseEditorExtension()`)

```ts
sdk.httpHistory.addResponseEditorExtension(myExtension);
```

## CodeMirror Extension Types

CodeMirror extensions can be:

- A single extension object
- An array of extensions
- A function that returns an extension

```ts
// Single extension
sdk.httpHistory.addRequestEditorExtension(myExtension);

// Array of extensions
sdk.httpHistory.addRequestEditorExtension([extension1, extension2]);

// Function returning extension
sdk.httpHistory.addRequestEditorExtension(() => myExtension);
```

## Multiple Extensions

You can add multiple extensions to the same editor:

```ts
export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestEditorExtension([
    customHighlightExtension,
    customKeymapExtension,
    darkThemeExtension,
  ]);
};
```

## Accessing the Editor View

If you need to access the editor view directly, you can use `sdk.window.getActiveEditor()`:

```ts
const editor = sdk.window.getActiveEditor();
if (editor) {
  const view = editor.getEditorView();
  // Use the CodeMirror EditorView
}
```

## Examples

### Custom Syntax Highlighting

This example creates a custom syntax highlighting extension that colors strings green and numbers blue. The extension is applied to both HTTP History and Replay request editors.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { Extension } from "@codemirror/state";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export type CaidoSDK = Caido;

const customHighlight = HighlightStyle.define([
  { tag: tags.string, color: "#0a0" },
  { tag: tags.number, color: "#00a" },
]);

const customHighlightExtension: Extension = syntaxHighlighting(customHighlight);

export const init = (sdk: CaidoSDK) => {
  // Add to HTTP History request editor
  sdk.httpHistory.addRequestEditorExtension(customHighlightExtension);
  
  // Add to Replay request editor
  sdk.replay.addRequestEditorExtension(customHighlightExtension);
};
```

### Custom Keybindings

This example adds a custom keyboard shortcut (Ctrl+Enter) that logs the currently selected text in the editor. The keybinding is registered as a CodeMirror extension.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { Extension } from "@codemirror/state";
import { keymap } from "@codemirror/view";
import { EditorView } from "@codemirror/view";

export type CaidoSDK = Caido;

const customKeymapExtension: Extension = keymap.of([
  {
    key: "Ctrl-Enter",
    run: (view: EditorView) => {
      // Custom action on Ctrl+Enter
      const selection = view.state.selection.main;
      const text = view.state.doc.sliceString(selection.from, selection.to);
      console.log("Selected text:", text);
      return true;
    },
  },
]);

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestEditorExtension(customKeymapExtension);
};
```

### Editor Theme

This example applies a custom dark theme to the request and response editors. It sets background colors, text colors, and cursor colors to create a dark editor appearance.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

export type CaidoSDK = Caido;

const darkThemeExtension: Extension = EditorView.theme({
  "&": {
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
  },
  ".cm-content": {
    caretColor: "#aeafad",
  },
  ".cm-focused .cm-cursor": {
    borderLeftColor: "#aeafad",
  },
});

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestEditorExtension(darkThemeExtension);
  sdk.httpHistory.addResponseEditorExtension(darkThemeExtension);
};
```

### Autocomplete

This example adds autocomplete functionality that suggests HTTP methods (GET, POST, PUT, DELETE) as you type in the editor. The autocomplete appears when you start typing a word.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { Extension } from "@codemirror/state";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

export type CaidoSDK = Caido;

const customAutocompleteExtension: Extension = autocompletion({
  override: [
    (context) => {
      const word = context.matchBefore(/\w*/);
      if (!word) return null;

      return {
        from: word.from,
        options: [
          { label: "GET", type: "method" },
          { label: "POST", type: "method" },
          { label: "PUT", type: "method" },
          { label: "DELETE", type: "method" },
        ],
      };
    },
  ],
});

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestEditorExtension(customAutocompleteExtension);
};
```

### Validation

This example implements a validation extension that marks lines longer than 1000 characters as errors. It uses CodeMirror's state effects and decorations to visually highlight problematic lines.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { Extension } from "@codemirror/state";
import { EditorView, Decoration, ViewPlugin } from "@codemirror/view";
import { StateField, StateEffect } from "@codemirror/state";

export type CaidoSDK = Caido;

const addErrorMark = StateEffect.define<{ from: number; to: number }>({
  map: ({ from, to }, change) => ({
    from: change.mapPos(from),
    to: change.mapPos(to),
  }),
});

const errorField = StateField.define({
  create() {
    return Decoration.none;
  },
  update(errors, tr) {
    errors = errors.map(tr.changes);
    for (let effect of tr.effects) {
      if (effect.is(addErrorMark)) {
        errors = errors.update({
          add: [
            Decoration.mark({
              class: "cm-error",
              attributes: { title: "Invalid syntax" },
            }).range(effect.value.from, effect.value.to),
          ],
        });
      }
    }
    return errors;
  },
  provide: (f) => EditorView.decorations.from(f),
});

const validationPlugin = ViewPlugin.fromClass(
  class {
    constructor(private view: EditorView) {
      this.validate();
    }

    update() {
      this.validate();
    }

    validate() {
      const doc = this.view.state.doc;
      const text = doc.toString();

      // Simple validation example: check for common issues
      const effects: StateEffect<unknown>[] = [];
      
      // Example: mark lines that are too long
      doc.iterLines((line, lineNo) => {
        if (line.length > 1000) {
          const from = doc.line(lineNo + 1).from;
          const to = doc.line(lineNo + 1).to;
          effects.push(addErrorMark.of({ from, to }));
        }
      });

      if (effects.length > 0) {
        this.view.dispatch({
          effects,
        });
      }
    }
  }
);

const validationExtension: Extension = [errorField, validationPlugin];

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestEditorExtension(validationExtension);
};
```

::: tip
CodeMirror extensions are powerful and flexible. Refer to the [CodeMirror documentation](https://codemirror.net/docs/) for more advanced extension patterns.
:::

::: info
Extensions are applied globally to all editors on the specified page. If you need page-specific behavior, check the current page using `sdk.navigation.onPageChange()`.
:::

::: warning
Be careful with extensions that modify editor behavior significantly, as they may interfere with Caido's built-in editor functionality.
:::
