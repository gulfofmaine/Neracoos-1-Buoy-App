/**
 * Wagtail content actions
 */
import * as Sentry from "@sentry/browser"
import { Action, ActionCreator, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"

import { StoreState } from "@app/constants"

import * as actionTypes from "./actionTypes"
import { WagtailContent, WagtailResponse } from "./constants"

// Wagtail Content actions

export interface WagtailSuccess {
  type: actionTypes.WAGTAIL_LOAD_SUCCESS
  content: WagtailContent
  pageId: string
}

export interface WagtailError {
  type: actionTypes.WAGTAIL_LOAD_ERROR
  pageId: string
}

export type WagtailActions = WagtailSuccess | WagtailError

// Wagtail action creators

/**
 * Wagtail sucessfully loaded content action creator
 *
 * @param pageId Page ID to load
 * @param content HTML content that was loaded
 * @returns Formatted action
 */
export function wagtailSuccess(pageId: string, content: WagtailContent): WagtailSuccess {
  return {
    content,
    pageId,
    type: actionTypes.WAGTAIL_LOAD_SUCCESS
  }
}

/**
 * Wagtail content loading error action creator
 *
 * @param pageId Node that content was loaded for
 * @return Formatted action
 */
export function wagtailError(pageId: string): WagtailError {
  return {
    pageId,
    type: actionTypes.WAGTAIL_LOAD_ERROR
  }
}

/**
 * Thunk action to load wagtail content
 *
 * @param pageId ID of Wagtail page to load content for
 */
export const wagtailLoadContent: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (
  pageId: string
) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      Sentry.addBreadcrumb({
        category: "Wagtail API",
        data: {
          pageId
        },
        message: "Loading Wagtail API page"
      })

      const url = "https://content.gmri.io/api/pages/" + pageId + "/?format=json"

      const result = await fetch(url)
      const json = (await result.json()) as WagtailResponse

      return dispatch(wagtailSuccess(pageId, json))
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      Sentry.configureScope(scope => {
        scope.setExtra("skipDialog", true)
        Sentry.captureException(error)
      })

      return dispatch(wagtailError(pageId))
    }
  }
}
