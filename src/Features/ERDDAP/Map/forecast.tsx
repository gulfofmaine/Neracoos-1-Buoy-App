import ImageLayer from "ol/layer/Image"
import Layer from "ol/layer/Layer"
import { ImageArcGISRest } from "ol/source"
import * as React from "react"
import { connect } from "react-redux"
import { Alert } from "reactstrap"

import { BaseMap, esriLayers } from "components/Map"

import { ErddapMapBase, makeLayers, mapDispatchToProps, mapStateToProps } from "./index"
import { RadarInfo } from "./radarInfo"

const radarUrl = "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer"
const radarLayer = new ImageLayer({
  opacity: 0.5,
  source: new ImageArcGISRest({
    params: {},
    ratio: 1,
    url: radarUrl
  })
})

/** Basemap layers */
const baseLayers: Layer[] = [esriLayers.EsriOceanBasemapLayer, esriLayers.EsriOceanReferenceLayer, radarLayer]

/**
 * ErddapForecastMapBase provides a map with platforms and the current radar
 */
export class ErddapForecastMapBase extends ErddapMapBase {
  public render() {
    return (
      <React.Fragment>
        <Alert color="danger">
          Due to the government shutdown, the radar overlay may be showing old data. Check the update time at the bottom
          before depending on this radar map.
        </Alert>
        <BaseMap
          lon={-68.5}
          lat={43.5}
          startZoom={6}
          layers={makeLayers(baseLayers, this.props.platforms, this.props.platformId)}
          boundingBox={this.props.boundingBox}
          onClick={this.onClick}
        />
        <RadarInfo />
      </React.Fragment>
    )
  }
}

/** Redux connected ErddapForecastMap. See [[ErddapForecastMapBase]] for details */
export const ErddapForecastMap = connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(ErddapForecastMapBase)
