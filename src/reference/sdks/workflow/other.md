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

### RequestSendOptions

> **RequestSendOptions** = `object`

#### Properties

##### save?

> `optional` **save**: `boolean`

If true, the request and response will be saved to the database
and the user will see them in the Search tab.

If you do not save, the request and response IDs will be set to 0.

###### Default

```ts
true
```

##### timeouts?

> `optional` **timeouts**: [`RequestSendTimeouts`](requests.md#requestsendtimeouts) \| `number`

The timeouts to use for sending a request and receiving a response.

If a number is provided, it will be used as the global timeout and
the other timeouts will be set to infinity.

See the [RequestSendTimeouts](requests.md#requestsendtimeouts) for the default values.
