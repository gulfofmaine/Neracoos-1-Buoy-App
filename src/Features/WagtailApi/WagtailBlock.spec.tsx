import { mount } from "enzyme"
import * as React from "react"

import { WagtailBlockBase } from "./WagtailBlock"

describe("The Wagtail component manages loading pages", () => {
  it("Should show an alert and try to load if there are no matching pages", () => {
    const props = {
      loadPage: jest.fn(),
      pageId: "5",
      pages: []
    }

    const wrapper = mount(<WagtailBlockBase {...props} />)

    expect(wrapper.contains("Loading content...")).toBe(true)
    expect(wrapper.find("div").hasClass("alert")).toBe(true)

    expect(props.loadPage).toBeCalled()
    expect(props.loadPage).toBeCalledWith(props.pageId)
  })

  it("Should show the select node if it is loaded", () => {
    const props = {
      loadPage: jest.fn(),
      pageId: "5",
      pages: [
        {
          content: {
            body: "Hello<br>World"
          },
          pageId: "5"
        }
      ]
    }

    const wrapper = mount(<WagtailBlockBase {...props} />)

    expect(wrapper.find("div").html()).toEqual("<div>" + props.pages[0].content.body + "</div>")

    expect(props.loadPage).toHaveBeenCalledTimes(0)
  })
})
