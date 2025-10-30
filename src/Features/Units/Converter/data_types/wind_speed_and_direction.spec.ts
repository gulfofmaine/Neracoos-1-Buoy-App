import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { wind_speed_and_direction } = data_types

const source_value = 1018.8694

const displayName = "m/s, degrees"

describe("wind_speed_and_direction conversions", () => {
  it("to english", () => {
    const result = wind_speed_and_direction.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = wind_speed_and_direction.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_speed_and_direction.displayName(UnitSystem.english)).toBe(displayName)
    expect(wind_speed_and_direction.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
