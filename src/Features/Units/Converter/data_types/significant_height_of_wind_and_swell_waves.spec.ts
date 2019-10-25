import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { significant_height_of_wind_and_swell_waves } = data_types

describe("significant_height_of_wind_and_swell_waves conversions", () => {
  it("to imperial", () => {
    const result = significant_height_of_wind_and_swell_waves.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = significant_height_of_wind_and_swell_waves.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = significant_height_of_wind_and_swell_waves.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(2.2572)
  })

  it("display names", () => {
    expect(significant_height_of_wind_and_swell_waves.displayName(UnitSystem.imperial)).toBe("Feet")
    expect(significant_height_of_wind_and_swell_waves.displayName(UnitSystem.mariners)).toBe("Feet")
    expect(significant_height_of_wind_and_swell_waves.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
