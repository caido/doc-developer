# AI

### AILanguageModelSettings

> **AILanguageModelSettings** = `object`

Settings for AI language model.

#### Properties

##### capabilities?

> `optional` **capabilities**: `object`

###### reasoning

> **reasoning**: `boolean`

###### structured\_output

> **structured\_output**: `boolean`

##### reasoning?

> `optional` **reasoning**: [`AIReasoningSettings`](#aireasoningsettings)

***

### AIProvider

> **AIProvider** = `ProviderV3` & (`modelId`: `string`, `settings?`: [`AILanguageModelSettings`](#ailanguagemodelsettings)) => `LanguageModelV3`

Official AI Provider to be used by the [ai](https://ai-sdk.dev/) library.

***

### AIReasoningSettings

> **AIReasoningSettings** = `object`

Settings for AI reasoning.

#### Properties

##### effort

> **effort**: `"low"` \| `"medium"` \| `"high"`

***

### AiSDK

> **AiSDK** = `object`

Utilities to interact with AI.

#### Properties

##### createProvider()

> **createProvider**: () => [`AIProvider`](#aiprovider)

Creates a new AI provider instance that can be used with the [ai](https://ai-sdk.dev/) library.

###### Returns

[`AIProvider`](#aiprovider)

A provider instance compatible with the [ai](https://ai-sdk.dev/) library.

##### getUpstreamProviders()

> **getUpstreamProviders**: () => [`AIUpstreamProvider`](#aiupstreamprovider)[]

Gets the list of configured upstream AI providers.

###### Returns

[`AIUpstreamProvider`](#aiupstreamprovider)[]

An array of configured AI upstream providers.

***

### AIUpstreamProvider

> **AIUpstreamProvider** = `object`

AI upstream provider information.
Only configured providers are returned.

#### Properties

##### api

> **api**: [`AIUpstreamProviderApi`](#aiupstreamproviderapi)

##### id

> **id**: [`AIUpstreamProviderId`](#aiupstreamproviderid)

***

### AIUpstreamProviderApi

> **AIUpstreamProviderApi** = `"ANTHROPIC"` \| `"GEMINI"` \| `"OPENAI_COMPLETION"` \| `"OPENAI_RESPONSE"` \| `"OPENROUTER"`

The response API a provider speaks.

***

### AIUpstreamProviderId

> **AIUpstreamProviderId** = `string`

AI upstream provider ID.
