import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { significant_wave_height } = data_types

describe("significant_wave_height conversions", () => {
  it("to imperial", () => {
    const result = significant_wave_height.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = significant_wave_height.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = significant_wave_height.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(2.2572)
  })

  it("display names", () => {
    expect(significant_wave_height.displayName(UnitSystem.imperial)).toBe("Feet")
    expect(significant_wave_height.displayName(UnitSystem.mariners)).toBe("Feet")
    expect(significant_wave_height.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
