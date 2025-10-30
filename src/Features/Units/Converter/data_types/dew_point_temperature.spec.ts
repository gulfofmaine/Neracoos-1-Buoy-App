import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 4.5

const { dew_point_temperature } = data_types

describe("dew_point_temperature conversions", () => {
  it("to english", () => {
    const result = dew_point_temperature.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(40.1)
  })

  it("to metric", () => {
    const result = dew_point_temperature.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(dew_point_temperature.displayName(UnitSystem.english)).toBe("Fahrenheit")
    expect(dew_point_temperature.displayName(UnitSystem.metric)).toBe("Celsius")
  })
})
