[@caido/quickjs-types](../index.md) / llrt/dom-events

# llrt/dom-events

## Classes

### CustomEvent\<D\>

An event which takes place in the system.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `D` | `any` |

#### Implements

- [`Event`](dom-events.md#event)

#### Constructors

##### new CustomEvent()

> **new CustomEvent**\<`D`\>(`type`: `string`, `opts`?: `object`): [`CustomEvent`](dom-events.md#customeventd)\<`D`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `opts`? | \{ `details`: `D`; \} |
| `opts.details`? | `D` |

###### Returns

[`CustomEvent`](dom-events.md#customeventd)\<`D`\>

#### Properties

##### details

> `readonly` **details**: `null` \| `D`

##### type

> `readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

###### Implementation of

[`Event`](dom-events.md#event).[`type`](dom-events.md#type-1)

***

### EventTarget

EventTarget is an interface implemented by objects that can
receive events and may have listeners for them.

#### Extended by

- [`AbortSignal`](abort.md#abortsignal)

#### Constructors

##### new EventTarget()

> **new EventTarget**(): [`EventTarget`](dom-events.md#eventtarget)

###### Returns

[`EventTarget`](dom-events.md#eventtarget)

#### Methods

##### addEventListener()

> **addEventListener**(`type`: [`EventKey`](dom-events.md#eventkey), `listener`: [`EventListener`](dom-events.md#eventlistener), `options`?: [`AddEventListenerOptions`](dom-events.md#addeventlisteneroptions)): `void`

Adds a new handler for the `type` event. Any given `listener` is added only once per `type`.

If the `once` option is true, the `listener` is removed after the next time a `type` event is dispatched.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`EventKey`](dom-events.md#eventkey) |
| `listener` | [`EventListener`](dom-events.md#eventlistener) |
| `options`? | [`AddEventListenerOptions`](dom-events.md#addeventlisteneroptions) |

###### Returns

`void`

##### dispatchEvent()

> **dispatchEvent**(`event`: [`Event`](dom-events.md#event)): `void`

Dispatches a synthetic event event to target

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`Event`](dom-events.md#event) |

###### Returns

`void`

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

> `readonly` **type**: [`EventKey`](dom-events.md#eventkey)

Returns the type of event, e.g. "click", "hashchange", or "submit".

***

### EventListener()

> **EventListener**(`evt`: [`Event`](dom-events.md#event)): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `evt` | [`Event`](dom-events.md#event) |

#### Returns

`void`

## Type Aliases

### EventKey

> **EventKey**: `string` \| `symbol`
