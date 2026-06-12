# Developer Documentation

Documentation for building plugins and integrations with Caido. Two top-level namespaces — Plugins and Client SDK — with Diátaxis doc types as second-level navigation within each.

## Language

**Namespace**:
A top-level partition of the developer docs, exposed in the primary navigation bar. Two namespaces: Plugins and Client SDK.
_Avoid_: Section, area, category, Plugin SDKs

**Plugins namespace**:
Documentation for building Caido plugins — frontend, backend, and workflow SDKs, plugin package structure, tooling, runtime, and cross-cutting plugin concepts. Workflow content lives here for now.
_Avoid_: Plugin SDKs, Frontend SDK namespace, Backend SDK namespace, Workflow namespace

**Client SDK namespace**:
Documentation for `@caido/sdk-client` — programmatic access to a running Caido instance from external scripts and tools.
_Avoid_: API docs (ambiguous), external SDK

**Two-level navigation**:
Primary nav selects a namespace; secondary nav selects a Diátaxis doc type (guides, tutorials, reference, concepts) within that namespace. Mirrors the main docs pattern (Application → How-to Guides).
_Avoid_: Flat nav, doc-type-first navigation

**Sidebar groupings (unchanged for now)**:
Within each namespace, sidebar structure stays as-is (Frontend Guides, Backend Guides, Client Guides, etc.). Reorganizing sidebar groupings is out of scope for the initial namespace migration.
_Avoid_: Task-oriented regrouping, flattening guides

**URL prefix**:
The path segment that identifies a namespace in URLs. Plugins uses `/plugins/`; Client SDK uses `/client-sdk/`.
_Avoid_: `/plugin/`, `/client/` (ambiguous)

**Plugins URL prefix**: `/plugins/` — e.g. `/plugins/guides/page`
**Client SDK URL prefix**: `/client-sdk/` — e.g. `/client-sdk/guides/install`

Legacy URLs under `/guides/`, `/tutorials/`, `/reference/`, and `/concepts/` redirect to their `/plugins/` equivalents via 301 redirects in `netlify.toml`. Client-specific paths redirect to `/client-sdk/`.

**Home page**:
Mirrors the main docs pattern — hero actions route into each namespace (`/plugins/guides/`, `/client-sdk/guides/`). Feature cards link to Diátaxis sections within namespaces.
_Avoid_: Flat doc-type links on the home page

**Policy page**:
Stays at root (`/policy.md`) for now. Not moved into a namespace.
_Avoid_: `/plugins/policy`

**Second-level navigation**:
Both namespaces use the same four Diátaxis items: Guides, Tutorials, Reference, Concepts. Labels unchanged from today; only URL prefixes change.
_Avoid_: How-to Guides (for now), Get Started, Troubleshooting, namespace-specific second nav

**Source folder structure**:
Namespaces map to physical folders under `src/`. Plugin content lives in `src/plugins/`; Client SDK content lives in `src/client-sdk/`. Root holds `index.md`, `policy.md`, and shared assets.
_Avoid_: Config-only routing, flat `src/guides/` layout

**Navigation UI**:
Two-level nav uses components ported from the main docs site: `NavItem.vue`, `Navbar.vue`, and `Layout.vue`.
_Avoid_: Custom minimal navbar, doc-type-first top nav
