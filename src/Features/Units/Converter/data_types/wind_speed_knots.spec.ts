import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 19.4384
const metric_value = 10

const { wind_speed_knots } = data_types

describe("wind_speed_knots conversions", () => {
  it("to english", () => {
    const result = wind_speed_knots.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_speed_knots.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(metric_value)
  })

  it("to mariners", () => {
    const result = wind_speed_knots.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(wind_speed_knots.displayName(UnitSystem.english)).toBe("Knots")
    expect(wind_speed_knots.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
