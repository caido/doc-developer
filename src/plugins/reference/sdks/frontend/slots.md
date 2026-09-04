# Slots

### ButtonSlotContent

> **ButtonSlotContent** = [`DefineSlotContent`](other.md#defineslotcontent)\<`"Button"`, \{ `icon?`: `string`; `label`: `string`; `onClick`: () => `void`; \}\>

Content for a button slot.

***

### CommandSlotContent

> **CommandSlotContent** = [`DefineSlotContent`](other.md#defineslotcontent)\<`"Command"`, \{ `commandId`: [`CommandID`](other.md#commandid); `icon?`: `string`; \}\>

Content for a command slot.

***

### CustomSlotContent

> **CustomSlotContent**\<`TProps`\> = [`DefineSlotContent`](other.md#defineslotcontent)\<`"Custom"`, \{ `definition`: [`ComponentDefinition`](utils.md#componentdefinition)\<`TProps`\>; \}\>

Content for a custom component slot.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TProps` *extends* [`SlotContentPropsGroup`](#slotcontentpropsgroup) | [`SlotContentProps`](#slotcontentprops) |

***

### DefineAddToSlotFn()

> **DefineAddToSlotFn**\<`TMap`\> = \<`K`\>(`slot`: `K`, `spec`: `TMap`\[`K`\]) => `void`

A function type for adding content to slots.

#### Type Parameters

| Type Parameter |
| ------ |
| `TMap` *extends* `Record`\<`string`, [`DefineSlotContent`](other.md#defineslotcontent)\<`string`, `Record`\<`string`, `unknown`\>\>\> |

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `slot` | `K` |
| `spec` | `TMap`\[`K`\] |

#### Returns

`void`

***

### SlotContent

> **SlotContent**\<`TProps`\> = [`ButtonSlotContent`](#buttonslotcontent) \| [`CustomSlotContent`](#customslotcontent)\<`TProps`\> \| [`CommandSlotContent`](#commandslotcontent)

Union type of all possible slot content types.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TProps` *extends* [`SlotContentPropsGroup`](#slotcontentpropsgroup) | [`SlotContentProps`](#slotcontentprops) |

***

### SlotContentProps

> **SlotContentProps** = [`SlotContentPropsInternal`](#slotcontentpropsinternal) & `object`

The props for a slot content.

#### Type Declaration

##### sdk

> **sdk**: [`Caido`](index.md#caido)

***

### SlotContentPropsGroup

> **SlotContentPropsGroup** = [`SlotContentProps`](#slotcontentprops) \| [`SlotContentPropsInternal`](#slotcontentpropsinternal)

The props group for a slot content.

***

### SlotContentPropsInternal

> **SlotContentPropsInternal** = `object`

The internal props for a slot content.
