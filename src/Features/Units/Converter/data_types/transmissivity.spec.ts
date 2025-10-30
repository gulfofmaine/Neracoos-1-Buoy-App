import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { transmissivity } = data_types

const source_value = 1018.8694

const displayName = "percent"

describe("transmissivity conversions", () => {
  it("to english", () => {
    const result = transmissivity.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = transmissivity.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(transmissivity.displayName(UnitSystem.english)).toBe(displayName)
    expect(transmissivity.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
