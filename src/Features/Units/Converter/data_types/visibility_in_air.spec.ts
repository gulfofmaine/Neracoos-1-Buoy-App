import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { visibility_in_air } = data_types

const source_value = 2994.5664

describe("min_visiblity conversions", () => {
  it("to english", () => {
    const result = visibility_in_air.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(1.6169)
  })

  it("to metric", () => {
    const result = visibility_in_air.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 1000)
  })

  it("display names", () => {
    expect(visibility_in_air.displayName(UnitSystem.english)).toBe("Nautical Miles")
    expect(visibility_in_air.displayName(UnitSystem.metric)).toBe("Kilometers")
  })
})
