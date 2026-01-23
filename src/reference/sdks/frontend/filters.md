# Filters

### CurrentFilterChangeEvent

> **CurrentFilterChangeEvent** = `object`

Event fired when the current filter changes.

#### Properties

##### filterId

> **filterId**: [`ID`](utils.md#id) \| `undefined`

The ID of the newly selected filter, or undefined if no filter is selected.

***

### Filter

> **Filter** = `object`

Represents a filter.

#### Properties

##### alias

> **alias**: `string`

The alias of the filter.
This alias is used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`).

##### id

> **id**: [`ID`](utils.md#id)

The ID of the filter.

##### name

> **name**: `string`

The name of the filter.

##### query

> **query**: [`HTTPQL`](utils.md#httpql)

The HTTPQL expression of the filter.

***

### FilterPageContext

> **FilterPageContext** = `object`

Filter page context.

#### Properties

##### kind

> **kind**: `"Filter"`

##### selection

> **selection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

***

### FiltersSDK

> **FiltersSDK** = `object`

SDK for interacting with the Filters page.

#### Properties

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`FilterSlotContent`](filter.md#filterslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
sdk.filters.addToSlot(FilterSlot.UpdateHeader, {
  type: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});

sdk.filters.addToSlot(FilterSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});

sdk.filters.addToSlot(FilterSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

##### create()

> **create**: (`options`: `object`) => `Promise`\<[`Filter`](#filter)\>

Creates a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `alias`: `string`; `name`: `string`; `query`: [`HTTPQL`](utils.md#httpql); \} | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. Used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`). Should be unique and follow the format `[a-zA-Z0-9_-]+`. |
| `options.name` | `string` | The name of the filter. Should be unique. |
| `options.query` | [`HTTPQL`](utils.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](#filter)\>

The created filter.

##### delete()

> **delete**: (`id`: [`ID`](utils.md#id)) => `Promise`\<`void`\>

Deletes a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the filter to delete. |

###### Returns

`Promise`\<`void`\>

##### getAll()

> **getAll**: () => [`Filter`](#filter)[]

Gets all filters.

###### Returns

[`Filter`](#filter)[]

The filters.

##### getCurrentFilter()

> **getCurrentFilter**: () => [`Filter`](#filter) \| `undefined`

Get the currently selected filter.

###### Returns

[`Filter`](#filter) \| `undefined`

The currently selected filter, or undefined if no filter is selected.

##### onCurrentFilterChange()

> **onCurrentFilterChange**: (`callback`: (`event`: [`CurrentFilterChangeEvent`](#currentfilterchangeevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to current filter changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`CurrentFilterChangeEvent`](#currentfilterchangeevent)) => `void` | The callback to call when the selected filter changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to filter changes.

###### Example

```ts
const handler = sdk.filters.onCurrentFilterChange((event) => {
  console.log(`Filter ${event.filterId} got selected!`);
});

// Later, stop listening
handler.stop();
```

##### update()

> **update**: (`id`: [`ID`](utils.md#id), `options`: `object`) => `Promise`\<[`Filter`](#filter)\>

Updates a filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the filter to update. |
| `options` | \{ `alias`: `string`; `name`: `string`; `query`: [`HTTPQL`](utils.md#httpql); \} | Options for the filter. |
| `options.alias` | `string` | The alias of the filter. |
| `options.name` | `string` | The name of the filter. |
| `options.query` | [`HTTPQL`](utils.md#httpql) | The HTTPQL query of the filter. |

###### Returns

`Promise`\<[`Filter`](#filter)\>

The updated filter.

***

### FilterSlot

> `const` **FilterSlot**: `object`

The slots in the Filters UI.

#### Type Declaration

##### CreateHeader

> `readonly` **CreateHeader**: `"create-header"`

The header area of the preset form create component.

##### UpdateHeader

> `readonly` **UpdateHeader**: `"update-header"`

The header area of the preset form update component.
