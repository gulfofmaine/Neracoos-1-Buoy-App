import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { pressure_tendency } = data_types

const source_value = 1018.8694

describe("pressure_tendency conversions", () => {
  it("to english", () => {
    const result = pressure_tendency.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = pressure_tendency.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(pressure_tendency.displayName(UnitSystem.english)).toBe("Degrees")
    expect(pressure_tendency.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
