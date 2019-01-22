import * as actionTypes from "./actionTypes"
import { drupalReducer } from "./reducer"

const resultOf = (actions, initialState) => actions.reduce(drupalReducer, initialState)

describe("Drupal Content Reducer", () => {
  it("Creates a valid inital state with no nodes loaded ", () => {
    const initialState = undefined
    const action = {}
    const finalState = resultOf([action], initialState)

    expect(finalState.nodes).toBeDefined()
    expect(finalState.nodes.length).toEqual(0)
  })

  it("Can save new drupal node data", () => {
    const initialState = undefined
    const action = {
      content: "Hi",
      node: "15",
      type: actionTypes.DRUPAL_LOAD_SUCCESS
    }

    const finalState = resultOf([action], initialState)

    expect(finalState.nodes).toBeDefined()
    expect(finalState.nodes.length).toEqual(1)
  })
})
