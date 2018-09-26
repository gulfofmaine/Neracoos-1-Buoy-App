import { Feature as TurfFeature } from '@turf/helpers'
// import Feature from 'ol/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { 
    Circle, 
    Fill, 
    Stroke, 
    Style, 
    // Text 
} from 'ol/style'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { BaseMap, esriLayers } from '@app/components/Map'
import { StoreState } from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'

import { platformLocationsLoad } from './actions'

export interface Props {
    boundingBox?: BoundingBox
}

export interface ReduxProps {
    loadPlatforms: () => void
    platforms: TurfFeature[]
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadPlatforms: platformLocationsLoad
}, dispatch)

const platformStyle = new Style({
    image: new Circle({
        fill: new Fill({
            color: 'rgba(255, 153, 0, 0.4)'
        }),
        radius: 5,
        stroke: new Stroke({
            color: 'red',
            width: 1
        })
    })
})

export class PlatformMapBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: any) {
        super(props)
        if (this.props.platforms.length < 1) {
            this.props.loadPlatforms()
        }
        
    }

    public render() {

        const layers = [
            esriLayers.EsriOceanBasemapLayer,
            esriLayers.EsriOceanReferenceLayer
        ]

        if (this.props.platforms.length > 0) {
            const platformSource = new VectorSource({
                features: (new GeoJSON()).readFeatures({
                    features: this.props.platforms,
                    type: 'FeatureCollection'
                }, {featureProjection: 'EPSG:3857'})
            })

            const platformLayer = new VectorLayer({
                source: platformSource,
                style: platformStyle
            })

            layers.push(platformLayer)
        }

        return (
            <BaseMap lon={-65} lat={42} startZoom={4} layers={layers} boundingBox={this.props.boundingBox}/>
        )
    }
}

export const PlatformMap = connect(mapStateToProps, mapDispatchToProps)(PlatformMapBase)
