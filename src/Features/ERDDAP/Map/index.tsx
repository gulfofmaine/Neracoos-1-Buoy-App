import { push } from "connected-react-router"
import Feature from "ol/Feature"
import GeoJSON from "ol/format/GeoJSON"
import Layer from "ol/layer/Layer"
import VectorLayer from "ol/layer/Vector"
import { AttributionLike } from "ol/source/Source"
import VectorSource from "ol/source/Vector"
import { Circle, Fill, Stroke, Style } from "ol/style"
import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { BaseMap, esriLayers } from "components/Map"
import { paths } from "Shared/constants"
import { StoreState } from "Shared/constants/store"
import { BoundingBox } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

import { PlatformFeatureWithDatasets } from "../types"

export interface Props {
  boundingBox?: BoundingBox
  platformId: string
}

export interface ReduxProps {
  platforms: PlatformFeatureWithDatasets[]
  push: (url: string) => void
}

export function mapStateToProps({ erddap }: StoreState): Pick<ReduxProps, "platforms"> {
  return {
    platforms: erddap.platforms
  }
}

export const mapDispatchToProps = (dispatch: Dispatch): Pick<ReduxProps, "push"> =>
  bindActionCreators(
    {
      push
    },
    dispatch
  )

/** If the window is narrower than 800px we should increase object sizes */
const adjustPxWidth = 800

/**
 * Create the styles that our platforms will use
 * @param selected Is this the style for a selected platform
 * @param old Is the data old and should the platform be greyed out
 */
const makeStyle = (selected: boolean, old = false): Style => {
  let radius: number
  if (selected) {
    radius = window.innerWidth > adjustPxWidth ? 10 : 15
  } else {
    radius = window.innerWidth > adjustPxWidth ? 5 : 10
  }
  const opacity = selected ? "0.8" : "0.4"
  return new Style({
    image: new Circle({
      fill: new Fill({
        color: old ? "grey" : `rgba(255, 153, 0, ${opacity})`
      }),
      radius,
      stroke: new Stroke({
        color: old ? "grey" : "red",
        width: 1
      })
    })
  })
}

/**
 * Create platform layers
 * @param platforms Array of platform features
 * @param style Should the layer be fore selected platforms
 */
const makePlatformLayer = (platforms: PlatformFeatureWithDatasets[], style: Style): VectorLayer => {
  const attribution: AttributionLike = "NERACOOS"

  const platformSource = new VectorSource({
    attributions: [attribution],
    features: new GeoJSON().readFeatures(
      {
        features: platforms,
        type: "FeatureCollection"
      },
      {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      }
    )
  })

  return new VectorLayer({
    source: platformSource,
    style
  })
}

/**
 * Create the layers for the map
 * @param layers Array of base Layers to add to
 * @param platforms Array of platform features
 * @param platformId Selected platform ID name
 */
export const makeLayers = (layers: Layer[], platforms: PlatformFeatureWithDatasets[], platformId: string): Layer[] => {
  /** platform styles */
  const madeLayers = [...layers]
  const platformStyle = makeStyle(false)
  const selectedStyle = makeStyle(true)
  const oldStyle = makeStyle(false, true)

  // tslint:disable-next-line:no-debugger
  //   debugger

  const oldPlatforms = platforms.filter(p => p.id !== platformId && p.properties.readings.every(r => r.time === null))
  const filteredPlatforms = platforms.filter(
    p => p.id !== platformId && p.properties.readings.some(r => r.time !== null)
  )
  const selectedPlatforms = platforms.filter(p => p.id === platformId)

  if (oldPlatforms.length > 0) {
    madeLayers.push(makePlatformLayer(oldPlatforms, oldStyle))
  }

  if (filteredPlatforms.length > 0) {
    madeLayers.push(makePlatformLayer(filteredPlatforms, platformStyle))
  }
  if (selectedPlatforms.length > 0) {
    madeLayers.push(makePlatformLayer(selectedPlatforms, selectedStyle))
  }

  return madeLayers
}

/** Basemap layers */
const baseLayers: Layer[] = [esriLayers.EsriOceanBasemapLayer, esriLayers.EsriOceanReferenceLayer]

/**
 * ErddapMapBase provides a map with platforms focused on the Gulf of Maine by default
 */
export class ErddapMapBase extends React.Component<Props & ReduxProps, object> {
  constructor(props: Props & ReduxProps) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  public render(): React.ReactNode {
    return (
      <BaseMap
        lon={-68.5}
        lat={43.5}
        startZoom={6}
        layers={makeLayers(baseLayers, this.props.platforms, this.props.platformId)}
        boundingBox={this.props.boundingBox}
        onClick={this.onClick}
      />
    )
  }

  /**
   * Handle clicks from OpenLayers
   * @param feature OpenLayers Feature
   */
  protected onClick(feature: Feature): void {
    const featureId = feature.getId()
    if (featureId) {
      const name: string = featureId.toString()
      const url = urlPartReplacer(paths.platforms.platform, ":id", name)

      this.props.push(url)
    }
  }
}

/** Redux connected ErddapMap. See [[ErddapMapBase]] for details. */
export const ErddapMap = connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(ErddapMapBase)
