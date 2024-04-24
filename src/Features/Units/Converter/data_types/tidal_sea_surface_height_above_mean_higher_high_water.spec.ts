import { UnitSystem } from "../../types"
import { data_types } from "./index"
import { getValueWithOffset } from "./_tidal_level"
import { waterLevelTimeseriesValues } from "./waterLevelTimeSeriesMock"

const source_value = 1.5

const source_datum_value = 3.019

const { tidal_sea_surface_height_above_mean_higher_high_water } = data_types

describe("tidal_sea_surface_height_above_mean_higher_high_water conversions", () => {
  it("to english", () => {
    const result = tidal_sea_surface_height_above_mean_higher_high_water.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(4.92)
  })

  it("to metric", () => {
    const result = tidal_sea_surface_height_above_mean_higher_high_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(tidal_sea_surface_height_above_mean_higher_high_water.displayName(UnitSystem.english)).toBe("Feet")
    expect(tidal_sea_surface_height_above_mean_higher_high_water.displayName(UnitSystem.metric)).toBe("Meters")
  })
})

describe("tidal_sea_surface_height_above_mean_higher_high_water datumOffset calculation", () => {
  it("should be close to zero at it's highest value on a normal day", () => {
    const highestLevel = waterLevelTimeseriesValues.sort((a, b) => b.reading - a.reading)[0]
    const result = getValueWithOffset(highestLevel.reading, source_datum_value)
    expect(result).toBeCloseTo(0)
  })
})
