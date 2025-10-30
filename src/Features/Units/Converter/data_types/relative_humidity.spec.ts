import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { relative_humidity } = data_types

const source_value = 74.5

const displayName = "Percent"

describe("period conversions", () => {
  it("to english", () => {
    const result = relative_humidity.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = relative_humidity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(relative_humidity.displayName(UnitSystem.english)).toBe(displayName)
    expect(relative_humidity.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
