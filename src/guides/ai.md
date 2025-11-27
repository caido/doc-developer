# How to Use AI in Your Plugin

You can integrate AI capabilities into your plugin using Caido's AI provider, which is compatible with the [ai](https://ai-sdk.dev/) library.

## Creating an AI Provider

To create an AI provider instance:

```ts
const provider = sdk.ai.createProvider();
```

This returns an `AIProvider` instance that can be used with the `ai` library.

## Example: Basic AI Integration

First, install the `ai` package:

```bash
npm install ai
```

Then use the provider in your plugin:

```ts
import type { Caido } from "@caido/sdk-frontend";
import { generateText } from "ai";

export type CaidoSDK = Caido;

export const init = async (sdk: CaidoSDK) => {
  const provider = sdk.ai.createProvider();

  // Use with the ai library
  const { text } = await generateText({
    model: provider,
    prompt: "Explain what HTTP is in one sentence.",
  });

  sdk.log.info("AI Response:", text);
};
```

## Example: AI-Powered Request Analysis

```ts
import type { Caido } from "@caido/sdk-frontend";
import { generateText } from "ai";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "16px";

  const analyzeButton = sdk.ui.button({
    variant: "primary",
    label: "Analyze Request",
  });

  const resultText = document.createElement("div");
  resultText.style.padding = "16px";
  resultText.style.backgroundColor = "#f5f5f5";
  resultText.style.borderRadius = "4px";
  resultText.style.minHeight = "100px";

  analyzeButton.addEventListener("click", async () => {
    const editor = sdk.window.getActiveEditor();
    if (!editor) {
      sdk.window.showToast("No active editor", { variant: "warning" });
      return;
    }

    const requestText = editor.getSelectedText() || editor.getEditorView().state.doc.toString();

    if (!requestText) {
      sdk.window.showToast("No request text found", { variant: "warning" });
      return;
    }

    resultText.textContent = "Analyzing...";
    analyzeButton.disabled = true;

    try {
      const provider = sdk.ai.createProvider();
      const { text } = await generateText({
        model: provider,
        prompt: `Analyze this HTTP request and identify potential security issues:\n\n${requestText}`,
      });

      resultText.textContent = text;
    } catch (error) {
      resultText.textContent = `Error: ${error}`;
      sdk.log.error("AI analysis failed:", error);
    } finally {
      analyzeButton.disabled = false;
    }
  });

  container.appendChild(analyzeButton);
  container.appendChild(resultText);

  const card = sdk.ui.card({
    body: container,
  });

  sdk.navigation.addPage("/ai-analyzer", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
};
```

## Example: AI-Powered Code Generation

```ts
import type { Caido } from "@caido/sdk-frontend";
import { generateText } from "ai";

export type CaidoSDK = Caido;

const generateCode = async (sdk: CaidoSDK, description: string): Promise<string> => {
  const provider = sdk.ai.createProvider();

  const { text } = await generateText({
    model: provider,
    prompt: `Generate a Caido plugin code snippet that: ${description}`,
  });

  return text;
};

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("ai-generate-code", {
    name: "AI: Generate Code",
    run: async () => {
      const description = prompt("What should the code do?");
      if (description) {
        const code = await generateCode(sdk, description);
        sdk.window.showToast("Code generated! Check console.", { variant: "success" });
        sdk.log.info("Generated code:", code);
      }
    },
  });

  sdk.commandPalette.register("ai-generate-code");
};
```

## Example: Streaming AI Responses

```ts
import type { Caido } from "@caido/sdk-frontend";
import { streamText } from "ai";

export type CaidoSDK = Caido;

const streamAnalysis = async (sdk: CaidoSDK, requestText: string, onChunk: (text: string) => void) => {
  const provider = sdk.ai.createProvider();

  const { textStream } = await streamText({
    model: provider,
    prompt: `Analyze this HTTP request:\n\n${requestText}`,
  });

  for await (const chunk of textStream) {
    onChunk(chunk);
  }
};

export const init = (sdk: CaidoSDK) => {
  // Use streaming for real-time AI responses
  // Implementation depends on your UI needs
};
```

::: tip
The AI provider is compatible with all features of the `ai` library, including text generation, streaming, tool calling, and more. Refer to the [ai SDK documentation](https://ai-sdk.dev/) for advanced usage.
:::

::: info
The AI provider uses Caido's configured AI settings. Users can configure their AI provider preferences in Caido's settings.
:::

::: warning
AI operations can be resource-intensive and may have rate limits. Consider implementing error handling and user feedback for long-running AI operations.
:::

