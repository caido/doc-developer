# Shared

### Bytes

> **Bytes** = `string` \| `number`[] \| `Uint8Array`

Types that can be converted to bytes in inputs.

***

### Cursor

> **Cursor** = `string` & `object`

A cursor for pagination.

#### Type Declaration

##### \_\_cursor?

> `optional` **\_\_cursor**: `never`

***

### DefineAPI

> **DefineAPI**\<`API`\> = `{ [K in keyof API]: DefineAPICallback<API[K]> }`

Define a Plugin backend functions that are callable from the frontend.

#### Type Parameters

| Type Parameter |
| ------ |
| `API` *extends* `Record`\<`string`, (...`args`: `any`[]) => [`MaybePromise`](#maybepromise)\<`any`\>\> |

#### Example

```typescript
function generateNumber(sdk: SDK, min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export type API = DefineAPI<{
  generateNumber: typeof generateNumber;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("generateNumber", generateNumber);
}
```

***

### DefineAPICallback

> **DefineAPICallback**\<`F`\> = `F` *extends* (`sdk`: [`SDK`](index.md#sdk), ...`args`: infer A) => infer R ? (...`args`: `A`) => `R` : `"Your callback must respect the format (sdk: SDK, ...args: unknown[]) => MaybePromise<unknown>"`

Parser for Plugin backend callable functions

#### Type Parameters

| Type Parameter |
| ------ |
| `F` |

***

### DefineEventCallback

> **DefineEventCallback**\<`F`\> = `F` *extends* (...`args`: infer A) => [`MaybePromise`](#maybepromise)\<`void`\> ? (...`args`: `A`) => [`MaybePromise`](#maybepromise)\<`void`\> : `"Your callback must respect the format (...args: unknown[]) => MaybePromise<void>"`

Parser for Plugin backend events callbacks.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` |

***

### DefineEvents

> **DefineEvents**\<`Events`\> = `{ [K in keyof Events]: DefineEventCallback<Events[K]> }`

Define a Plugin backend events that the frontend can receive.

#### Type Parameters

| Type Parameter |
| ------ |
| `Events` *extends* `Record`\<`string`, (...`args`: `any`[]) => [`MaybePromise`](#maybepromise)\<`void`\>\> |

#### Example

```typescript
type MyEventData = { id: string; name: string };

export type BackendEvents = DefineEvents<{
  "myevent": (data: MyEventData) => void;
}>;

export function init(sdk: SDK<{}, BackendEvents>) {
  sdk.api.send("myevent", { id: "1", name: "hello" });
}
```

***

### ID

> **ID** = `string` & `object`

A unique identifier.

#### Type Declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

***

### MaybePromise

> **MaybePromise**\<`T`\> = `T` \| `Promise`\<`T`\>

Promise or value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### MaybePromise

> **MaybePromise**\<`T`\> = `T` \| `Promise`\<`T`\>

Promise or value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### RawOption

> **RawOption** = `object`

Option to return raw value

#### Properties

##### raw

> **raw**: `true`

***

### RequestSource

> **RequestSource** = [`ID`](#id) \| [`Request`](requests.md#request) \| [`RequestSpec`](requests.md#requestspec) \| [`RequestSpecRaw`](requests.md#requestspecraw)

The source of a request.
