import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sea_water_electrical_conductivity } = data_types

const source_value = 1018.8694

const displayName = "siemens/m"

describe("sea_water_electrical_conductivity conversions", () => {
  it("to english", () => {
    const result = sea_water_electrical_conductivity.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sea_water_electrical_conductivity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_electrical_conductivity.displayName(UnitSystem.english)).toBe(displayName)
    expect(sea_water_electrical_conductivity.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
