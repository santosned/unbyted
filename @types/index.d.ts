export {}
declare type UnitsLength<T, N extends number, R extends T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
  ? R
  : UnitsLength<T, N, [T, ...R]>
declare type Required<T> = {
  [P in keyof T]-?: T[P]
}
declare interface UnbytedOptions {
  /** Include units of measurement or not. (default: true) */
  unit?: boolean
  /** The number of decimal places. (default: 2) */
  decimals?: number
  /** Should remove zero from the end or not. (default: false) */
  trim?: boolean
  /** Replace the default decimals symbols with 7 other units symbols. */
  decimalUnits?: UnitsLength<string, 7>
  /** Replace the default binary symbols with 7 other units symbols. */
  binaryUnits?: UnitsLength<string, 7>
  /** Display bytes (B) unit or not. (default: false) */
  includeBytes?: boolean
  /** Change the default binary unit value. (default: 1024) */
  defaultBinaryUnitValue?: number
  /** Change the default decimal unit value. (default: 1000) */
  defaultDecimalUnitValue?: number
}
declare type UnbytedReturns = {
  /**
   * Formats bytes into readable `binary` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  toBinaryString(bytes: number): string
  /**
   * Formats bytes into readable `decimal` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  toDecimalString(bytes: number): string
}

/**
 * Automatically format bytes into readable measurement units. This is used internally only.
 * @param {number} bytes the bytes to be formatted
 * @param {string} key the key of the selected unit value
 * @return {string} an string containing the formatted bytes
 * @since v0.1.0
 */
declare function autoFormat(
  bytes: number,
  key: 'binaryUnits' | 'decimalUnits',
  config: Required<UnbytedOptions>
): string

/**
 * Creates new Unbyted instace to format bytes into readable measurement units.
 * @param options the options to control how the bytes will be formatted
 * @return properties to format bytes into [decimal](https://github.com/santosned/unbyted#decimal) or [binary](https://github.com/santosned/unbyted#binary) measurement units.
 * @since v1.0.0
 * @example
 * ```js
 * unbyted().toBinaryString(1000) // Returns: 0.98 KiB
 * unbyted().toDecimalString(1000) // Returns: 1.00 KB
 * ```
 */
declare function unbyted(options?: UnbytedOptions): UnbytedReturns

export = unbyted
