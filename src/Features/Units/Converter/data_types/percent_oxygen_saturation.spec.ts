import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { percent_oxygen_saturation } = data_types

const source_value = 1018.8694

const displayName = "percent"

describe("percent_oxygen_saturation conversions", () => {
  it("to english", () => {
    const result = percent_oxygen_saturation.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = percent_oxygen_saturation.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(percent_oxygen_saturation.displayName(UnitSystem.english)).toBe(displayName)
    expect(percent_oxygen_saturation.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
