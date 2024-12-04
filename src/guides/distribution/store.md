# Submitting to the Store

If you want to share your plugin package with the Caido community, the best way is to submit it to the official list of plugin packages.

Once we've reviewed and published your plugin package, users will be able to install it directly from within Caido.

The submission process is done once. Once your plugin package has been accepted, you'll be able to release new versions of it by creating new releases in your repository.

## Prerequisites

Before submitting your plugin package to the store, make sure you have followed the [Setting Up Your Repository](/guides/distribution/repository) guide.

By this point, you should have a repository with a [Github release](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) of your plugin package.

## 1. Submit Your Plugin for Review

The official list of plugin packages can be found in the `plugin_packages.json` file in the [caido/store](https://github.com/caido/store) repository.

In order to submit your plugin package, you need to update the `plugin_packages.json` file via a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

1. Visit [plugin_packages.json](https://github.com/caido/store/edit/main/plugin_packages.json) to edit the file.

1. Add a new entry at the end of the JSON array. **Remember to add a comma after the closing brace `}` of the previous entry otherwise the json will not be valid.** Visit the [reference](/reference/plugin_packages) page for more information on each field.

    ```json
    {
      "id": "my-unique-plugin",
      "name": "My Unique Plugin",
      "license": "MIT",
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

1. Select `Commit changes...` in the upper-right corner.
1. Select `Propose changes`.
1. Name your pull request `Add <YOUR PLUGIN PACKAGE NAME>`
1. Fill in the details in the description for the pull request. For the checkboxes, insert an x between the brackets, [x], to mark them as done.
1. Click `Create pull request`.

You've now submitted your plugin package to the Caido store. Our bot will verify that the format is correct and you will have to sign the [Contributor License Agreement](https://cla-assistant.io/caido/store).
Once your submission is ready for review, you can sit back and wait for the Caido team to review it.

## 2. Address Review Comments

Once a Caido team member has reviewed your plugin, they will add a comment to your pull request with the result of the review. The reviewer may ask that you update your plugin, or they can offer suggestions on how you can improve it.

Address any required changes and update the GitHub release with the new changes. Leave a comment on the PR to let us know you've addressed the feedback.

We will publish the plugin as soon we have verified that all required changes have been addressed.

## What's next?

Once your plugin is published, it is time to announce it to the community ✨

- Announce it in the Plugin `#discussion` channel on [Discord](https://links.caido.io/www-discord).
