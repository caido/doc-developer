[@caido/quickjs-types](../index.md) / llrt/crypto

# llrt/crypto

## Classes

### Hash

The `Hash` class is a utility for creating hash digests of data.

Using the `hash.update()` and `hash.digest()` methods to produce the
computed hash.

The [createHash](#createhash) method is used to create `Hash` instances.
`Hash`objects are not to be created directly using the `new` keyword.

Example: Using the `hash.update()` and `hash.digest()` methods:

```js
import { createHash } from 'crypto';

const hash = createHash('sha256');

hash.update('some data to hash');
console.log(hash.digest('hex'));
// Prints:
//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
```

#### Methods

##### digest()

###### Call Signature

> **digest**(): [`Buffer`](buffer.md#buffer)

Calculates the digest of all of the data passed to be hashed (using the `hash.update()` method).
If `encoding` is provided a string will be returned; otherwise
a `Buffer` is returned.

The `Hash` object can not be used again after `hash.digest()` method has been
called. Multiple calls will cause an error to be thrown.

###### Returns

[`Buffer`](buffer.md#buffer)

###### Call Signature

> **digest**(`encoding`: [`BinaryToTextEncoding`](#binarytotextencoding)): `string`

Calculates the digest of all of the data passed to be hashed (using the `hash.update()` method).
If `encoding` is provided a string will be returned; otherwise
a `Buffer` is returned.

The `Hash` object can not be used again after `hash.digest()` method has been
called. Multiple calls will cause an error to be thrown.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding` | [`BinaryToTextEncoding`](#binarytotextencoding) | The `encoding` of the return value. |

###### Returns

`string`

##### update()

###### Call Signature

> **update**(`data`: [`BinaryLike`](#binarylike)): [`Hash`](#hash)

Updates the hash content with the given `data`, the encoding of which
is given in `inputEncoding`.
If `encoding` is not provided, and the `data` is a string, an
encoding of `'utf8'` is enforced. If `data` is a `Buffer`, `TypedArray`, or`DataView`,
then `inputEncoding` is ignored.

This can be called many times with new data as it is streamed.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`BinaryLike`](#binarylike) |

###### Returns

[`Hash`](#hash)

###### Call Signature

> **update**(`data`: `string`, `inputEncoding`: [`Encoding`](#encoding)): [`Hash`](#hash)

Updates the hash content with the given `data`, the encoding of which
is given in `inputEncoding`.
If `encoding` is not provided, and the `data` is a string, an
encoding of `'utf8'` is enforced. If `data` is a `Buffer`, `TypedArray`, or`DataView`,
then `inputEncoding` is ignored.

This can be called many times with new data as it is streamed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | - |
| `inputEncoding` | [`Encoding`](#encoding) | The `encoding` of the `data` string. |

###### Returns

[`Hash`](#hash)

***

### Hmac

The `Hmac` class is a utility for creating cryptographic HMAC digests.

Using the `hmac.update()` and `hmac.digest()` methods to produce the
computed HMAC digest.

The [createHmac](#createhmac) method is used to create `Hmac` instances.
`Hmac`objects are not to be created directly using the `new` keyword.

Example: Using the `hmac.update()` and `hmac.digest()` methods:

```js
import { createHmac } from 'crypto';

const hmac = createHmac('sha256', 'a secret');

hmac.update('some data to hash');
console.log(hmac.digest('hex'));
// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
```

#### Methods

##### digest()

###### Call Signature

> **digest**(): [`Buffer`](buffer.md#buffer)

Calculates the HMAC digest of all of the data passed using `hmac.update()`.
If `encoding` is
provided a string is returned; otherwise a `Buffer` is returned;

The `Hmac` object can not be used again after `hmac.digest()` has been
called. Multiple calls to `hmac.digest()` will result in an error being thrown.

###### Returns

[`Buffer`](buffer.md#buffer)

###### Call Signature

> **digest**(`encoding`: [`BinaryToTextEncoding`](#binarytotextencoding)): `string`

Calculates the HMAC digest of all of the data passed using `hmac.update()`.
If `encoding` is
provided a string is returned; otherwise a `Buffer` is returned;

The `Hmac` object can not be used again after `hmac.digest()` has been
called. Multiple calls to `hmac.digest()` will result in an error being thrown.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding` | [`BinaryToTextEncoding`](#binarytotextencoding) | The `encoding` of the return value. |

###### Returns

`string`

##### update()

###### Call Signature

> **update**(`data`: [`BinaryLike`](#binarylike)): [`Hmac`](#hmac)

Updates the `Hmac` content with the given `data`, the encoding of which
is given in `inputEncoding`.
If `encoding` is not provided, and the `data` is a string, an
encoding of `'utf8'` is enforced. If `data` is a `Buffer`, `TypedArray`, or`DataView`,
then `inputEncoding` is ignored.

This can be called many times with new data as it is streamed.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`BinaryLike`](#binarylike) |

###### Returns

[`Hmac`](#hmac)

###### Call Signature

> **update**(`data`: `string`, `inputEncoding`: [`Encoding`](#encoding)): [`Hmac`](#hmac)

Updates the `Hmac` content with the given `data`, the encoding of which
is given in `inputEncoding`.
If `encoding` is not provided, and the `data` is a string, an
encoding of `'utf8'` is enforced. If `data` is a `Buffer`, `TypedArray`, or`DataView`,
then `inputEncoding` is ignored.

This can be called many times with new data as it is streamed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | - |
| `inputEncoding` | [`Encoding`](#encoding) | The `encoding` of the `data` string. |

###### Returns

[`Hmac`](#hmac)

## Type Aliases

### BinaryLike

> **BinaryLike** = `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview)

***

### BinaryToTextEncoding

> **BinaryToTextEncoding** = `"base64"` \| `"hex"`

***

### CharacterEncoding

> **CharacterEncoding** = `"utf8"` \| `"utf-8"` \| `"utf16le"` \| `"utf-16le"` \| `"latin1"`

***

### Encoding

> **Encoding** = [`BinaryToTextEncoding`](#binarytotextencoding) \| [`CharacterEncoding`](#characterencoding) \| [`LegacyCharacterEncoding`](#legacycharacterencoding)

***

### LegacyCharacterEncoding

> **LegacyCharacterEncoding** = `"ascii"`

***

### UUID

> **UUID** = `` `${string}-${string}-${string}-${string}-${string}` ``

## Functions

### createHash()

> **createHash**(`algorithm`: `string`): [`Hash`](#hash)

Creates and returns a `Hash` object that can be used to generate hash digests
using the given `algorithm`.

The `algorithm` is supported by `'sha1'`, `'sha256'`,`'sha384'` and `'sha512'`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `algorithm` | `string` |

#### Returns

[`Hash`](#hash)

***

### createHmac()

> **createHmac**(`algorithm`: `string`, `key`: [`BinaryLike`](#binarylike)): [`Hmac`](#hmac)

Creates and returns an `Hmac` object that uses the given `algorithm` and `key`.

The `algorithm` is supported by `'sha1'`, `'sha256'`,`'sha384'` and `'sha512'`.

The `key` is the HMAC key used to generate the cryptographic HMAC hash.
If it is a string, please consider `caveats when using strings as inputs to cryptographic APIs`.
If it was obtained from a cryptographically secure source of entropy, such as [randomBytes](#randombytes)
or generateKey, its length should not exceed the block size of `algorithm`
(e.g., 512 bits for SHA-256).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `algorithm` | `string` |
| `key` | [`BinaryLike`](#binarylike) |

#### Returns

[`Hmac`](#hmac)

***

### getRandomValues()

> **getRandomValues**\<`T`\>(`typedArray`: `T`): `T`

A convenient alias for webcrypto.getRandomValues. This
implementation is not compliant with the Web Crypto spec, to write
web-compatible code use webcrypto.getRandomValues instead.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `typedArray` | `T` |

#### Returns

`T`

Returns `typedArray`.

***

### randomBytes()

> **randomBytes**(`size`: `number`): [`Buffer`](buffer.md#buffer)

Generates cryptographically strong pseudorandom data. The `size` argument
is a number indicating the number of bytes to generate.

the random bytes are generated synchronously and returned as a `Buffer`.
An error will be thrown if there is a problem generating the bytes.

```js
// Synchronous
import { randomBytes } from 'crypto';

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
```

The `crypto.randomBytes()` method will not complete until there is
sufficient entropy available.
This should normally never take longer than a few milliseconds. The only time
when generating the random bytes may conceivably block for a longer period of
time is right after boot, when the whole system is still low on entropy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size` | `number` | The number of bytes to generate. The `size` must not be larger than `2**31 - 1`. |

#### Returns

[`Buffer`](buffer.md#buffer)

***

### randomFill()

#### Call Signature

> **randomFill**\<`T`\>(`buffer`: `T`, `callback`: (`err`: `Error` \| `null`, `buf`: `T`) => `void`): `void`

This function is similar to [randomBytes](#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as `buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `callback` | (`err`: `Error` \| `null`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

##### Returns

`void`

#### Call Signature

> **randomFill**\<`T`\>(`buffer`: `T`, `offset`: `number`, `callback`: (`err`: `Error` \| `null`, `buf`: `T`) => `void`): `void`

This function is similar to [randomBytes](#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as `buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset` | `number` |  |
| `callback` | (`err`: `Error` \| `null`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

##### Returns

`void`

#### Call Signature

> **randomFill**\<`T`\>(`buffer`: `T`, `offset`: `number`, `size`: `number`, `callback`: (`err`: `Error` \| `null`, `buf`: `T`) => `void`): `void`

This function is similar to [randomBytes](#randombytes) but requires the first
argument to be a `Buffer` that will be filled. It also
requires that a callback is passed in.

If the `callback` function is not provided, an error will be thrown.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
```

Any `ArrayBuffer`, `TypedArray`, or `DataView` instance may be passed as `buffer`.

While this includes instances of `Float32Array` and `Float64Array`, this
function should not be used to generate random floating-point numbers. The
result may contain `+Infinity`, `-Infinity`, and `NaN`, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.

```js
import { Buffer } from 'buffer';
import { randomFill } from 'crypto';

const a = new Uint32Array(10);
randomFill(a, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) => {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
```

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset` | `number` |  |
| `size` | `number` |  |
| `callback` | (`err`: `Error` \| `null`, `buf`: `T`) => `void` | `function(err, buf) {}`. |

##### Returns

`void`

***

### randomFillSync()

> **randomFillSync**\<`T`\>(`buffer`: `T`, `offset?`: `number`, `size?`: `number`): `T`

Synchronous version of [randomFill](#randomfill).

```js
import { Buffer } from 'buffer';
import { randomFillSync } from 'crypto';

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
```

Any `ArrayBuffer`, `TypedArray` or `DataView` instance may be passed as`buffer`.

```js
import { Buffer } from 'buffer';
import { randomFillSync } from 'crypto';

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | Must be supplied. The size of the provided `buffer` must not be larger than `2**31 - 1`. |
| `offset?` | `number` |  |
| `size?` | `number` |  |

#### Returns

`T`

The object passed as `buffer` argument.

***

### randomInt()

#### Call Signature

> **randomInt**(`max`: `number`): `number`

Return a random integer `n` such that `min <= n < max`.  This
implementation avoids [modulo bias](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias).

The range (`max - min`) must be less than 2**48. `min` and `max` must
be [safe integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
// Synchronous
import { randomInt } from 'crypto';

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
```

```js
// With `min` argument
import { randomInt } from 'crypto';

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `max` | `number` | End of random range (exclusive). |

##### Returns

`number`

#### Call Signature

> **randomInt**(`min`: `number`, `max`: `number`): `number`

Return a random integer `n` such that `min <= n < max`.  This
implementation avoids [modulo bias](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias).

The range (`max - min`) must be less than 2**48. `min` and `max` must
be [safe integers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
// Synchronous
import { randomInt } from 'crypto';

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
```

```js
// With `min` argument
import { randomInt } from 'crypto';

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | Start of random range (inclusive). |
| `max` | `number` | End of random range (exclusive). |

##### Returns

`number`

***

### randomUUID()

> **randomUUID**(): `` `${string}-${string}-${string}-${string}-${string}` ``

Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID.
The UUID is generated using a cryptographic pseudorandom number generator.

#### Returns

`` `${string}-${string}-${string}-${string}-${string}` ``
