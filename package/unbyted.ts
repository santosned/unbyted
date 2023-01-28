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
  const {
    symbols,
    includeBytes,
    trim,
    decimals,
    binaryUnits,
    decimalUnits,
    bytesInBinary,
    bytesInDecimal,
  } = options

  if (binaryUnits instanceof Array && binaryUnits.length !== 7) {
    throw new Error('binaryUnits requires an array containing 7 units.')
  }
  if (decimalUnits instanceof Array && decimalUnits.length !== 7) {
    throw new Error('decimalUnits requires an array containing 7 units.')
  }

  const defaultBinaryUnits: UnbytedOptions['binaryUnits'] = [
    'B',
    'KiB',
    'MiB',
    'GiB',
    'TiB',
    'PiB',
    'EiB',
  ]

  const defaultDecimalUnits: UnbytedOptions['decimalUnits'] = [
    'B',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
  ]

  const config: FormatConfig = {
    symbols: typeof symbols === 'boolean' ? symbols : true,
    includeBytes: typeof includeBytes === 'boolean' ? includeBytes : false,
    trim: typeof trim === 'boolean' ? trim : false,
    decimals: typeof decimals === 'number' ? decimals : 2,
    binaryUnits: binaryUnits instanceof Array ? binaryUnits : defaultBinaryUnits,
    decimalUnits: decimalUnits instanceof Array ? decimalUnits : defaultDecimalUnits,
    bytesInBinary: typeof bytesInBinary !== 'number' ? 1024 : bytesInBinary,
    bytesInDecimal: typeof bytesInDecimal !== 'number' ? 1000 : bytesInDecimal,
  }

  return {
    toBinaryString: (bytes: number): string => autoFormat(bytes, 'binaryUnits', config),
    toDecimalString: (bytes: number): string => autoFormat(bytes, 'decimalUnits', config),
  }
}
