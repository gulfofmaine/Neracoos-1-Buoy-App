import Attribution from 'ol/control/Attribution'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

const attribution = new Attribution({
    html: 'Basemap &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
})

const esriOceanBasemapURL: string = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer'

export const EsriOceanBasemapLayer = new TileLayer({
    source: new XYZ({
        attribution: [attribution],
        url: esriOceanBasemapURL + '/tile/{z}/{y}/{x}'
    })
})

const ersiOceanReferenceURL: string = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}'

export const EsriOceanReferenceLayer = new TileLayer({
    source: new XYZ({
        attribution: [attribution],
        url: ersiOceanReferenceURL
    })
})
