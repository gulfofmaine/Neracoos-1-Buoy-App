import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 4.5

const { dew_point_temperature } = data_types

describe("dew_point_temperature conversions", () => {
  it("to imperial", () => {
    const result = dew_point_temperature.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(40.1)
  })

  it("to metric", () => {
    const result = dew_point_temperature.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = dew_point_temperature.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(40.1)
  })

  it("display names", () => {
    expect(dew_point_temperature.displayName(UnitSystem.imperial)).toBe("Fahrenheit")
    expect(dew_point_temperature.displayName(UnitSystem.mariners)).toBe("Fahrenheit")
    expect(dew_point_temperature.displayName(UnitSystem.metric)).toBe("Celsius")
  })
})
