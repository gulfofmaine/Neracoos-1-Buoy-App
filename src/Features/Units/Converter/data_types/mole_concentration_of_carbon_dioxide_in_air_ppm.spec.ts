import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { mole_concentration_of_carbon_dioxide_in_air_ppm } = data_types

const source_value = 1018.8694

describe("mole_concentration_of_carbon_dioxide_in_air_ppm conversions", () => {
  it("to english", () => {
    const result = mole_concentration_of_carbon_dioxide_in_air_ppm.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = mole_concentration_of_carbon_dioxide_in_air_ppm.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(mole_concentration_of_carbon_dioxide_in_air_ppm.displayName(UnitSystem.english)).toBe("ppm")
    expect(mole_concentration_of_carbon_dioxide_in_air_ppm.displayName(UnitSystem.metric)).toBe("ppm")
  })
})
