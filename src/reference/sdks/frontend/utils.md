# Utils

### As

> **As**\<`TType`\> = `object`

Utility type that adds a type discriminator to a type.

#### Type Parameters

| Type Parameter |
| ------ |
| `TType` *extends* `string` |

#### Properties

##### type

> **type**: `TType`

***

### ComponentDefinition

> **ComponentDefinition** = `object`

A custom component that will be rendered in the UI.

#### Properties

##### component

> **component**: `VueComponent`

##### events?

> `optional` **events**: `Record`\<`string`, (...`args`: `unknown`[]) => `void`\>

##### props?

> `optional` **props**: `Record`\<`string`, `unknown`\>

***

### HTTPQL

> **HTTPQL** = `string` & `object`

An HTTPQL expression.

#### Type Declaration

##### \_\_httpql?

> `optional` **\_\_httpql**: `never`

#### Example

```ts
`req.method.eq:"POST"`
```

***

### Icon

> **Icon** = `string` & `object`

A [https://fontawesome.com/icons\|FontAwesome](https://fontawesome.com/icons|FontAwesome) icon class.

#### Type Declaration

##### \_\_icon?

> `optional` **\_\_icon**: `never`

#### Example

```ts
"fas fa-rocket"
```

***

### ID

> **ID** = `string` & `object`

A unique Caido identifier per type.

#### Type Declaration

##### \_\_id?

> `optional` **\_\_id**: `never`

***

### ListenerHandle

> **ListenerHandle** = `object`

A handle for a listener.

#### Properties

##### stop()

> **stop**: () => `void`

Stop the listener.

###### Returns

`void`

***

### Prettify

> **Prettify**\<`T`\> = `{ [K in keyof T]: T[K] }` & `object`

Utility type that prettifies complex types for better IDE display.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### PromisifiedReturnType

> **PromisifiedReturnType**\<`T`\> = `ReturnType`\<`T`\> *extends* `Promise`\<infer U\> ? `Promise`\<`U`\> : `Promise`\<`ReturnType`\<`T`\>\>

Utility type for converting endpoint return types to promises.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `unknown`[]) => `unknown` |
