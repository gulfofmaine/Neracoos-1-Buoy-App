import { Action } from '@app/actions'
import * as actionTypes from './actionTypes'
import { DrupalNode, DrupalStoreState } from './constants'

/** Durpal store intial state */
const drupalInitialState: DrupalStoreState = {
    nodes: []
}

/**
 * Drupal content reducer
 * 
 * @param state Drupal redux store sub-state
 * @param action Any valid redux action
 * @returns Drupal redux store sub-state
 */
export function drupalReducer(state: DrupalStoreState = drupalInitialState, action: Action): DrupalStoreState {

    switch(action.type) {
    
        // If drupal content has been sucessfully loaded, then it should be added to the store
        case actionTypes.DRUPAL_LOAD_SUCCESS:
            const node: DrupalNode = {
                content: action.content,
                node: action.node
            }
            const nodes = state.nodes.filter(n => n.node !== action.node)
            nodes.push(node)
            return { nodes }
            
        default:
            return state
    }
}
