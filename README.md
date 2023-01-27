# Unbyted

![GitHub](https://img.shields.io/github/license/santosned/unbyted?style=flat&colorA=black&colorB=black)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/santosned/unbyted/node.js.yml?style=flat&colorA=black&colorB=black)
![GitHub issues](https://img.shields.io/github/issues/santosned/unbyted?style=flat&colorA=black&colorB=black)

Turn bytes into readable measurement units

## Features

- 🪶 **Small:** Roughly **4 KB** gzipped
- 🗃️ **Typed:** Ships with **types & JSDoc**
- 🛡️ **Bulletproof**: Written in **TypeScript** with **100%** test coverage.
- 💸 **Works everywhere:** Supports **browsers** and **Node.js**
- 🦅 **Dependency-free**

## Getting started

```js
import unbyted from 'unbyted'

unbyted().toBinaryString(1000000) // Returns: 976.56 KiB
unbyted().toDecimalString(1000000) // Returns: 1.00 MB
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

<summary>
  <strong>
    <code>unbyted(options)</code>
  </strong>
</summary>

<br/>

```js
const unbyted = require('unbyted')

// Include units of measurement or not (default: true)
unbyted({ unit: true })

// The number of decimals places (default: 2)
unbyted({ decimals: 2 })

// Remove zero from the end or not. (default: false)
unbyted({ trim: false })

// Display bytes (B) unit or not. (default: false)
unbyted({ includeBytes: false })

// Replace the default decimals symbols with 7 other units symbols.
unbyted({
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

// Replace the default binary symbols with 7 other units symbols.
unbyted({
  binaryUnits: [
    'Bytes',
    'Kibibytes',
    'Mebibytes',
    'Gigibytes',
    'Tebibytes',
    'Pebibytes',
    'Exbibytes',
  ],
})

// Change the default binary unit value. (default: 1024)
unbyted({
  defaultBinaryUnitValue: 1024,
})

// Change the default decimal unit value. (default: 1000)
unbyted({
  defaultDecimalUnitValue: 1000,
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
unbyted().toBinaryString(1005980) // Returns: 982.40 KiB
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
unbyted().toDecimalString(1005980) // Returns: 1.01 MB
```

</details>

## Contributing

See the [contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project.

There are a few [types of contributions](docs/contributing/TYPES_OF_CONTRIBUTIONS.md) welcomed, some of which do not require you to write a single line of code.

If you want to contribute, you can go through our [existing issues](https://github.com/santosned/unbyted/issues) for something to work on. When you're ready, go to [Getting Started with Contributing](CONTRIBUTING.md) for more information.

## Feedback

- 🙋 Ask questions at [Github Q&A](https://github.com/santosned/unbyted/discussions/categories/q-a)
- 📝 Request new features at [Github Issues](https://github.com/santosned/unbyted/issues) or [Github Ideas](https://github.com/santosned/unbyted/discussions/categories/ideas)
- ⭐ Leave a star on the repo

## License

Licensed under the [MIT](LICENSE.txt)
