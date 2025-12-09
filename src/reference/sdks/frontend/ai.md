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

> **AIProvider** = `ProviderV2` & (`modelId`: `string`, `settings?`: [`AILanguageModelSettings`](#ailanguagemodelsettings)) => `LanguageModelV2`

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
