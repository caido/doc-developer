[@caido/sdk-backend](../index.md) / Database

# Class: Database

A SQLite database.

The implementation uses a connection pool and is fully asynchronous.
Each connection will be spawned in a worker thread.

## Example

```ts
const db = await open({ filename: "path/to/database.sqlite" });
await db.exec("CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT);");
await db.exec("INSERT INTO test (name) VALUES ('foo');");
```

## Constructors

### new Database()

> **new Database**(): [`Database`](Database.md)

#### Returns

[`Database`](Database.md)

## Methods

### exec()

> **exec**(`sql`): `Promise`\<`void`\>

This method allows one or more SQL statements to be executed without returning any results.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

#### Returns

`Promise`\<`void`\>

***

### prepare()

> **prepare**(`sql`): [`Statement`](Statement.md)

Compiles a SQL statement into a [prepared statement](https://www.sqlite.org/c3ref/stmt.html).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

#### Returns

[`Statement`](Statement.md)
