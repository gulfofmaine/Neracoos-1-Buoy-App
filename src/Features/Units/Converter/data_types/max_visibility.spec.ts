import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { max_visibility } = data_types

const source_value = 2994.5664

describe("max_visiblity conversions", () => {
  it("to imperial", () => {
    const result = max_visibility.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(1.8607)
  })

  it("to metric", () => {
    const result = max_visibility.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 1000)
  })

  it("to mariners", () => {
    const result = max_visibility.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(1.6169)
  })

  it("display names", () => {
    expect(max_visibility.displayName(UnitSystem.imperial)).toBe("Miles")
    expect(max_visibility.displayName(UnitSystem.mariners)).toBe("Nautical Miles")
    expect(max_visibility.displayName(UnitSystem.metric)).toBe("Kilometers")
  })
})
