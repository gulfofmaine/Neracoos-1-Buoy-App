import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { period } = data_types

const source_value = 1018.8694

const displayName = "Seconds"

describe("period conversions", () => {
  it("to english", () => {
    const result = period.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = period.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(period.displayName(UnitSystem.english)).toBe(displayName)
    expect(period.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
