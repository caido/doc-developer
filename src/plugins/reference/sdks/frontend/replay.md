# Replay

### CurrentReplaySessionChangeEvent

> **CurrentReplaySessionChangeEvent** = `object`

Event fired when the current replay session changes.

#### Properties

##### sessionId

> **sessionId**: [`ID`](utils.md#id) \| `undefined`

The ID of the newly selected session, or undefined if no session is selected.

***

### OpenTabOptions

> **OpenTabOptions** = `object`

Options for opening a tab.

#### Properties

##### select?

> `optional` **select**: `boolean`

Whether to select the tab after opening it.
Defaults to true.

***

### ReplayCollection

> **ReplayCollection** = `object`

A collection in Replay.

#### Properties

##### id

> **id**: [`ID`](utils.md#id)

The ID of the collection.

##### name

> **name**: `string`

The name of the collection.

##### sessionIds

> **sessionIds**: [`ID`](utils.md#id)[]

The sessions in the collection.

***

### ReplayCollectionCreatedEvent

> **ReplayCollectionCreatedEvent** = `object`

Event fired when a replay collection is created.

#### Properties

##### collection

> **collection**: [`ReplayCollection`](#replaycollection)

The newly created replay collection.

***

### ReplayEntry

> **ReplayEntry** = `object`

A replay entry.

#### Properties

##### id

> **id**: [`ID`](utils.md#id)

The ID of the entry.

##### requestId?

> `optional` **requestId**: [`ID`](utils.md#id)

The ID of the request associated with this entry, if any.

##### sessionId

> **sessionId**: [`ID`](utils.md#id)

The ID of the session this entry belongs to.

***

### ReplayPageContext

> **ReplayPageContext** = `object`

Replay page context.

#### Properties

##### kind

> **kind**: `"Replay"`

##### selection

> **selection**: [`Selection`](utils.md#selection)\<[`ReplaySessionId`](#replaysessionid)\>

***

### ReplaySDK

> **ReplaySDK** = `object`

Utilities to interact with Replay.

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

Add a custom view mode for requests.

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

##### addSessionIndicator()

> **addSessionIndicator**: (`sessionId`: [`ID`](utils.md#id), `indicator`: [`AddIndicatorOptions`](utils.md#addindicatoroptions)) => [`Indicator`](utils.md#indicator)

Add an indicator to a replay session.
Indicators are displayed next to the session name in the collections tree.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session to add the indicator to. |
| `indicator` | [`AddIndicatorOptions`](utils.md#addindicatoroptions) | The indicator configuration. |

###### Returns

[`Indicator`](utils.md#indicator)

A handle object with a `remove` method to remove the indicator.

###### Example

```ts
const indicator = sdk.replay.addSessionIndicator(sessionId, {
  icon: "fas fa-exclamation-triangle",
  description: "Security warning",
});

// Later, remove the indicator
indicator.remove();
```

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`ReplaySlotContent`](other.md#replayslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
addToSlot(ReplaySlot.SessionToolbarPrimary, {
  kind: "Command",
  commandId: "my-command",
  icon: "my-icon",
});

addToSlot(ReplaySlot.SessionToolbarSecondary, {
  kind: "Custom",
  component: MyComponent,
});

addToSlot(ReplaySlot.Topbar, {
  kind: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});
```

##### closeTab()

> **closeTab**: (`sessionId`: [`ID`](utils.md#id)) => `void`

Close a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session to close. |

###### Returns

`void`

##### createCollection()

> **createCollection**: (`name`: `string`) => `Promise`\<[`ReplayCollection`](#replaycollection)\>

Create a new collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the collection to create. |

###### Returns

`Promise`\<[`ReplayCollection`](#replaycollection)\>

##### createSession()

> **createSession**: (`source`: [`RequestSource`](#requestsource), `collectionId?`: [`ID`](utils.md#id)) => `Promise`\<`void`\>

Create a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | [`RequestSource`](#requestsource) | - |
| `collectionId?` | [`ID`](utils.md#id) | The ID of the collection to add the request. |

###### Returns

`Promise`\<`void`\>

##### deleteCollection()

> **deleteCollection**: (`id`: [`ID`](utils.md#id)) => `Promise`\<`boolean`\>

Delete a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the collection to delete. |

###### Returns

`Promise`\<`boolean`\>

Whether the collection was deleted.

##### deleteSessions()

> **deleteSessions**: (`sessionIds`: [`ID`](utils.md#id)[]) => `Promise`\<[`ID`](utils.md#id)[]\>

Delete a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionIds` | [`ID`](utils.md#id)[] | The IDs of the sessions to delete. |

###### Returns

`Promise`\<[`ID`](utils.md#id)[]\>

##### getCollections()

> **getCollections**: () => [`ReplayCollection`](#replaycollection)[]

Get the list of all replay collections.

###### Returns

[`ReplayCollection`](#replaycollection)[]

The list of all replay collections.

##### getCurrentSession()

> **getCurrentSession**: () => [`ReplaySession`](#replaysession) \| `undefined`

Get the currently selected replay session.

###### Returns

[`ReplaySession`](#replaysession) \| `undefined`

The currently selected replay session, or undefined if no session is selected.

###### Example

```ts
const currentSession = sdk.replay.getCurrentSession();
if (currentSession) {
  console.log(`Current session: ${currentSession.name}`);
} else {
  console.log("No session is currently selected");
}
```

##### getEntry()

> **getEntry**: (`entryId`: [`ID`](utils.md#id)) => [`ReplayEntry`](#replayentry)

Get a replay entry by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entryId` | [`ID`](utils.md#id) | The ID of the entry to get. |

###### Returns

[`ReplayEntry`](#replayentry)

The replay entry.

###### Example

```ts
const entry = await sdk.replay.getEntry(entryId);
console.log(entry.id, entry.sessionId, entry.requestId);
```

##### getSessions()

> **getSessions**: () => [`ReplaySession`](#replaysession)[]

Get the list of all replay sessions.

###### Returns

[`ReplaySession`](#replaysession)[]

The list of all replay sessions.

##### getTabs()

> **getTabs**: () => [`ReplayTab`](#replaytab)[]

Get the list of all open replay tabs.

###### Returns

[`ReplayTab`](#replaytab)[]

The list of all open replay tabs.

##### moveSession()

> **moveSession**: (`sessionId`: [`ID`](utils.md#id), `collectionId`: [`ID`](utils.md#id)) => `Promise`\<[`ReplaySession`](#replaysession)\>

Move a session to a different collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session to move. |
| `collectionId` | [`ID`](utils.md#id) | The ID of the collection to move the session to. |

###### Returns

`Promise`\<[`ReplaySession`](#replaysession)\>

The updated session.

##### onCollectionCreate()

> **onCollectionCreate**: (`callback`: (`event`: [`ReplayCollectionCreatedEvent`](#replaycollectioncreatedevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to replay collection creation events.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`ReplayCollectionCreatedEvent`](#replaycollectioncreatedevent)) => `void` | The callback to call when a collection is created. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to collection creation events.

###### Example

```ts
const handler = sdk.replay.onCollectionCreate((event) => {
  console.log(`Collection ${event.collection.id} was created!`);
});

// Later, stop listening
handler.stop();
```

##### onCurrentSessionChange()

> **onCurrentSessionChange**: (`callback`: (`event`: [`CurrentReplaySessionChangeEvent`](#currentreplaysessionchangeevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to current replay session changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`CurrentReplaySessionChangeEvent`](#currentreplaysessionchangeevent)) => `void` | The callback to call when the selected session changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to session changes.

###### Example

```ts
const handler = sdk.replay.onCurrentSessionChange((event) => {
  console.log(`Session ${event.sessionId} got selected!`);
});

// Later, stop listening
handler.stop();
```

##### onSessionCreate()

> **onSessionCreate**: (`callback`: (`event`: [`ReplaySessionCreatedEvent`](#replaysessioncreatedevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to replay session creation events.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`ReplaySessionCreatedEvent`](#replaysessioncreatedevent)) => `void` | The callback to call when a session is created. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to session creation events.

###### Example

```ts
const handler = sdk.replay.onSessionCreate((event) => {
  console.log(`Session ${event.session.id} was created!`);
});

// Later, stop listening
handler.stop();
```

##### openTab()

> **openTab**: (`sessionId`: [`ID`](utils.md#id), `options?`: [`OpenTabOptions`](#opentaboptions)) => `void`

Open a replay tab for the given session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session to open. |
| `options?` | [`OpenTabOptions`](#opentaboptions) | The options for opening the tab. |

###### Returns

`void`

##### renameCollection()

> **renameCollection**: (`id`: [`ID`](utils.md#id), `name`: `string`) => `Promise`\<[`ReplayCollection`](#replaycollection)\>

Rename a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the collection to rename. |
| `name` | `string` | The new name of the collection. |

###### Returns

`Promise`\<[`ReplayCollection`](#replaycollection)\>

The updated collection.

##### renameSession()

> **renameSession**: (`id`: [`ID`](utils.md#id), `name`: `string`) => `Promise`\<[`ReplaySession`](#replaysession)\>

Rename a session.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the session to rename. |
| `name` | `string` | The new name of the session. |

###### Returns

`Promise`\<[`ReplaySession`](#replaysession)\>

The updated session.

##### sendRequest()

> **sendRequest**: (`sessionId`: [`ID`](utils.md#id), `options`: [`SendRequestOptions`](#sendrequestoptions)) => `Promise`\<`void`\>

Send a request to the Replay backend.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | - |
| `options` | [`SendRequestOptions`](#sendrequestoptions) | The options for sending the request. |

###### Returns

`Promise`\<`void`\>

###### Example

```ts
sendRequest(sessionId, {
  connectionInfo: {
    SNI: "example.com",
    host: "example.com",
    isTLS: true,
    port: 443,
  },
  raw: "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n",
  updateContentLength: false,
});
```

##### showEntry()

> **showEntry**: (`sessionId`: [`ID`](utils.md#id), `entryId`: [`ID`](utils.md#id), `options?`: `object`) => `Promise`\<`void`\>

Show a specific entry in a replay session.
This will open the session tab if not already open, set it as the selected session, and display the specified entry.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sessionId` | [`ID`](utils.md#id) | The ID of the session containing the entry. |
| `entryId` | [`ID`](utils.md#id) | The ID of the entry to show. |
| `options?` | \{ `overwriteDraft?`: `boolean`; \} | The options for showing the entry. |
| `options.overwriteDraft?` | `boolean` | Whether to overwrite the request draft. If true, the draft will be removed and the entry's raw request will be shown. If false, the draft will be kept. |

###### Returns

`Promise`\<`void`\>

###### Example

```ts
await sdk.replay.showEntry(sessionId, entryId, {
  overwriteDraft: true,
});
```

***

### ReplaySession

> **ReplaySession** = `object`

A session in Replay.

#### Properties

##### collectionId

> **collectionId**: [`ID`](utils.md#id)

The ID of the collection the session belongs to.

##### entryIds

> **entryIds**: [`ID`](utils.md#id)[]

The IDs of all entries in this session.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the session.

##### name

> **name**: `string`

The name of the session.

***

### ReplaySessionCreatedEvent

> **ReplaySessionCreatedEvent** = `object`

Event fired when a replay session is created.

#### Properties

##### session

> **session**: [`ReplaySession`](#replaysession)

The newly created replay session.

***

### ReplaySessionId

> **ReplaySessionId** = `string` & `object`

A unique replay session identifier.

#### Type Declaration

##### \_\_replaySessionId?

> `optional` **\_\_replaySessionId**: `never`

***

### ReplayTab

> **ReplayTab** = `object`

A replay tab.

#### Properties

##### sessionId

> **sessionId**: [`ID`](utils.md#id)

The ID of the session associated with this tab.

***

### RequestSource

> **RequestSource** = \{ `connectionInfo`: [`SendRequestOptions`](#sendrequestoptions)\[`"connectionInfo"`\]; `raw`: `string`; `type`: `"Raw"`; \} \| \{ `id`: `string`; `type`: `"ID"`; \}

#### Remarks

This type is a discriminated union with two possible shapes:
- A raw request, containing the raw HTTP request string and connection information.
- A reference to an existing request ID.

#### Example

```ts
// Using a raw request
const source: RequestSource = {
  type: "Raw",
  raw: "GET /api/data HTTP/1.1",
  connectionInfo: { ... }
};
// Using an ID
const source: RequestSource = {
  type: "ID",
  id: "request-123"
};
```

***

### SendRequestOptions

> **SendRequestOptions** = `object`

Options for sending a request.

#### Properties

##### background?

> `optional` **background**: `boolean`

Whether to send the request in the background without updating the UI.
If true, the request will not update the UI.
If false, the UI will be updated to display the session and the new request.
Defaults to false.

##### connectionClose?

> `optional` **connectionClose**: `boolean`

Whether to force close the connection by setting Connection: close header.
Defaults to true.

##### connectionInfo

> **connectionInfo**: `object`

The connection information to use for the request.

###### host

> **host**: `string`

The host to use for the request.

###### isTLS

> **isTLS**: `boolean`

Whether the request is TLS.

###### port

> **port**: `number`

The port to use for the request.

###### SNI?

> `optional` **SNI**: `string`

The SNI to use for the request.
If not provided, the SNI will be inferred from the host.

##### overwriteDraft?

> `optional` **overwriteDraft**: `boolean`

Whether to overwrite the editor's draft content.
If true, draft content will be overwritten with the new request.
If false, the draft will be kept.
Defaults to true.

##### raw

> **raw**: `string`

The raw request to send.

##### updateContentLength?

> `optional` **updateContentLength**: `boolean`

Whether to update the content length automatically to match the body.
Defaults to true.

***

### ReplaySlot

> `const` **ReplaySlot**: `object`

The slots in the Replay UI.

#### Type Declaration

##### SessionToolbarPrimary

> `readonly` **SessionToolbarPrimary**: `"session-toolbar-primary"`

The left side of the session toolbar.

##### SessionToolbarSecondary

> `readonly` **SessionToolbarSecondary**: `"session-toolbar-secondary"`

The right side of the session toolbar.

##### Topbar

> `readonly` **Topbar**: `"topbar"`

The left side of the topbar.
