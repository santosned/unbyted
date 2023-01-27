type UnitsLength<T, N extends number, R extends T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
  ? R
  : UnitsLength<T, N, [T, ...R]>
export type Required<T> = {
  [P in keyof T]-?: T[P]
}
export interface UnbytedOptions {
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

export type UnbytedReturns = {
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
