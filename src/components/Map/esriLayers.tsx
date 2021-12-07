import React from "react"
import { RLayerTile } from "rlayers"

const attribution =
  'Basemap &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'

/** URL for ESRI ocean basemap endpoint */
const esriOceanBasemapURL: string =
  "http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"

/** URL for ESRI ocean reference (names, depths) endpoint */
const ersiOceanReferenceURL: string =
  "http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}"

export const EsriOceanBasemapLayer = () => <RLayerTile url={esriOceanBasemapURL} attributions={attribution} />

export const EsriOceanReferenceLayer = () => <RLayerTile url={ersiOceanReferenceURL} attributions={attribution} />
