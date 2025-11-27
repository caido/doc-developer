# plugin_packages.json

The `plugin_packages.json` file in the [caido/store](https://github.com/caido/store) repository contains the metadata for all plugins available in the Caido store.

In order to add your plugin to the store, you'll need to add an entry to this file.

Here's an example of what the `plugin_packages.json` file looks like:

```json
[
  {
    "id": "authmatrix",
    "name": "AuthMatrix",
    "license": "CC0-1.0",
    "description": "Grid-based authorization testing across multiple users and roles.",
    "author": {
      "name": "Caido Labs Inc.",
      "email": "dev@caido.io",
      "url": "https://caido.io"
    },
    "public_key": "MCowBQYDK2VwAyEA+du2fw/I+CV6MKEpu0aJ1ki2+MO2V0SnaRB91+GbHwQ=",
    "repository": "caido-community/authmatrix"
  },
]
```

Here's a summary of each field:

Field|Description
-----|-----
`id`|A unique identifier for your plugin. Search `plugin_packages.json` to confirm that there's no existing plugin with the same id.
`name`|Your plugin's name. This will be used as the display name in the store.
`license`|The license of your plugin.
`description`|A short description of your plugin.
`author`|Author details of your plugin.
`public_key`|The Base64 part of the public key generated in the [Setting up your repository](/guides/repository#_3-generate-a-key-pair) guide. **Don't** include the header/footer (`BEGIN/END PUBLIC KEY`).
`repository`|The path to your GitHub repository. For example, if your GitHub repo is <https://github.com/username/repo-name>, the path is `username/repo-name`.
