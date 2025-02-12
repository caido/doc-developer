# Backend Plugins vs Workflows

You might be wondering what the differences between a Workflow and a backend plugin are.
We are aware that the two concepts might be confusing since both give you scripting access to Caido and generally expose the same functionalities.
But they serve different purposes.

## Workflow

Workflows are our low-code/no-code solution. You should generally start with them if you need to extend Caido.
The pre-made Nodes use the [Workflow SDK](/reference/sdks/workflow/) of Caido under-the-hood.
Workflows run on-demand and they don't persist in-between runs. They are similar in concept to Lambdas or Functions-as-a-Service system.

When using the Javascript Node, you have a full access to the [Workflow SDK](/reference/sdks/workflow/).
The [runtime](/concepts/essentials/runtime) for that Javascript code is the same as for the backend plugins, but the SDK has access to less functionalities.
This is why it is easier to start with a Workflow using Javascript Nodes and then transition to a backend plugin.

<img alt="Workflow editor" src="/_images/workflow_editor.png" width="800" center/>

## Backend Plugins

Backend plugins give you a long running thread inside Caido that uses our Javascript [runtime](/concepts/essentials/runtime).
It can use the [Backend SDK](/reference/sdks/backend/) which is similar to the [Workflow SDK](/reference/sdks/workflow/), but with more features.
For example, it can expose an API that a `frontend plugin` can use.

Generally if your intent is to create an interface in Caido (via a `frontend plugin`), you will need a `backend plugin` to go with it.

<img alt="Backend plugin starterkit code" src="/_images/backend_plugin_starter.png" width="700" center/>
