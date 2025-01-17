[@caido/quickjs-types](../../../index.md) / [llrt/fs](../index.md) / fs/promises

# fs/promises

## Classes

### FileHandle

#### Constructors

##### new FileHandle()

> **new FileHandle**(): [`FileHandle`](promises.md#filehandle)

###### Returns

[`FileHandle`](promises.md#filehandle)

#### Properties

##### fd

> `readonly` **fd**: `number`

The numeric file descriptor managed by the {FileHandle} object.

#### Methods

##### chmod()

> **chmod**(`mode`: `number`): `Promise`\<`void`\>

Modifies the permissions on the file. See [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mode` | `number` | the file mode bit mask. |

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### chown()

> **chown**(`uid`: `number`, `gid`: `number`): `Promise`\<`void`\>

Changes the ownership of the file. A wrapper for [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### close()

> **close**(): `Promise`\<`void`\>

Closes the file handle after waiting for any pending operation on the handle to
complete.

```js
import { open } from 'fs/promises';

let filehandle;
try {
  filehandle = await open('thefile.txt', 'r');
} finally {
  await filehandle?.close();
}
```

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### datasync()

> **datasync**(): `Promise`\<`void`\>

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details.

Unlike `filehandle.sync` this method does not flush modified metadata.

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### read()

###### Call Signature

> **read**\<`T`\>(`buffer`: `T`, `offset`?: `null` \| `number`, `length`?: `null` \| `number`, `position`?: `null` \| `number`): `Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | A buffer that will be filled with the file data read. |
| `offset`? | `null` \| `number` | The location in the buffer at which to start filling. |
| `length`? | `null` \| `number` | The number of bytes to read. |
| `position`? | `null` \| `number` | The location where to begin reading data from the file. If `null`, data will be read from the current file position, and the position will be updated. If `position` is an integer, the current file position will remain unchanged. |

###### Returns

`Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Fulfills upon success with an object with two properties: bytesRead and buffer

###### Call Signature

> **read**\<`T`\>(`buffer`: `T`, `options`?: [`FileReadOptions`](promises.md#filereadoptionst)\<`T`\>): `Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) | [`Buffer`](../../buffer.md#buffer) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `T` | A buffer that will be filled with the file data read. |
| `options`? | [`FileReadOptions`](promises.md#filereadoptionst)\<`T`\> | - |

###### Returns

`Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Fulfills upon success with an object with two properties: bytesRead and buffer

###### Call Signature

> **read**\<`T`\>(`options`?: [`FileReadOptions`](promises.md#filereadoptionst)\<`T`\>): `Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) | [`Buffer`](../../buffer.md#buffer) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`FileReadOptions`](promises.md#filereadoptionst)\<`T`\> |

###### Returns

`Promise`\<[`FileReadResult`](promises.md#filereadresultt)\<`T`\>\>

Fulfills upon success with an object with two properties: bytesRead and buffer

##### readFile()

###### Call Signature

> **readFile**(`options`?: `null` \| \{ `encoding`: `null`; \}): `Promise`\<[`Buffer`](../../buffer.md#buffer)\>

Asynchronously reads the entire contents of a file.

If `options` is a string, then it specifies the `encoding`.

The `FileHandle` has to support reading.

If one or more `filehandle.read()` calls are made on a file handle and then a `filehandle.readFile()` call is made, the data will be read from the current
position till the end of the file. It doesn't always read from the beginning
of the file.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | `null` \| \{ `encoding`: `null`; \} |

###### Returns

`Promise`\<[`Buffer`](../../buffer.md#buffer)\>

Fulfills upon a successful read with the contents of the file. If no encoding is specified (using `options.encoding`), the data is returned as a {Buffer} object. Otherwise, the
data will be a string.

###### Call Signature

> **readFile**(`options`: [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../../buffer.md#bufferencoding); \}): `Promise`\<`string`\>

Asynchronously reads the entire contents of a file.

If `options` is a string, then it specifies the `encoding`.

The `FileHandle` has to support reading.

If one or more `filehandle.read()` calls are made on a file handle and then a `filehandle.readFile()` call is made, the data will be read from the current
position till the end of the file. It doesn't always read from the beginning
of the file.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../../buffer.md#bufferencoding); \} |

###### Returns

`Promise`\<`string`\>

Fulfills upon a successful read with the contents of the file. If no encoding is specified (using `options.encoding`), the data is returned as a {Buffer} object. Otherwise, the
data will be a string.

##### stat()

> **stat**(): `Promise`\<[`Stats`](../index.md#stats)\>

Get {FileHandle} status.

###### Returns

`Promise`\<[`Stats`](../index.md#stats)\>

Fulfills with the {fs.Stats} object.

##### sync()

> **sync**(): `Promise`\<`void`\>

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail.

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### truncate()

> **truncate**(`len`?: `number`): `Promise`\<`void`\>

Truncates the file.

If the file was larger than `len` bytes, only the first `len` bytes will be
retained in the file.

The following example retains only the first four bytes of the file:

```js
import { open } from 'fs/promises';

let filehandle = null;
try {
  filehandle = await open('temp.txt', 'r+');
  await filehandle.truncate(4);
} finally {
  await filehandle?.close();
}
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes (`'\0'`):

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `len`? | `number` |  |

###### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

##### write()

###### Call Signature

> **write**\<`TBuffer`\>(`buffer`: `TBuffer`, `offset`?: `null` \| `number`, `length`?: `null` \| `number`, `position`?: `null` \| `number`): `Promise`\<\{ `buffer`: `TBuffer`; `bytesWritten`: `number`; \}\>

Write `buffer` to the file.

The promise is fulfilled with an object containing two properties:

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected). For this
scenario, use `filehandle.createWriteStream()`.

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

###### Type Parameters

| Type Parameter |
| ------ |
| `TBuffer` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `TBuffer` | - |
| `offset`? | `null` \| `number` | The start position from within `buffer` where the data to write begins. |
| `length`? | `null` \| `number` | The number of bytes from `buffer` to write. |
| `position`? | `null` \| `number` | The offset from the beginning of the file where the data from `buffer` should be written. If `position` is not a `number`, the data will be written at the current position. See the POSIX pwrite(2) documentation for more detail. |

###### Returns

`Promise`\<\{ `buffer`: `TBuffer`; `bytesWritten`: `number`; \}\>

###### Call Signature

> **write**\<`TBuffer`\>(`buffer`: `TBuffer`, `options`?: `null` \| \{ `length`: `null` \| `number`; `offset`: `null` \| `number`; `position`: `null` \| `number`; \}): `Promise`\<\{ `buffer`: `TBuffer`; `bytesWritten`: `number`; \}\>

Write `buffer` to the file.

The promise is fulfilled with an object containing two properties:

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected). For this
scenario, use `filehandle.createWriteStream()`.

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

###### Type Parameters

| Type Parameter |
| ------ |
| `TBuffer` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `buffer` | `TBuffer` |
| `options`? | `null` \| \{ `length`: `null` \| `number`; `offset`: `null` \| `number`; `position`: `null` \| `number`; \} |

###### Returns

`Promise`\<\{ `buffer`: `TBuffer`; `bytesWritten`: `number`; \}\>

###### Call Signature

> **write**(`data`: `string`, `position`?: `null` \| `number`, `encoding`?: `null` \| [`BufferEncoding`](../../buffer.md#bufferencoding)): `Promise`\<\{ `buffer`: `string`; `bytesWritten`: `number`; \}\>

Write `buffer` to the file.

The promise is fulfilled with an object containing two properties:

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected). For this
scenario, use `filehandle.createWriteStream()`.

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | - |
| `position`? | `null` \| `number` | The offset from the beginning of the file where the data from `buffer` should be written. If `position` is not a `number`, the data will be written at the current position. See the POSIX pwrite(2) documentation for more detail. |
| `encoding`? | `null` \| [`BufferEncoding`](../../buffer.md#bufferencoding) | - |

###### Returns

`Promise`\<\{ `buffer`: `string`; `bytesWritten`: `number`; \}\>

##### writeFile()

> **writeFile**(`data`: `string` \| [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview), `options`?: `null` \| [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: BufferEncoding \| null \| undefined; \}): `Promise`\<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.

If `options` is a string, then it specifies the `encoding`.

The `FileHandle` has to support writing.

It is unsafe to use `filehandle.writeFile()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected).

If one or more `filehandle.write()` calls are made on a file handle and then a`filehandle.writeFile()` call is made, the data will be written from the
current position till the end of the file. It doesn't always write from the beginning of the file.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` \| [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) |
| `options`? | `null` \| [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: BufferEncoding \| null \| undefined; \} |

###### Returns

`Promise`\<`void`\>

## Interfaces

### FileReadOptions\<T\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) | [`Buffer`](../../buffer.md#buffer) |

#### Properties

##### buffer?

> `optional` **buffer**: `T`

###### Default

`Buffer.alloc(16384)`

##### length?

> `optional` **length**: `null` \| `number`

###### Default

`buffer.byteLength - offset`

##### offset?

> `optional` **offset**: `null` \| `number`

###### Default

```ts
0
```

##### position?

> `optional` **position**: `null` \| `number`

***

### FileReadResult\<T\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) |

#### Properties

##### buffer

> **buffer**: `T`

##### bytesRead

> **bytesRead**: `number`

## Type Aliases

### FileSystemFlags

> **FileSystemFlags**: `"a"` \| `"ax"` \| `"a+"` \| `"r"` \| `"r+"` \| `"w"` \| `"wx"` \| `"w+"` \| `"wx+"`

## Variables

### constants

> `const` **constants**: *typeof* [`constants`](../namespaces/constants.md)

## Functions

### access()

> **access**(`path`: `string`, `mode`?: `number`): `Promise`\<`void`\>

Tests a user's permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. `mode` should be either the value `fs.constants.F_OK` or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`, `fs.constants.W_OK`, and `fs.constants.X_OK`
(e.g.`fs.constants.W_OK | fs.constants.R_OK`). Check `File access constants` for
possible values of `mode`.

If the accessibility check is successful, the promise is fulfilled with no
value. If any of the accessibility checks fail, the promise is rejected
with an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object. The following example checks if the file`/etc/passwd` can be read and
written by the current process.

```js
import { access, constants } from 'fs/promises';

try {
  await access('/etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
}
```

Using `fsPromises.access()` to check for the accessibility of a file before
calling `fsPromises.open()` is not recommended. Doing so introduces a race
condition, since other processes may change the file's state between the two
calls. Instead, user code should open/read/write the file directly and handle
the error raised if the file is not accessible.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | - |
| `mode`? | `number` |  |

#### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

***

### mkdir()

> **mkdir**(`path`: `string`, `options`?: [`MakeDirectoryOptions`](../index.md#makedirectoryoptions)): `Promise`\<`string`\>

Asynchronously creates a directory.

The optional `options` argument can be an object with a `mode` property and a `recursive` property indicating whether parent directories should be created.
Calling `fsPromises.mkdir()` when `path` is a directory that exists results in a rejection only when `recursive` is false.

```js
import { mkdir } from 'fs/promises';

try {
  const projectFolder = './test/project/123';
  const createDir = await mkdir(projectFolder, { recursive: true });

  console.log(`created ${createDir}`);
} catch (err) {
  console.error(err.message);
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options`? | [`MakeDirectoryOptions`](../index.md#makedirectoryoptions) |

#### Returns

`Promise`\<`string`\>

Upon success, fulfills with `undefined` if `recursive` is `false`, or the first directory path created if `recursive` is `true`.

***

### mkdtemp()

> **mkdtemp**(`prefix`: `string`): `Promise`\<`string`\>

Creates a unique temporary directory. A unique directory name is generated by
appending six random characters to the end of the provided `prefix`. Due to
platform inconsistencies, avoid trailing `X` characters in `prefix`. Some
platforms, notably the BSDs, can return more than six random characters, and
replace trailing `X` characters in `prefix` with random characters.

```js
import { mkdtemp } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

try {
  await mkdtemp(join(tmpdir(), 'foo-'));
} catch (err) {
  console.error(err);
}
```

The `fsPromises.mkdtemp()` method will append the six randomly selected
characters directly to the `prefix` string. For instance, given a directory `/tmp`, if the intention is to create a temporary directory _within_ `/tmp`, the `prefix` must end with a trailing
platform-specific path separator
(`require('path').sep`).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` |

#### Returns

`Promise`\<`string`\>

Fulfills with a string containing the file system path of the newly created temporary directory.

***

### open()

> **open**(`path`: `string`, `flags`?: [`FileSystemFlags`](promises.md#filesystemflags), `mode`?: `number`): `Promise`\<[`FileHandle`](promises.md#filehandle)\>

Opens a `FileHandle`.

Refer to the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more detail.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | - |
| `flags`? | [`FileSystemFlags`](promises.md#filesystemflags) | See {FileSystemFlags}. |
| `mode`? | `number` | Sets the file mode if the file is created (UNIX). |

#### Returns

`Promise`\<[`FileHandle`](promises.md#filehandle)\>

Fulfills with a {FileHandle} object.

***

### readdir()

#### Call Signature

> **readdir**(`path`: `string`, `options`?: `object`): `Promise`\<`string`[]\>

Reads the contents of a directory.

If `options.withFileTypes` is set to `true`, the returned array will contain `fs.Dirent` objects.

```js
import { readdir } from 'fs/promises';

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options`? | \{ `recursive`: `boolean`; `withFileTypes`: `false`; \} |
| `options.recursive`? | `boolean` |
| `options.withFileTypes`? | `false` |

##### Returns

`Promise`\<`string`[]\>

Fulfills with an array of the names of the files in the directory excluding `'.'` and `'..'`.

#### Call Signature

> **readdir**(`path`: `string`, `options`: `object`): `Promise`\<[`Dirent`](../index.md#dirent)[]\>

Asynchronous readdir(2) - read a directory.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | \{ `recursive`: `boolean`; `withFileTypes`: `true`; \} | If called with `withFileTypes: true` the result data will be an array of Dirent. |
| `options.recursive`? | `boolean` | - |
| `options.withFileTypes` | `true` | - |

##### Returns

`Promise`\<[`Dirent`](../index.md#dirent)[]\>

***

### readFile()

#### Call Signature

> **readFile**(`path`: `string`, `options`?: `null` \| \{ `encoding`: `null`; \}): `Promise`\<[`Buffer`](../../buffer.md#buffer)\>

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a `Buffer` object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory's contents will be
returned.

An example of reading a `package.json` file.

```js
import { readFile } from 'fs/promises';
try {
  const filePath = './package.json';
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | filename or `FileHandle` |
| `options`? | `null` \| \{ `encoding`: `null`; \} | - |

##### Returns

`Promise`\<[`Buffer`](../../buffer.md#buffer)\>

Fulfills with the contents of the file.

#### Call Signature

> **readFile**(`path`: `string`, `options`: [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../../buffer.md#bufferencoding); \}): `Promise`\<`string`\>

Asynchronously reads the entire contents of a file.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | [`BufferEncoding`](../../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../../buffer.md#bufferencoding); \} | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

##### Returns

`Promise`\<`string`\>

***

### rm()

> **rm**(`path`: `string`, `options`?: [`RmOptions`](../index.md#rmoptions)): `Promise`\<`void`\>

Removes files and directories (modeled on the standard POSIX `rm` utility).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options`? | [`RmOptions`](../index.md#rmoptions) |

#### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

***

### rmdir()

> **rmdir**(`path`: `string`, `options`?: [`RmDirOptions`](../index.md#rmdiroptions)): `Promise`\<`void`\>

Removes the directory identified by `path`.

Using `fsPromises.rmdir()` on a file (not a directory) results in the
promise being rejected with an `ENOENT` error on Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use `fsPromises.rm()` with options `{ recursive: true, force: true }`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options`? | [`RmDirOptions`](../index.md#rmdiroptions) |

#### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.

***

### stat()

> **stat**(`path`: `string`): `Promise`\<[`Stats`](../index.md#stats)\>

Asynchronous stat - Get file status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. |

#### Returns

`Promise`\<[`Stats`](../index.md#stats)\>

Fulfills with the {fs.Stats} object for the given `path`.

***

### writeFile()

> **writeFile**(`file`: `string`, `data`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](../../buffer.md#buffer)): `Promise`\<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.

The `encoding` option is ignored if `data` is a buffer.

It is unsafe to use `fsPromises.writeFile()` multiple times on the same file
without waiting for the promise to be settled.

Similarly to `fsPromises.readFile` \- `fsPromises.writeFile` is a convenience
method that performs multiple `write` calls internally to write the buffer
passed to it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `string` | filename or `FileHandle` |
| `data` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](../../globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](../../buffer.md#buffer) | - |

#### Returns

`Promise`\<`void`\>

Fulfills with `undefined` upon success.
