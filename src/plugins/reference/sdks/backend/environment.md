# Environment

### Environment

> **Environment** = `object`

A saved immutable Environment.

#### Properties

##### id

> `readonly` **id**: [`ID`](shared.md#id)

The ID of the environment.

##### name

> `readonly` **name**: `string`

The name of the environment.

##### variables

> `readonly` **variables**: [`EnvironmentVariable`](#environmentvariable)[]

The variables of the environment.

##### version

> `readonly` **version**: `number`

The version of the environment.

***

### EnvironmentSDK

> **EnvironmentSDK** = `object`

The SDK for the Environment service.

#### Methods

##### createEnvironment()

> **createEnvironment**(`input`: [`CreateEnvironmentInput`](other.md#createenvironmentinput)): `Promise`\<[`Environment`](#environment)\>

Create a new environment.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`CreateEnvironmentInput`](other.md#createenvironmentinput) | The input for the creation. |

###### Returns

`Promise`\<[`Environment`](#environment)\>

The created environment.

##### deleteEnvironment()

> **deleteEnvironment**(`id`: [`ID`](shared.md#id)): `Promise`\<`void`\>

Delete an environment by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](shared.md#id) | The ID of the environment. |

###### Returns

`Promise`\<`void`\>

##### getEnvironment()

> **getEnvironment**(`id`: [`ID`](shared.md#id)): `Promise`\<[`Environment`](#environment) \| `undefined`\>

Get an environment by its ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](shared.md#id) | The ID of the environment. |

###### Returns

`Promise`\<[`Environment`](#environment) \| `undefined`\>

The environment or undefined if not found.

##### getEnvironments()

> **getEnvironments**(): `Promise`\<[`Environment`](#environment)[]\>

Get all the environments.

###### Returns

`Promise`\<[`Environment`](#environment)[]\>

An array of [Environment](#environment)

##### getVar()

> **getVar**(`name`: `string`): `string` \| `undefined`

Get the value of an environment variable.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the environment variable. |

###### Returns

`string` \| `undefined`

The value of the environment variable.

##### getVars()

> **getVars**(): [`EnvironmentVariable`](#environmentvariable)[]

Get all the environment variables.
It includes the global environment and the selected environment.
Those variables can change over time so avoid caching them.

###### Returns

[`EnvironmentVariable`](#environmentvariable)[]

An array of [EnvironmentVariable](#environmentvariable)

##### setVar()

> **setVar**(`input`: [`SetVarInput`](#setvarinput)): `Promise`\<`void`\>

Sets an environment variable to a given value.
This will override any existing value.
The environment variable can be set either on the currently
selected environment or the global environment.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SetVarInput`](#setvarinput) |

###### Returns

`Promise`\<`void`\>

###### Throws

If trying to set when a project is not selected.

###### Throws

If trying to set when an environment is not selected (with `global: false`).

###### Example

```js
await sdk.env.setVar({
  name: "USER_SECRET",
  value: "my secret value",
  secret: true,
  global: false
});
```

##### updateEnvironment()

> **updateEnvironment**(`id`: [`ID`](shared.md#id), `input`: [`UpdateEnvironmentInput`](other.md#updateenvironmentinput)): `Promise`\<[`Environment`](#environment)\>

Update an environment.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](shared.md#id) | The ID of the environment. |
| `input` | [`UpdateEnvironmentInput`](other.md#updateenvironmentinput) | The input for the update. |

###### Returns

`Promise`\<[`Environment`](#environment)\>

The updated environment.

###### Throws

If the version passed in is not equal to the current version of the environment.

###### Example

```js
const environment = await sdk.env.getEnvironment(id);
await sdk.env.updateEnvironment(id, {
  version: environment.version,
  name: "new name",
  variables: [{ name: "USER_SECRET", value: "new secret value", secret: true }],
});
```

***

### EnvironmentVariable

> **EnvironmentVariable** = `object`

A saved immutable Finding.

#### Properties

##### isSecret

> `readonly` **isSecret**: `boolean`

If the environment variable is a secret

##### name

> `readonly` **name**: `string`

The name of the environment variable

##### value

> `readonly` **value**: `string`

The value of the environment variable

***

### SetVarInput

> **SetVarInput** = `object`

Input for the `setVar` of [EnvironmentSDK](#environmentsdk).

#### Properties

##### env?

> `optional` **env**: `string`

The `name` of the Environment to set the variable on.
This will take precedence over the `global` flag if provided.

##### global

> **global**: `boolean`

If the environment variable should be set on the global
environment or the currently selected environment.
By default, it will be set globally.

###### Default

```ts
true
```

##### name

> **name**: `string`

Name of the environment variable

##### secret

> **secret**: `boolean`

If the environment variable should be treated as secret.

###### Default

```ts
false
```

##### value

> **value**: `string`

Value of the environment variable
