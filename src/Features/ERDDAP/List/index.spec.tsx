import { mount } from 'enzyme'
import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { BoundingBox } from '@app/Shared/regions'

import { PlatformFeatureWithDatasets } from '../types'
import { 
    ErddapPlatformListBase, 
    Props,
    ReduxProps
} from './index'


function setup(platforms: PlatformFeatureWithDatasets[], boundingBox?: BoundingBox) {
    const props: Props & ReduxProps = {
        boundingBox,
        platforms
    }

    const enzymeWrapper = mount(<MemoryRouter><ErddapPlatformListBase {...props} /></MemoryRouter>)

    return {
        enzymeWrapper,
        props
    }
}

describe('ErddapPlatfromList', () => {
    it('Should list platforms in the Gulf of Maine', () => {
        const platforms: PlatformFeatureWithDatasets[] = [{
            geometry: {
                coordinates: [-68.02734375, 42.890625],
                type: 'Point'
            },
            id: 'N01',
            properties: {
                attribution: [],
                mooring_site_desc: 'NorthEast Shelf',
                readings: []
            },
            type: 'Feature'
        }, {
            geometry: {
                coordinates: [-63, 40],
                type: 'Point'
            },
            id: 'Not in the GOM',
            properties: {
                attribution: [],
                mooring_site_desc: 'Lost at sea',
                readings: []
            },
            type: 'Feature'
        }]
        const boundingBox: BoundingBox = {
            east: -65.375, 
            north: 45.125, 
            south: 40.375, 
            west: -70.975
        }
        const { enzymeWrapper } = setup(platforms, boundingBox)

        expect(enzymeWrapper.find('ul.list-group').children().length).toBe(1)
        expect(enzymeWrapper.find('ul.list-group').text()).toContain(platforms[0].id)
        expect(enzymeWrapper.find('ul.list-group').text()).not.toMatch(platforms[1].id as string)
    })
})