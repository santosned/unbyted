# Unbyted

Turn bytes into readable measurement units

## Features

- 🪶 **Small:** Barely **2 KB** gzipped
- 🗃️ **Typed:** Ships with **types & JSDoc**
- 💸 **Works everywhere:** Supports **browsers** and **Node.js**
- 🦅 **Dependency-free**

## Getting started

```js
import Unbyted from 'unbyted'

const unbyted = new Unbyted()

unbyted.toBinaryString(1000000) // Returns: 976.56 KiB
unbyted.toDecimalString(1000000) // Returns: 1.00 MB
```

## Measurement Units

[Unbyted](https://github.com/santosned/unbyted) uses [decimal](#decimal) and [binary](#binary) units of measurement to express the size of storage data.

### Binary

| Name     | Symbol | Value  |
| -------- | ------ | ------ |
| Kibibyte | `KiB`  | `2^10` |
| Mebibyte | `MiB`  | `2^20` |
| Gibibyte | `GiB`  | `2^30` |
| Tebibyte | `TiB`  | `2^40` |
| Pebibyte | `PiB`  | `2^50` |
| Exbibyte | `EiB`  | `2^60` |

### Decimal

| Name     | Symbol | Value   |
| -------- | ------ | ------- |
| Kilobyte | `KB`   | `10^3`  |
| Megabyte | `MB`   | `10^6`  |
| Gigabyte | `GB`   | `10^9`  |
| Terabyte | `TB`   | `10^12` |
| Petabyte | `PB`   | `10^15` |
| Exabyte  | `EB`   | `10^18` |

### Units difference

Between [Decimal](#decimal) and [Binary](#binary) units of measurement, [Binary](#binary) units of measurement express data size more accurately.

Despite the fact that the size difference between `100 KB` and `100 KiB` is just roughly 2.35%. This disparity grows as the number of data values rises.

For example, the size difference between `100 TB` and `100 TiB` is 9.06%.

Although there is no right or wrong answer, [Binary](#binary) units are usually more recommend.

## API

### Custom units

<details>
<summary><strong><code>new Unbyted(options)</code></strong></summary><br/>

```js
import Unbyted from 'unbyted'

// Include units of measurement or not (default: true)
new Unbyted({ unit: true })

// The number of decimals places (default: 2)
new Unbyted({ decimals: 2 })

// Remove zero from the end or not. (default: false)
new Unbyted({ trim: false })

// Display bytes (B) unit or not. (default: false)
new Unbyted({ bytes: false })

// Replace the default Decimal units with other units.
new Unbyted({
  decimalUnits: [
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Petabytes',
    'Exabytes',
  ],
})

// Replace the default Binary units with other units.
new Unbyted({
  decimalUnits: [
    'Bytes',
    'Kibibytes',
    'Mebibytes',
    'Gigibytes',
    'Tebibytes',
    'Pebibytes',
    'Exbibytes',
  ],
})
```

</details>

### Bytes formatting

<details>

<summary>
  <strong>
    <code>.toBinaryString(bytes)</code>
  </strong>
</summary>

<br/>

```js
const unbyted = new Unbyted()

unbyted.toBinaryString(1005980)
// Returns: 982.40 KiB
```

</details>

<details>

<summary>
  <strong>
    <code>.toDecimalString(bytes)</code>
  </strong>
</summary>

<br/>

```js
const unbyted = new Unbyted()

unbyted.toDecimalString(1005980)
// Returns: 1.01 MB
```

</details>

## License

Licensed under the [MIT](LICENSE.txt)
