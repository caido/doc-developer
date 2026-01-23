# Automate

### AutomateEntry

> **AutomateEntry** = `object`

A automate entry.

#### Properties

##### createdAt

> **createdAt**: `Date`

The date the entry was created.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the entry.

##### name

> **name**: `string`

The name of the entry.

***

### AutomatePageContext

> **AutomatePageContext** = `object`

Automate page context.

#### Properties

##### kind

> **kind**: `"Automate"`

##### requestSelection

> **requestSelection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

##### selection

> **selection**: [`Selection`](utils.md#selection)\<\{ `id`: [`ID`](utils.md#id); `kind`: `"AutomateSession"`; \} \| \{ `id`: [`ID`](utils.md#id); `kind`: `"AutomateEntry"`; \}\>

***

### AutomateSDK

> **AutomateSDK** = `object`

Utilities to interact with the Automate page.

#### Properties

##### addEntryIndicator()

> **addEntryIndicator**: (`entryId`: [`ID`](utils.md#id), `indicator`: [`AddIndicatorOptions`](utils.md#addindicatoroptions)) => [`Indicator`](utils.md#indicator)

Add an indicator to an automate entry.
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
const indicator = sdk.automate.addEntryIndicator(entryId, {
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

##### getEntries()

> **getEntries**: (`sessionId`: [`ID`](utils.md#id)) => [`AutomateEntry`](#automateentry)[]

Get the list of all automate entries.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session to get the entries of. |

###### Returns

[`AutomateEntry`](#automateentry)[]

The list of all automate entries.

##### getSessions()

> **getSessions**: () => [`AutomateSession`](#automatesession)[]

Get the list of all automate sessions.

###### Returns

[`AutomateSession`](#automatesession)[]

The list of all automate sessions.

***

### AutomateSession

> **AutomateSession** = `object`

A automate session.

#### Properties

##### createdAt

> **createdAt**: `Date`

The date the session was created.

##### entryIds

> **entryIds**: [`ID`](utils.md#id)[]

The IDs of all entries in this session.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the session.

##### name

> **name**: `string`

The name of the session.
