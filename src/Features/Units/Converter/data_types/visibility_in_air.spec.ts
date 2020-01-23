import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { visibility_in_air } = data_types

const source_value = 2994.5664

describe("min_visiblity conversions", () => {
  it("to imperial", () => {
    const result = visibility_in_air.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(1.8607)
  })

  it("to metric", () => {
    const result = visibility_in_air.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 1000)
  })

  it("to mariners", () => {
    const result = visibility_in_air.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(1.6169)
  })

  it("display names", () => {
    expect(visibility_in_air.displayName(UnitSystem.imperial)).toBe("Miles")
    expect(visibility_in_air.displayName(UnitSystem.mariners)).toBe("Nautical Miles")
    expect(visibility_in_air.displayName(UnitSystem.metric)).toBe("Kilometers")
  })
})
