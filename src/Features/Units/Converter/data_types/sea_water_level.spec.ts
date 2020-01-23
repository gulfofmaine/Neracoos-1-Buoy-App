import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { sea_water_level } = data_types

describe("sea_water_level conversions", () => {
  it("to imperial", () => {
    const result = sea_water_level.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = sea_water_level.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = sea_water_level.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(2.2572)
  })

  it("display names", () => {
    expect(sea_water_level.displayName(UnitSystem.imperial)).toBe("Feet")
    expect(sea_water_level.displayName(UnitSystem.mariners)).toBe("Feet")
    expect(sea_water_level.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
