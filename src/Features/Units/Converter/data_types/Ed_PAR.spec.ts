import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { Ed_PAR } = data_types

const source_value = 1018.8694

describe("Ed_PAR conversions", () => {
  it("to english", () => {
    const result = Ed_PAR.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = Ed_PAR.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(Ed_PAR.displayName(UnitSystem.english)).toBe("microE/m^2/s")
    expect(Ed_PAR.displayName(UnitSystem.metric)).toBe("microE/m^2/s")
  })
})
