[@caido/quickjs-types](../../../../index.md) / [llrt/stream/web](../index.md) / stream/web

# stream/web

## Interfaces

### ByteLengthQueuingStrategy

This Streams API interface provides a built-in byte length queuing
strategy that can be used when constructing streams.

#### Extends

- [`QueuingStrategy`](#queuingstrategy)\<`ArrayBufferView`\>

#### Properties

##### highWaterMark

> `readonly` **highWaterMark**: `number`

###### Overrides

[`QueuingStrategy`](#queuingstrategy).[`highWaterMark`](#highwatermark-2)

##### size

> `readonly` **size**: [`QueuingStrategySize`](#queuingstrategysize-1)\<`ArrayBufferView`\>

###### Overrides

[`QueuingStrategy`](#queuingstrategy).[`size`](#size-2)

***

### CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing
strategy that can be used when constructing streams.

#### Extends

- [`QueuingStrategy`](#queuingstrategy)

#### Properties

##### highWaterMark

> `readonly` **highWaterMark**: `number`

###### Overrides

[`QueuingStrategy`](#queuingstrategy).[`highWaterMark`](#highwatermark-2)

##### size

> `readonly` **size**: [`QueuingStrategySize`](#queuingstrategysize-1)

###### Overrides

[`QueuingStrategy`](#queuingstrategy).[`size`](#size-2)

***

### QueuingStrategy

#### Extended by

- [`ByteLengthQueuingStrategy`](#bytelengthqueuingstrategy)
- [`CountQueuingStrategy`](#countqueuingstrategy)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Properties

##### highWaterMark?

> `optional` **highWaterMark**: `number`

##### size?

> `optional` **size**: [`QueuingStrategySize`](#queuingstrategysize-1)\<`T`\>

***

### QueuingStrategyInit

#### Properties

##### highWaterMark

> **highWaterMark**: `number`

Creates a new ByteLengthQueuingStrategy with the provided high water
mark.

Note that the provided high water mark will not be validated ahead of
time. Instead, if it is negative, NaN, or not a number, the resulting
ByteLengthQueuingStrategy will cause the corresponding stream
constructor to throw.

***

### QueuingStrategySize()

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

> **QueuingStrategySize**(`chunk?`: `T`): `number`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk?` | `T` |

#### Returns

`number`

***

### ReadableByteStreamController

#### Properties

##### byobRequest

> `readonly` **byobRequest**: `undefined`

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

#### Methods

##### close()

> **close**(): `void`

###### Returns

`void`

##### enqueue()

> **enqueue**(`chunk`: `ArrayBufferView`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | `ArrayBufferView` |

###### Returns

`void`

##### error()

> **error**(`error?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error?` | `any` |

###### Returns

`void`

***

### ReadableByteStreamControllerCallback()

> **ReadableByteStreamControllerCallback**(`controller`: [`ReadableByteStreamController`](#readablebytestreamcontroller)): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `controller` | [`ReadableByteStreamController`](#readablebytestreamcontroller) |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### ReadableStream

This Streams API interface represents a readable stream of byte data.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### locked

> `readonly` **locked**: `boolean`

#### Methods

##### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`R`\>

###### Returns

[`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`R`\>

##### cancel()

> **cancel**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

##### getReader()

###### Call Signature

> **getReader**(`options`: `object`): [`ReadableStreamBYOBReader`](#readablestreambyobreader)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `mode`: `"byob"`; \} |
| `options.mode` | `"byob"` |

###### Returns

[`ReadableStreamBYOBReader`](#readablestreambyobreader)

###### Call Signature

> **getReader**(): [`ReadableStreamDefaultReader`](#readablestreamdefaultreader)\<`R`\>

###### Returns

[`ReadableStreamDefaultReader`](#readablestreamdefaultreader)\<`R`\>

###### Call Signature

> **getReader**(`options?`: [`ReadableStreamGetReaderOptions`](#readablestreamgetreaderoptions)): [`ReadableStreamReader`](#readablestreamreader)\<`R`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ReadableStreamGetReaderOptions`](#readablestreamgetreaderoptions) |

###### Returns

[`ReadableStreamReader`](#readablestreamreader)\<`R`\>

##### pipeThrough()

> **pipeThrough**\<`T`\>(`transform`: [`ReadableWritablePair`](#readablewritablepair)\<`T`, `R`\>, `options?`: [`StreamPipeOptions`](#streampipeoptions)): [`ReadableStream`](#readablestream)\<`T`\>

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `transform` | [`ReadableWritablePair`](#readablewritablepair)\<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](#streampipeoptions) |

###### Returns

[`ReadableStream`](#readablestream)\<`T`\>

##### pipeTo()

> **pipeTo**(`destination`: [`WritableStream`](#writablestream)\<`R`\>, `options?`: [`StreamPipeOptions`](#streampipeoptions)): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `destination` | [`WritableStream`](#writablestream)\<`R`\> |
| `options?` | [`StreamPipeOptions`](#streampipeoptions) |

###### Returns

`Promise`\<`void`\>

##### tee()

> **tee**(): \[[`ReadableStream`](#readablestream)\<`R`\>, [`ReadableStream`](#readablestream)\<`R`\>\]

###### Returns

\[[`ReadableStream`](#readablestream)\<`R`\>, [`ReadableStream`](#readablestream)\<`R`\>\]

##### values()

> **values**(`options?`: `object`): [`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`R`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `preventCancel?`: `boolean`; \} |
| `options.preventCancel?` | `boolean` |

###### Returns

[`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`R`\>

***

### ReadableStreamAsyncIterator

#### Extends

- `AsyncIterableIterator`\<`T`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Methods

##### \[asyncIterator\]()

> **\[asyncIterator\]**(): [`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`T`\>

###### Returns

[`ReadableStreamAsyncIterator`](#readablestreamasynciterator-2)\<`T`\>

###### Overrides

`AsyncIterableIterator.[asyncIterator]`

***

### ReadableStreamBYOBReader

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)

#### Extends

- [`ReadableStreamGenericReader`](#readablestreamgenericreader)

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

###### Inherited from

[`ReadableStreamGenericReader`](#readablestreamgenericreader).[`closed`](#closed-2)

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

[`ReadableStreamGenericReader`](#readablestreamgenericreader).[`cancel`](#cancel-6)

##### read()

> **read**\<`T`\>(`view`: `T`): `Promise`\<[`ReadableStreamReadResult`](#readablestreamreadresult)\<`T`\>\>

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

`Promise`\<[`ReadableStreamReadResult`](#readablestreamreadresult)\<`T`\>\>

##### releaseLock()

> **releaseLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)

###### Returns

`void`

***

### ReadableStreamBYOBRequest

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest)

#### Properties

##### view

> `readonly` **view**: `ArrayBufferView` \| `null`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view)

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

##### respondWithNewView()

> **respondWithNewView**(`view`: `ArrayBufferView`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `ArrayBufferView` |

###### Returns

`void`

***

### ReadableStreamDefaultController

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

#### Methods

##### close()

> **close**(): `void`

###### Returns

`void`

##### enqueue()

> **enqueue**(`chunk?`: `R`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk?` | `R` |

###### Returns

`void`

##### error()

> **error**(`e?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e?` | `any` |

###### Returns

`void`

***

### ReadableStreamDefaultReader

#### Extends

- [`ReadableStreamGenericReader`](#readablestreamgenericreader)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

###### Inherited from

[`ReadableStreamGenericReader`](#readablestreamgenericreader).[`closed`](#closed-2)

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

[`ReadableStreamGenericReader`](#readablestreamgenericreader).[`cancel`](#cancel-6)

##### read()

> **read**(): `Promise`\<[`ReadableStreamReadResult`](#readablestreamreadresult)\<`R`\>\>

###### Returns

`Promise`\<[`ReadableStreamReadResult`](#readablestreamreadresult)\<`R`\>\>

##### releaseLock()

> **releaseLock**(): `void`

###### Returns

`void`

***

### ReadableStreamErrorCallback()

> **ReadableStreamErrorCallback**(`reason`: `any`): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `any` |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### ReadableStreamGenericReader

#### Extended by

- [`ReadableStreamDefaultReader`](#readablestreamdefaultreader)
- [`ReadableStreamBYOBReader`](#readablestreambyobreader)

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

#### Methods

##### cancel()

> **cancel**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

***

### ReadableStreamGetReaderOptions

#### Properties

##### mode?

> `optional` **mode**: `"byob"`

Creates a ReadableStreamBYOBReader and locks the stream to the new reader.

This call behaves the same way as the no-argument variant, except that it only works on readable byte streams, i.e. streams which were constructed specifically with the ability to handle "bring your own buffer" reading. The returned BYOB reader provides the ability to directly read individual chunks from the stream via its read() method, into developer-supplied buffers, allowing more precise control over allocation.

***

### ReadableStreamReadDoneResult

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### done

> **done**: `true`

##### value?

> `optional` **value**: `T`

***

### ReadableStreamReadValueResult

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### done

> **done**: `false`

##### value

> **value**: `T`

***

### ReadableWritablePair

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |
| `W` | `any` |

#### Properties

##### readable

> **readable**: [`ReadableStream`](#readablestream)\<`R`\>

##### writable

> **writable**: [`WritableStream`](#writablestream)\<`W`\>

Provides a convenient, chainable way of piping this readable stream
through a transform stream (or any other { writable, readable }
pair). It simply pipes the stream into the writable side of the
supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing
any other consumer from acquiring a reader.

***

### StreamPipeOptions

#### Properties

##### preventAbort?

> `optional` **preventAbort**: `boolean`

##### preventCancel?

> `optional` **preventCancel**: `boolean`

##### preventClose?

> `optional` **preventClose**: `boolean`

Pipes this readable stream to a given writable stream destination.
The way in which the piping process behaves under various error
conditions can be customized with a number of passed options. It
returns a promise that fulfills when the piping process completes
successfully, or rejects if any errors were encountered.

Piping a stream will lock it for the duration of the pipe, preventing
any other consumer from acquiring a reader.

Errors and closures of the source and destination streams propagate
as follows:

An error in this source readable stream will abort destination,
unless preventAbort is truthy. The returned promise will be rejected
with the source's error, or with any error that occurs during
aborting the destination.

An error in destination will cancel this source readable stream,
unless preventCancel is truthy. The returned promise will be rejected
with the destination's error, or with any error that occurs during
canceling the source.

When this source readable stream closes, destination will be closed,
unless preventClose is truthy. The returned promise will be fulfilled
once this process completes, unless an error is encountered while
closing the destination, in which case it will be rejected with that
error.

If destination starts out closed or closing, this source readable
stream will be canceled, unless preventCancel is true. The returned
promise will be rejected with an error indicating piping to a closed
stream failed, or with any error that occurs during canceling the
source.

The signal option can be set to an AbortSignal to allow aborting an
ongoing pipe operation via the corresponding AbortController. In this
case, this source readable stream will be canceled, and destination
aborted, unless the respective options preventCancel or preventAbort
are set.

##### signal?

> `optional` **signal**: [`AbortSignal`](../../../abort.md#abortsignal)

***

### UnderlyingByteSource

#### Properties

##### autoAllocateChunkSize?

> `optional` **autoAllocateChunkSize**: `number`

##### cancel?

> `optional` **cancel**: [`ReadableStreamErrorCallback`](#readablestreamerrorcallback)

##### pull?

> `optional` **pull**: [`ReadableByteStreamControllerCallback`](#readablebytestreamcontrollercallback)

##### start?

> `optional` **start**: [`ReadableByteStreamControllerCallback`](#readablebytestreamcontrollercallback)

##### type

> **type**: `"bytes"`

***

### UnderlyingSink

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

#### Properties

##### abort?

> `optional` **abort**: [`UnderlyingSinkAbortCallback`](#underlyingsinkabortcallback)

##### close?

> `optional` **close**: [`UnderlyingSinkCloseCallback`](#underlyingsinkclosecallback)

##### start?

> `optional` **start**: [`UnderlyingSinkStartCallback`](#underlyingsinkstartcallback)

##### type?

> `optional` **type**: `undefined`

##### write?

> `optional` **write**: [`UnderlyingSinkWriteCallback`](#underlyingsinkwritecallback)\<`W`\>

***

### UnderlyingSinkAbortCallback()

> **UnderlyingSinkAbortCallback**(`reason?`: `any`): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### UnderlyingSinkCloseCallback()

> **UnderlyingSinkCloseCallback**(): `void` \| `PromiseLike`\<`void`\>

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### UnderlyingSinkStartCallback()

> **UnderlyingSinkStartCallback**(`controller`: [`WritableStreamDefaultController`](#writablestreamdefaultcontroller)): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `controller` | [`WritableStreamDefaultController`](#writablestreamdefaultcontroller) |

#### Returns

`any`

***

### UnderlyingSinkWriteCallback()

#### Type Parameters

| Type Parameter |
| ------ |
| `W` |

> **UnderlyingSinkWriteCallback**(`chunk`: `W`, `controller`: [`WritableStreamDefaultController`](#writablestreamdefaultcontroller)): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | `W` |
| `controller` | [`WritableStreamDefaultController`](#writablestreamdefaultcontroller) |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### UnderlyingSource

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Properties

##### cancel?

> `optional` **cancel**: [`UnderlyingSourceCancelCallback`](#underlyingsourcecancelcallback)

##### pull?

> `optional` **pull**: [`UnderlyingSourcePullCallback`](#underlyingsourcepullcallback)\<`R`\>

##### start?

> `optional` **start**: [`UnderlyingSourceStartCallback`](#underlyingsourcestartcallback)\<`R`\>

##### type?

> `optional` **type**: `undefined`

***

### UnderlyingSourceCancelCallback()

> **UnderlyingSourceCancelCallback**(`reason?`: `any`): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### UnderlyingSourcePullCallback()

#### Type Parameters

| Type Parameter |
| ------ |
| `R` |

> **UnderlyingSourcePullCallback**(`controller`: [`ReadableStreamController`](#readablestreamcontroller)\<`R`\>): `void` \| `PromiseLike`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `controller` | [`ReadableStreamController`](#readablestreamcontroller)\<`R`\> |

#### Returns

`void` \| `PromiseLike`\<`void`\>

***

### UnderlyingSourceStartCallback()

#### Type Parameters

| Type Parameter |
| ------ |
| `R` |

> **UnderlyingSourceStartCallback**(`controller`: [`ReadableStreamController`](#readablestreamcontroller)\<`R`\>): `any`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `controller` | [`ReadableStreamController`](#readablestreamcontroller)\<`R`\> |

#### Returns

`any`

***

### WritableStream

This Streams API interface provides a standard abstraction for writing
streaming data to a destination, known as a sink. This object comes with
built-in back pressure and queuing.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

#### Properties

##### locked

> `readonly` **locked**: `boolean`

#### Methods

##### abort()

> **abort**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

##### close()

> **close**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

##### getWriter()

> **getWriter**(): [`WritableStreamDefaultWriter`](#writablestreamdefaultwriter)\<`W`\>

###### Returns

[`WritableStreamDefaultWriter`](#writablestreamdefaultwriter)\<`W`\>

***

### WritableStreamDefaultController

This Streams API interface represents a controller allowing control of a
WritableStream's state. When constructing a WritableStream, the
underlying sink is given a corresponding WritableStreamDefaultController
instance to manipulate.

#### Methods

##### error()

> **error**(`e?`: `any`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `e?` | `any` |

###### Returns

`void`

***

### WritableStreamDefaultWriter

This Streams API interface is the object returned by
WritableStream.getWriter() and once created locks the < writer to the
WritableStream ensuring that no other streams can write to the underlying
sink.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `W` | `any` |

#### Properties

##### closed

> `readonly` **closed**: `Promise`\<`undefined`\>

##### desiredSize

> `readonly` **desiredSize**: `number` \| `null`

##### ready

> `readonly` **ready**: `Promise`\<`undefined`\>

#### Methods

##### abort()

> **abort**(`reason?`: `any`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`Promise`\<`void`\>

##### close()

> **close**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

##### releaseLock()

> **releaseLock**(): `void`

###### Returns

`void`

##### write()

> **write**(`chunk?`: `W`): `Promise`\<`void`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk?` | `W` |

###### Returns

`Promise`\<`void`\>

## Type Aliases

### ReadableStreamController

> **ReadableStreamController**\<`T`\> = [`ReadableStreamDefaultController`](#readablestreamdefaultcontroller)\<`T`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### ReadableStreamReader

> **ReadableStreamReader**\<`T`\> = [`ReadableStreamDefaultReader`](#readablestreamdefaultreader)\<`T`\> \| [`ReadableStreamBYOBReader`](#readablestreambyobreader)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### ReadableStreamReaderMode

> **ReadableStreamReaderMode** = `"byob"`

***

### ReadableStreamReadResult

> **ReadableStreamReadResult**\<`T`\> = [`ReadableStreamReadValueResult`](#readablestreamreadvalueresult)\<`T`\> \| [`ReadableStreamReadDoneResult`](#readablestreamreaddoneresult)\<`T`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Variables

### ByteLengthQueuingStrategy

> **ByteLengthQueuingStrategy**: \{(`init`: [`QueuingStrategyInit`](#queuingstrategyinit)): [`ByteLengthQueuingStrategy`](#bytelengthqueuingstrategy); `prototype`: [`ByteLengthQueuingStrategy`](#bytelengthqueuingstrategy); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `init` | [`QueuingStrategyInit`](#queuingstrategyinit) |

#### Returns

[`ByteLengthQueuingStrategy`](#bytelengthqueuingstrategy)

##### prototype

> **prototype**: [`ByteLengthQueuingStrategy`](#bytelengthqueuingstrategy)

***

### CountQueuingStrategy

> **CountQueuingStrategy**: \{(`init`: [`QueuingStrategyInit`](#queuingstrategyinit)): [`CountQueuingStrategy`](#countqueuingstrategy); `prototype`: [`CountQueuingStrategy`](#countqueuingstrategy); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `init` | [`QueuingStrategyInit`](#queuingstrategyinit) |

#### Returns

[`CountQueuingStrategy`](#countqueuingstrategy)

##### prototype

> **prototype**: [`CountQueuingStrategy`](#countqueuingstrategy)

***

### ReadableByteStreamController

> **ReadableByteStreamController**: \{(): [`ReadableByteStreamController`](#readablebytestreamcontroller); `prototype`: [`ReadableByteStreamController`](#readablebytestreamcontroller); \}

#### Type Declaration

#### Returns

[`ReadableByteStreamController`](#readablebytestreamcontroller)

##### prototype

> **prototype**: [`ReadableByteStreamController`](#readablebytestreamcontroller)

***

### ReadableStream

> **ReadableStream**: \{(`underlyingSource`: [`UnderlyingByteSource`](#underlyingbytesource), `strategy?`: [`QueuingStrategy`](#queuingstrategy)\<`Uint8Array`\>): [`ReadableStream`](#readablestream)\<`Uint8Array`\>; \<`R`\>(`underlyingSource?`: [`UnderlyingSource`](#underlyingsource)\<`R`\>, `strategy?`: [`QueuingStrategy`](#queuingstrategy)\<`R`\>): [`ReadableStream`](#readablestream)\<`R`\>; `prototype`: [`ReadableStream`](#readablestream); `from`: [`ReadableStream`](#readablestream)\<`T`\>; \}

#### Type Declaration

#### Call Signature

> **new ReadableStream**(`underlyingSource`: [`UnderlyingByteSource`](#underlyingbytesource), `strategy?`: [`QueuingStrategy`](#queuingstrategy)\<`Uint8Array`\>): [`ReadableStream`](#readablestream)\<`Uint8Array`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSource` | [`UnderlyingByteSource`](#underlyingbytesource) |
| `strategy?` | [`QueuingStrategy`](#queuingstrategy)\<`Uint8Array`\> |

##### Returns

[`ReadableStream`](#readablestream)\<`Uint8Array`\>

#### Call Signature

> **new ReadableStream**\<`R`\>(`underlyingSource?`: [`UnderlyingSource`](#underlyingsource)\<`R`\>, `strategy?`: [`QueuingStrategy`](#queuingstrategy)\<`R`\>): [`ReadableStream`](#readablestream)\<`R`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSource?` | [`UnderlyingSource`](#underlyingsource)\<`R`\> |
| `strategy?` | [`QueuingStrategy`](#queuingstrategy)\<`R`\> |

##### Returns

[`ReadableStream`](#readablestream)\<`R`\>

##### prototype

> **prototype**: [`ReadableStream`](#readablestream)

##### from()

> **from**\<`T`\>(`iterable`: `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>): [`ReadableStream`](#readablestream)\<`T`\>

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `iterable` | `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\> |

###### Returns

[`ReadableStream`](#readablestream)\<`T`\>

***

### ReadableStreamBYOBReader

> **ReadableStreamBYOBReader**: \{(`stream`: [`ReadableStream`](#readablestream)): [`ReadableStreamBYOBReader`](#readablestreambyobreader); `prototype`: [`ReadableStreamBYOBReader`](#readablestreambyobreader); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`ReadableStream`](#readablestream) |

#### Returns

[`ReadableStreamBYOBReader`](#readablestreambyobreader)

##### prototype

> **prototype**: [`ReadableStreamBYOBReader`](#readablestreambyobreader)

***

### ReadableStreamBYOBRequest

> **ReadableStreamBYOBRequest**: \{(): [`ReadableStreamBYOBRequest`](#readablestreambyobrequest); `prototype`: [`ReadableStreamBYOBRequest`](#readablestreambyobrequest); \}

#### Type Declaration

#### Returns

[`ReadableStreamBYOBRequest`](#readablestreambyobrequest)

##### prototype

> **prototype**: [`ReadableStreamBYOBRequest`](#readablestreambyobrequest)

***

### ReadableStreamDefaultController

> **ReadableStreamDefaultController**: \{(): [`ReadableStreamDefaultController`](#readablestreamdefaultcontroller); `prototype`: [`ReadableStreamDefaultController`](#readablestreamdefaultcontroller); \}

#### Type Declaration

#### Returns

[`ReadableStreamDefaultController`](#readablestreamdefaultcontroller)

##### prototype

> **prototype**: [`ReadableStreamDefaultController`](#readablestreamdefaultcontroller)

***

### ReadableStreamDefaultReader

> **ReadableStreamDefaultReader**: \{\<`R`\>(`stream`: [`ReadableStream`](#readablestream)\<`R`\>): [`ReadableStreamDefaultReader`](#readablestreamdefaultreader)\<`R`\>; `prototype`: [`ReadableStreamDefaultReader`](#readablestreamdefaultreader); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`ReadableStream`](#readablestream)\<`R`\> |

#### Returns

[`ReadableStreamDefaultReader`](#readablestreamdefaultreader)\<`R`\>

##### prototype

> **prototype**: [`ReadableStreamDefaultReader`](#readablestreamdefaultreader)

***

### WritableStream

> **WritableStream**: \{\<`W`\>(`underlyingSink?`: [`UnderlyingSink`](#underlyingsink)\<`W`\>, `strategy?`: [`QueuingStrategy`](#queuingstrategy)\<`W`\>): [`WritableStream`](#writablestream)\<`W`\>; `prototype`: [`WritableStream`](#writablestream); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `underlyingSink?` | [`UnderlyingSink`](#underlyingsink)\<`W`\> |
| `strategy?` | [`QueuingStrategy`](#queuingstrategy)\<`W`\> |

#### Returns

[`WritableStream`](#writablestream)\<`W`\>

##### prototype

> **prototype**: [`WritableStream`](#writablestream)

***

### WritableStreamDefaultController

> **WritableStreamDefaultController**: \{(): [`WritableStreamDefaultController`](#writablestreamdefaultcontroller); `prototype`: [`WritableStreamDefaultController`](#writablestreamdefaultcontroller); \}

#### Type Declaration

#### Returns

[`WritableStreamDefaultController`](#writablestreamdefaultcontroller)

##### prototype

> **prototype**: [`WritableStreamDefaultController`](#writablestreamdefaultcontroller)

***

### WritableStreamDefaultWriter

> **WritableStreamDefaultWriter**: \{\<`W`\>(`stream`: [`WritableStream`](#writablestream)\<`W`\>): [`WritableStreamDefaultWriter`](#writablestreamdefaultwriter)\<`W`\>; `prototype`: [`WritableStreamDefaultWriter`](#writablestreamdefaultwriter); \}

#### Type Declaration

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`WritableStream`](#writablestream)\<`W`\> |

#### Returns

[`WritableStreamDefaultWriter`](#writablestreamdefaultwriter)\<`W`\>

##### prototype

> **prototype**: [`WritableStreamDefaultWriter`](#writablestreamdefaultwriter)
