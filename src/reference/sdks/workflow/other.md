# Other

### Console

> **Console** = `object`

Console interface for logging.

Currently logs are only available in the backend logs.
See the [documentation](https://docs.caido.io/report_bug.html#1-backend-logs) on how to retrieve them.

#### Methods

##### debug()

> **debug**(`message`: `any`): `void`

Log a message with the debug level.

Usually used for troubleshooting purposes.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### error()

> **error**(`message`: `any`): `void`

Log a message with the error level.

Usually used for critical errors.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### log()

> **log**(`message`: `any`): `void`

Log a message with the info level.

Usually used for general information.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### warn()

> **warn**(`message`: `any`): `void`

Log a message with the warn level.

Usually used for unexpected behaviors.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

***

### CreateEnvironmentInput

> **CreateEnvironmentInput** = `object`

#### Properties

##### name

> **name**: `string`

The name of the environment.

##### variables

> **variables**: [`EnvironmentVariable`](environment.md#environmentvariable)[]

The variables of the environment.

***

### EnvironmentVariableInput

> **EnvironmentVariableInput** = `object`

#### Properties

##### name

> **name**: `string`

The name of the environment variable.

##### secret

> **secret**: `boolean`

If the environment variable should be treated as secret.

##### value

> **value**: `string`

The value of the environment variable.

***

### PageInfo

> **PageInfo** = `object`

Information on the current page of paginated data.

#### Properties

##### endCursor

> **endCursor**: [`Cursor`](shared.md#cursor)

##### hasNextPage

> **hasNextPage**: `boolean`

##### hasPreviousPage

> **hasPreviousPage**: `boolean`

##### startCursor

> **startCursor**: [`Cursor`](shared.md#cursor)

***

### UpdateEnvironmentInput

> **UpdateEnvironmentInput** = `object`

#### Properties

##### name?

> `optional` **name**: `string`

The name of the environment.

##### variables?

> `optional` **variables**: [`EnvironmentVariableInput`](#environmentvariableinput)[]

The variables of the environment.

##### version

> **version**: `number`

The version of the environment to update.
If not equal to the current version, the update will fail.
