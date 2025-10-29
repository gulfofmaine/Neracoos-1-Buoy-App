import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { dominant_wave_period_3 } = data_types

const source_value = 1018.8694

const displayName = "Seconds"

describe("dominant_wave_period_3 conversions", () => {
  it("to english", () => {
    const result = dominant_wave_period_3.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = dominant_wave_period_3.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(dominant_wave_period_3.displayName(UnitSystem.english)).toBe(displayName)
    expect(dominant_wave_period_3.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
