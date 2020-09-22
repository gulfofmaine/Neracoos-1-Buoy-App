/**
 * Map that shows all active platforms and can be focused on a specific bounding box.
 */
import { push } from "connected-react-router"
import Feature from "ol/Feature"
import GeoJSON from "ol/format/GeoJSON"
import Layer from "ol/layer/Layer"
import VectorLayer from "ol/layer/Vector"
import { AttributionLike } from "ol/source/Source"
import VectorSource from "ol/source/Vector"
import { Circle, Fill, Stroke, Style } from "ol/style"
import * as React from "react"
import { useDispatch } from "react-redux"

import { BaseMap, esriLayers } from "components/Map"
import { paths } from "Shared/constants"
import { BoundingBox } from "Shared/regions"
import { urlPartReplacer } from "Shared/urlParams"

import { PlatformFeature } from "../types"
import { UsePlatforms } from "../hooks"

export interface Props {
  boundingBox?: BoundingBox
  platformId: string
}

interface BaseProps extends Props {
  platforms: PlatformFeature[]
}

export interface ReduxProps {
  push: (url: string) => void
}

/** If the window is narrower than 800px we should increase object sizes */
const adjustPxWidth = 800

/**
 * Create the styles that our platforms will use
 * @param selected Is this the style for a selected platform
 * @param old Is the data old and should the platform be greyed out
 */
function makeStyle(selected: boolean, old: boolean = false): Style {
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
        color: old ? "grey" : `rgba(255, 153, 0, ${opacity})`,
      }),
      radius,
      stroke: new Stroke({
        color: old ? "grey" : "red",
        width: 1,
      }),
    }),
  })
}

/**
 * Create platform layers
 * @param platforms Array of platform features
 * @param style Should the layer be fore selected platforms
 */
function makePlatformLayer(platforms: PlatformFeature[], style: Style): VectorLayer {
  const attribution: AttributionLike = "NERACOOS"

  const platformSource = new VectorSource({
    attributions: [attribution],
    features: new GeoJSON().readFeatures(
      {
        features: platforms,
        type: "FeatureCollection",
      },
      {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }
    ),
  })

  return new VectorLayer({
    source: platformSource,
    style,
  })
}

/**
 * Create the layers for the map
 * @param layers Array of base Layers to add to
 * @param platforms Array of platform features
 * @param platformId Selected platform ID name
 */
export function makeLayers(layers: Layer[], platforms: PlatformFeature[], platformId: string): Layer[] {
  /** platform styles */
  layers = [...layers]
  const platformStyle = makeStyle(false)
  const selectedStyle = makeStyle(true)
  const oldStyle = makeStyle(false, true)

  const oldPlatforms = platforms.filter(
    (p) => p.id !== platformId && p.properties.readings.every((r) => r.time === null)
  )
  const filteredPlatforms = platforms.filter(
    (p) => p.id !== platformId && p.properties.readings.some((r) => r.time !== null)
  )
  const selectedPlatforms = platforms.filter((p) => p.id === platformId)

  if (oldPlatforms.length > 0) {
    layers.push(makePlatformLayer(oldPlatforms, oldStyle))
  }

  if (filteredPlatforms.length > 0) {
    layers.push(makePlatformLayer(filteredPlatforms, platformStyle))
  }
  if (selectedPlatforms.length > 0) {
    layers.push(makePlatformLayer(selectedPlatforms, selectedStyle))
  }

  return layers
}

/** Basemap layers */
const baseLayers: Layer[] = [esriLayers.EsriOceanBasemapLayer, esriLayers.EsriOceanReferenceLayer]

/**
 * ErddapMapBase provides a map with platforms focused on the Gulf of Maine by default
 */
export class ErddapMapBase extends React.Component<BaseProps & ReduxProps, object> {
  constructor(props: BaseProps & ReduxProps) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  public render() {
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
  protected onClick(feature: Feature) {
    const featureId = feature.getId()
    if (featureId) {
      const name: string = featureId.toString()
      const url = urlPartReplacer(paths.platforms.platform, ":id", name)

      this.props.push(url)
    }
  }
}

/**
 * Map that is focused on the Gulf of Maine with the selected platform highlighted
 */
export const ErddapMap: React.FunctionComponent<Props> = ({ platformId }) => {
  const dispatch = useDispatch()

  return (
    <UsePlatforms>
      {({ platforms }) => (
        <ErddapMapBase platforms={platforms} platformId={platformId} push={(url: string) => dispatch(push(url))} />
      )}
    </UsePlatforms>
  )
}
