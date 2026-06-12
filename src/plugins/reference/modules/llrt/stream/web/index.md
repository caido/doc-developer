[@caido/quickjs-types](../../../index.md) / llrt/stream/web

# llrt/stream/web

## Modules

| Module | Description |
| ------ | ------ |
| [stream/web](stream/web.md) | - |

## Interfaces

### ByteLengthQueuingStrategy

#### Extends

- [`_ByteLengthQueuingStrategy`](#_bytelengthqueuingstrategy)

#### Properties

##### highWaterMark

> `readonly` **highWaterMark**: `number`

###### Inherited from

`_ByteLengthQueuingStrategy.highWaterMark`

##### size

> `readonly` **size**: [`QueuingStrategySize`](stream/web.md#queuingstrategysize-1)\<`ArrayBufferView`\>

###### Inherited from

`_ByteLengthQueuingStrategy.size`

***

### CountQueuingStrategy

#### Extends

- [`_CountQueuingStrategy`](#_countqueuingstrategy)

#### Properties

##### highWaterMark

> `readonly` **highWaterMark**: `number`

###### Inherited from

`_CountQueuingStrategy.highWaterMark`

##### size

> `readonly` **size**: [`QueuingStrategySize`](stream/web.md#queuingstrategysize-1)

###### Inherited from

`_CountQueuingStrategy.size`

***

### ReadableByteStreamController

#### Extends

- [`_ReadableByteStreamController`](#_readablebytestreamcontroller)

#### Properties

##### byobRequest

> `readonly` **byobRequest**: `undefined`

###### Inherited from

`_ReadableByteStreamController.byobRequest`

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

###### Inherited from

`_ReadableByteStreamController.desiredSize`

#### Methods

##### close()

> **close**(): `void`

###### Returns

`void`

###### Inherited from

`_ReadableByteStreamController.close`

##### enqueue()

> **enqueue**(`chunk`: `ArrayBufferView`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | `ArrayBufferView` |

###### Returns

`void`

###### Inherited from

`_ReadableByteStreamController.enqueue`

##### error()

> **error**(`error?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error?` | `any` |

###### Returns

`void`

###### Inherited from

`_ReadableByteStreamController.error`

***

### ReadableStream

#### Extends

- [`_ReadableStream`](#_readablestream)\<`R`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### locked

> `readonly` **locked**: `boolean`

###### Inherited from

`_ReadableStream.locked`

#### Methods

##### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`ReadableStreamAsyncIterator`](stream/web.md#readablestreamasynciterator-2)\<`R`\>

###### Returns

[`ReadableStreamAsyncIterator`](stream/web.md#readablestreamasynciterator-2)\<`R`\>

###### Inherited from

`_ReadableStream.[asyncIterator]`

##### cancel()

> **cancel**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_ReadableStream.cancel`

##### getReader()

###### Call Signature

> **getReader**(`options`: `object`): [`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `mode`: `"byob"`; \} |
| `options.mode` | `"byob"` |

###### Returns

[`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader)

###### Inherited from

`_ReadableStream.getReader`

###### Call Signature

> **getReader**(): [`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)\<`R`\>

###### Returns

[`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)\<`R`\>

###### Inherited from

`_ReadableStream.getReader`

###### Call Signature

> **getReader**(`options?`: [`ReadableStreamGetReaderOptions`](stream/web.md#readablestreamgetreaderoptions)): [`ReadableStreamReader`](stream/web.md#readablestreamreader)\<`R`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ReadableStreamGetReaderOptions`](stream/web.md#readablestreamgetreaderoptions) |

###### Returns

[`ReadableStreamReader`](stream/web.md#readablestreamreader)\<`R`\>

###### Inherited from

`_ReadableStream.getReader`

##### pipeThrough()

> **pipeThrough**\<`T`\>(`transform`: [`ReadableWritablePair`](stream/web.md#readablewritablepair)\<`T`, `R`\>, `options?`: [`StreamPipeOptions`](stream/web.md#streampipeoptions)): [`ReadableStream`](stream/web.md#readablestream)\<`T`\>

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | [`ReadableWritablePair`](stream/web.md#readablewritablepair)\<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](stream/web.md#streampipeoptions) |

###### Returns

[`ReadableStream`](stream/web.md#readablestream)\<`T`\>

###### Inherited from

`_ReadableStream.pipeThrough`

##### pipeTo()

> **pipeTo**(`destination`: [`WritableStream`](stream/web.md#writablestream)\<`R`\>, `options?`: [`StreamPipeOptions`](stream/web.md#streampipeoptions)): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destination` | [`WritableStream`](stream/web.md#writablestream)\<`R`\> |
| `options?` | [`StreamPipeOptions`](stream/web.md#streampipeoptions) |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_ReadableStream.pipeTo`

##### tee()

> **tee**(): \[[`ReadableStream`](stream/web.md#readablestream)\<`R`\>, [`ReadableStream`](stream/web.md#readablestream)\<`R`\>\]

###### Returns

\[[`ReadableStream`](stream/web.md#readablestream)\<`R`\>, [`ReadableStream`](stream/web.md#readablestream)\<`R`\>\]

###### Inherited from

`_ReadableStream.tee`

##### values()

> **values**(`options?`: `object`): [`ReadableStreamAsyncIterator`](stream/web.md#readablestreamasynciterator-2)\<`R`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `preventCancel?`: `boolean`; \} |
| `options.preventCancel?` | `boolean` |

###### Returns

[`ReadableStreamAsyncIterator`](stream/web.md#readablestreamasynciterator-2)\<`R`\>

###### Inherited from

`_ReadableStream.values`

***

### ReadableStreamBYOBReader

#### Extends

- [`_ReadableStreamBYOBReader`](#_readablestreambyobreader)

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

###### Inherited from

`_ReadableStreamBYOBReader.closed`

#### Methods

##### cancel()

> **cancel**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_ReadableStreamBYOBReader.cancel`

##### read()

> **read**\<`T`\>(`view`: `T`): `Promise`\<[`ReadableStreamReadResult`](stream/web.md#readablestreamreadresult)\<`T`\>\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ArrayBufferView` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `T` |

###### Returns

`Promise`\<[`ReadableStreamReadResult`](stream/web.md#readablestreamreadresult)\<`T`\>\>

###### Inherited from

`_ReadableStreamBYOBReader.read`

##### releaseLock()

> **releaseLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)

###### Returns

`void`

###### Inherited from

`_ReadableStreamBYOBReader.releaseLock`

***

### ReadableStreamBYOBRequest

#### Extends

- [`_ReadableStreamBYOBRequest`](#_readablestreambyobrequest)

#### Properties

##### view

> `readonly` **view**: `ArrayBufferView` \| `null`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view)

###### Inherited from

`_ReadableStreamBYOBRequest.view`

#### Methods

##### respond()

> **respond**(`bytesWritten`: `number`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytesWritten` | `number` |

###### Returns

`void`

###### Inherited from

`_ReadableStreamBYOBRequest.respond`

##### respondWithNewView()

> **respondWithNewView**(`view`: `ArrayBufferView`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `ArrayBufferView` |

###### Returns

`void`

###### Inherited from

`_ReadableStreamBYOBRequest.respondWithNewView`

***

### ReadableStreamDefaultController

#### Extends

- [`_ReadableStreamDefaultController`](#_readablestreamdefaultcontroller)\<`R`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

###### Inherited from

`_ReadableStreamDefaultController.desiredSize`

#### Methods

##### close()

> **close**(): `void`

###### Returns

`void`

###### Inherited from

`_ReadableStreamDefaultController.close`

##### enqueue()

> **enqueue**(`chunk?`: `R`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk?` | `R` |

###### Returns

`void`

###### Inherited from

`_ReadableStreamDefaultController.enqueue`

##### error()

> **error**(`e?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e?` | `any` |

###### Returns

`void`

###### Inherited from

`_ReadableStreamDefaultController.error`

***

### ReadableStreamDefaultReader

#### Extends

- [`_ReadableStreamDefaultReader`](#_readablestreamdefaultreader)\<`R`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

###### Inherited from

`_ReadableStreamDefaultReader.closed`

#### Methods

##### cancel()

> **cancel**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_ReadableStreamDefaultReader.cancel`

##### read()

> **read**(): `Promise`\<[`ReadableStreamReadResult`](stream/web.md#readablestreamreadresult)\<`R`\>\>

###### Returns

`Promise`\<[`ReadableStreamReadResult`](stream/web.md#readablestreamreadresult)\<`R`\>\>

###### Inherited from

`_ReadableStreamDefaultReader.read`

##### releaseLock()

> **releaseLock**(): `void`

###### Returns

`void`

###### Inherited from

`_ReadableStreamDefaultReader.releaseLock`

***

### WritableStream

#### Extends

- [`_WritableStream`](#_writablestream)\<`W`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

#### Properties

##### locked

> `readonly` **locked**: `boolean`

###### Inherited from

`_WritableStream.locked`

#### Methods

##### abort()

> **abort**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_WritableStream.abort`

##### close()

> **close**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_WritableStream.close`

##### getWriter()

> **getWriter**(): [`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)\<`W`\>

###### Returns

[`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)\<`W`\>

###### Inherited from

`_WritableStream.getWriter`

***

### WritableStreamDefaultController

#### Extends

- [`_WritableStreamDefaultController`](#_writablestreamdefaultcontroller)

#### Methods

##### error()

> **error**(`e?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e?` | `any` |

###### Returns

`void`

###### Inherited from

`_WritableStreamDefaultController.error`

***

### WritableStreamDefaultWriter

#### Extends

- [`_WritableStreamDefaultWriter`](#_writablestreamdefaultwriter)\<`W`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

###### Inherited from

`_WritableStreamDefaultWriter.closed`

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

###### Inherited from

`_WritableStreamDefaultWriter.desiredSize`

##### ready

> `readonly` **ready**: `Promise`\<`undefined`\>

###### Inherited from

`_WritableStreamDefaultWriter.ready`

#### Methods

##### abort()

> **abort**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_WritableStreamDefaultWriter.abort`

##### close()

> **close**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_WritableStreamDefaultWriter.close`

##### releaseLock()

> **releaseLock**(): `void`

###### Returns

`void`

###### Inherited from

`_WritableStreamDefaultWriter.releaseLock`

##### write()

> **write**(`chunk?`: `W`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk?` | `W` |

###### Returns

`Promise`\<`void`\>

###### Inherited from

`_WritableStreamDefaultWriter.write`

## Type Aliases

### \_ByteLengthQueuingStrategy

> **\_ByteLengthQueuingStrategy** = *typeof* `globalThis` *extends* `object` ? `object` : [`ByteLengthQueuingStrategy`](stream/web.md#bytelengthqueuingstrategy)

***

### \_CountQueuingStrategy

> **\_CountQueuingStrategy** = *typeof* `globalThis` *extends* `object` ? `object` : [`CountQueuingStrategy`](stream/web.md#countqueuingstrategy)

***

### \_ReadableByteStreamController

> **\_ReadableByteStreamController** = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableByteStreamController`](stream/web.md#readablebytestreamcontroller)

***

### \_ReadableStream

> **\_ReadableStream**\<`R`\> = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableStream`](stream/web.md#readablestream)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

***

### \_ReadableStreamBYOBReader

> **\_ReadableStreamBYOBReader** = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader)

***

### \_ReadableStreamBYOBRequest

> **\_ReadableStreamBYOBRequest** = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableStreamBYOBRequest`](stream/web.md#readablestreambyobrequest)

***

### \_ReadableStreamDefaultController

> **\_ReadableStreamDefaultController**\<`R`\> = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableStreamDefaultController`](stream/web.md#readablestreamdefaultcontroller)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

***

### \_ReadableStreamDefaultReader

> **\_ReadableStreamDefaultReader**\<`R`\> = *typeof* `globalThis` *extends* `object` ? `object` : [`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

***

### \_WritableStream

> **\_WritableStream**\<`W`\> = *typeof* `globalThis` *extends* `object` ? `object` : [`WritableStream`](stream/web.md#writablestream)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

***

### \_WritableStreamDefaultController

> **\_WritableStreamDefaultController** = *typeof* `globalThis` *extends* `object` ? `object` : [`WritableStreamDefaultController`](stream/web.md#writablestreamdefaultcontroller)

***

### \_WritableStreamDefaultWriter

> **\_WritableStreamDefaultWriter**\<`W`\> = *typeof* `globalThis` *extends* `object` ? `object` : [`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

## Variables

### ByteLengthQueuingStrategy

> **ByteLengthQueuingStrategy**: \{(`init`: [`QueuingStrategyInit`](stream/web.md#queuingstrategyinit)): [`ByteLengthQueuingStrategy`](stream/web.md#bytelengthqueuingstrategy); `prototype`: [`ByteLengthQueuingStrategy`](stream/web.md#bytelengthqueuingstrategy); \}

`ByteLengthQueuingStrategy` class is a global reference for `import { ByteLengthQueuingStrategy } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-bytelengthqueuingstrategy

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `init` | [`QueuingStrategyInit`](stream/web.md#queuingstrategyinit) |

#### Returns

[`ByteLengthQueuingStrategy`](stream/web.md#bytelengthqueuingstrategy)

##### prototype

> **prototype**: [`ByteLengthQueuingStrategy`](stream/web.md#bytelengthqueuingstrategy)

#### Since

v18.0.0

***

### CountQueuingStrategy

> **CountQueuingStrategy**: \{(`init`: [`QueuingStrategyInit`](stream/web.md#queuingstrategyinit)): [`CountQueuingStrategy`](stream/web.md#countqueuingstrategy); `prototype`: [`CountQueuingStrategy`](stream/web.md#countqueuingstrategy); \}

`CountQueuingStrategy` class is a global reference for `import { CountQueuingStrategy } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-countqueuingstrategy

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `init` | [`QueuingStrategyInit`](stream/web.md#queuingstrategyinit) |

#### Returns

[`CountQueuingStrategy`](stream/web.md#countqueuingstrategy)

##### prototype

> **prototype**: [`CountQueuingStrategy`](stream/web.md#countqueuingstrategy)

#### Since

v18.0.0

***

### ReadableByteStreamController

> **ReadableByteStreamController**: \{(): [`ReadableByteStreamController`](stream/web.md#readablebytestreamcontroller); `prototype`: [`ReadableByteStreamController`](stream/web.md#readablebytestreamcontroller); \}

`ReadableByteStreamController` class is a global reference for `import { ReadableByteStreamController } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablebytestreamcontroller

#### Type Declaration

#### Returns

[`ReadableByteStreamController`](stream/web.md#readablebytestreamcontroller)

##### prototype

> **prototype**: [`ReadableByteStreamController`](stream/web.md#readablebytestreamcontroller)

#### Since

v18.0.0

***

### ReadableStream

> **ReadableStream**: \{(`underlyingSource`: [`UnderlyingByteSource`](stream/web.md#underlyingbytesource), `strategy?`: [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`Uint8Array`\>): [`ReadableStream`](stream/web.md#readablestream)\<`Uint8Array`\>; \<`R`\>(`underlyingSource?`: [`UnderlyingSource`](stream/web.md#underlyingsource)\<`R`\>, `strategy?`: [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`R`\>): [`ReadableStream`](stream/web.md#readablestream)\<`R`\>; `prototype`: [`ReadableStream`](stream/web.md#readablestream); `from`: [`ReadableStream`](stream/web.md#readablestream)\<`T`\>; \}

`ReadableStream` class is a global reference for `import { ReadableStream } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablestream

#### Type Declaration

#### Call Signature

> **new ReadableStream**(`underlyingSource`: [`UnderlyingByteSource`](stream/web.md#underlyingbytesource), `strategy?`: [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`Uint8Array`\>): [`ReadableStream`](stream/web.md#readablestream)\<`Uint8Array`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSource` | [`UnderlyingByteSource`](stream/web.md#underlyingbytesource) |
| `strategy?` | [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`Uint8Array`\> |

##### Returns

[`ReadableStream`](stream/web.md#readablestream)\<`Uint8Array`\>

#### Call Signature

> **new ReadableStream**\<`R`\>(`underlyingSource?`: [`UnderlyingSource`](stream/web.md#underlyingsource)\<`R`\>, `strategy?`: [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`R`\>): [`ReadableStream`](stream/web.md#readablestream)\<`R`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSource?` | [`UnderlyingSource`](stream/web.md#underlyingsource)\<`R`\> |
| `strategy?` | [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`R`\> |

##### Returns

[`ReadableStream`](stream/web.md#readablestream)\<`R`\>

##### prototype

> **prototype**: [`ReadableStream`](stream/web.md#readablestream)

##### from()

> **from**\<`T`\>(`iterable`: `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>): [`ReadableStream`](stream/web.md#readablestream)\<`T`\>

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `iterable` | `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\> |

###### Returns

[`ReadableStream`](stream/web.md#readablestream)\<`T`\>

#### Since

v18.0.0

***

### ReadableStreamBYOBReader

> **ReadableStreamBYOBReader**: \{(`stream`: [`ReadableStream`](stream/web.md#readablestream)): [`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader); `prototype`: [`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader); \}

`ReadableStreamBYOBReader` class is a global reference for `import { ReadableStreamBYOBReader } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablestreambyobreader

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`ReadableStream`](stream/web.md#readablestream) |

#### Returns

[`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader)

##### prototype

> **prototype**: [`ReadableStreamBYOBReader`](stream/web.md#readablestreambyobreader)

#### Since

v18.0.0

***

### ReadableStreamBYOBRequest

> **ReadableStreamBYOBRequest**: \{(): [`ReadableStreamBYOBRequest`](stream/web.md#readablestreambyobrequest); `prototype`: [`ReadableStreamBYOBRequest`](stream/web.md#readablestreambyobrequest); \}

`ReadableStreamBYOBRequest` class is a global reference for `import { ReadableStreamBYOBRequest } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablestreambyobrequest

#### Type Declaration

#### Returns

[`ReadableStreamBYOBRequest`](stream/web.md#readablestreambyobrequest)

##### prototype

> **prototype**: [`ReadableStreamBYOBRequest`](stream/web.md#readablestreambyobrequest)

#### Since

v18.0.0

***

### ReadableStreamDefaultController

> **ReadableStreamDefaultController**: \{(): [`ReadableStreamDefaultController`](stream/web.md#readablestreamdefaultcontroller); `prototype`: [`ReadableStreamDefaultController`](stream/web.md#readablestreamdefaultcontroller); \}

`ReadableStreamDefaultController` class is a global reference for `import { ReadableStreamDefaultController } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablestreamdefaultcontroller

#### Type Declaration

#### Returns

[`ReadableStreamDefaultController`](stream/web.md#readablestreamdefaultcontroller)

##### prototype

> **prototype**: [`ReadableStreamDefaultController`](stream/web.md#readablestreamdefaultcontroller)

#### Since

v18.0.0

***

### ReadableStreamDefaultReader

> **ReadableStreamDefaultReader**: \{\<`R`\>(`stream`: [`ReadableStream`](stream/web.md#readablestream)\<`R`\>): [`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)\<`R`\>; `prototype`: [`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader); \}

`ReadableStreamDefaultReader` class is a global reference for `import { ReadableStreamDefaultReader } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-readablestreamdefaultreader

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`ReadableStream`](stream/web.md#readablestream)\<`R`\> |

#### Returns

[`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)\<`R`\>

##### prototype

> **prototype**: [`ReadableStreamDefaultReader`](stream/web.md#readablestreamdefaultreader)

#### Since

v18.0.0

***

### WritableStream

> **WritableStream**: \{\<`W`\>(`underlyingSink?`: [`UnderlyingSink`](stream/web.md#underlyingsink)\<`W`\>, `strategy?`: [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`W`\>): [`WritableStream`](stream/web.md#writablestream)\<`W`\>; `prototype`: [`WritableStream`](stream/web.md#writablestream); \}

`WritableStream` class is a global reference for `import { WritableStream } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-writablestream

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSink?` | [`UnderlyingSink`](stream/web.md#underlyingsink)\<`W`\> |
| `strategy?` | [`QueuingStrategy`](stream/web.md#queuingstrategy)\<`W`\> |

#### Returns

[`WritableStream`](stream/web.md#writablestream)\<`W`\>

##### prototype

> **prototype**: [`WritableStream`](stream/web.md#writablestream)

#### Since

v18.0.0

***

### WritableStreamDefaultController

> **WritableStreamDefaultController**: \{(): [`WritableStreamDefaultController`](stream/web.md#writablestreamdefaultcontroller); `prototype`: [`WritableStreamDefaultController`](stream/web.md#writablestreamdefaultcontroller); \}

`WritableStreamDefaultController` class is a global reference for `import { WritableStreamDefaultController } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-writablestreamdefaultcontroller

#### Type Declaration

#### Returns

[`WritableStreamDefaultController`](stream/web.md#writablestreamdefaultcontroller)

##### prototype

> **prototype**: [`WritableStreamDefaultController`](stream/web.md#writablestreamdefaultcontroller)

#### Since

v18.0.0

***

### WritableStreamDefaultWriter

> **WritableStreamDefaultWriter**: \{\<`W`\>(`stream`: [`WritableStream`](stream/web.md#writablestream)\<`W`\>): [`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)\<`W`\>; `prototype`: [`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter); \}

`WritableStreamDefaultWriter` class is a global reference for `import { WritableStreamDefaultWriter } from 'stream/web'`.
https://nodejs.org/api/globals.html#class-writablestreamdefaultwriter

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`WritableStream`](stream/web.md#writablestream)\<`W`\> |

#### Returns

[`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)\<`W`\>

##### prototype

> **prototype**: [`WritableStreamDefaultWriter`](stream/web.md#writablestreamdefaultwriter)

#### Since

v18.0.0
