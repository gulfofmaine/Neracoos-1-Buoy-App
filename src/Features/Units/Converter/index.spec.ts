import { converter } from "./index"
import { UnitSystem } from "../types"

describe("Unit converter", () => {
  it("Can retrieve data_type and convert values", () => {
    const data_type = "wind_gust"
    const source_value = 1000

    const dataConverter = converter(data_type)

    expect(dataConverter.convertTo(source_value, UnitSystem.english)).toBeCloseTo(19.4384)
    expect(dataConverter.displayName(UnitSystem.english)).toBe("Knots")
  })
})
