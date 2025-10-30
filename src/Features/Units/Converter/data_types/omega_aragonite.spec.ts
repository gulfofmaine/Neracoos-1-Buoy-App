import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { omega_aragonite } = data_types

const source_value = 1018.8694

describe("omega_aragonite conversions", () => {
  it("to english", () => {
    const result = omega_aragonite.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = omega_aragonite.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(omega_aragonite.displayName(UnitSystem.english)).toBe("Omega")
    expect(omega_aragonite.displayName(UnitSystem.metric)).toBe("Omega")
  })
})
