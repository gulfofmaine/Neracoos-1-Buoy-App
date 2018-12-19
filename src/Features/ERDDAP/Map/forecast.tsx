import ImageLayer from 'ol/layer/Image'
import Layer from 'ol/layer/Layer'
import { ImageArcGISRest } from 'ol/source'
import * as React from 'react'
import { connect } from 'react-redux'


import { 
    BaseMap, 
    esriLayers 
} from '@app/components/Map'

import {
    ErddapMapBase,
    makeLayers,
    mapDispatchToProps,
    mapStateToProps
} from './index'


const radarUrl = 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
const radarLayer = new ImageLayer({
    opacity: 0.5,
    source: new ImageArcGISRest({
        params: {},
        ratio: 1,
        url: radarUrl
    })
})

/** Basemap layers */
const baseLayers: Layer[] = [
    esriLayers.EsriOceanBasemapLayer,
    esriLayers.EsriOceanReferenceLayer,
    radarLayer
]


/**
 * ErddapForecastMapBase provides a map with platforms and the current radar
 */
export class ErddapForecastMapBase extends ErddapMapBase {

    public render() {
        return (
            <BaseMap
                lon={-68.5}
                lat={43.5}
                startZoom={6}
                layers={makeLayers(baseLayers, this.props.platforms, this.props.platformId)}
                boundingBox={this.props.boundingBox}
                onClick={this.onClick} />
        )
    }
}

/** Redux connected ErddapForecastMap. See [[ErddapForecastMapBase]] for details */
export const ErddapForecastMap = connect(mapStateToProps, mapDispatchToProps)(ErddapForecastMapBase)
