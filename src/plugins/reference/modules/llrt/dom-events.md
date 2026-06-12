[@caido/quickjs-types](../index.md) / llrt/dom-events

# llrt/dom-events

## Classes

### CustomEvent

An event which takes place in the system.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `D` | `any` |

#### Implements

- [`Event`](#event)

#### Constructors

##### Constructor

> **new CustomEvent**\<`D`\>(`type`: `string`, `opts?`: `object`): [`CustomEvent`](#customevent)\<`D`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `opts?` | \{ `details?`: `D`; \} |
| `opts.details?` | `D` |

###### Returns

[`CustomEvent`](#customevent)\<`D`\>

#### Properties

##### details

> `readonly` **details**: `D` \| `null`

##### type

> `readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

###### Implementation of

[`Event`](#event).[`type`](#type-1)

***

### EventTarget

EventTarget is an interface implemented by objects that can
receive events and may have listeners for them.

#### Extended by

- [`AbortSignal`](abort.md#abortsignal)

#### Constructors

##### Constructor

> **new EventTarget**(): [`EventTarget`](#eventtarget)

###### Returns

[`EventTarget`](#eventtarget)

#### Methods

##### addEventListener()

> **addEventListener**(`type`: [`EventKey`](#eventkey), `listener`: [`EventListener`](#eventlistener), `options?`: [`AddEventListenerOptions`](#addeventlisteneroptions)): `void`

Adds a new handler for the `type` event. Any given `listener` is added only once per `type`.

If the `once` option is true, the `listener` is removed after the next time a `type` event is dispatched.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`EventKey`](#eventkey) |
| `listener` | [`EventListener`](#eventlistener) |
| `options?` | [`AddEventListenerOptions`](#addeventlisteneroptions) |

###### Returns

`void`

##### dispatchEvent()

> **dispatchEvent**(`event`: [`Event`](#event)): `void`

Dispatches a synthetic event event to target

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`Event`](#event) |

###### Returns

`void`

##### removeEventListener()

> **removeEventListener**(`type`: [`EventKey`](#eventkey), `listener`: [`EventListener`](#eventlistener)): `void`

Removes the event listener in target's event listener list with the same type and callback

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`EventKey`](#eventkey) |
| `listener` | [`EventListener`](#eventlistener) |

###### Returns

`void`

## Interfaces

### AddEventListenerOptions

#### Properties

##### once?

> `optional` **once**: `boolean`

When `true`, the listener is automatically removed when it is first invoked. Default: `false`.

***

### Event

An event which takes place in the system.

#### Properties

##### type

> `readonly` **type**: [`EventKey`](#eventkey)

Returns the type of event, e.g. "click", "hashchange", or "submit".

***

### EventListener()

> **EventListener**(`evt`: [`Event`](#event)): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `evt` | [`Event`](#event) |

#### Returns

`void`

## Type Aliases

### EventKey

> **EventKey** = `string` \| `symbol`
