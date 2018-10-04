import { ErddapDataset } from '../types'

const NWW3: ErddapDataset = {
    datasetId: 'NWW3_Global_Best',
    server: 'https://coastwatch.pfeg.noaa.gov/erddap'
}

const WW3: ErddapDataset = {
    datasetId: 'WW3_GulfOfMaine_latest',
    server: 'http://www.neracoos.org/erddap'
}

export const datasets = {
    NWW3,
    WW3
}
