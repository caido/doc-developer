# Use AI in Your Plugin

Frontend plugins can call the AI providers the user configured in Caido through `sdk.ai`. Requests go through the Caido backend with the user's credentials, so your plugin never handles API keys.

## Installing the AI SDK

`sdk.ai.createProvider()` returns a provider for the [AI SDK](https://ai-sdk.dev/) v6. Install `ai` to call it, and `@ai-sdk/provider`, which the `@caido/sdk-frontend` types depend on:

```bash
pnpm add ai @ai-sdk/provider
```

## Checking That AI Is Configured

`sdk.ai.getUpstreamProviders()` only returns the providers the user has configured, so an empty array means AI is not set up:

```ts
if (sdk.ai.getUpstreamProviders().length === 0) {
  sdk.window.showToast("Configure an AI provider in Caido's settings first.", {
    variant: "warning",
  });
}
```

Caido's built-in providers have a fixed `id`: `"openai"`, `"anthropic"`, `"google"`, `"xai"`, `"openrouter"` and `"bedrock"`, plus `"chatgpt"` and `"grok"` when signed in with OAuth. Users can also add custom providers, such as a self-hosted gateway or a local model, whose `id` is the alias the user chose. `authentication` reports whether the stored credentials work. See [AIUpstreamProvider](/plugins/reference/sdks/frontend/ai.md#aiupstreamprovider) for all properties.

## Choosing a Model

`sdk.ai.getUpstreamModels()` returns the models listed in **Settings → AI → Models**. Pass `providerId` to only get the models of one provider:

```ts
const models = sdk.ai.getUpstreamModels({ providerId: "openai" });
```

A model's `modelId` has the form `"<provider id>/<model>"`.

A model's `support` object reports `toolCalling`, `reasoning`, `structuredOutput`, `temperature` and `compaction` as `"SUPPORTED"`, `"UNSUPPORTED"` or `"UNKNOWN"`. `reasoningEfforts` lists the accepted reasoning efforts. See [AIUpstreamModel](/plugins/reference/sdks/frontend/ai.md#aiupstreammodel) for all properties.

To get notified when models change, subscribe with `sdk.ai.onUpstreamModelsChange()`:

```ts
const handle = sdk.ai.onUpstreamModelsChange((models) => {
  renderModelPicker(models);
});

handle.stop();
```

## Generating Text

Call the provider with a model ID to get an AI SDK language model, then pass it to `generateText` or `streamText`:

```ts
import { generateText } from "ai";

const provider = sdk.ai.createProvider();

const { text } = await generateText({
  model: provider("openai/gpt-5.5"),
  prompt: "Explain what HTTP is in one sentence.",
});
```

Only language models are supported. To cancel a request or stream, pass an `abortSignal`.

## Configuring Reasoning and Structured Output

Pass model settings as the second argument:

```ts
const model = provider("anthropic/claude-sonnet-4-6", {
  reasoning: { kind: "effort", effort: "high", output: "include" },
  parallelToolCalls: true,
  structuredOutput: { strict: true },
});
```

`reasoning` can also be `{ kind: "budget", tokens }` or `{ kind: "disabled" }`, and `output: "omit"` leaves the reasoning text out of the response.

Strict structured output requires every property to be listed in `required` and `additionalProperties: false` on every object.

See [AILanguageModelSettings](/plugins/reference/sdks/frontend/ai.md#ailanguagemodelsettings) for all options.

## Compacting Long Conversations

OpenAI, ChatGPT and Anthropic models, including Anthropic models on Amazon Bedrock, support native compaction: once the input passes `triggerInputTokens`, the provider summarizes the conversation so far and continues from the summary. Check `support.compaction` on the model first, since a request with `compaction` fails on models that do not support it.

The summary is returned as a reasoning part with `providerMetadata.caido.compaction`. Send it back with the rest of the conversation on the next request, and the provider skips everything before it:

```ts
import type { ModelMessage } from "ai";
import { generateText } from "ai";

const messages: ModelMessage[] = [];

const ask = async (prompt: string) => {
  messages.push({ role: "user", content: prompt });

  const result = await generateText({
    model: provider("anthropic/claude-sonnet-4-6", {
      compaction: { triggerInputTokens: 100_000 },
    }),
    messages,
  });

  messages.push(...result.response.messages);
  return result.text;
};
```

On Anthropic, `instructions` replaces the default summary prompt, and `pauseAfterCompaction` ends the turn right after compacting, with `providerMetadata.caido.finishReason` set to `"paused"`. OpenAI ignores both.

## Passing Provider-Specific Options

Call-level `providerOptions` are forwarded to the Caido backend, keyed by the names of the provider's own API:

```ts
await generateText({
  model: provider("openai/gpt-5.5"),
  prompt: "Summarize this request.",
  providerOptions: {
    openai: { service_tier: "priority" },
  },
});
```

`providerOptions` on user text parts, tool result parts and assistant content are also forwarded, so an Anthropic cache breakpoint is `{ anthropic: { cache_control: { type: "ephemeral" } } }`.

## Avoiding Unsupported Features

The following throw an `UnsupportedFunctionalityError` before any request is sent:

- File parts in user or assistant messages.
- Provider-defined tools, tool input examples and provider-executed tool calls.
- Tool results in assistant messages, multipart (`content`) tool results, `execution-denied` tool results and tool approval responses.
- JSON responses without a schema (`responseFormat: { type: "json" }`).

## Handling Errors

By default, Caido shows an error toast when an AI request fails. Pass `notifyErrors: false` if your plugin reports failures itself:

```ts
const provider = sdk.ai.createProvider({ notifyErrors: false });
```

A failed request throws an AI SDK `APICallError`, or a `RetryError` wrapping it once retries are exhausted. If the request reached the Caido backend, the error's `data` is an [AIError](/plugins/reference/sdks/frontend/ai.md#aierror) with a `kind` and a `message`. Upstream failures have `kind: "provider"` and a `providerError` such as `{ kind: "rate-limited" }`.

`getAIError(error)` reads the `AIError` from either error type, and returns `undefined` for failures that never reached the backend:

```ts
import { getAIError } from "@caido/sdk-frontend";

try {
  await generateText({ model: provider(modelId), prompt });
} catch (error) {
  const aiError = getAIError(error);
  if (aiError?.providerError?.kind === "rate-limited") {
    sdk.window.showToast("Rate limited, try again later.", { variant: "warning" });
  } else {
    sdk.window.showToast(aiError?.message ?? String(error), { variant: "error" });
  }
}
```

## Examples

### Summarizing a Request With the First Available Model

This example registers a command that picks the first configured model and asks it to summarize a request, showing a toast when no AI provider is configured.

```ts
import type { Caido } from "@caido/sdk-frontend";
import { generateText } from "ai";

export type CaidoSDK = Caido;

const summarize = async (sdk: CaidoSDK, raw: string) => {
  const [model] = sdk.ai.getUpstreamModels();
  if (model === undefined) {
    sdk.window.showToast("Configure an AI provider in Caido's settings first.", {
      variant: "warning",
    });
    return;
  }

  const provider = sdk.ai.createProvider();
  const { text } = await generateText({
    model: provider(model.modelId),
    system: "You are a web security assistant. Be concise.",
    prompt: `Summarize what this HTTP request does:\n\n${raw}`,
  });

  sdk.log.info(text);
};

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("ai-summarize-request", {
    name: "AI: Summarize Request",
    run: async (context) => {
      if (context.type === "RequestContext") {
        await summarize(sdk, context.request.raw);
      }
    },
  });

  sdk.commandPalette.register("ai-summarize-request");
};
```

### Streaming a Response

This example streams a response token by token and cancels it after 30 seconds. Errors are reported by the `onError` callback instead of the default toast.

```ts
import type { AIModelId, Caido } from "@caido/sdk-frontend";
import { streamText } from "ai";

export type CaidoSDK = Caido;

export const streamAnswer = async (sdk: CaidoSDK, modelId: AIModelId, prompt: string) => {
  const provider = sdk.ai.createProvider({ notifyErrors: false });

  const result = streamText({
    model: provider(modelId),
    prompt,
    abortSignal: AbortSignal.timeout(30_000),
    onError: ({ error }) => {
      sdk.log.error("AI request failed", error);
    },
  });

  let answer = "";
  for await (const chunk of result.textStream) {
    answer += chunk;
  }
  return answer;
};
```

### Generating Structured Output

This example asks a model for a JSON object that matches a schema, using the AI SDK's `Output.object()`. It enables strict mode only when the model reports structured output support.

```ts
import type { AIUpstreamModel, Caido } from "@caido/sdk-frontend";
import { generateText, jsonSchema, Output } from "ai";

export type CaidoSDK = Caido;

type Classification = { category: string; risky: boolean };

export const classify = async (sdk: CaidoSDK, model: AIUpstreamModel, raw: string) => {
  const provider = sdk.ai.createProvider();

  const { output } = await generateText({
    model: provider(model.modelId, {
      structuredOutput: { strict: model.support.structuredOutput === "SUPPORTED" },
    }),
    output: Output.object({
      schema: jsonSchema<Classification>({
        type: "object",
        properties: {
          category: { type: "string" },
          risky: { type: "boolean" },
        },
        required: ["category", "risky"],
        additionalProperties: false,
      }),
    }),
    prompt: `Classify this HTTP request:\n\n${raw}`,
  });

  return output;
};
```
