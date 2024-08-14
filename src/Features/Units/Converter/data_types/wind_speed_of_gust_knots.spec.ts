import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { wind_speed_of_gust } = data_types

describe("wind_speed_of_gust conversions", () => {
  it("to english", () => {
    const result = wind_speed_of_gust.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = wind_speed_of_gust.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_speed_of_gust.displayName(UnitSystem.english)).toBe("Knots")
    expect(wind_speed_of_gust.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
