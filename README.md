# Unbyted

![GitHub](https://img.shields.io/github/license/santosned/unbyted?style=flat&colorA=black&colorB=black)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/santosned/unbyted/node.js.yml?style=flat&colorA=black&colorB=black)
![GitHub issues](https://img.shields.io/github/issues/santosned/unbyted?style=flat&colorA=black&colorB=black)

Turn bytes into readable measurement units

**Unbyted** uses `decimal` and `binary` units of measurement to express the size of storage data.

[See more about the measurement units here](docs/MEASUREMENT_UNITS.md).

## Features

- 🪶 **Small:** Roughly **4 KB** gzipped
- 🗃️ **Typed:** Ships with **types & JSDoc**
- 🛡️ **Bulletproof**: Written in **TypeScript** with **100%** test coverage.
- 💸 **Works everywhere:** Supports **browsers** and **Node.js**
- 🦅 **Dependency-free**

## Getting started

```js
import unbyted from 'unbyted' // OR: const unbyted = require('unbyted')

const { toBinaryString, toDecimalString } = untyted({ trim: true })

toBinaryString(1000000) // Returns: 976.56 KiB
toDecimalString(1000000) // Returns: 1 MB
```

### Customisation options

| option           | type     | description                                               |
| ---------------- | -------- | --------------------------------------------------------- |
| `trim`           | boolean  | Trim decimal numbers when needed. (default: false)        |
| `symbols`        | boolean  | Include unit's symbols or not. (default: true)            |
| `includeBytes`   | boolean  | Display bytes (B) unit or not. (default: false)           |
| `decimals`       | number   | The number of decimal places. (default: 2)                |
| `bytesInBinary`  | number   | The bytes value in one binary unit. (default: `1024`)     |
| `bytesInDecimal` | number   | The bytes value in one decimal unit. (default: `1000`)    |
| `binaryUnits`    | string[] | Define custom binary units symbols. (Requires 7 strings)  |
| `decimalUnits`   | string[] | Define custom decimal units symbols. (Requires 7 strings) |

## Contributing

See the [contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project.

## Feedback

- 🙋 Ask questions at [Github Q&A](https://github.com/santosned/unbyted/discussions/categories/q-a)
- 📝 Request new features at [Github Issues](https://github.com/santosned/unbyted/issues)
- ⭐ Leave a star on the repo

## License

Licensed under the [MIT](LICENSE.txt)
