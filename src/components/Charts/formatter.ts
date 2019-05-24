import { convertUnit } from "Shared/unitConversion"

/**
 * Wrap up our tooltip formatting function so we can specifiy the unit it should use
 *
 * @param unit Unit that the chart should conver from
 * @returns A function ready to be called by tooltip to convert our units.
 */
export function pointFormatMaker(unit: string): (this: any) => string {
  return function pointFormatter(this: any): string {
    return `${new Date(this.x).toLocaleString()}<br />${this.y} ${unit} ${convertUnit(unit, this.y)}`
  }
}
