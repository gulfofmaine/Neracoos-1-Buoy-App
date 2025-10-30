import { describe, it, expect } from "vitest"
import { UnitSystem } from "Features/Units/types"
import { pointFormatMaker } from "./formatter"

describe("pointFormatMaker", () => {
  it("Will return a function", () => {
    const result = pointFormatMaker(UnitSystem.metric, "wind_gust")

    expect(result).toBeInstanceOf(Function)
  })

  it("Can produce a string with unit and value", () => {
    let pointFormatter = pointFormatMaker(UnitSystem.metric, "wind_gust")

    const thisObject = { x: new Date(), y: 3.7 }

    pointFormatter = pointFormatter.bind(thisObject)

    const result = pointFormatter()

    expect(result).toContain("Meters/Second")
    expect(result).toContain(thisObject.y.toString())
  })
})
