# @caido/sdk-workflow

This is the reference for the workflow SDK used by JS Nodes.
[SDK](#sdk-1) is the main interface that provides access to various services and functionalities.

## SDK

### SDK

> **SDK**: `object`

The SDK object available to all scripts.

#### Type declaration

##### console

> **console**: [`Console`](index.md#console)

The console for logging.

This is currently the same as the global `console`.

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

The SDK for the Findings service.

##### projects

> **projects**: [`ProjectsSDK`](index.md#projectssdk)

The SDK for the Projects service.

##### replay

> **replay**: [`ReplaySDK`](index.md#replaysdk)

The SDK for the Replay service.

##### requests

> **requests**: [`RequestsSDK`](index.md#requestssdk)

The SDK for the Requests service.

##### asString()

Converts bytes to a string.

Unprintable characters will be replaced with `�`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | [`Bytes`](index.md#bytes) |

###### Returns

`string`

###### Example

```js
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

## Data

### BytesInput

> **BytesInput**: `number`[]

The input for the Javascript Nodes.

***

### ~~ConvertInput~~

> **ConvertInput**: [`BytesInput`](index.md#bytesinput)

#### Deprecated

Use BytesInput instead.

***

### Data

> **Data**: [`Bytes`](index.md#bytes)

The output for the Javascript Nodes.

***

### Decision

> **Decision**: `boolean`

The output for the If/Else Javascript Nodes.

***

### HttpInput

> **HttpInput**: `object`

The input for the HTTP Javascript Nodes

#### Type declaration

##### request

> **request**: [`Request`](index.md#request-3) \| `undefined`

##### response

> **response**: [`Response`](index.md#response-4) \| `undefined`

***

### ~~PassiveInput~~

> **PassiveInput**: [`HttpInput`](index.md#httpinput)

#### Deprecated

Use HttpInput instead.

## Requests

### Body

The body of a [Request](index.md#request-3) or [Response](index.md#response-4).

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

You can convert a saved immutable [Request](index.md#request-3) object into a [RequestSpec](index.md#requestspec) object by using the `toSpec()` method.

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

> **getMethod**(): `string`

Get the HTTP method of the request.

###### Returns

`string`

##### getPath()

> **getPath**(): `string`

Get the path of the request.

###### Returns

`string`

##### getPort()

> **getPort**(): `number`

Get the port of the request.

###### Returns

`number`

##### getQuery()

> **getQuery**(): `string`

Get the unparsed query of the request.

Excludes the leading `?`.

###### Returns

`string`

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

> **setBody**(`body`: [`Bytes`](index.md#bytes) \| [`Body`](index.md#body), `options`?: [`SetBodyOptions`](index.md#setbodyoptions)): `void`

Set the body of the request.

The body can either be a [Body](index.md#body) or any type that can be converted to [Bytes](index.md#bytes).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`Bytes`](index.md#bytes) \| [`Body`](index.md#body) |
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

> **setMethod**(`method`: `string`): `void`

Set the HTTP method of the request.

All strings are accepted.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |

###### Returns

`void`

##### setPath()

> **setPath**(`path`: `string`): `void`

Set the path of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

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

> **setQuery**(`query`: `string`): `void`

Set the unparsed query of the request.

The query string should not include the leading `?`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |

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

You can convert a saved immutable [Request](index.md#request-3) object into a [RequestSpecRaw](index.md#requestspecraw) object by using the `toSpecRaw()` method.

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

> **request**: [`Request`](index.md#request-3)

##### response

> **response**: [`Response`](index.md#response-4)

***

### RequestResponseOpt

> **RequestResponseOpt**: `object`

An immutable saved Request and optional Response pair.

#### Type declaration

##### request

> **request**: [`Request`](index.md#request-3)

##### response?

> `optional` **response**: [`Response`](index.md#response-4)

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

> **request**: [`Request`](index.md#request-3)

##### response?

> `optional` **response**: [`Response`](index.md#response-4)

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
| `request` | [`Request`](index.md#request-3) \| [`RequestSpec`](index.md#requestspec) |

###### Returns

`boolean`

###### Example

```js
if (sdk.requests.inScope(request)) {
 sdk.console.log("In scope");
}
```

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

> **request**: [`Request`](index.md#request-3)

The associated [Request](index.md#request-3).

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

> **request**: [`Request`](index.md#request-3)

The associated [Request](index.md#request-3).

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

### ID

> **ID**: `string` & `object`

A unique identifier.

#### Type declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

***

### RequestSource

> **RequestSource**: [`ID`](index.md#id) \| [`Request`](index.md#request-3) \| [`RequestSpec`](index.md#requestspec) \| [`RequestSpecRaw`](index.md#requestspecraw)

The source of a request.

## Other

### Console

> **Console**: `object`

Console interface for logging.

Currently logs are only available in the backend logs.
See https://docs.caido.io/report_bug.html#1-backend-logs

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
