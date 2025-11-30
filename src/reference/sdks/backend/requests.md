# Requests

### Body

The body of a [Request](#request) or [Response](#response).

Calling `to<FORMAT>` will try to convert the body to the desired format.

#### Constructors

##### Constructor

> **new Body**(`data`: `string` \| `number`[] \| `Uint8Array`): [`Body`](#body)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| `number`[] \| `Uint8Array` |

###### Returns

[`Body`](#body)

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

##### Constructor

> **new RequestSpec**(`url`: `string`): [`RequestSpec`](#requestspec)

Build a new [RequestSpec](#requestspec) from a URL string.
We try to infer as much information as possible from the URL, including the scheme, host, path and query.

You can convert a saved immutable [Request](#request) object into a [RequestSpec](#requestspec) object by using the `toSpec()` method.

By default:

- Method is `GET`.
- Path is `/`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpec`](#requestspec)

###### Throws

If the URL is invalid.

###### Example

```js
const spec = new RequestSpec("https://example.com");
```

#### Methods

##### getBody()

> **getBody**(): [`Body`](#body) \| `undefined`

The body of the request.

###### Returns

[`Body`](#body) \| `undefined`

##### getHeader()

> **getHeader**(`name`: `string` \| [`GetHeaderOptions`](#getheaderoptions)): `string`[] \| `undefined`

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` \| [`GetHeaderOptions`](#getheaderoptions) |

###### Returns

`string`[] \| `undefined`

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

> **getMethod**(`options`: [`RawOption`](shared.md#rawoption)): `Uint8Array`

Get the HTTP method of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](shared.md#rawoption) |

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

> **getPath**(`options`: [`RawOption`](shared.md#rawoption)): `Uint8Array`

Get the path of the request.

Get the raw version by passing `{ raw: true }` in the options.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](shared.md#rawoption) |

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

> **getQuery**(`options`: [`RawOption`](shared.md#rawoption)): `Uint8Array`

Get the unparsed query of the request.

Get the raw version by passing `{ raw: true }` in the options.

Excludes the leading `?`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RawOption`](shared.md#rawoption) |

###### Returns

`Uint8Array`

##### getRaw()

> **getRaw**(): [`RequestSpecRaw`](#requestspecraw)

This methods converts the [RequestSpec](#requestspec) to a [RequestSpecRaw](#requestspecraw).

This is useful to retrieve the raw bytes of the request.

###### Returns

[`RequestSpecRaw`](#requestspecraw)

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

> **setBody**(`body`: [`Bytes`](shared.md#bytes) \| [`Body`](#body), `options?`: [`SetBodyOptions`](#setbodyoptions)): `void`

Set the body of the request.

The body can either be a [Body](#body) or any type that can be converted to [Bytes](shared.md#bytes).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`Bytes`](shared.md#bytes) \| [`Body`](#body) |
| `options?` | [`SetBodyOptions`](#setbodyoptions) |

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

> **setMethod**(`method`: [`Bytes`](shared.md#bytes)): `void`

Set the HTTP method of the request.

All strings are accepted.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`Bytes`](shared.md#bytes) |

###### Returns

`void`

##### setPath()

> **setPath**(`path`: [`Bytes`](shared.md#bytes)): `void`

Set the path of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | [`Bytes`](shared.md#bytes) |

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

> **setQuery**(`query`: [`Bytes`](shared.md#bytes)): `void`

Set the unparsed query of the request.

The query string should not include the leading `?`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | [`Bytes`](shared.md#bytes) |

###### Returns

`void`

###### Example

```js
spec.setQuery("q=hello");
```

##### setRaw()

> **setRaw**(`raw`: [`Bytes`](shared.md#bytes)): [`RequestSpecRaw`](#requestspecraw)

This method sets the raw [Bytes](shared.md#bytes) of the request and converts it to a [RequestSpecRaw](#requestspecraw).

This is useful when you have a prepared [RequestSpec](#requestspec) and you just want to modify the raw data.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](shared.md#bytes) |

###### Returns

[`RequestSpecRaw`](#requestspecraw)

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

> `static` **parse**(`bytes`: [`Bytes`](shared.md#bytes)): [`RequestSpec`](#requestspec)

Parses raw bytes into a [RequestSpec](#requestspec).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | [`Bytes`](shared.md#bytes) |

###### Returns

[`RequestSpec`](#requestspec)

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

> `static` **parse**(`raw`: [`RequestSpecRaw`](#requestspecraw)): [`RequestSpec`](#requestspec)

Parses the raw bytes of a [RequestSpecRaw](#requestspecraw) into a [RequestSpec](#requestspec).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`RequestSpecRaw`](#requestspecraw) |

###### Returns

[`RequestSpec`](#requestspec)

###### Throws

If the bytes are not a valid HTTP request.

***

### RequestSpecRaw

A mutable raw Request that has not yet been sent.

#### Constructors

##### Constructor

> **new RequestSpecRaw**(`url`: `string`): [`RequestSpecRaw`](#requestspecraw)

Build a new [RequestSpecRaw](#requestspecraw) from a URL string. Only the host, port and scheme will be parsed.

You can convert a saved immutable [Request](#request) object into a [RequestSpecRaw](#requestspecraw) object by using the `toSpecRaw()` method.

You MUST use `setRaw` to set the raw bytes of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

###### Returns

[`RequestSpecRaw`](#requestspecraw)

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

> **getSpec**(): [`RequestSpec`](#requestspec)

This methods converts the [RequestSpecRaw](#requestspecraw) to a [RequestSpec](#requestspec).

###### Returns

[`RequestSpec`](#requestspec)

###### Throws

If the bytes are not a valid HTTP request.

###### See

[RequestSpec.parse](#parse)

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

> **setRaw**(`raw`: [`Bytes`](shared.md#bytes)): `void`

Set the raw [Bytes](shared.md#bytes) of the request.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `raw` | [`Bytes`](shared.md#bytes) |

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

### GetHeaderOptions

> **GetHeaderOptions** = `object`

Options for getting a header value.

#### Properties

##### name

> **name**: `string`

The name of the header to get.
Header name is case-insensitive.

##### split?

> `optional` **split**: `boolean`

Whether to split the header value on commas.

###### Default

```ts
false
```

***

### Request

> **Request** = `object`

An immutable saved Request.

To modify, use `toSpec` to get a `RequestSpec` object.

#### Methods

##### getBody()

> **getBody**(): [`Body`](#body) \| `undefined`

The body of the request.

###### Returns

[`Body`](#body) \| `undefined`

##### getCreatedAt()

> **getCreatedAt**(): `Date`

The datetime the request was recorded by the proxy.

###### Returns

`Date`

##### getHeader()

> **getHeader**(`name`: `string` \| [`GetHeaderOptions`](#getheaderoptions)): `string`[] \| `undefined`

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` \| [`GetHeaderOptions`](#getheaderoptions) |

###### Returns

`string`[] \| `undefined`

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

The target host of the request.

###### Returns

`string`

##### getId()

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the request.

###### Returns

[`ID`](shared.md#id)

##### getMethod()

> **getMethod**(): `string`

The HTTP method of the request.

###### Returns

`string`

##### getPath()

> **getPath**(): `string`

The path of the request.

###### Returns

`string`

##### getPort()

> **getPort**(): `number`

The target port of the request.

###### Returns

`number`

##### getQuery()

> **getQuery**(): `string`

The unparsed query of the request.

Excludes the leading `?`.

###### Returns

`string`

##### getRaw()

> **getRaw**(): [`RequestRaw`](#requestraw)

The raw version of the request.

Used to access the bytes directly.

###### Returns

[`RequestRaw`](#requestraw)

##### getTls()

> **getTls**(): `boolean`

If the request uses TLS (HTTPS).

###### Returns

`boolean`

##### getUrl()

> **getUrl**(): `string`

The full URL of the request.

###### Returns

`string`

##### toSpec()

> **toSpec**(): [`RequestSpec`](#requestspec)

Copied the request to a mutable un-saved [RequestSpec](#requestspec).
This enables you to make modify a request before re-sending it.

###### Returns

[`RequestSpec`](#requestspec)

##### toSpecRaw()

> **toSpecRaw**(): [`RequestSpecRaw`](#requestspecraw)

Copied the request to a mutable un-saved [RequestSpecRaw](#requestspecraw).
The raw requests are not parsed and can be used to send invalid HTTP Requests.

###### Returns

[`RequestSpecRaw`](#requestspecraw)

***

### RequestOrderField

> **RequestOrderField** = `"ext"` \| `"host"` \| `"id"` \| `"method"` \| `"path"` \| `"query"` \| `"created_at"` \| `"source"`

Field to order requests by.

***

### RequestRaw

> **RequestRaw** = `object`

An immutable saved raw Request.

#### Methods

##### toBytes()

> **toBytes**(): `Uint8Array`

Get the raw request as an array of bytes.

###### Returns

`Uint8Array`

##### toText()

> **toText**(): `string`

Parse the raw request as a string.

Unprintable characters will be replaced with `�`.

###### Returns

`string`

***

### RequestResponse

> **RequestResponse** = `object`

An immutable saved Request and Response pair.

#### Properties

##### request

> **request**: [`Request`](#request)

##### response

> **response**: [`Response`](#response)

***

### RequestResponseOpt

> **RequestResponseOpt** = `object`

An immutable saved Request and optional Response pair.

#### Properties

##### request

> **request**: [`Request`](#request)

##### response?

> `optional` **response**: [`Response`](#response)

***

### RequestsConnection

> **RequestsConnection** = `object`

A connection of requests.

#### Properties

##### items

> **items**: [`RequestsConnectionItem`](#requestsconnectionitem)[]

##### pageInfo

> **pageInfo**: [`PageInfo`](other.md#pageinfo)

***

### RequestsConnectionItem

> **RequestsConnectionItem** = `object`

An item in a connection of requests.

#### Properties

##### cursor

> **cursor**: [`Cursor`](shared.md#cursor)

##### request

> **request**: [`Request`](#request)

##### response?

> `optional` **response**: [`Response`](#response)

***

### RequestSendTimeouts

> **RequestSendTimeouts** = `object`

Timeouts for sending a request and receiving a response.

#### Properties

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

> **RequestsQuery** = `object`

Query builder to fetch requests.

#### Methods

##### after()

> **after**(`cursor`: [`Cursor`](shared.md#cursor)): [`RequestsQuery`](#requestsquery)

Requests after a given cursor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | [`Cursor`](shared.md#cursor) | [Cursor](shared.md#cursor) of the request |

###### Returns

[`RequestsQuery`](#requestsquery)

##### ascending()

###### Call Signature

> **ascending**(`target`: `"req"`, `field`: [`RequestOrderField`](#requestorderfield)): [`RequestsQuery`](#requestsquery)

Ascending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](#requestsquery)

###### Call Signature

> **ascending**(`target`: `"resp"`, `field`: [`ResponseOrderField`](#responseorderfield)): [`RequestsQuery`](#requestsquery)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](#responseorderfield) |

###### Returns

[`RequestsQuery`](#requestsquery)

##### before()

> **before**(`cursor`: [`Cursor`](shared.md#cursor)): [`RequestsQuery`](#requestsquery)

Requests before a given cursor.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cursor` | [`Cursor`](shared.md#cursor) | [Cursor](shared.md#cursor) of the request |

###### Returns

[`RequestsQuery`](#requestsquery)

##### descending()

###### Call Signature

> **descending**(`target`: `"req"`, `field`: [`RequestOrderField`](#requestorderfield)): [`RequestsQuery`](#requestsquery)

Descending ordering.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `"req"` | Target of the ordering: req or resp. |
| `field` | [`RequestOrderField`](#requestorderfield) | Field to order by. |

###### Returns

[`RequestsQuery`](#requestsquery)

###### Call Signature

> **descending**(`target`: `"resp"`, `field`: [`ResponseOrderField`](#responseorderfield)): [`RequestsQuery`](#requestsquery)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `"resp"` |
| `field` | [`ResponseOrderField`](#responseorderfield) |

###### Returns

[`RequestsQuery`](#requestsquery)

##### execute()

> **execute**(): `Promise`\<[`RequestsConnection`](#requestsconnection)\>

Execute the query.

###### Returns

`Promise`\<[`RequestsConnection`](#requestsconnection)\>

###### Throws

If a query parameter is invalid or the query cannot be executed.

##### filter()

> **filter**(`filter`: `string`): [`RequestsQuery`](#requestsquery)

Filter requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | `string` | HTTPQL filter |

###### Returns

[`RequestsQuery`](#requestsquery)

##### first()

> **first**(`n`: `number`): [`RequestsQuery`](#requestsquery)

First n requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

###### Returns

[`RequestsQuery`](#requestsquery)

##### last()

> **last**(`n`: `number`): [`RequestsQuery`](#requestsquery)

Last n requests.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of requests to return |

###### Returns

[`RequestsQuery`](#requestsquery)

***

### RequestsSDK

> **RequestsSDK** = `object`

The SDK for the Requests service.

#### Methods

##### get()

> **get**(`id`: [`ID`](shared.md#id)): `Promise`\<[`RequestResponseOpt`](#requestresponseopt) \| `undefined`\>

Get a request by its unique [ID](shared.md#id).

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`ID`](shared.md#id) |

###### Returns

`Promise`\<[`RequestResponseOpt`](#requestresponseopt) \| `undefined`\>

###### Example

```js
await sdk.requests.get("1");
```

##### inScope()

> **inScope**(`request`: [`Request`](#request) \| [`RequestSpec`](#requestspec), `scopes?`: [`Scope`](scope.md#scope)[] \| [`ID`](shared.md#id)[]): `boolean`

Checks if a request is in scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`Request`](#request) \| [`RequestSpec`](#requestspec) | The request to check |
| `scopes?` | [`Scope`](scope.md#scope)[] \| [`ID`](shared.md#id)[] | Optional scopes or scope IDs to check against. If not provided, checks against the default scope. |

###### Returns

`boolean`

True if the request is in scope

###### Example

```js
// Check against default scope
if (sdk.requests.inScope(request)) {
 sdk.console.log("In scope");
}

// Check against specific scopes
const isInScope = sdk.requests.inScope(request, [scope1, scope2]);
sdk.console.log(isInScope); // true or false
```

##### matches()

> **matches**(`filter`: `string`, `request`: [`Request`](#request), `response?`: [`Response`](#response)): `boolean`

Checks if a request/response matches an HTTPQL filter.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | `string` | HTTPQL filter |
| `request` | [`Request`](#request) | The [Request](#request) to match against |
| `response?` | [`Response`](#response) | The [Response](#response) to match against |

###### Returns

`boolean`

##### query()

> **query**(): [`RequestsQuery`](#requestsquery)

Query requests of the current project.

###### Returns

[`RequestsQuery`](#requestsquery)

###### Example

```js
const page = await sqk.requests.query().first(2).execute();
sdk.console.log(`ID: ${page.items[1].request.getId()}`);
```

##### send()

> **send**(`request`: [`RequestSpec`](#requestspec) \| [`RequestSpecRaw`](#requestspecraw), `options?`: [`RequestSendOptions`](other.md#requestsendoptions)): `Promise`\<[`RequestResponse`](#requestresponse)\>

Sends an HTTP request, either a [RequestSpec](#requestspec) or [RequestSpecRaw](#requestspecraw).

This respects the upstream proxy settings.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`RequestSpec`](#requestspec) \| [`RequestSpecRaw`](#requestspecraw) |
| `options?` | [`RequestSendOptions`](other.md#requestsendoptions) |

###### Returns

`Promise`\<[`RequestResponse`](#requestresponse)\>

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

> **Response** = `object`

An immutable saved Response.

#### Methods

##### getBody()

> **getBody**(): [`Body`](#body) \| `undefined`

The body of the response

###### Returns

[`Body`](#body) \| `undefined`

##### getCode()

> **getCode**(): `number`

The status code of the response.

###### Returns

`number`

##### getCreatedAt()

> **getCreatedAt**(): `Date`

The datetime the response was recorded by the proxy.

###### Returns

`Date`

##### getHeader()

> **getHeader**(`name`: `string` \| [`GetHeaderOptions`](#getheaderoptions)): `string`[] \| `undefined`

Get a header value.

Header name is case-insensitive.
The header might have multiple values.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` \| [`GetHeaderOptions`](#getheaderoptions) |

###### Returns

`string`[] \| `undefined`

##### getHeaders()

> **getHeaders**(): `Record`\<`string`, `string`[]\>

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

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the response.

###### Returns

[`ID`](shared.md#id)

##### getRaw()

> **getRaw**(): [`ResponseRaw`](#responseraw)

The raw version of the response.

Used to access the bytes directly.

###### Returns

[`ResponseRaw`](#responseraw)

##### getRoundtripTime()

> **getRoundtripTime**(): `number`

The time it took to send the request and receive the response in milliseconds.

###### Returns

`number`

***

### ResponseOrderField

> **ResponseOrderField** = `"length"` \| `"roundtrip"` \| `"code"`

Field to order responses by.

***

### ResponseRaw

> **ResponseRaw** = `object`

An immutable saved raw Response.

#### Methods

##### toBytes()

> **toBytes**(): `Uint8Array`

Get the raw response as an array of bytes.

###### Returns

`Uint8Array`

##### toText()

> **toText**(): `string`

Parse the raw response as a string.

Unprintable characters will be replaced with `�`.

###### Returns

`string`

***

### SetBodyOptions

> **SetBodyOptions** = `object`

Options when setting the body of a Request.

#### Properties

##### updateContentLength

> **updateContentLength**: `boolean`

Should update the Content-export type header.

###### Default

```ts
true
```
