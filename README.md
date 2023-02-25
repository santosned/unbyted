# Unbyted

![GitHub License](https://img.shields.io/github/license/santosned/unbyted?style=flat&colorA=black&colorB=black)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/santosned/unbyted/node.js.yml?style=flat&colorA=black&colorB=black)
![GitHub issues](https://img.shields.io/github/issues/santosned/unbyted?style=flat&colorA=black&colorB=black)

Turn bytes into readable measurement units

## Getting started

```sh
npm i unbyted
```

```js
const Unbyted = require('unbyted')

Unbyted.toBinary(401710738) // 383.10 MiB
Unbyted.toDecimal(401710738) // 401.71 MB
```

## Digital Measurement Units

**Unbyted** can use **decimal** nor **binary** units of measurement to express the size of storage data.

| Decimal   | Symbol | Value   |     | Binary   | Symbol | Value  |
| --------- | ------ | ------- | --- | -------- | ------ | ------ |
| Kilobyte  | `KB`   | `10e3`  |     | Kibibyte | `KiB`  | `2e10` |
| Megabyte  | `MB`   | `10e6`  |     | Mebibyte | `MiB`  | `2e20` |
| Gigabyte  | `GB`   | `10e9`  |     | Gibibyte | `GiB`  | `2e30` |
| Terabyte  | `TB`   | `10e12` |     | Tebibyte | `TiB`  | `2e40` |
| Petabyte  | `PB`   | `10e15` |     | Pebibyte | `PiB`  | `2e50` |
| Exabyte   | `EB`   | `10e18` |     | Exbibyte | `EiB`  | `2e60` |
| Zettabyte | `ZB`   | `10e21` |     | Zebibyte | `ZiB`  | `2e70` |
| Yottabyte | `YB`   | `10e24` |     | Yobibyte | `YiB`  | `2e80` |

### Units difference

Between **decimal** and **binary** units of measurement, **binary** units express data size more **accurately**.

Nonetheless, **decimal** units is the most widely used. Sometimes, you can find a mix between binary values and decimal symbols, which is not encouraged since there's a significant technical difference.

## API

### new Unbyted(options)

- `options`
  - `space` **boolean** Add space between or not. **Default:** `true`
  - `trim` **boolean** Trim fraction digits when needed. **Default:** `false`
  - `digits` **number** The number of fraction digits. **Default:** `2`

When called as a constructor, allows you to customize the output.

```js
const unbyted = new Unbyted({ trim: true, space: false })

unbyted.toBinary(10240) // 10KB
unbyted.toDecimal(10000) // 10KB
```

#### .toBinary(input)

Static method to run quick binary conversions.

```js
Unbyted.toBinary(255492) // 249.50 KiB
Unbyted.toBinary(255529156) // 243.69 MiB
Unbyted.toBinary(25552915675) // 23.80 GiB
```

#### .toDecimal(input)

Static method to run quick decimal conversions.

```js
Unbyted.toDecimal(255492) // 255.49 KB
Unbyted.toDecimal(255529156) // 255.53 MB
Unbyted.toDecimal(25552915675) // 25.55 GB
```

## Benchmarks

> Runned on a Linux VM, allocated resources: Intel 2.5GHz, 2 Cores & 2 Threads; 4GB RAM;

| Method              | Operations/s |
| ------------------- | ------------ |
| Unbyted.toBinary()  | 3 057 603    |
| Unbyted.toDecimal() | 3 053 408    |

You are free to [run your own benchmarks](docs/contributing/BENCHMARKS.md), and share the results at [Show & Tell](https://github.com/santosned/unbyted/discussions/categories/show-and-tell).
