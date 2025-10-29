import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 1000

const { northward_sea_water_velocity } = data_types

describe("northward_sea_water_velocity conversions", () => {
  it("to english", () => {
    const result = northward_sea_water_velocity.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(19.4384)
  })

  it("to metric", () => {
    const result = northward_sea_water_velocity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value / 100)
  })

  it("to mariners", () => {
    const result = northward_sea_water_velocity.convertTo(source_value, UnitSystem.mariners)
    expect(result).toBeCloseTo(19.4384)
  })

  it("display names", () => {
    expect(northward_sea_water_velocity.displayName(UnitSystem.english)).toBe("Knots")
    expect(northward_sea_water_velocity.displayName(UnitSystem.metric)).toBe("Meters/Second")
  })
})
