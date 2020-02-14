import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1000

const { wind_gust } = data_types

describe("wind_gust conversions", () => {
  it("to english", () => {
    const result = wind_gust.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = wind_gust.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 100)
  })

  it("to mariners", () => {
    const result = wind_gust.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(wind_gust.displayName(UnitSystem.english)).toBe("Knots")
    expect(wind_gust.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
