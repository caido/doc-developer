[@caido/quickjs-types](../index.md) / llrt/child\_process

# llrt/child\_process

## Classes

### ChildProcess

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](child_process.md#spawn) method to create instances of `ChildProcess`.

#### Extends

- [`EventEmitter`](globals/index.md#eventemittert)

#### Extended by

- [`ChildProcessWithoutNullStreams`](child_process.md#childprocesswithoutnullstreams)
- [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)

#### Constructors

##### new ChildProcess()

> **new ChildProcess**(): [`ChildProcess`](child_process.md#childprocess)

###### Returns

[`ChildProcess`](child_process.md#childprocess)

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`constructor`](globals/index.md#constructors)

#### Properties

##### pid?

> `readonly` `optional` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

##### stderr

> **stderr**: `null` \| [`DefaultReadableStream`](stream.md#defaultreadablestream)

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` or `undefined` if the child process could not be successfully spawned.

##### stdin

> **stdin**: `null` \| [`DefaultWritableStream`](stream.md#defaultwritablestream)

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `null` or `undefined` if the child process could not be successfully spawned.

##### stdout

> **stdout**: `null` \| [`DefaultReadableStream`](stream.md#defaultreadablestream)

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
const { spawn } = require('child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` or `undefined` if the child process could not be successfully spawned.

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls [ChildProcess.kill](child_process.md#kill) with `'SIGTERM'`.

###### Returns

`void`

##### addListener()

###### Call Signature

> **addListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`addListener`](globals/index.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

##### emit()

###### Call Signature

> **emit**(`event`: `string` \| `symbol`, ...`args`: `any`[]): `boolean`

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
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`emit`](globals/index.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

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

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"exit"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Overrides

`EventEmitter.emit`

##### eventNames()

> **eventNames**(): [`EventKey`](dom-events.md#eventkey)[]

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

[`EventKey`](dom-events.md#eventkey)[]

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`eventNames`](globals/index.md#eventnames)

##### kill()

> **kill**(`signal`?: `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
```

The `ChildProcess` object may emit an `'error'` event if the signal
cannot be delivered. Sending a signal to a child process that has already exited
is not an error but may have unforeseen consequences. Specifically, if the
process identifier (PID) has been reassigned to another process, the signal will
be delivered to that process instead which can have unexpected results.

While the function is called `kill`, the signal delivered to the child process
may not actually terminate the process.

See [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for reference.

On Windows, where POSIX signals do not exist, the `signal` argument will be
ignored, and the process will be killed forcefully and abruptly (similar to `'SIGKILL'`).
See `Signal Events` for more details.

On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the `shell` option of `ChildProcess`:

```js
'use strict';
const { spawn } = require('child_process');

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() => {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `signal`? | `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

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

[`EventEmitter`](globals/index.md#eventemittert).[`off`](globals/index.md#off)

##### on()

###### Call Signature

> **on**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`on`](globals/index.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

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

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.on`

##### once()

###### Call Signature

> **once**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`once`](globals/index.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

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

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.once`

##### prependListener()

###### Call Signature

> **prependListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependListener`](globals/index.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

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

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.prependListener`

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`prependOnceListener`](globals/index.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

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

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.prependOnceListener`

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`EventEmitter`](globals/index.md#eventemittert).[`removeListener`](globals/index.md#removelistener)

## Interfaces

### ChildProcessByStdio\<I, O, E\>

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](child_process.md#spawn) method to create instances of `ChildProcess`.

#### Extends

- [`ChildProcess`](child_process.md#childprocess)

#### Type Parameters

| Type Parameter |
| ------ |
| `I` *extends* `null` \| [`DefaultWritableStream`](stream.md#defaultwritablestream) |
| `O` *extends* `null` \| [`DefaultReadableStream`](stream.md#defaultreadablestream) |
| `E` *extends* `null` \| [`DefaultReadableStream`](stream.md#defaultreadablestream) |

#### Properties

##### pid?

> `readonly` `optional` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`pid`](child_process.md#pid)

##### stderr

> **stderr**: `E`

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stderr`](child_process.md#stderr)

##### stdin

> **stdin**: `I`

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stdin`](child_process.md#stdin)

##### stdout

> **stdout**: `O`

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
const { spawn } = require('child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stdout`](child_process.md#stdout)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls [ChildProcess.kill](child_process.md#kill) with `'SIGTERM'`.

###### Returns

`void`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`[dispose]`](child_process.md#dispose)

##### addListener()

###### Call Signature

> **addListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

##### emit()

###### Call Signature

> **emit**(`event`: `string` \| `symbol`, ...`args`: `any`[]): `boolean`

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
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

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

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

###### Call Signature

> **emit**(`event`: `"exit"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

##### eventNames()

> **eventNames**(): [`EventKey`](dom-events.md#eventkey)[]

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

[`EventKey`](dom-events.md#eventkey)[]

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`eventNames`](child_process.md#eventnames)

##### kill()

> **kill**(`signal`?: `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
```

The `ChildProcess` object may emit an `'error'` event if the signal
cannot be delivered. Sending a signal to a child process that has already exited
is not an error but may have unforeseen consequences. Specifically, if the
process identifier (PID) has been reassigned to another process, the signal will
be delivered to that process instead which can have unexpected results.

While the function is called `kill`, the signal delivered to the child process
may not actually terminate the process.

See [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for reference.

On Windows, where POSIX signals do not exist, the `signal` argument will be
ignored, and the process will be killed forcefully and abruptly (similar to `'SIGKILL'`).
See `Signal Events` for more details.

On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the `shell` option of `ChildProcess`:

```js
'use strict';
const { spawn } = require('child_process');

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() => {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `signal`? | `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`kill`](child_process.md#kill)

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

[`ChildProcess`](child_process.md#childprocess).[`off`](child_process.md#off)

##### on()

###### Call Signature

> **on**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

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

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

###### Call Signature

> **on**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

##### once()

###### Call Signature

> **once**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

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

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

###### Call Signature

> **once**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

##### prependListener()

###### Call Signature

> **prependListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

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

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

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

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`removeListener`](child_process.md#removelistener)

***

### ChildProcessWithoutNullStreams

Instances of the `ChildProcess` represent spawned child processes.

Instances of `ChildProcess` are not intended to be created directly. Rather,
use the [spawn](child_process.md#spawn) method to create instances of `ChildProcess`.

#### Extends

- [`ChildProcess`](child_process.md#childprocess)

#### Properties

##### pid?

> `readonly` `optional` **pid**: `number`

Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is `undefined` and `error` is
emitted.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
```

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`pid`](child_process.md#pid)

##### stderr

> **stderr**: [`DefaultReadableStream`](stream.md#defaultreadablestream)

A `Readable Stream` that represents the child process's `stderr`.

If the child was spawned with `stdio[2]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stderr` is an alias for `subprocess.stdio[2]`. Both properties will
refer to the same value.

The `subprocess.stderr` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stderr`](child_process.md#stderr)

##### stdin

> **stdin**: [`DefaultWritableStream`](stream.md#defaultwritablestream)

A `Writable Stream` that represents the child process's `stdin`.

If a child process waits to read all of its input, the child will not continue
until this stream has been closed via `end()`.

If the child was spawned with `stdio[0]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdin` is an alias for `subprocess.stdio[0]`. Both properties will
refer to the same value.

The `subprocess.stdin` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stdin`](child_process.md#stdin)

##### stdout

> **stdout**: [`DefaultReadableStream`](stream.md#defaultreadablestream)

A `Readable Stream` that represents the child process's `stdout`.

If the child was spawned with `stdio[1]` set to anything other than `'pipe'`,
then this will be `null`.

`subprocess.stdout` is an alias for `subprocess.stdio[1]`. Both properties will
refer to the same value.

```js
const { spawn } = require('child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) => {
  console.log(`Received chunk ${data}`);
});
```

The `subprocess.stdout` property can be `null` or `undefined` if the child process could not be successfully spawned.

###### Overrides

[`ChildProcess`](child_process.md#childprocess).[`stdout`](child_process.md#stdout)

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls [ChildProcess.kill](child_process.md#kill) with `'SIGTERM'`.

###### Returns

`void`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`[dispose]`](child_process.md#dispose)

##### addListener()

###### Call Signature

> **addListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

events.EventEmitter
1. close
2. error
3. exit

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`addListener`](child_process.md#addlistener)

##### emit()

###### Call Signature

> **emit**(`event`: `string` \| `symbol`, ...`args`: `any`[]): `boolean`

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
| `event` | `string` \| `symbol` |
| ...`args` | `any`[] |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

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

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

###### Call Signature

> **emit**(`event`: `"exit"`, `code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `code` | `null` \| `number` |
| `signal` | `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`emit`](child_process.md#emit)

##### eventNames()

> **eventNames**(): [`EventKey`](dom-events.md#eventkey)[]

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

[`EventKey`](dom-events.md#eventkey)[]

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`eventNames`](child_process.md#eventnames)

##### kill()

> **kill**(`signal`?: `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals)): `boolean`

The `subprocess.kill()` method sends a signal to the child process. If no
argument is given, the process will be sent the `'SIGTERM'` signal. See [`signal(7)`](http://man7.org/linux/man-pages/man7/signal.7.html) for a list of available signals. This function
returns `true` if [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) succeeds, and `false` otherwise.

```js
const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
```

The `ChildProcess` object may emit an `'error'` event if the signal
cannot be delivered. Sending a signal to a child process that has already exited
is not an error but may have unforeseen consequences. Specifically, if the
process identifier (PID) has been reassigned to another process, the signal will
be delivered to that process instead which can have unexpected results.

While the function is called `kill`, the signal delivered to the child process
may not actually terminate the process.

See [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for reference.

On Windows, where POSIX signals do not exist, the `signal` argument will be
ignored, and the process will be killed forcefully and abruptly (similar to `'SIGKILL'`).
See `Signal Events` for more details.

On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the `shell` option of `ChildProcess`:

```js
'use strict';
const { spawn } = require('child_process');

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() => {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `signal`? | `number` \| [`Signals`](globals/namespaces/QuickJS.md#signals) |

###### Returns

`boolean`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`kill`](child_process.md#kill)

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

[`ChildProcess`](child_process.md#childprocess).[`off`](child_process.md#off)

##### on()

###### Call Signature

> **on**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

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

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

###### Call Signature

> **on**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`on`](child_process.md#on)

##### once()

###### Call Signature

> **once**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

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

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

###### Call Signature

> **once**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`once`](child_process.md#once)

##### prependListener()

###### Call Signature

> **prependListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

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

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependListener`](child_process.md#prependlistener)

##### prependOnceListener()

###### Call Signature

> **prependOnceListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array.
The next time `eventName` is triggered, this listener is removed, and then invoked.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `string` | - |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

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

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"exit"`, `listener`: (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"exit"` |
| `listener` | (`code`: `null` \| `number`, `signal`: `null` \| [`Signals`](globals/namespaces/QuickJS.md#signals)) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`prependOnceListener`](child_process.md#prependoncelistener)

##### removeListener()

> **removeListener**\<`K`\>(`eventName`: [`EventKey`](dom-events.md#eventkey), `listener`: (...`args`: `any`[]) => `void`): `this`

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
| `eventName` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Inherited from

[`ChildProcess`](child_process.md#childprocess).[`removeListener`](child_process.md#removelistener)

***

### ProcessEnvOptions

#### Extended by

- [`SpawnOptions`](child_process.md#spawnoptions)

#### Properties

##### cwd?

> `optional` **cwd**: `string`

##### gid?

> `optional` **gid**: `number`

##### uid?

> `optional` **uid**: `number`

***

### SpawnOptions

#### Extends

- [`ProcessEnvOptions`](child_process.md#processenvoptions)

#### Extended by

- [`SpawnOptionsWithoutStdio`](child_process.md#spawnoptionswithoutstdio)
- [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)

#### Properties

##### cwd?

> `optional` **cwd**: `string`

###### Inherited from

[`ProcessEnvOptions`](child_process.md#processenvoptions).[`cwd`](child_process.md#cwd)

##### gid?

> `optional` **gid**: `number`

###### Inherited from

[`ProcessEnvOptions`](child_process.md#processenvoptions).[`gid`](child_process.md#gid)

##### shell?

> `optional` **shell**: `string` \| `boolean`

##### stdio?

> `optional` **stdio**: [`StdioOptions`](child_process.md#stdiooptions)

Can be set to 'pipe', 'inherit', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`.

###### Default

```ts
'pipe'
```

##### uid?

> `optional` **uid**: `number`

###### Inherited from

[`ProcessEnvOptions`](child_process.md#processenvoptions).[`uid`](child_process.md#uid)

##### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

***

### SpawnOptionsWithoutStdio

#### Extends

- [`SpawnOptions`](child_process.md#spawnoptions)

#### Properties

##### cwd?

> `optional` **cwd**: `string`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`cwd`](child_process.md#cwd-1)

##### gid?

> `optional` **gid**: `number`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`gid`](child_process.md#gid-1)

##### shell?

> `optional` **shell**: `string` \| `boolean`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`shell`](child_process.md#shell)

##### stdio?

> `optional` **stdio**: `"pipe"` \| [`StdioPipe`](child_process.md#stdiopipe)[]

Can be set to 'pipe', 'inherit', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`.

###### Default

```ts
'pipe'
```

###### Overrides

[`SpawnOptions`](child_process.md#spawnoptions).[`stdio`](child_process.md#stdio)

##### uid?

> `optional` **uid**: `number`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`uid`](child_process.md#uid-1)

##### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`windowsVerbatimArguments`](child_process.md#windowsverbatimarguments)

***

### SpawnOptionsWithStdioTuple\<Stdin, Stdout, Stderr\>

#### Extends

- [`SpawnOptions`](child_process.md#spawnoptions)

#### Type Parameters

| Type Parameter |
| ------ |
| `Stdin` *extends* [`StdioNull`](child_process.md#stdionull) \| [`StdioPipe`](child_process.md#stdiopipe) |
| `Stdout` *extends* [`StdioNull`](child_process.md#stdionull) \| [`StdioPipe`](child_process.md#stdiopipe) |
| `Stderr` *extends* [`StdioNull`](child_process.md#stdionull) \| [`StdioPipe`](child_process.md#stdiopipe) |

#### Properties

##### cwd?

> `optional` **cwd**: `string`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`cwd`](child_process.md#cwd-1)

##### gid?

> `optional` **gid**: `number`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`gid`](child_process.md#gid-1)

##### shell?

> `optional` **shell**: `string` \| `boolean`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`shell`](child_process.md#shell)

##### stdio

> **stdio**: \[`Stdin`, `Stdout`, `Stderr`\]

Can be set to 'pipe', 'inherit', or 'ignore', or an array of these strings.
If passed as an array, the first element is used for `stdin`, the second for
`stdout`, and the third for `stderr`.

###### Default

```ts
'pipe'
```

###### Overrides

[`SpawnOptions`](child_process.md#spawnoptions).[`stdio`](child_process.md#stdio)

##### uid?

> `optional` **uid**: `number`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`uid`](child_process.md#uid-1)

##### windowsVerbatimArguments?

> `optional` **windowsVerbatimArguments**: `boolean`

###### Inherited from

[`SpawnOptions`](child_process.md#spawnoptions).[`windowsVerbatimArguments`](child_process.md#windowsverbatimarguments)

## Type Aliases

### IOType

> **IOType**: `"pipe"` \| `"ignore"` \| `"inherit"`

***

### StdioNull

> **StdioNull**: `"inherit"` \| `"ignore"`

***

### StdioOptions

> **StdioOptions**: [`IOType`](child_process.md#iotype) \| ([`IOType`](child_process.md#iotype) \| `number` \| `null` \| `undefined`)[]

***

### StdioPipe

> **StdioPipe**: `undefined` \| `null` \| [`StdioPipeNamed`](child_process.md#stdiopipenamed)

***

### StdioPipeNamed

> **StdioPipeNamed**: `"pipe"`

## Functions

### spawn()

#### Call Signature

> **spawn**(`command`: `string`, `options`?: [`SpawnOptionsWithoutStdio`](child_process.md#spawnoptionswithoutstdio)): [`ChildProcessWithoutNullStreams`](child_process.md#childprocesswithoutnullstreams)

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options`? | [`SpawnOptionsWithoutStdio`](child_process.md#spawnoptionswithoutstdio) | - |

##### Returns

[`ChildProcessWithoutNullStreams`](child_process.md#childprocesswithoutnullstreams)

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `options`: [`SpawnOptions`](child_process.md#spawnoptions)): [`ChildProcess`](child_process.md#childprocess)

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `options` | [`SpawnOptions`](child_process.md#spawnoptions) | - |

##### Returns

[`ChildProcess`](child_process.md#childprocess)

#### Call Signature

> **spawn**(`command`: `string`, `args`?: readonly `string`[], `options`?: [`SpawnOptionsWithoutStdio`](child_process.md#spawnoptionswithoutstdio)): [`ChildProcessWithoutNullStreams`](child_process.md#childprocesswithoutnullstreams)

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args`? | readonly `string`[] | List of string arguments. |
| `options`? | [`SpawnOptionsWithoutStdio`](child_process.md#spawnoptionswithoutstdio) | - |

##### Returns

[`ChildProcessWithoutNullStreams`](child_process.md#childprocesswithoutnullstreams)

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<[`DefaultWritableStream`](stream.md#defaultwritablestream), `null`, `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, [`DefaultReadableStream`](stream.md#defaultreadablestream), `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioPipe`](child_process.md#stdiopipe)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, [`DefaultReadableStream`](stream.md#defaultreadablestream)\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\>): [`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, `null`\>

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptionsWithStdioTuple`](child_process.md#spawnoptionswithstdiotuplestdin-stdout-stderr)\<[`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull), [`StdioNull`](child_process.md#stdionull)\> | - |

##### Returns

[`ChildProcessByStdio`](child_process.md#childprocessbystdioi-o-e)\<`null`, `null`, `null`\>

#### Call Signature

> **spawn**(`command`: `string`, `args`: readonly `string`[], `options`: [`SpawnOptions`](child_process.md#spawnoptions)): [`ChildProcess`](child_process.md#childprocess)

The `child_process.spawn()` method spawns a new process using the given `command`, with command-line arguments in `args`.
If omitted, `args` defaults to an empty array.

**If the `shell` option is enabled, do not pass unsanitized user input to this**
**function. Any input containing shell metacharacters may be used to trigger**
**arbitrary command execution.**

A third argument may be used to specify additional options.

Use `cwd` to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an `ENOENT` error
and exits immediately. `ENOENT` is also emitted when the command
does not exist.

Example of running `ls -lh /usr`, capturing `stdout`, `stderr`, and the
exit code:

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

Example: A very elaborate way to run `ps ax | grep ssh`

```js
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
```

Example of checking for failed `spawn`:

```js
const { spawn } = require('child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) => {
  console.error('Failed to start subprocess.');
});
```

Certain platforms (macOS, Linux) will use the value of `argv[0]` for the process
title while others (Windows, SunOS) will use `command`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `string` | The command to run. |
| `args` | readonly `string`[] | List of string arguments. |
| `options` | [`SpawnOptions`](child_process.md#spawnoptions) | - |

##### Returns

[`ChildProcess`](child_process.md#childprocess)
