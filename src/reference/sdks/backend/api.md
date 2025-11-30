# API

### APISDK

> **APISDK**\<`API`, `Events`\> = `object`

The SDK for the API RPC service.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Methods

##### register()

> **register**(`name`: keyof `API`, `callback`: (`sdk`: [`SDK`](index.md#sdk), ...`args`: `any`[]) => `any`): `void`

Registers a new backend function for the RPC.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | keyof `API` |
| `callback` | (`sdk`: [`SDK`](index.md#sdk), ...`args`: `any`[]) => `any` |

###### Returns

`void`

###### Example

```ts
sdk.api.register("multiply", (sdk: SDK, a: number, b: number) => {
   return a * b;
});
```

##### send()

> **send**(`event`: keyof `Events`, ...`args`: `any`[]): `void`

Sends an event to the frontend plugin.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | keyof `Events` |
| ...`args` | `any`[] |

###### Returns

`void`

###### Example

```ts
sdk.api.send("myEvent", 5, "hello");
```
