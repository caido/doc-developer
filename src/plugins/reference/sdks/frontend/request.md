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

### RequestReadableViewModeProps

> **RequestReadableViewModeProps** = [`RequestReadableViewModePropsInternal`](#requestreadableviewmodepropsinternal) & `object`

The props for the request read-only view mode.

#### Type Declaration

##### sdk

> **sdk**: [`Caido`](index.md#caido)

***

### RequestReadableViewModePropsInternal

> **RequestReadableViewModePropsInternal** = `object`

The internal props for the request read-only view mode.

#### Properties

##### request

> **request**: [`RequestFull`](#requestfull)

##### view

> **view**: `EditorView`

***

### RequestViewModeOptions

> **RequestViewModeOptions**\<`TProps`\> = `object`

Options for defining a custom request view mode.

#### Type Parameters

| Type Parameter |
| ------ |
| `TProps` *extends* [`RequestViewModeProps`](#requestviewmodeprops) |

#### Properties

##### label

> **label**: `string`

The label of the view mode.

##### view

> **view**: [`ComponentDefinition`](utils.md#componentdefinition)\<`TProps`\>

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

***

### RequestViewModeProps

> **RequestViewModeProps** = [`RequestReadableViewModeProps`](#requestreadableviewmodeprops) \| [`RequestWritableViewModeProps`](#requestwritableviewmodeprops) \| [`RequestReadableViewModePropsInternal`](#requestreadableviewmodepropsinternal) \| [`RequestWritableViewModePropsInternal`](#requestwritableviewmodepropsinternal)

The props group for the request view mode.

***

### RequestWritableViewModeProps

> **RequestWritableViewModeProps** = [`RequestWritableViewModePropsInternal`](#requestwritableviewmodepropsinternal) & `object`

The props for the request writable view mode.

#### Type Declaration

##### sdk

> **sdk**: [`Caido`](index.md#caido)

***

### RequestWritableViewModePropsInternal

> **RequestWritableViewModePropsInternal** = `object`

The internal props for the request writable view mode.

#### Properties

##### draft

> **draft**: [`RequestDraft`](#requestdraft)

##### request

> **request**: [`RequestFull`](#requestfull) \| `undefined`

##### view

> **view**: `EditorView`
