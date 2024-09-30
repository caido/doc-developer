[@caido/sdk-backend](../index.md) / EventsSDK

# Type Alias: EventsSDK\<API, Events\>

> **EventsSDK**\<`API`, `Events`\>: `object`

The SDK for the API RPC service.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

## Type declaration

### onInterceptRequest()

Registers an callback on new intercepted requests.

This callback is called asynchronously and cannot modify requests.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`, `request`) => [`MaybePromise`](MaybePromise.md)\<`void`\> |

#### Returns

`void`

#### Example

```ts
sdk.events.onInterceptRequest((sdk: SDK, request: Request) => {
   // Do something with the request
});
```

### onInterceptResponse()

Registers an callback on new intercepted responses.

This callback is called asynchronously and cannot modify responses.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`, `request`, `response`) => [`MaybePromise`](MaybePromise.md)\<`void`\> |

#### Returns

`void`

#### Example

```ts
sdk.events.onInterceptResponse((sdk: SDK, request: Request, response: Response) => {
   // Do something with the request/response
});
```
