# Data

### BytesInput

> **BytesInput** = `number`[]

The input for the Javascript Nodes.

***

### ~~ConvertInput~~

> **ConvertInput** = [`BytesInput`](#bytesinput)

#### Deprecated

Use BytesInput instead.

***

### Data

> **Data** = [`Bytes`](shared.md#bytes)

The output for the Javascript Nodes.

***

### Decision

> **Decision** = `boolean`

The output for the If/Else Javascript Nodes.

***

### HttpInput

> **HttpInput** = `object`

The input for the HTTP Javascript Nodes

#### Properties

##### request

> **request**: [`Request`](requests.md#request) \| `undefined`

##### response

> **response**: [`Response`](requests.md#response) \| `undefined`

***

### NodeInput

> **NodeInput** = `object`

The input for the JavaScript V2+ Nodes.

#### Properties

##### data?

> `optional` **data**: [`Bytes`](shared.md#bytes)

##### extra?

> `optional` **extra**: `Record`\<`string`, `any`\>

***

### NodeInputHTTP

> **NodeInputHTTP** = `object`

The input for HTTP JavaScript Nodes.

#### Properties

##### extra?

> `optional` **extra**: `Record`\<`string`, `any`\>

##### request?

> `optional` **request**: [`Request`](requests.md#request)

##### response?

> `optional` **response**: [`Response`](requests.md#response)

***

### NodeResult

> **NodeResult** = `object`

The result for the JavaScript V2+ Nodes.

#### Properties

##### data?

> `optional` **data**: [`Bytes`](shared.md#bytes)

##### extra?

> `optional` **extra**: `Record`\<`string`, `any`\>

***

### ~~PassiveInput~~

> **PassiveInput** = [`HttpInput`](#httpinput)

#### Deprecated

Use HttpInput instead.
