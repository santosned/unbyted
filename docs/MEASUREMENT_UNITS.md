# Measurement Units

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

Between [Decimal](#decimal) and [Binary](#binary) units of measurement, [Binary](#binary) units express data size more accurately.

The size difference between `100 Kilobyte` and `100 Kibibyte` is just roughly 2.35%. However, this disparity shouldn't be ignored since it grows as the number of data values rises.

For example, the size difference between `100 TB` and `100 TiB` is about 9.06%.

Although there is no right or wrong answer, [Binary](#binary) units are **usually** more used for measurement of software data, while [Decimal](#decimal) is widely used to measure memory of hardwares.
