type UnitsLength<T, N extends number, R extends T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
  ? R
  : UnitsLength<T, N, [T, ...R]>

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
  bytes?: boolean
}
