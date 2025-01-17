[@caido/quickjs-types](../index.md) / llrt/buffer

# llrt/buffer

## Interfaces

### Buffer

#### Extends

- `Uint8Array`

#### Indexable

\[`index`: `number`\]: `number`

#### Methods

##### subarray()

> **subarray**(`start`?: `number`, `end`?: `number`): [`Buffer`](buffer.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

Specifying `end` greater than `buf.length` will return the same result as
that of `end` equal to `buf.length`.

This method is inherited from [`TypedArray.prototype.subarray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).

Modifying the new `Buffer` slice will modify the memory in the original `Buffer`because the allocated memory of the two objects overlap.

```js
import { Buffer } from 'buffer';

// Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
// from the original `Buffer`.

const buf1 = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

const buf2 = buf1.subarray(0, 3);

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: abc

buf1[0] = 33;

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: !bc
```

Specifying negative indexes causes the slice to be generated relative to the
end of `buf` rather than the beginning.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

console.log(buf.subarray(-6, -1).toString());
// Prints: buffe
// (Equivalent to buf.subarray(0, 5).)

console.log(buf.subarray(-6, -2).toString());
// Prints: buff
// (Equivalent to buf.subarray(0, 4).)

console.log(buf.subarray(-5, -2).toString());
// Prints: uff
// (Equivalent to buf.subarray(1, 4).)
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start`? | `number` | Where the new `Buffer` will start. |
| `end`? | `number` | Where the new `Buffer` will end (not inclusive). |

###### Returns

[`Buffer`](buffer.md#buffer)

###### Overrides

`Uint8Array.subarray`

##### toString()

> **toString**(`encoding`?: [`BufferEncoding`](buffer.md#bufferencoding)): `string`

Decodes `buf` to a string according to the specified character encoding in`encoding`.

If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8,
then each invalid byte is replaced with the replacement character `U+FFFD`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz

const buf2 = Buffer.from('tést');

console.log(buf2.toString('hex'));
// Prints: 74c3a97374
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding`? | [`BufferEncoding`](buffer.md#bufferencoding) | The character encoding to use. |

###### Returns

`string`

###### Overrides

`Uint8Array.toString`

***

### BufferConstructor

#### Methods

##### alloc()

> **alloc**(`size`: `number`, `fill`?: `string` \| `number` \| `Uint8Array`, `encoding`?: [`BufferEncoding`](buffer.md#bufferencoding)): [`Buffer`](buffer.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the `Buffer` will be zero-filled.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>
```

If `fill` is specified, the allocated `Buffer` will be initialized by calling `Buffer.alloc(size, fill)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5, 'a');

console.log(buf);
// Prints: <Buffer 61 61 61 61 61>
```

If both `fill` and `encoding` are specified, the allocated `Buffer` will be
initialized by calling `Buffer.aloc(size, fill, encoding)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size` | `number` | The desired length of the new `Buffer`. |
| `fill`? | `string` \| `number` \| `Uint8Array` | A value to pre-fill the new `Buffer` with. |
| `encoding`? | [`BufferEncoding`](buffer.md#bufferencoding) | If `fill` is a string, this is its encoding. |

###### Returns

[`Buffer`](buffer.md#buffer)

##### byteLength()

> **byteLength**(`string`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer), `encoding`?: [`BufferEncoding`](buffer.md#bufferencoding)): `number`

Returns the byte length of a string when encoded using `encoding`.
This is not the same as [`String.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), which does not account
for the encoding that is used to convert the string into bytes.

```js
import { Buffer } from 'buffer';

const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);
// Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
```

When `string` is a
`Buffer`/[`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)/[`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/-
Reference/Global_Objects/TypedArray)/[`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)/[`SharedArrayBuffer`](https://develop-
er.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), the byte length as reported by `.byteLength`is returned.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `string` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | A value to calculate the length of. |
| `encoding`? | [`BufferEncoding`](buffer.md#bufferencoding) | If `string` is a string, this is its encoding. |

###### Returns

`number`

The number of bytes contained within `string`.

##### concat()

> **concat**(`list`: readonly `Uint8Array`[], `totalLength`?: `number`): [`Buffer`](buffer.md#buffer)

Returns a new `Buffer` which is the result of concatenating all the `Buffer` instances in the `list` together.

If the list has no items, or if the `totalLength` is 0, then a new zero-length `Buffer` is returned.

If `totalLength` is not provided, it is calculated from the `Buffer` instances
in `list` by adding their lengths.

If `totalLength` is provided, it is coerced to an unsigned integer. If the
combined length of the `Buffer`s in `list` exceeds `totalLength`, the result is
truncated to `totalLength`.

```js
import { Buffer } from 'buffer';

// Create a single `Buffer` from a list of three `Buffer` instances.

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);
// Prints: 42

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(bufA);
// Prints: <Buffer 00 00 00 00 ...>
console.log(bufA.length);
// Prints: 42
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `list` | readonly `Uint8Array`[] | List of `Buffer` or Uint8Array instances to concatenate. |
| `totalLength`? | `number` | Total length of the `Buffer` instances in `list` when concatenated. |

###### Returns

[`Buffer`](buffer.md#buffer)

##### from()

###### Call Signature

> **from**(`arrayBuffer`: [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`ArrayBuffer` \| `SharedArrayBuffer`\>, `byteOffset`?: `number`, `length`?: `number`): [`Buffer`](buffer.md#buffer)

Allocates a new `Buffer` using an `array` of bytes in the range `0` – `255`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrayBuffer` | [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`ArrayBuffer` \| `SharedArrayBuffer`\> |
| `byteOffset`? | `number` |
| `length`? | `number` |

###### Returns

[`Buffer`](buffer.md#buffer)

###### Call Signature

> **from**(`data`: `Uint8Array` \| readonly `number`[]): [`Buffer`](buffer.md#buffer)

Creates a new Buffer using the passed {data}

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Uint8Array` \| readonly `number`[] | data to create a new Buffer |

###### Returns

[`Buffer`](buffer.md#buffer)

###### Call Signature

> **from**(`data`: [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`string` \| `Uint8Array` \| readonly `number`[]\>): [`Buffer`](buffer.md#buffer)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`string` \| `Uint8Array` \| readonly `number`[]\> |

###### Returns

[`Buffer`](buffer.md#buffer)

###### Call Signature

> **from**(`str`: [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`string`\> \| \{ `[toPrimitive]`: `string`; \}, `encoding`?: [`BufferEncoding`](buffer.md#bufferencoding)): [`Buffer`](buffer.md#buffer)

Creates a new Buffer containing the given JavaScript string {str}.
If provided, the {encoding} parameter identifies the character encoding.
If not provided, {encoding} defaults to 'utf8'.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | [`WithImplicitCoercion`](buffer.md#withimplicitcoerciont)\<`string`\> \| \{ `[toPrimitive]`: `string`; \} |
| `encoding`? | [`BufferEncoding`](buffer.md#bufferencoding) |

###### Returns

[`Buffer`](buffer.md#buffer)

## Type Aliases

### BufferEncoding

> **BufferEncoding**: `"hex"` \| `"base64"` \| `"utf-8"` \| `"utf8"` \| `"unicode-1-1-utf8"` \| `"utf-16le"` \| `"utf16le"` \| `"utf-16"` \| `"utf16"` \| `"utf-16be"` \| `"utf16be"` \| `"windows-1252"` \| `"ansi_x3.4-1968"` \| `"ascii"` \| `"cp1252"` \| `"cp819"` \| `"csisolatin1"` \| `"ibm819"` \| `"iso-8859-1"` \| `"iso-ir-100"` \| `"iso8859-1"` \| `"iso88591"` \| `"iso_8859-1"` \| `"iso_8859-1:1987"` \| `"l1"` \| `"latin1"` \| `"us-ascii"` \| `"x-cp1252"`

***

### WithImplicitCoercion\<T\>

> **WithImplicitCoercion**\<`T`\>: `T` \| \{ `valueOf`: `T`; \}

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Variables

### Buffer

> **Buffer**: [`BufferConstructor`](buffer.md#bufferconstructor)

***

### constants

> `const` **constants**: `object`

#### Type declaration

##### MAX\_LENGTH

> **MAX\_LENGTH**: `number`

##### MAX\_STRING\_LENGTH

> **MAX\_STRING\_LENGTH**: `number`

## Functions

### atob()

> **atob**(`data`: `string`): `string`

Decodes a string of Base64-encoded data into bytes, and encodes those bytes
into a string using UTF-8.

The `data` may be any JavaScript-value that can be coerced into a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | The Base64-encoded input string. |

#### Returns

`string`

#### Legacy

Use `Buffer.from(data, 'base64')` instead.

***

### btoa()

> **btoa**(`data`: `string`): `string`

Decodes a string into bytes using UTF-8, and encodes those bytes
into a string using Base64.

The `data` may be any JavaScript-value that can be coerced into a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | An ASCII (Latin1) string. |

#### Returns

`string`

#### Legacy

Use `buf.toString('base64')` instead.
