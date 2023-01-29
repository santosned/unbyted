export const max = Math.max
export const min = Math.min
export const log10 = Math.log10
export const log = Math.log
export const floor = Math.floor

/**
 * Returns the logarithm value of `x` nor `y`. For numbers up to `2e20` the
 * value is between 0 to 6.
 *
 * Example:
 *
 * **For binary units `1024 = 2e+10`:**
 * - Cache the result of `Math.log(x)`, then multiply by `Math.log(y)`. Which,
 *   in principle, should speed up things.
 *
 * **For decimal units `1000 = 10e+3`:**
 * - Calculate the base 10 logarithm of `x` divided by 3. Again,
 *   in principle, it should speed up things.
 *
 * @param x the bytes entered by the user.
 * @param y either `1024` for **binary** units or `1000` for *decimal* units
 * @return an floating point number.
 * @since 2.0.0
 */
export function getLog(x: number, y: number): number {
  if (y === 1000) {
    const cache = log10(x)
    return cache / 3
  }
  const cache = log(x)
  return cache / log(y)
}

/**
 * Returns the exponent value for the unit conversion.
 * @param log the logarithm value from `getLog` function
 * @param units a list containing the measurement units
 * @param bytes a boolean to control if the smaller unit (byte) should be included or not
 * @return the exponent value
 * @since 2.0.0
 */
export function getExponent(log: number, units: string[], bytes: boolean): number {
  return min(max(bytes ? 0 : 1, floor(log)), units.length - 1)
}
