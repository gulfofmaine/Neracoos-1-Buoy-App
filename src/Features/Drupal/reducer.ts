import { Action } from '@app/actions'
import * as actionTypes from './actionTypes'
import { DrupalNode, DrupalStoreState } from './constants'

const drupalInitialState: DrupalStoreState = {
    nodes: []
}

export function drupalReducer(state: DrupalStoreState = drupalInitialState, action: Action): DrupalStoreState {
    switch(action.type) {
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
