[@caido/quickjs-types](../../index.md) / llrt/url

# llrt/url

## Modules

| Module | Description |
| ------ | ------ |
| [url](url.md) | - |

## Interfaces

### Global

#### Properties

##### URL

> **URL**: *typeof* [`URL`](url.md#url)

##### URLSearchParams

> **URLSearchParams**: *typeof* [`URLSearchParams`](url.md#urlsearchparams-1)

***

### URL

Browser-compatible `URL` class, implemented by following the WHATWG URL
Standard. [Examples of parsed URLs](https://url.spec.whatwg.org/#example-url-parsing) may be found in the Standard itself.
The `URL` class is also available on the global object.

In accordance with browser conventions, all properties of `URL` objects
are implemented as getters and setters on the class prototype, rather than as
data properties on the object itself. Thus, unlike `legacy urlObject`s,
using the `delete` keyword on any properties of `URL` objects (e.g. `delete myURL.protocol`, `delete myURL.pathname`, etc) has no effect but will still
return `true`.

#### Extends

- [`URL`](url.md#url)

#### Properties

##### hash

> **hash**: `string`

Gets and sets the fragment portion of the URL.

```js
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
// Prints #bar

myURL.hash = 'baz';
console.log(myURL.href);
// Prints https://example.org/foo#baz
```

Invalid URL characters included in the value assigned to the `hash` property
are `percent-encoded`. The selection of which characters to
percent-encode may vary somewhat from what the [parse](url.md#parse-2) and [format](url.md#format) methods would produce.

###### Inherited from

[`URL`](url.md#url).[`hash`](url.md#hash)

##### host

> **host**: `string`

Gets and sets the host portion of the URL.

```js
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
// Prints example.org:81

myURL.host = 'example.com:82';
console.log(myURL.href);
// Prints https://example.com:82/foo
```

Invalid host values assigned to the `host` property are ignored.

###### Inherited from

[`URL`](url.md#url).[`host`](url.md#host)

##### hostname

> **hostname**: `string`

Gets and sets the host name portion of the URL. The key difference between`url.host` and `url.hostname` is that `url.hostname` does _not_ include the
port.

```js
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
// Prints example.org

// Setting the hostname does not change the port
myURL.hostname = 'example.com';
console.log(myURL.href);
// Prints https://example.com:81/foo

// Use myURL.host to change the hostname and port
myURL.host = 'example.org:82';
console.log(myURL.href);
// Prints https://example.org:82/foo
```

Invalid host name values assigned to the `hostname` property are ignored.

###### Inherited from

[`URL`](url.md#url).[`hostname`](url.md#hostname)

##### href

> **href**: `string`

Gets and sets the serialized URL.

```js
const myURL = new URL('https://example.org/foo');
console.log(myURL.href);
// Prints https://example.org/foo

myURL.href = 'https://example.com/bar';
console.log(myURL.href);
// Prints https://example.com/bar
```

Getting the value of the `href` property is equivalent to calling [toString](url.md#tostring).

Setting the value of this property to a new value is equivalent to creating a
new `URL` object using `new URL(value)`. Each of the `URL` object's properties will be modified.

If the value assigned to the `href` property is not a valid URL, a `TypeError` will be thrown.

###### Inherited from

[`URL`](url.md#url).[`href`](url.md#href)

##### origin

> `readonly` **origin**: `string`

Gets the read-only serialization of the URL's origin.

```js
const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin);
// Prints https://example.org
```

```js
const idnURL = new URL('https://測試');
console.log(idnURL.origin);
// Prints https://xn--g6w251d

console.log(idnURL.hostname);
// Prints xn--g6w251d
```

###### Inherited from

[`URL`](url.md#url).[`origin`](url.md#origin)

##### password

> **password**: `string`

Gets and sets the password portion of the URL.

```js
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
// Prints https://abc:123@example.com/
```

Invalid URL characters included in the value assigned to the `password` property
are `percent-encoded`. The selection of which characters to
percent-encode may vary somewhat from what the [parse](url.md#parse-2) and [format](url.md#format) methods would produce.

###### Inherited from

[`URL`](url.md#url).[`password`](url.md#password)

##### pathname

> **pathname**: `string`

Gets and sets the path portion of the URL.

```js
const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
// Prints https://example.org/abcdef?123
```

Invalid URL characters included in the value assigned to the `pathname` property are `percent-encoded`. The selection of which characters
to percent-encode may vary somewhat from what the [parse](url.md#parse-2) and [format](url.md#format) methods would produce.

###### Inherited from

[`URL`](url.md#url).[`pathname`](url.md#pathname)

##### port

> **port**: `string`

Gets and sets the port portion of the URL.

The port value may be a number or a string containing a number in the range `0` to `65535` (inclusive). Setting the value to the default port of the `URL` objects given `protocol` will
result in the `port` value becoming
the empty string (`''`).

The port value can be an empty string in which case the port depends on
the protocol/scheme.

Upon assigning a value to the port, the value will first be converted to a
string using `.toString()`.

If that string is invalid but it begins with a number, the leading number is
assigned to `port`.
If the number lies outside the range denoted above, it is ignored.

```js
const myURL = new URL('https://example.org:8888');
console.log(myURL.port);
// Prints 8888

// Default ports are automatically transformed to the empty string
// (HTTPS protocol's default port is 443)
myURL.port = '443';
console.log(myURL.port);
// Prints the empty string
console.log(myURL.href);
// Prints https://example.org/

myURL.port = 1234;
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);
// Prints https://example.org:1234/

// Completely invalid port strings are ignored
myURL.port = 'abcd';
console.log(myURL.port);
// Prints 1234

// Leading numbers are treated as a port number
myURL.port = '5678abcd';
console.log(myURL.port);
// Prints 5678

// Non-integers are truncated
myURL.port = 1234.5678;
console.log(myURL.port);
// Prints 1234

// Out-of-range numbers which are not represented in scientific notation
// will be ignored.
myURL.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL.port);
// Prints 1234
```

Numbers which contain a decimal point,
such as floating-point numbers or numbers in scientific notation,
are not an exception to this rule.
Leading numbers up to the decimal point will be set as the URL's port,
assuming they are valid:

```js
myURL.port = 4.567e21;
console.log(myURL.port);
// Prints 4 (because it is the leading number in the string '4.567e21')
```

###### Inherited from

[`URL`](url.md#url).[`port`](url.md#port)

##### protocol

> **protocol**: `string`

Gets and sets the protocol portion of the URL.

```js
const myURL = new URL('https://example.org');
console.log(myURL.protocol);
// Prints https:

myURL.protocol = 'ftp';
console.log(myURL.href);
// Prints ftp://example.org/
```

Invalid URL protocol values assigned to the `protocol` property are ignored.

###### Inherited from

[`URL`](url.md#url).[`protocol`](url.md#protocol)

##### search

> **search**: `string`

Gets and sets the serialized query portion of the URL.

```js
const myURL = new URL('https://example.org/abc?123');
console.log(myURL.search);
// Prints ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);
// Prints https://example.org/abc?abc=xyz
```

Any invalid URL characters appearing in the value assigned the `search` property will be `percent-encoded`. The selection of which
characters to percent-encode may vary somewhat from what the [parse](url.md#parse-2) and [format](url.md#format) methods would produce.

###### Inherited from

[`URL`](url.md#url).[`search`](url.md#search)

##### searchParams

> `readonly` **searchParams**: [`URLSearchParams`](url.md#urlsearchparams-1)

Gets the `URLSearchParams` object representing the query parameters of the
URL. This property is read-only but the `URLSearchParams` object it provides
can be used to mutate the URL instance; to replace the entirety of query
parameters of the URL, use the [search](url.md#search) setter. See `URLSearchParams` documentation for details.

Use care when using `.searchParams` to modify the `URL` because,
per the WHATWG specification, the `URLSearchParams` object uses
different rules to determine which characters to percent-encode. For
instance, the `URL` object will not percent encode the ASCII tilde (`~`)
character, while `URLSearchParams` will always encode it:

```js
const myURL = new URL('https://example.org/abc?foo=~bar');

console.log(myURL.search);  // prints ?foo=~bar

// Modify the URL via searchParams...
myURL.searchParams.sort();

console.log(myURL.search);  // prints ?foo=%7Ebar
```

###### Inherited from

[`URL`](url.md#url).[`searchParams`](url.md#searchparams)

##### username

> **username**: `string`

Gets and sets the username portion of the URL.

```js
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
// Prints abc

myURL.username = '123';
console.log(myURL.href);
// Prints https://123:xyz@example.com/
```

Any invalid URL characters appearing in the value assigned the `username` property will be `percent-encoded`. The selection of which
characters to percent-encode may vary somewhat from what the [parse](url.md#parse-2) and [format](url.md#format) methods would produce.

###### Inherited from

[`URL`](url.md#url).[`username`](url.md#username)

#### Methods

##### toJSON()

> **toJSON**(): `string`

The `toJSON()` method on the `URL` object returns the serialized URL. The
value returned is equivalent to that of [href](url.md#href) and [toString](url.md#tostring).

This method is automatically called when an `URL` object is serialized
with [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

```js
const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org'),
];
console.log(JSON.stringify(myURLs));
// Prints ["https://www.example.com/","https://test.example.org/"]
```

###### Returns

`string`

###### Inherited from

[`URL`](url.md#url).[`toJSON`](url.md#tojson)

##### toString()

> **toString**(): `string`

The `toString()` method on the `URL` object returns the serialized URL. The
value returned is equivalent to that of [href](url.md#href) and [toJSON](url.md#tojson).

###### Returns

`string`

###### Inherited from

[`URL`](url.md#url).[`toString`](url.md#tostring)

***

### URLSearchParams

The `URLSearchParams` API provides read and write access to the query of a `URL`. The `URLSearchParams` class can also be used standalone with one of the
four following constructors.
The `URLSearchParams` class is also available on the global object.

The WHATWG `URLSearchParams` interface and the `querystring` module have
similar purpose, but the purpose of the `querystring` module is more
general, as it allows the customization of delimiter characters (`&#x26;` and `=`).
On the other hand, this API is designed purely for URL query strings.

```js
const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));
// Prints 123

myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
// Prints https://example.org/?abc=123&#x26;abc=xyz

myURL.searchParams.delete('abc');
myURL.searchParams.set('a', 'b');
console.log(myURL.href);
// Prints https://example.org/?a=b

const newSearchParams = new URLSearchParams(myURL.searchParams);
// The above is equivalent to
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// Prints https://example.org/?a=b
console.log(newSearchParams.toString());
// Prints a=b&#x26;a=c

// newSearchParams.toString() is implicitly called
myURL.search = newSearchParams;
console.log(myURL.href);
// Prints https://example.org/?a=b&#x26;a=c
newSearchParams.delete('a');
console.log(myURL.href);
// Prints https://example.org/?a=b&#x26;a=c
```

#### Extends

- [`URLSearchParams`](url.md#urlsearchparams-1)

#### Methods

##### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, `string`\]\>

###### Returns

`IterableIterator`\<\[`string`, `string`\]\>

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`[iterator]`](url.md#iterator)

##### append()

> **append**(`name`: `string`, `value`: `string`): `void`

Append a new name-value pair to the query string.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`append`](url.md#append)

##### delete()

> **delete**(`name`: `string`, `value?`: `string`): `void`

If `value` is provided, removes all name-value pairs
where name is `name` and value is `value`.

If `value` is not provided, removes all name-value pairs whose name is `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value?` | `string` |

###### Returns

`void`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`delete`](url.md#delete)

##### entries()

> **entries**(): `IterableIterator`\<\[`string`, `string`\]\>

Returns an ES6 `Iterator` over each of the name-value pairs in the query.
Each item of the iterator is a JavaScript `Array`. The first item of the `Array` is the `name`, the second item of the `Array` is the `value`.

Alias for `urlSearchParams[@@iterator]()`.

###### Returns

`IterableIterator`\<\[`string`, `string`\]\>

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`entries`](url.md#entries)

##### forEach()

> **forEach**\<`TThis`\>(`fn`: (`this`: `TThis`, `value`: `string`, `name`: `string`, `searchParams`: [`URLSearchParams`](url.md#urlsearchparams-1)) => `void`, `thisArg?`: `TThis`): `void`

Iterates over each name-value pair in the query and invokes the given function.

```js
const myURL = new URL('https://example.org/?a=b&#x26;c=d');
myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(name, value, myURL.searchParams === searchParams);
});
// Prints:
//   a b true
//   c d true
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TThis` | [`URLSearchParams`](#urlsearchparams-2) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`this`: `TThis`, `value`: `string`, `name`: `string`, `searchParams`: [`URLSearchParams`](url.md#urlsearchparams-1)) => `void` | Invoked for each name-value pair in the query |
| `thisArg?` | `TThis` | To be used as `this` value for when `fn` is called |

###### Returns

`void`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`forEach`](url.md#foreach)

##### get()

> **get**(`name`: `string`): `string` \| `null`

Returns the value of the first name-value pair whose name is `name`. If there
are no such pairs, `null` is returned.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`string` \| `null`

or `null` if there is no name-value pair with the given `name`.

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`get`](url.md#get)

##### has()

> **has**(`name`: `string`, `value?`: `string`): `boolean`

Checks if the `URLSearchParams` object contains key-value pair(s) based on `name` and an optional `value` argument.

If `value` is provided, returns `true` when name-value pair with
same `name` and `value` exists.

If `value` is not provided, returns `true` if there is at least one name-value
pair whose name is `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value?` | `string` |

###### Returns

`boolean`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`has`](url.md#has)

##### keys()

> **keys**(): `IterableIterator`\<`string`\>

Returns an ES6 `Iterator` over the names of each name-value pair.

```js
const params = new URLSearchParams('foo=bar&#x26;foo=baz');
for (const name of params.keys()) {
  console.log(name);
}
// Prints:
//   foo
//   foo
```

###### Returns

`IterableIterator`\<`string`\>

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`keys`](url.md#keys)

##### set()

> **set**(`name`: `string`, `value`: `string`): `void`

Sets the value in the `URLSearchParams` object associated with `name` to `value`. If there are any pre-existing name-value pairs whose names are `name`,
set the first such pair's value to `value` and remove all others. If not,
append the name-value pair to the query string.

```js
const params = new URLSearchParams();
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params.toString());
// Prints foo=bar&#x26;foo=baz&#x26;abc=def

params.set('foo', 'def');
params.set('xyz', 'opq');
console.log(params.toString());
// Prints foo=def&#x26;abc=def&#x26;xyz=opq
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `string` |

###### Returns

`void`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`set`](url.md#set)

##### sort()

> **sort**(): `void`

Sort all existing name-value pairs in-place by their names. Sorting is done
with a [stable sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability), so relative order between name-value pairs
with the same name is preserved.

This method can be used, in particular, to increase cache hits.

```js
const params = new URLSearchParams('query[]=abc&#x26;type=search&#x26;query[]=123');
params.sort();
console.log(params.toString());
// Prints query%5B%5D=abc&#x26;query%5B%5D=123&#x26;type=search
```

###### Returns

`void`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`sort`](url.md#sort)

##### toString()

> **toString**(): `string`

Returns the search parameters serialized as a string, with characters
percent-encoded where necessary.

###### Returns

`string`

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`toString`](url.md#tostring-2)

##### values()

> **values**(): `IterableIterator`\<`string`\>

Returns an ES6 `Iterator` over the values of each name-value pair.

###### Returns

`IterableIterator`\<`string`\>

###### Inherited from

[`URLSearchParams`](url.md#urlsearchparams-1).[`values`](url.md#values)

## Variables

### URL

> **URL**: *typeof* [`URL`](url.md#url)

`URL` class is a global reference for `require('url').URL`

***

### URLSearchParams

> **URLSearchParams**: *typeof* [`URLSearchParams`](url.md#urlsearchparams-1)

`URLSearchParams` class is a global reference for `require('url').URLSearchParams`
