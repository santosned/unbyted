export {}
type R<T> = {
  [P in keyof T]-?: T[P]
}
declare type UnbytedOptions = {
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
declare type FC = R<UnbytedOptions>
declare type UnbytedReturns = {
  /**
   * Formats bytes into readable `binary` measurement units
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes
   */
  toBinaryString(bytes: number): string
  /**
   * Formats bytes into readable `decimal` measurement units
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes
   */
  toDecimalString(bytes: number): string
}
declare function autoFormat(bytes: number, key: 'binaryUnits' | 'decimalUnits', config: FC): string
/**
 * Creates new Unbyted instance
 * @param options the options to control how the bytes will be formatted
 * @return methods to turn bytes into readable measurement units
 * @example
 * ```js
 * unbyted().toBinaryString(1000) // Returns: 0.98 KiB
 * unbyted().toDecimalString(1000) // Returns: 1.00 KB
 * ```
 */
declare function unbyted(options?: UnbytedOptions): UnbytedReturns
export = unbyted
