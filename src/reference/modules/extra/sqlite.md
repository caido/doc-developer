[@caido/quickjs-types](../index.md) / extra/sqlite

# extra/sqlite

## Classes

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

## Type Aliases

### OpenOptions

> **OpenOptions** = `object`

#### Properties

##### busyTimeout?

> `optional` **busyTimeout**: `number`

Time (in milliseconds) to wait for the database to be unlocked before throwing an error.

###### Default

```ts
5000
```

##### filename?

> `optional` **filename**: `string`

The filename of the database. If the file does not exist, a new one will be created.

##### foreignKeys?

> `optional` **foreignKeys**: `boolean`

Enable foreign key constraints.

##### idleTimeout?

> `optional` **idleTimeout**: `number`

Maximum amount of time (in seconds) that a connection is allowed to be idle before it is closed.

###### Default

```ts
infinity
```

##### in\_memory?

> `optional` **in\_memory**: `boolean`

If true, the database will be opened in-memory.

###### Default

```ts
false
```

##### maxConnections?

> `optional` **maxConnections**: `number`

Maximum number of connections to the database.

###### Default

```ts
5
```

##### maxLifetime?

> `optional` **maxLifetime**: `number`

Maximum amount of time (in seconds) that a connection is allowed to exist before it is closed.
Set to `null` to disable.

###### Default

```ts
3600
```

##### minConnections?

> `optional` **minConnections**: `number`

Minimum number of connections to the database.

###### Default

```ts
0
```

##### pageSize?

> `optional` **pageSize**: `number`

Set the SQlite page size.

###### Default

```ts
4096
```

##### wal?

> `optional` **wal**: `boolean`

If true, the database will use the WAL mode.

###### Default

```ts
true
```

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

## Functions

### open()

> **open**(`options`: [`OpenOptions`](#openoptions)): `Promise`\<[`Database`](#database)\>

Open a SQLite database.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OpenOptions`](#openoptions) | The options to open the database. |

#### Returns

`Promise`\<[`Database`](#database)\>
