import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { northward_wind } = data_types

describe("northward_wind conversions", () => {
  it("to imperial", () => {
    const result = northward_wind.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(22.3694)
  })

  it("to metric", () => {
    const result = northward_wind.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = northward_wind.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(northward_wind.displayName(UnitSystem.imperial)).toBe("Miles Per Hour")
    expect(northward_wind.displayName(UnitSystem.mariners)).toBe("Knots")
    expect(northward_wind.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
