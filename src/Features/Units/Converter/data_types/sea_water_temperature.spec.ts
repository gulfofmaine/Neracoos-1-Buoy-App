import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 4.5

const { sea_water_temperature } = data_types

describe("sea_water_temperature conversions", () => {
  it("to imperial", () => {
    const result = sea_water_temperature.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(40.1)
  })

  it("to metric", () => {
    const result = sea_water_temperature.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_temperature.displayName(UnitSystem.imperial)).toBe("Fahrenheit")
    expect(sea_water_temperature.displayName(UnitSystem.metric)).toBe("Celsius")
  })
})
