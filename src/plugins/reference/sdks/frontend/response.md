# Response

### ResponseFull

> **ResponseFull** = [`Prettify`](utils.md#prettify)\<[`As`](utils.md#as)\<`"ResponseFull"`\> & `object`\>

A complete response with all metadata and raw content.

***

### ResponseViewModeOptions

> **ResponseViewModeOptions** = `object`

Options for defining a custom response view mode.

#### Properties

##### label

> **label**: `string`

The label of the view mode.

##### view

> **view**: [`ComponentDefinition`](utils.md#componentdefinition)

The component to render when the view mode is selected.

##### when()?

> `optional` **when**: (`response`: [`ResponseFull`](#responsefull), `request`: [`RequestMeta`](request.md#requestmeta) \| [`RequestFull`](request.md#requestfull)) => `boolean`

A function that determines if the view mode should be shown for a given response.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`ResponseFull`](#responsefull) |
| `request` | [`RequestMeta`](request.md#requestmeta) \| [`RequestFull`](request.md#requestfull) |

###### Returns

`boolean`
