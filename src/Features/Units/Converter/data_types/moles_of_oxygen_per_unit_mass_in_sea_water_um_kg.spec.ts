import { describe, it, expect } from "vitest"

import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { moles_of_oxygen_per_unit_mass_in_sea_water_um_kg } = data_types

const source_value = 1018.8694

describe("moles_of_oxygen_per_unit_mass_in_sea_water_um_kg conversions", () => {
  it("to english", () => {
    const result = moles_of_oxygen_per_unit_mass_in_sea_water_um_kg.convertTo(source_value, UnitSystem.english)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = moles_of_oxygen_per_unit_mass_in_sea_water_um_kg.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(moles_of_oxygen_per_unit_mass_in_sea_water_um_kg.displayName(UnitSystem.english)).toBe("uM/kg")
    expect(moles_of_oxygen_per_unit_mass_in_sea_water_um_kg.displayName(UnitSystem.metric)).toBe("uM/kg")
  })
})
