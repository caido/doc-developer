# Findings

### DedupeKey

> **DedupeKey** = `string` & `object`

A deduplication key.

#### Type Declaration

##### \_\_dedupeKey?

> `optional` **\_\_dedupeKey**: `never`

***

### Finding

> **Finding** = `object`

A saved immutable Finding.

#### Methods

##### getDedupeKey()

> **getDedupeKey**(): [`DedupeKey`](#dedupekey) \| `undefined`

The deduplication key of the finding.

###### Returns

[`DedupeKey`](#dedupekey) \| `undefined`

##### getDescription()

> **getDescription**(): `string` \| `undefined`

The description of the finding.

###### Returns

`string` \| `undefined`

##### getId()

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the finding.

###### Returns

[`ID`](shared.md#id)

##### getReporter()

> **getReporter**(): `string`

The name of the reporter.

###### Returns

`string`

##### getRequestId()

> **getRequestId**(): `string`

The ID of the associated [Request](requests.md#request).

###### Returns

`string`

##### getTitle()

> **getTitle**(): `string`

The title of the finding.

###### Returns

`string`

***

### FindingSpec

> **FindingSpec** = `object`

A mutable Finding not yet created.

#### Properties

##### dedupeKey?

> `optional` **dedupeKey**: [`DedupeKey`](#dedupekey)

Deduplication key for findings.
If a finding with the same dedupe key already exists, it will not be created.

##### description?

> `optional` **description**: `string`

The description of the finding.

##### reporter

> **reporter**: `string`

The name of the reporter.
It will be used to group findings.

##### request

> **request**: [`Request`](requests.md#request)

The associated [Request](requests.md#request).

##### title

> **title**: `string`

The title of the finding.

***

### FindingsSDK

> **FindingsSDK** = `object`

The SDK for the Findings service.

#### Methods

##### create()

> **create**(`spec`: [`FindingSpec`](#findingspec)): `Promise`\<[`Finding`](#finding)\>

Creates a new Finding.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `spec` | [`FindingSpec`](#findingspec) |

###### Returns

`Promise`\<[`Finding`](#finding)\>

###### Throws

If the request cannot be saved.

###### Example

```js
await sdk.findings.create({
  title: "Title",
  description: "Description",
  reporter: "Reporter",
  dedupeKey: `${request.getHost()}-${request.getPath()}`,
  request,
});
```

##### exists()

> **exists**(`input`: [`GetFindingInput`](#getfindinginput)): `Promise`\<`boolean`\>

Check if a [Finding](#finding) exists.
Similar to `get`, but returns a boolean.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GetFindingInput`](#getfindinginput) |

###### Returns

`Promise`\<`boolean`\>

###### Example

```js
await sdk.findings.exists("my-dedupe-key");
```

##### get()

> **get**(`input`: [`GetFindingInput`](#getfindinginput)): `Promise`\<[`Finding`](#finding) \| `undefined`\>

Try to get a [Finding](#finding) for a request.

Since a request can have multiple findings, this will return the first one found.
You can also filter by reporter to get a specific finding.

Finally, you can use a deduplication key to get a specific finding.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GetFindingInput`](#getfindinginput) |

###### Returns

`Promise`\<[`Finding`](#finding) \| `undefined`\>

###### Example

```js
await sdk.findings.get({
 reporter: "Reporter",
 request,
});
```

***

### GetFindingInput

> **GetFindingInput** = [`DedupeKey`](#dedupekey) \| \{ `reporter?`: `string`; `request`: [`Request`](requests.md#request); \}

Input to get a [Finding](#finding).

#### Type Declaration

[`DedupeKey`](#dedupekey)

\{ `reporter?`: `string`; `request`: [`Request`](requests.md#request); \}

##### reporter?

> `optional` **reporter**: `string`

The name of the reporter.

##### request

> **request**: [`Request`](requests.md#request)

The associated [Request](requests.md#request).
