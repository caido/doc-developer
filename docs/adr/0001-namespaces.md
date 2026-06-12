---
status: accepted
---

# Namespace-based navigation

Developer documentation is organized by **audience**, not by documentation type. The site uses two-level navigation: namespaces in the primary bar, Diátaxis doc types in the secondary bar. This mirrors the main docs site (Application → How-to Guides) and separates plugin authors from external integrators.

## Navigation model

**Primary nav** selects a namespace:

| Namespace | Default entry | URL prefix |
|-----------|---------------|------------|
| Plugins | `/plugins/guides/` | `/plugins/` |
| Client SDK | `/client-sdk/guides/` | `/client-sdk/` |

**Secondary nav** selects a Diátaxis doc type within the active namespace:

Guides · Tutorials · Reference · Concepts

Both namespaces expose the same four items. The secondary bar is rendered by `Navbar.vue`; namespace dropdowns in the primary bar use `NavItem.vue`. Both components are shared with the main docs site.

The home page routes visitors into namespaces — not into doc types directly.

## Folder and URL structure

Namespaces are first-class in both navigation and source layout. A namespace's URL prefix matches its folder under `src/`:

```
src/
├── plugins/
│   ├── guides/
│   ├── tutorials/
│   ├── reference/
│   └── concepts/
├── client-sdk/
│   ├── guides/
│   ├── tutorials/
│   ├── reference/
│   └── concepts/
├── index.md
├── policy.md
└── _images/
```

A page's path is `{namespace}/{doc-type}/{page}` — e.g. `/plugins/guides/page`, `/client-sdk/reference/authentication`.

## Namespace boundaries

### Plugins

Everything involved in **building and publishing a Caido plugin**:

- Frontend, backend, and workflow SDK reference (`@caido/sdk-frontend`, `@caido/sdk-backend`, `@caido/sdk-workflow`)
- Plugin how-to guides, tutorials, and concepts — including content that spans multiple SDK packages
- Plugin package structure (`manifest.json`, `caido.config.ts`, `plugin_packages.json`)
- Backend runtime modules (LLRT)
- Cross-cutting plugin concepts (architecture, tooling, runtime, signing)

Workflow documentation lives here. Workflows are authored as plugins, not consumed externally.

### Client SDK

Everything involved in **programmatic access to a running Caido instance** from outside the application:

- `@caido/sdk-client` guides, tutorials, and concepts
- Cloud API reference (authentication, REST endpoints)

Content about calling plugin functions or receiving plugin events from a client script belongs here — the audience is an external integrator, not a plugin author.

### Root

Pages that apply to the site as a whole, not to a single namespace:

- Home page (`index.md`)
- Store policy (`policy.md`)
- Shared assets (`_images/`)

## Reasoning

**Why namespaces, not doc types, at the top level.** Plugin authors and client integrators are different audiences with different goals. A plugin author needs manifest reference and UI guides; a client integrator needs authentication and the REST API. Doc-type-first navigation forces both audiences through the same front door and buries the audience split in sidebar groupings.

**Why two namespaces, not one per SDK package.** Plugin development spans frontend, backend, and workflow SDKs in a single package. Top-level splits by SDK package would scatter shared content (manifest, tooling, runtime) and force authors to context-switch between namespaces for work that belongs to one plugin. SDK package boundaries belong in sidebar groupings and reference sections — not in the primary nav.

**Why "Plugins", not "Plugin SDKs".** The site is already developer documentation. The namespace name should identify the audience task (building plugins), not enumerate the packages involved.

**Why physical folders match URL prefixes.** Contributors should infer a page's location from its URL. Config-only routing that decouples folders from paths creates a hidden mapping that diverges from the main docs repo convention (`src/app/`, `src/dashboard/`).

## Sidebar organization

Sidebar groupings within a doc type (e.g. Frontend Guides, Backend Guides, Getting Started) organize content within a namespace. They are independent of the namespace boundary — a separate concern, governed by Diátaxis and user task, not by this ADR.
