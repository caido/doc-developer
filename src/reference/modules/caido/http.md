[@caido/quickjs-types](../index.md) / caido/http

# caido/http

## Classes

### Blob

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) encapsulates immutable, raw data.

#### Extended by

- [`File`](http.md#file)

#### Constructors

##### new Blob()

> **new Blob**[`parts`: (`string` \| `ArrayBuffer` \| [`Blob`](http.md#blob)](), `opts`?: [`BlobOpts`](http.md#blobopts)): [`Blob`](http.md#blob)

Creates a new `Blob` object containing a concatenation of the given sources.

{ArrayBuffer}, and {Blob} sources are copied into the 'Blob' and can therefore be
safely modified after the 'Blob' is created.

String sources are also copied into the `Blob`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parts` | [`string` \| `ArrayBuffer` \| [`Blob`](http.md#blob)]() |
| `opts`? | [`BlobOpts`](http.md#blobopts) |

###### Returns

[`Blob`](http.md#blob)

#### Properties

##### size

> `readonly` **size**: `number`

The total size of the `Blob` in bytes.

##### type

> `readonly` **type**: `string`

The content-type of the `Blob`.

#### Methods

##### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Returns a promise that fulfills with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing a copy of
the `Blob` data.

###### Returns

`Promise`\<`ArrayBuffer`\>

##### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\>

Returns a promise that resolves with an Uint8Array containing the contents of the Blob.

###### Returns

`Promise`\<`Uint8Array`\>

##### slice()

> **slice**(`start`?: `number`, `end`?: `number`, `type`?: `string`): [`Blob`](http.md#blob)

Creates and returns a new `Blob` containing a subset of this `Blob` objects
data. The original `Blob` is not altered.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start`? | `number` | The starting index. |
| `end`? | `number` | The ending index. |
| `type`? | `string` | The content-type for the new `Blob` |

###### Returns

[`Blob`](http.md#blob)

##### text()

> **text**(): `Promise`\<`string`\>

Returns a promise that fulfills with the contents of the `Blob` decoded as a UTF-8 string.

###### Returns

`Promise`\<`string`\>

***

### File

A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) encapsulates immutable, raw data.

#### Extends

- [`Blob`](http.md#blob)

#### Constructors

##### new File()

> **new File**[`data`: (`string` \| `ArrayBuffer` \| [`Blob`](http.md#blob)](), `fileName`: `string`, `opts`?: [`FileOpts`](http.md#fileopts)): [`File`](http.md#file)

Returns a newly constructed File.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`string` \| `ArrayBuffer` \| [`Blob`](http.md#blob)]() |
| `fileName` | `string` |
| `opts`? | [`FileOpts`](http.md#fileopts) |

###### Returns

[`File`](http.md#file)

###### Overrides

[`Blob`](http.md#blob).[`constructor`](http.md#constructors)

#### Properties

##### lastModified

> `readonly` **lastModified**: `number`

The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight).
Files without a known last modified date return the current date.

##### name

> `readonly` **name**: `string`

Name of the file referenced by the File object.

##### size

> `readonly` **size**: `number`

The total size of the `Blob` in bytes.

###### Inherited from

[`Blob`](http.md#blob).[`size`](http.md#size)

##### type

> `readonly` **type**: `string`

The content-type of the `Blob`.

###### Inherited from

[`Blob`](http.md#blob).[`type`](http.md#type)

#### Methods

##### arrayBuffer()

> **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Returns a promise that fulfills with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing a copy of
the `Blob` data.

###### Returns

`Promise`\<`ArrayBuffer`\>

###### Inherited from

[`Blob`](http.md#blob).[`arrayBuffer`](http.md#arraybuffer)

##### bytes()

> **bytes**(): `Promise`\<`Uint8Array`\>

Returns a promise that resolves with an Uint8Array containing the contents of the Blob.

###### Returns

`Promise`\<`Uint8Array`\>

###### Inherited from

[`Blob`](http.md#blob).[`bytes`](http.md#bytes)

##### slice()

> **slice**(`start`?: `number`, `end`?: `number`, `type`?: `string`): [`Blob`](http.md#blob)

Creates and returns a new `Blob` containing a subset of this `Blob` objects
data. The original `Blob` is not altered.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start`? | `number` | The starting index. |
| `end`? | `number` | The ending index. |
| `type`? | `string` | The content-type for the new `Blob` |

###### Returns

[`Blob`](http.md#blob)

###### Inherited from

[`Blob`](http.md#blob).[`slice`](http.md#slice)

##### text()

> **text**(): `Promise`\<`string`\>

Returns a promise that fulfills with the contents of the `Blob` decoded as a UTF-8 string.

###### Returns

`Promise`\<`string`\>

###### Inherited from

[`Blob`](http.md#blob).[`text`](http.md#text)

***

### Headers

#### Implements

- `Iterable`\<\[`string`, `string`\]\>

#### Constructors

##### new Headers()

> **new Headers**(`opts`?: [`HeadersOpts`](http.md#headersopts)): [`Headers`](http.md#headers)

Creates a new Headers object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts`? | [`HeadersOpts`](http.md#headersopts) |

###### Returns

[`Headers`](http.md#headers)

#### Properties

##### \[iterator\]()

> `readonly` **\[iterator\]**: () => `Iterator`\<\[`string`, `string`\]\>

###### Returns

`Iterator`\<\[`string`, `string`\]\>

###### Implementation of

`Iterable.[iterator]`

##### append()

> `readonly` **append**: (`name`: `string`, `value`: `string`) => `void`

Appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

##### delete()

> `readonly` **delete**: (`name`: `string`) => `void`

Deletes a header from a Headers object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`void`

##### entries()

> `readonly` **entries**: () => `IterableIterator`\<\[`string`, `string`\]\>

Returns an iterator allowing to go through all key/value pairs contained in this object.

###### Returns

`IterableIterator`\<\[`string`, `string`\]\>

##### forEach()

> `readonly` **forEach**: (`callbackfn`: (`value`: `string`, `key`: `string`) => `void`) => `void`

Executes a provided function once for each key/value pair in this Headers object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackfn` | (`value`: `string`, `key`: `string`) => `void` |

###### Returns

`void`

##### get()

> `readonly` **get**: (`name`: `string`) => `null` \| `string`

A String sequence representing the values of the retrieved header or null if this header is not set.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`null` \| `string`

##### getSetCookie()

> `readonly` **getSetCookie**: () => `string`[]

Returns an array containing the values of all Set-Cookie headers associated with a response.

###### Returns

`string`[]

##### has()

> `readonly` **has**: (`name`: `string`) => `boolean`

Returns a boolean stating whether a Headers object contains a certain header.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`boolean`

##### keys()

> `readonly` **keys**: () => `IterableIterator`\<`string`\>

Returns an iterator allowing you to go through all keys of the key/value pairs contained in this object.

###### Returns

`IterableIterator`\<`string`\>

##### set()

> `readonly` **set**: (`name`: `string`, `value`: `string`) => `void`

Sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

##### values()

> `readonly` **values**: () => `IterableIterator`\<`string`\>

Returns an iterator allowing you to go through all values of the key/value pairs contained in this object.

###### Returns

`IterableIterator`\<`string`\>

***

### Request

The Request interface of the Fetch API represents a resource request.

#### Constructors

##### new Request()

> **new Request**(`input`: `string` \| [`Request`](http.md#request), `init`?: [`RequestOpts`](http.md#requestopts)): [`Request`](http.md#request)

Creates a new Request object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`Request`](http.md#request) |
| `init`? | [`RequestOpts`](http.md#requestopts) |

###### Returns

[`Request`](http.md#request)

#### Properties

##### arrayBuffer()

> `readonly` **arrayBuffer**: () => `Promise`\<`ArrayBuffer`\>

Returns a promise that resolves with an ArrayBuffer representation of the request body.

###### Returns

`Promise`\<`ArrayBuffer`\>

##### blob()

> `readonly` **blob**: () => `Promise`\<[`Blob`](http.md#blob)\>

Returns a promise that resolves with a [Blob](http.md#blob) representation of the request body.

###### Returns

`Promise`\<[`Blob`](http.md#blob)\>

##### body

> `readonly` **body**: [`Body`](http.md#body-3)

The body content.

##### bodyUsed

> `readonly` **bodyUsed**: `boolean`

Stores true or false to indicate whether or not the body has been used in a request yet.

##### bytes()

> `readonly` **bytes**: () => `Promise`\<`Uint8Array`\>

Returns a promise that resolves with a Uint8Array representation of the request body.

###### Returns

`Promise`\<`Uint8Array`\>

##### cache

> `readonly` **cache**: `"no-cache"`

Contains the cache mode of the request

##### clone()

> `readonly` **clone**: () => [`Request`](http.md#request)

Creates a copy of the current [Request](http.md#request) object.

###### Returns

[`Request`](http.md#request)

##### headers

> `readonly` **headers**: [`Headers`](http.md#headers)

Contains the associated Headers object of the request.

##### json()

> `readonly` **json**: () => `Promise`\<`unknown`\>

Returns a promise that resolves with the result of parsing the request body as JSON.

###### Returns

`Promise`\<`unknown`\>

##### keepalive

> `readonly` **keepalive**: `boolean`

Contains the request's keepalive setting (true or false), which indicates whether llrt will
keep the associated connection alive.

##### method

> `readonly` **method**: `string`

Contains the request's method (GET, POST, etc.)

##### mode

> `readonly` **mode**: `"navigate"`

Contains the mode of the request

##### signal

> `readonly` **signal**: [`AbortSignal`](../llrt/abort.md#abortsignal)

Returns the [AbortSignal](../llrt/abort.md#abortsignal) associated with the request

##### text()

> `readonly` **text**: () => `Promise`\<`string`\>

Returns a promise that resolves with a text representation of the request body.

###### Returns

`Promise`\<`string`\>

##### url

> `readonly` **url**: `string`

Contains the URL of the request.

***

### Response

The Response interface of the Fetch API represents the response to a request.

#### Constructors

##### new Response()

> **new Response**(`body`?: [`Body`](http.md#body-3), `opts`?: [`ResponseOpts`](http.md#responseopts)): [`Response`](http.md#response)

Creates a new Response object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body`? | [`Body`](http.md#body-3) |
| `opts`? | [`ResponseOpts`](http.md#responseopts) |

###### Returns

[`Response`](http.md#response)

#### Properties

##### arrayBuffer()

> `readonly` **arrayBuffer**: () => `Promise`\<`ArrayBuffer`\>

Returns a promise that resolves with an ArrayBuffer representation of the response body.

###### Returns

`Promise`\<`ArrayBuffer`\>

##### blob()

> `readonly` **blob**: () => `Promise`\<[`Blob`](http.md#blob)\>

Returns a promise that resolves with a [Blob](http.md#blob) representation of the response body.

###### Returns

`Promise`\<[`Blob`](http.md#blob)\>

##### body

> `readonly` **body**: `null`

The body content (NOT IMPLEMENTED YET).

##### bodyUsed

> `readonly` **bodyUsed**: `boolean`

Stores a boolean value that declares whether the body has been used in a response yet.

##### clone()

> `readonly` **clone**: () => [`Response`](http.md#response)

Creates a clone of a [Response](http.md#response) object.

###### Returns

[`Response`](http.md#response)

##### headers

> `readonly` **headers**: [`Headers`](http.md#headers)

The [Headers](http.md#headers) object associated with the response.

##### json()

> `readonly` **json**: () => `Promise`\<`unknown`\>

Returns a promise that resolves with the result of parsing the response body text as JSON.

###### Returns

`Promise`\<`unknown`\>

##### ok

> `readonly` **ok**: `boolean`

A boolean indicating whether the response was successful (status in the range 200 – 299) or not.

##### redirected

> `readonly` **redirected**: `boolean`

Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry).

##### status

> `readonly` **status**: `number`

The status code of the response. (This will be 200 for a success).

##### statusText

> `readonly` **statusText**: `string`

The status message corresponding to the status code. (e.g., OK for 200).

##### text()

> `readonly` **text**: () => `Promise`\<`string`\>

Returns a promise that resolves with a text representation of the response body.

###### Returns

`Promise`\<`string`\>

##### type

> `readonly` **type**: [`ResponseType`](http.md#responsetype)

The type of the response.

##### url

> `readonly` **url**: `string`

#### Methods

##### error()

> `static` **error**(): [`Response`](http.md#response)

Returns a new [Response](http.md#response) object associated with a network error.

###### Returns

[`Response`](http.md#response)

##### json()

> `static` **json**(`data`: `any`, `init`?: [`ResponseInit`](http.md#responseinit)): [`Response`](http.md#response)

Returns a new [Response](http.md#response) object for returning the provided JSON encoded data.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |
| `init`? | [`ResponseInit`](http.md#responseinit) |

###### Returns

[`Response`](http.md#response)

##### redirect()

> `static` **redirect**(`url`: `string`, `status`?: `number`): [`Response`](http.md#response)

Returns a new [Response](http.md#response) with a different URL.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `status`? | `number` |

###### Returns

[`Response`](http.md#response)

## Interfaces

### BlobOpts

#### Extended by

- [`FileOpts`](http.md#fileopts)

#### Properties

##### endings?

> `optional` **endings**: `"transparent"` \| `"native"`

One of either `'transparent'` or `'native'`. When set to `'native'`, line endings in string source parts
will be converted to the platform native line-ending as specified by `import { EOL } from 'os'`.

##### type?

> `optional` **type**: `string`

The Blob content-type. The intent is for `type` to convey the MIME media type of the data,
however no validation of the type format is performed.

***

### FileOpts

#### Extends

- [`BlobOpts`](http.md#blobopts)

#### Properties

##### endings?

> `optional` **endings**: `"transparent"` \| `"native"`

One of either `'transparent'` or `'native'`. When set to `'native'`, line endings in string source parts
will be converted to the platform native line-ending as specified by `import { EOL } from 'os'`.

###### Inherited from

[`BlobOpts`](http.md#blobopts).[`endings`](http.md#endings)

##### lastModified?

> `optional` **lastModified**: `number`

The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight).
Files without a known last modified date return the current date.

##### type?

> `optional` **type**: `string`

The Blob content-type. The intent is for `type` to convey the MIME media type of the data,
however no validation of the type format is performed.

###### Inherited from

[`BlobOpts`](http.md#blobopts).[`type`](http.md#type-3)

***

### RequestOpts

#### Properties

##### body?

> `optional` **body**: [`Blob`](http.md#blob)

##### headers?

> `optional` **headers**: [`HeadersLike`](http.md#headerslike)

##### method?

> `optional` **method**: `string`

##### signal?

> `optional` **signal**: [`AbortSignal`](../llrt/abort.md#abortsignal)

##### url?

> `optional` **url**: `string`

***

### ResponseInit

#### Extended by

- [`ResponseOpts`](http.md#responseopts)

#### Properties

##### headers?

> `readonly` `optional` **headers**: [`HeadersLike`](http.md#headerslike)

##### status?

> `readonly` `optional` **status**: `number`

##### statusText?

> `readonly` `optional` **statusText**: `string`

***

### ResponseOpts

#### Extends

- [`ResponseInit`](http.md#responseinit)

#### Properties

##### headers?

> `readonly` `optional` **headers**: [`HeadersLike`](http.md#headerslike)

###### Inherited from

[`ResponseInit`](http.md#responseinit).[`headers`](http.md#headers-4)

##### signal?

> `readonly` `optional` **signal**: [`AbortSignal`](../llrt/abort.md#abortsignal)

##### status?

> `readonly` `optional` **status**: `number`

###### Inherited from

[`ResponseInit`](http.md#responseinit).[`status`](http.md#status-1)

##### statusText?

> `readonly` `optional` **statusText**: `string`

###### Inherited from

[`ResponseInit`](http.md#responseinit).[`statusText`](http.md#statustext-1)

##### url?

> `readonly` `optional` **url**: `string`

## Type Aliases

### Body

> **Body**: [`ArrayBufferView`](../llrt/globals/namespaces/QuickJS.md#arraybufferview) \| [`Blob`](http.md#blob) \| `null`

The `Body` of a [Response](http.md#response) or [Request](http.md#request).
Currently NOT a `ReadableStream`.

***

### HeadersLike

> **HeadersLike**: `Record`\<`string`, `string`\> \| [`Headers`](http.md#headers)

***

### HeadersOpts

> **HeadersOpts**: `string`[][] \| [`HeadersLike`](http.md#headerslike)

***

### RequestCache

> **RequestCache**: `"no-cache"`

***

### RequestMode

> **RequestMode**: `"navigate"`

***

### ResponseType

> **ResponseType**: `"basic"` \| `"error"`

## Functions

### fetch()

> **fetch**(`input`: `string` \| [`Request`](http.md#request), `init`?: [`RequestOpts`](http.md#requestopts)): `Promise`\<[`Response`](http.md#response)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`Request`](http.md#request) |
| `init`? | [`RequestOpts`](http.md#requestopts) |

#### Returns

`Promise`\<[`Response`](http.md#response)\>
