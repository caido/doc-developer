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
      "assets": "backend/assets",
      "backend": {
        "id": "authmatrix-backend"
      }
    },
    {
      "kind": "backend",
      "id": "authmatrix-backend",
      "name": "Authmatrix Backend",
      "runtime": "javascript",
      "entrypoint": "backend/script.js",
      "assets": "backend/assets"
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

| Field       | Description                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id\*        | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`\_). |
| version\*   | The version of your plugin package. Follows the `MAJOR.MINOR.PATCH` syntax.                                                                                                                            |
| name        | The name of your plugin package. If not supplied, the `id` will be used as the `name`.                                                                                                                 |
| description | A description of the plugin.                                                                                                                                                                           |

## Author Fields

The `author` field is optional and may be used for crediting purposes.

| Field | Description                      |
| ----- | -------------------------------- |
| name  | The name of the author.          |
| email | The email address of the author. |
| url   | A URL to the author's website.   |

## Links Fields

The `links` field is optional and is currently used to provide users with a funding link.

| Field   | Description                                      |
| ------- | ------------------------------------------------ |
| sponsor | A URL to the project's funding website.          |

## Plugins Fields

The `plugins` field is required and must contain an array of plugins.

Plugins can be of type `frontend`, `backend` or `workflow`.

::: tip
You can define multiple plugins of the same type. For example, you can define 3 different frontend plugins that will interact with the same backend plugin.
:::

### Frontend Plugins

| Field        | Description                                                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind\*       | Must be of type `frontend`                                                                                                                                                                                        |
| id\*         | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`).              |
| entrypoint\* | Specifies the location of the primary script to be executed when the plugin is launched.                                                                                                                          |
| assets       | Specifies the location of the folder containing assets accessible by the plugin.                                                                                                                                  |
| name         | The cosmetic plugin package name displayed in the [Plugins](https://docs.caido.io/reference/features/workspace/plugins.html) table. If not supplied, the `id` will be used as the `name`.                         |
| style        | Specifies the location of the CSS file to be used to stylize elements of your plugin.                                                                                                                             |
| backend      | This object contains the `id` of the associated backend plugin. Specifying this field will allow the frontend plugin to communicate with the backend plugin via [sdk.backend](/reference/sdks/frontend/#backend). |

### Backend Plugins

| Field        | Description                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind\*       | Must be of type `backend`                                                                                                                                                                            |
| id\*         | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`). |
| entrypoint\* | Specifies the location of the primary script to be executed when the plugin is launched.                                                                                                             |
| runtime\*    | Specifies that JavaScript code will be executed.                                                                                                                                                     |
| assets       | Specifies the location of the folder containing assets accessible by the plugin.                                                                                                                                  |
| name         | The name of your plugin. If not supplied, the `id` will be used as the `name`.                                                                                                                       |

### Workflow Plugins

| Field        | Description                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| kind\*       | Must be of type `workflow`                                                                                                                                                                           |
| id\*         | Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z][a-z0-9]+(?:[_-][a-z0-9]+)\*$`). |
| definition\* | Specifies the location of workflow json definition.                                                                                                                                                  |
| name         | The name of your plugin. If not supplied, the `id` will be used as the `name`.                                                                                                                       |
