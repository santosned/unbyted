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
  /** The number of decimal places. (default: 3) */
  digits?: number
  /** Change the conversion precision. (default: 9) */
  precision?: number
  /** Change the locales format used. (default: en) */
  locales?: string
  /** Change the unit symbol display. (default: short) */
  unitDisplay?: 'long' | 'short' | 'narrow'
}

export type FormatConfig = Required<UnbytedOptions>

export type UnbytedReturns = {
  /**
   * Formats bytes into readable `binary` measurement units.
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes
   * @since v0.1.0
   */
  toBinaryString(bytes: number): string

  /**
   * Formats bytes into readable `decimal` measurement units.
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes
   * @since v0.1.0
   */
  toDecimalString(bytes: number): string
}
