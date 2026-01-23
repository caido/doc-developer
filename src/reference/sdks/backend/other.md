# Other

### Database

A SQLite database.

The implementation uses a connection pool and is fully asynchronous.
Each connection will be spawned in a worker thread.

#### Example

```ts
const db = await open({ filename: "path/to/database.sqlite" });
await db.exec("CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT);");
await db.exec("INSERT INTO test (name) VALUES ('foo');");
```

#### Constructors

##### Constructor

> **new Database**(): [`Database`](#database)

###### Returns

[`Database`](#database)

#### Methods

##### exec()

> **exec**(`sql`: `string`): `Promise`\<`void`\>

This method allows one or more SQL statements to be executed without returning any results.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

###### Returns

`Promise`\<`void`\>

##### prepare()

> **prepare**(`sql`: `string`): `Promise`\<[`Statement`](#statement)\>

Compiles a SQL statement into a [prepared statement](https://www.sqlite.org/c3ref/stmt.html).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

###### Returns

`Promise`\<[`Statement`](#statement)\>

***

### Statement

This class represents a single prepared statement. This class cannot be instantiated via its constructor.
Instead, instances are created via the database.prepare() method.

#### Constructors

##### Constructor

> **new Statement**(): [`Statement`](#statement)

###### Returns

[`Statement`](#statement)

#### Methods

##### all()

> **all**\<`T`\>(...`params`: [`Parameter`](#parameter)[]): `Promise`\<`T`[]\>

This method executes a prepared statement and returns all results as an array of objects.
If the prepared statement does not return any results, this method returns an empty array.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in `params`.

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<`T`[]\>

##### get()

> **get**\<`T`\>(...`params`: [`Parameter`](#parameter)[]): `Promise`\<`T` \| `undefined`\>

This method executes a prepared statement and returns the first result as an object.
If the prepared statement does not return any results, this method returns undefined.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in params.

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<`T` \| `undefined`\>

##### run()

> **run**(...`params`: [`Parameter`](#parameter)[]): `Promise`\<[`Result`](#result)\>

This method executes a prepared statement and returns an object summarizing the resulting changes.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in params.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<[`Result`](#result)\>

***

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

### Parameter

> **Parameter** = `null` \| `number` \| `bigint` \| `string` \| `Uint8Array`

***

### Result

> **Result** = `object`

#### Properties

##### changes

> **changes**: `number`

##### lastInsertRowid

> **lastInsertRowid**: `number`
