import * as actionTypes from "./actionTypes"
import { wagtailReducer } from "./reducer"

const resultOf = (actions, initialState) => actions.reduce(wagtailReducer, initialState)

describe("Wagtail content reducer", () => {
  it("Create a valid initial state with no pages loaded", () => {
    const initialState = undefined
    const action = {}
    const finalState = resultOf([action], initialState)

    expect(finalState.pages).toBeDefined()
    expect(finalState.pages.length).toBe(0)
  })

  it("Can save a new wagtail page data", () => {
    const initialState = undefined
    const action = {
      content: {
        body: "Hello<br>World"
      },
      pageId: "5",
      type: actionTypes.WAGTAIL_LOAD_SUCCESS
    }

    const finalState = resultOf([action], initialState)

    expect(finalState.pages).toBeDefined()
    expect(finalState.pages.length).toBe(1)
  })
})
