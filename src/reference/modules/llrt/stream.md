[@caido/quickjs-types](../index.md) / [llrt/stream](stream.md) / stream

# stream

## Classes

### DefaultDuplexStream

#### Extends

- [`DefaultReadableStream`](stream.md#defaultreadablestream)

#### Extended by

- [`Socket`](net.md#socket)

#### Implements

- [`DefaultWritableStream`](stream.md#defaultwritablestream)

#### Constructors

##### new DefaultDuplexStream()

> **new DefaultDuplexStream**(): [`DefaultDuplexStream`](stream.md#defaultduplexstream)

###### Returns

[`DefaultDuplexStream`](stream.md#defaultduplexstream)

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`constructor`](stream.md#constructors-1)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls `readable.destroy()`.

###### Returns

`void`

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`[dispose]`](stream.md#dispose-1)

##### addListener()

###### Call Signature

> **addListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`addListener`](stream.md#addlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`addListener`](stream.md#addlistener-1)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`addListener`](stream.md#addlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`addListener`](stream.md#addlistener-1)

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`addListener`](stream.md#addlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`addListener`](stream.md#addlistener-1)

###### Call Signature

> **addListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`addListener`](stream.md#addlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`addListener`](stream.md#addlistener-1)

##### destroy()

> **destroy**(`error`?: `Error`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event. After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error`? | `Error` | Error which will be passed as payload in `'error'` event |

###### Returns

`this`

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`destroy`](stream.md#destroy-1)

##### emit()

###### Call Signature

> **emit**(`event`: [`EventKey`](dom-events.md#eventkey), ...`args`: `any`[]): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

```js
import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`emit`](stream.md#emit-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`emit`](stream.md#emit-1)

###### Call Signature

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`emit`](stream.md#emit-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`emit`](stream.md#emit-1)

###### Call Signature

> **emit**(`event`: `"error"`, `err`: `Error`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

###### Returns

`boolean`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`emit`](stream.md#emit-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`emit`](stream.md#emit-1)

###### Call Signature

> **emit**(`event`: `"finish"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |

###### Returns

`boolean`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`emit`](stream.md#emit-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`emit`](stream.md#emit-1)

##### end()

> **end**(): `this`

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`.

Calling the [write](stream.md#write) method after calling [end](stream.md#end) will raise an error.

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`end`](stream.md#end-1)

##### eventNames()

> **eventNames**(): [`EventKey`][dom-events.md#eventkey]()

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

[`EventKey`][dom-events.md#eventkey]()

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`eventNames`](stream.md#eventnames-2)

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`eventNames`](stream.md#eventnames-1)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`off`](stream.md#off-2)

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`off`](stream.md#off-1)

##### on()

###### Call Signature

> **on**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`on`](stream.md#on-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`on`](stream.md#on-1)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`on`](stream.md#on-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`on`](stream.md#on-1)

###### Call Signature

> **on**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`on`](stream.md#on-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`on`](stream.md#on-1)

###### Call Signature

> **on**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`on`](stream.md#on-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`on`](stream.md#on-1)

##### once()

###### Call Signature

> **once**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`once`](stream.md#once-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`once`](stream.md#once-1)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`once`](stream.md#once-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`once`](stream.md#once-1)

###### Call Signature

> **once**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`once`](stream.md#once-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`once`](stream.md#once-1)

###### Call Signature

> **once**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`once`](stream.md#once-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`once`](stream.md#once-1)

##### prependListener()

###### Call Signature

> **prependListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependListener`](stream.md#prependlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependListener`](stream.md#prependlistener-1)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependListener`](stream.md#prependlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependListener`](stream.md#prependlistener-1)

###### Call Signature

> **prependListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependListener`](stream.md#prependlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependListener`](stream.md#prependlistener-1)

###### Call Signature

> **prependListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependListener`](stream.md#prependlistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependListener`](stream.md#prependlistener-1)

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependOnceListener`](stream.md#prependoncelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependOnceListener`](stream.md#prependoncelistener-1)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependOnceListener`](stream.md#prependoncelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependOnceListener`](stream.md#prependoncelistener-1)

###### Call Signature

> **prependOnceListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependOnceListener`](stream.md#prependoncelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependOnceListener`](stream.md#prependoncelistener-1)

###### Call Signature

> **prependOnceListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`prependOnceListener`](stream.md#prependoncelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`prependOnceListener`](stream.md#prependoncelistener-1)

##### read()

> **read**(`size`?: `number`): `null` \| [`Buffer`](buffer.md#buffer)

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](stream.md#read-2) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size`? | `number` | Optional argument to specify how much data to read. |

###### Returns

`null` \| [`Buffer`](buffer.md#buffer)

###### Inherited from

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`read`](stream.md#read-1)

##### removeListener()

###### Call Signature

> **removeListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the time of emitting are called in order.
This implies that any `removeListener()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from `emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`removeListener`](stream.md#removelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`removeListener`](stream.md#removelistener-1)

###### Call Signature

> **removeListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`removeListener`](stream.md#removelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`removeListener`](stream.md#removelistener-1)

###### Call Signature

> **removeListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`removeListener`](stream.md#removelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`removeListener`](stream.md#removelistener-1)

###### Call Signature

> **removeListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`removeListener`](stream.md#removelistener-2)

###### Overrides

[`DefaultReadableStream`](stream.md#defaultreadablestream).[`removeListener`](stream.md#removelistener-1)

##### write()

> **write**(`chunk`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer), `callback`?: (`error`?: `null` \| `Error`) => `void`): `void`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is usually called asynchronously and before `'error'`
is emitted.

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chunk` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | Optional data to write. `chunk` must be a {string}, {Buffer}, {TypedArray} or {DataView}. |
| `callback`? | (`error`?: `null` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

###### Returns

`void`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

###### Since

v0.9.4

###### Implementation of

[`DefaultWritableStream`](stream.md#defaultwritablestream).[`write`](stream.md#write-1)

***

### DefaultReadableStream

#### Extends

- [`ReadableStreamInner`](stream.md#readablestreaminner)

#### Extended by

- [`DefaultDuplexStream`](stream.md#defaultduplexstream)

#### Constructors

##### new DefaultReadableStream()

> **new DefaultReadableStream**(): [`DefaultReadableStream`](stream.md#defaultreadablestream)

###### Returns

[`DefaultReadableStream`](stream.md#defaultreadablestream)

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`constructor`](stream.md#constructors-3)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls `readable.destroy()`.

###### Returns

`void`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`[dispose]`](stream.md#dispose-2)

##### addListener()

###### Call Signature

> **addListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

###### Call Signature

> **addListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

###### Call Signature

> **addListener**(`event`: `"end"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

###### Call Signature

> **addListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`addListener`](stream.md#addlistener-3)

##### destroy()

> **destroy**(`error`?: `Error`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event. After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error`? | `Error` | Error which will be passed as payload in `'error'` event |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`destroy`](stream.md#destroy-2)

##### emit()

###### Call Signature

> **emit**(`event`: [`EventKey`](dom-events.md#eventkey), ...`args`: `any`[]): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

```js
import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

###### Call Signature

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

###### Call Signature

> **emit**(`event`: `"data"`, `chunk`: [`Buffer`](buffer.md#buffer)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `chunk` | [`Buffer`](buffer.md#buffer) |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

###### Call Signature

> **emit**(`event`: `"end"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

###### Call Signature

> **emit**(`event`: `"error"`, `err`: `Error`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

###### Call Signature

> **emit**(`event`: `"readable"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |

###### Returns

`boolean`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`emit`](stream.md#emit-3)

##### eventNames()

> **eventNames**(): [`EventKey`][dom-events.md#eventkey]()

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

[`EventKey`][dom-events.md#eventkey]()

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`eventNames`](stream.md#eventnames-3)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`off`](stream.md#off-3)

##### on()

###### Call Signature

> **on**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

###### Call Signature

> **on**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

###### Call Signature

> **on**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

###### Call Signature

> **on**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

###### Call Signature

> **on**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`on`](stream.md#on-3)

##### once()

###### Call Signature

> **once**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

###### Call Signature

> **once**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

###### Call Signature

> **once**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

###### Call Signature

> **once**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

###### Call Signature

> **once**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`once`](stream.md#once-3)

##### prependListener()

###### Call Signature

> **prependListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

###### Call Signature

> **prependListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

###### Call Signature

> **prependListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

###### Call Signature

> **prependListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

###### Call Signature

> **prependListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependListener`](stream.md#prependlistener-3)

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

###### Call Signature

> **prependOnceListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

###### Call Signature

> **prependOnceListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

###### Call Signature

> **prependOnceListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

###### Call Signature

> **prependOnceListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-3)

##### read()

> **read**(`size`?: `number`): `null` \| [`Buffer`](buffer.md#buffer)

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](stream.md#read-2) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size`? | `number` | Optional argument to specify how much data to read. |

###### Returns

`null` \| [`Buffer`](buffer.md#buffer)

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`read`](stream.md#read-2)

##### removeListener()

###### Call Signature

> **removeListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the time of emitting are called in order.
This implies that any `removeListener()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from `emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

###### Call Signature

> **removeListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

###### Call Signature

> **removeListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

###### Call Signature

> **removeListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

###### Call Signature

> **removeListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

###### Call Signature

> **removeListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`ReadableStreamInner`](stream.md#readablestreaminner).[`removeListener`](stream.md#removelistener-3)

***

### DefaultWritableStream

#### Extends

- [`WritableStreamInner`](stream.md#writablestreaminner)

#### Constructors

##### new DefaultWritableStream()

> **new DefaultWritableStream**(): [`DefaultWritableStream`](stream.md#defaultwritablestream)

###### Returns

[`DefaultWritableStream`](stream.md#defaultwritablestream)

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`constructor`](stream.md#constructors-4)

#### Methods

##### addListener()

###### Call Signature

> **addListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`addListener`](stream.md#addlistener-4)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`addListener`](stream.md#addlistener-4)

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`addListener`](stream.md#addlistener-4)

###### Call Signature

> **addListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`addListener`](stream.md#addlistener-4)

##### emit()

###### Call Signature

> **emit**(`event`: [`EventKey`](dom-events.md#eventkey), ...`args`: `any`[]): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

```js
import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`emit`](stream.md#emit-4)

###### Call Signature

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`emit`](stream.md#emit-4)

###### Call Signature

> **emit**(`event`: `"error"`, `err`: `Error`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

###### Returns

`boolean`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`emit`](stream.md#emit-4)

###### Call Signature

> **emit**(`event`: `"finish"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |

###### Returns

`boolean`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`emit`](stream.md#emit-4)

##### end()

> **end**(): `this`

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`.

Calling the [write](stream.md#write-2) method after calling [end](stream.md#end-2) will raise an error.

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`end`](stream.md#end-2)

##### eventNames()

> **eventNames**(): [`EventKey`][dom-events.md#eventkey]()

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

[`EventKey`][dom-events.md#eventkey]()

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`eventNames`](stream.md#eventnames-4)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`off`](stream.md#off-4)

##### on()

###### Call Signature

> **on**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`on`](stream.md#on-4)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`on`](stream.md#on-4)

###### Call Signature

> **on**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`on`](stream.md#on-4)

###### Call Signature

> **on**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`on`](stream.md#on-4)

##### once()

###### Call Signature

> **once**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`once`](stream.md#once-4)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`once`](stream.md#once-4)

###### Call Signature

> **once**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`once`](stream.md#once-4)

###### Call Signature

> **once**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`once`](stream.md#once-4)

##### prependListener()

###### Call Signature

> **prependListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependListener`](stream.md#prependlistener-4)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependListener`](stream.md#prependlistener-4)

###### Call Signature

> **prependListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependListener`](stream.md#prependlistener-4)

###### Call Signature

> **prependListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependListener`](stream.md#prependlistener-4)

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-4)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-4)

###### Call Signature

> **prependOnceListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-4)

###### Call Signature

> **prependOnceListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`prependOnceListener`](stream.md#prependoncelistener-4)

##### removeListener()

###### Call Signature

> **removeListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the time of emitting are called in order.
This implies that any `removeListener()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from `emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`removeListener`](stream.md#removelistener-4)

###### Call Signature

> **removeListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`removeListener`](stream.md#removelistener-4)

###### Call Signature

> **removeListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`removeListener`](stream.md#removelistener-4)

###### Call Signature

> **removeListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`removeListener`](stream.md#removelistener-4)

##### write()

> **write**(`chunk`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer), `callback`?: (`error`?: `null` \| `Error`) => `void`): `void`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is usually called asynchronously and before `'error'`
is emitted.

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chunk` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | Optional data to write. `chunk` must be a {string}, {Buffer}, {TypedArray} or {DataView}. |
| `callback`? | (`error`?: `null` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

###### Returns

`void`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

###### Since

v0.9.4

###### Inherited from

[`WritableStreamInner`](stream.md#writablestreaminner).[`write`](stream.md#write-2)

***

### ReadableStreamInner

#### Extends

- [`EventEmitter`](globals/index.md#eventemittert)

#### Extended by

- [`DefaultReadableStream`](stream.md#defaultreadablestream)

#### Implements

- [`ReadableStream`](globals/namespaces/QuickJS.md#readablestream)

#### Constructors

##### new ReadableStreamInner()

> **new ReadableStreamInner**(): [`ReadableStreamInner`](stream.md#readablestreaminner)

###### Returns

[`ReadableStreamInner`](stream.md#readablestreaminner)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`constructor`](globals/index.md#constructors)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls `readable.destroy()`.

###### Returns

`void`

##### addListener()

###### Call Signature

> **addListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`addListener`](globals/namespaces/QuickJS.md#addlistener)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`addListener`](globals/index.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"end"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. readable

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.addListener`

###### Overrides

`EventEmitter.addListener`

##### destroy()

> **destroy**(`error`?: `Error`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event. After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error`? | `Error` | Error which will be passed as payload in `'error'` event |

###### Returns

`this`

##### emit()

###### Call Signature

> **emit**(`event`: [`EventKey`](dom-events.md#eventkey), ...`args`: `any`[]): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

```js
import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`emit`](globals/namespaces/QuickJS.md#emit)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`emit`](globals/index.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.ReadableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"data"`, `chunk`: [`Buffer`](buffer.md#buffer)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `chunk` | [`Buffer`](buffer.md#buffer) |

###### Returns

`boolean`

###### Implementation of

`QuickJS.ReadableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"end"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.ReadableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"error"`, `err`: `Error`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.ReadableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"readable"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.ReadableStream.emit`

###### Overrides

`EventEmitter.emit`

##### eventNames()

> **eventNames**(): [`EventKey`][dom-events.md#eventkey]()

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

[`EventKey`][dom-events.md#eventkey]()

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`eventNames`](globals/namespaces/QuickJS.md#eventnames)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`eventNames`](globals/index.md#eventnames)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`off`](globals/namespaces/QuickJS.md#off)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`off`](globals/index.md#off)

##### on()

###### Call Signature

> **on**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`on`](globals/namespaces/QuickJS.md#on)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`on`](globals/index.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.on`

###### Overrides

`EventEmitter.on`

##### once()

###### Call Signature

> **once**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`once`](globals/namespaces/QuickJS.md#once)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`once`](globals/index.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.once`

###### Overrides

`EventEmitter.once`

##### prependListener()

###### Call Signature

> **prependListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`prependListener`](globals/namespaces/QuickJS.md#prependlistener)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependListener`](globals/index.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`prependOnceListener`](globals/namespaces/QuickJS.md#prependoncelistener)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependOnceListener`](globals/index.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

##### read()

> **read**(`size`?: `number`): `null` \| [`Buffer`](buffer.md#buffer)

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](stream.md#read-2) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `size`? | `number` | Optional argument to specify how much data to read. |

###### Returns

`null` \| [`Buffer`](buffer.md#buffer)

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`read`](globals/namespaces/QuickJS.md#read)

##### removeListener()

###### Call Signature

> **removeListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the time of emitting are called in order.
This implies that any `removeListener()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from `emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`ReadableStream`](globals/namespaces/QuickJS.md#readablestream).[`removeListener`](globals/namespaces/QuickJS.md#removelistener)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`removeListener`](globals/index.md#removelistener)

###### Call Signature

> **removeListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"data"`, `listener`: (`chunk`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`chunk`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"readable"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"readable"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.ReadableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

***

### WritableStreamInner

#### Extends

- [`EventEmitter`](globals/index.md#eventemittert)

#### Extended by

- [`DefaultWritableStream`](stream.md#defaultwritablestream)

#### Implements

- [`WritableStream`](globals/namespaces/QuickJS.md#writablestream)

#### Constructors

##### new WritableStreamInner()

> **new WritableStreamInner**(): [`WritableStreamInner`](stream.md#writablestreaminner)

###### Returns

[`WritableStreamInner`](stream.md#writablestreaminner)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`constructor`](globals/index.md#constructors)

#### Methods

##### addListener()

###### Call Signature

> **addListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`addListener`](globals/namespaces/QuickJS.md#addlistener-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`addListener`](globals/index.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.addListener`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

Event emitter
The defined events on documents including:
1. close
2. error
3. finish

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.addListener`

###### Overrides

`EventEmitter.addListener`

##### emit()

###### Call Signature

> **emit**(`event`: [`EventKey`](dom-events.md#eventkey), ...`args`: `any`[]): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

```js
import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`emit`](globals/namespaces/QuickJS.md#emit-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`emit`](globals/index.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.WritableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"error"`, `err`: `Error`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `err` | `Error` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.WritableStream.emit`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"finish"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |

###### Returns

`boolean`

###### Implementation of

`QuickJS.WritableStream.emit`

###### Overrides

`EventEmitter.emit`

##### end()

> **end**(): `this`

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`.

Calling the [write](stream.md#write-2) method after calling [end](stream.md#end-2) will raise an error.

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`end`](globals/namespaces/QuickJS.md#end)

##### eventNames()

> **eventNames**(): [`EventKey`][dom-events.md#eventkey]()

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

[`EventKey`][dom-events.md#eventkey]()

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`eventNames`](globals/namespaces/QuickJS.md#eventnames-1)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`eventNames`](globals/index.md#eventnames)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`off`](globals/namespaces/QuickJS.md#off-1)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`off`](globals/index.md#off)

##### on()

###### Call Signature

> **on**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`on`](globals/namespaces/QuickJS.md#on-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`on`](globals/index.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.on`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.on`

###### Overrides

`EventEmitter.on`

##### once()

###### Call Signature

> **once**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`once`](globals/namespaces/QuickJS.md#once-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`once`](globals/index.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.once`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.once`

###### Overrides

`EventEmitter.once`

##### prependListener()

###### Call Signature

> **prependListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`prependListener`](globals/namespaces/QuickJS.md#prependlistener-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependListener`](globals/index.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependListener`

###### Overrides

`EventEmitter.prependListener`

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`prependOnceListener`](globals/namespaces/QuickJS.md#prependoncelistener-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependOnceListener`](globals/index.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.prependOnceListener`

###### Overrides

`EventEmitter.prependOnceListener`

##### removeListener()

###### Call Signature

> **removeListener**(`event`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the time of emitting are called in order.
This implies that any `removeListener()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from `emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`removeListener`](globals/namespaces/QuickJS.md#removelistener-1)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`removeListener`](globals/index.md#removelistener)

###### Call Signature

> **removeListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

###### Call Signature

> **removeListener**(`event`: `"finish"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"finish"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Implementation of

`QuickJS.WritableStream.removeListener`

###### Overrides

`EventEmitter.removeListener`

##### write()

> **write**(`chunk`: `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer), `callback`?: (`error`?: `null` \| `Error`) => `void`): `void`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is usually called asynchronously and before `'error'`
is emitted.

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chunk` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| [`ArrayBufferView`](globals/namespaces/QuickJS.md#arraybufferview) \| [`Buffer`](buffer.md#buffer) | Optional data to write. `chunk` must be a {string}, {Buffer}, {TypedArray} or {DataView}. |
| `callback`? | (`error`?: `null` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

###### Returns

`void`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

###### Since

v0.9.4

###### Implementation of

[`WritableStream`](globals/namespaces/QuickJS.md#writablestream).[`write`](globals/namespaces/QuickJS.md#write)
