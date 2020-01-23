import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 4.5

const { sea_surface_temperature } = data_types

describe("sea_surface_temperature conversions", () => {
  it("to imperial", () => {
    const result = sea_surface_temperature.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(40.1)
  })

  it("to metric", () => {
    const result = sea_surface_temperature.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = sea_surface_temperature.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(40.1)
  })

  it("display names", () => {
    expect(sea_surface_temperature.displayName(UnitSystem.imperial)).toBe("Fahrenheit")
    expect(sea_surface_temperature.displayName(UnitSystem.mariners)).toBe("Fahrenheit")
    expect(sea_surface_temperature.displayName(UnitSystem.metric)).toBe("Celsius")
  })
})
