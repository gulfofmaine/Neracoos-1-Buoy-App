import * as actionTypes from './actionTypes'
import { erddapReducer } from './reducer'

const resultOf = (actions, initialState) => actions.reduce(erddapReducer, initialState)


describe('ERDDAP reducer', () => {
    
    it('Creates a valid initial state with no nodes loaded', () => {
        const initialState = undefined
        const action = {}

        const finalState = resultOf([action], initialState)

        expect(finalState.platforms).toBeDefined()
    })
})
