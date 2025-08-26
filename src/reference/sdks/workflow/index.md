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

##### env

> **env**: [`EnvironmentSDK`](index.md#environmentsdk)

The SDK for the Environment service.

##### findings

> **findings**: [`FindingsSDK`](index.md#findingssdk)

The SDK for the Findings service.

##### graphql

> **graphql**: [`GraphQLSDK`](index.md#graphqlsdk)

The SDK for the GraphQL service.

##### projects

> **projects**: [`ProjectsSDK`](index.md#projectssdk)

The SDK for the Projects service.

##### replay

> **replay**: [`ReplaySDK`](index.md#replaysdk)

The SDK for the Replay service.

##### requests

> **requests**: [`RequestsSDK`](index.md#requestssdk)

The SDK for the Requests service.

##### runtime

> **runtime**: [`RuntimeSDK`](index.md#runtimesdk)

The SDK for the runtime information.

##### scope

> **scope**: [`ScopeSDK`](index.md#scopesdk)

The SDK for the Scope service.

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

> **request**: [`Request`](index.md#request-2) \| `undefined`

##### response

> **response**: [`Response`](index.md#response-5) \| `undefined`

***

### ~~PassiveInput~~

> **PassiveInput**: [`HttpInput`](index.md#httpinput)

#### Deprecated

Use HttpInput instead.

## Requests

### Body

The body of a [Request](index.md#request-2) or [Response](index.md#response-5).

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

#### Properties

##### length

> `readonly` **length**: `number`

The length of the body in bytes.

#### Methods

##### toJson()

> **toJson**(): `unknown`

Try to parse the body as JSON.

###### Returns

`unknown`

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

Build a new [RequestSpec](index.md#requestspec) from a URL string.
We try to infer as much information as possible from the URL, including the scheme, host, path and query.

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

###### Call Signature

> **getMethod**(): `string`

Get the HTTP method of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Returns

`string`

###### Call Signature

> **getMethod**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

Get the HTTP method of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](index.md#rawoption) |

###### Returns

`Uint8Array`

##### getPath()

###### Call Signature

> **getPath**(): `string`

Get the path of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Returns

`string`

###### Call Signature

> **getPath**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

Get the path of the request.

Get the raw version by passing `{ raw: true }` in the options.

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

###### Call Signature

> **getQuery**(): `string`

Get the unparsed query of the request.

Get the raw version by passing `{ raw: true }` in the options.

Excludes the leading `?`.

###### Returns

`string`

###### Call Signature

> **getQuery**(`options`: [`RawOption`](index.md#rawoption)): `Uint8Array`

Get the unparsed query of the request.

Get the raw version by passing `{ raw: true }` in the options.

Excludes the leading `?`.

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

###### Call Signature

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

###### Call Signature

> `static` **parse**(`raw`: [`RequestSpecRaw`](index.md#requestspecraw)): [`RequestSpec`](index.md#requestspec)

Parses the raw bytes of a [RequestSpecRaw](index.md#requestspecraw) into a [RequestSpec](index.md#requestspec).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`RequestSpecRaw`](index.md#requestspecraw) |

###### Returns

[`RequestSpec`](index.md#requestspec)

###### Throws

If the bytes are not a valid HTTP request.

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

##### getSpec()

> **getSpec**(): [`RequestSpec`](index.md#requestspec)

This methods converts the [RequestSpecRaw](index.md#requestspecraw) to a [RequestSpec](index.md#requestspec).

###### Returns

[`RequestSpec`](index.md#requestspec)

###### Throws

If the bytes are not a valid HTTP request.

###### See

[RequestSpec.parse](index.md#parse)

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

> **response**: [`Response`](index.md#response-5)

***

### RequestResponseOpt

> **RequestResponseOpt**: `object`

An immutable saved Request and optional Response pair.

#### Type declaration

##### request

> **request**: [`Request`](index.md#request-2)

##### response?

> `optional` **response**: [`Response`](index.md#response-5)

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

> `optional` **response**: [`Response`](index.md#response-5)

***

### RequestSendTimeouts

> **RequestSendTimeouts**: `object`

Timeouts for sending a request and receiving a response.

#### Type declaration

##### connect?

> `optional` **connect**: `number`

The timeout to open the TCP connection to the target host
and perform the TLS handshake.

Defaults to 30s.

##### extra?

> `optional` **extra**: `number`

The timeout to read data after we have a read the full response.

This is useful if you believe the server will send more data
than implied by the Content-Length header.

Defaults to 0s (no timeout).

##### global?

> `optional` **global**: `number`

The global timeout for sending a request and receiving a response.

No default value.

##### partial?

> `optional` **partial**: `number`

The timeout between each read attempt for the response.
On a slow connection, this is important to increase.

Defaults to 5s.

##### response?

> `optional` **response**: `number`

The timeout to receive the first byte of the response.

After the first byte is received, the partial timeout will be used.

Defaults to 30s.

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

###### Call Signature

Ascending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](index.md#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### Call Signature

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

###### Call Signature

Descending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](index.md#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](index.md#requestsquery)

###### Call Signature

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
| `response`? | [`Response`](index.md#response-5) | The [Response](index.md#response-5) to match against |

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
| `options`? | [`RequestSendOptions`](index.md#requestsendoptions) |

###### Returns

`Promise`\<[`RequestResponse`](index.md#requestresponse)\>

###### Throws

If the request cannot be sent.
If the request times out, the error message will contain the word "Timeout".

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

### DedupeKey

> **DedupeKey**: `string` & `object`

A deduplication key.

#### Type declaration

##### \_\_dedupeKey?

> `optional` **\_\_dedupeKey**: `never`

***

### Finding

> **Finding**: `object`

A saved immutable Finding.

#### Type declaration

##### getDedupeKey()

The deduplication key of the finding.

###### Returns

`undefined` \| [`DedupeKey`](index.md#dedupekey)

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

##### getRequestId()

The ID of the associated [Request](index.md#request-2).

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

> `optional` **dedupeKey**: [`DedupeKey`](index.md#dedupekey)

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
  dedupeKey: `${request.getHost()}-${request.getPath()}`,
  request,
});
```

##### exists()

Check if a [Finding](index.md#finding) exists.
Similar to `get`, but returns a boolean.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GetFindingInput`](index.md#getfindinginput) |

###### Returns

`Promise`\<`boolean`\>

###### Example

```js
await sdk.findings.exists("my-dedupe-key");
```

##### get()

Try to get a [Finding](index.md#finding) for a request.

Since a request can have multiple findings, this will return the first one found.
You can also filter by reporter to get a specific finding.

Finally, you can use a deduplication key to get a specific finding.

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

> **GetFindingInput**: [`DedupeKey`](index.md#dedupekey) \| \{ `reporter`: `string`; `request`: [`Request`](index.md#request-2); \}

Input to get a [Finding](index.md#finding).

#### Type declaration

[`DedupeKey`](index.md#dedupekey)

\{ `reporter`: `string`; `request`: [`Request`](index.md#request-2); \}

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

### ID

> **ID**: `string` & `object`

A unique identifier.

#### Type declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

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

##### getVars()

Get all the environment variables.
It includes the global environment and the selected environment.
Those variables can change over time so avoid caching them.

###### Returns

[`EnvironmentVariable`](index.md#environmentvariable)[]

An array of [EnvironmentVariable](index.md#environmentvariable)

##### setVar()

Sets an environment variable to a given value.
This will override any existing value.
The environment variable can be set either on the currently
selected environment or the global environment.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SetVarInput`](index.md#setvarinput) |

###### Returns

`Promise`\<`void`\>

###### Throws

If trying to set when a project is not selected.

###### Throws

If trying to set when an environment is not selected (with `global: false`).

###### Example

```js
await sdk.env.setVar({
  name: "USER_SECRET",
  value: "my secret value",
  secret: true,
  global: false
});
```

***

### EnvironmentVariable

> **EnvironmentVariable**: `object`

A saved immutable Finding.

#### Type declaration

##### isSecret

> `readonly` **isSecret**: `boolean`

If the environment variable is a secret

##### name

> `readonly` **name**: `string`

The name of the environment variable

##### value

> `readonly` **value**: `string`

The value of the environment variable

***

### SetVarInput

> **SetVarInput**: `object`

Input for the `setVar` of [EnvironmentSDK](index.md#environmentsdk).

#### Type declaration

##### env?

> `optional` **env**: `string`

The `name` of the Environment to set the variable on.
This will take precedence over the `global` flag if provided.

##### global

> **global**: `boolean`

If the environment variable should be set on the global
environment or the currently selected environment.
By default, it will be set globally.

###### Default

```ts
true
```

##### name

> **name**: `string`

Name of the environment variable

##### secret

> **secret**: `boolean`

If the environment variable should be treated as secret.
Secrets are encrypted on the disk.

###### Default

```ts
false
```

##### value

> **value**: `string`

Value of the environment variable

## GraphQL

### GraphQLSDK

> **GraphQLSDK**: `object`

The SDK for the GraphQL service.

#### Type declaration

##### execute()

Executes a GraphQL query.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `variables`? | `Record`\<`string`, `any`\> |

###### Returns

`Promise`\<[`GraphQLResponse`](index.md#graphqlresponset)\<`T`\>\>

###### Example

```js
await sdk.graphql.execute(`
  query {
    viewer
  }
`);
```

## Other

### Console

> **Console**: `object`

Console interface for logging.

Currently logs are only available in the backend logs.
See the [documentation](https://docs.caido.io/report_bug.html#1-backend-logs) on how to retrieve them.

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

### GraphQLError

> **GraphQLError**: `object`

#### Type declaration

##### extensions

> **extensions**: `Record`\<`string`, `any`\>

##### locations

> **locations**: [`GraphQLLocation`](index.md#graphqllocation)[]

##### message

> **message**: `string`

##### path

> **path**: [`GraphQLPathSegment`](index.md#graphqlpathsegment)[]

***

### GraphQLLocation

> **GraphQLLocation**: `object`

#### Type declaration

##### column

> **column**: `number`

##### line

> **line**: `number`

***

### GraphQLPathSegment

> **GraphQLPathSegment**: `string` \| `number`

***

### GraphQLResponse\<T\>

> **GraphQLResponse**\<`T`\>: `object`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Type declaration

##### data?

> `optional` **data**: `T`

##### errors?

> `optional` **errors**: [`GraphQLError`](index.md#graphqlerror)[]

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

### RequestSendOptions

> **RequestSendOptions**: `object`

#### Type declaration

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

> `optional` **timeouts**: [`RequestSendTimeouts`](index.md#requestsendtimeouts) \| `number`

The timeouts to use for sending a request and receiving a response.

If a number is provided, it will be used as the global timeout and
the other timeouts will be set to infinity.

See the [RequestSendTimeouts](index.md#requestsendtimeouts) for the default values.

## Runtime

### RuntimeSDK

> **RuntimeSDK**: `object`

The SDK for the runtime information.

#### Type declaration

##### version

###### Get Signature

> **get** **version**(): `string`

Get the current version of Caido.

###### Returns

`string`

## Scope

### Scope

> **Scope**: `object`

A saved immutable Scope.

#### Type declaration

##### allowlist

> `readonly` **allowlist**: `string`[]

The allowlist of the scope.

##### denylist

> `readonly` **denylist**: `string`[]

The denylist of the scope.

##### id

> `readonly` **id**: [`ID`](index.md#id)

The unique Caido [ID](index.md#id) of the scope.

##### name

> `readonly` **name**: `string`

The name of the scope.

***

### ScopeSDK

> **ScopeSDK**: `object`

The SDK for the Scope service.

#### Type declaration

##### getAll()

Get all the scopes.

###### Returns

`Promise`\<[`Scope`](index.md#scope)[]\>

An array of [Scope](index.md#scope)
