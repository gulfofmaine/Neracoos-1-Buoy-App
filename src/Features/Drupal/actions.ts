/**
 * Drupal Content actions
 */
import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionTypes from './actionTypes'

import { StoreState } from '@app/constants'
import { DrupalContent, DrupalNodeResponse } from './constants'


// Drupal Content Actions

export interface DrupalSuccess {
    type: actionTypes.DRUPAL_LOAD_SUCCESS,
    content: DrupalContent,
    node: string
}

export interface DrupalError {
    type: actionTypes.DRUPAL_LOAD_ERROR,
    node: string
}

export type DrupalActions = DrupalSuccess | DrupalError


// Drupal Content Action Creators

/**
 * Drupal content sucessfully loaded action creator
 * 
 * @param node Node ID that content was loaded for
 * @param content HTML content that was loaded
 * @returns Formatted Action
 */
export function drupalSuccess(node: string, content: DrupalContent): DrupalSuccess {
    return {
        content,
        node,
        type: actionTypes.DRUPAL_LOAD_SUCCESS,   
    }
}

/**
 * Drupal content loading error
 * 
 * @param node Node that content was loaded for
 * @returns Formatted action
 */
export function drupalError(node: string): DrupalError {
    return {
        node,
        type: actionTypes.DRUPAL_LOAD_ERROR
    }
}


/**
 * Thunk action to load Drupal content
 * 
 * @param node ID of Drupal node to load content for
 */
export const drupalLoadContent: ActionCreator<ThunkAction<Promise<Action>, StoreState, undefined, Action>> = (node: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            Sentry.addBreadcrumb({
                category: 'Drupal',
                data: {
                    node
                },
                message: 'Loading drupal node'
            })

            let url: string
            if (process.env.NODE_ENV !== 'production') {
                url = "http://localhost:3000/api/" + node + '.json'
            } else {
                url = 'http://content.gmri.org/api/' + node + '.jsonp'
            }

            const result = await fetch(url)
            const json = await result.json() as DrupalNodeResponse

            return dispatch(drupalSuccess(node, json.body.und[0]))

        } catch(error) {
            // tslint:disable-next-line:no-console
            console.log(error) 
            Sentry.captureException(error)

            return dispatch(drupalError(node))
        }
    }
}

