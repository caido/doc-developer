[@caido/quickjs-types](../index.md) / llrt/dns

# llrt/dns

## Interfaces

### LookupAddress

#### Properties

##### address

> **address**: `string`

A string representation of an IPv4 or IPv6 address.

##### family

> **family**: `number`

`4` or `6`, denoting the family of `address`, or `0` if the address is not an IPv4 or IPv6 address. `0` is a likely indicator of a
bug in the name resolution service used by the operating system.

***

### LookupAllOptions

#### Extends

- [`LookupOptions`](#lookupoptions)

#### Properties

##### all

> **all**: `true`

When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.

###### Default

```ts
false
```

###### Overrides

[`LookupOptions`](#lookupoptions).[`all`](#all-2)

##### family?

> `optional` **family**: `number` \| `"IPv4"` \| `"IPv6"`

The record family. Must be `4`, `6`, or `0`.
The value 0 indicates that either an IPv4 or IPv6 address is returned.

###### Default

```ts
0
```

###### Inherited from

[`LookupOptions`](#lookupoptions).[`family`](#family-3)

##### order?

> `optional` **order**: `"verbatim"` \| `"ipv4first"` \| `"ipv6first"`

When `verbatim`, the resolved addresses are return unsorted. When `ipv4first`, the resolved addresses are sorted
by placing IPv4 addresses before IPv6 addresses. When `ipv6first`, the resolved addresses are sorted by placing IPv6
addresses before IPv4 addresses. Default value is configurable using
setDefaultResultOrder or [`--dns-result-order`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--dns-result-orderorder).

###### Default

`verbatim` (addresses are not reordered)

###### Inherited from

[`LookupOptions`](#lookupoptions).[`order`](#order-2)

***

### LookupOneOptions

#### Extends

- [`LookupOptions`](#lookupoptions)

#### Properties

##### all?

> `optional` **all**: `false`

When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.

###### Default

```ts
false
```

###### Overrides

[`LookupOptions`](#lookupoptions).[`all`](#all-2)

##### family?

> `optional` **family**: `number` \| `"IPv4"` \| `"IPv6"`

The record family. Must be `4`, `6`, or `0`.
The value 0 indicates that either an IPv4 or IPv6 address is returned.

###### Default

```ts
0
```

###### Inherited from

[`LookupOptions`](#lookupoptions).[`family`](#family-3)

##### order?

> `optional` **order**: `"verbatim"` \| `"ipv4first"` \| `"ipv6first"`

When `verbatim`, the resolved addresses are return unsorted. When `ipv4first`, the resolved addresses are sorted
by placing IPv4 addresses before IPv6 addresses. When `ipv6first`, the resolved addresses are sorted by placing IPv6
addresses before IPv4 addresses. Default value is configurable using
setDefaultResultOrder or [`--dns-result-order`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--dns-result-orderorder).

###### Default

`verbatim` (addresses are not reordered)

###### Inherited from

[`LookupOptions`](#lookupoptions).[`order`](#order-2)

***

### LookupOptions

#### Extended by

- [`LookupOneOptions`](#lookuponeoptions)
- [`LookupAllOptions`](#lookupalloptions)

#### Properties

##### all?

> `optional` **all**: `boolean`

When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.

###### Default

```ts
false
```

##### family?

> `optional` **family**: `number` \| `"IPv4"` \| `"IPv6"`

The record family. Must be `4`, `6`, or `0`.
The value 0 indicates that either an IPv4 or IPv6 address is returned.

###### Default

```ts
0
```

##### order?

> `optional` **order**: `"verbatim"` \| `"ipv4first"` \| `"ipv6first"`

When `verbatim`, the resolved addresses are return unsorted. When `ipv4first`, the resolved addresses are sorted
by placing IPv4 addresses before IPv6 addresses. When `ipv6first`, the resolved addresses are sorted by placing IPv6
addresses before IPv4 addresses. Default value is configurable using
setDefaultResultOrder or [`--dns-result-order`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--dns-result-orderorder).

###### Default

`verbatim` (addresses are not reordered)

## Functions

### lookup()

#### Call Signature

> **lookup**(`hostname`: `string`, `family`: `number`, `callback`: (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void`): `void`

Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
AAAA (IPv6) record. All `option` properties are optional. If `options` is an
integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
IPv4 and IPv6 addresses are both returned if found.

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
the host name does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup()` does not necessarily have anything to do with the DNS protocol.
The implementation uses an operating system facility that can associate names
with addresses and vice versa.

Example usage:

```js
import dns from 'dns';
const options = {
  family: 6,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostname` | `string` |
| `family` | `number` |
| `callback` | (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void` |

##### Returns

`void`

#### Call Signature

> **lookup**(`hostname`: `string`, `options`: [`LookupOneOptions`](#lookuponeoptions), `callback`: (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void`): `void`

Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
AAAA (IPv6) record. All `option` properties are optional. If `options` is an
integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
IPv4 and IPv6 addresses are both returned if found.

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
the host name does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup()` does not necessarily have anything to do with the DNS protocol.
The implementation uses an operating system facility that can associate names
with addresses and vice versa.

Example usage:

```js
import dns from 'dns';
const options = {
  family: 6,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostname` | `string` |
| `options` | [`LookupOneOptions`](#lookuponeoptions) |
| `callback` | (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void` |

##### Returns

`void`

#### Call Signature

> **lookup**(`hostname`: `string`, `options`: [`LookupAllOptions`](#lookupalloptions), `callback`: (`err`: `Error` \| `null`, `addresses`: [`LookupAddress`](#lookupaddress)[]) => `void`): `void`

Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
AAAA (IPv6) record. All `option` properties are optional. If `options` is an
integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
IPv4 and IPv6 addresses are both returned if found.

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
the host name does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup()` does not necessarily have anything to do with the DNS protocol.
The implementation uses an operating system facility that can associate names
with addresses and vice versa.

Example usage:

```js
import dns from 'dns';
const options = {
  family: 6,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostname` | `string` |
| `options` | [`LookupAllOptions`](#lookupalloptions) |
| `callback` | (`err`: `Error` \| `null`, `addresses`: [`LookupAddress`](#lookupaddress)[]) => `void` |

##### Returns

`void`

#### Call Signature

> **lookup**(`hostname`: `string`, `options`: [`LookupOptions`](#lookupoptions), `callback`: (`err`: `Error` \| `null`, `address`: `string` \| [`LookupAddress`](#lookupaddress)[], `family`: `number`) => `void`): `void`

Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
AAAA (IPv6) record. All `option` properties are optional. If `options` is an
integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
IPv4 and IPv6 addresses are both returned if found.

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
the host name does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup()` does not necessarily have anything to do with the DNS protocol.
The implementation uses an operating system facility that can associate names
with addresses and vice versa.

Example usage:

```js
import dns from 'dns';
const options = {
  family: 6,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostname` | `string` |
| `options` | [`LookupOptions`](#lookupoptions) |
| `callback` | (`err`: `Error` \| `null`, `address`: `string` \| [`LookupAddress`](#lookupaddress)[], `family`: `number`) => `void` |

##### Returns

`void`

#### Call Signature

> **lookup**(`hostname`: `string`, `callback`: (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void`): `void`

Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
AAAA (IPv6) record. All `option` properties are optional. If `options` is an
integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
IPv4 and IPv6 addresses are both returned if found.

On error, `err` is an `Error` object, where `err.code` is the error code.
Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
the host name does not exist but also when the lookup fails in other ways
such as no available file descriptors.

`dns.lookup()` does not necessarily have anything to do with the DNS protocol.
The implementation uses an operating system facility that can associate names
with addresses and vice versa.

Example usage:

```js
import dns from 'dns';
const options = {
  family: 6,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostname` | `string` |
| `callback` | (`err`: `Error` \| `null`, `address`: `string`, `family`: `number`) => `void` |

##### Returns

`void`
