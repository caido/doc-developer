# Dealing with Binary Data

Caido plugins are written in JavaScript. When creating a plugin that must handle raw bytes, there are some caveats to be aware of as the backend language used by Caido is Rust.

## UTF-8 Encoding

For Unicode code points outside of the ASCII range <span style="color: #EBEBF599; font-style: italic">(U+0000 to U+007F)</span> multiple bytes are used.

When encoding code points into multibyte UTF-8 characters, the bytes are prefixed with specific bit patterns. The first byte prefix indicates how many bytes are used based on the number of leading '1's, and any subsequent <span style="color: #EBEBF599; font-style: italic">(continuation)</span> bytes begin with '10'.

<img alt="UTF-8 encoding chart." src="/_images/utf_chart.png" center/>

This can be an issue if you want to create a Caido plugin that sends invalid UTF-8 to a target server to see how it is processed.

For example, if your intention is to append the byte `\x85` (`[1000 0101]`) to a path:

1. JavaScript strings are encoded using UTF-16 (`[0000 0000 1000 0101]`).
2. When passed to Rust, it is encoded as UTF-8. To produce valid UTF-8, the prefix is added to satisfy the multibyte pattern rules:
   - First byte `C2`: `[1100 0010]` <span style="color: #EBEBF599; font-style: italic">(prefix marks start of 2-byte sequence)</span>
   - Second byte `85`: `[1000 0101]` <span style="color: #EBEBF599; font-style: italic">(continuation byte)</span>
3. Now, `[1100 0010 1000 0101]` is sent instead of the intended `[1000 0101]`.

::: tip
You can view this visually by listening for the request with Netcat:

`ncat -lvnp 5555`

<img alt="Unprintable character." src="/_images/replaced_character.png" center/>

You can view the bytes by piping `xxd` to display the hex dump:

`ncat -lvnp 5555 | xxd -g1`

<img alt="C2 85" src="/_images/rust_conversion.png" center/>
:::

## Preserving the Raw Byte

To avoid the conversion, the raw byte must be used instead. This can be accomplished by:

1. Taking a request and returning a UInt8Array byte stream:

`.getPath({raw: true})`

2. Creating a new array that includes the existing bytes and the added byte:

`let path = [...spec.getPath({raw: true}), 0x85]`

3. Setting the path to use this new array:

`spec.setPath(path)`

::: tip
Now, `C2` will not be prefixed:

`ncat -lvnp 5555 | xxd -g1`

<img alt="Just \x85." src="/_images/raw_byte_example.png" center/>
:::

## What's next?

To view the full script and an additional technique that can be used to set raw bytes in Caido plugins, click [here](/guides/components/utf.md).
