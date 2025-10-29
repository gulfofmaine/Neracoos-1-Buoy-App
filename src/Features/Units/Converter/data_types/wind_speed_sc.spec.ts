import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { wind_speed_sc } = data_types

describe("wind_speed_sc conversions", () => {
  it("to english", () => {
    const result = wind_speed_sc.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = wind_speed_sc.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_speed_sc.displayName(UnitSystem.english)).toBe("Knots")
    expect(wind_speed_sc.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
