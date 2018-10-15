import {
    drupalSuccess,
    drupalError
} from './actions'
import * as types from './actionTypes'


describe('Drupal actions', () => {
    it('Drupal Error should contain node', () => {
        const node = '26'
        const expectedAction = {
            node,
            type: types.DRUPAL_LOAD_ERROR
        }

        const result = drupalError(node)

        expect(result).toEqual(expectedAction)
        // expect(result.type).toEqual(types.DRUPAL_LOAD_ERROR)
        // expect(result.node).toEqual(node)
    })

    it('Drupal Success should contain node and content', () => {
        const content = {
            format: 'HTML',
            safe_summary: 'Hi',
            safe_value: 'Hi',
            summary: '<b>Hi</b>',
            value: '<b>Hi</b>'
        }
        const node = '26'

        const expectedAction = {
            content,
            node,
            type: types.DRUPAL_LOAD_SUCCESS
        }

        const result = drupalSuccess(node, content)

        expect(result).toEqual(expectedAction)
    })
})