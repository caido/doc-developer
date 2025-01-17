[@caido/quickjs-types](../index.md) / extra/url

# extra/url

## Classes

### URLSearchParams

The URLSearchParams interface defines utility methods to work with the query string of a URL.

#### Implements

- `Iterable`\<\[`string`, `string`\]\>

#### Constructors

##### new URLSearchParams()

> **new URLSearchParams**(`init`?: `string` \| [`URLSearchParams`](url.md#urlsearchparams) \| \{\} \| `Iterable`\<readonly \[`string`, `string`\]\> \| readonly readonly \[`string`, `string`\][]): [`URLSearchParams`](url.md#urlsearchparams)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `init`? | `string` \| [`URLSearchParams`](url.md#urlsearchparams) \| \{\} \| `Iterable`\<readonly \[`string`, `string`\]\> \| readonly readonly \[`string`, `string`\][] |

###### Returns

[`URLSearchParams`](url.md#urlsearchparams)

#### Properties

##### size

> `readonly` **size**: `number`

The total number of parameter entries.

#### Methods

##### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, `string`\]\>

###### Returns

`IterableIterator`\<\[`string`, `string`\]\>

###### Implementation of

`Iterable.[iterator]`

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

##### delete()

> **delete**(`name`: `string`, `value`?: `string`): `void`

If `value` is provided, removes all name-value pairs
where name is `name` and value is `value`.

If `value` is not provided, removes all name-value pairs whose name is `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value`? | `string` |

###### Returns

`void`

##### entries()

> **entries**(): `IterableIterator`\<\[`string`, `string`\]\>

Returns an ES6 `Iterator` over each of the name-value pairs in the query.
Each item of the iterator is a JavaScript `Array`. The first item of the `Array` is the `name`, the second item of the `Array` is the `value`.

Alias for `urlSearchParams[@@iterator]()`.

###### Returns

`IterableIterator`\<\[`string`, `string`\]\>

##### forEach()

> **forEach**(`fn`: (`value`: `string`, `name`: `string`) => `void`): `void`

Iterates over each name-value pair in the query and invokes the given function.

```js
const myURL = new URL('https://example.org/?a=b&#x26;c=d');
myURL.searchParams.forEach((value, name) => {
  console.log(name, value);
});
// Prints:
//   a b
//   c d
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`value`: `string`, `name`: `string`) => `void` | Invoked for each name-value pair in the query |

###### Returns

`void`

##### get()

> **get**(`name`: `string`): `null` \| `string`

Returns the value of the first name-value pair whose name is `name`. If there
are no such pairs, `null` is returned.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`null` \| `string`

or `null` if there is no name-value pair with the given `name`.

##### getAll()

> **getAll**(`name`: `string`): `string`[]

Returns the values of all name-value pairs whose name is `name`. If there are
no such pairs, an empty array is returned.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`string`[]

##### has()

> **has**(`name`: `string`, `value`?: `string`): `boolean`

Checks if the `URLSearchParams` object contains key-value pair(s) based on `name` and an optional `value` argument.

If `value` is provided, returns `true` when name-value pair with
same `name` and `value` exists.

If `value` is not provided, returns `true` if there is at least one name-value
pair whose name is `name`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value`? | `string` |

###### Returns

`boolean`

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

##### toString()

> **toString**(): `string`

Returns the search parameters serialized as a string, with characters
percent-encoded where necessary.

###### Returns

`string`

##### values()

> **values**(): `IterableIterator`\<`string`\>

Returns an ES6 `Iterator` over the values of each name-value pair.

###### Returns

`IterableIterator`\<`string`\>
