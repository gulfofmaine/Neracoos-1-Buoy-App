import * as Sentry from '@sentry/browser'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionTypes from './actionTypes'

import { StoreState } from '@app/constants'
import { DrupalContent, DrupalNodeResponse } from './constants'

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

export function drupalSuccess(node: string, content: DrupalContent): DrupalSuccess {
    return {
        content,
        node,
        type: actionTypes.DRUPAL_LOAD_SUCCESS,   
    }
}

export function drupalError(node: string): DrupalError {
    return {
        node,
        type: actionTypes.DRUPAL_LOAD_ERROR
    }
}

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
        } catch(e) {
            // tslint:disable-next-line:no-console
            console.log(e) 
            Sentry.captureException(e)
            return dispatch(drupalError(node))
        }
    }
}

