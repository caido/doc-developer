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

> **CustomSlotContent** = [`DefineSlotContent`](other.md#defineslotcontent)\<`"Custom"`, \{ `definition`: [`ComponentDefinition`](utils.md#componentdefinition); \}\>

Content for a custom component slot.

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

> **SlotContent** = [`ButtonSlotContent`](#buttonslotcontent) \| [`CustomSlotContent`](#customslotcontent) \| [`CommandSlotContent`](#commandslotcontent)

Union type of all possible slot content types.
