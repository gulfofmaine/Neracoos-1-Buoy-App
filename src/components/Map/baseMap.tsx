/**
 * Basemap compnent
 */

import * as React from "react"

// import TileLayer from 'ol/layer/Tile'
import Feature from "ol/Feature"
import Group from "ol/layer/Group"
import Layer from "ol/layer/Layer"
import Map from "ol/Map"
import MapBrowserEvent from "ol/MapBrowserEvent"
import { transform, transformExtent } from "ol/proj"
import View from "ol/View"

import { BoundingBox } from "@app/Shared"

export interface Props {
  /** Bounding box to focus map view on */
  boundingBox?: BoundingBox
  /** Decimal degrees North */
  lat: number
  /** Decimal degrees East */
  lon: number
  /** Layers to display on top of map. */
  layers: Layer[]
  /** Zoom level to start at. 0 is furthest out */
  startZoom: number
  /** Callback function for click events */
  onClick?: (feature: Feature) => void
}

export interface State {
  /** Internal map state object */
  map: Map
}

/**
 * Basemap component
 */
export class BaseMap extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = { map: {} }

    this.singleClick = this.singleClick.bind(this)
  }

  /** Initialize the basemap */
  public componentDidMount() {
    const { lat, lon, startZoom, layers } = this.props

    const map = new Map({
      layers,
      target: "map",
      view: new View({
        center: transform([lon, lat], "EPSG:4326", "EPSG:3857"),
        zoom: startZoom
      })
    })

    map.on("singleclick", this.singleClick)

    if (this.props.boundingBox) {
      const { north, south, east, west } = this.props.boundingBox
      const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")
      map.getView().fit(extent)
    }

    this.setState({ map })
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (this.state.map instanceof Map) {
      const { map } = this.state

      if (this.props.layers !== nextProps.layers) {
        map.setLayerGroup(new Group({ layers: nextProps.layers }))
      }

      if (nextProps.boundingBox !== this.props.boundingBox) {
        if (this.props.boundingBox) {
          const { north, south, east, west } = nextProps.boundingBox as BoundingBox
          const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")
          map.getView().fit(extent)
        }
      }

      this.setState({ map })
    }
  }

  public render() {
    return <div id="map" style={{ width: "100%", minHeight: 400, maxHeight: "80vh" }} />
  }

  /** Pass click events to callback handler */
  private singleClick(event: MapBrowserEvent) {
    if (this.props.onClick) {
      event.map.forEachFeatureAtPixel(event.pixel, (feature: Feature, layer: any) => this.props.onClick!(feature))
    }
  }
}
