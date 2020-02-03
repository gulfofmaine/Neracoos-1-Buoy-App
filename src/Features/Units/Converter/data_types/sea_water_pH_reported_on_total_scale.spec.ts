import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { sea_water_pH_reported_on_total_scale } = data_types

const source_value = 1018.8694

const displayName = "pH Total"

describe("sea_water_pH_reported_on_total_scale conversions", () => {
  it("to imperial", () => {
    const result = sea_water_pH_reported_on_total_scale.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = sea_water_pH_reported_on_total_scale.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(sea_water_pH_reported_on_total_scale.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(sea_water_pH_reported_on_total_scale.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
