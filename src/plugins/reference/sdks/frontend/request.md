# Request

### RequestDraft

> **RequestDraft** = [`Prettify`](utils.md#prettify)\<[`As`](utils.md#as)\<`"RequestDraft"`\> & `object`\>

A draft request that has not yet been saved to the database.

***

### RequestFull

> **RequestFull** = [`Prettify`](utils.md#prettify)\<[`As`](utils.md#as)\<`"RequestFull"`\> & `object`\>

A complete request with all metadata and raw content.

***

### RequestMeta

> **RequestMeta** = [`Prettify`](utils.md#prettify)\<[`As`](utils.md#as)\<`"RequestMeta"`\> & `object`\>

Metadata about a request without the raw content.

***

### RequestViewModeOptions

> **RequestViewModeOptions** = `object`

Options for defining a custom request view mode.

#### Properties

##### label

> **label**: `string`

The label of the view mode.

##### view

> **view**: [`ComponentDefinition`](utils.md#componentdefinition)

The component to render when the view mode is selected.

##### when()?

> `optional` **when**: (`request`: [`RequestFull`](#requestfull) \| [`RequestDraft`](#requestdraft)) => `boolean`

A function that determines if the view mode should be shown for a given request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`RequestFull`](#requestfull) \| [`RequestDraft`](#requestdraft) |

###### Returns

`boolean`
