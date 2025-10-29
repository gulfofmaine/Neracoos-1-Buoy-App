import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { air_pressure } = data_types

const source_value = 1018.8694

describe("air_pressure conversions", () => {
  it("to english", () => {
    const result = air_pressure.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(30.087)
  })

  it("to metric", () => {
    const result = air_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(air_pressure.displayName(UnitSystem.english)).toBe("Inches")
    expect(air_pressure.displayName(UnitSystem.metric)).toBe("Millibars")
  })
})
