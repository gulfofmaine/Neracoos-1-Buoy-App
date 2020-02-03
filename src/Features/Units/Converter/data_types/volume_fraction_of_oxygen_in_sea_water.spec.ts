import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { volume_fraction_of_oxygen_in_sea_water } = data_types

const source_value = 1018.8694

const displayName = "ml/l"

describe("volume_fraction_of_oxygen_in_sea_water conversions", () => {
  it("to imperial", () => {
    const result = volume_fraction_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = volume_fraction_of_oxygen_in_sea_water.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(volume_fraction_of_oxygen_in_sea_water.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(volume_fraction_of_oxygen_in_sea_water.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
