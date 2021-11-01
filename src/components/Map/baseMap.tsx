/**
 * Basemap compnent
 */

import React from "react"
import { Tooltip } from "reactstrap"

// import TileLayer from 'ol/layer/Tile'
import Feature from "ol/Feature"
import Geometry from "ol/geom/Geometry"
import Point from "ol/geom/Point"
import Group from "ol/layer/Group"
import Layer from "ol/layer/Layer"
import Map from "ol/Map"
import MapBrowserEvent from "ol/MapBrowserEvent"
import Overlay from "ol/Overlay"
import Source from "ol/source/Source"
import { transform, transformExtent } from "ol/proj"
import RenderFeature from "ol/render/Feature"
import View from "ol/View"

import { BoundingBox } from "Shared/types"

export interface MapView {
  center: [number, number]
  resolution: number
}

export interface Props {
  /** Bounding box to focus map view on */
  boundingBox?: BoundingBox
  /** Decimal degrees North */
  lat: number
  /** Decimal degrees East */
  lon: number
  /** Layers to display on top of map. */
  layers: Layer<Source>[]
  /** Zoom level to start at. 0 is furthest out */
  startZoom: number
  /** Callback function for click events */
  onClick?: (feature: Feature<Point>) => void
  /** Height to set the map view to */
  height?: number | string
  /** Call with new view when the view is changed */
  onViewChange?: (mapView: MapView) => void
  /** center coordinates and resolution to set the map view to */
  mapView?: MapView
}

const MAP_ID = "map"
const POPUP_ID = "popup"

export const BaseMap: React.FC<Props> = ({
  boundingBox,
  height,
  onClick,
  layers,
  lat,
  lon,
  startZoom,
  onViewChange,
  mapView,
}: Props) => {
  const mapElement = React.useRef<HTMLDivElement>(null)
  const popupElement = React.useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = React.useState<Map>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [popup, setPopup] = React.useState<Overlay>()
  const [popupOpen, setPopupOpen] = React.useState(false)
  const [popupText, setPopupText] = React.useState("Test")
  const [popupFeature, setPopupFeature] = React.useState<Feature<Geometry>>()

  React.useEffect(() => {
    const view = mapView
      ? new View({ ...mapView, projection: "EPSG:3857" })
      : new View({
          center: transform([lon, lat], "EPSG:4326", "EPSG:3857"),
          zoom: startZoom,
        })
    const initialMap = new Map({
      target: mapElement.current ?? undefined,
      layers: [],
      view,
    })

    const initialPopup = new Overlay({
      element: popupElement.current ?? undefined,
    })
    initialMap.addOverlay(initialPopup)

    initialMap.on("click", handleMapClick)
    initialMap.on("pointermove", displayToolTip)
    initialMap.on("moveend", moveEnd)

    setMap(initialMap)
    setPopup(initialPopup)
  }, [setMap])

  React.useEffect(() => {
    if (mapView) {
      setMap((map) => {
        map?.getView().setCenter(mapView.center)
        map?.getView().setResolution(mapView.resolution)
        return map
      })
    }
  }, [mapView, setMap])

  React.useEffect(() => {
    if (boundingBox) {
      const { north, south, east, west } = boundingBox
      const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")
      setMap((map) => {
        setPopupOpen(false)
        map?.getView().fit(extent)
        return map
      })
    }
  }, [boundingBox, setMap])

  React.useEffect(() => {
    setMap((map) => {
      setPopupOpen(false)
      map?.setLayerGroup(new Group({ layers }))
      return map
    })
  }, [layers, setMap])

  React.useLayoutEffect(() => {
    if (height) {
      setMap((map) => {
        setPopupOpen(false)
        map?.updateSize()
        return map
      })
    }
  }, [height, setMap])

  /**
   * Hand off map clicks on features to parent components
   */
  const handleMapClick = (event: MapBrowserEvent<UIEvent>) => {
    if (onClick) {
      event.map.forEachFeatureAtPixel(event.pixel, (feature: Feature<Geometry> | RenderFeature, layer: any) => {
        if (feature instanceof Feature) {
          onClick(feature as Feature<Point>)
        }
      })
    }
  }

  /**
   * Display a tooltip upon hovering over a feature
   */
  const displayToolTip = (event: MapBrowserEvent<UIEvent>) => {
    setPopup((popup) => {
      const feature: Feature<Geometry> | undefined = event.map.forEachFeatureAtPixel(
        event.pixel,
        (feature: Feature<Geometry> | RenderFeature, layer: any) => {
          if (feature instanceof Feature) {
            return feature
          }
        }
      )
      if (feature) {
        const coordinates = (feature!.getGeometry()! as any).getCoordinates()
        const id = feature.getId()

        setPopupFeature(feature)

        if (coordinates && id) {
          popup?.setPosition(coordinates)
          setPopupText(id as string)
          setPopupOpen(true)
        }
      } else {
        setPopupOpen(false)
      }

      return popup
    })
  }

  const popupClick = () => {
    if (popupFeature && onClick) {
      onClick(popupFeature as Feature<Point>)
    }
  }

  const moveEnd = ({ map }: { map: Map }) => {
    const view = map?.getView()
    const center = view?.getCenter() as unknown as [number, number]
    const resolution = view?.getResolution()

    if (onViewChange && resolution) {
      onViewChange({ center, resolution })
    }
  }

  return (
    <div>
      <div
        ref={mapElement}
        id={MAP_ID}
        style={{ width: "100%", height: height ?? 400, minHeight: 400, maxHeight: "80vh" }}
      />
      <div ref={popupElement} id={POPUP_ID} />
      <Tooltip isOpen={popupOpen} target={POPUP_ID} toggle={popupClick}>
        <a onClick={popupClick}>{popupText}</a>
      </Tooltip>
    </div>
  )
}
