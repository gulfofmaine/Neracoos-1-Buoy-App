import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sea_water_pressure } = data_types

const source_value = 1018.8694

describe("sea_water_pressure conversions", () => {
  it("to english", () => {
    const result = sea_water_pressure.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sea_water_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_pressure.displayName(UnitSystem.english)).toBe("Decibars")
    expect(sea_water_pressure.displayName(UnitSystem.metric)).toBe("Decibars")
  })
})
