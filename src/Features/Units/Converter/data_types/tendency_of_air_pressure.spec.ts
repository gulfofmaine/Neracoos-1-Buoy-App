import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { tendency_of_air_pressure } = data_types

const source_value = 1018.8694

describe("tendency_of_air_pressure conversions", () => {
  it("to english", () => {
    const result = tendency_of_air_pressure.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(14.777)
  })

  it("to metric", () => {
    const result = tendency_of_air_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(tendency_of_air_pressure.displayName(UnitSystem.english)).toBe("psi")
    expect(tendency_of_air_pressure.displayName(UnitSystem.metric)).toBe("hPa")
  })
})
