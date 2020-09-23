import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

/**
 * Wrap up our tooltip formatting function so we can specifiy the unit it should use
 *
 * @param unitSystem Current unit system to convert to
 * @param data_type Data type to convert
 * @returns A function ready to be called by tooltip to convert our units.
 */
export function pointFormatMaker(unitSystem: UnitSystem, data_type: string): (this: any) => string {
  return function pointFormatter(this: any): string {
    const data_converter = converter(data_type)

    return `${new Date(this.x).toLocaleString()}<br />${this.y} ${data_converter.displayName(unitSystem)}`
  }
}
