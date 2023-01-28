type Required<T> = {
  [P in keyof T]-?: T[P]
}
export interface UnbytedOptions {
  /** Trim decimal numbers when needed. (default: false) */
  trim?: boolean
  /** Include unit's symbols or not. (default: true) */
  symbols?: boolean
  /** Display bytes (B) unit or not. (default: false) */
  includeBytes?: boolean
  /** The number of decimal places. (default: 2) */
  decimals?: number
  /** The bytes value in one binary unit. (default: `1024`) */
  bytesInBinary?: number
  /** The bytes value in one decimal unit. (default: `1000`) */
  bytesInDecimal?: number
  /** Define custom decimal units symbols. (Requires 7 strings) */
  binaryUnits?: [string, string, string, string, string, string, string]
  /** Define custom binary units symbols. (Requires 7 strings) */
  decimalUnits?: [string, string, string, string, string, string, string]
}

export type FormatConfig = Required<UnbytedOptions>

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
