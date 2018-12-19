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
    Style
} from 'ol/style'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    bindActionCreators,
    Dispatch
} from 'redux'

import { BaseMap, esriLayers } from '@app/components/Map'
import { 
    paths, 
    StoreState 
} from '@app/constants'
import { BoundingBox } from '@app/Shared/regions'
import { urlPartReplacer } from '@app/Shared/urlParams'

import { PlatformFeatureWithDatasets } from '../types'


export interface Props {
    boundingBox?: BoundingBox
    platformId: string
}

export interface ReduxProps {
    platforms: PlatformFeatureWithDatasets[]
    push: (url: string) => void
}

function mapStateToProps({ erddap }: StoreState) {
    return {
        platforms: erddap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    push
}, dispatch)


/** If the window is narrower than 800px we should increase object sizes */
const adjustPxWidth = 800

/**
 * Create the styles that our platforms will use
 * @param selected Is this the style for a selected platform
 */
function makeStyle(selected: boolean): Style {
    let radius: number
    if (selected) {
        radius = window.innerWidth > adjustPxWidth ? 10 : 15
    } else {
        radius = window.innerWidth > adjustPxWidth ? 5 : 10
    }
    const opacity = selected ? '0.8' : '0.4'
    return new Style({
        image: new Circle({
            fill: new Fill({
                // color: 'rgba(255, 153, 0, ' + selected ? '0.8)' : '0.4)'
                color: `rgba(255, 153, 0, ${opacity})`
            }),
            radius,
            stroke: new Stroke({
                color: 'red',
                width: 1
            })
        })
    })
}

function makeLayer(platforms: PlatformFeatureWithDatasets[], style: Style): VectorLayer {
    const attribution: AttributionLike = 'NERACOOS'

    const platformSource = new VectorSource({
        attributions: [attribution],
        features: (new GeoJSON()).readFeatures({
            features: platforms,
            type: 'FeatureCollection'
        }, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        })
    })

    return new VectorLayer({
        source: platformSource,
        style
    })
}


export class ErddapMapBase extends React.Component<Props & ReduxProps, object> {
    constructor(props: Props & ReduxProps) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    public render() {

        /** platform styles */
        const platformStyle = makeStyle(false)
        const selectedStyle = makeStyle(true)

        const layers: Layer[] = [
            esriLayers.EsriOceanBasemapLayer,
            esriLayers.EsriOceanReferenceLayer
        ]

        const filteredPlatforms = this.props.platforms.filter((p) => p.id !== this.props.platformId)
        const selectedPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            layers.push(makeLayer(filteredPlatforms, platformStyle))
        }
        if (selectedPlatforms.length > 0) {
            layers.push(makeLayer(selectedPlatforms, selectedStyle))
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

    private onClick(feature: Feature) {
        const name: string = feature.getId()
        const url = urlPartReplacer(paths.platforms.platform, ':id', name)

        this.props.push(url)
    }
}

export const ErddapMap = connect(mapStateToProps, mapDispatchToProps)(ErddapMapBase)
