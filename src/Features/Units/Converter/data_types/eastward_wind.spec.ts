import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { eastward_wind } = data_types

describe("eastward_wind conversions", () => {
  it("to imperial", () => {
    const result = eastward_wind.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(22.3694)
  })

  it("to metric", () => {
    const result = eastward_wind.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = eastward_wind.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(eastward_wind.displayName(UnitSystem.imperial)).toBe("Miles Per Hour")
    expect(eastward_wind.displayName(UnitSystem.mariners)).toBe("Knots")
    expect(eastward_wind.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
