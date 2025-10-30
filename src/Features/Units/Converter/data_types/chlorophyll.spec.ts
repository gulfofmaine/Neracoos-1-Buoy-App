import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { chlorophyll } = data_types

const source_value = 1018.8694

describe("chlorophyll conversions", () => {
  it("to english", () => {
    const result = chlorophyll.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = chlorophyll.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(chlorophyll.displayName(UnitSystem.english)).toBe("Chlorophyll per Cubic Meter")
    expect(chlorophyll.displayName(UnitSystem.metric)).toBe("Chlorophyll per Cubic Meter")
  })
})
