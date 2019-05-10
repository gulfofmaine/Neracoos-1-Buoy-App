import { Action } from "@app/actions"

import * as actionTypes from "./actionTypes"
import { WagtailPage, WagtailStoreState } from "./constants"

const wagtailInitialState: WagtailStoreState = {
  pages: []
}

export function wagtailReducer(state: WagtailStoreState = wagtailInitialState, action: Action): WagtailStoreState {
  switch (action.type) {
    case actionTypes.WAGTAIL_LOAD_SUCCESS:
      const page: WagtailPage = {
        content: action.content,
        pageId: action.pageId
      }
      const pages = state.pages.filter(n => n.pageId !== action.pageId)
      pages.push(page)

      return { pages }

    default:
      return state
  }
}
