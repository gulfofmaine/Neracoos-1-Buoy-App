import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { wind_speed_ve } = data_types

describe("wind_speed_ve conversions", () => {
  it("to imperial", () => {
    const result = wind_speed_ve.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = wind_speed_ve.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_speed_ve.displayName(UnitSystem.imperial)).toBe("Knots")
    expect(wind_speed_ve.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
