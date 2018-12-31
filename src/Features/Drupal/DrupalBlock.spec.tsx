import { mount } from "enzyme"
import * as React from "react"

import { DrupalBlockBase } from "./DrupalBlock"

describe("The Drupal component manages loading nodes", () => {
  it("It should show an alert and try to load if there are no matching nodes", () => {
    const props = {
      loadNode: jest.fn(),
      node: "node/27",
      nodes: []
    }

    const wrapper = mount(<DrupalBlockBase {...props} />)

    expect(wrapper.contains("Loading content...")).toEqual(true)
    expect(wrapper.find("div").hasClass("alert")).toBe(true)

    expect(props.loadNode).toBeCalled()
    expect(props.loadNode).toBeCalledWith(props.node)
  })

  it("Should show the selected node if it is loaded", () => {
    const props = {
      loadNode: jest.fn(),
      node: "node/27",
      nodes: [
        {
          content: {
            format: "full_html",
            safe_summary: "",
            safe_value: "Safe value",
            summary: "",
            value: "<b>Hello</b>"
          },
          node: "node/27"
        }
      ]
    }

    const wrapper = mount(<DrupalBlockBase {...props} />)

    expect(wrapper.find("div").html()).toEqual("<div>" + props.nodes[0].content.value + "</div>")

    expect(props.loadNode).toHaveBeenCalledTimes(0)
  })
})
