/**
 * Basemap compnent
 */

import React from "react"
import { Tooltip } from "reactstrap"

// import TileLayer from 'ol/layer/Tile'
import Feature from "ol/Feature"
import Group from "ol/layer/Group"
import Layer from "ol/layer/Layer"
import Map from "ol/Map"
import MapBrowserEvent from "ol/MapBrowserEvent"
import Overlay from "ol/Overlay"
import { transform, transformExtent } from "ol/proj"
import RenderFeature from "ol/render/Feature"
import View from "ol/View"

import { BoundingBox } from "Shared/types"

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
  /** Height to set the map view to */
  height?: number | string
}

const MAP_ID = "map"
const POPUP_ID = "popup"

export const BaseMap: React.FC<Props> = ({ boundingBox, height, onClick, layers, lat, lon, startZoom }: Props) => {
  const mapElement = React.useRef<HTMLDivElement>(null)
  const popupElement = React.useRef<HTMLDivElement>(null)

  const [map, setMap] = React.useState<Map>()
  const [popup, setPopup] = React.useState<Overlay>()
  const [popupOpen, setPopupOpen] = React.useState(false)
  const [popupText, setPopupText] = React.useState("Test")
  const [popupFeature, setPopupFeature] = React.useState<Feature>()

  React.useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current ?? undefined,
      layers: [],
      view: new View({
        center: transform([lon, lat], "EPSG:4326", "EPSG:3857"),
        zoom: startZoom,
      }),
    })

    const initialPopup = new Overlay({
      element: popupElement.current ?? undefined,
    })
    initialMap.addOverlay(initialPopup)

    initialMap.on("click", handleMapClick)
    initialMap.on("pointermove", displayToolTip)

    setMap(initialMap)
    setPopup(initialPopup)
  }, [setMap])

  React.useEffect(() => {
    setMap((map) => {
      map?.getView().setCenter(transform([lon, lat], "EPSG:4326", "EPSG:3857"))
      return map
    })
  }, [lat, lon, setMap])

  React.useEffect(() => {
    if (boundingBox) {
      const { north, south, east, west } = boundingBox
      const extent = transformExtent([west, south, east, north], "EPSG:4326", "EPSG:3857")
      setMap((map) => {
        map?.getView().fit(extent)
        return map
      })
    }
  }, [boundingBox, setMap])

  React.useEffect(() => {
    setMap((map) => {
      map?.setLayerGroup(new Group({ layers }))
      return map
    })
  }, [layers, setMap])

  React.useLayoutEffect(() => {
    if (height) {
      setMap((map) => {
        map?.updateSize()
        return map
      })
    }
  }, [height, setMap])

  /**
   * Hand off map clicks on features to parent components
   */
  const handleMapClick = (event: MapBrowserEvent) => {
    if (onClick) {
      event.map.forEachFeatureAtPixel(event.pixel, (feature: Feature | RenderFeature, layer: any) => {
        if (feature instanceof Feature) {
          onClick(feature)
        }
      })
    }
  }

  /**
   * Display a tooltip upon hovering over a feature
   */
  const displayToolTip = (event: MapBrowserEvent) => {
    setPopup((popup) => {
      const feature: Feature | undefined = event.map.forEachFeatureAtPixel(
        event.pixel,
        (feature: Feature | RenderFeature, layer: any) => {
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
      onClick(popupFeature)
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
