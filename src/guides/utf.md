# Use Invalid UTF-8

::: info
For conceptual information regarding this guide - click [here](/concepts/binary.md).
:::

## Using a Mutable Proxied Request

To use invalid UTF-8 in the path of a request that passes through Caido, follow these steps:

### /packages/backend/src/index.ts

First import the `SDK`, the interface used to interact with Caido.

``` ts
import { SDK } from "caido:plugin";
```

Then create a function that takes proxied requests using `onInterceptRequest` and converts them into mutable, un-saved `RequestSpec` objects using the `.toSpec()` method. Next, store the path as a byte array using the spread operator `...`, and append the desired raw byte using `[...spec.getPath({raw: true}), 0x85];`. Update the request with the modified path using `.setPath()` and send the request.

``` ts
export function init(sdk: SDK) {
  sdk.events.onInterceptRequest(async (sdk, request) => {
    const spec = request.toSpec();
    let path = [...spec.getPath({raw: true}), 0x85];
    spec.setPath(path);
    await sdk.requests.send(spec);
  });
}
```

## Using a Newly Created Request

To use invalid UTF-8 in the path of a `new RequestSpecRaw()` request, follow these steps:

### /packages/backend/src/index.ts

First, import the required dependencies. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return. `RequestSpecRaw` is an object class that is used to create a request in raw byte format.

``` ts
import { RequestSpecRaw } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";
```

Next, define a function that will convert the path string into an array of bytes.

``` ts
function stringToUint8Array(str: string): Uint8Array {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}
```

Create an instance of the `RequestSpecRaw` class, by supplying the target URL as the constructor.

``` ts
async function testSendRequest(sdk: SDK): Promise<void> {
  console.log("Testing send request");
  const req = new RequestSpecRaw("http://localhost:5555");
```

Call the `stringToUint8Array` function on the request data to convert it into a byte array. Send the request and if a response is received, print it in plaintext.

``` ts
  const rawRequest = "GET /admin\x85 HTTP/1.1\r\nHost: localhost:5555\r\n\r\n";
  req.setRaw(stringToUint8Array(rawRequest));

  const res = await sdk.requests.send(req);
  console.log(res?.response.getRaw().toText());
}
```

Since we are using a button on the frontend to issue this request, define the `testSendRequest` function as an API call and register it to the backend.

``` ts
export type API = DefineAPI<{
  testSendRequest: typeof testSendRequest;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("testSendRequest", testSendRequest);
}
```

### Calling from Frontend

To call the backend function from a Vue component:

```vue
<script setup lang="ts">
import Button from "primevue/button";
import { inject } from "vue";

const sdk = inject<CaidoSDK>("sdk");

const sendRequest = async () => {
  if (!sdk) return;
  await sdk.backend.testSendRequest();
};
</script>

<template>
  <div class="p-4">
    <Button label="Send Request" @click="sendRequest" />
  </div>
</template>
```

::: info
For information on creating pages and setting up Vue components, see [Create a Page](/guides/page.md).
:::
