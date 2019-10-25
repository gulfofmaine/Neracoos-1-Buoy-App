import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { sea_surface_wave_significant_height } = data_types

describe("sea_surface_wave_significant_height conversions", () => {
  it("to imperial", () => {
    const result = sea_surface_wave_significant_height.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = sea_surface_wave_significant_height.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = sea_surface_wave_significant_height.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(2.2572)
  })

  it("display names", () => {
    expect(sea_surface_wave_significant_height.displayName(UnitSystem.imperial)).toBe("Feet")
    expect(sea_surface_wave_significant_height.displayName(UnitSystem.mariners)).toBe("Feet")
    expect(sea_surface_wave_significant_height.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
