import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { fractional_saturation_of_oxygen_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "percent"

describe("fractional_saturation_of_oxygen_in_sea_water conversions", () => {
  it("to english", () => {
    const result = fractional_saturation_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = fractional_saturation_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(fractional_saturation_of_oxygen_in_sea_water.displayName(UnitSystem.english)).toBe(displayName)
    expect(fractional_saturation_of_oxygen_in_sea_water.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
