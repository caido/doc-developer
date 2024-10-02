# @caido/sdk-backend

This is the reference for the backend SDK used by backend plugins.
[SDK](interfaces/SDK.md) is the main interface that provides access to various services and functionalities.

## SDK

### SDK\<API, Events\>

The SDK object available to all scripts.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Properties

##### api

> **api**: [`APISDK`](index.md#apisdkapi-events)\<`API`, `Events`\>

The SDK for the API RPC service.

##### console

> **console**: [`Console`](index.md#console-1)

The console.

This is currently the same as the global `console`.

##### events

> **events**: [`EventsSDK`](index.md#eventssdkapi-events)\<`API`, `Events`\>

The SDK for the Events service.

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

The SDK for the Findings service.

##### meta

> **meta**: [`MetaSDK`](index.md#metasdk)

The SDK for metadata information about the plugin.

##### replay

> **replay**: [`ReplaySDK`](index.md#replaysdk)

The SDK for the Replay service.

##### requests

> **requests**: [`RequestsSDK`](index.md#requestssdk)

The SDK for the Requests service.

## MetaSDK

### MetaSDK

> **MetaSDK**: `object`

The SDK for metadata information about the plugin.

#### Type declaration

##### db()

Get a sqlite database for the plugin stored in Caido Data.
You can use this to store data related to your plugin.

###### Returns

`Promise`\<[`Database`](index.md#database)\>

##### path()

The directory of the plugin in Caido Data.
You can store data related to your plugin in this directory.

###### Returns

`string`

## APISDK

### APISDK\<API, Events\>

> **APISDK**\<`API`, `Events`\>: `object`

The SDK for the API RPC service.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Type declaration

##### register()

Registers a new backend function for the RPC.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | keyof `API` |
| `callback` | (`sdk`: [`SDK`](index.md#sdkapi-events)\<`object`, `object`\>, ...`args`: `any`[]) => `any` |

###### Returns

`void`

###### Example

```ts
sdk.api.register("multiply", (sdk: SDK, a: number, b: number) => {
   return a * b;
});
```

##### send()

Sends an event to the frontend plugin.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | keyof `Events` |
| ...`args` | `any`[] |

###### Returns

`void`

###### Example

```ts
sdk.api.send("myEvent", 5, "hello");
```

## EventsSDK

### EventsSDK\<API, Events\>

> **EventsSDK**\<`API`, `Events`\>: `object`

The SDK for the API RPC service.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Type declaration

##### onInterceptRequest()

Registers an callback on new intercepted requests.

This callback is called asynchronously and cannot modify requests.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdkapi-events)\<`API`, `Events`\>, `request`: [`Request`](index.md#request-2)) => [`MaybePromise`](index.md#maybepromiset-1)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onInterceptRequest((sdk: SDK, request: Request) => {
   // Do something with the request
});
```

##### onInterceptResponse()

Registers an callback on new intercepted responses.

This callback is called asynchronously and cannot modify responses.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdkapi-events)\<`API`, `Events`\>, `request`: [`Request`](index.md#request-2), `response`: [`Response`](index.md#response-3)) => [`MaybePromise`](index.md#maybepromiset-1)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onInterceptResponse((sdk: SDK, request: Request, response: Response) => {
   // Do something with the request/response
});
```

## RequestsSDK

### Body

The body of a Request or Response.

Calling `to<FORMAT>` will try to convert the body to the desired format.

#### Constructors

##### new Body()

> **new Body**(`data`: `string` \| `number`[] \| `Uint8Array`): [`Body`](index.md#body)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `number`[] \| `Uint8Array` |

###### Returns

[`Body`](index.md#body)

#### Methods

##### toJson()

> **toJson**(): `any`

Try to parse the body as JSON.

###### Returns

`any`

###### Throws

If the body is not valid JSON.

##### toRaw()

> **toRaw**(): `Uint8Array`

Get the raw body as an array of bytes.

###### Returns

`Uint8Array`

##### toText()

> **toText**(): `string`

Parse the body as a string.

Unprintable characters will be replaced with `�`.

###### Returns

`string`

***

### RequestSpec

A mutable Request not yet sent.

#### Constructors

##### new RequestSpec()

> **new RequestSpec**(`url`: `string`): [`RequestSpec`](index.md#requestspec)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpec`](index.md#requestspec)

#### Methods

##### getBody()

> **getBody**(): `undefined` \| [`Body`](index.md#body)

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getHeader()

> **getHeader**(`name`: `string`): `undefined` \| `string`[]

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

> **getHeaders**(): `Record`\<`string`, `string`[]\>

###### Returns

`Record`\<`string`, `string`[]\>

##### getHost()

> **getHost**(): `string`

###### Returns

`string`

##### getMethod()

> **getMethod**(): `string`

###### Returns

`string`

##### getPath()

> **getPath**(): `string`

###### Returns

`string`

##### getPort()

> **getPort**(): `number`

###### Returns

`number`

##### getQuery()

> **getQuery**(): `string`

###### Returns

`string`

##### getTls()

> **getTls**(): `boolean`

###### Returns

`boolean`

##### removeHeader()

> **removeHeader**(`name`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

##### setBody()

> **setBody**(`body`: [`Body`](index.md#body) \| [`Bytes`](index.md#bytes), `options`?: [`SetBodyOptions`](index.md#setbodyoptions)): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`Body`](index.md#body) \| [`Bytes`](index.md#bytes) |
| `options`? | [`SetBodyOptions`](index.md#setbodyoptions) |

###### Returns

`void`

##### setHeader()

> **setHeader**(`name`: `string`, `value`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

##### setHost()

> **setHost**(`host`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | `string` |

###### Returns

`void`

##### setMethod()

> **setMethod**(`method`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |

###### Returns

`void`

##### setPath()

> **setPath**(`path`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

###### Returns

`void`

##### setPort()

> **setPort**(`port`: `number`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |

###### Returns

`void`

##### setQuery()

> **setQuery**(`query`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

###### Returns

`void`

##### setRaw()

> **setRaw**(`raw`: [`Bytes`](index.md#bytes)): [`RequestSpecRaw`](index.md#requestspecraw)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](index.md#bytes) |

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

##### setTls()

> **setTls**(`tls`: `boolean`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tls` | `boolean` |

###### Returns

`void`

***

### RequestSpecRaw

A mutable raw Request not yet sent.

#### Constructors

##### new RequestSpecRaw()

> **new RequestSpecRaw**(`url`: `string`): [`RequestSpecRaw`](index.md#requestspecraw)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

#### Methods

##### getHost()

> **getHost**(): `string`

###### Returns

`string`

##### getPort()

> **getPort**(): `number`

###### Returns

`number`

##### getRaw()

> **getRaw**(): `Uint8Array`

###### Returns

`Uint8Array`

##### getTls()

> **getTls**(): `boolean`

###### Returns

`boolean`

##### setHost()

> **setHost**(`host`: `string`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | `string` |

###### Returns

`void`

##### setPort()

> **setPort**(`port`: `number`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |

###### Returns

`void`

##### setRaw()

> **setRaw**(`raw`: [`Bytes`](index.md#bytes)): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](index.md#bytes) |

###### Returns

`void`

##### setTls()

> **setTls**(`tls`: `boolean`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tls` | `boolean` |

###### Returns

`void`

***

### Request

> **Request**: `object`

An immutable saved Request.

To modify, use `toSpec` to get a `RequestSpec` object.

#### Type declaration

##### getBody()

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getCreatedAt()

###### Returns

`Date`

##### getHeader()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

###### Returns

`Record`\<`string`, `string`[]\>

##### getHost()

###### Returns

`string`

##### getId()

###### Returns

[`ID`](index.md#id)

##### getMethod()

###### Returns

`string`

##### getPath()

###### Returns

`string`

##### getPort()

###### Returns

`number`

##### getQuery()

###### Returns

`string`

##### getRaw()

###### Returns

[`RequestRaw`](index.md#requestraw)

##### getTls()

###### Returns

`boolean`

##### getUrl()

###### Returns

`string`

##### toSpec()

###### Returns

[`RequestSpec`](index.md#requestspec)

##### toSpecRaw()

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

***

### RequestOrderField

> **RequestOrderField**: `"ext"` \| `"host"` \| `"id"` \| `"method"` \| `"path"` \| `"query"` \| `"created_at"` \| `"source"`

Field to order requests by.

***

### RequestRaw

> **RequestRaw**: `object`

An immutable saved raw Request.

#### Type declaration

##### toBytes()

Get the raw request as an array of bytes.

###### Returns

`Uint8Array`

##### toText()

Parse the raw request as a string.

Unprintable characters will be replaced with `�`.

###### Returns

`string`

***

### RequestResponse

> **RequestResponse**: `object`

An immutable saved Request and Response pair.

#### Type declaration

##### request

> **request**: [`Request`](index.md#request-2)

##### response

> **response**: [`Response`](index.md#response-3)

***

### RequestResponseOpt

> **RequestResponseOpt**: `object`

An immutable saved Request and optional Response pair.

#### Type declaration

##### request

> **request**: [`Request`](index.md#request-2)

##### response?

> `optional` **response**: [`Response`](index.md#response-3)

***

### RequestsConnection

> **RequestsConnection**: `object`

A connection of requests.

#### Type declaration

##### items

> **items**: [`RequestsConnectionItem`](index.md#requestsconnectionitem)[]

##### pageInfo

> **pageInfo**: [`PageInfo`](index.md#pageinfo)

***

### RequestsConnectionItem

> **RequestsConnectionItem**: `object`

An item in a connection of requests.

#### Type declaration

##### cursor

> **cursor**: `string`

##### request

> **request**: [`Request`](index.md#request-2)

##### response?

> `optional` **response**: [`Response`](index.md#response-3)

***

### RequestsQuery

> **RequestsQuery**: `object`

Query builder to fetch requests.

#### Type declaration

##### after()

Requests after a given cursor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | `string` | Cursor of the request |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### ascending()

###### ascending(target, field)

Ascending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](index.md#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### ascending(target, field)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](index.md#responseorderfield) |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### before()

Requests before a given cursor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | `string` | Cursor of the request |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### descending()

###### descending(target, field)

Descending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](index.md#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### descending(target, field)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](index.md#responseorderfield) |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### execute()

Execute the query.

###### Returns

`Promise`\<[`RequestsConnection`](index.md#requestsconnection)\>

###### Throws

If a query parameter is invalid or the query cannot be executed.

##### filter()

Filter requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | `string` | HTTPQL filter |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### first()

First n requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

##### last()

Last n requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

***

### RequestsSDK

> **RequestsSDK**: `object`

The SDK for the Requests service.

#### Type declaration

##### get()

Get a request by its unique [ID](index.md#id).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](index.md#id) |

###### Returns

`Promise`\<`undefined` \| [`RequestResponseOpt`](index.md#requestresponseopt)\>

###### Example

```ts
await sdk.requests.get("1");
```

##### inScope()

Checks if a request is in scope.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`Request`](index.md#request-2) \| [`RequestSpec`](index.md#requestspec) |

###### Returns

`boolean`

###### Example

```ts
if (sdk.requests.inScope(request)) {
 sdk.console.log("In scope");
}
```

##### query()

Query requests of the current project.

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### Example

```ts
const page = await sqk.requests.query().first(2).execute();
sdk.console.log(`ID: ${page.items[1].request.getId()}`);
```

##### send()

Sends a request.

This respects the upstream proxy settings.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`RequestSpec`](index.md#requestspec) \| [`RequestSpecRaw`](index.md#requestspecraw) |

###### Returns

`Promise`\<[`RequestResponse`](index.md#requestresponse)\>

###### Throws

If the request cannot be sent.

###### Example

```ts
const spec = new RequestSpec("https://example.com");
try {
  const res = await sdk.requests.send(request)
  sdk.console.log(res.request.getId());
  sdk.console.log(res.response.getCode());
} catch (err) {
  sdk.console.error(err);
}
```

***

### Response

> **Response**: `object`

An immutable saved Response.

#### Type declaration

##### getBody()

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getCode()

###### Returns

`number`

##### getCreatedAt()

###### Returns

`Date`

##### getHeader()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

###### Returns

`Record`\<`string`, `string`[]\>

##### getId()

###### Returns

[`ID`](index.md#id)

##### getRaw()

###### Returns

[`ResponseRaw`](index.md#responseraw)

##### getRoundtripTime()

###### Returns

`number`

***

### ResponseOrderField

> **ResponseOrderField**: `"length"` \| `"roundtrip"` \| `"code"`

Field to order responses by.

***

### ResponseRaw

> **ResponseRaw**: `object`

An immutable saved raw Response.

#### Type declaration

##### toBytes()

Get the raw response as an array of bytes.

###### Returns

`Uint8Array`

##### toText()

Parse the raw response as a string.

Unprintable characters will be replaced with `�`.

###### Returns

`string`

***

### SetBodyOptions

> **SetBodyOptions**: `object`

Options when setting the body of a Request.

#### Type declaration

##### updateContentLength

> **updateContentLength**: `boolean`

Should update the Content-export type header.

###### Default

```ts
true
```

## FindingsSDK

### Finding

> **Finding**: `object`

A saved immutable Finding.

#### Type declaration

##### getDescription()

The description of the finding.

###### Returns

`undefined` \| `string`

##### getId()

The unique Caido [ID](index.md#id) of the finding.

###### Returns

[`ID`](index.md#id)

##### getReporter()

The name of the reporter.

###### Returns

`string`

##### getTitle()

The title of the finding.

###### Returns

`string`

***

### FindingSpec

> **FindingSpec**: `object`

A mutable Finding not yet created.

#### Type declaration

##### dedupeKey?

> `optional` **dedupeKey**: `string`

Deduplication key for findings.
If a finding with the same dedupe key already exists, it will not be created.

##### description?

> `optional` **description**: `string`

The description of the finding.

##### reporter

> **reporter**: `string`

The name of the reporter.
It will be used to group findings.

##### request

> **request**: [`Request`](index.md#request-2)

The associated [Request](index.md#request-2).

##### title

> **title**: `string`

The title of the finding.

***

### FindingsSDK

> **FindingsSDK**: `object`

The SDK for the Findings service.

#### Type declaration

##### create()

Creates a new Finding.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | [`FindingSpec`](index.md#findingspec) |

###### Returns

`Promise`\<[`Finding`](index.md#finding)\>

###### Throws

If the request cannot be saved.

###### Example

```ts
await sdk.findings.create({
  title: "Title",
  description: "Description",
  reporter: "Reporter",
  dedupe: `${request.getHost()}-${request.getPath()}`,
  request,
});
```

##### get()

Try to get a [Finding](index.md#finding) for a request.
Since a request can have multiple findings, this will return the first one found.
You can also filter by reporter to get a specific finding.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GetFindingInput`](index.md#getfindinginput) |

###### Returns

`Promise`\<`undefined` \| [`Finding`](index.md#finding)\>

###### Example

```ts
await sdk.findings.get({
 reporter: "Reporter",
 request,
});
```

***

### GetFindingInput

> **GetFindingInput**: `object`

Input to get a [Finding](index.md#finding).

#### Type declaration

##### reporter?

> `optional` **reporter**: `string`

The name of the reporter.

##### request

> **request**: [`Request`](index.md#request-2)

The associated [Request](index.md#request-2).

## ReplaySDK

### ReplayCollection

> **ReplayCollection**: `object`

A collection of replay sessions.

#### Type declaration

##### getId()

The unique Caido [ID](index.md#id) of the replay collection.

###### Returns

[`ID`](index.md#id)

##### getName()

The name of the replay collection.

###### Returns

`string`

***

### ReplaySDK

> **ReplaySDK**: `object`

The SDK for the Replay service.

#### Type declaration

##### createSession()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `source`? | [`RequestSource`](index.md#requestsource) |
| `collection`? | [`ID`](index.md#id) \| [`ReplayCollection`](index.md#replaycollection) |

###### Returns

`Promise`\<[`ReplaySession`](index.md#replaysession)\>

##### getCollections()

###### Returns

`Promise`\<[`ReplayCollection`](index.md#replaycollection)[]\>

***

### ReplaySession

> **ReplaySession**: `object`

A replay session.

#### Type declaration

##### getId()

The unique Caido [ID](index.md#id) of the replay session.

###### Returns

[`ID`](index.md#id)

##### getName()

The name of the replay session.

###### Returns

`string`

## Shared

### Bytes

> **Bytes**: `string` \| `number`[] \| `Uint8Array`

Types that can be converted to bytes in inputs.

***

### DefineAPI\<API\>

> **DefineAPI**\<`API`\>: `{ [K in keyof API]: DefineAPICallback<API[K]> }`

Define a Plugin backend functions that are callable from the frontend.

#### Type Parameters

| Type Parameter |
| ------ |
| `API` *extends* `Record`\<`string`, (...`args`: `any`[]) => [`MaybePromise`](index.md#maybepromiset)\<`any`\>\> |

#### Example

```typescript
function generateNumber(sdk: SDK, min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export type API = DefineAPI<{
  generateNumber: typeof generateNumber;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("generateNumber", generateNumber);
}
```

***

### DefineAPICallback\<F\>

> **DefineAPICallback**\<`F`\>: `F` *extends* (`sdk`: [`SDK`](index.md#sdkapi-events), ...`args`: infer A) => infer R ? (...`args`: `A`) => `R` : `"Your callback must respect the format (sdk: SDK, ...args: unknown[]) => MaybePromise<unknown>"`

Parser for Plugin backend callable functions

#### Type Parameters

| Type Parameter |
| ------ |
| `F` |

***

### DefineEventCallback\<F\>

> **DefineEventCallback**\<`F`\>: `F` *extends* (...`args`: infer A) => [`MaybePromise`](index.md#maybepromiset)\<`void`\> ? (...`args`: `A`) => [`MaybePromise`](index.md#maybepromiset)\<`void`\> : `"Your callback must respect the format (...args: unknown[]) => MaybePromise<void>"`

Parser for Plugin backend events callbacks.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` |

***

### DefineEvents\<Events\>

> **DefineEvents**\<`Events`\>: `{ [K in keyof Events]: DefineEventCallback<Events[K]> }`

Define a Plugin backend events that the frontend can receive.

#### Type Parameters

| Type Parameter |
| ------ |
| `Events` *extends* `Record`\<`string`, (...`args`: `any`[]) => [`MaybePromise`](index.md#maybepromiset)\<`void`\>\> |

#### Example

```typescript
type MyEventData = { id: string; name: string };

export type BackendEvents = DefineEvents<{
  "myevent": (data: MyEventData) => void;
}>;

export function init(sdk: SDK<{}, BackendEvents>) {
  sdk.api.send("myevent", { id: "1", name: "hello" });
}
```

***

### ID

> **ID**: `string` & `object`

A unique identifier.

#### Type declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

***

### MaybePromise\<T\>

> **MaybePromise**\<`T`\>: `T` \| `Promise`\<`T`\>

Promise or value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### MaybePromise\<T\>

> **MaybePromise**\<`T`\>: `T` \| `Promise`\<`T`\>

Promise or value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### RequestSource

> **RequestSource**: [`ID`](index.md#id) \| [`Request`](index.md#request-2) \| [`RequestSpec`](index.md#requestspec) \| [`RequestSpecRaw`](index.md#requestspecraw)

The source of a request.

## Other

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

##### new Database()

> **new Database**(): [`Database`](index.md#database)

###### Returns

[`Database`](index.md#database)

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

> **prepare**(`sql`: `string`): [`Statement`](index.md#statement)

Compiles a SQL statement into a [prepared statement](https://www.sqlite.org/c3ref/stmt.html).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `sql` | `string` |

###### Returns

[`Statement`](index.md#statement)

***

### Statement

This class represents a single prepared statement. This class cannot be instantiated via its constructor.
Instead, instances are created via the database.prepare() method.

#### Constructors

##### new Statement()

> **new Statement**(): [`Statement`](index.md#statement)

###### Returns

[`Statement`](index.md#statement)

#### Methods

##### all()

> **all**\<`T`\>(...`params`: [`Parameter`](index.md#parameter)[]): `Promise`\<`T`[]\>

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
| ...`params` | [`Parameter`](index.md#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<`T`[]\>

##### get()

> **get**\<`T`\>(...`params`: [`Parameter`](index.md#parameter)[]): `Promise`\<`undefined` \| `T`\>

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
| ...`params` | [`Parameter`](index.md#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<`undefined` \| `T`\>

##### run()

> **run**(...`params`: [`Parameter`](index.md#parameter)[]): `Promise`\<[`Result`](index.md#result)\>

This method executes a prepared statement and returns an object summarizing the resulting changes.
The prepared statement [parameters are bound](https://www.sqlite.org/c3ref/bind_blob.html) using the values in params.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`params` | [`Parameter`](index.md#parameter)[] | The values to bind to the prepared statement. Named parameters are not supported. |

###### Returns

`Promise`\<[`Result`](index.md#result)\>

***

### Console

> **Console**: `object`

Console interface for logging.

Currently logs are only available in the backend logs.
See https://docs.caido.io/report_bug.html#1-backend-logs

#### Type declaration

##### debug()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### error()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### log()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### warn()

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

***

### PageInfo

> **PageInfo**: `object`

Information on the current page of paginated data.

#### Type declaration

##### endCursor

> **endCursor**: `string`

##### hasNextPage

> **hasNextPage**: `boolean`

##### hasPreviousPage

> **hasPreviousPage**: `boolean`

##### startCursor

> **startCursor**: `string`

***

### Parameter

> **Parameter**: `null` \| `number` \| `bigint` \| `string` \| `Uint8Array`

***

### Result

> **Result**: `object`

#### Type declaration

##### changes

> **changes**: `number`

##### lastInsertRowid

> **lastInsertRowid**: `number`
