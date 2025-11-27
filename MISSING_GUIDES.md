# Missing Frontend SDK Guides

This document enumerates the missing how-to guides for the frontend SDK, following the Diátaxis framework. Each guide should be task-oriented and answer "how do I...?" questions. Guides are organized by concept/idea rather than by SDK or page.

## Editor Extensions (CodeMirror)

### Request and Response Editor Extensions

- **Missing Guide**: "How to extend request and response editors with CodeMirror"
  - `addRequestEditorExtension()` - Available in: HTTPHistory, Replay, Search, Sitemap, Automate, Findings
  - `addResponseEditorExtension()` - Available in: HTTPHistory
  - CodeMirror integration patterns
  - Use cases: Custom syntax highlighting, validation, autocomplete, custom keybindings, editor themes
  - Related: `sdk.window.getActiveEditor()` for interacting with active editors

## Request View Modes

### Custom Request View Modes

- **Missing Guide**: "How to add custom request view modes"
  - `addRequestViewMode()` - Available in: HTTPHistory, Replay, Search, Sitemap, Automate, Intercept, Findings
  - Creating custom visualizations for requests
  - Use cases: Alternative request representations, custom parsers, formatted views, visual editors

## Slots System

### Adding Components to UI Slots

- **Missing Guide**: "How to add components to UI slots"
  - `sdk.footer.addToSlot()` - Footer slots (FooterSlotPrimary, FooterSlotSecondary)
  - `sdk.replay.addToSlot()` - Replay slots (SessionToolbarPrimary, SessionToolbarSecondary, Topbar)
  - Slot content types: Button, Command, Custom components
  - Use cases: Extending UI with custom components, adding actions to toolbars, plugin-specific controls

## Scope Management

### Creating and Managing Scopes

- **Missing Guide**: "How to create and manage scopes"
  - `sdk.scopes.createScope()` / `updateScope()` / `deleteScope()` / `getScopes()` - Core scope operations
  - `sdk.httpHistory.getScopeId()` / `setScope()` - Scope operations in HTTP History
  - `sdk.search.getScopeId()` / `setScope()` - Scope operations in Search
  - `sdk.sitemap.getScopeId()` / `setScope()` - Scope operations in Sitemap
  - `sdk.intercept.getScopeId()` / `setScope()` - Scope operations in Intercept
  - Use cases: Programmatically managing scopes, scope automation, filtering by scope across pages

## Query and Filter Management

### HTTPQL Queries and Filters

- **Missing Guide**: "How to work with HTTPQL queries and filters"
  - `sdk.filters.create()` / `getAll()` / `update()` / `delete()` - Managing saved filters
  - `sdk.httpHistory.getQuery()` / `setQuery()` - HTTPQL queries in HTTP History
  - `sdk.search.getQuery()` / `setQuery()` - HTTPQL queries in Search
  - `sdk.httpHistory.scrollTo()` / `sdk.search.scrollTo()` - Navigating to specific requests
  - Use cases: Programmatically filtering requests, creating filter presets, dynamic query building

## Event Subscriptions

### Listening to Application Events

- **Missing Guide**: "How to subscribe to application events"
  - `sdk.backend.onEvent()` - Backend plugin events
  - `sdk.projects.onCurrentProjectChange()` - Project selection changes
  - `sdk.workflows.onCreatedWorkflow()` / `onUpdatedWorkflow()` / `onDeletedWorkflow()` - Workflow lifecycle events
  - `sdk.replay.onCurrentSessionChange()` - Replay session changes
  - `sdk.navigation.onPageChange()` - Page navigation changes (covered in navigation guide)
  - Use cases: Reacting to state changes, real-time updates, workflow automation, project-specific configurations

## Commands and Shortcuts

### Keyboard Shortcuts and Command Palette

- **Missing Guide**: "How to register keyboard shortcuts"
  - `sdk.shortcuts.register()` - Registering keyboard shortcuts for commands
  - Use cases: Power user features, quick actions, accessibility

- **Missing Guide**: "How to customize the command palette"
  - `sdk.commandPalette.register()` - Registering commands in the command palette
  - `sdk.commandPalette.pushView()` - Pushing custom views onto the command palette stack
  - Use cases: Creating interactive command palette experiences, custom search interfaces, multi-step commands

## Navigation and Dialogs

### Dialogs and Window Management

- **Missing Guide**: "How to show dialogs"
  - `sdk.window.showDialog()` - Showing modal dialogs with custom components
  - Dialog options: position, modal, closable, draggable, etc.
  - Use cases: Confirmation dialogs, forms, custom modals, user input

- **Partially Covered**: Editor interactions in `page.md`
  - `sdk.window.getActiveEditor()` - Getting the active editor
  - `sdk.window.showToast()` - Covered in `page.md`
  - Could be expanded with more editor interaction patterns

