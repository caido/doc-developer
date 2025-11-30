# Commands

### CommandContext

> **CommandContext** = [`CommandContextBase`](#commandcontextbase) \| [`CommandContextRequestRow`](#commandcontextrequestrow) \| [`CommandContextRequest`](#commandcontextrequest) \| [`CommandContextResponse`](#commandcontextresponse)

Represents the context in which a command is executed.

***

### CommandContextBase

> **CommandContextBase** = `object`

The base context for a command.
This context is used for commands that are not executed in a specific context, such as via shortcuts and the command palette.

#### Properties

##### type

> **type**: `"BaseContext"`

***

### CommandContextRequest

> **CommandContextRequest** = `object`

The context for a command that is executed on a request pane.

#### Properties

##### request

> **request**: [`RequestDraft`](request.md#requestdraft) \| [`RequestFull`](request.md#requestfull)

The request that is currently open in the request pane.
If the request has not yet been saved in the database, the id will be undefined.

##### selection

> **selection**: `string`

The currently selected text in the request pane.

##### type

> **type**: `"RequestContext"`

***

### CommandContextRequestRow

> **CommandContextRequestRow** = `object`

The context for a command that is executed on a row in the request table.

#### Properties

##### requests

> **requests**: [`RequestMeta`](request.md#requestmeta)[]

The requests that are selected in the request table.

##### type

> **type**: `"RequestRowContext"`

***

### CommandContextResponse

> **CommandContextResponse** = `object`

The context for a command that is executed on a response pane.

#### Properties

##### request

> **request**: [`RequestMeta`](request.md#requestmeta)

The request that is associated with the response.

##### response

> **response**: `object`

The response that is currently open in the response pane.

###### id

> **id**: [`ID`](utils.md#id)

###### raw

> **raw**: `string`

###### roundtripTime

> **roundtripTime**: `number`

###### statusCode

> **statusCode**: `number`

##### selection

> **selection**: `string`

The currently selected text in the response pane.

##### type

> **type**: `"ResponseContext"`

***

### CommandsSDK

> **CommandsSDK** = `object`

Utilities to interact with commands

#### Properties

##### register()

> **register**: (`id`: [`CommandID`](other.md#commandid), `options`: `object`) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`CommandID`](other.md#commandid) | The id of the command. |
| `options` | \{ `group?`: `string`; `name`: `string`; `run`: (`context`: [`CommandContext`](#commandcontext)) => `Promise`\<`void`\> \| `void`; `when?`: (`context`: [`CommandContext`](#commandcontext)) => `Promise`\<`boolean`\> \| `boolean`; \} | Options for the command. |
| `options.group?` | `string` | The group this command belongs to. |
| `options.name` | `string` | The name of the command. |
| `options.run` | (`context`: [`CommandContext`](#commandcontext)) => `Promise`\<`void`\> \| `void` | The function to run when the command is executed. |
| `options.when?` | (`context`: [`CommandContext`](#commandcontext)) => `Promise`\<`boolean`\> \| `boolean` | A function to determine if the command is available. |

###### Returns

`void`

###### Example

```ts
sdk.commands.register("hello", {
  name: "Print to console.",
  run: () => console.log("Hello world!"),
  group: "Custom Commands",
});
```
