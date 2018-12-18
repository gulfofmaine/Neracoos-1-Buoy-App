import * as actionTypes from './actionTypes'
import { erddapReducer } from './reducer'

const resultOf = (actions, initialState) => actions.reduce(erddapReducer, initialState)


describe('ERDDAP reducer', () => {
    
    it('Creates a valid initial state with no nodes loaded', () => {
        const initialState = undefined
        const action = {}

        const finalState = resultOf([action], initialState)

        expect(finalState.platforms).toBeDefined()
        // expect(finalState.datasets).toBeDefined()
    })

    it('Will add an error message when a loading error occurs', () => {
        const initialState = undefined
        const message = 'Uh, oh'
        const action = {
            message,
            type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
        }

        const finalState = resultOf([action], initialState)

        expect(finalState.platforms).toBeDefined()
        expect(finalState.errorMessage).toEqual(message)
    })

    it('Will add platforms to the store', () => {
        const initialState = undefined
        const geojson = require('./test-platforms.json')
        const action = {
            geojson,
            type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
        }

        const finalState = resultOf([action], initialState)

        expect(finalState.platforms.length).toBe(geojson.features.length)

    })
})
