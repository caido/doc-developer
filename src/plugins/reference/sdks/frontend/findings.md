# Findings

### Finding

> **Finding** = `object`

Represents a [https://docs.caido.io/reference/features/logging/findings\|Finding](https://docs.caido.io/reference/features/logging/findings|Finding).

#### Properties

##### description?

> `optional` **description**: `string`

The description of the finding.

##### host

> **host**: `string`

The host of the request attached to this finding

##### id

> **id**: [`ID`](utils.md#id)

The ID of the finding.

##### path

> **path**: `string`

The path of the request attached to this finding

##### reporter

> **reporter**: `string`

The reporter of the finding.

##### title

> **title**: `string`

The title of the finding.

***

### FindingsPageContext

> **FindingsPageContext** = `object`

Findings page context.

#### Properties

##### kind

> **kind**: `"Findings"`

##### selection

> **selection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

***

### FindingsSDK

> **FindingsSDK** = `object`

Utilities to interact with findings

#### Properties

##### addRequestEditorExtension()

> **addRequestEditorExtension**: (`extension`: `Extension`) => `void`

Add an extension to the request editor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `extension` | `Extension` | The extension to add. |

###### Returns

`void`

##### addRequestViewMode()

> **addRequestViewMode**: (`options`: [`RequestViewModeOptions`](request.md#requestviewmodeoptions)) => `void`

Add a custom request view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`RequestViewModeOptions`](request.md#requestviewmodeoptions) | The view mode options. |

###### Returns

`void`

##### addResponseViewMode()

> **addResponseViewMode**: (`options`: [`ResponseViewModeOptions`](response.md#responseviewmodeoptions)) => `void`

Add a custom response view mode.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ResponseViewModeOptions`](response.md#responseviewmodeoptions) | The view mode options. |

###### Returns

`void`

##### createFinding()

> **createFinding**: (`requestId`: [`ID`](utils.md#id), `options`: `object`) => `Promise`\<[`Finding`](#finding) \| `undefined`\>

Create a [Finding](#finding).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestId` | [`ID`](utils.md#id) | The id of the request the finding is associated with. |
| `options` | \{ `dedupeKey?`: `string`; `description?`: `string`; `reporter`: `string`; `title`: `string`; \} | Options for the finding. |
| `options.dedupeKey?` | `string` | If a finding with the same deduplication key already exists, it will not create a new finding. |
| `options.description?` | `string` | The description of the finding. |
| `options.reporter` | `string` | The reporter of the finding. |
| `options.title` | `string` | The title of the finding. |

###### Returns

`Promise`\<[`Finding`](#finding) \| `undefined`\>

The created finding.
