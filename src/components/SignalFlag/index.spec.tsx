import { mount } from "enzyme"
import * as React from "react"

import { SignalFlag } from "./index"

describe("SignalFlag", () => {
  it("Will render not render anything longer or shorter than a character", () => {
    const props = { character: "abc", title: "Too long" }
    const wrapper = mount(<SignalFlag {...props} />)

    expect(wrapper.html()).toBeNull()
  })

  it("Can render a character", () => {
    const props = { character: "a", title: "Just an a" }
    const wrapper = mount(<SignalFlag {...props} />)

    const img = wrapper.find("img")

    expect(img.props()).toHaveProperty("src", props.character + ".svg")
    expect(img.props()).toHaveProperty("alt", props.title)
    expect(img.props()).toHaveProperty("title", props.title)
  })

  it("Will return null for an invalid character", () => {
    const props = { character: "ø", title: "option o" }
    const wrapper = mount(<SignalFlag {...props} />)

    expect(wrapper.html()).toBeNull()
  })
})
