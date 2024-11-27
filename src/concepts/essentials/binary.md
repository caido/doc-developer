# Dealing with Binary Data

## Unicode and Unicode Encoding

<span style="color: #DAA520; font-weight: bold">Unicode</span> was created to be the single source-of-truth for character encoding for universal interoperability between devices past the [7-bit ASCII](https://www.ascii-code.com/ASCII) range. There are 128 characters in ASCII <span style="color: #EBEBF599; font-style: italic">(0 to 127)</span>, as use of 7 bits <span style="color: #EBEBF599; font-style: italic">(01111111)</span> results in a decimal value of 127. The additional character assignments for 128 to 256 that the 8th bit provides was a source of contention.

To allow for more character references than the 256 provided by a single byte <span style="color: #EBEBF599; font-style: italic">(so people wouldn't argue over how to use the 8th bit)</span>  Unicode simply uses multiple bytes. With this, Unicode can accommodate all characters from different languages <span style="color: #EBEBF599; font-style: italic">(_as well as characters like emojis_)</span> by referencing them with abstract <span style="color: #DAA520">code points</span>.

These code points are written as `U+XXXX` where `XXXX` is a series of hexadecimal digits, each character representing 4 bits <span style="color: #EBEBF599; font-style: italic">(half a byte)</span>. They range from `U+0000` to `U+10FFFF`, meaning there are 1,114,112 unique code points. However, as of v16.0, only 155,063 have been assigned to characters.

Currently, all usable characters can be represented with the use of 18 bits.

_You can view a list of Unicode characters [here](https://en.wikipedia.org/wiki/List_of_Unicode_characters)._

<img alt="UTF Chart." src="/_images/chart_unicode.png" center/>

Code points are made of one or more <span style="color: #DAA520">code units</span>.

The number of bits in each code unit differs between Unicode encoding formats. These formats convert the abstract code points into a specific byte sequence. The most commonly used being:

### UTF-8

UTF-8 is considered to be "variable length encoding" as it uses 1 to 4 code units of 8 bits each <span style="color: #EBEBF599; font-style: italic">(bytes)</span>.

Unicode is backwards compatible with the 7-bit ASCII range. So any of those characters are represented as a single byte. For example, the `A` character is within the ASCII range of 0 to 127 with a decimal value of 65. In binary it is `01000001` and in hexadecimal it is `41`. Since it can be represented using a single code unit <span style="color: #EBEBF599; font-style: italic">(byte)</span>, its code point is `U+0041`. Which in UTF-8 is `0x41`.

However, since 8 bits is _not_ enough to cover the entire Unicode space <span style="color: #EBEBF599; font-style: italic">(18 bits required)</span>, it may take up to four code units to encode a single code point.

::: info
When encoding code points with values larger than 2^8, we use the following code unit templates:

`[110 xxxxx][10xxxxxx]` => If the code point is between `U+0080` to `U+07FF`, 2 code units required <span style="color: #EBEBF599; font-style: italic">(as shown by the 110 prefix)</span>.

`[1110 xxxx][10xxxxxx][10xxxxxx]` => If the code point is between `U+0800` to `U+FFFF`, 3 code units required <span style="color: #EBEBF599; font-style: italic">(as shown by the 1110 prefix)</span>.

`[11110 xxx][10xxxxxx][10xxxxxx][10xxxxxx]` => If the code point is between `U+10000` to `U+10FFFF`, 4 code units required <span style="color: #EBEBF599; font-style: italic">(as shown by the 11110 prefix)</span>.

:::

::: tip EXAMPLE

To encode 👍 (`U+1F44D`), first convert it to binary:

- 1: `0001`
- F: `1111`
- 4: `0100`
- 4: `0100`
- D: `1101`

Since U+1F44D is greater than U+FFFF, it needs 4 bytes in UTF-8.
:::

### UTF-16

UTF-16 is also considered to be variable length encoding that uses 1 to 2 code units of 16 bits each <span style="color: #EBEBF599; font-style: italic">(2 bytes per unit)</span>.

Since 16 bits is _not_ enough to cover the entire Unicode space <span style="color: #EBEBF599; font-style: italic">(18 bits required)</span>, it may take up to two code units to encode a single code point.
This pair of code units is called a "surrogate pair" in UTF-16 nomenclature. Surrogate pairs are code units in the range of `0xD800` to `0xDFFF`.

::: info
When encoding code points with values larger than 2^16, we use the following code unit template: `[110110xx xxxxxxxx] [110111yy yyyyyyyy]`

1. Subtract `0x10000` from the value of the code point.
2. Convert the resulting value into binary.
3. Take the 10 lower bits of the resulting binary and replace the `y` characters.
4. Take the 10 higher bits of the resulting binary and replace the `x` characters.
:::

::: tip EXAMPLE
To encode 👍 (`U+1F44D`), we must use 2 code units:

1. Subtract `0x10000` from `0x1F44d` => `0xF44d`

2. Convert `0xF44D to binary` => `11110100 01001101`

3. Replace the 10 lower bits in the template:  `[110110xx xxxxxxxx] [11011100 01001101]`

4. Replace the 10 higher bits in the template: `[11011000 00111101] [11011100 01001101]`

This results in two code units: `[0xd8 0x7d] [0xdc 0x4d]`
:::

### UTF-32

Fixed length encoding that uses 4 code units of 8 bits each (bytes).
