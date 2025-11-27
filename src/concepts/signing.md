# Plugin Signing

If you have gone through the [process of publishing a plugin](/guides/repository.md) to our store, you had to create keys to sign your plugin.
This ensures that your build process outputs a valid signature on each release.
You can see that signature by looking at the attached files of a given release, it contains a `.sig` file.

<img alt="Plugin package signature" src="/_images/plugin_package_sig.png" width="800" center/>

## Why signing

The digital signatures are built using [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography).
This means that a private key is used to generate the signature and a public is used to verify it.
That allows users to authenticate the provenance of a given plugin.

In fact, Caido does that automatically when a user downloads a plugin from the store. We use the public key set in the store [`plugin_packages.json`](https://github.com/caido/store/blob/main/plugin_packages.json) to verify the signature of that particular plugin release. If the signature is valid, then we have a higher level of confience that the plugin is genuine and we proceed with the installation.

Obviously this is not a perfect heuristic since a plugin author could go rogue or could disclose its private key by accident, but it is layer of defense to prevent malicious plugins from getting into the store.

## Supported keys

Caido uses [Edwards-curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/EdDSA) (EdDSA) with the `Ed25519` scheme.
We use this scheme throughout the Caido ecosystem.

::: info
We do NOT support any other digital signature scheme. If you try to use another, the signatures will be rejected by Caido.
:::

## Best practices

Here are the best practices to consider as a plugin developer:

- Use one key pair per plugin, that reduces the impact if your key is leaked.
- Store the private key in a secure location, we recommend [Github Actions Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
- Always encrypt your private key and don't leave it as plain-text on your computer, think of it as a password

::: warning
If you accept contributions on your Github repository, make sure you are careful around changes to the `Github Actions` as those could leak your key.
[See the tips of Github](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-public-forks) on the subject.
:::
