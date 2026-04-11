# Websockets

### MessageViewModeOptions

> **MessageViewModeOptions** = `object`

Options for defining a custom message view mode.

#### Properties

##### label

> **label**: `string`

The label of the view mode.

##### view

> **view**: [`ComponentDefinition`](utils.md#componentdefinition)

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

> **addMessageViewMode**: (`options`: [`MessageViewModeOptions`](#messageviewmodeoptions)) => `void`

Add a custom message view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`MessageViewModeOptions`](#messageviewmodeoptions) | The view mode options. |

###### Returns

`void`
