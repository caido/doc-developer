[@caido/quickjs-types](../../../index.md) / [llrt/globals](../index.md) / QuickJS

# QuickJS

## Interfaces

### ReadableStream

#### Extends

- [`EventEmitter`](../../events.md#eventemitter)

#### Methods

##### addListener()

> **addListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.on(eventName, listener)`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`addListener`](../../events.md#addlistener)

##### emit()

> **emit**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), ...`args`: [`AnyRest`](../../events.md#anyrest)): `void`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| ...`args` | [`AnyRest`](../../events.md#anyrest) |

###### Returns

`void`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`emit`](../../events.md#emit)

##### eventNames()

> **eventNames**(): [`EventKey`](../../dom-events.md#eventkey)[]

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

[`EventKey`](../../dom-events.md#eventkey)[]

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`eventNames`](../../events.md#eventnames)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`off`](../../events.md#off)

##### on()

> **on**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`on`](../../events.md#on)

##### once()

> **once**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`once`](../../events.md#once)

##### prependListener()

> **prependListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`prependListener`](../../events.md#prependlistener)

##### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`prependOnceListener`](../../events.md#prependoncelistener)

##### read()

> **read**(`size?`: `number`): [`Buffer`](../../buffer.md#buffer) \| `null`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `size?` | `number` |

###### Returns

[`Buffer`](../../buffer.md#buffer) \| `null`

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`removeListener`](../../events.md#removelistener)

***

### WritableStream

#### Extends

- [`EventEmitter`](../../events.md#eventemitter)

#### Methods

##### addListener()

> **addListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.on(eventName, listener)`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`addListener`](../../events.md#addlistener)

##### emit()

> **emit**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), ...`args`: [`AnyRest`](../../events.md#anyrest)): `void`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| ...`args` | [`AnyRest`](../../events.md#anyrest) |

###### Returns

`void`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`emit`](../../events.md#emit)

##### end()

> **end**(): `this`

###### Returns

`this`

##### eventNames()

> **eventNames**(): [`EventKey`](../../dom-events.md#eventkey)[]

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

[`EventKey`](../../dom-events.md#eventkey)[]

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`eventNames`](../../events.md#eventnames)

##### off()

> **off**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`off`](../../events.md#off)

##### on()

> **on**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`on`](../../events.md#on)

##### once()

> **once**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`once`](../../events.md#once)

##### prependListener()

> **prependListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`prependListener`](../../events.md#prependlistener)

##### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`prependOnceListener`](../../events.md#prependoncelistener)

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`EventKey`](../../dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`EventKey`](../../dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](../../events.md#eventemitter).[`removeListener`](../../events.md#removelistener)

##### write()

> **write**(`chunk`: `string` \| [`ArrayBufferView`](#arraybufferview) \| [`Buffer`](../../buffer.md#buffer) \| `ArrayBuffer` \| `SharedArrayBuffer`, `callback?`: (`err?`: `Error` \| `null`) => `void`): `void`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `chunk` | `string` \| [`ArrayBufferView`](#arraybufferview) \| [`Buffer`](../../buffer.md#buffer) \| `ArrayBuffer` \| `SharedArrayBuffer` |
| `callback?` | (`err?`: `Error` \| `null`) => `void` |

###### Returns

`void`

## Type Aliases

### ArrayBufferView

> **ArrayBufferView** = [`TypedArray`](#typedarray) \| `DataView`

***

### Platform

> **Platform** = `"darwin"` \| `"linux"` \| `"win32"`

***

### Signals

> **Signals** = `"SIGABRT"` \| `"SIGALRM"` \| `"SIGFPE"` \| `"SIGHUP"` \| `"SIGILL"` \| `"SIGINT"` \| `"SIGKILL"` \| `"SIGPIPE"` \| `"SIGQUIT"` \| `"SIGSEGV"` \| `"SIGTERM"`

***

### TypedArray

> **TypedArray** = `Uint8Array` \| `Uint8ClampedArray` \| `Uint16Array` \| `Uint32Array` \| `Int8Array` \| `Int16Array` \| `Int32Array` \| `BigUint64Array` \| `BigInt64Array` \| `Float32Array` \| `Float64Array`
