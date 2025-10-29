import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { wind_from_direction } = data_types

describe("wind_from_direction conversions", () => {
  it("to english", () => {
    const result = wind_from_direction.convertTo(source_value, UnitSystem.english)
    expect(result).toBe("NE")
  })

  it("to english number", () => {
    const result = wind_from_direction.convertToNumber(source_value, UnitSystem.english)
    expect(result).toBe(source_value)
  })

  it("to metric", () => {
    const result = wind_from_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_from_direction.displayName(UnitSystem.english)).toBe("")
    expect(wind_from_direction.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
