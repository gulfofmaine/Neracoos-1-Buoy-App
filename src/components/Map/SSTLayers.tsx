import ImageLayer from 'ol/layer/Image'
import ImageWMS from 'ol/source/ImageWMS'

const sourceParams = {
    elevation: '0.0',
    transparent: 'true',
    version: '1.3.0',
}

// http://www.neracoos.org/static/ncdc_cache/NESHELF_OISST-V2-AVHRR_agg_combined_latest.json

const url = 'https://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly/OISST_Daily_AVHRR-only_Feature_Collection_best.ncd'
const prelimUrl = 'https://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly-prelim/OISST_Preliminary_Daily_AVHRR-only_Feature_Collection_best.ncd'

export const AnomLayer = (date: Date, prelim: boolean = false): ImageLayer => {
    return (
        new ImageLayer({
            source: new ImageWMS(({
                params: {
                    ...sourceParams,
                    COLORSCALERANGE: '-5,5',
                    STYLES: 'boxfill/redblue',
                    layers: 'anom',
                    time: date.toISOString()
                },
                projection: 'EPSG:4326',
                ratio: 1,
                serverType: 'geoserver',
                url: prelim ? prelimUrl : url
            }))
        })
    )
} 

export const OISSTLayer = (date: Date, prelim: boolean = false): ImageLayer => {
    return (
        new ImageLayer({
            source: new ImageWMS(({
                params: {
                    ...sourceParams,
                    COLORSCALERANGE: '0,35',
                    STYLES: 'boxfill/sst_36',
                    layers: 'sst',
                    time: date.toISOString()
                },
                projection: 'EPSG:4326',
                ratio: 1,
                serverType: 'geoserver',
                url: prelim ? prelimUrl : url
            }))
        })
    )
}
