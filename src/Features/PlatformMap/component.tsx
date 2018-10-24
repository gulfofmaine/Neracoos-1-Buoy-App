/**
 * Platform map component.
 */

import { Feature as TurfFeature } from '@turf/helpers'
import { push } from 'connected-react-router'
import Feature from 'ol/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import Layer from 'ol/layer/Layer'
import VectorLayer from 'ol/layer/Vector'
import { AttributionLike } from 'ol/source'
import VectorSource from 'ol/source/Vector'
import { 
    Circle, 
    Fill, 
    Stroke, 
    Style, 
} from 'ol/style'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { BaseMap, esriLayers } from '@app/components/Map'
import { paths, StoreState } from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'
import { urlPartReplacer } from '@app/Shared/urlParams';

import { PlatformProperties } from './types'


export interface Props {
    /** Bounding box to focus the map on */
    boundingBox?: BoundingBox
    /** Selected platform ID */
    platformId: string
}

export interface ReduxProps {
    platforms: TurfFeature[]
    push: (url: string) => void
}

function mapStateToProps({ platformMap }: StoreState) {
    return {
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    push
}, dispatch)

/** If the window is narrower than 800 px we shoudl increase object sizes */
const adjustPxWidth = 800


/**
 * Platform Map component
 */
export class PlatformMapBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)
        
        this.onClick = this.onClick.bind(this)
    }

    public render() {

        /** Basic platform style */
        const platformStyle = new Style({
            image: new Circle({
                fill: new Fill({
                    color: 'rgba(255, 153, 0, 0.4)'
                }),
                radius: window.innerWidth > adjustPxWidth ? 5 : 10,
                stroke: new Stroke({
                    color: 'red',
                    width: 1
                })
            })
        })

        const selectedPlatform = new Style({
            image: new Circle({
                fill: new Fill({
                    color: 'rgba(255, 153, 0, 0.8)'
                }),
                radius: window.innerWidth > adjustPxWidth ? 10 : 15,  // bigger targets on small screens
                stroke: new Stroke({
                    color: 'red',
                    width: 1
                })
            })
        })

        const attribution: AttributionLike = 'NERACOOS'

        const layers: Layer[] = [
            esriLayers.EsriOceanBasemapLayer,
            esriLayers.EsriOceanReferenceLayer
        ]

        const filteredPlatforms = this.props.platforms.filter((p) => (p.properties as PlatformProperties).name !== this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platformSource = new VectorSource({
                attributions: [attribution],
                features: (new GeoJSON()).readFeatures({
                    features: filteredPlatforms,
                    type: 'FeatureCollection'
                }, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                })
            })

            const platformLayer = new VectorLayer({
                source: platformSource,
                style: platformStyle
            })

            layers.push(platformLayer)
        }

        const selectedPlatforms = this.props.platforms.filter((p) => (p.properties as PlatformProperties).name === this.props.platformId)

        if (selectedPlatforms.length > 0) {
            const selectedPlatformSource = new VectorSource({
                features: (new GeoJSON()).readFeatures({
                    features: selectedPlatforms,
                    type: 'FeatureCollection'
                }, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                })
            })

            const selectedPlatformLayer = new VectorLayer({
                source: selectedPlatformSource,
                style: selectedPlatform
            })

            layers.push(selectedPlatformLayer)
        }
        

        return (
            <BaseMap 
                lon={-68.5} 
                lat={43.5} 
                startZoom={6} 
                layers={layers} 
                boundingBox={this.props.boundingBox}
                onClick={this.onClick} />
        )
    }

    /** Handle Feature selection */
    private onClick(feature: Feature) {

        const name: string = feature.get('name')
        const url = urlPartReplacer(paths.platforms.platform, ':id', name)

        this.props.push(url)
    }
}

/** Redux connected PlatformMap. See [[PlatformMapBase]] for details. */
export const PlatformMap = connect(mapStateToProps, mapDispatchToProps)(PlatformMapBase)
