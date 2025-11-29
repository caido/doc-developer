# Use AI in Your Plugin

You can integrate AI capabilities into your plugin using Caido's AI provider, which is compatible with the [ai](https://ai-sdk.dev/) library.

## Creating an AI Provider

To create an AI provider instance:

```ts
const provider = sdk.ai.createProvider();
```

This returns an `AIProvider` instance that can be used with the `ai` library.

::: tip
The AI provider is compatible with all features of the `ai` library, including text generation, streaming, tool calling, and more. Refer to the [ai SDK documentation](https://ai-sdk.dev/) for advanced usage.
:::

::: info
The AI provider uses Caido's configured AI settings. Users can configure their AI provider preferences in Caido's settings.
:::

::: warning
AI operations can be resource-intensive and may have rate limits. Consider implementing error handling and user feedback for long-running AI operations.
:::

## Examples

### Basic AI Integration

This example demonstrates the basic setup for using AI in your plugin. It creates an AI provider, uses it with the `ai` library to generate text from a prompt, and logs the response.

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

### AI-Powered Code Generation

This example registers a command that uses AI to generate Caido plugin code based on a user's description. The command prompts for a description, generates code using AI, and logs the result.

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
