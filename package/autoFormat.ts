import { FormatConfig } from './types'

/**
 * Automatically format bytes into readable measurement units. This is used internally only.
 * @param bytes the bytes to be formatted
 * @param key the key of the selected unit value
 * @return an string containing the formatted bytes
 * @since v0.1.0
 */
export function autoFormat(
  bytes: number,
  key: 'binaryUnits' | 'decimalUnits',
  config: FormatConfig
): string {
  if (typeof bytes !== 'number') {
    throw new TypeError(`The bytes cannot be of type '${typeof bytes}', enter a number please.`)
  }

  let result = ''

  /** the base unit value for the conversion  */
  const unitValue = key === 'binaryUnits' ? config.bytesInBinary : config.bytesInDecimal

  /** The bytes to be converted. */
  const dividend = bytes >= 0 ? bytes : 0

  /** The exponent value calculated using the `bytes` and `unitValue` given*/
  let exponent = Math.max(0, Math.floor(Math.log(dividend) / Math.log(unitValue)))

  /** The quotient of the division (aka. measurement value) */
  let quotient = dividend / Math.pow(unitValue, exponent)

  /* Turn bytes into KB or KiB when `includeBytes` are set to `false` */
  if (!config.includeBytes && dividend < unitValue) {
    quotient = quotient / unitValue
    exponent = exponent + 1
  }

  /** The string containing an unit based on the exponent and measurement unit value. */
  const measurementUnit = config[key][exponent]

  /* Format the quotient into an custom floating-point number */
  if (config.trim) {
    result = Number.parseFloat(quotient.toFixed(config.decimals)).toString()
  } else {
    result = Number.parseFloat(quotient.toString()).toFixed(config.decimals)
  }

  return config.symbols ? `${result} ${measurementUnit}` : result
}
