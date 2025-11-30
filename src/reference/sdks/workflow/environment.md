# Environment

### EnvironmentSDK

> **EnvironmentSDK** = `object`

The SDK for the Environment service.

#### Methods

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
Secrets are encrypted on the disk.

###### Default

```ts
false
```

##### value

> **value**: `string`

Value of the environment variable
