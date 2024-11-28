# Dealing with Binary Data


``` ts
import { RequestSpecRaw } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

// Function to convert a string into an array of bytes.
function stringToUint8Array(str: string): Uint8Array {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

async function testSendRequest(sdk: SDK): Promise<void> {
  console.log("Testing send request");
  // Create a new request using bytes.
  const req = new RequestSpecRaw("http://localhost:5555");

  // Convert the request line into a byte array.
  const rawRequest = "GET /admin\x85 HTTP/1.1\r\nHost: localhost:5555\r\n\r\n";
  req.setRaw(stringToUint8Array(rawRequest));

  // Send the request.
  const res = await sdk.requests.send(req);
  console.log(res?.response.getRaw().toText());
}

// Define the API for the plugin.
export type API = DefineAPI<{
  testSendRequest: typeof testSendRequest;
}>;

// Initialize the plugin.
export function init(sdk: SDK<API>) {
  sdk.api.register("testSendRequest", testSendRequest);
}
```
