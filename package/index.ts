import { UnbytedOptions } from './types'

class Unbyted {
  private readonly applyUnit: boolean
  private readonly allowBytes: boolean
  private readonly trimDecimals: boolean
  private readonly decimals: number
  private readonly binaryUnitValue: number
  private readonly decimalUnitValue: number
  private readonly binaryUnits: Set<string>
  private readonly decimalUnits: Set<string>

  constructor(options: UnbytedOptions = {}) {
    const { binaryUnits, decimalUnits, unit, bytes, trim, decimals } = options

    if (binaryUnits instanceof Array && binaryUnits.length !== 7) {
      throw new Error('binaryUnits requires an array containing 7 units.')
    }

    if (decimalUnits instanceof Array && decimalUnits.length !== 7) {
      throw new Error('binaryUnits requires an array containing 7 units.')
    }

    const defaultDecimalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
    const defaultBinaryUnits = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB']

    this.applyUnit = typeof unit === 'boolean' ? unit : true

    this.allowBytes = typeof bytes === 'boolean' ? bytes : false
    this.trimDecimals = typeof trim === 'boolean' ? trim : false

    this.decimals = typeof decimals === 'number' ? decimals : 2

    this.binaryUnitValue = 1024
    this.decimalUnitValue = 1000

    this.binaryUnits = new Set(
      binaryUnits instanceof Array ? binaryUnits : defaultBinaryUnits
    )
    this.decimalUnits = new Set(
      decimalUnits instanceof Array ? decimalUnits : defaultDecimalUnits
    )
  }

  /**
   * Formats bytes into readable `binary` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toBinaryString(bytes: number): string {
    return this.autoFormat(bytes, this.binaryUnitValue)
  }

  /**
   * Formats bytes into readable `decimal` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toDecimalString(bytes: number): string {
    return this.autoFormat(bytes, this.decimalUnitValue)
  }

  /**
   * Automatically format bytes into readable measurement units. This is used internally only.
   * @param {number} bytes the bytes to be formatted
   * @param {number} unitValue the base unit value for the conversion
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  private autoFormat(bytes: number, unitValue: number): string {
    if (typeof bytes !== 'number') {
      throw new TypeError(
        `The bytes cannot be of type '${typeof bytes}', enter a number please.`
      )
    }

    const { applyUnit, decimals, trimDecimals, allowBytes, binaryUnitValue } = this

    let result = ''

    /** The bytes to be converted. */
    const dividend = bytes >= 0 ? bytes : 0

    /** The exponent value calculated using the `bytes` and `unitValue` given*/
    let exponent = Math.max(0, Math.floor(Math.log(dividend) / Math.log(unitValue)))

    /** The quotient of the division (aka. measurement value) */
    let quotient = dividend / Math.pow(unitValue, exponent)

    /* Turn bytes into KB or KiB when `bytes` are not set to `true` */
    if (!allowBytes && dividend < unitValue) {
      quotient = quotient / unitValue
      exponent = exponent + 1
    }

    /** The string containing an unit based on the exponent and measurement unit value. */
    const measurementUnit =
      unitValue === binaryUnitValue
        ? Array.from(this.binaryUnits)[exponent]
        : Array.from(this.decimalUnits)[exponent]

    /* Format the quotient into an custom floating-point number */
    if (trimDecimals) {
      result = Number.parseFloat(quotient.toFixed(decimals)).toString()
    } else {
      result = Number.parseFloat(quotient.toString()).toFixed(decimals)
    }

    return applyUnit ? `${result} ${measurementUnit}` : result
  }
}

/**
 * Creates new Unbyted instace to format bytes into readable measurement units.
 * @param options the options to control how the bytes will be formatted
 * @return an API with methods to format bytes
 * @since v0.4.0
 * @example
 * ```js
 * unbyted().toBinaryString(1000) // Returns: 0.98 KiB
 * unbyted().toDecimalString(1000) // Returns: 1.00 KB
 * ```
 */
export default function unbyted(options?: UnbytedOptions): Unbyted {
  return new Unbyted(options)
}
