[@caido/quickjs-types](../../index.md) / llrt/fs

# llrt/fs

## Modules

| Module | Description |
| ------ | ------ |
| [fs/promises](fs/promises.md) | - |

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [constants](namespaces/constants.md) | - |

## Classes

### Dirent

A representation of a directory entry, which can be a file or a subdirectory
within the directory. A directory entry is a combination of the file name and file type pairs.

Additionally, when [promises.readdir](fs/promises.md#readdir) or [readdirSync](#readdirsync) is called with
the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings.

#### Constructors

##### Constructor

> **new Dirent**(): [`Dirent`](#dirent)

###### Returns

[`Dirent`](#dirent)

#### Properties

##### name

> **name**: `string`

The file name that this `fs.Dirent` object refers to.

##### parentPath

> **parentPath**: `string`

The base path that this `fs.Dirent` object refers to.

#### Methods

##### isBlockDevice()

> **isBlockDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a block device.

###### Returns

`boolean`

##### isCharacterDevice()

> **isCharacterDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a character device.

###### Returns

`boolean`

##### isDirectory()

> **isDirectory**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a file system
directory.

###### Returns

`boolean`

##### isFIFO()

> **isFIFO**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a first-in-first-out
(FIFO) pipe.

###### Returns

`boolean`

##### isFile()

> **isFile**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a regular file.

###### Returns

`boolean`

##### isSocket()

> **isSocket**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a socket.

###### Returns

`boolean`

##### isSymbolicLink()

> **isSymbolicLink**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a symbolic link.

###### Returns

`boolean`

***

### Stats

A `fs.Stats` object provides information about a file.

`Stat` objects are not to be created directly using the `new` keyword.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

#### Extends

- [`StatsBase`](#statsbase)\<`number`\>

#### Constructors

##### Constructor

> **new Stats**(): [`Stats`](#stats)

###### Returns

[`Stats`](#stats)

###### Inherited from

`StatsBase<number>.constructor`

#### Properties

##### atime

> **atime**: `Date`

###### Inherited from

[`StatsBase`](#statsbase).[`atime`](#atime-1)

##### atimeMs

> **atimeMs**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`atimeMs`](#atimems-1)

##### birthtime

> **birthtime**: `Date`

###### Inherited from

[`StatsBase`](#statsbase).[`birthtime`](#birthtime-1)

##### birthtimeMs

> **birthtimeMs**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`birthtimeMs`](#birthtimems-1)

##### blksize

> **blksize**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`blksize`](#blksize-1)

##### blocks

> **blocks**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`blocks`](#blocks-1)

##### ctime

> **ctime**: `Date`

###### Inherited from

[`StatsBase`](#statsbase).[`ctime`](#ctime-1)

##### ctimeMs

> **ctimeMs**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`ctimeMs`](#ctimems-1)

##### dev

> **dev**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`dev`](#dev-1)

##### gid

> **gid**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`gid`](#gid-1)

##### ino

> **ino**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`ino`](#ino-1)

##### mode

> **mode**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`mode`](#mode-2)

##### mtime

> **mtime**: `Date`

###### Inherited from

[`StatsBase`](#statsbase).[`mtime`](#mtime-1)

##### mtimeMs

> **mtimeMs**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`mtimeMs`](#mtimems-1)

##### nlink

> **nlink**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`nlink`](#nlink-1)

##### rdev

> **rdev**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`rdev`](#rdev-1)

##### size

> **size**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`size`](#size-1)

##### uid

> **uid**: `number`

###### Inherited from

[`StatsBase`](#statsbase).[`uid`](#uid-1)

#### Methods

##### isBlockDevice()

> **isBlockDevice**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isBlockDevice`](#isblockdevice-4)

##### isCharacterDevice()

> **isCharacterDevice**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isCharacterDevice`](#ischaracterdevice-4)

##### isDirectory()

> **isDirectory**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isDirectory`](#isdirectory-4)

##### isFIFO()

> **isFIFO**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isFIFO`](#isfifo-4)

##### isFile()

> **isFile**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isFile`](#isfile-4)

##### isSocket()

> **isSocket**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isSocket`](#issocket-4)

##### isSymbolicLink()

> **isSymbolicLink**(): `boolean`

###### Returns

`boolean`

###### Inherited from

[`StatsBase`](#statsbase).[`isSymbolicLink`](#issymboliclink-4)

## Interfaces

### MakeDirectoryOptions

#### Properties

##### mode?

> `optional` **mode**: `number`

A file mode. If not specified

###### Default

```ts
0o777
```

##### recursive?

> `optional` **recursive**: `boolean`

Indicates whether parent folders should be created.
If a folder was created, the path to the first created folder will be returned.

###### Default

```ts
false
```

***

### RmDirOptions

#### Properties

##### ~~recursive?~~

> `optional` **recursive**: `boolean`

###### Deprecated

Use `fs.rm(path, { recursive: true, force: true })` instead.

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

###### Default

```ts
false
```

***

### RmOptions

#### Properties

##### force?

> `optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

###### Default

```ts
false
```

##### recursive?

> `optional` **recursive**: `boolean`

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

###### Default

```ts
false
```

***

### StatsBase

#### Extended by

- [`Stats`](#stats)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### atime

> **atime**: `Date`

##### atimeMs

> **atimeMs**: `T`

##### birthtime

> **birthtime**: `Date`

##### birthtimeMs

> **birthtimeMs**: `T`

##### blksize

> **blksize**: `T`

##### blocks

> **blocks**: `T`

##### ctime

> **ctime**: `Date`

##### ctimeMs

> **ctimeMs**: `T`

##### dev

> **dev**: `T`

##### gid

> **gid**: `T`

##### ino

> **ino**: `T`

##### mode

> **mode**: `T`

##### mtime

> **mtime**: `Date`

##### mtimeMs

> **mtimeMs**: `T`

##### nlink

> **nlink**: `T`

##### rdev

> **rdev**: `T`

##### size

> **size**: `T`

##### uid

> **uid**: `T`

#### Methods

##### isBlockDevice()

> **isBlockDevice**(): `boolean`

###### Returns

`boolean`

##### isCharacterDevice()

> **isCharacterDevice**(): `boolean`

###### Returns

`boolean`

##### isDirectory()

> **isDirectory**(): `boolean`

###### Returns

`boolean`

##### isFIFO()

> **isFIFO**(): `boolean`

###### Returns

`boolean`

##### isFile()

> **isFile**(): `boolean`

###### Returns

`boolean`

##### isSocket()

> **isSocket**(): `boolean`

###### Returns

`boolean`

##### isSymbolicLink()

> **isSymbolicLink**(): `boolean`

###### Returns

`boolean`

***

### StatSyncFn()

#### Extends

- `Function`

> **StatSyncFn**(`path`: `string`): [`Stats`](#stats)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

[`Stats`](#stats)

## Type Aliases

### Mode

> **Mode** = `number`

***

### PathLike

> **PathLike** = `string`

Valid types for path values in "fs".

## Variables

### statSync

> `const` **statSync**: [`StatSyncFn`](#statsyncfn)

Synchronous stat - Get file status.

#### Param

A path to a file.

## Functions

### accessSync()

> **accessSync**(`path`: `string`, `mode?`: `number`): `void`

Synchronously tests a user's permissions for the file or directory specified
by `path`. The `mode` argument is an optional integer that specifies the
accessibility checks to be performed. `mode` should be either the value `fs.constants.F_OK` or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`, `fs.constants.W_OK`, and
`fs.constants.X_OK` (e.g.`fs.constants.W_OK | fs.constants.R_OK`). Check `File access constants` for
possible values of `mode`.

If any of the accessibility checks fail, an `Error` will be thrown. Otherwise,
the method will return `undefined`.

```js
import { accessSync, constants } from 'fs';

try {
  accessSync('etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can read/write');
} catch (err) {
  console.error('no access!');
}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | - |
| `mode?` | `number` |  |

#### Returns

`void`

***

### chmodSync()

> **chmodSync**(`path`: `string`, `mode`: `number`): `void`

For detailed information, see the documentation of the asynchronous version of
this API: chmod.

See the POSIX [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html) documentation for more detail.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `mode` | `number` |

#### Returns

`void`

***

### mkdirSync()

> **mkdirSync**(`path`: `string`, `options?`: [`MakeDirectoryOptions`](#makedirectoryoptions)): `string`

Synchronously creates a directory. Returns the `path`.

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | [`MakeDirectoryOptions`](#makedirectoryoptions) |

#### Returns

`string`

***

### mkdtempSync()

> **mkdtempSync**(`prefix`: `string`): `string`

Returns the created directory path.

For detailed information, see the documentation of the asynchronous version of
this API: [promises.mkdtemp](fs/promises.md#mkdtemp).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` |

#### Returns

`string`

***

### readdirSync()

#### Call Signature

> **readdirSync**(`path`: `string`, `options?`: `object`): `string`[]

Reads the contents of the directory.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

If `options.withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | \{ `recursive?`: `boolean`; `withFileTypes?`: `false`; \} |
| `options.recursive?` | `boolean` |
| `options.withFileTypes?` | `false` |

##### Returns

`string`[]

#### Call Signature

> **readdirSync**(`path`: `string`, `options`: `object`): [`Dirent`](#dirent)[]

Synchronous readdir (2) - read a directory.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | \{ `recursive?`: `boolean`; `withFileTypes`: `true`; \} | If called with `withFileTypes: true` the result data will be an array of Dirent. |
| `options.recursive?` | `boolean` | - |
| `options.withFileTypes` | `true` | - |

##### Returns

[`Dirent`](#dirent)[]

***

### readFileSync()

#### Call Signature

> **readFileSync**(`path`: `string`, `options?`: \{ `encoding?`: `null`; \} \| `null`): [`Buffer`](../buffer.md#buffer)

Returns the contents of the `path`.

For detailed information, see the documentation of the asynchronous version of
this API: [promises.readFile](fs/promises.md#readfile-3).

If the `encoding` option is specified then this function returns a
string. Otherwise it returns a buffer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. |
| `options?` | \{ `encoding?`: `null`; \} \| `null` | - |

##### Returns

[`Buffer`](../buffer.md#buffer)

#### Call Signature

> **readFileSync**(`path`: `string`, `options`: [`BufferEncoding`](../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../buffer.md#bufferencoding); \}): `string`

Synchronously reads the entire contents of a file.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | A path to a file. |
| `options` | [`BufferEncoding`](../buffer.md#bufferencoding) \| \{ `encoding`: [`BufferEncoding`](../buffer.md#bufferencoding); \} | Either the encoding for the result, or an object that contains the encoding. |

##### Returns

`string`

***

### renameSync()

> **renameSync**(`oldPath`: `string`, `newPath`: `string`): `void`

Synchronously renames a file or directory from `oldPath` to `newPath`.

For detailed information, see the documentation of the asynchronous version of
this API: [promises.rename](fs/promises.md#rename).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldPath` | `string` |
| `newPath` | `string` |

#### Returns

`void`

***

### rmdirSync()

> **rmdirSync**(`path`: `string`, `options?`: [`RmDirOptions`](#rmdiroptions)): `void`

Synchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). Returns `undefined`.

Using `fs.rmdirSync()` on a file (not a directory) results in an `ENOENT` error
on Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use [rmSync](#rmsync) with options `{ recursive: true, force: true }`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | [`RmDirOptions`](#rmdiroptions) |

#### Returns

`void`

***

### rmSync()

> **rmSync**(`path`: `string`, `options?`: [`RmOptions`](#rmoptions)): `void`

Synchronously removes files and directories (modeled on the standard POSIX `rm` utility). Returns `undefined`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `options?` | [`RmOptions`](#rmoptions) |

#### Returns

`void`

***

### writeFileSync()

> **writeFileSync**(`file`: `string`, `data`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](../globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](../buffer.md#buffer)): `void`

Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [promises.writeFile](fs/promises.md#writefile-2).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `string` | A path to a file. |
| `data` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](../globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](../buffer.md#buffer) | - |

#### Returns

`void`
