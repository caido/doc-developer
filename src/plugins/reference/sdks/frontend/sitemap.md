# Sitemap

### SitemapEntry

> **SitemapEntry** = `object`

An entry in sitemap.

#### Properties

##### childState

> **childState**: [`ChildState`](other.md#childstate)

The child state of the entry.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the entry.

##### kind

> **kind**: [`SitemapEntryKind`](#sitemapentrykind)

The kind of the entry.

##### label

> **label**: `string`

The label of the entry.

##### parentId?

> `optional` **parentId**: [`ID`](utils.md#id)

The ID of the parent entry.

***

### SitemapEntryChildStateUpdateEvent

> **SitemapEntryChildStateUpdateEvent** = `object`

Event fired when the child state of a sitemap entry changes.

#### Properties

##### entryId

> **entryId**: [`ID`](utils.md#id)

The ID of the entry that changed.

##### newChildState

> **newChildState**: [`ChildState`](other.md#childstate)

The new child state of the entry.

***

### SitemapEntryKind

> **SitemapEntryKind** = *typeof* [`SitemapEntryKind`](#sitemapentrykind)\[keyof *typeof* [`SitemapEntryKind`](#sitemapentrykind-2)\]

The kind of a sitemap entry.

#### Example

```ts
const entry = {
  id: "123",
  label: "Example",
  kind: SitemapEntryKind.Request,
};
```

***

### SitemapPageContext

> **SitemapPageContext** = `object`

Sitemap page context.

#### Properties

##### entrySelection

> **entrySelection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

##### kind

> **kind**: `"Sitemap"`

##### requestSelection

> **requestSelection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

***

### SitemapSDK

> **SitemapSDK** = `object`

Utilities to interact with the Sitemap page.

#### Properties

##### addEntryIndicator()

> **addEntryIndicator**: (`entryId`: [`ID`](utils.md#id), `indicator`: [`AddIndicatorOptions`](utils.md#addindicatoroptions)) => [`Indicator`](utils.md#indicator)

Add an indicator to a sitemap session.
Indicators are displayed next to the entry name in the collections tree.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entryId` | [`ID`](utils.md#id) | The ID of the entry to add the indicator to. |
| `indicator` | [`AddIndicatorOptions`](utils.md#addindicatoroptions) | The indicator configuration. |

###### Returns

[`Indicator`](utils.md#indicator)

A handle object with a `remove` method to remove the indicator.

###### Example

```ts
const indicator = sdk.sitemap.addEntryIndicator(entryId, {
  icon: "fas fa-exclamation-triangle",
  description: "Security warning",
});

// Later, remove the indicator
indicator.remove();
```

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

##### getChildren()

> **getChildren**: (`entryId`: [`ID`](utils.md#id)) => `Promise`\<[`SitemapEntry`](#sitemapentry)[]\>

Load children for a sitemap entry.
This will fetch and load children if they haven't been loaded yet.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entryId` | [`ID`](utils.md#id) | The ID of the entry to load children for. |

###### Returns

`Promise`\<[`SitemapEntry`](#sitemapentry)[]\>

Promise that resolves when children are loaded.

##### getScopeId()

> **getScopeId**: () => [`ID`](utils.md#id) \| `undefined`

Get the current scope ID.

###### Returns

[`ID`](utils.md#id) \| `undefined`

The current scope ID.

##### getTreeEntries()

> **getTreeEntries**: () => [`SitemapRootEntry`](other.md#sitemaprootentry)[]

Get the list of all sitemap entries in tree format.

###### Returns

[`SitemapRootEntry`](other.md#sitemaprootentry)[]

The list of all sitemap entries.

##### onEntryChildStateUpdate()

> **onEntryChildStateUpdate**: (`callback`: (`event`: [`SitemapEntryChildStateUpdateEvent`](#sitemapentrychildstateupdateevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Listen for child state updates on a sitemap entry.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`SitemapEntryChildStateUpdateEvent`](#sitemapentrychildstateupdateevent)) => `void` | The callback function that receives the entry ID and new child state. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

A handle object with a `stop` method to stop listening.

###### Example

```ts
const handle = sdk.sitemap.onEntryChildStateUpdate((entryId, newChildState) => {
  console.log(`Entry ${entryId} child state changed:`, newChildState);
});

// Later, stop listening
handle.stop();
```

##### setScope()

> **setScope**: (`id`: [`ID`](utils.md#id) \| `undefined`) => `void`

Set the current scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` | The ID of the scope to set. |

###### Returns

`void`

***

### SitemapEntryKind

> `const` **SitemapEntryKind**: `object`

The kind of a sitemap entry.

#### Type Declaration

##### Directory

> `readonly` **Directory**: `"DIRECTORY"`

##### Domain

> `readonly` **Domain**: `"DOMAIN"`

##### Request

> `readonly` **Request**: `"REQUEST"`

##### RequestBody

> `readonly` **RequestBody**: `"REQUEST_BODY"`

##### RequestQuery

> `readonly` **RequestQuery**: `"REQUEST_QUERY"`
