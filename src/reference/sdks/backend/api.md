# API

### APISDK

> **APISDK**\<`SpecOrAPI`, `Events`\> = `object`

The SDK for the API RPC service.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `SpecOrAPI` | `object` |
| `Events` | `object` |

#### Methods

##### register()

> **register**\<`K`\>(`name`: `K`, `callback`: [`APICallback`](other.md#apicallback)\<[`ResolvedAPI`](other.md#resolvedapi)\<`SpecOrAPI`\>\[`K`\]\>): `void`

Registers a new backend function for the RPC.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `K` |
| `callback` | [`APICallback`](other.md#apicallback)\<[`ResolvedAPI`](other.md#resolvedapi)\<`SpecOrAPI`\>\[`K`\]\> |

###### Returns

`void`

###### Example

```ts
sdk.api.register("multiply", (sdk: SDK, a: number, b: number) => {
   return a * b;
});
```

##### send()

> **send**\<`K`\>(`event`: `K`, ...`args`: [`EventParameters`](other.md#eventparameters)\<[`ResolvedEvents`](other.md#resolvedevents)\<`SpecOrAPI`, `Events`\>\[`K`\]\>): `void`

Sends an event to the frontend plugin.

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `K` |
| ...`args` | [`EventParameters`](other.md#eventparameters)\<[`ResolvedEvents`](other.md#resolvedevents)\<`SpecOrAPI`, `Events`\>\[`K`\]\> |

###### Returns

`void`

###### Example

```ts
sdk.api.send("myEvent", 5, "hello");
```
