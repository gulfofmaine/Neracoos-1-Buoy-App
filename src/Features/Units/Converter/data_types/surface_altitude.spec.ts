import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const source_value = 0.6880212

const { surface_altitude } = data_types

describe("surface_altitude conversions", () => {
  it("to english", () => {
    const result = surface_altitude.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(2.2572)
  })

  it("to metric", () => {
    const result = surface_altitude.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(surface_altitude.displayName(UnitSystem.english)).toBe("ft")
    expect(surface_altitude.displayName(UnitSystem.metric)).toBe("Meters")
  })
})
