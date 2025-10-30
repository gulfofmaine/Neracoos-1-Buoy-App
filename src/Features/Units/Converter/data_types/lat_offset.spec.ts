import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { lat_offset } = data_types

const source_value = 1018.8694

describe("lat_offset conversions", () => {
  it("to english", () => {
    const result = lat_offset.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = lat_offset.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(lat_offset.displayName(UnitSystem.english)).toBe("Angular Minutes")
    expect(lat_offset.displayName(UnitSystem.metric)).toBe("Angular Minutes")
  })
})
