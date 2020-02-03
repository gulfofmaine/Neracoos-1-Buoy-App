import { UnitSystem } from "../../types"
import { data_types } from "./index"

const { barometric_pressure } = data_types

const source_value = 1018.8694

describe("barometric_pressure conversions", () => {
  it("to imperial", () => {
    const result = barometric_pressure.convertTo(source_value, UnitSystem.imperial)
    expect(result).toBeCloseTo(14.777)
  })

  it("to metric", () => {
    const result = barometric_pressure.convertTo(source_value, UnitSystem.metric)
    expect(result).toBeCloseTo(source_value)
  })

  it("display names", () => {
    expect(barometric_pressure.displayName(UnitSystem.imperial)).toBe("psi")
    expect(barometric_pressure.displayName(UnitSystem.metric)).toBe("hPa")
  })
})
