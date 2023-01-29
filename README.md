# Unbyted

![GitHub](https://img.shields.io/github/license/santosned/unbyted?style=flat&colorA=black&colorB=black)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/santosned/unbyted/node.js.yml?style=flat&colorA=black&colorB=black)
![GitHub issues](https://img.shields.io/github/issues/santosned/unbyted?style=flat&colorA=black&colorB=black)

Turn bytes into readable measurement units

**Unbyted** uses `decimal` and `binary` units of measurement to express the size of storage data.

See more about [Unbyted measurement units](docs/MEASUREMENT_UNITS.md).

## Features

- 🪶 **Small:** Roughly **4 KB** gzipped
- 🗃️ **Typed:** Ships with **types & JSDoc**
- 🛡️ **Bulletproof**: Written in **TypeScript** with **100%** test coverage.
- 💸 **Works everywhere:** Supports **browsers** and **Node.js**
- 🦅 **Dependency-free**

## Getting started

After you run `npm i unbyted`, try it out:

```js
import unbyted from 'unbyted' // OR: const unbyted = require('unbyted')

const { toBinaryString, toDecimalString } = unbyted({ trim: true })

toBinaryString(1000) // Returns: 0.98 KiB
toDecimalString(1000) // Returns: 1 KB
```

See the [API documentation](docs/UNBYTED_API.md) to learn more about options and usage.

## Contributing

See the [contributing guide](CONTRIBUTING.md) for detailed instructions on how to get started with our project.

## Feedback

- 🙋 Ask questions at [Github Q&A](https://github.com/santosned/unbyted/discussions/categories/q-a)
- 📝 Request new features at [Github Issues](https://github.com/santosned/unbyted/issues)
- ⭐ Leave a star on the [repo](https://github.com/santosned/unbyted)
