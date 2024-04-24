import { UnitSystem } from "../../types"
import { getValueWithOffset } from "./_tidal_level"
import { data_types } from "./index"
import { waterLevelTimeseriesValues } from "./waterLevelTimeSeriesMock"

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

describe("tidal_sea_surface_height_above_mean_lower_low_water datumOffset calculation", () => {
  it("should be close to zero at it's highest value on a normal day", () => {
    const lowestLevel = waterLevelTimeseriesValues.sort((a, b) => a.reading - b.reading)[0]
    const result = getValueWithOffset(lowestLevel.reading, source_datum_value)
    expect(result).toBeGreaterThanOrEqual(-1)
    expect(result).toBeLessThan(1)
  })
})
