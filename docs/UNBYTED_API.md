# Unbyted API

Here are information about **Unbyted API**.

- [Unbyted API](#unbyted-api)
  - [unbyted(\[options\])](#unbytedoptions)
    - [.toBinaryString(bytes)](#tobinarystringbytes)
    - [.toDecimalString(bytes)](#todecimalstringbytes)
  - [Usage](#usage)
    - [trim](#trim)
    - [symbols](#symbols)
    - [includeBytes](#includebytes)
    - [digits](#digits)
    - [precision](#precision)
    - [locales](#locales)
    - [unitDisplay](#unitdisplay)
  - [Other Resources](#other-resources)

## unbyted([options])

**Added: v1.2.0**

- `options` [\<Object\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
  - `trim` [\<boolean\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) Trim decimal numbers when needed. **Default:** `false`
  - `symbols` [\<boolean\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) Include unit's symbols or not. **Default:** `true`
  - `includeBytes` [\<boolean\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) Display bytes (B) unit or not. **Default:** `false`
  - `digits` [\<number\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Change the number of fraction digits. **Default:** `2`
  - `precision` [\<number\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Change the conversion precision. **Default:** `9`
  - `locales` [\<string\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Change the locales used. **Default:** `en`
  - `unitDisplay` [\<string\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Change the unit symbol display. **Default:** `short`

All the options can work with [.toDecimalString()](#todecimalstringbytes) or [.toBinaryString()](#tobinarystringbytes).

> ⚠️ The options `digits` and `precision` can severely affect the accuracy nor performance, use them carefully.

### .toBinaryString(bytes)

**Added: v0.1.0**

- `bytes` [\<number\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) the bytes to be converted.

### .toDecimalString(bytes)

**Added: v0.1.0**

- `bytes` [\<number\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) the bytes to be converted.

## Usage

### trim

```js
unbyted({ trim: false }).toDecimalString(1000) // Returns: 1.00 KB
unbyted({ trim: true }).toDecimalString(1000) // Returns: 1 KB
```

### symbols

```js
unbyted({ symbols: true }).toDecimalString(1000) // Returns: 1.00 KB
unbyted({ symbols: false }).toDecimalString(1000) // Returns: 1.00
```

### includeBytes

```js
unbyted({ includeBytes: false }).toDecimalString(100) // Returns: 0.10 KB
unbyted({ includeBytes: true }).toDecimalString(100) // Returns: 100 B
```

### digits

```js
unbyted({ digits: 0 }).toBinaryString(100) // Returns: 0 KiB
unbyted({ digits: 2 }).toBinaryString(100) // Returns: 0.10 KiB
unbyted({ digits: 4 }).toBinaryString(100) // Returns: 0.0977 KiB
```

### precision

```js
unbyted({ precision: 9 }).toBinaryString(1000000) // Returns: 976.56 KiB
unbyted({ precision: 2 }).toBinaryString(1000000) // Returns: 977.00 KiB
```

### locales

```js
unbyted({ locales: 'en' }).toBinaryString(100) // Returns: 12.06 KiB
unbyted({ locales: 'pt' }).toBinaryString(100) // Returns: 12,06 KiB
```

### unitDisplay

```js
unbyted({ unitDisplay: 'short' }).toBinaryString(100) // Returns: 0.10 KiB
unbyted({ unitDisplay: 'narrow' }).toBinaryString(100) // Returns: 0.10KiB
unbyted({ unitDisplay: 'long' }).toBinaryString(100) // Returns: 0.10 Kibibyte
```

## Other Resources

- [Unbyted Measurement Units](MEASUREMENT_UNITS.md)
