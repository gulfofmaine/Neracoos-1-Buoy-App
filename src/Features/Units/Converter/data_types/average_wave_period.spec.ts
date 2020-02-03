import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { average_wave_period } = data_types

const source_value = 1018.8694

const displayName = "Seconds"

describe("average_wave_period conversions", () => {
  it("to imperial", () => {
    const result = average_wave_period.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = average_wave_period.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(average_wave_period.displayName(UnitSystem.imperial)).toBe(displayName)
    expect(average_wave_period.displayName(UnitSystem.metric)).toBe(displayName)
  })
})
