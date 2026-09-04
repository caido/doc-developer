# Other

### ChildState

> **ChildState** = \{ `kind`: `"Empty"`; \} \| \{ `kind`: `"NotLoaded"`; \} \| \{ `items`: [`ID`](utils.md#id)[]; `kind`: `"Loaded"`; \}

***

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

### ResolvedAPI

> **ResolvedAPI**\<`T`\> = `T` *extends* `object` ? `A` : `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### ResolvedEvents

> **ResolvedEvents**\<`T`, `E`\> = `T` *extends* `object` ? `A` : `E`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `E` |

***

### Routes

> **Routes** = *typeof* [`Routes`](navigation.md#routes)\[keyof *typeof* [`Routes`](#routes-1)\]

***

### ScopeSlot

> **ScopeSlot** = *typeof* [`ScopeSlot`](scopes.md#scopeslot)\[keyof *typeof* [`ScopeSlot`](#scopeslot-1)\]

***

### SearchSlot

> **SearchSlot** = *typeof* [`SearchSlot`](search.md#searchslot)\[keyof *typeof* [`SearchSlot`](#searchslot-1)\]

***

### SettingsSlot

> **SettingsSlot** = *typeof* [`SettingsSlot`](#settingsslot)\[keyof *typeof* [`SettingsSlot`](#settingsslot-1)\]

***

### SettingsSlotContent

> **SettingsSlotContent** = `object`

#### Properties

##### plugins-section

> **plugins-section**: [`SettingsPluginSlotContent`](settings.md#settingspluginslotcontent)

***

### SitemapRootEntry

> **SitemapRootEntry** = `object`

#### Properties

##### childState

> **childState**: [`ChildState`](#childstate)

The child state of the entry.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the entry.

##### label

> **label**: `string`

The label of the entry.

***

### Source

> **Source** = *typeof* [`Source`](match-and-replace.md#source)\[keyof *typeof* [`Source`](#source-1)\]

***

### API

Renames and re-exports [Caido](index.md#caido)
