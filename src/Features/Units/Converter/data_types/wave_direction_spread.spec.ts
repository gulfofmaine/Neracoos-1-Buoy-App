import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { wave_direction_spread } = data_types

const source_value = 1018.8694

describe("wave_direction_spread conversions", () => {
  it("to english", () => {
    const result = wave_direction_spread.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wave_direction_spread.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wave_direction_spread.displayName(UnitSystem.english)).toBe("Degrees")
    expect(wave_direction_spread.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
