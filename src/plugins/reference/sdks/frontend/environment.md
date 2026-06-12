# Environment

### EnvironmentPageContext

> **EnvironmentPageContext** = `object`

Environment page context.

#### Properties

##### kind

> **kind**: `"Environment"`

##### selection

> **selection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

***

### EnvironmentSDK

> **EnvironmentSDK** = `object`

Utilities to interact with the environment.

#### Properties

##### getVar()

> **getVar**: (`name`: `string`) => `string` \| `undefined`

Get the value of an environment variable.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the environment variable. |

###### Returns

`string` \| `undefined`

The value of the environment variable.

##### getVars()

> **getVars**: () => [`EnvironmentVariable`](#environmentvariable)[]

Get all environment variables available in the global environment and the selected environment.

###### Returns

[`EnvironmentVariable`](#environmentvariable)[]

All environment variables.

***

### EnvironmentVariable

> **EnvironmentVariable** = `object`

Represents an environment variable.

#### Properties

##### isSecret

> **isSecret**: `boolean`

Whether the environment variable is a secret.

##### name

> **name**: `string`

The name of the environment variable.

##### value

> **value**: `string`

The value of the environment variable.
