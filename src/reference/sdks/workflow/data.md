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

### ~~PassiveInput~~

> **PassiveInput** = [`HttpInput`](#httpinput)

#### Deprecated

Use HttpInput instead.
