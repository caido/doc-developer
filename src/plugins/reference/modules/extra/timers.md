[@caido/quickjs-types](../index.md) / extra/timers

# extra/timers

## Classes

### Timeout

This object is created internally and is returned from `setTimeout()` and `setInterval()`. It can be passed to either `clearTimeout()` or `clearInterval()` in order to cancel the
scheduled actions.

#### Constructors

##### Constructor

> **new Timeout**(): [`Timeout`](#timeout)

###### Returns

[`Timeout`](#timeout)

## Functions

### clearInterval()

> **clearInterval**(`interval`: [`Timeout`](#timeout)): `void`

Cancels a `Timeout` object created by `setInterval()`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `interval` | [`Timeout`](#timeout) |

#### Returns

`void`

***

### clearTimeout()

> **clearTimeout**(`timeout`: [`Timeout`](#timeout)): `void`

Cancels a `Timeout` object created by `setTimeout()`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | [`Timeout`](#timeout) | A `Timeout` object as returned by [setTimeout](#settimeout). |

#### Returns

`void`

***

### setImmediate()

> **setImmediate**\<`TArgs`\>(`callback`: (...`args`: `TArgs`) => `void`): `void`

Schedules the "immediate" execution of the `callback` after I/O events'
callbacks.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`: `TArgs`) => `void` | The function to call at the end of this turn of the Node.js `Event Loop` |

#### Returns

`void`

for use with clearImmediate

***

### setInterval()

> **setInterval**\<`TArgs`\>(`callback`: (...`args`: `TArgs`) => `void`, `ms?`: `number`): [`Timeout`](#timeout)

Schedules repeated execution of `callback` every `delay` milliseconds.

When `delay` isless than `4`, the `delay` will be set to `4`.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`: `TArgs`) => `void` | The function to call when the timer elapses. |
| `ms?` | `number` | - |

#### Returns

[`Timeout`](#timeout)

for use with [clearInterval](#clearinterval)

***

### setTimeout()

> **setTimeout**\<`TArgs`\>(`callback`: (...`args`: `TArgs`) => `void`, `ms?`: `number`): [`Timeout`](#timeout)

Schedules execution of a one-time `callback` after `delay` milliseconds.

The `callback` will likely not be invoked in precisely `delay` milliseconds.
Caido makes no guarantees about the exact timing of when callbacks will fire,
nor of their ordering. The callback will be called as close as possible to the
time specified.

When `delay` is less than `4`, the `delay` will be set to `4`.

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`: `TArgs`) => `void` | The function to call when the timer elapses. |
| `ms?` | `number` | - |

#### Returns

[`Timeout`](#timeout)

for use with [clearTimeout](#cleartimeout)
