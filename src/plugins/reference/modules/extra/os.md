[@caido/quickjs-types](../index.md) / extra/os

# extra/os

## Variables

### EOL

> `const` **EOL**: `string`

The operating system-specific end-of-line marker.
* `\n` on POSIX
* `\r\n` on Windows

## Functions

### arch()

> **arch**(): `string`

Returns the operating system CPU architecture for which the LLRT binary was compiled.
Possible values are 'arm64', 'x64'. The return value is equivalent to `process.arch`.

#### Returns

`string`

***

### homedir()

> **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

***

### platform()

> **platform**(): [`Platform`](../llrt/globals/namespaces/QuickJS.md#platform)

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.

#### Returns

[`Platform`](../llrt/globals/namespaces/QuickJS.md#platform)

***

### release()

> **release**(): `string`

Returns the operating system release as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

***

### tmpdir()

> **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

***

### type()

> **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

***

### version()

> **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used.
See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`
