import { autoFormat } from './autoFormat'
import { FormatConfig, UnbytedOptions, UnbytedReturns } from './types'

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
export function unbyted(options: UnbytedOptions = {}): UnbytedReturns {
  const { symbols, includeBytes, trim, digits, unitDisplay, locales, precision } = options

  const config: FormatConfig = {
    symbols: typeof symbols === 'boolean' ? symbols : true,
    includeBytes: typeof includeBytes === 'boolean' ? includeBytes : false,
    trim: typeof trim === 'boolean' ? trim : false,
    digits: typeof digits === 'number' ? digits : 2,
    locales: typeof locales === 'string' ? locales : 'en',
    unitDisplay: typeof unitDisplay === 'string' ? unitDisplay : 'short',
    precision: typeof precision === 'number' ? precision : 9,
  }

  return {
    toBinaryString: (bytes: number): string => autoFormat(bytes, 0, config),
    toDecimalString: (bytes: number): string => autoFormat(bytes, 1, config),
  }
}
