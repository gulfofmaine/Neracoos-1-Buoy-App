import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 10

const { sea_water_velocity_m } = data_types

describe("sea_water_velocity_m conversions", () => {
  it("to english", () => {
    const result = sea_water_velocity_m.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = sea_water_velocity_m.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("to mariners", () => {
    const result = sea_water_velocity_m.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(sea_water_velocity_m.displayName(UnitSystem.english)).toBe("Knots")
    expect(sea_water_velocity_m.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
