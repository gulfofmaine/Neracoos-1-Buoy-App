/**
 * Shared math related functions.
 */

/**
 * A rounding function that allows the number of significant digits to use to be specified by the user.
 *
 * @param num Number to round.
 * @param significantDigits  Number of significant digits to keep.
 */
export function round(num: number, significantDigits: number = 2): number {
  return Math.ceil(num * 10 ** significantDigits) / 10 ** significantDigits
}
