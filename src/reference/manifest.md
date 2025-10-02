# manifest.json

The `manifest.json` file is the first file that is read by the Caido application when a plugin is installed. It defines the plugin's structure and contains metadata used by the Caido installer.

```json
{
  "id": "authmatrix",
  "name": "AuthMatrix",
  "version": "0.2.0",
  "description": "Grid-based authorization testing across multiple users and roles.",
  "author": {
    "name": "Caido Labs Inc.",
    "email": "dev@caido.io",
    "url": "https://github.com/caido-community/authmatrix"
  },
  "links": {
    "sponsor": "https://patreon.com/..."
  },
  "plugins": [
    {
      "kind": "frontend",
      "id": "authmatrix-frontend",
      "name": "Authmatrix Frontend",
      "entrypoint": "frontend/script.js",
      "style": "frontend/style.css",
      "backend": {
        "id": "authmatrix-backend"
      },
      "assets": "frontend/assets"
    },
    {
      "kind": "backend",
      "id": "authmatrix-backend",
      "name": "Authmatrix Backend",
      "runtime": "javascript",
      "entrypoint": "backend/script.js",
      "assets": "frontend/assets"
    },
    {
      "kind": "workflow",
      "id": "authmatrix-workflow",
      "name": "Authmatrix Workflow",
      "definition": "workflow/definition.json"
    }
  ]
}
```

Here's a summary of each field (**required** fields are marked with an asterisk `*`)

## Main Fields

| Field       | Required | Description                                                                                                                                                                                            |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id          | Yes      | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`\_). |
| version     | Yes      | The version of your plugin package. Follows the `MAJOR.MINOR.PATCH` syntax.                                                                                                                            |
| name        | No       | The name of your plugin package. If not supplied, the `id` will be used as the `name`.                                                                                                                 |
| description | No       | A description of the plugin package .                                                                                                                                                                  |
| Author      | No       | See the [author fields](#author-fields).                                                                                                                                                               |
| Links       | No       | See the [links fields](#links-fields)                                                                                                                                                                                 |
| Plugins     | Yes      | Array of plugins. See the [plugin fields](#plugins-fields).                                                                                                                                            |

## Author Fields

The `author` field is optional and may be used for crediting purposes.

| Field | Required | Description                      |
| ----- | -------- | -------------------------------- |
| name  | No       | The name of the author.          |
| email | No       | The email address of the author. |
| url   | No       | A URL to the author's website.   |

## Links Fields

The `links` field is optional and is currently used to provide users with a funding link.

| Field   | Required | Description                             |
| ------- | -------- | --------------------------------------- |
| sponsor | No       | A URL to the project's funding website. |

## Plugins Fields

The `plugins` field is required and must contain an array of plugins.

Plugins can be of type `frontend`, `backend` or `workflow`.

::: tip
You can define multiple plugins of the same type. For example, you can define 3 different frontend plugins that will interact with the same backend plugin.
:::

### Frontend Plugins

| Field      | Required | Description                                                                                                                                                                                                       |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind       | Yes      | Must be of type `frontend`                                                                                                                                                                                        |
| id         | Yes      | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`).              |
| entrypoint | Yes      | Specifies the location of the primary script to be executed when the plugin is launched.                                                                                                                          |
| name       | No       | The cosmetic plugin package name displayed in the [Plugins](https://docs.caido.io/reference/features/workspace/plugins.html) table. If not supplied, the `id` will be used as the `name`.                         |
| style      | No       | Specifies the location of the CSS file to be used to stylize elements of your plugin.                                                                                                                             |
| backend    | No       | This object contains the `id` of the associated backend plugin. Specifying this field will allow the frontend plugin to communicate with the backend plugin via [sdk.backend](/reference/sdks/frontend/#backend). |
| assets     | No       | Extra assets to be bundled with the plugin and loadable at runtime.                                                                                                                                               |

### Backend Plugins

| Field      | Required | Description                                                                                                                                                                                          |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind       | Yes      | Must be of type `backend`                                                                                                                                                                            |
| id         | Yes      | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`). |
| entrypoint | Yes      | Specifies the location of the primary script to be executed when the plugin is launched.                                                                                                             |
| runtime    | Yes      | Specifies that JavaScript code will be executed.                                                                                                                                                     |
| name       | No       | The name of your plugin. If not supplied, the `id` will be used as the `name`.                                                                                                                       |
| assets     | No       | Extra assets to be bundled with the plugin and loadable at runtime.                                                                                                                                  |

### Workflow Plugins

| Field      | Required | Description                                                                                                                                                                                          |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind       | Yes      | Must be of type `workflow`                                                                                                                                                                           |
| id         | Yes      | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`). |
| definition | Yes      | Specifies the location of workflow json definition.                                                                                                                                                  |
| name       | No       | The name of your plugin. If not supplied, the `id` will be used as the `name`.                                                                                                                       |
