import { UnitSystem } from "../../types"
import { getValueWithOffset } from "./_tidal_level"
import { data_types } from "./index"

const waterLevelTimeseriesValues = [
  { reading: 2.882, time: "Tue Apr 23 2024 22:48:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 2.911, time: "Tue Apr 23 2024 22:54:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 2.939, time: "Tue Apr 23 2024 23:00:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 2.967, time: "Tue Apr 23 2024 23:06:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 2.991, time: "Tue Apr 23 2024 23:12:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.018, time: "Tue Apr 23 2024 23:18:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.05, time: "Tue Apr 23 2024 23:24:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.086, time: "Tue Apr 23 2024 23:30:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.099, time: "Tue Apr 23 2024 23:36:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.104, time: "Tue Apr 23 2024 23:42:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.114, time: "Tue Apr 23 2024 23:48:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.128, time: "Tue Apr 23 2024 23:54:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.124, time: "Wed Apr 24 2024 00:00:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.124, time: "Wed Apr 24 2024 00:06:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.121, time: "Wed Apr 24 2024 00:12:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.1, time: "Wed Apr 24 2024 00:18:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.073, time: "Wed Apr 24 2024 00:24:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.066, time: "Wed Apr 24 2024 00:30:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.054, time: "Wed Apr 24 2024 00:36:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3.026, time: "Wed Apr 24 2024 00:42:00 GMT-0400 (Eastern Daylight Time)" },
  { reading: 3, time: "Wed Apr 24 2024 00:48:00 GMT-0400 (Eastern Daylight Time)" },
]

const source_datum_value = 0

const source_value = 1.5

const { tidal_sea_surface_height_above_mean_lower_low_water } = data_types

describe("tidal_sea_surface_height_above_mean_lower_low_water conversions", () => {
  it("to english", () => {
    const result = tidal_sea_surface_height_above_mean_lower_low_water.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(4.92)
  })

  it("to metric", () => {
    const result = tidal_sea_surface_height_above_mean_lower_low_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(tidal_sea_surface_height_above_mean_lower_low_water.displayName(UnitSystem.english)).toBe("Feet")
    expect(tidal_sea_surface_height_above_mean_lower_low_water.displayName(UnitSystem.metric)).toBe("Meters")
  })
})

describe("tidal_sea_surface_height_above_mean_higher_high_water datumOffset calculation", () => {
  it("should be close to zero at it's highest value on a normal day", () => {
    const lowestLevel = waterLevelTimeseriesValues.sort((a, b) => a.reading - b.reading)[0]
    const result = getValueWithOffset(lowestLevel.reading, source_datum_value)
    expect(result).toBeCloseTo(0)
  })
})
