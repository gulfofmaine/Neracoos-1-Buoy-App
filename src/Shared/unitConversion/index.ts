/**
 * Conversion functions for common units
 */

import * as convert from "convert-units"

import { round } from "../math"

const unitNames = {
  "Deg C": "C",
  Meters: "m",
  celsius: "C",
  meters: "m"
}

function compatabile_name(unit): string {
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
  return round(
    convert(value)
      .from(compatabile_name(from))
      .to(to),
    1
  )
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
      return " (" + direction[1] + ")"

    default:
      return ""
  }
}

const spaceBetweenCompassPoints = 11.25

const compass = {
  1: ["North", "N"],
  2: ["North by east", "NbE"],
  3: ["North-northeast", "NNE"],
  4: ["Northeast by north", "NEbN"],
  5: ["Northeast", "NE"],
  6: ["Northeast by east", "NEbE"],
  7: ["East-northeast", "ENE"],
  8: ["East by north", "EbN"],
  9: ["East", "E"],
  10: ["East by south", "EbS"],
  11: ["East-southeast", "ESE"],
  12: ["Southeast by east", "SEbE"],
  13: ["Southeast", "SE"],
  14: ["Southeast by south", "SEbS"],
  15: ["South-southeast", "SSE"],
  16: ["South by east", "SbE"],
  17: ["South", "S"],
  18: ["South by west", "SbW"],
  19: ["South-southwest", "SSW"],
  20: ["Southwest by south", "SWbS"],
  21: ["Southwest", "SW"],
  22: ["Southwest by west", "SWbW"],
  23: ["West-southwest", "WSW"],
  24: ["West by south", "WbS"],
  25: ["West", "W"],
  26: ["West by north", "WbN"],
  27: ["West-northwest", "WNW"],
  28: ["Northwest by west", "NWbW"],
  29: ["Northwest", "NW"],
  30: ["Northwest by north", "NWbN"],
  31: ["North-northwest", "NNW"],
  32: ["North by west", "NbW"]
}

/**
 * Convert decimal degrees to compass directions
 * @param degrees decimal degrees from 0 to 360
 * @returns array of strings. First string is the long name, ala North-northeast, the second is the short name NNE
 */
export function compassDirection(degrees: number): string[] {
  const pointNumber = Math.floor((degrees + spaceBetweenCompassPoints / 2.0) / spaceBetweenCompassPoints) + 1

  return compass[pointNumber]
}
