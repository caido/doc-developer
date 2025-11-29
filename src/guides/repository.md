# Set Up Repository

Caido uses [GitHub](https://github.com) to download and distribute plugin packages. To share your plugin with the community, you’ll first need to set up a Github repository that meets Caido’s requirements.

## 1. Create Your Project

Let's create a new project. Run the following command in your terminal and follow the instructions:

```bash
pnpm create @caido-community/plugin
```

This command will help you generate the basic structure and files needed for your plugin project.

If you’re new to Caido or want more detailed instructions, visit the [Getting Started](/guides/) section for additional guidance on using this setup process .

## 2. Create a Repository

Now we'll create a repository on Github. This repository will host your plugin code, and will be used to distribute your plugin package in the Caido Store.

1. Visit [https://github.com/new](https://github.com/new)
2. Give it a name and a description
3. Click the `Create repository` button
4. In your terminal, navigate to your project folder (created in the step 1)

```bash
cd my-plugin
```

5. Connect your local project to your Github repository

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

::: info
The steps above will create a repository under your own account.

If you would like to host your repository under the [caido-community](https://github.com/caido-community) organization instead, you can request a repository on our [Discord server](https://links.caido.io/www-discord).
:::

## 3. Generate a Key-Pair

Plugin packages **must** be digitally signed to be installable in Caido.

To sign your plugin package, you need to generate a public/private key-pair.

::: info
Plugin package signing is done using [Ed25519 public-key signatures](https://cendyne.dev/posts/2022-03-06-ed25519-signatures.html).
:::

### Generate the Private Key

Run the following command to generate a private key:

```bash
openssl genpkey -algorithm ed25519 -out private.pem
```

This will create a file `private.pem` with the private key. We will use this key to sign our plugin package when we create a release.

::: warning
**Keep this key private!** Ideally, you should encrypt it or store it in [Github Action Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
:::

The file `private.pem` will contain the following format:

```text
-----BEGIN PRIVATE KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PRIVATE KEY-----
```

### Generate the Public Key

Run the following command to generate a public key:

```bash
openssl pkey -in private.pem -pubout --out public.pem
```

This will create a file `public.pem` with the public key. We will use this key when submitting the plugin package to the store.

The file `public.pem` will contain the following format:

```text
-----BEGIN PUBLIC KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PUBLIC KEY-----
```

## 4. Create a Release

Now that your repository and key-pair are ready, it’s time to create a release!

1. [Create a Github Action Secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) called `PRIVATE_KEY` with the content of the private key generated in [step 3](#3-generate-a-key-pair).
1. [Enable release immutability](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/immutable-releases) in the repository General settings.
1. Go to the `Actions` tab of your repository and trigger the `Release` workflow.

This will create an immutable release with the version specified in your project's [caido.config.ts](/guides/config#version) file.

<img width="800" alt="Store release Github Workflow" src="/_images/store_release.png" center/>

## What's next?

Now that you have a repository and a release, you can submit your plugin to the Caido Store for review.
