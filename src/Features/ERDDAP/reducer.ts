import { Action } from '@app/actions'
import * as actionTypes from './actionTypes'
import { ERDDAPStoreState, initialStoreState } from './types'


export function erddapReducer(state: ERDDAPStoreState = initialStoreState, action: Action): ERDDAPStoreState {

    switch(action.type) {
        case actionTypes.ERDDAP_PLATFORM_LOAD_ERROR:
            return {
                ...state,
                errorMessage: action.message
            }
            

        default:
            return state
    }
}
