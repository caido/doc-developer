# Events

### EventsSDK

> **EventsSDK**\<`API`, `Events`\> = `object`

The SDK for the API RPC service.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `API` | `object` |
| `Events` | `object` |

#### Methods

##### onInterceptRequest()

> **onInterceptRequest**(`callback`: (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`Request`](requests.md#request)) => [`MaybePromise`](shared.md#maybepromise)\<`void`\>): `void`

Registers an callback on new intercepted requests.

This callback is called asynchronously and cannot modify requests.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`Request`](requests.md#request)) => [`MaybePromise`](shared.md#maybepromise)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onInterceptRequest((sdk, request) => {
   // Do something with the request
});
```

##### onInterceptResponse()

> **onInterceptResponse**(`callback`: (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`Request`](requests.md#request), `response`: [`Response`](requests.md#response)) => [`MaybePromise`](shared.md#maybepromise)\<`void`\>): `void`

Registers an callback on new intercepted responses.

This callback is called asynchronously and cannot modify responses.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`Request`](requests.md#request), `response`: [`Response`](requests.md#response)) => [`MaybePromise`](shared.md#maybepromise)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onInterceptResponse((sdk, request, response) => {
   // Do something with the request/response
});
```

##### onProjectChange()

> **onProjectChange**(`callback`: (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `project`: [`Project`](projects.md#project) \| `null`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\>): `void`

Registers an callback on project change.

This callback is called asynchronously and cannot modify the project.

It can happen that the project is null if the user deleted the currently selected one.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `project`: [`Project`](projects.md#project) \| `null`) => [`MaybePromise`](shared.md#maybepromise)\<`void`\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onProjectChange((sdk, project) => {
  if (project !== null) {
    // Do something with the project
  }
});
```
