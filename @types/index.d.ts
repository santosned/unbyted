export {}
declare type UnitsLength<T, N extends number, R extends T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
  ? R
  : UnitsLength<T, N, [T, ...R]>
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
  bytes?: boolean
}
declare class Unbyted {
  private readonly applyUnit
  private readonly allowBytes
  private readonly trimDecimals
  private readonly decimals
  private readonly binaryUnitValue
  private readonly decimalUnitValue
  private readonly binaryUnits
  private readonly decimalUnits
  constructor(options?: UnbytedOptions)
  /**
   * Formats bytes into readable `binary` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toBinaryString(bytes: number): string
  /**
   * Formats bytes into readable `decimal` measurement units.
   * @param {number} bytes the bytes to be formatted
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  public toDecimalString(bytes: number): string
  /**
   * Automatically format bytes into readable measurement units. This is used internally only.
   * @param {number} bytes the bytes to be formatted
   * @param {number} unitValue the base unit value for the conversion
   * @return {string} an string containing the formatted bytes
   * @since v0.1.0
   */
  private autoFormat(bytes: number, unitValue: number): string
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
declare function unbyted(options?: UnbytedOptions): Unbyted
export = unbyted
