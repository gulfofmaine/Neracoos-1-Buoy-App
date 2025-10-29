import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 19.4384
const metric_value = 10

const { wind_speed_of_gust_knots } = data_types

describe("wind_speed_of_gust conversions", () => {
  it("to english", () => {
    const result = wind_speed_of_gust_knots.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_speed_of_gust_knots.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(metric_value)
  })

  it("display names", () => {
    expect(wind_speed_of_gust_knots.displayName(UnitSystem.english)).toBe("Knots")
    expect(wind_speed_of_gust_knots.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
