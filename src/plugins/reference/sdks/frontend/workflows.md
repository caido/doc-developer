# Workflows

### OnCreatedWorkflowCallback()

> **OnCreatedWorkflowCallback** = (`event`: `object`) => `void`

Callback function called when a workflow is created.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `workflow`: [`Workflow`](#workflow); \} |
| `event.workflow` | [`Workflow`](#workflow) |

#### Returns

`void`

***

### OnDeletedWorkflowCallback()

> **OnDeletedWorkflowCallback** = (`event`: `object`) => `void`

Callback function called when a workflow is deleted.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `id`: [`ID`](utils.md#id); \} |
| `event.id` | [`ID`](utils.md#id) |

#### Returns

`void`

***

### OnUpdatedWorkflowCallback()

> **OnUpdatedWorkflowCallback** = (`event`: `object`) => `void`

Callback function called when a workflow is updated.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \{ `workflow`: [`Workflow`](#workflow); \} |
| `event.workflow` | [`Workflow`](#workflow) |

#### Returns

`void`

***

### Workflow

> **Workflow** = `object`

A workflow

#### Properties

##### description

> **description**: `string`

##### id

> **id**: `string`

##### kind

> **kind**: [`WorkflowKind`](#workflowkind)

##### name

> **name**: `string`

***

### WorkflowKind

> **WorkflowKind** = `"Convert"` \| `"Active"` \| `"Passive"`

The kind of workflow.

***

### WorkflowSDK

> **WorkflowSDK** = `object`

Utilities to interact with workflows.

#### Properties

##### getWorkflows()

> **getWorkflows**: () => [`Workflow`](#workflow)[]

Get all workflows.

###### Returns

[`Workflow`](#workflow)[]

All workflows.

##### onCreatedWorkflow()

> **onCreatedWorkflow**: (`callback`: [`OnCreatedWorkflowCallback`](#oncreatedworkflowcallback)) => [`ListenerHandle`](utils.md#listenerhandle)

Register a callback to be called when a workflow is created.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnCreatedWorkflowCallback`](#oncreatedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

##### onDeletedWorkflow()

> **onDeletedWorkflow**: (`callback`: [`OnDeletedWorkflowCallback`](#ondeletedworkflowcallback)) => [`ListenerHandle`](utils.md#listenerhandle)

Register a callback to be called when a workflow is deleted.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnDeletedWorkflowCallback`](#ondeletedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

##### onUpdatedWorkflow()

> **onUpdatedWorkflow**: (`callback`: [`OnUpdatedWorkflowCallback`](#onupdatedworkflowcallback)) => [`ListenerHandle`](utils.md#listenerhandle)

Register a callback to be called when a workflow is updated.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | [`OnUpdatedWorkflowCallback`](#onupdatedworkflowcallback) | The callback to be called. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

***

### WorkflowsPageContext

> **WorkflowsPageContext** = `object`

Workflows page context.

#### Properties

##### kind

> **kind**: `"Workflows"`
