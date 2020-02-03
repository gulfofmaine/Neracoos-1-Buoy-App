import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { amps } = data_types

const source_value = 1018.8694

describe("amps conversions", () => {
  it("to imperial", () => {
    const result = amps.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(source_value)
  })

  it("to metric", () => {
    const result = amps.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(amps.displayName(UnitSystem.imperial)).toBe("Counts")
    expect(amps.displayName(UnitSystem.metric)).toBe("Counts")
  })
})
