# @caido/sdk-backend

This is the reference for the backend SDK used by backend plugins.
[SDK](#events) is the main interface that provides access to various services and functionalities.

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

##### env

> **env**: [`EnvironmentSDK`](index.md#environmentsdk)

The SDK for the Environment service.

##### events

> **events**: [`EventsSDK`](index.md#eventssdkapi-events)\<`API`, `Events`\>

The SDK for the Events service.

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

The SDK for the Findings service.

##### meta

> **meta**: [`MetaSDK`](index.md#metasdk)

The SDK for metadata information about the plugin.

##### projects

> **projects**: [`ProjectsSDK`](index.md#projectssdk)

The SDK for the Projects service.

##### replay

> **replay**: [`ReplaySDK`](index.md#replaysdk)

The SDK for the Replay service.

##### requests

> **requests**: [`RequestsSDK`](index.md#requestssdk)

The SDK for the Requests service.

## Meta

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

## API

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

## Events

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
sdk.events.onInterceptRequest((sdk, request) => {
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
sdk.events.onInterceptResponse((sdk, request, response) => {
   // Do something with the request/response
});
```

##### onProjectChange()

Registers an callback on project change.

This callback is called asynchronously and cannot modify the project.

It can happen that the project is null if the user deleted the currently selected one.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdkapi-events)\<`API`, `Events`\>, `project`: `null` \| [`Project`](index.md#project)) => [`MaybePromise`](index.md#maybepromiset-1)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onProjectChange((sdk, project) => {
  if (project !== null) {
    // Do something with the project
  }
});
```

## Requests

### Body

The body of a [Request](index.md#request-2) or [Response](index.md#response-3).

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

A mutable Request that has not yet been sent.

#### Constructors

##### new RequestSpec()

> **new RequestSpec**(`url`: `string`): [`RequestSpec`](index.md#requestspec)

Build a new [RequestSpec](index.md#requestspec) from a URL string. Only the host, port and scheme will be parsed.

You can convert a saved immutable [Request](index.md#request-2) object into a [RequestSpec](index.md#requestspec) object by using the `toSpec()` method.

By default:

- Method is `GET`.
- Path is `/`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpec`](index.md#requestspec)

###### Throws

If the URL is invalid.

###### Example

```js
const spec = new RequestSpec("https://example.com");
```

#### Methods

##### getBody()

> **getBody**(): `undefined` \| [`Body`](index.md#body)

The body of the request.

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getHeader()

> **getHeader**(`name`: `string`): `undefined` \| `string`[]

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

> **getHeaders**(): `Record`\<`string`, `string`[]\>

The headers of the request.

Header names are case-insensitive.
Each header might have multiple values.

###### Returns

`Record`\<`string`, `string`[]\>

###### Example

```json
{
  "Host": ["caido.io"],
  "Connection": ["keep-alive"],
  "Content-Length": ["95"]
}
```

##### getHost()

> **getHost**(): `string`

Get the host of the request.

###### Returns

`string`

##### getMethod()

###### getMethod()

> **getMethod**(): `string`

Get the HTTP method of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Returns

`string`

###### getMethod(options)

> **getMethod**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](index.md#rawoption) |

###### Returns

`Uint8Array`

##### getPath()

###### getPath()

> **getPath**(): `string`

Get the path of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Returns

`string`

###### getPath(options)

> **getPath**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](index.md#rawoption) |

###### Returns

`Uint8Array`

##### getPort()

> **getPort**(): `number`

Get the port of the request.

###### Returns

`number`

##### getQuery()

###### getQuery()

> **getQuery**(): `string`

Get the unparsed query of the request.

Get the raw version by passing `{ raw: true }` in the options.

Excludes the leading `?`.

###### Returns

`string`

###### getQuery(options)

> **getQuery**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](index.md#rawoption) |

###### Returns

`Uint8Array`

##### getRaw()

> **getRaw**(): [`RequestSpecRaw`](index.md#requestspecraw)

This methods converts the [RequestSpec](index.md#requestspec) to a [RequestSpecRaw](index.md#requestspecraw).

This is useful to retrieve the raw bytes of the request.

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

###### Example

```js
const spec = new RequestSpec("https://example.com");
const specRaw = spec.getRaw();
const bytes = specRaw.getRaw(); // GET / HTTP/1.1\r\nHost: example.com\r\n\r\n
```

##### getTls()

> **getTls**(): `boolean`

Get if the request uses TLS (HTTPS).

###### Returns

`boolean`

##### removeHeader()

> **removeHeader**(`name`: `string`): `void`

Removes a header.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

##### setBody()

> **setBody**(`body`: [`Body`](index.md#body) \| [`Bytes`](index.md#bytes), `options`?: [`SetBodyOptions`](index.md#setbodyoptions)): `void`

Set the body of the request.

The body can either be a [Body](index.md#body) or any type that can be converted to [Bytes](index.md#bytes).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`Body`](index.md#body) \| [`Bytes`](index.md#bytes) |
| `options`? | [`SetBodyOptions`](index.md#setbodyoptions) |

###### Returns

`void`

###### Example

```js
const body = new Body("Hello world.");
const options = { updateContentLength: true };
request.setBody(body, options);
```

##### setHeader()

> **setHeader**(`name`: `string`, `value`: `string`): `void`

Set a header value.

This will overwrite any existing values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

##### setHost()

> **setHost**(`host`: `string`): `void`

Set the host of the request.

It will also update the `Host` header.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | `string` |

###### Returns

`void`

##### setMethod()

> **setMethod**(`method`: [`Bytes`](index.md#bytes)): `void`

Set the HTTP method of the request.

All strings are accepted.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`Bytes`](index.md#bytes) |

###### Returns

`void`

##### setPath()

> **setPath**(`path`: [`Bytes`](index.md#bytes)): `void`

Set the path of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | [`Bytes`](index.md#bytes) |

###### Returns

`void`

##### setPort()

> **setPort**(`port`: `number`): `void`

Set the port of the request.

The port number must be between 1 and 65535.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |

###### Returns

`void`

##### setQuery()

> **setQuery**(`query`: [`Bytes`](index.md#bytes)): `void`

Set the unparsed query of the request.

The query string should not include the leading `?`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | [`Bytes`](index.md#bytes) |

###### Returns

`void`

###### Example

```js
spec.setQuery("q=hello");
```

##### setRaw()

> **setRaw**(`raw`: [`Bytes`](index.md#bytes)): [`RequestSpecRaw`](index.md#requestspecraw)

This method sets the raw [Bytes](index.md#bytes) of the request and converts it to a [RequestSpecRaw](index.md#requestspecraw).

This is useful when you have a prepared [RequestSpec](index.md#requestspec) and you just want to modify the raw data.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](index.md#bytes) |

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

###### Example

```js
const rawBytes = []; // RAW BYTES HERE
const request = new RequestSpec("https://example.com");
const rawRequest = request.setRaw(rawBytes);
```

##### setTls()

> **setTls**(`tls`: `boolean`): `void`

Set if the request uses TLS (HTTPS).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `tls` | `boolean` |

###### Returns

`void`

##### parse()

> `static` **parse**(`bytes`: [`Bytes`](index.md#bytes)): [`RequestSpec`](index.md#requestspec)

Parses raw bytes into a [RequestSpec](index.md#requestspec).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | [`Bytes`](index.md#bytes) |

###### Returns

[`RequestSpec`](index.md#requestspec)

###### Throws

If the bytes are not a valid HTTP request.

###### Example

```js
const rawInput = 'GET / HTTP/1.1\r\nHost: example.com\r\n\r\n';
const spec = RequestSpec.parse(rawInput);
spec.setHeader('x-caido', 'test');
const specRaw = spec.getRaw();
const rawOutput = specRaw.getRaw(); // Will contain the new header
```

***

### RequestSpecRaw

A mutable raw Request that has not yet been sent.

#### Constructors

##### new RequestSpecRaw()

> **new RequestSpecRaw**(`url`: `string`): [`RequestSpecRaw`](index.md#requestspecraw)

Build a new [RequestSpecRaw](index.md#requestspecraw) from a URL string. Only the host, port and scheme will be parsed.

You can convert a saved immutable [Request](index.md#request-2) object into a [RequestSpecRaw](index.md#requestspecraw) object by using the `toSpecRaw()` method.

You MUST use `setRaw` to set the raw bytes of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpecRaw`](index.md#requestspecraw)

###### Example

```js
const spec = new RequestSpecRaw("https://example.com");
```

#### Methods

##### getHost()

> **getHost**(): `string`

Get the host of the request.

###### Returns

`string`

##### getPort()

> **getPort**(): `number`

Get the port of the request.

###### Returns

`number`

##### getRaw()

> **getRaw**(): `Uint8Array`

Get the raw bytes of the request.

###### Returns

`Uint8Array`

##### getTls()

> **getTls**(): `boolean`

Get if the request uses TLS (HTTPS).

###### Returns

`boolean`

##### setHost()

> **setHost**(`host`: `string`): `void`

Set the host of the request.

It will NOT update the `Host` header.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | `string` |

###### Returns

`void`

##### setPort()

> **setPort**(`port`: `number`): `void`

Set the port of the request.

The port number must be between 1 and 65535.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |

###### Returns

`void`

##### setRaw()

> **setRaw**(`raw`: [`Bytes`](index.md#bytes)): `void`

Set the raw [Bytes](index.md#bytes) of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](index.md#bytes) |

###### Returns

`void`

##### setTls()

> **setTls**(`tls`: `boolean`): `void`

Set if the request uses TLS (HTTPS).

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

The body of the request.

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getCreatedAt()

The datetime the request was recorded by the proxy.

###### Returns

`Date`

##### getHeader()

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

The headers of the request.

Header names are case-insensitive.
Each header might have multiple values.

###### Returns

`Record`\<`string`, `string`[]\>

###### Example

```json
{
  "Host": ["caido.io"],
  "Connection": ["keep-alive"],
  "Content-Length": ["95"]
}
```

##### getHost()

The target host of the request.

###### Returns

`string`

##### getId()

The unique Caido [ID](index.md#id) of the request.

###### Returns

[`ID`](index.md#id)

##### getMethod()

The HTTP method of the request.

###### Returns

`string`

##### getPath()

The path of the request.

###### Returns

`string`

##### getPort()

The target port of the request.

###### Returns

`number`

##### getQuery()

The unparsed query of the request.

Excludes the leading `?`.

###### Returns

`string`

##### getRaw()

The raw version of the request.

Used to access the bytes directly.

###### Returns

[`RequestRaw`](index.md#requestraw)

##### getTls()

If the request uses TLS (HTTPS).

###### Returns

`boolean`

##### getUrl()

The full URL of the request.

###### Returns

`string`

##### toSpec()

Copied the request to a mutable un-saved [RequestSpec](index.md#requestspec).
This enables you to make modify a request before re-sending it.

###### Returns

[`RequestSpec`](index.md#requestspec)

##### toSpecRaw()

Copied the request to a mutable un-saved [RequestSpecRaw](index.md#requestspecraw).
The raw requests are not parsed and can be used to send invalid HTTP Requests.

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

> **cursor**: [`Cursor`](index.md#cursor)

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
| `cursor` | [`Cursor`](index.md#cursor) | [Cursor](index.md#cursor) of the request |

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
| `cursor` | [`Cursor`](index.md#cursor) | [Cursor](index.md#cursor) of the request |

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

```js
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

```js
if (sdk.requests.inScope(request)) {
 sdk.console.log("In scope");
}
```

##### matches()

Checks if a request/response matches an HTTPQL filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | `string` | HTTPQL filter |
| `request` | [`Request`](index.md#request-2) | The [Request](index.md#request-2) to match against |
| `response`? | [`Response`](index.md#response-3) | The [Response](index.md#response-3) to match against |

###### Returns

`boolean`

##### query()

Query requests of the current project.

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### Example

```js
const page = await sqk.requests.query().first(2).execute();
sdk.console.log(`ID: ${page.items[1].request.getId()}`);
```

##### send()

Sends an HTTP request, either a [RequestSpec](index.md#requestspec) or [RequestSpecRaw](index.md#requestspecraw).

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

```js
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

The body of the response

###### Returns

`undefined` \| [`Body`](index.md#body)

##### getCode()

The status code of the response.

###### Returns

`number`

##### getCreatedAt()

The datetime the response was recorded by the proxy.

###### Returns

`Date`

##### getHeader()

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`[]

##### getHeaders()

The headers of the response.

Header names are case-insensitive.
Each header might have multiple values.

###### Returns

`Record`\<`string`, `string`[]\>

###### Example

```json
{
  "Date": ["Sun, 26 May 2024 10:59:21 GMT"],
  "Content-Type": ["text/html"]
}
```

##### getId()

The unique Caido [ID](index.md#id) of the response.

###### Returns

[`ID`](index.md#id)

##### getRaw()

The raw version of the response.

Used to access the bytes directly.

###### Returns

[`ResponseRaw`](index.md#responseraw)

##### getRoundtripTime()

The time it took to send the request and receive the response in milliseconds.

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

## Findings

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

```js
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

```js
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

## Replay

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

## Projects

### Project

> **Project**: `object`

A saved immutable Project.

#### Type declaration

##### getId()

The unique Caido [ID](index.md#id) of the project.

###### Returns

[`ID`](index.md#id)

##### getName()

The name of the project.

###### Returns

`string`

##### getStatus()

The status of the project.

###### Returns

[`ProjectStatus`](index.md#projectstatus)

##### getVersion()

The version of the project.
The format is `MAJOR.MINOR.PATCH`.

###### Returns

`string`

***

### ProjectsSDK

> **ProjectsSDK**: `object`

The SDK for the Projects service.

#### Type declaration

##### getCurrent()

Get the currently selected [Project](index.md#project) if any.

###### Returns

`Promise`\<`undefined` \| [`Project`](index.md#project)\>

###### Example

```js
await sdk.projects.getCurrent();
```

***

### ProjectStatus

> **ProjectStatus**: `"ready"` \| `"restoring"` \| `"error"`

A [Project](index.md#project) status.

## Shared

### Bytes

> **Bytes**: `string` \| `number`[] \| `Uint8Array`

Types that can be converted to bytes in inputs.

***

### Cursor

> **Cursor**: `string` & `object`

A cursor for pagination.

#### Type declaration

##### \_\_cursor?

> `optional` **\_\_cursor**: `never`

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

### RawOption

> **RawOption**: `object`

Option to return raw value

#### Type declaration

##### raw

> **raw**: `true`

***

### RequestSource

> **RequestSource**: [`ID`](index.md#id) \| [`Request`](index.md#request-2) \| [`RequestSpec`](index.md#requestspec) \| [`RequestSpecRaw`](index.md#requestspecraw)

The source of a request.

## Environment

### EnvironmentSDK

> **EnvironmentSDK**: `object`

The SDK for the Environment service.

#### Type declaration

##### getVar()

Get the value of an environment variable.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the environment variable. |

###### Returns

`undefined` \| `string`

The value of the environment variable.

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
See [https://docs.caido.io/report_bug.html#1-backend-logs](https://docs.caido.io/report_bug.html#1-backend-logs)

#### Type declaration

##### debug()

Log a message with the debug level.

Usually used for troubleshooting purposes.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### error()

Log a message with the error level.

Usually used for critical errors.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### log()

Log a message with the info level.

Usually used for general information.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |

###### Returns

`void`

##### warn()

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

> **PageInfo**: `object`

Information on the current page of paginated data.

#### Type declaration

##### endCursor

> **endCursor**: [`Cursor`](index.md#cursor)

##### hasNextPage

> **hasNextPage**: `boolean`

##### hasPreviousPage

> **hasPreviousPage**: `boolean`

##### startCursor

> **startCursor**: [`Cursor`](index.md#cursor)

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
