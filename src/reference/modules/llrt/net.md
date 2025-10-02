[@caido/quickjs-types](../index.md) / llrt/net

# llrt/net

## Classes

### Server

This class is used to create a TCP or `IPC` server.

#### Extends

- [`EventEmitter`](globals/index.md#eventemittert)

#### Constructors

##### new Server()

> **new Server**(`connectionListener`?: (`socket`: [`Socket`](net.md#socket)) => `void`): [`Server`](net.md#server)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `connectionListener`? | (`socket`: [`Socket`](net.md#socket)) => `void` |

###### Returns

[`Server`](net.md#server)

###### Overrides

[`EventEmitter`](globals/index.md#eventemittert).[`constructor`](globals/index.md#constructors)

##### new Server()

> **new Server**(`options`?: [`ServerOpts`](net.md#serveropts), `connectionListener`?: (`socket`: [`Socket`](net.md#socket)) => `void`): [`Server`](net.md#server)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`ServerOpts`](net.md#serveropts) |
| `connectionListener`? | (`socket`: [`Socket`](net.md#socket)) => `void` |

###### Returns

[`Server`](net.md#server)

###### Overrides

`EventEmitter.constructor`

#### Methods

##### addListener()

###### Call Signature

> **addListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

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

> **addListener**(`event`: `"close"`, `listener`: () => `void`): `this`

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"connection"`, `listener`: (`socket`: [`Socket`](net.md#socket)) => `void`): `this`

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `listener` | (`socket`: [`Socket`](net.md#socket)) => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

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

> **addListener**(`event`: `"listening"`, `listener`: () => `void`): `this`

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.addListener`

##### address()

> **address**(): `null` \| `string` \| [`AddressInfo`](net.md#addressinfo)

Returns the bound `address`, the address `family` name, and `port` of the server
as reported by the operating system if listening on an IP socket
(useful to find which port was assigned when getting an OS-assigned address):`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.

For a server listening on a pipe or Unix domain socket, the name is returned
as a string.

```js
const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});
```

`server.address()` returns `null` before the `'listening'` event has been
emitted or after calling `server.close()`.

###### Returns

`null` \| `string` \| [`AddressInfo`](net.md#addressinfo)

##### close()

> **close**(`callback`?: (`err`?: `Error`) => `void`): `this`

Stops the server from accepting new connections and keeps existing
connections. This function is asynchronous, the server is finally closed
when all connections are ended and the server emits a `'close'` event.
The optional `callback` will be called once the `'close'` event occurs. Unlike
that event, it will be called with an `Error` as its only argument if the server
was not open when it was closed.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | (`err`?: `Error`) => `void` | Called when the server is closed. |

###### Returns

`this`

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

> **emit**(`event`: `"close"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |

###### Returns

`boolean`

###### Overrides

`EventEmitter.emit`

###### Call Signature

> **emit**(`event`: `"connection"`, `socket`: [`Socket`](net.md#socket)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `socket` | [`Socket`](net.md#socket) |

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

> **emit**(`event`: `"listening"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |

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

##### listen()

###### Call Signature

> **listen**(`listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`port`?: `number`, `hostname`?: `string`, `backlog`?: `number`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port`? | `number` |
| `hostname`? | `string` |
| `backlog`? | `number` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`port`?: `number`, `hostname`?: `string`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port`? | `number` |
| `hostname`? | `string` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`port`?: `number`, `backlog`?: `number`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port`? | `number` |
| `backlog`? | `number` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`port`?: `number`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port`? | `number` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`path`: `string`, `backlog`?: `number`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `backlog`? | `number` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`path`: `string`, `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `listeningListener`? | () => `void` |

###### Returns

`void`

###### Call Signature

> **listen**(`options`: [`ListenOptions`](net.md#listenoptions), `listeningListener`?: () => `void`): `void`

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum length of the queue of pending connections.
Currently this parameter is IGNORED, support will be added in the future.

All [Socket](net.md#socket) are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for details).

The `server.listen()` method can be called again if and only if there was an error during the first `server.listen()`
call or `server.close()` has been called. Otherwise, an error will be thrown.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ListenOptions`](net.md#listenoptions) |
| `listeningListener`? | () => `void` |

###### Returns

`void`

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

> **on**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.on`

###### Call Signature

> **on**(`event`: `"connection"`, `listener`: (`socket`: [`Socket`](net.md#socket)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `listener` | (`socket`: [`Socket`](net.md#socket)) => `void` |

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

> **on**(`event`: `"listening"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |
| `listener` | () => `void` |

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

> **once**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.once`

###### Call Signature

> **once**(`event`: `"connection"`, `listener`: (`socket`: [`Socket`](net.md#socket)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `listener` | (`socket`: [`Socket`](net.md#socket)) => `void` |

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

> **once**(`event`: `"listening"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |
| `listener` | () => `void` |

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

> **prependListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.prependListener`

###### Call Signature

> **prependListener**(`event`: `"connection"`, `listener`: (`socket`: [`Socket`](net.md#socket)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `listener` | (`socket`: [`Socket`](net.md#socket)) => `void` |

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

> **prependListener**(`event`: `"listening"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |
| `listener` | () => `void` |

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

> **prependOnceListener**(`event`: `"close"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`EventEmitter.prependOnceListener`

###### Call Signature

> **prependOnceListener**(`event`: `"connection"`, `listener`: (`socket`: [`Socket`](net.md#socket)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connection"` |
| `listener` | (`socket`: [`Socket`](net.md#socket)) => `void` |

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

> **prependOnceListener**(`event`: `"listening"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"listening"` |
| `listener` | () => `void` |

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

***

### Socket

This class is an abstraction of a TCP socket or a streaming `IPC` endpoint (only available on Unix with domain sockets).
It is also an `EventEmitter`.

A `net.Socket` can be created by the user and used directly to interact with a server. For example, it is returned by [createConnection](net.md#createconnection),
so the user can use it to talk to the server.

It can also be created by LLRT and passed to the user when a connection is received.
For example, it is passed to the listeners of a `'connection'` event emitted on a [Server](net.md#server), so the user can use it to interact with the client.

#### Extends

- [`DefaultDuplexStream`](stream.md#defaultduplexstream)

#### Constructors

##### new Socket()

> **new Socket**(`options`?: [`SocketConstructorOpts`](net.md#socketconstructoropts)): [`Socket`](net.md#socket)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`SocketConstructorOpts`](net.md#socketconstructoropts) |

###### Returns

[`Socket`](net.md#socket)

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`constructor`](stream.md#constructors)

#### Properties

##### connecting

> `readonly` **connecting**: `boolean`

If `true`, `socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

##### localAddress?

> `readonly` `optional` **localAddress**: `string`

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

##### localFamily?

> `readonly` `optional` **localFamily**: `string`

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

##### localPort?

> `readonly` `optional` **localPort**: `number`

The numeric representation of the local port. For example, `80` or `21`.

##### pending

> `readonly` **pending**: `boolean`

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

##### readyState

> `readonly` **readyState**: [`SocketReadyState`](net.md#socketreadystate)

This property represents the state of the connection as a string.

* If the stream is connecting `socket.readyState` is `opening`.
* If the stream is readable and writable, it is `open`.
* If the stream is readable and not writable, it is `readOnly`.
* If the stream is not readable and writable, it is `writeOnly`.

##### remoteAddress?

> `readonly` `optional` **remoteAddress**: `string`

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

##### remoteFamily?

> `readonly` `optional` **remoteFamily**: `string`

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

##### remotePort?

> `readonly` `optional` **remotePort**: `number`

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

#### Methods

##### \[dispose\]()

> **\[dispose\]**(): `void`

Calls `readable.destroy()`.

###### Returns

`void`

###### Inherited from

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`[dispose]`](stream.md#dispose)

##### addListener()

###### Call Signature

> **addListener**(`event`: `string`, `listener`: (...`args`: `any`[]) => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`addListener`](stream.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"close"`, `listener`: (`hadError`: `boolean`) => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`hadError`: `boolean`) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`addListener`](stream.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"connect"`, `listener`: () => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`addListener`](stream.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"data"`, `listener`: (`data`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`data`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`addListener`](stream.md#addlistener)

###### Call Signature

> **addListener**(`event`: `"drain"`, `listener`: () => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"drain"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.addListener`

###### Call Signature

> **addListener**(`event`: `"end"`, `listener`: () => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.addListener`

###### Call Signature

> **addListener**(`event`: `"error"`, `listener`: (`err`: `Error`) => `void`): `this`

events.EventEmitter
  1. close
  2. connect
  3. data
  4. end
  5. error

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`err`: `Error`) => `void` |

###### Returns

`this`

###### Overrides

`Duplex.addListener`

##### address()

> **address**(): \{\} \| [`AddressInfo`](net.md#addressinfo)

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

###### Returns

\{\} \| [`AddressInfo`](net.md#addressinfo)

###### Since

v0.1.90

##### connect()

###### Call Signature

> **connect**(`options`: [`SocketConnectOpts`](net.md#socketconnectopts), `connectionListener`?: () => `void`): `this`

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SocketConnectOpts`](net.md#socketconnectopts) |
| `connectionListener`? | () => `void` |

###### Returns

`this`

###### Call Signature

> **connect**(`port`: `number`, `host`: `string`, `connectionListener`?: () => `void`): `this`

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener`? | () => `void` |

###### Returns

`this`

###### Call Signature

> **connect**(`port`: `number`, `connectionListener`?: () => `void`): `this`

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `connectionListener`? | () => `void` |

###### Returns

`this`

###### Call Signature

> **connect**(`path`: `string`, `connectionListener`?: () => `void`): `this`

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `connectionListener`? | () => `void` |

###### Returns

`this`

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`destroy`](stream.md#destroy)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`emit`](stream.md#emit)

###### Call Signature

> **emit**(`event`: `"close"`, `hadError`: `boolean`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `hadError` | `boolean` |

###### Returns

`boolean`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`emit`](stream.md#emit)

###### Call Signature

> **emit**(`event`: `"connect"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |

###### Returns

`boolean`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`emit`](stream.md#emit)

###### Call Signature

> **emit**(`event`: `"data"`, `data`: [`Buffer`](buffer.md#buffer)): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `data` | [`Buffer`](buffer.md#buffer) |

###### Returns

`boolean`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`emit`](stream.md#emit)

###### Call Signature

> **emit**(`event`: `"end"`): `boolean`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |

###### Returns

`boolean`

###### Overrides

`Duplex.emit`

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

`Duplex.emit`

##### end()

> **end**(`callback`?: () => `void`): `this`

Half-closes the socket. i.e., it sends a FIN packet. It is possible the server will still send some data.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback`? | () => `void` | Optional callback for when the socket is finished. |

###### Returns

`this`

The socket itself.

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`end`](stream.md#end)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`eventNames`](stream.md#eventnames)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`off`](stream.md#off)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`on`](stream.md#on)

###### Call Signature

> **on**(`event`: `"close"`, `listener`: (`hadError`: `boolean`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`hadError`: `boolean`) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`on`](stream.md#on)

###### Call Signature

> **on**(`event`: `"connect"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`on`](stream.md#on)

###### Call Signature

> **on**(`event`: `"data"`, `listener`: (`data`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`data`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`on`](stream.md#on)

###### Call Signature

> **on**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.on`

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

`Duplex.on`

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`once`](stream.md#once)

###### Call Signature

> **once**(`event`: `"close"`, `listener`: (`hadError`: `boolean`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`hadError`: `boolean`) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`once`](stream.md#once)

###### Call Signature

> **once**(`event`: `"connect"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`once`](stream.md#once)

###### Call Signature

> **once**(`event`: `"data"`, `listener`: (`data`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`data`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`once`](stream.md#once)

###### Call Signature

> **once**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.once`

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

`Duplex.once`

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependListener`](stream.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"close"`, `listener`: (`hadError`: `boolean`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`hadError`: `boolean`) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependListener`](stream.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"connect"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependListener`](stream.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"data"`, `listener`: (`data`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`data`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependListener`](stream.md#prependlistener)

###### Call Signature

> **prependListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.prependListener`

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

`Duplex.prependListener`

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependOnceListener`](stream.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"close"`, `listener`: (`hadError`: `boolean`) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"close"` |
| `listener` | (`hadError`: `boolean`) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependOnceListener`](stream.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"connect"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connect"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependOnceListener`](stream.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"data"`, `listener`: (`data`: [`Buffer`](buffer.md#buffer)) => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"data"` |
| `listener` | (`data`: [`Buffer`](buffer.md#buffer)) => `void` |

###### Returns

`this`

###### Overrides

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`prependOnceListener`](stream.md#prependoncelistener)

###### Call Signature

> **prependOnceListener**(`event`: `"end"`, `listener`: () => `void`): `this`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"end"` |
| `listener` | () => `void` |

###### Returns

`this`

###### Overrides

`Duplex.prependOnceListener`

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

`Duplex.prependOnceListener`

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`read`](stream.md#read)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`removeListener`](stream.md#removelistener)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`removeListener`](stream.md#removelistener)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`removeListener`](stream.md#removelistener)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`removeListener`](stream.md#removelistener)

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

[`DefaultDuplexStream`](stream.md#defaultduplexstream).[`write`](stream.md#write)

## Interfaces

### AddressInfo

#### Properties

##### address

> **address**: `string`

##### family

> **family**: `string`

##### port

> **port**: `number`

***

### IpcSocketConnectOpts

#### Properties

##### path

> **path**: `string`

***

### ListenOptions

#### Properties

##### backlog?

> `optional` **backlog**: `number`

##### host?

> `optional` **host**: `string`

##### path?

> `optional` **path**: `string`

##### port?

> `optional` **port**: `number`

***

### ServerOpts

#### Properties

##### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

Indicates whether half-opened TCP connections are allowed.

###### Default

```ts
false
```

***

### SocketConstructorOpts

#### Properties

##### allowHalfOpen?

> `optional` **allowHalfOpen**: `boolean`

***

### TcpSocketConnectOpts

#### Properties

##### host?

> `optional` **host**: `string`

##### port

> **port**: `number`

## Type Aliases

### NetConnectOpts

> **NetConnectOpts**: [`TcpSocketConnectOpts`](net.md#tcpsocketconnectopts) \| [`IpcSocketConnectOpts`](net.md#ipcsocketconnectopts)

***

### SocketConnectOpts

> **SocketConnectOpts**: [`TcpSocketConnectOpts`](net.md#tcpsocketconnectopts) \| [`IpcSocketConnectOpts`](net.md#ipcsocketconnectopts)

***

### SocketReadyState

> **SocketReadyState**: `"opening"` \| `"open"` \| `"readOnly"` \| `"writeOnly"` \| `"closed"`

## Functions

### connect()

#### Call Signature

> **connect**(`options`: [`NetConnectOpts`](net.md#netconnectopts), `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

Aliases to [createConnection](net.md#createconnection).

Possible signatures:

* [connect](net.md#connect-1)
* [connect](net.md#connect-1) for `IPC` connections.
* [connect](net.md#connect-1) for TCP connections.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NetConnectOpts`](net.md#netconnectopts) |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **connect**(`port`: `number`, `host`: `string`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

Aliases to [createConnection](net.md#createconnection).

Possible signatures:

* [connect](net.md#connect-1)
* [connect](net.md#connect-1) for `IPC` connections.
* [connect](net.md#connect-1) for TCP connections.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **connect**(`port`: `number`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

Aliases to [createConnection](net.md#createconnection).

Possible signatures:

* [connect](net.md#connect-1)
* [connect](net.md#connect-1) for `IPC` connections.
* [connect](net.md#connect-1) for TCP connections.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **connect**(`path`: `string`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

Aliases to [createConnection](net.md#createconnection).

Possible signatures:

* [connect](net.md#connect-1)
* [connect](net.md#connect-1) for `IPC` connections.
* [connect](net.md#connect-1) for TCP connections.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

***

### createConnection()

#### Call Signature

> **createConnection**(`options`: [`NetConnectOpts`](net.md#netconnectopts), `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

A factory function, which creates a new [Socket](net.md#socket),
immediately initiates connection with `socket.connect()`,
then returns the `net.Socket` that starts the connection.

When the connection is established, a `'connect'` event will be emitted
on the returned socket. The last parameter `connectListener`, if supplied,
will be added as a listener for the `'connect'` event **once**.

Possible signatures:

* [createConnection](net.md#createconnection)
* [createConnection](net.md#createconnection) for `IPC` connections.
* [createConnection](net.md#createconnection) for TCP connections.

The [connect](net.md#connect-1) function is an alias to this function.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NetConnectOpts`](net.md#netconnectopts) |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **createConnection**(`port`: `number`, `host`: `string`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

A factory function, which creates a new [Socket](net.md#socket),
immediately initiates connection with `socket.connect()`,
then returns the `net.Socket` that starts the connection.

When the connection is established, a `'connect'` event will be emitted
on the returned socket. The last parameter `connectListener`, if supplied,
will be added as a listener for the `'connect'` event **once**.

Possible signatures:

* [createConnection](net.md#createconnection)
* [createConnection](net.md#createconnection) for `IPC` connections.
* [createConnection](net.md#createconnection) for TCP connections.

The [connect](net.md#connect-1) function is an alias to this function.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `host` | `string` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **createConnection**(`port`: `number`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

A factory function, which creates a new [Socket](net.md#socket),
immediately initiates connection with `socket.connect()`,
then returns the `net.Socket` that starts the connection.

When the connection is established, a `'connect'` event will be emitted
on the returned socket. The last parameter `connectListener`, if supplied,
will be added as a listener for the `'connect'` event **once**.

Possible signatures:

* [createConnection](net.md#createconnection)
* [createConnection](net.md#createconnection) for `IPC` connections.
* [createConnection](net.md#createconnection) for TCP connections.

The [connect](net.md#connect-1) function is an alias to this function.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `port` | `number` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

#### Call Signature

> **createConnection**(`path`: `string`, `connectionListener`?: () => `void`): [`Socket`](net.md#socket)

A factory function, which creates a new [Socket](net.md#socket),
immediately initiates connection with `socket.connect()`,
then returns the `net.Socket` that starts the connection.

When the connection is established, a `'connect'` event will be emitted
on the returned socket. The last parameter `connectListener`, if supplied,
will be added as a listener for the `'connect'` event **once**.

Possible signatures:

* [createConnection](net.md#createconnection)
* [createConnection](net.md#createconnection) for `IPC` connections.
* [createConnection](net.md#createconnection) for TCP connections.

The [connect](net.md#connect-1) function is an alias to this function.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `connectionListener`? | () => `void` |

##### Returns

[`Socket`](net.md#socket)

***

### createServer()

#### Call Signature

> **createServer**(`connectionListener`?: (`socket`: [`Socket`](net.md#socket)) => `void`): [`Server`](net.md#server)

Creates a new TCP or `IPC` server.

If `allowHalfOpen` is set to `true`, when the other end of the socket
signals the end of transmission, the server will only send back the end of
transmission when `socket.end()` is explicitly called. For example, in the
context of TCP, when a FIN packed is received, a FIN packed is sent
back only when `socket.end()` is explicitly called. Until then the
connection is half-closed (non-readable but still writable). See `'end'` event and [RFC 1122](https://tools.ietf.org/html/rfc1122) (section 4.2.2.13) for more information.

If `pauseOnConnect` is set to `true`, then the socket associated with each
incoming connection will be paused, and no data will be read from its handle.
This allows connections to be passed between processes without any data being
read by the original process. To begin reading data from a paused socket, call `socket.resume()`.

The server can be a TCP server or an `IPC` server, depending on what it `listen()` to.

Here is an example of a TCP echo server which listens for connections
on port 8124:

```js
import * as net from 'net';
const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');

});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});
```

Test this by using `telnet`:

```bash
telnet localhost 8124
```

To listen on the socket `/tmp/echo.sock`:

```js
server.listen('/tmp/echo.sock', () => {
  console.log('server bound');
});
```

Use `nc` to connect to a Unix domain socket server:

```bash
nc -U /tmp/echo.sock
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connectionListener`? | (`socket`: [`Socket`](net.md#socket)) => `void` | Automatically set as a listener for the 'connection' event. |

##### Returns

[`Server`](net.md#server)

#### Call Signature

> **createServer**(`options`?: [`ServerOpts`](net.md#serveropts), `connectionListener`?: (`socket`: [`Socket`](net.md#socket)) => `void`): [`Server`](net.md#server)

Creates a new TCP or `IPC` server.

If `allowHalfOpen` is set to `true`, when the other end of the socket
signals the end of transmission, the server will only send back the end of
transmission when `socket.end()` is explicitly called. For example, in the
context of TCP, when a FIN packed is received, a FIN packed is sent
back only when `socket.end()` is explicitly called. Until then the
connection is half-closed (non-readable but still writable). See `'end'` event and [RFC 1122](https://tools.ietf.org/html/rfc1122) (section 4.2.2.13) for more information.

If `pauseOnConnect` is set to `true`, then the socket associated with each
incoming connection will be paused, and no data will be read from its handle.
This allows connections to be passed between processes without any data being
read by the original process. To begin reading data from a paused socket, call `socket.resume()`.

The server can be a TCP server or an `IPC` server, depending on what it `listen()` to.

Here is an example of a TCP echo server which listens for connections
on port 8124:

```js
import * as net from 'net';
const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');

});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});
```

Test this by using `telnet`:

```bash
telnet localhost 8124
```

To listen on the socket `/tmp/echo.sock`:

```js
server.listen('/tmp/echo.sock', () => {
  console.log('server bound');
});
```

Use `nc` to connect to a Unix domain socket server:

```bash
nc -U /tmp/echo.sock
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`ServerOpts`](net.md#serveropts) | - |
| `connectionListener`? | (`socket`: [`Socket`](net.md#socket)) => `void` | Automatically set as a listener for the 'connection' event. |

##### Returns

[`Server`](net.md#server)
