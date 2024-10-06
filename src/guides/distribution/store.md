# Submitting your plugin

If you want to share your plugin package with the Caido community, the best way is to submit it to the official list of plugin packages.

Once we've reviewed and published your plugin package, users will be able to install it directly from within Caido.

You only need to submit your plugin packge once. Once it has been accept, users will be able to download new releases from GitHub directly.

## Prerequisites

- A [GitHub](https://github.com/signup) account.

## Step 1: Create a repository

All Caido plugin packages **must** have their source code on GitHub.

Repositories can be hosted:

- Under your own account, like [`github.com/bebiksior/EvenBetter`](https://github.com/bebiksior/EvenBetter)
- Under the `caido-community` organization, like [`github.com/caido-community/authmatrix`](https://github.com/caido-community/authmatrix)

You can request a repository under the `caido-community` organization on our [Discord server](https://links.caido.io/www-discord).

::: info Don't have a repository yet?

If you are not familiar with the plugin system of Caido and/or the release process. We **highly** recommend that you start with one of our templates.

1. Visit [`github.com/caido/starterkit-plugin`](https://github.com/caido/starterkit-plugin)
1. Select `Use this template` -> `Create a new repository`
1. Give it a name
1. Select `Create repository`
:::

## Step 2: Add required files

At the root of your repository please ensure that you have:

- A `manifest.json` file that follows the standard Caido manifest format.
  - Set the version field for your plugin using [Semantic Versioning](https://semver.org/), like `0.1.0`. **Only use numbers and periods.**
- A `LICENSE` file to describe the licensing of your plugin package.
- A `README.md` file to describe the goal and usage of your plugin packge.

## Step 3: Generate a key-pair

Plugin packages **must** be digitally signed to be installable in Caido.

To sign your plugin package, you need to generate a public/private key-pair.

::: info
  Plugin package signing is done using `Ed25519` public-key signatures. [Learn more](https://cendyne.dev/posts/2022-03-06-ed25519-signatures.html).
:::

### 1. Generate the private key

Run the following command to generate a private key:

```bash
openssl genpkey -algorithm ed25519 -out private.pem
```

This will create a file `private.pem` with the private key. We will use this key to sign our plugin package when we create a release.

::: warning
**Keep this key private!** Ideally, you should encrypt it or store it in [Github Action Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
:::

The file `private.pem` will contain the following format:

```
-----BEGIN PRIVATE KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PRIVATE KEY-----
```

### 2. Generate the public key

Run the following command to generate a public key:

```bash
openssl pkey -in private.pem -pubout --out public.pem
```

This will create a file `public.pem` with the public key. We will use this key when submitting the plugin package to the store.

The file `public.pem` will contain the following format:

```
-----BEGIN PUBLIC KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PUBLIC KEY-----
```

## Step 4: Create a release

To submit your plugin package to the store, you need to create a release.

Releases are hosted on GitHub and contain the plugin package zip archive and its signature.

1. [Create a workflow](https://docs.github.com/en/actions/writing-workflows/quickstart#creating-your-first-workflow) with the following content:

    ```yaml
    name: 🚀 Release

    on:
      workflow_dispatch:

    env:
      NODE_VERSION: 20
      PNPM_VERSION: 9

    jobs:
      release:
        name: Release
        runs-on: ubuntu-latest
        permissions:
          contents: write

        steps:
          - name: Checkout project
            uses: actions/checkout@v4

          - name: Check version
            id: meta
            run: |
              VERSION=$(jq -r .version manifest.json)
              echo "version=${VERSION}" >> $GITHUB_OUTPUT

          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: ${{ env.NODE_VERSION }}

          - name: Setup pnpm
            uses: pnpm/action-setup@v4
            with:
              version: ${{ env.PNPM_VERSION }}
              run_install: true

          - name: Build package
            run: pnpm build

          - name: Sign package
            working-directory: dist
            run: |
              if [[ -z "${{ secrets.PRIVATE_KEY }}" ]]; then
                echo "Set an ed25519 key as PRIVATE_KEY in GitHub Action secret to sign."
              else
                echo "${{ secrets.PRIVATE_KEY }}" > private_key.pem
                openssl pkeyutl -sign -inkey private_key.pem -out plugin_package.zip.sig -rawin -in plugin_package.zip
                rm private_key.pem
              fi

          - name: Create release
            uses: ncipollo/release-action@v1
            with:
              tag: ${{ steps.meta.outputs.version }}
              commit: ${{ github.sha }}
              body: 'Release ${{ steps.meta.outputs.version }}'
              artifacts: 'dist/plugin_package.zip,dist/plugin_package.zip.sig'
    ```

1. [Create a Github Action Secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) called `PRIVATE_KEY` with the content of the private key generated in [Step 3](#step-3-generate-a-key-pair).
1. Go to the `Actions` tab of your repository and trigger the `Release` workflow.

<img width="800" alt="Store release Github Workflow" src="/_images/store_release.png" center/>

::: info Don't want to use a workflow?

If you prefer not to use a workflow, follow these steps to create a release manually:

1. Build the plugin package zip archive. If you use the starterkit, this will be `pnpm build` and it will create `dist/plugin_package.zip`.
1. Generate the signature:

   ```bash
   openssl pkeyutl -sign -inkey private.pem -out dist/plugin_package.zip.sig -rawin -in dist/plugin_package.zip
   ```

1. [Create a GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release). The `Tag version` of the release must match the version in your `manifest.json`, it **must not** include a `v` prefix.
1. Enter a name for the release, and describe it in the description field. Caido doesn't use the release name for anything, but we recommend also using the version for simplicity.
1. Upload the following assets to the release as binary attachments:
   - `plugin_package.zip`
   - `plugin_package.zip.sig`

:::

## Step 5: Submit your plugin for review

In this step, we will submit your plugin to the Caido [store](https://github.com/caido/store) for review.

1. In [plugin_packages.json](https://github.com/caido/store/edit/main/plugin_packages.json), add a new entry at the end of the JSON array.

    ```json
    {
      "id": "my-unique-plugin",
      "name": "My Unique Plugin",
      "license": "CC0-1.0",
      "description": "This my super cool new Caido plugin",
      "author": {
        "name": "John Doe",
        "email": "john@example.com",
        "url": "https://example.com"
      },
      "public_key": "MCowBQYDK2VwAyEA0zDx1tIO7S/d+AYFjLLmTA6pvuEyf+70KfcgVi1DNhc=",
      "repository": "john/my-unique-plugin"
    }
    ```

      - `id` is unique to your plugin. Search `plugin_packages.json` to confirm that there's no existing plugin with the same id.
      - `name`, `license`, `description` and `author` determine how your plugin appear to the user in Caido.
      - `public_key` is the base64 part of the public key generated in [Step 3](#step-3-generate-a-key-pair). **Don't** include the header/footer (`BEGIN/END PUBLIC KEY`).
      - `repository` is the path to your GitHub repository. For example, if your GitHub repo is <https://github.com/username/repo-name>, the path is `username/repo-name`.

    **Remember to add a comma after the closing brace `}` of the previous entry otherwise the json will not be valid!**

1. Select `Commit changes...` in the upper-right corner.
1. Select `Propose changes`.
1. In the name of the pull request, enter `Add <YOUR PLUGIN PACKAGE NAME>`
1. Fill in the details in the description for the pull request. For the checkboxes, insert an x between the brackets, [x], to mark them as done.
1. Click `Create pull request`.

You've now submitted your plugin package to the Caido store. Our bot will verify that the format is correct and you will have to sign the [Contributor License Agreement](https://cla-assistant.io/caido/store).
Once your submission is ready for review, you can sit back and wait for the Caido team to review it.

## Step 6: Address review comments

Once a Caido team member has reviewed your plugin, they will add a comment to your pull request with the result of the review. The reviewer may ask that you update your plugin, or they can offer suggestions on how you can improve it.

Address any required changes and update the GitHub release with the new changes. Leave a comment on the PR to let us know you've addressed the feedback.

We will publish the plugin as soon we have verified that all required changes have been addressed.

## Next steps

Once your plugin is published, it is time to announce it to the community ✨

- Announce it in the Plugin `#discussion` channel on [Discord](https://links.caido.io/www-discord).
