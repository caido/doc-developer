# Websockets

### MessageViewModeOptions

> **MessageViewModeOptions**\<`TProps`\> = `object`

Options for defining a custom message view mode.

#### Type Parameters

| Type Parameter |
| ------ |
| `TProps` *extends* [`MessageViewModeProps`](#messageviewmodeprops) \| [`MessageViewModePropsInternal`](#messageviewmodepropsinternal) |

#### Properties

##### label

> **label**: `string`

The label of the view mode.

##### view

> **view**: [`ComponentDefinition`](utils.md#componentdefinition)\<`TProps`\>

The component to render when the view mode is selected.

##### when()?

> `optional` **when**: (`message`: [`StreamWsMessageMeta`](#streamwsmessagemeta)) => `boolean`

A function that determines if the view mode should be shown for a given message.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`StreamWsMessageMeta`](#streamwsmessagemeta) |

###### Returns

`boolean`

***

### MessageViewModeProps

> **MessageViewModeProps** = [`ComponentPropsWithSdk`](utils.md#componentpropswithsdk)\<[`MessageViewModePropsInternal`](#messageviewmodepropsinternal)\>

The props for the message view mode.

***

### MessageViewModePropsInternal

> **MessageViewModePropsInternal** = `object`

The internal props for the message view mode.

#### Properties

##### message

> **message**: [`StreamWsMessageMeta`](#streamwsmessagemeta)

##### view

> **view**: `EditorView`

***

### StreamWsMessageMeta

> **StreamWsMessageMeta** = [`Prettify`](utils.md#prettify)\<[`As`](utils.md#as)\<`"StreamWsMessageMeta"`\> & `object`\>

A complete message with all metadata and raw content.

***

### WebsocketPageContext

> **WebsocketPageContext** = `object`

Certificate page context.

#### Properties

##### kind

> **kind**: `"Websocket"`

***

### WebsocketSDK

> **WebsocketSDK** = `object`

Utilities to interact with websockets

#### Properties

##### addMessageViewMode()

> **addMessageViewMode**: (`options`: [`MessageViewModeOptions`](#messageviewmodeoptions)\<[`MessageViewModeProps`](#messageviewmodeprops)\>) => `void`

Add a custom message view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`MessageViewModeOptions`](#messageviewmodeoptions)\<[`MessageViewModeProps`](#messageviewmodeprops)\> | The view mode options. |

###### Returns

`void`
