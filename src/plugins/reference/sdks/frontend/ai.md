# AI

### AICompactionSettings

> **AICompactionSettings** = `object`

Settings for native context compaction.

The summary is returned as a reasoning part with
`providerMetadata.caido.compaction`.

#### Properties

##### instructions?

> `optional` **instructions**: `string`

Custom summarization instructions. Ignored by OpenAI.

##### pauseAfterCompaction?

> `optional` **pauseAfterCompaction**: `boolean`

End the turn after compacting. Ignored by OpenAI.

###### Default

```ts
false
```

##### triggerInputTokens?

> `optional` **triggerInputTokens**: `number`

Input-token threshold that triggers compaction. Defaults to the provider threshold.

***

### AICreateProviderOptions

> **AICreateProviderOptions** = `object`

Options for [AiSDK.createProvider](#createprovider).

#### Properties

##### notifyErrors?

> `optional` **notifyErrors**: `boolean`

Whether Caido shows a toast when a request fails.

Set to `false` when the plugin reports failures itself, for example with
[getAIError](#getaierror).

###### Default

```ts
true
```

***

### AIError

> **AIError** = `object`

Normalized details of a failed AI request.

Attached as `data` to the AI SDK `APICallError` of a failed request, for
both `/ai/completion` and `/ai/stream`. Use [getAIError](#getaierror) to read it
from an unknown error.

#### Properties

##### code?

> `optional` **code**: `string`

The provider-specific error code, when the provider reported one.

##### kind

> **kind**: [`AIErrorKind`](#aierrorkind)

The kind of failure.

##### message

> **message**: `string`

The failure message.

##### providerError?

> `optional` **providerError**: [`AIProviderError`](#aiprovidererror)

The upstream provider failure, present when `kind` is `provider`.

##### retryable?

> `optional` **retryable**: `boolean`

Whether retrying the same request may succeed.

##### retryAfterMs?

> `optional` **retryAfterMs**: `number`

The delay suggested by the provider before retrying, in milliseconds.

##### status?

> `optional` **status**: `number`

The HTTP status of the failure: the provider status when the provider
reported one, otherwise the Caido backend response status.

***

### AIErrorKind

> **AIErrorKind** = `"provider-not-configured"` \| `"invalid-request"` \| `"authorization"` \| `"provider"` \| `"internal"`

The kind of a failed AI request, as reported by the Caido backend.

- `provider-not-configured`: the alias of the model id matches no
  configured provider.
- `invalid-request`: the backend rejected the request payload.
- `authorization`: the Caido session is not allowed to use AI.
- `provider`: the upstream provider request failed, see
  [AIError.providerError](#providererror).
- `internal`: the backend failed unexpectedly.

***

### AIGetUpstreamModelsOptions

> **AIGetUpstreamModelsOptions** = `object`

Options for [AiSDK.getUpstreamModels](#getupstreammodels).

#### Properties

##### providerId?

> `optional` **providerId**: [`AIUpstreamProviderId`](#aiupstreamproviderid)

Only return models of this provider (the provider alias, see
[AIUpstreamProvider.id](#id-1)).

***

### AILanguageModelSettings

> **AILanguageModelSettings** = `object`

Settings for AI language model.

#### Properties

##### compaction?

> `optional` **compaction**: [`AICompactionSettings`](#aicompactionsettings)

##### parallelToolCalls?

> `optional` **parallelToolCalls**: `boolean`

##### reasoning?

> `optional` **reasoning**: [`AIReasoningSettings`](#aireasoningsettings)

##### structuredOutput?

> `optional` **structuredOutput**: [`AIStructuredOutputSettings`](#aistructuredoutputsettings)

***

### AIModelId

> **AIModelId** = `` `${string}/${string}` ``

AI model identifier in the form `"<alias>/<model-id>"`.

The alias is everything before the first `/` and must match the `id` of a
configured upstream provider (see [AIUpstreamProvider](#aiupstreamprovider)). Everything
after it is sent to that provider as the model name, so ids with their own
slashes such as `openrouter/anthropic/claude-sonnet-4.6` work as expected.

***

### AIProvider

> **AIProvider** = `Omit`\<`ProviderV3`, `"languageModel"`\> & `object` & (`modelId`: [`AIModelId`](#aimodelid), `settings?`: [`AILanguageModelSettings`](#ailanguagemodelsettings)) => `LanguageModelV3`

Official AI Provider to be used by the [ai](https://ai-sdk.dev/) library.

Only language models are supported: `imageModel` and `embeddingModel`
throw an AI SDK `NoSuchModelError`.

The following AI SDK features are not supported by language models and
throw an `UnsupportedFunctionalityError` before any request is sent:
- file parts in user or assistant messages
- provider-defined tools, tool input examples, and provider-executed tool
  calls
- tool results in assistant messages, multipart (`content`) tool results,
  `execution-denied` tool results, and tool approval responses
- `responseFormat: { type: "json" }` without a schema
- the reserved `caido` namespace in call-level `providerOptions`

`providerOptions` on user text parts, tool result parts, and assistant
content are sent to the backend unchanged, apart from the reserved `caido`
namespace. Keys use the backend names, so an Anthropic cache breakpoint is
`{ anthropic: { cache_control: { type: "ephemeral" } } }`.

`providerOptions` on system, user, and tool messages, on tool definitions,
and on tool result outputs are dropped with a warning because the backend
has no slot for them. Provider tool results returned by the provider are
dropped from the response (and surfaced as `raw` stream parts when
`includeRawChunks` is set).

A paused turn (for example after [AICompactionSettings.pauseAfterCompaction](#pauseaftercompaction))
finishes with the `other` finish reason and
`providerMetadata.caido.finishReason` set to `"paused"`.

`abortSignal` cancels the request or the running stream; the resulting
`AbortError` is rethrown unchanged and never reported as a failure.
Tool input streaming (`tool-input-start`, `tool-input-delta`,
`tool-input-end`) is supported.

#### Type Declaration

##### languageModel()

> **languageModel**: (`modelId`: [`AIModelId`](#aimodelid), `settings?`: [`AILanguageModelSettings`](#ailanguagemodelsettings)) => `LanguageModelV3`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `modelId` | [`AIModelId`](#aimodelid) |
| `settings?` | [`AILanguageModelSettings`](#ailanguagemodelsettings) |

###### Returns

`LanguageModelV3`

***

### AIProviderError

> **AIProviderError** = `object`

Details of an upstream provider failure.

#### Properties

##### code?

> `optional` **code**: `string`

The provider-specific error code.

##### kind

> **kind**: [`AIProviderErrorKind`](#aiprovidererrorkind)

The kind of failure.

##### message

> **message**: `string`

The failure message.

##### model?

> `optional` **model**: `string`

The model that was requested.

##### origin?

> `optional` **origin**: `string`

The provider API profile that produced the failure.

##### requestId?

> `optional` **requestId**: `string`

The provider request id, useful when contacting provider support.

##### retryable

> **retryable**: `boolean`

Whether retrying the same request may succeed.

##### retryAfterMs?

> `optional` **retryAfterMs**: `number`

The delay suggested by the provider before retrying, in milliseconds.

##### status?

> `optional` **status**: `number`

The HTTP status returned by the provider.

***

### AIProviderErrorKind

> **AIProviderErrorKind** = `"configuration"` \| `"invalid-request"` \| `"unsupported-capability"` \| `"unsupported-content"` \| `"authentication"` \| `"permission"` \| `"content-policy"` \| `"not-found"` \| `"rate-limited"` \| `"overloaded"` \| `"context-length"` \| `"transport"` \| `"timeout"` \| `"malformed-response"` \| `"truncated-stream"` \| `"provider"`

The kind of an upstream provider failure.

***

### AIReasoningOutput

> **AIReasoningOutput** = `"include"` \| `"omit"`

Controls whether reasoning content is included in the response.

***

### AIReasoningSettings

> **AIReasoningSettings** = \{ `kind`: `"disabled"`; \} \| \{ `effort`: [`AIUpstreamModelReasoningEffort`](#aiupstreammodelreasoningeffort); `kind`: `"effort"`; `output?`: [`AIReasoningOutput`](#aireasoningoutput); \} \| \{ `kind`: `"budget"`; `output?`: [`AIReasoningOutput`](#aireasoningoutput); `tokens`: `number`; \} \| \{ `effort`: `"low"` \| `"medium"` \| `"high"`; `kind?`: `undefined`; \}

Settings for AI reasoning.

The legacy untagged shape `{ effort }` is still accepted and treated as
`{ kind: "effort", effort }`.

#### Type Declaration

\{ `kind`: `"disabled"`; \}

##### kind

> **kind**: `"disabled"`

\{ `effort`: [`AIUpstreamModelReasoningEffort`](#aiupstreammodelreasoningeffort); `kind`: `"effort"`; `output?`: [`AIReasoningOutput`](#aireasoningoutput); \}

##### effort

> **effort**: [`AIUpstreamModelReasoningEffort`](#aiupstreammodelreasoningeffort)

##### kind

> **kind**: `"effort"`

##### output?

> `optional` **output**: [`AIReasoningOutput`](#aireasoningoutput)

\{ `kind`: `"budget"`; `output?`: [`AIReasoningOutput`](#aireasoningoutput); `tokens`: `number`; \}

##### kind

> **kind**: `"budget"`

##### output?

> `optional` **output**: [`AIReasoningOutput`](#aireasoningoutput)

##### tokens

> **tokens**: `number`

\{ `effort`: `"low"` \| `"medium"` \| `"high"`; `kind?`: `undefined`; \}

##### effort

> **effort**: `"low"` \| `"medium"` \| `"high"`

##### kind?

> `optional` **kind**: `undefined`

***

### AiSDK

> **AiSDK** = `object`

Utilities to interact with AI.

#### Properties

##### createProvider()

> **createProvider**: (`options?`: [`AICreateProviderOptions`](#aicreateprovideroptions)) => [`AIProvider`](#aiprovider)

Creates a new AI provider instance that can be used with the [ai](https://ai-sdk.dev/) library.

Models are addressed as `"<alias>/<model-id>"`, see [AIModelId](#aimodelid).
Failed requests surface as an AI SDK `APICallError`, wrapped in a
`RetryError` when the AI SDK retried it; use [getAIError](#getaierror) to read
the normalized [AIError](#aierror) details from either.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AICreateProviderOptions`](#aicreateprovideroptions) | Provider options. |

###### Returns

[`AIProvider`](#aiprovider)

A provider instance compatible with the [ai](https://ai-sdk.dev/) library.

##### getUpstreamModels()

> **getUpstreamModels**: (`options?`: [`AIGetUpstreamModelsOptions`](#aigetupstreammodelsoptions)) => [`AIUpstreamModel`](#aiupstreammodel)[]

Gets the models of the configured upstream AI providers, as managed in
Settings → AI → Models (catalog models plus user-defined ones).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AIGetUpstreamModelsOptions`](#aigetupstreammodelsoptions) | Optional provider filter. |

###### Returns

[`AIUpstreamModel`](#aiupstreammodel)[]

An array of upstream models.

##### getUpstreamProviders()

> **getUpstreamProviders**: () => [`AIUpstreamProvider`](#aiupstreamprovider)[]

Gets the list of configured upstream AI providers.

###### Returns

[`AIUpstreamProvider`](#aiupstreamprovider)[]

An array of configured AI upstream providers.

##### onUpstreamModelsChange()

> **onUpstreamModelsChange**: (`callback`: (`models`: [`AIUpstreamModel`](#aiupstreammodel)[]) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Registers a callback invoked whenever the upstream model list changes
(user edits, provider added or removed).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`models`: [`AIUpstreamModel`](#aiupstreammodel)[]) => `void` | Receives the current list of upstream models. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

A handle to stop listening.

***

### AIStructuredOutputSettings

> **AIStructuredOutputSettings** = `object`

Settings for structured output (`responseFormat: { type: "json" }`).

#### Properties

##### strict?

> `optional` **strict**: `boolean`

Whether the provider must follow the response schema exactly.

Strict mode requires a schema compatible with the provider's strict
subset: every property listed in `required` and
`additionalProperties: false` on every object.

###### Default

```ts
false
```

***

### AIUpstreamModel

> **AIUpstreamModel** = `object`

A model available on a configured upstream AI provider, as managed in
Settings → AI → Models.

#### Properties

##### capabilities

> **capabilities**: [`AIUpstreamModelCapability`](#aiupstreammodelcapability)[]

The capabilities known to be supported.

Absence means unsupported OR unknown; check [support](#support) to tell the
two apart.

##### contextWindow?

> `optional` **contextWindow**: `number`

The context window in tokens, when known.

##### displayName

> **displayName**: `string`

##### id

> **id**: `string`

The model name without the provider prefix. May itself contain `/`, for
example OpenRouter ids such as `anthropic/claude-sonnet-4.6`.

##### modelId

> **modelId**: [`AIModelId`](#aimodelid)

Ready-made id for [AIProvider.languageModel](#aiprovider): `` `${providerId}/${id}` ``.

##### outputTokenLimit?

> `optional` **outputTokenLimit**: `number`

The maximum output tokens, when known.

##### providerId

> **providerId**: [`AIUpstreamProviderId`](#aiupstreamproviderid)

The alias of the provider serving this model; matches [AIUpstreamProvider.id](#id-1).

##### reasoningEfforts

> **reasoningEfforts**: [`AIUpstreamModelReasoningEffort`](#aiupstreammodelreasoningeffort)[]

The accepted reasoning efforts. Empty when the model declares no constraint.

##### source

> **source**: [`AIUpstreamModelSource`](#aiupstreammodelsource)

##### support

> **support**: `object`

Tri-state knowledge for every capability.

###### compaction

> **compaction**: [`AIUpstreamModelCapabilitySupport`](#aiupstreammodelcapabilitysupport)

###### reasoning

> **reasoning**: [`AIUpstreamModelCapabilitySupport`](#aiupstreammodelcapabilitysupport)

###### structuredOutput

> **structuredOutput**: [`AIUpstreamModelCapabilitySupport`](#aiupstreammodelcapabilitysupport)

###### temperature

> **temperature**: [`AIUpstreamModelCapabilitySupport`](#aiupstreammodelcapabilitysupport)

###### toolCalling

> **toolCalling**: [`AIUpstreamModelCapabilitySupport`](#aiupstreammodelcapabilitysupport)

***

### AIUpstreamModelCapability

> **AIUpstreamModelCapability** = `"TOOL_CALLING"` \| `"REASONING"` \| `"STRUCTURED_OUTPUT"` \| `"TEMPERATURE"` \| `"COMPACTION"`

A capability an upstream model is known to support.

***

### AIUpstreamModelCapabilitySupport

> **AIUpstreamModelCapabilitySupport** = `"SUPPORTED"` \| `"UNSUPPORTED"` \| `"UNKNOWN"`

Tri-state capability knowledge for an upstream model.

Caido is permissive: `UNKNOWN` capabilities are still sent to the provider,
only `UNSUPPORTED` ones are constrained.

***

### AIUpstreamModelReasoningEffort

> **AIUpstreamModelReasoningEffort** = `"minimal"` \| `"low"` \| `"medium"` \| `"high"` \| `"xhigh"` \| `"max"`

A reasoning effort accepted by an upstream model, from least to most.

***

### AIUpstreamModelSource

> **AIUpstreamModelSource** = `"CATALOG"` \| `"CUSTOM"`

Where an upstream model comes from.

- `CATALOG`: from Caido's model catalog.
- `CUSTOM`: user-defined in Settings → AI → Models, replacing the catalog
  model of the same id.

***

### AIUpstreamProvider

> **AIUpstreamProvider** = `object`

AI upstream provider information.
Only configured providers are returned.

#### Properties

##### api

> **api**: [`AIUpstreamProviderApi`](#aiupstreamproviderapi)

The response API the provider speaks.

##### auth

> **auth**: [`AIUpstreamProviderAuth`](#aiupstreamproviderauth)

How the provider authenticates.

##### authentication

> **authentication**: [`AIUpstreamProviderAuthentication`](#aiupstreamproviderauthentication)

Whether the stored credentials are currently usable.

##### id

> **id**: [`AIUpstreamProviderId`](#aiupstreamproviderid)

The provider alias, used before the first `/` of an [AIModelId](#aimodelid).

##### kind

> **kind**: [`AIUpstreamProviderKind`](#aiupstreamproviderkind)

The provider kind.

***

### AIUpstreamProviderApi

> **AIUpstreamProviderApi** = `"ANTHROPIC"` \| `"BEDROCK"` \| `"CHATGPT_RESPONSE"` \| `"GEMINI"` \| `"OPENAI_COMPLETION"` \| `"OPENAI_RESPONSE"` \| `"OPENROUTER"` \| `"XAI_COMPLETION"` \| `"XAI_RESPONSE"`

The response API a provider speaks.

***

### AIUpstreamProviderAuth

> **AIUpstreamProviderAuth** = `"API_KEY"` \| `"OAUTH"` \| `"AWS"` \| `"NONE"`

How a configured upstream provider authenticates.

- `API_KEY`: the user stored an API key.
- `OAUTH`: the user signed in with a subscription account.
- `AWS`: requests are signed with AWS credentials, from a stored key pair
  or an AWS profile on the machine running Caido.
- `NONE`: no credentials are stored (for example a local endpoint).

***

### AIUpstreamProviderAuthentication

> **AIUpstreamProviderAuthentication** = `"VALID"` \| `"UNVERIFIED"` \| `"INVALID"`

Whether the stored credentials of a configured upstream provider are
currently usable.

- `VALID`: the last request or sign-in succeeded.
- `UNVERIFIED`: the credentials have not been used yet.
- `INVALID`: the backend saw the credentials rejected. It flips back to
  `VALID` after the next successful request or sign-in.

***

### AIUpstreamProviderId

> **AIUpstreamProviderId** = `string`

AI upstream provider ID.

***

### AIUpstreamProviderKind

> **AIUpstreamProviderKind** = `"ANTHROPIC"` \| `"BEDROCK"` \| `"CHATGPT"` \| `"CUSTOM"` \| `"GEMINI"` \| `"OPENAI"` \| `"OPENROUTER"` \| `"XAI"`

The kind of a configured upstream provider.

`CUSTOM` providers are user-defined endpoints; every other kind is one of
the providers Caido offers directly.

***

### createAIModelId()

> `const` **createAIModelId**: (`providerId`: [`AIUpstreamProviderId`](#aiupstreamproviderid), `modelId`: `string`) => [`AIModelId`](#aimodelid)

Builds an [AIModelId](#aimodelid) from a provider alias and a model name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | [`AIUpstreamProviderId`](#aiupstreamproviderid) |
| `modelId` | `string` |

#### Returns

[`AIModelId`](#aimodelid)

***

### getAIError()

> `const` **getAIError**: (`error`: `unknown`) => [`AIError`](#aierror) \| `undefined`

Reads the normalized [AIError](#aierror) of a failed AI request.

Accepts the error thrown by `generateText` or passed to the `onError`
callback / `error` stream part of `streamText`: an AI SDK `APICallError`, or
the `RetryError` wrapping it once retries are exhausted, in which case the
last attempt's error is read.

Failures that never reached the Caido backend (for example a network
error) carry no `data`, so this returns `undefined` for them.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

#### Returns

[`AIError`](#aierror) \| `undefined`
