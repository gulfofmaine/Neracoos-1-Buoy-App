import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { turbidity } = data_types

const source_value = 1018.8694

const displayName = "ntu"

describe("turbidity conversions", () => {
  it("to english", () => {
    const result = turbidity.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = turbidity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(turbidity.displayName(UnitSystem.english)).toBe(displayName)
    expect(turbidity.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