## Data Management

### Static Assets

- **Missing Guide**: "How to access static assets"
  - `sdk.assets.get()` - Getting files from the assets folder
  - Asset methods: `asArrayBuffer()`, `asJson()`, `asReadableStream()`, `asString()`
  - Use cases: Loading configuration files, images, templates, data files

### Storage and Files

- **Covered**: `sdk.storage` (frontend_storage.md), `sdk.files` (files.md)

## Replay Operations

### Managing Replay Sessions and Collections

- **Missing Guide**: "How to manage Replay sessions and collections"
  - `sdk.replay.createSession()` / `deleteSessions()` / `renameSession()` - Session management
  - `sdk.replay.createCollection()` / `deleteCollection()` / `renameCollection()` - Collection management
  - `sdk.replay.getSessions()` / `getCollections()` / `getTabs()` - Getting replay data
  - `sdk.replay.openTab()` / `closeTab()` - Managing tabs
  - `sdk.replay.sendRequest()` - Sending requests to Replay backend
  - Use cases: Programmatically creating replay sessions, managing replay workflows, automation

## Match and Replace Operations

### Creating and Managing Match and Replace Rules

- **Missing Guide**: "How to create and manage match and replace rules"
  - `sdk.matchReplace.createCollection()` / `updateCollection()` / `deleteCollection()` - Managing collections
  - `sdk.matchReplace.createRule()` / `updateRule()` / `deleteRule()` - Managing rules
  - `sdk.matchReplace.getCollections()` / `getRules()` / `getActiveRules()` - Getting collections and rules
  - `sdk.matchReplace.toggleRule()` - Enabling/disabling rules
  - `sdk.matchReplace.selectRule()` - Selecting a rule for display
  - Use cases: Programmatically creating match/replace rules, managing rule collections, automation

## Workflow Operations

### Interacting with Workflows

- **Missing Guide**: "How to interact with workflows"
  - `sdk.workflows.getWorkflows()` - Getting all workflows
  - `sdk.workflows.onCreatedWorkflow()` / `onUpdatedWorkflow()` / `onDeletedWorkflow()` - Subscribing to workflow lifecycle events
  - Use cases: Reacting to workflow changes, workflow automation, workflow discovery

## Specialized Features

### AI Integration

- **Missing Guide**: "How to use AI in your plugin"
  - `sdk.ai.createProvider()` - Creating an AI provider instance for use with the ai library
  - Use cases: Integrating AI capabilities into plugins, AI-powered features

### GraphQL API

- **Missing Guide**: "How to query the GraphQL API"
  - `sdk.graphql` - GraphQL API interaction utilities
  - Use cases: Advanced data queries, custom GraphQL operations

### Logging

- **Missing Guide**: "How to log messages"
  - `sdk.log.debug()` / `info()` / `warn()` / `error()` - Logging at different levels
  - Use cases: Debugging, error tracking, informational messages

### Runtime Information

- **Missing Guide**: "How to get Caido version information"
  - `sdk.runtime.version` - Getting the current Caido version
  - Use cases: Version checking, compatibility checks, feature detection

## Summary Statistics

- **Total SDKs in Reference**: ~30
- **Guides Covered**: ~8
- **Missing Guides**: ~15-20 (grouped by concept, some may combine multiple SDKs)

## Priority Recommendations

### High Priority (Common Use Cases)

1. **Editor Extensions (CodeMirror)** - Frequently used for customizing editors
2. **Request View Modes** - Common customization pattern
3. **Scope Management** - Frequently used across multiple pages
4. **Shortcuts** - Common UX pattern for power users
5. **Log** - Essential for debugging and development
6. **Backend Events** - Important for frontend-backend communication
7. **Assets** - Common need for loading static resources

### Medium Priority (Specialized Features)

8. **Slots System** - UI extension pattern
9. **Query and Filter Management** - Useful for automation
10. **Replay Operations** - Complex feature with many use cases
11. **Match and Replace Operations** - Advanced feature with many operations
12. **Workflow Operations** - Important for workflow automation
13. **Dialogs** - Common UI pattern

### Lower Priority (Specialized)

14. **AI** - Specialized use case
15. **GraphQL** - Advanced use case
16. **Runtime** - Simple, single method
17. **Command Palette** - Less common customization

## Notes

- Guides are organized by concept rather than SDK to avoid duplication and provide better learning experiences
- Editor extensions and view modes are patterns repeated across many pages - guides should cover the general pattern with page-specific examples
- Scope management appears across multiple pages - a unified guide would be more useful than page-specific ones
- Event subscriptions follow similar patterns - a general guide with specific examples would be beneficial
- Some guides may naturally combine related concepts (e.g., "How to customize editors" could cover both extensions and view modes)
