export {}
declare type UnbytedOptions = {
  /**Trim decimal numbers when needed (default: false)*/
  trim?: boolean
  /**Include unit's symbols or not (default: true)*/
  symbols?: boolean
  /**Display bytes (B) unit or not (default: false)*/
  includeBytes?: boolean
  /**The number of decimal places (default: 2)*/
  digits?: number
  /**Change the locales used (default: en-US)*/
  locales?: string
  /**Change the unit symbol display format (default: short)*/
  unitDisplay?: 'long' | 'short' | 'narrow'
  /**Change the conversion precision (default: 9)*/
  precision?: number
}
declare type UnbytedReturns = {
  /**Formats bytes into readable `binary` measurement units
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes*/
  toBinaryString(bytes: number): string
  /**Formats bytes into readable `decimal` measurement units
   * @param bytes the bytes to be formatted
   * @return an string containing the formatted bytes*/
  toDecimalString(bytes: number): string
}
/**Creates new Unbyted instance
 * @param options the options to control how the bytes will be formatted
 * @return methods to turn bytes into readable measurement units
 * @example
 * ```js
 * unbyted().toBinaryString(1000) // Returns: 0.98 KiB
 * unbyted().toDecimalString(1000) // Returns: 1.00 KB
 * ``` */
declare function unbyted(options?: UnbytedOptions): UnbytedReturns
export = unbyted
