import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sun_icon } = data_types

const source_value = 1018.8694

describe("sun_icon conversions", () => {
  it("to english", () => {
    const result = sun_icon.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sun_icon.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sun_icon.displayName(UnitSystem.english)).toBe("Sun Icon")
    expect(sun_icon.displayName(UnitSystem.metric)).toBe("Sun Icon")
  })
})
