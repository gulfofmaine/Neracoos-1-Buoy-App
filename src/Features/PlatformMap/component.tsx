import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { BaseMap, esriLayers } from '@app/components/Map'
import { StoreState } from '@app/constants'

import { platformLocationsLoad } from './actions'

export interface ReduxProps {
    loadPlatforms: () => void
    platforms: Feature[]
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatforms: platformLocationsLoad
}, dispatch)

export class PlatformMapBase extends React.Component<ReduxProps, object> {
    constructor(props: any) {
        super(props)
        this.props.loadPlatforms()
    }

    public render() {
        const layers = [
            esriLayers.EsriOceanBasemapLayer,
            esriLayers.EsriOceanReferenceLayer
        ]

        return (
            <BaseMap lon={-65} lat={42} startZoom={4} layers={layers} />
        )
    }
}

export const PlatformMap = connect(mapStateToProps, mapDispatchToProps)(PlatformMapBase)
