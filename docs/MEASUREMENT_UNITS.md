# Digital Measurement Units

**Unbyted** supports a total of `16` customizable units 😋 🎉

In comparission the [Intl.NumberFormat()](https://v8.dev/features/intl-numberformat) supports only `11` digital units.

### Binary

| Name     | Symbol | Value  |
| -------- | ------ | ------ |
| Kibibyte | `KiB`  | `2e10` |
| Mebibyte | `MiB`  | `2e20` |
| Gibibyte | `GiB`  | `2e30` |
| Tebibyte | `TiB`  | `2e40` |
| Pebibyte | `PiB`  | `2e50` |
| Exbibyte | `EiB`  | `2e60` |
| Zebibyte | `ZiB`  | `2e70` |
| Yobibyte | `YiB`  | `2e80` |

### Decimal

| Name      | Symbol | Value   |
| --------- | ------ | ------- |
| Kilobyte  | `KB`   | `10e3`  |
| Megabyte  | `MB`   | `10e6`  |
| Gigabyte  | `GB`   | `10e9`  |
| Terabyte  | `TB`   | `10e12` |
| Petabyte  | `PB`   | `10e15` |
| Exabyte   | `EB`   | `10e18` |
| Zettabyte | `ZB`   | `10e21` |
| Yottabyte | `YB`   | `10e24` |

### Units difference

Between [Decimal](#decimal) and [Binary](#binary) units of measurement, [Binary](#binary) units express data size more accurately.

For example, the size difference between `100 Kilobyte` and `100 Kibibyte` is just roughly 2.35%. However, this disparity grows as the number of data value rises.
