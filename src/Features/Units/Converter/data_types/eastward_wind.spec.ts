import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { eastward_wind } = data_types

describe("eastward_wind conversions", () => {
  it("to english", () => {
    const result = eastward_wind.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = eastward_wind.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(eastward_wind.displayName(UnitSystem.english)).toBe("Knots")
    expect(eastward_wind.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
