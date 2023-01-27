import { autoFormat } from './autoFormat'
import { Required, UnbytedOptions, UnbytedReturns } from './types'

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
export function unbyted(options: UnbytedOptions = {}): UnbytedReturns {
  const {
    unit,
    includeBytes,
    trim,
    decimals,
    binaryUnits,
    decimalUnits,
    defaultBinaryUnitValue,
    defaultDecimalUnitValue,
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

  const config: Required<UnbytedOptions> = {
    unit: typeof unit === 'boolean' ? unit : true,
    includeBytes: typeof includeBytes === 'boolean' ? includeBytes : false,
    trim: typeof trim === 'boolean' ? trim : false,
    decimals: typeof decimals === 'number' ? decimals : 2,
    binaryUnits: binaryUnits instanceof Array ? binaryUnits : defaultBinaryUnits,
    decimalUnits: decimalUnits instanceof Array ? decimalUnits : defaultDecimalUnits,
    defaultBinaryUnitValue:
      typeof defaultBinaryUnitValue !== 'number' ? 1024 : defaultBinaryUnitValue,
    defaultDecimalUnitValue:
      typeof defaultDecimalUnitValue !== 'number' ? 1000 : defaultDecimalUnitValue,
  }

  function toBinaryString(bytes: number): string {
    return autoFormat(bytes, 'binaryUnits', config)
  }

  function toDecimalString(bytes: number): string {
    return autoFormat(bytes, 'decimalUnits', config)
  }

  return { toBinaryString, toDecimalString }
}
