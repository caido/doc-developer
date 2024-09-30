[@caido/sdk-backend](../index.md) / RequestsQuery

# Type Alias: RequestsQuery

> **RequestsQuery**: `object`

Query builder to fetch requests.

## Type declaration

### after()

Requests after a given cursor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | `string` | Cursor of the request |

#### Returns

[`RequestsQuery`](RequestsQuery.md)

### ascending()

#### ascending(target, field)

Ascending ordering.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](RequestOrderField.md) | Field to order by. |

##### Returns

[`RequestsQuery`](RequestsQuery.md)

#### ascending(target, field)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](ResponseOrderField.md) |

##### Returns

[`RequestsQuery`](RequestsQuery.md)

### before()

Requests before a given cursor.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | `string` | Cursor of the request |

#### Returns

[`RequestsQuery`](RequestsQuery.md)

### descending()

#### descending(target, field)

Descending ordering.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](RequestOrderField.md) | Field to order by. |

##### Returns

[`RequestsQuery`](RequestsQuery.md)

#### descending(target, field)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](ResponseOrderField.md) |

##### Returns

[`RequestsQuery`](RequestsQuery.md)

### execute()

Execute the query.

#### Returns

`Promise`\<[`RequestsConnection`](RequestsConnection.md)\>

#### Throws

If a query parameter is invalid or the query cannot be executed.

### filter()

Filter requests.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | `string` | HTTPQL filter |

#### Returns

[`RequestsQuery`](RequestsQuery.md)

### first()

First n requests.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

#### Returns

[`RequestsQuery`](RequestsQuery.md)

### last()

Last n requests.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

#### Returns

[`RequestsQuery`](RequestsQuery.md)
