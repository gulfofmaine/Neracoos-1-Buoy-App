import TileLayer from "ol/layer/Tile"
import { AttributionLike } from "ol/source/Source"
import XYZ from "ol/source/XYZ"

const attribution: AttributionLike =
  'Basemap &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'

/** URL for ESRI ocean basemap endpoint */
const esriOceanBasemapURL: string =
  "http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"

/** OpenLayers TileLayer for ESRI Ocean Basemap */
export const EsriOceanBasemapLayer = new TileLayer({
  source: new XYZ({
    attributions: [attribution],
    url: esriOceanBasemapURL + "/tile/{z}/{y}/{x}"
  })
})

/** URL for ESRI ocean reference (names, depths) endpoint */
const ersiOceanReferenceURL: string =
  "http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}"

/** OpenLayers TileLayer for ESRI ocean reference (names, depths) layer */
export const EsriOceanReferenceLayer = new TileLayer({
  source: new XYZ({
    attributions: [attribution],
    url: ersiOceanReferenceURL
  })
})
