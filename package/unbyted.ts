interface UnbytedOptions {
  /** Include units of measurement or not (default: true) */
  unit?: boolean

  /** The number of decimal places (default: 2) */
  decimals?: number

  /** Should remove zero from the end or not. (default: false) */
  trim?: boolean

  /**
   * Replace the default decimals units with other units.
   * @example
   * ```js
   * // The default decimal units:
   * ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
   * ```
   */
  decimalUnits?: string[]

  /**
   * Replace the default binary units with other units.
   * @example
   * ```js
   * // The default binary units:
   * ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB']
   * ```
   */
  binaryUnits?: string[]

  /** A `boolean` that controls whether or not bytes unit are displayed. By default, it's not displayed; instead, they are represented as 'KB' or 'KiB'. */
  bytes?: boolean
}

export class Unbyted {
  private readonly applyUnit: boolean
  private readonly allowBytes: boolean
  private readonly trimDecimals: boolean
  private readonly decimals: number
  private readonly binaryUnitValue: number
  private readonly decimalUnitValue: number
  private readonly binaryUnits: Set<string>
  private readonly decimalUnits: Set<string>

  /**
   * Format bytes into readable measurement units.
   * @param {object} options the options to control how the bytes will be formatted
   * @return {object} an API with methods to format bytes
   * @since v0.1.0
   */
  constructor(options: UnbytedOptions = {}) {
    const defaultDecimalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
    const defaultBinaryUnits = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB']

    this.applyUnit = typeof options?.unit === 'boolean' ? options.unit : true

    this.allowBytes = typeof options?.bytes === 'boolean' ? options.bytes : false
    this.trimDecimals = typeof options?.trim === 'boolean' ? options.trim : false

    this.decimals = typeof options?.decimals === 'number' ? options.decimals : 2

    this.binaryUnitValue = 1024
    this.decimalUnitValue = 1000

    this.binaryUnits = new Set(
      options?.binaryUnits instanceof Array ? options.binaryUnits : defaultBinaryUnits
    )
    this.decimalUnits = new Set(
      options?.decimalUnits instanceof Array ? options.decimalUnits : defaultDecimalUnits
    )
  }

  /**
   * Formats bytes into readable measurement `binary` units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toBinaryString(bytes: number = 0): string {
    return this.autoFormat(bytes, this.binaryUnitValue)
  }

  /**
   * Formats bytes into readable measurement `decimal` units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toDecimalString(bytes: number = 0): string {
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
    const { applyUnit, decimals, trimDecimals, allowBytes } = this

    let result = ''

    /** The bytes to be converted. */
    let dividend = bytes

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
      unitValue === this.binaryUnitValue
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
