# Navigation

### NavigationSDK

> **NavigationSDK** = `object`

Utilities to interact with navigation.

#### Properties

##### addPage()

> **addPage**: (`path`: `string`, `options`: `object`) => `void`

Add a page to the navigation.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the page. |
| `options` | \{ `body`: `HTMLElement`; `onEnter?`: () => `void`; `topbar?`: `HTMLElement`; \} | Options for the page. |
| `options.body` | `HTMLElement` | The body of the page. |
| `options.onEnter?` | () => `void` | The callback to execute when the page is entered. |
| `options.topbar?` | `HTMLElement` | The topbar of the page. |

###### Returns

`void`

##### goTo()

> **goTo**: (`route`: `string` \| \{ `id`: [`Routes`](#routes); \}) => `void`

Navigate to a route or path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `route` | `string` \| \{ `id`: [`Routes`](#routes); \} | The route to navigate to. Can be a route ID object or a custom path string. |

###### Returns

`void`

###### Example

```ts
sdk.navigation.goTo({ id: Routes.Replay });
sdk.navigation.goTo({ id: Routes.Projects });
sdk.navigation.goTo("/my-plugin-page");
```

##### onPageChange()

> **onPageChange**: (`callback`: (`route`: [`PageChangeEvent`](#pagechangeevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to page changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`route`: [`PageChangeEvent`](#pagechangeevent)) => `void` | The callback to call when the page changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to page changes.

###### Example

```ts
const handler = sdk.navigation.onPageChange((event) => {
  console.log('Page changed to:', event.routeId);
  console.log('- path:', event.path);
});

// Later, stop listening
handler.stop();
```

***

### PageChangeEvent

> **PageChangeEvent** = \{ `path`: `string`; `routeId`: [`Routes`](#routes); `type`: `"Core"`; \} \| \{ `path`: `string`; `type`: `"Plugin"`; \}

Event fired when the page changes.

***

### Routes

> `const` **Routes**: `object`

Available route identifiers in Caido.

#### Type Declaration

##### About

> `readonly` **About**: `"About"`

##### Assistant

> `readonly` **Assistant**: `"Assistant"`

##### Automate

> `readonly` **Automate**: `"Automate"`

##### Backups

> `readonly` **Backups**: `"Backups"`

##### Certificate

> `readonly` **Certificate**: `"Certificate"`

##### Environment

> `readonly` **Environment**: `"Environment"`

##### Exports

> `readonly` **Exports**: `"Exports"`

##### Files

> `readonly` **Files**: `"Files"`

##### Filter

> `readonly` **Filter**: `"Filter"`

##### Findings

> `readonly` **Findings**: `"Findings"`

##### HTTPHistory

> `readonly` **HTTPHistory**: `"HTTPHistory"`

##### Intercept

> `readonly` **Intercept**: `"Intercept"`

##### MatchReplace

> `readonly` **MatchReplace**: `"Tamper"`

##### Plugins

> `readonly` **Plugins**: `"Plugins"`

##### Projects

> `readonly` **Projects**: `"Projects"`

##### Replay

> `readonly` **Replay**: `"Replay"`

##### Scope

> `readonly` **Scope**: `"Scope"`

##### Search

> `readonly` **Search**: `"Search"`

##### Settings

> `readonly` **Settings**: `"Settings"`

##### Sitemap

> `readonly` **Sitemap**: `"Sitemap"`

##### Websockets

> `readonly` **Websockets**: `"Websockets"`

##### Workflows

> `readonly` **Workflows**: `"Workflows"`
