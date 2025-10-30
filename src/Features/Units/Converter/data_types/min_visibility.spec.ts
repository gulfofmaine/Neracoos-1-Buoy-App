import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { min_visibility } = data_types

const source_value = 2994.5664

describe("min_visiblity conversions", () => {
  it("to english", () => {
    const result = min_visibility.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(1.6169)
  })

  it("to metric", () => {
    const result = min_visibility.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 1000)
  })

  it("display names", () => {
    expect(min_visibility.displayName(UnitSystem.english)).toBe("Nautical Miles")
    expect(min_visibility.displayName(UnitSystem.metric)).toBe("Kilometers")
  })
})
