import { getExponent, getLog, max } from './helpers'
import { FormatConfig } from './types'
import { UNITS } from './units'

/**
 * Automatically format bytes into readable measurement units. This is used internally only.
 * @param bytes the bytes to be formatted
 * @param id the id of the selected unit. `0` for `binary`, and `1` for decimal.
 * @return an string containing the formatted bytes
 * @since v0.1.0
 */
export function autoFormat(bytes: number, id: number, config: FormatConfig): string {
  if (typeof bytes !== 'number' || !Number.isFinite(bytes)) {
    throw new TypeError(`The bytes cannot be of type '${typeof bytes}', enter a number please.`)
  }

  const base = [1024, 1000][id]

  const measurementUnits = config.unitDisplay === 'long' ? UNITS[id][0] : UNITS[id][1]

  const dividend = max(0, bytes)

  const exponent = getExponent(getLog(dividend, base), measurementUnits, config.includeBytes)

  const quotient = (dividend / base ** exponent).toPrecision(config.precision)

  const result = new Intl.NumberFormat(config.locales, {
    maximumFractionDigits: config.digits,
    minimumFractionDigits: config.trim ? 0 : config.digits,
  }).format(Number(quotient))

  return config.symbols
    ? `${result}${config.unitDisplay !== 'narrow' ? ' ' : ''}${measurementUnits[exponent]}`
    : result
}
