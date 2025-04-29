# Using AI to Assist in Plugin Development

::: warning DISCLAIMER
While AI assistants can be helpful in development, they may sometimes provide incorrect or incomplete information. Always verify AI-generated code and suggestions against the official documentation and test thoroughly.
:::

## Cursor

If you are using [Cursor](https://www.cursor.com/en) as your IDE, you can load the Caido documentation websites into your workspace so that Cursor becomes aware of the Caido SDK:

1. Open Cursor and click `View` in the menu bar and select `Command Palette` (_or use `CTRL + Shift + P`_) and search for:

```
Add New Custom Docs
```

2. Select the option and enter the documentation URL:

```
https://developer.caido.io/
```

3. Provide a reference name and click `Confirm`.

<img alt="Add dev docs to Cursor." src="/_images/cursor_add_docs.png" center/>

4. Cursor will index the website allowing you to reference the documentation in prompts by using `@<reference name>`.

::: tip TIPS

- Also add `https://docs.caido.io/` to Cursor so you can reference interfaces for context.

- You can also customize prompt responses by navigating to `Settings`, `Rules`, and writing your preferences in the `User Rules` input field.
:::

## Caido Developer Assistant

[Caido also offers a fine-tuned GTP to help with development.](https://chatgpt.com/g/g-68095eb17eb08191ba19fd85f0a516ec-caido-developer-assistant)
