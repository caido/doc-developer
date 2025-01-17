[@caido/quickjs-types](../../index.md) / llrt/globals

# llrt/globals

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [QuickJS](namespaces/QuickJS.md) | - |

## Classes

### EventEmitter\<T\>

#### Extended by

- [`ChildProcess`](../child_process.md#childprocess)
- [`Server`](../net.md#server)
- [`ReadableStreamInner`](../stream.md#readablestreaminner)
- [`WritableStreamInner`](../stream.md#writablestreaminner)
- [`ReadableStream`](namespaces/QuickJS.md#readablestream)
- [`WritableStream`](namespaces/QuickJS.md#writablestream)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EventMap`](index.md#eventmapt)\<`T`\> | [`DefaultEventMap`](index.md#defaulteventmap) |

#### Constructors

##### new EventEmitter()

> **new EventEmitter**\<`T`\>(): [`EventEmitter`](index.md#eventemittert)\<`T`\>

###### Returns

[`EventEmitter`](index.md#eventemittert)\<`T`\>

#### Methods

##### addListener()

> **addListener**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

Alias for `emitter.on(eventName, listener)`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> |

###### Returns

`this`

##### emit()

> **emit**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, ...`args`: [`Args`](index.md#argsk-t)\<`K`, `T`\>): `void`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> |
| ...`args` | [`Args`](index.md#argsk-t)\<`K`, `T`\> |

###### Returns

`void`

##### eventNames()

> **eventNames**(): [`EventKey`](../dom-events.md#eventkey) & [`Key2`](index.md#key2k-t)\<`unknown`, `T`\>[]

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

[`EventKey`](../dom-events.md#eventkey) & [`Key2`](index.md#key2k-t)\<`unknown`, `T`\>[]

##### off()

> **off**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

Alias for `emitter.removeListener()`.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> |

###### Returns

`this`

##### on()

> **on**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> | The name of the event. |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> | The callback function |

###### Returns

`this`

##### once()

> **once**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> | The name of the event. |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> | The callback function |

###### Returns

`this`

###### Since

v0.3.0

##### prependListener()

> **prependListener**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> | The name of the event. |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> | The callback function |

###### Returns

`this`

##### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> | The name of the event. |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> | The callback function |

###### Returns

`this`

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`Key`](index.md#keyk-t)\<`K`, `T`\>, `listener`: [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\>): `this`

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
| `eventName` | [`Key`](index.md#keyk-t)\<`K`, `T`\> |
| `listener` | [`Listener`](index.md#listenerk-t-f)\<`K`, `T`, (...`args`: `any`[]) => `void`\> |

###### Returns

`this`

## Type Aliases

### AnyRest

> **AnyRest**: \[`any`[]\]

***

### Args\<K, T\>

> **Args**\<`K`, `T`\>: `T` *extends* [`DefaultEventMap`](index.md#defaulteventmap) ? [`AnyRest`](index.md#anyrest) : `K` *extends* keyof `T` ? `T`\[`K`\] : `never`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `T` |

***

### DefaultEventMap

> **DefaultEventMap**: \[`never`\]

***

### EventMap\<T\>

> **EventMap**\<`T`\>: `Record`\<keyof `T`, `any`[]\> \| [`DefaultEventMap`](index.md#defaulteventmap)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### Key\<K, T\>

> **Key**\<`K`, `T`\>: `T` *extends* [`DefaultEventMap`](index.md#defaulteventmap) ? [`EventKey`](../dom-events.md#eventkey) : `K` \| keyof `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `T` |

***

### Key2\<K, T\>

> **Key2**\<`K`, `T`\>: `T` *extends* [`DefaultEventMap`](index.md#defaulteventmap) ? [`EventKey`](../dom-events.md#eventkey) : `K` & keyof `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `T` |

***

### Listener\<K, T, F\>

> **Listener**\<`K`, `T`, `F`\>: `T` *extends* [`DefaultEventMap`](index.md#defaulteventmap) ? `F` : `K` *extends* keyof `T` ? `T`\[`K`\] *extends* `unknown`[] ? (...`args`: `T`\[`K`\]) => `void` : `never` : `never`

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `T` |
| `F` |
