import { converter } from "./index"
import { UnitSystem } from "../types"

describe("Unit converter", () => {
  it("Can retrieve data_type and convert values", () => {
    const data_type = "wind_gust"
    const source_value = 1000

    const data_converter = converter(data_type)

    expect(data_converter.convertTo(source_value, UnitSystem.english)).toBeCloseTo(19.4384)
    expect(data_converter.displayName(UnitSystem.english)).toBe("Knots")
  })
})
