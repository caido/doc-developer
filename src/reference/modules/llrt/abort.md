[@caido/quickjs-types](../index.md) / llrt/abort

# llrt/abort

## Classes

### AbortController

#### Constructors

##### Constructor

> **new AbortController**(): [`AbortController`](#abortcontroller)

Creates a new `AbortController` object instance.

###### Returns

[`AbortController`](#abortcontroller)

#### Properties

##### signal

> `readonly` **signal**: [`AbortSignal`](#abortsignal)

Returns the AbortSignal object associated with this object.

#### Methods

##### abort()

> **abort**(`reason?`: `any`): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `any` |

###### Returns

`void`

***

### AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

#### Extends

- [`EventTarget`](dom-events.md#eventtarget)

#### Constructors

##### Constructor

> **new AbortSignal**(): [`AbortSignal`](#abortsignal)

Creates a new `AbortSignal` object instance.

###### Returns

[`AbortSignal`](#abortsignal)

###### Overrides

[`EventTarget`](dom-events.md#eventtarget).[`constructor`](dom-events.md#constructor-1)

#### Properties

##### aborted

> `readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

##### onabort

> **onabort**: (`this`: [`AbortSignal`](#abortsignal), `event`: [`Event`](dom-events.md#event)) => `any` \| `null`

Registers an event listener callback to execute when an `abort` event is observed.

##### reason

> `readonly` **reason**: `any`

A JavaScript value providing the abort reason, once the signal has aborted.

#### Methods

##### addEventListener()

> **addEventListener**(`type`: [`EventKey`](dom-events.md#eventkey), `listener`: [`EventListener`](dom-events.md#eventlistener), `options?`: [`AddEventListenerOptions`](dom-events.md#addeventlisteneroptions)): `void`

Adds a new handler for the `type` event. Any given `listener` is added only once per `type`.

If the `once` option is true, the `listener` is removed after the next time a `type` event is dispatched.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | [`EventListener`](dom-events.md#eventlistener) |
| `options?` | [`AddEventListenerOptions`](dom-events.md#addeventlisteneroptions) |

###### Returns

`void`

###### Inherited from

[`EventTarget`](dom-events.md#eventtarget).[`addEventListener`](dom-events.md#addeventlistener)

##### dispatchEvent()

> **dispatchEvent**(`event`: [`Event`](dom-events.md#event)): `void`

Dispatches a synthetic event event to target

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`Event`](dom-events.md#event) |

###### Returns

`void`

###### Inherited from

[`EventTarget`](dom-events.md#eventtarget).[`dispatchEvent`](dom-events.md#dispatchevent)

##### removeEventListener()

> **removeEventListener**(`type`: [`EventKey`](dom-events.md#eventkey), `listener`: [`EventListener`](dom-events.md#eventlistener)): `void`

Removes the event listener in target's event listener list with the same type and callback

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | [`EventListener`](dom-events.md#eventlistener) |

###### Returns

`void`

###### Inherited from

[`EventTarget`](dom-events.md#eventtarget).[`removeEventListener`](dom-events.md#removeeventlistener)

##### throwIfAborted()

> **throwIfAborted**(): `void`

Throws the signal's abort reason if the signal has been aborted; otherwise it does nothing.

###### Returns

`void`

##### abort()

> `static` **abort**(`reason?`: `any`): [`AbortSignal`](#abortsignal)

Returns an `AbortSignal` instance that is already set as aborted.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `reason?` | `any` | The reason for the abort. |

###### Returns

[`AbortSignal`](#abortsignal)

##### any()

> `static` **any**(`signals`: [`AbortSignal`](#abortsignal)[]): [`AbortSignal`](#abortsignal)

Returns an `AbortSignal` that aborts when any of the given abort signals abort.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `signals` | [`AbortSignal`](#abortsignal)[] | An array of `AbortSignal` objects to observe. |

###### Returns

[`AbortSignal`](#abortsignal)

##### timeout()

> `static` **timeout**(`milliseconds`: `number`): [`AbortSignal`](#abortsignal)

Returns an `AbortSignal` instance that will automatically abort after a specified time.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `milliseconds` | `number` | The number of milliseconds to wait before aborting. |

###### Returns

[`AbortSignal`](#abortsignal)
