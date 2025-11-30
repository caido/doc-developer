# Other

### CommandID

> **CommandID** = `string` & `object`

A unique command identifier.

#### Type Declaration

##### \_\_commandId?

> `optional` **\_\_commandId**: `never`

#### Example

```ts
"my-super-command"
```

***

### DefineSlotContent

> **DefineSlotContent**\<`TType`, `P`\> = [`Prettify`](utils.md#prettify)\<`object` & `P`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `string` |
| `P` *extends* `Record`\<`string`, `unknown`\> |

***

### FilterSlot

> **FilterSlot** = *typeof* [`FilterSlot`](filters.md#filterslot)\[keyof *typeof* [`FilterSlot`](#filterslot-1)\]

***

### FooterSlot

> **FooterSlot** = *typeof* [`FooterSlot`](footer.md#footerslot)\[keyof *typeof* [`FooterSlot`](#footerslot-1)\]

***

### HTTPHistorySlot

> **HTTPHistorySlot** = *typeof* [`HTTPHistorySlot`](http-history.md#httphistoryslot)\[keyof *typeof* [`HTTPHistorySlot`](#httphistoryslot-1)\]

***

### HTTPHistorySlotContent

> **HTTPHistorySlotContent** = `object`

#### Properties

##### toolbar-primary

> **toolbar-primary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### JSONPrimitive

> **JSONPrimitive** = `string` \| `number` \| `boolean` \| `null` \| `undefined`

***

### KeepOperation

> **KeepOperation**\<`T`\> = `T` & `object`

#### Type Declaration

##### \_\_operation?

> `optional` **\_\_operation**: `never`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### MatchReplaceSlot

> **MatchReplaceSlot** = *typeof* [`MatchReplaceSlot`](match-and-replace.md#matchreplaceslot)\[keyof *typeof* [`MatchReplaceSlot`](#matchreplaceslot-1)\]

***

### NotAssignableToJson

> **NotAssignableToJson** = `bigint` \| `symbol` \| `Function`

***

### ReplaySlot

> **ReplaySlot** = *typeof* [`ReplaySlot`](replay.md#replayslot)\[keyof *typeof* [`ReplaySlot`](#replayslot-1)\]

***

### ReplaySlotContent

> **ReplaySlotContent** = `object`

#### Properties

##### session-toolbar-primary

> **session-toolbar-primary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

##### session-toolbar-secondary

> **session-toolbar-secondary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

##### topbar

> **topbar**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### Routes

> **Routes** = *typeof* [`Routes`](navigation.md#routes)\[keyof *typeof* [`Routes`](#routes-1)\]

***

### ScopeSlot

> **ScopeSlot** = *typeof* [`ScopeSlot`](scopes.md#scopeslot)\[keyof *typeof* [`ScopeSlot`](#scopeslot-1)\]

***

### ScopeSlotContent

> **ScopeSlotContent** = `object`

#### Properties

##### create-header

> **create-header**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

##### update-header

> **update-header**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### SearchSlot

> **SearchSlot** = *typeof* [`SearchSlot`](search.md#searchslot)\[keyof *typeof* [`SearchSlot`](#searchslot-1)\]

***

### SearchSlotContent

> **SearchSlotContent** = `object`

#### Properties

##### search-toolbar-primary

> **search-toolbar-primary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### Source

> **Source** = *typeof* [`Source`](match-and-replace.md#source)\[keyof *typeof* [`Source`](#source-1)\]

***

### API

Renames and re-exports [Caido](index.md#caido)
