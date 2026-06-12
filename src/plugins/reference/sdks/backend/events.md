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

##### onUpstream()

> **onUpstream**(`callback`: (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`RequestSpecRaw`](requests.md#requestspecraw)) => [`MaybePromise`](shared.md#maybepromise)\<[`UpstreamResult`](#upstreamresult)\>): `void`

Callback called before the request is sent to the target.

This callback is called synchronously so special care should be taken
to not impact overall performance.

The callback can return a `Connection` that will then be used to send the request.
It can also return a `RequestSpec` to override the request sent to the target.

This will only be called if the user has enabled it for a given domain
in the settings for Upstream Plugins.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`sdk`: [`SDK`](index.md#sdk)\<`API`, `Events`\>, `request`: [`RequestSpecRaw`](requests.md#requestspecraw)) => [`MaybePromise`](shared.md#maybepromise)\<[`UpstreamResult`](#upstreamresult)\> |

###### Returns

`void`

###### Example

```ts
sdk.events.onUpstream(async (sdk, request) => {
   // Send all requests to example.com
   return {
     connection: await sdk.net.connect("https://example.com"),
   };
});
```

***

### UpstreamResult

> **UpstreamResult** = [`Connection`](net.md#connection) \| [`RequestSpec`](requests.md#requestspec) \| \{ `connection?`: [`Connection`](net.md#connection); `request?`: [`RequestSpec`](requests.md#requestspec); \} \| `undefined`

The result of an upstream callback.
