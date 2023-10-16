/**
 * Conversion functions for common units
 */

import convert from "convert-units"

import { round } from "../math"
import { compassDirection } from "./compassDirection"

const unitNames = {
  "Deg C": "C",
  Meters: "m",
  celsius: "C",
  meters: "m",
}

function compatible_name(unit): string {
  if (unitNames.hasOwnProperty(unit)) {
    return unitNames[unit]
  }
  return unit
}

/**
 * We prefer to round our units to one place,
 * so let's combine the functions to make things cleaner
 *
 * @param value Value to convert
 * @param from Source unit
 * @param to Destination unit
 */
export function conversion(value: number, from: string, to: string): number {
  return round(convert(value).from(compatible_name(from)).to(to), 1)
}

/**
 * Convert some unit values as needed
 *
 * @param unit Unit type to convert
 * @param value Value of unit
 */
export function convertUnit(unit: string, value: number): string {
  if (unit === null) {
    return ""
  }

  unit = unit.toLowerCase()
  switch (unit) {
    case "deg c":
      return " (" + conversion(value, "C", "F") + "° F)"
    case "f":
      return " (" + conversion(value, "F", "C") + "° C)"

    case "meters":
      if (value < 100) {
        return " (" + conversion(value, "m", "ft") + " feet)"
      } else {
        // nautical miles are not currently avaliable
        // they should be avaliable in the next release
        //  + conversion(value, 'm', 'nMi') + 'nm, '
        return " (" + conversion(value, "m", "mi") + " miles)"
      }

    case "m/s":
      return " (" + conversion(value, "m/s", "knot") + " knots, " + conversion(value, "m/s", "m/h") + " mph)"
    case "knot":
      return " (" + conversion(value, "knot", "m/s") + " m/s, " + conversion(value, "knot", "m/h") + " mph)"

    case "degrees":
      const direction = compassDirection(value)
      if (direction) {
        return " (" + direction[1] + ")"
      }
      return ""

    default:
      return ""
  }
}
