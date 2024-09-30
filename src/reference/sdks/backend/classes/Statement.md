[@caido/sdk-backend](../index.md) / Statement

# Class: Statement

This class represents a single prepared statement. This class cannot be instantiated via its constructor.
Instead, instances are created via the database.prepare() method.

## Constructors

### new Statement()

> **new Statement**(): [`Statement`](Statement.md)

#### Returns

[`Statement`](Statement.md)

## Methods

### all()

> **all**\<`T`\>(...`params`): `Promise`\<`T`[]\>

This method executes a prepared statement and returns all results as an array of objects.
If the prepared statement does not return any results, this method returns an empty array.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in `params`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](../type-aliases/Parameter.md)[] | The values to bind to the prepared statement. Named parameters are not supported. |

#### Returns

`Promise`\<`T`[]\>

***

### get()

> **get**\<`T`\>(...`params`): `Promise`\<`undefined` \| `T`\>

This method executes a prepared statement and returns the first result as an object.
If the prepared statement does not return any results, this method returns undefined.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in params.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | `object` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](../type-aliases/Parameter.md)[] | The values to bind to the prepared statement. Named parameters are not supported. |

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### run()

> **run**(...`params`): `Promise`\<[`Result`](../type-aliases/Result.md)\>

This method executes a prepared statement and returns an object summarizing the resulting changes.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in params.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](../type-aliases/Parameter.md)[] | The values to bind to the prepared statement. Named parameters are not supported. |

#### Returns

`Promise`\<[`Result`](../type-aliases/Result.md)\>
