[@caido/quickjs-types](../index.md) / llrt/buffer

# llrt/buffer

## Interfaces

### Buffer

#### Extends

- `Uint8Array`

#### Indexable

\[`index`: `number`\]: `number`

#### Methods

##### copy()

> **copy**(`target`: `Uint8Array`, `targetStart?`: `number`, `sourceStart?`: `number`, `sourceEnd?`: `number`): `number`

Copies data from a region of `buf` to a region in `target`, even if the `target`memory region overlaps with `buf`.

[`TypedArray.prototype.set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set) performs the same operation, and is available
for all TypedArrays, including `Buffer`s, although it takes
different function arguments.

```js
import { Buffer } from 'buffer';

// Create two `Buffer` instances.
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

// Copy `buf1` bytes 16 through 19 into `buf2` starting at byte 8 of `buf2`.
buf1.copy(buf2, 8, 16, 20);
// This is equivalent to:
// buf2.set(buf1.subarray(16, 20), 8);

console.log(buf2.toString('ascii', 0, 25));
// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
```

```js
import { Buffer } from 'buffer';

// Create a `Buffer` and copy data from one region to an overlapping region
// within the same `Buffer`.

const buf = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf[i] = i + 97;
}

buf.copy(buf, 0, 4, 10);

console.log(buf.toString());
// Prints: efghijghijklmnopqrstuvwxyz
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `Uint8Array` | A `Buffer` or Uint8Array to copy into. |
| `targetStart?` | `number` | The offset within `target` at which to begin writing. |
| `sourceStart?` | `number` | The offset within `buf` from which to begin copying. |
| `sourceEnd?` | `number` | The offset within `buf` at which to stop copying (not inclusive). |

###### Returns

`number`

The number of bytes copied.

##### readBigInt64BE()

> **readBigInt64BE**(`offset?`: `number`): `bigint`

Reads a signed, big-endian 64-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`bigint`

##### readBigInt64LE()

> **readBigInt64LE**(`offset?`: `number`): `bigint`

Reads a signed, little-endian 64-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`bigint`

##### readBigUint64BE()

> **readBigUint64BE**(`offset?`: `number`): `bigint`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`bigint`

###### Alias

Buffer.readBigUInt64BE

##### readBigUInt64BE()

> **readBigUInt64BE**(`offset?`: `number`): `bigint`

Reads an unsigned, big-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64BE(0));
// Prints: 4294967295n
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`bigint`

##### readBigUint64LE()

> **readBigUint64LE**(`offset?`: `number`): `bigint`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`bigint`

###### Alias

Buffer.readBigUInt64LE

##### readBigUInt64LE()

> **readBigUInt64LE**(`offset?`: `number`): `bigint`

Reads an unsigned, little-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64LE(0));
// Prints: 18446744069414584320n
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`bigint`

##### readDoubleBE()

> **readDoubleBE**(`offset?`: `number`): `number`

Reads a 64-bit, big-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleBE(0));
// Prints: 8.20788039913184e-304
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

##### readDoubleLE()

> **readDoubleLE**(`offset?`: `number`): `number`

Reads a 64-bit, little-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleLE(0));
// Prints: 5.447603722011605e-270
console.log(buf.readDoubleLE(1));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

##### readFloatBE()

> **readFloatBE**(`offset?`: `number`): `number`

Reads a 32-bit, big-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatBE(0));
// Prints: 2.387939260590663e-38
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

##### readFloatLE()

> **readFloatLE**(`offset?`: `number`): `number`

Reads a 32-bit, little-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatLE(0));
// Prints: 1.539989614439558e-36
console.log(buf.readFloatLE(1));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

##### readInt16BE()

> **readInt16BE**(`offset?`: `number`): `number`

Reads a signed, big-endian 16-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16BE(0));
// Prints: 5
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

##### readInt16LE()

> **readInt16LE**(`offset?`: `number`): `number`

Reads a signed, little-endian 16-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16LE(0));
// Prints: 1280
console.log(buf.readInt16LE(1));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

