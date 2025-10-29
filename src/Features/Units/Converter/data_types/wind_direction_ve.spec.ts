import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { wind_direction_ve } = data_types

const source_value = 1018.8694

describe("wind_direction_ve conversions", () => {
  it("to english", () => {
    const result = wind_direction_ve.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_direction_ve.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_direction_ve.displayName(UnitSystem.english)).toBe("Degrees")
    expect(wind_direction_ve.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
