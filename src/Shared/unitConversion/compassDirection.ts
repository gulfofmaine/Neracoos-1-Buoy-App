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
  32: ["North by west", "NbW"],
  33: ["North", "N"],
}

/**
 * Convert decimal degrees to compass directions
 * @param degrees decimal degrees from 0 to 360
 * @returns array of strings. First string is the long name, ala North-northeast, the second is the short name NNE
 */
export function compassDirection(degrees: number): [string, string] {
  const pointNumber = Math.floor((degrees + spaceBetweenCompassPoints / 2.0) / spaceBetweenCompassPoints) + 1

  return compass[pointNumber]
}
