# Window

### Dialog

> **Dialog** = `object`

A dialog instance that can be closed programmatically.

#### Properties

##### close()

> **close**: () => `void`

###### Returns

`void`

***

### DialogOptions

> **DialogOptions** = `object`

Options for configuring a dialog.

#### Properties

##### closable?

> `optional` **closable**: `boolean`

##### closeOnEscape?

> `optional` **closeOnEscape**: `boolean`

##### draggable?

> `optional` **draggable**: `boolean`

##### modal?

> `optional` **modal**: `boolean`

##### position?

> `optional` **position**: `"left"` \| `"right"` \| `"top"` \| `"bottom"` \| `"center"` \| `"topleft"` \| `"topright"` \| `"bottomleft"` \| `"bottomright"`

##### title?

> `optional` **title**: `string`

***

### GlobalContext

> **GlobalContext** = `object`

Represents the global context of the application.

#### Properties

##### page?

> `optional` **page**: [`PageContext`](#pagecontext)

***

### PageContext

> **PageContext** = [`AssistantPageContext`](assistant.md#assistantpagecontext) \| [`AutomatePageContext`](automate.md#automatepagecontext) \| [`BackupsPageContext`](backups.md#backupspagecontext) \| [`CertificatePageContext`](certificate.md#certificatepagecontext) \| [`ExportsPageContext`](exports.md#exportspagecontext) \| [`EnvironmentPageContext`](environment.md#environmentpagecontext) \| [`FilterPageContext`](filters.md#filterpagecontext) \| [`FindingsPageContext`](findings.md#findingspagecontext) \| [`HTTPHistoryPageContext`](http-history.md#httphistorypagecontext) \| [`ReplayPageContext`](replay.md#replaypagecontext) \| [`ScopePageContext`](scopes.md#scopepagecontext) \| [`SearchPageContext`](search.md#searchpagecontext) \| [`WorkflowsPageContext`](workflows.md#workflowspagecontext) \| [`ProjectsPageContext`](projects.md#projectspagecontext) \| [`FilesPageContext`](files.md#filespagecontext) \| [`MatchReplacePageContext`](match-and-replace.md#matchreplacepagecontext) \| [`InterceptPageContext`](intercept.md#interceptpagecontext) \| [`SitemapPageContext`](sitemap.md#sitemappagecontext) \| [`WebsocketPageContext`](websockets.md#websocketpagecontext)

Represents the context of the current page.

***

### WindowSDK

> **WindowSDK** = `object`

Utilities to interact with the active page.

#### Properties

##### getActiveEditor()

> **getActiveEditor**: () => [`Editor`](editor.md#editor) \| `undefined`

Get the active editor.

###### Returns

[`Editor`](editor.md#editor) \| `undefined`

The active editor.

##### getContext()

> **getContext**: () => [`GlobalContext`](#globalcontext)

Get the current global context.

###### Returns

[`GlobalContext`](#globalcontext)

The current global context.

##### onContextChange()

> **onContextChange**: (`callback`: (`context`: [`GlobalContext`](#globalcontext)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to global context changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`context`: [`GlobalContext`](#globalcontext)) => `void` | The callback to call when the context changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to context changes.

##### showDialog()

> **showDialog**: (`component`: [`ComponentDefinition`](utils.md#componentdefinition), `options?`: [`DialogOptions`](#dialogoptions)) => [`Dialog`](#dialog)

Show a dialog component.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `component` | [`ComponentDefinition`](utils.md#componentdefinition) | The custom slot content to display in the dialog. |
| `options?` | [`DialogOptions`](#dialogoptions) | Options for the dialog. |

###### Returns

[`Dialog`](#dialog)

A dialog object that can be used to close the dialog.

##### showToast()

> **showToast**: (`message`: `string`, `options?`: `object`) => `void`

Show a toast message.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The message to show. |
| `options?` | \{ `duration?`: `number`; `variant?`: `"success"` \| `"error"` \| `"warning"` \| `"info"`; \} | Options for the toast message. |
| `options.duration?` | `number` | The duration of the toast message in milliseconds. |
| `options.variant?` | `"success"` \| `"error"` \| `"warning"` \| `"info"` | The variant of the toast message. |

###### Returns

`void`
