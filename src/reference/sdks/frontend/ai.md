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

Gets the list of upstream AI providers with their configuration status.

###### Returns

[`AIUpstreamProvider`](#aiupstreamprovider)[]

An array of AI upstream providers with their configuration status.

***

### AIUpstreamProvider

> **AIUpstreamProvider** = `object`

AI upstream provider information.

#### Properties

##### id

> **id**: [`AIUpstreamProviderId`](#aiupstreamproviderid)

##### status

> **status**: [`AIUpstreamProviderStatus`](#aiupstreamproviderstatus)

***

### AIUpstreamProviderId

> **AIUpstreamProviderId** = `"anthropic"` \| `"google"` \| `"openai"` \| `"openrouter"`

AI upstream provider ID.

***

### AIUpstreamProviderStatus

> **AIUpstreamProviderStatus** = `"Ready"` \| `"Missing"`

AI upstream provider status.
Ready: The upstream provider is ready to use.
Missing: The upstream provider is not configured.
