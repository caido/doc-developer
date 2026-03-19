# @caido/sdk-frontend

This is the reference for the frontend SDK used by frontend plugins.
[Caido](#caido-t-e) is the main interface that provides access to various services and functionalities.

## SDK

### Caido

> **Caido**\<`T`, `E`\> = `object`

Utilities for frontend plugins.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`BackendEndpoints`](backend.md#backendendpoints) | `Record`\<`string`, `never`\> |
| `E` *extends* [`BackendEvents`](backend.md#backendevents) | `Record`\<`string`, `never`\> |

#### Properties

##### ai

> **ai**: [`AiSDK`](ai.md#aisdk)

Utilities to interact with AI.

##### assets

> **assets**: [`AssetsSDK`](files.md#assetssdk)

Utilities to interact with the plugin's static assets.

##### automate

> **automate**: [`AutomateSDK`](automate.md#automatesdk)

Utilities to interact with the Automate page.

##### backend

> **backend**: [`BackendSDK`](backend.md#backendsdk)\<`T`, `E`\>

Utilities to interact with the backend plugin.

##### commandPalette

> **commandPalette**: [`CommandPaletteSDK`](command-palette.md#commandpalettesdk)

Utilities to interact with the command palette.

##### commands

> **commands**: [`CommandsSDK`](commands.md#commandssdk)

Utilities to interact with commands

##### env

> **env**: [`EnvironmentSDK`](environment.md#environmentsdk)

Utilities to interact with the environment.

##### files

> **files**: [`FilesSDK`](files.md#filessdk)

Utilities to interact with the Files page.

##### filters

> **filters**: [`FiltersSDK`](filters.md#filterssdk)

Utilities to interact with Filters page.

##### findings

> **findings**: [`FindingsSDK`](findings.md#findingssdk)

Utilities to interact with findings

##### footer

> **footer**: [`FooterSDK`](footer.md#footersdk)

Utilities to interact with the footer.

##### graphql

> **graphql**: `GraphqlSDK`

Utilities to interact with the GraphQL API.

##### httpHistory

> **httpHistory**: [`HTTPHistorySDK`](http-history.md#httphistorysdk)

Utilities to interact with the HTTP History page.

##### intercept

> **intercept**: [`InterceptSDK`](intercept.md#interceptsdk)

Utilities to interact with the Intercept page.

##### log

> **log**: [`LogSDK`](log.md#logsdk)

Utilities for logging messages to the console.

##### matchReplace

> **matchReplace**: [`MatchReplaceSDK`](match-and-replace.md#matchreplacesdk)

Utilities to interact with Match and Replace page.

##### menu

> **menu**: [`MenuSDK`](menu.md#menusdk)

Utilities to insert menu items and context-menus throughout the UI.

##### navigation

> **navigation**: [`NavigationSDK`](navigation.md#navigationsdk)

Utilities to interact with navigation.

##### projects

> **projects**: [`ProjectsSDK`](projects.md#projectssdk)

Utilities to interact with projects.

##### replay

> **replay**: [`ReplaySDK`](replay.md#replaysdk)

Utilities to interact with the Replay page.

##### runtime

> **runtime**: [`RuntimeSDK`](runtime.md#runtimesdk)

Utilities to interact with the runtime.

##### scopes

> **scopes**: [`ScopesSDK`](scopes.md#scopessdk)

Utilities to interact with scopes

##### search

> **search**: [`SearchSDK`](search.md#searchsdk)

Utilities to interact with the Search page.

##### settings

> **settings**: [`SettingsSDK`](settings.md#settingssdk)

Utilities to interact with the settings page.

##### shortcuts

> **shortcuts**: [`ShortcutsSDK`](shortcuts.md#shortcutssdk)

Utilities to interact with shortcuts.

##### sidebar

> **sidebar**: [`SidebarSDK`](sidebar.md#sidebarsdk)

Utilities to interact with the sidebar.

##### sitemap

> **sitemap**: [`SitemapSDK`](sitemap.md#sitemapsdk)

Utilities to interact with the Sitemap page.

##### storage

> **storage**: [`StorageSDK`](storage.md#storagesdk)

Utilities to interact with frontend-plugin storage.

##### ui

> **ui**: [`UISDK`](ui.md#uisdk)

Utilities to create UI components.

##### websocket

> **websocket**: [`WebsocketSDK`](websockets.md#websocketsdk)

Utilities to interact with the Websocket page.

##### window

> **window**: [`WindowSDK`](window.md#windowsdk)

Utilities to interact with the active page.

##### workflows

> **workflows**: [`WorkflowSDK`](workflows.md#workflowsdk)

Utilities to interact with workflows.

## API Reference

- [Backend](backend.md)
- [UI](ui.md)
- [Scopes](scopes.md)
- [Findings](findings.md)
- [Commands](commands.md)
- [Menu](menu.md)
- [Navigation](navigation.md)
- [Window](window.md)
- [Storage](storage.md)
- [Shortcuts](shortcuts.md)
- [Command Palette](command-palette.md)
- [Sidebar](sidebar.md)
- [Replay](replay.md)
- [HTTP History](http-history.md)
- [Search](search.md)
- [Files](files.md)
- [AI](ai.md)
- [Assistant](assistant.md)
- [Automate](automate.md)
- [Backups](backups.md)
- [Certificate](certificate.md)
- [Editor](editor.md)
- [Environment](environment.md)
- [Exports](exports.md)
- [Filter](filter.md)
- [Filters](filters.md)
- [Footer](footer.md)
- [Intercept](intercept.md)
- [JSON](json.md)
- [Log](log.md)
- [Match and Replace](match-and-replace.md)
- [Other](other.md)
- [Projects](projects.md)
- [Request](request.md)
- [Response](response.md)
- [Runtime](runtime.md)
- [Settings](settings.md)
- [Sitemap](sitemap.md)
- [Slots](slots.md)
- [Utils](utils.md)
- [Websockets](websockets.md)
- [Workflows](workflows.md)
