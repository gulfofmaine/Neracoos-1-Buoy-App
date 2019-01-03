import { pointFormatMaker } from "./formatter"

describe("poimtFormatMaker", () => {
  it("Will return a function", () => {
    const result = pointFormatMaker(unit)

    expect(result).toBeInstanceOf(Function)
  })

  it("Can produce a string with unit and value", () => {
    let pointFormatter = pointFormatMaker(unit)

    const thisObject = { x: new Date(), y: 243 }

    pointFormatter = pointFormatter.bind(thisObject)

    const result = pointFormatter()

    expect(result).toContain(unit)
    expect(result).toContain(thisObject.y)
  })
})

const unit = "celsius"
