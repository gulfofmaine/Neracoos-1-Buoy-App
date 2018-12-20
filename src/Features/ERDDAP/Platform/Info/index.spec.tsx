import { mount } from 'enzyme'
import * as React from 'react'

import { PlatformFeatureWithDatasets } from '../../types'
import {
    ErddapPlatformInfoPanelBase,
    Props,
    ReduxProps
} from './index'


function setup(platforms: PlatformFeatureWithDatasets[], platformId: string) {
    const props: Props & ReduxProps = {
        platformId,
        platforms
    }

    const enzymeWrapper = mount(<ErddapPlatformInfoPanelBase {...props} />)

    return {
        enzymeWrapper,
        props
    }
}


describe('ErddapPlatformInfoPanel', () => {
    it("It should not explode when there isn't a matching plaform", () => {
        const { enzymeWrapper } = setup([], 'N01')

        expect(enzymeWrapper.text()).toBeNull()
    })

    it('Should display the platform info', () => {
        const platform: PlatformFeatureWithDatasets = {
            geometry: {
                coordinates: [-65.9, 42.3],
                type: 'Point'
            },
            id: 'N01',
            properties: {
                attribution: [{
                    attribution: 'Data management by NERACOOS',
                    program: {
                        name: 'NERACOOS',
                        website: 'http://neracoos.org'
                    }
                }],
                mooring_site_desc: 'NorthEast Channel',
                readings: []
            },
            type: 'Feature'
        }

        const { enzymeWrapper } = setup([platform], 'N01')

        expect(enzymeWrapper.find('.card-title').text()).toContain(platform.id)
        expect(enzymeWrapper.find('.card-text').text()).toContain(platform.properties.mooring_site_desc)
        expect(enzymeWrapper.find('.card-text').text()).toContain(platform.geometry.coordinates[0])
        expect(enzymeWrapper.find('.card-text').text()).toContain(platform.geometry.coordinates[1])
        expect(enzymeWrapper.find('.card-text').text()).toContain(platform.properties.attribution[0].attribution)
    })
})
