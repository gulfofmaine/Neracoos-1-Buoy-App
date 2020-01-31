import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1000

const { wind_min } = data_types

describe("wind_min conversions", () => {
  it("to imperial", () => {
    const result = wind_min.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = wind_min.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 100)
  })

  it("to mariners", () => {
    const result = wind_min.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(wind_min.displayName(UnitSystem.imperial)).toBe("Knots")
    expect(wind_min.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
