import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { oxygen_saturation } = data_types

const source_value = 1018.8694

const displayName = "ml/l"

describe("oxygen_saturation conversions", () => {
  it("to english", () => {
    const result = oxygen_saturation.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = oxygen_saturation.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(oxygen_saturation.displayName(UnitSystem.english)).toBe(displayName)
    expect(oxygen_saturation.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
