import { IAsset } from "@gulfofmaine/tsstac"
import { Point } from "ol/geom"
import "ol/ol.css"
import { fromLonLat, toLonLat } from "ol/proj"
import React from "react"
import { RFeature, RLayerTile, RLayerTileWMS, RLayerVector, RMap, RStyle } from "rlayers"

import { colors } from "Shared/colors"
import { round } from "Shared/math"

import { useLayer, usePoint, useTime, useView } from "./query-hooks"
import { useLatestItemByCollectionIdQuery } from "./stac-queries"
import { initialView } from "./types"

/**
 * Display a map with selected data loaded
 */
export const StacMap = () => {
  const [point, setPoint] = usePoint()
  const [{ center, zoom }, setView] = useView()

  return (
    <RMap
      height={"60vh"}
      className="model-map"
      initial={{ center: fromLonLat(initialView.center), zoom: initialView.zoom }}
      view={[{ center: fromLonLat(center), zoom }, setView]}
      onClick={(event) => {
        const coords = toLonLat(event.map.getCoordinateFromPixel(event.pixel))

        setPoint([round(coords[0]), round(coords[1])])
      }}
    >
      <RLayerTile url="http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}" />
      <RLayerTile url="http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}" />

      <SelectedLayerWMS />

      {/* {point ? <SelectedPoint point={point} setPoint={setPoint} /> : null} */}
    </RMap>
  )
}

/**
 * Display selected point
 *
 * @param x,y coordinates of point
 */
const SelectedPoint = ({
  point,
  setPoint,
}: {
  point: [number, number]
  setPoint: ([x, y]: [number, number]) => void
}) => {
  return (
    <RLayerVector>
      <RFeature
        geometry={new Point(fromLonLat(point))}
        // Enable dragging of point, though the map springs back despite prevent defaults
        // onPointerDrag={React.useCallback((e) => {
        //   const coords = e.map.getCoordinateFromPixel(e.pixel)
        //   e.target.setGeometry(new Point(coords))
        //   e.preventDefault()
        //   return false
        // }, [])}
        // onPointerDragEnd={React.useCallback((e) => {
        //   const coords = toLonLat(e.map.getCoordinateFromPixel(e.pixel))
        //   e.preventDefault()
        //   setPoint([round(coords[0]), round(coords[1])])
        // }, [])}
        // onPointerEnter={React.useCallback((e) => (e.map.getTargetElement().style.cursor = "move") && undefined, [])}
        // onPointerLeave={React.useCallback((e) => (e.map.getTargetElement().style.cursor = "initial") && undefined, [])}
      >
        <RStyle.RStyle>
          <RStyle.RCircle radius={10}>
            <RStyle.RFill color={colors.whatOrange} />
            <RStyle.RStroke color="grey" width={1.5} />
          </RStyle.RCircle>
        </RStyle.RStyle>
      </RFeature>
    </RLayerVector>
  )
}

/**
 * Load WMS layer if a STAC layer is selected
 * @returns WMS Layer if STAC Item is selected
 */
export const SelectedLayerWMS = () => {
  const [currentLayer, setLayer] = useLayer()

  if (currentLayer.id && currentLayer.vars.length > 0) {
    return <LayerWMS layerId={currentLayer.id} dataVar={currentLayer.vars[0]} />
  }

  return null
}

/**
 * Load WMS layer for a selected STAC item and variable
 * @param layerID STAC Item unique ID to load from root catalog
 * @param dataVar STAC Item variable to display
 */
const LayerWMS = ({ layerId, dataVar }: { layerId: string; dataVar: string }) => {
  const itemQuery = useLatestItemByCollectionIdQuery(layerId)
  const [time, setTime] = useTime()

  if (itemQuery.data && itemQuery.data.properties) {
    const times: string[] = itemQuery.data.properties["cube:dimensions"].time.values ?? []
    const foundTime = times.find((t) => t === time)

    // Escape early if the time doesn't exist for the layer
    if (typeof foundTime === "undefined") {
      return null
    }

    const wms_asset: IAsset | undefined = Object.values(itemQuery.data.assets).find((asset: IAsset) =>
      asset.roles.includes("wms"),
    )
    const wms_href = wms_asset?.href

    if (wms_href) {
      return (
        <RLayerTileWMS
          url={wms_href}
          key={wms_href + dataVar + time}
          opacity={0.7}
          params={{
            // STYLES: "boxfill/sst_36",
            // transparent: "true",
            layers: dataVar,
            STYLES: "default",
            // STYLES: "x-Occam",
            time,
            COLORSCALERANGE: "0,5",
          }}
        />
      )
    }
  }

  return null
}
