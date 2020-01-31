import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 4.5

const { air_temperature } = data_types

describe("air_temperature conversions", () => {
  it("to imperial", () => {
    const result = air_temperature.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(40.1)
  })

  it("to metric", () => {
    const result = air_temperature.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(air_temperature.displayName(UnitSystem.imperial)).toBe("Fahrenheit")
    expect(air_temperature.displayName(UnitSystem.metric)).toBe("Celsius")
  })
})
