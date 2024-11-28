# Dealing with Binary Data

Caido plugins are written in JavaScript. When creating a plugin that must handle raw bytes, there are some caveats to be aware of as the backend language used by Caido is Rust.

## UTF-8 Encoding

For Unicode code points outside of the ASCII range <span style="color: #EBEBF599; font-style: italic">(U+0000 to U+007F)</span> multiple bytes are used.

When encoding code points into multibyte UTF-8 characters, the bytes are prefixed with specific bit patterns. The first byte prefix indicates how many bytes are used, and any subsequent bytes begin with 10.

<img alt="UTF-8 encoding chart." src="/_images/utf_chart.png" center/>

This can be an issue if you want to create a Caido plugin that sends binary to a target server to see how it is processed.

## Example

Consider this `/packages/backend/src/index.ts` file:

``` ts
import { RequestSpecRaw } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

async function testSendRequest(sdk: SDK): Promise<void> {
  console.log("Testing send request");
  const req = new RequestSpecRaw("http://localhost:5555");
  req.setRaw("GET /admin\x85 HTTP/1.1\r\nHost: HOST\r\n\r\n");

  const res = await sdk.requests.send(req);
  console.log(res?.response.getRaw().toText());
}
```

The intention is to send the byte `\x85` with a binary value of `[1000 0101]`. However, JavaScript is interpreting it as the Unicode code point.

::: info This happens because:

1. JavaScript strings are UTF-16 encoded.
2. `\x85` in a string becomes `U+0085` in UTF-16 (`[0000 0000 1000 0101]`).
3. When passed to Rust, `U+0085` is encoded as UTF-8:
   - First byte `C2`: `[11000010]` <span style="color: #EBEBF599; font-style: italic">(prefix marks start of 2-byte sequence)</span>
   - Second byte `85`: `[10000101]` <span style="color: #EBEBF599; font-style: italic">(continuation byte)</span>
:::

This will result in it being interpreted as the unprintable `NEL` <span style="color: #EBEBF599; font-style: italic">(Next Line)</span> character, which will be replaced with `�`.

::: tip
You can view this visually by listening for the request with Netcat:

`ncat -lvnp 5555`

<img alt="Unprintable character." src="/_images/replaced_character.png" center/>

You can view the bytes by piping `xxd` to display the hex dump:

`ncat -lvnp 5555 | xxd -g1`

<img alt="C2 85" src="/_images/rust_conversion.png" center/>
:::

To preserve the byte, the raw byte must be used instead. By sending it raw, it is invalid UTF-8. When the target receives invalid UTF-8 it may fallback to a different encoding standard to try and make sense of it:

::: info Byte value: `0x85`

Different interpretations:

1. In CP437 (IBM PC): `å` <span style="color: #EBEBF599; font-style: italic">(lowercase a with ring)</span>
2. In Windows-1252: `…` <span style="color: #EBEBF599; font-style: italic">(horizontal ellipsis)</span>
3. As Unicode code point U+0085: `NEL` <span style="color: #EBEBF599; font-style: italic">(Next Line)</span>
4. As raw byte: `133` <span style="color: #EBEBF599; font-style: italic">(in decimal)</span>
:::

This can result in security bypasses. For example, if a validation filter is matching against the `/admin` path, if it receives `/admin…` it may allow the request to pass through.

To learn how you can use raw bytes in Caido plugins, click [here](/guides/components/utf.md).