##### readInt32BE()

> **readInt32BE**(`offset?`: `number`): `number`

Reads a signed, big-endian 32-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32BE(0));
// Prints: 5
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

##### readInt32LE()

> **readInt32LE**(`offset?`: `number`): `number`

Reads a signed, little-endian 32-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32LE(0));
// Prints: 83886080
console.log(buf.readInt32LE(1));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

##### readInt8()

> **readInt8**(`offset?`: `number`): `number`

Reads a signed 8-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([-1, 5]);

console.log(buf.readInt8(0));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
console.log(buf.readInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

###### Returns

`number`

##### readUint16BE()

> **readUint16BE**(`offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.readUInt16BE

##### readUInt16BE()

> **readUInt16BE**(`offset?`: `number`): `number`

Reads an unsigned, big-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16BE(0).toString(16));
// Prints: 1234
console.log(buf.readUInt16BE(1).toString(16));
// Prints: 3456
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

##### readUint16LE()

> **readUint16LE**(`offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.readUInt16LE

##### readUInt16LE()

> **readUInt16LE**(`offset?`: `number`): `number`

Reads an unsigned, little-endian 16-bit integer from `buf` at the specified `offset`.

This function is also available under the `readUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16LE(0).toString(16));
// Prints: 3412
console.log(buf.readUInt16LE(1).toString(16));
// Prints: 5634
console.log(buf.readUInt16LE(2).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

##### readUint32LE()

> **readUint32LE**(`offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.readUInt32LE

##### readUInt32LE()

> **readUInt32LE**(`offset?`: `number`): `number`

Reads an unsigned, little-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32LE(0).toString(16));
// Prints: 78563412
console.log(buf.readUInt32LE(1).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

##### readUint8()

> **readUint8**(`offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.readUInt8

##### readUInt8()

> **readUInt8**(`offset?`: `number`): `number`

Reads an unsigned 8-bit integer from `buf` at the specified `offset`.

This function is also available under the `readUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, -2]);

console.log(buf.readUInt8(0));
// Prints: 1
console.log(buf.readUInt8(1));
// Prints: 254
console.log(buf.readUInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

###### Returns

`number`

##### subarray()

> **subarray**(`start?`: `number`, `end?`: `number`): [`Buffer`](#buffer)

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
| `start?` | `number` | Where the new `Buffer` will start. |
| `end?` | `number` | Where the new `Buffer` will end (not inclusive). |

###### Returns

[`Buffer`](#buffer)

###### Overrides

`Uint8Array.subarray`

##### toString()

> **toString**(`encoding?`: [`BufferEncoding`](#bufferencoding), `start?`: `number`, `end?`: `number`): `string`

Decodes `buf` to a string according to the specified character encoding in`encoding`. `start` and `end` may be passed to decode only a subset of `buf`.

If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8,
then each invalid byte is replaced with the replacement character `U+FFFD`.

```js
import { Buffer } from 'node:buffer';

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('utf8', 0, 5));
// Prints: abcde

const buf2 = Buffer.from('tést');

console.log(buf2.toString('hex'));
// Prints: 74c3a97374
console.log(buf2.toString('utf8', 0, 3));
// Prints: té
console.log(buf2.toString(undefined, 0, 3));
// Prints: té
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding?` | [`BufferEncoding`](#bufferencoding) | The character encoding to use. |
| `start?` | `number` | The byte offset to start decoding at. |
| `end?` | `number` | The byte offset to stop decoding at (not inclusive). |

###### Returns

`string`

###### Overrides

`Uint8Array.toString`

##### write()

###### Call Signature

> **write**(`string`: `string`, `encoding?`: [`BufferEncoding`](#bufferencoding)): `number`

Writes `string` to `buf` at `offset` according to the character encoding in`encoding`. The `length` parameter is the number of bytes to write. If `buf` did
not contain enough space to fit the entire string, only part of `string` will be
written. However, partially encoded characters will not be written.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

const length = buffer.write('abcd', 8);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// Prints: 2 bytes : ab
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `string` | `string` | String to write to `buf`. |
| `encoding?` | [`BufferEncoding`](#bufferencoding) | The character encoding of `string`. |

###### Returns

`number`

Number of bytes written.

###### Call Signature

> **write**(`string`: `string`, `offset`: `number`, `encoding?`: [`BufferEncoding`](#bufferencoding)): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `string` | `string` |
| `offset` | `number` |
| `encoding?` | [`BufferEncoding`](#bufferencoding) |

###### Returns

`number`

###### Call Signature

> **write**(`string`: `string`, `offset`: `number`, `length`: `number`, `encoding?`: [`BufferEncoding`](#bufferencoding)): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `string` | `string` |
| `offset` | `number` |
| `length` | `number` |
| `encoding?` | [`BufferEncoding`](#bufferencoding) |

###### Returns

`number`

##### writeBigInt64BE()

> **writeBigInt64BE**(`value`: `bigint`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64BE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04 05 06 07 08>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeBigInt64LE()

> **writeBigInt64LE**(`value`: `bigint`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64LE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05 04 03 02 01>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeBigUint64BE()

> **writeBigUint64BE**(`value`: `bigint`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `bigint` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeBigUInt64BE

##### writeBigUint64LE()

> **writeBigUint64LE**(`value`: `bigint`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `bigint` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeBigUInt64LE

##### writeDoubleBE()

> **writeDoubleBE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value` must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleBE(123.456, 0);

console.log(buf);
// Prints: <Buffer 40 5e dd 2f 1a 9f be 77>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeDoubleLE()

> **writeDoubleLE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value` must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleLE(123.456, 0);

console.log(buf);
// Prints: <Buffer 77 be 9f 1a 2f dd 5e 40>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeFloatBE()

> **writeFloatBE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatBE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer 4f 4a fe bb>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeFloatLE()

> **writeFloatLE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatLE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer bb fe 4a 4f>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeInt16BE()

> **writeInt16BE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.  The `value` must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16BE(0x0102, 0);

console.log(buf);
// Prints: <Buffer 01 02>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeInt16LE()

> **writeInt16LE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.  The `value` must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16LE(0x0304, 0);

console.log(buf);
// Prints: <Buffer 04 03>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeInt32BE()

> **writeInt32BE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value` must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32BE(0x01020304, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | - |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeInt32LE()

> **writeInt32LE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value` must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32LE(0x05060708, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeInt8()

> **writeInt8**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a valid
signed 8-bit integer. Behavior is undefined when `value` is anything other than
a signed 8-bit integer.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt8(2, 0);
buf.writeInt8(-2, 1);

console.log(buf);
// Prints: <Buffer 02 fe>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeUint16BE()

> **writeUint16BE**(`value`: `number`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeUInt16BE

##### writeUInt16BE()

> **writeUInt16BE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value` must be a valid unsigned 16-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 16-bit integer.

This function is also available under the `writeUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16BE(0xdead, 0);
buf.writeUInt16BE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer de ad be ef>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeUint16LE()

> **writeUint16LE**(`value`: `number`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeUInt16LE

##### writeUInt16LE()

> **writeUInt16LE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value` must be a valid unsigned 16-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 16-bit integer.

This function is also available under the `writeUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16LE(0xdead, 0);
buf.writeUInt16LE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer ad de ef be>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeUint32BE()

> **writeUint32BE**(`value`: `number`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeUInt32BE

##### writeUInt32BE()

> **writeUInt32BE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value` must be a valid unsigned 32-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 32-bit integer.

This function is also available under the `writeUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32BE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer fe ed fa ce>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeUint32LE()

> **writeUint32LE**(`value`: `number`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeUInt32LE

##### writeUInt32LE()

> **writeUInt32LE**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value` must be a valid unsigned 32-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 32-bit integer.

This function is also available under the `writeUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32LE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer ce fa ed fe>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

###### Returns

`number`

`offset` plus the number of bytes written.

##### writeUint8()

> **writeUint8**(`value`: `number`, `offset?`: `number`): `number`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `offset?` | `number` |

###### Returns

`number`

###### Alias

Buffer.writeUInt8

##### writeUInt8()

> **writeUInt8**(`value`: `number`, `offset?`: `number`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a
valid unsigned 8-bit integer. Behavior is undefined when `value` is anything
other than an unsigned 8-bit integer.

This function is also available under the `writeUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt8(0x3, 0);
buf.writeUInt8(0x4, 1);
buf.writeUInt8(0x23, 2);
buf.writeUInt8(0x42, 3);

console.log(buf);
// Prints: <Buffer 03 04 23 42>
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

###### Returns

`number`

`offset` plus the number of bytes written.

***

### BufferConstructor

#### Methods

##### alloc()

> **alloc**(`size`: `number`, `fill?`: `string` \| `number` \| `Uint8Array`, `encoding?`: [`BufferEncoding`](#bufferencoding)): [`Buffer`](#buffer)

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
| `fill?` | `string` \| `number` \| `Uint8Array` | A value to pre-fill the new `Buffer` with. |
| `encoding?` | [`BufferEncoding`](#bufferencoding) | If `fill` is a string, this is its encoding. |

###### Returns

[`Buffer`](#buffer)

##### allocUnsafe()

> **allocUnsafe**(`size`: `number`): [`Buffer`](#buffer)

Allocates a new `Buffer` of `size` bytes.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `Buffer.alloc()` instead to initialize`Buffer` instances with zeroes.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(10);

console.log(buf);
// Prints (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf.fill(0);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
```

A `TypeError` will be thrown if `size` is not a number.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size` | `number` | The desired length of the new `Buffer`. |

###### Returns

[`Buffer`](#buffer)

##### allocUnsafeSlow()

> **allocUnsafeSlow**(`size`: `number`): [`Buffer`](#buffer)

Allocates a new `Buffer` of `size` bytes.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `buf.fill(0)` to initialize
such `Buffer` instances with zeroes.

```js
import { Buffer } from 'buffer';

// Need to keep around a few small chunks of memory.
const store = [];

socket.on('readable', () => {
  let data;
  while (null !== (data = readable.read())) {
    // Allocate for retained data.
    const sb = Buffer.allocUnsafeSlow(10);

    // Copy the data into the new allocation.
    data.copy(sb, 0, 0, 10);

    store.push(sb);
  }
});
```

A `TypeError` will be thrown if `size` is not a number.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size` | `number` | The desired length of the new `Buffer`. |

###### Returns

[`Buffer`](#buffer)

##### byteLength()

> **byteLength**(`string`: `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](#buffer) \| `ArrayBuffer` \| `SharedArrayBuffer`, `encoding?`: [`BufferEncoding`](#bufferencoding)): `number`

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
| `string` | `string` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](#buffer) \| `ArrayBuffer` \| `SharedArrayBuffer` | A value to calculate the length of. |
| `encoding?` | [`BufferEncoding`](#bufferencoding) | If `string` is a string, this is its encoding. |

###### Returns

`number`

The number of bytes contained within `string`.

##### concat()

> **concat**(`list`: readonly `Uint8Array`[], `totalLength?`: `number`): [`Buffer`](#buffer)

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
| `totalLength?` | `number` | Total length of the `Buffer` instances in `list` when concatenated. |

###### Returns

[`Buffer`](#buffer)

##### from()

###### Call Signature

> **from**(`arrayBuffer`: [`WithImplicitCoercion`](#withimplicitcoercion)\<`ArrayBuffer` \| `SharedArrayBuffer`\>, `byteOffset?`: `number`, `length?`: `number`): [`Buffer`](#buffer)

Allocates a new `Buffer` using an `array` of bytes in the range `0` – `255`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrayBuffer` | [`WithImplicitCoercion`](#withimplicitcoercion)\<`ArrayBuffer` \| `SharedArrayBuffer`\> |
| `byteOffset?` | `number` |
| `length?` | `number` |

###### Returns

[`Buffer`](#buffer)

###### Call Signature

> **from**(`data`: `Uint8Array` \| readonly `number`[]): [`Buffer`](#buffer)

Creates a new Buffer using the passed {data}

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Uint8Array` \| readonly `number`[] | data to create a new Buffer |

###### Returns

[`Buffer`](#buffer)

###### Call Signature

> **from**(`data`: [`WithImplicitCoercion`](#withimplicitcoercion)\<`string` \| `Uint8Array` \| readonly `number`[]\>): [`Buffer`](#buffer)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`WithImplicitCoercion`](#withimplicitcoercion)\<`string` \| `Uint8Array` \| readonly `number`[]\> |

###### Returns

[`Buffer`](#buffer)

###### Call Signature

> **from**(`str`: [`WithImplicitCoercion`](#withimplicitcoercion)\<`string`\> \| \{ `[toPrimitive]`: `string`; \}, `encoding?`: [`BufferEncoding`](#bufferencoding)): [`Buffer`](#buffer)

Creates a new Buffer containing the given JavaScript string {str}.
If provided, the {encoding} parameter identifies the character encoding.
If not provided, {encoding} defaults to 'utf8'.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | [`WithImplicitCoercion`](#withimplicitcoercion)\<`string`\> \| \{ `[toPrimitive]`: `string`; \} |
| `encoding?` | [`BufferEncoding`](#bufferencoding) |

###### Returns

[`Buffer`](#buffer)

##### isBuffer()

> **isBuffer**(`obj`: `any`): `obj is Buffer`

Returns `true` if `obj` is a `Buffer`, `false` otherwise.

```js
import { Buffer } from 'buffer';

Buffer.isBuffer(Buffer.alloc(10)); // true
Buffer.isBuffer(Buffer.from('foo')); // true
Buffer.isBuffer('a string'); // false
Buffer.isBuffer([]); // false
Buffer.isBuffer(new Uint8Array(1024)); // false
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `any` |

###### Returns

`obj is Buffer`

##### isEncoding()

> **isEncoding**(`encoding`: `string`): `encoding is BufferEncoding`

Returns `true` if `encoding` is the name of a supported character encoding,
or `false` otherwise.

```js
import { Buffer } from 'buffer';

console.log(Buffer.isEncoding('utf8'));
// Prints: true

console.log(Buffer.isEncoding('hex'));
// Prints: true

console.log(Buffer.isEncoding('utf/8'));
// Prints: false

console.log(Buffer.isEncoding(''));
// Prints: false
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `encoding` | `string` | A character encoding name to check. |

###### Returns

`encoding is BufferEncoding`

## Type Aliases

### BufferEncoding

> **BufferEncoding** = `"hex"` \| `"base64"` \| `"utf-8"` \| `"utf8"` \| `"unicode-1-1-utf8"` \| `"ucs2"` \| `"ucs-2"` \| `"utf-16le"` \| `"utf16le"` \| `"utf-16"` \| `"utf16"` \| `"utf-16be"` \| `"utf16be"` \| `"windows-1252"` \| `"ansi_x3.4-1968"` \| `"ascii"` \| `"cp1252"` \| `"cp819"` \| `"csisolatin1"` \| `"ibm819"` \| `"iso-8859-1"` \| `"iso-ir-100"` \| `"iso8859-1"` \| `"iso88591"` \| `"iso_8859-1"` \| `"iso_8859-1:1987"` \| `"l1"` \| `"latin1"` \| `"us-ascii"` \| `"x-cp1252"`

***

### WithImplicitCoercion

> **WithImplicitCoercion**\<`T`\> = `T` \| \{ `valueOf`: `T`; \}

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Variables

### Buffer

> **Buffer**: [`BufferConstructor`](#bufferconstructor)

***

### constants

> `const` **constants**: `object`

#### Type Declaration

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
