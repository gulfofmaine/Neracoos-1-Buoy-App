import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 48

const { wind_direction_kvh } = data_types

describe("wind_direction_kvh conversions", () => {
  it("to english", () => {
    const result = wind_direction_kvh.convertTo(source_value, UnitSystem.english)
    expect(result).toBe("NE")
  })

  it("to english number", () => {
    const result = wind_direction_kvh.convertToNumber(source_value, UnitSystem.english)
    expect(result).toBe(source_value)
  })

  it("to metric", () => {
    const result = wind_direction_kvh.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(wind_direction_kvh.displayName(UnitSystem.english)).toBe("")
    expect(wind_direction_kvh.displayName(UnitSystem.metric)).toBe("Degrees")
  })
})
