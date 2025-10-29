import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sea_water_density } = data_types

const source_value = 1018.8694

describe("sea_water_density conversions", () => {
  it("to english", () => {
    const result = sea_water_density.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sea_water_density.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_density.displayName(UnitSystem.english)).toBe("Kilograms per cubic meter")
    expect(sea_water_density.displayName(UnitSystem.metric)).toBe("Kilograms per cubic meter")
  })
})
