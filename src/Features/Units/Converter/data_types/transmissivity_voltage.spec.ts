import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { transmissivity_voltage } = data_types

const source_value = 1018.8694

const displayName = "percent"

describe("transmissivity_voltage conversions", () => {
  it("to imperial", () => {
    const result = transmissivity_voltage.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = transmissivity_voltage.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(transmissivity_voltage.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(transmissivity_voltage.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
