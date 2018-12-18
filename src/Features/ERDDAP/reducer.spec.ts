import * as actionTypes from './actionTypes'
import { erddapReducer } from './reducer'

const resultOf = (actions, initialState) => actions.reduce(erddapReducer, initialState)


describe('ERDDAP reducer', () => {
    
    it('Creates a valid initial state with no nodes loaded', () => {
        const initialState = undefined
        const action = {}

        const finalState = resultOf([action], initialState)

        expect(finalState.platforms).toBeDefined()
        expect(finalState.loading).toBe(false)
        // expect(finalState.datasets).toBeDefined()
    })

    it('Sets the status as loading, when platform loading starts', () => {
        const initialState = undefined
        const action = {
            type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
        }

        const finalState = resultOf([action], initialState)

        expect(finalState.loading).toBe(true)
    })

    it('Will add an error message when a loading error occurs', () => {
        const initialState = undefined
        const loadingAction = {
            type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
        }
        const message = 'Uh, oh'
        const action = {
            message,
            type: actionTypes.ERDDAP_PLATFORM_LOAD_ERROR
        }

        const finalState = resultOf([loadingAction, action], initialState)

        expect(finalState.platforms).toBeDefined()
        expect(finalState.errorMessage).toEqual(message)
        expect(finalState.loading).toBe(false)
    })

    it('Will add platforms to the store', () => {
        const initialState = undefined
        const geojson = require('./test-platforms.json')
        const loadingAction = {
            type: actionTypes.ERDDAP_PLATFORM_LOAD_STARTED
        }
        const action = {
            geojson,
            type: actionTypes.ERDDAP_PLATFORM_LOAD_SUCCESS
        }

        const finalState = resultOf([loadingAction, action], initialState)

        expect(finalState.platforms.length).toBe(geojson.features.length)
        expect(finalState.loading).toBe(false)
    })
})
