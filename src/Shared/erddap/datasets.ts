import { 
    DatasetTypes,
    ErddapDataset 
} from './types'

const erddapServers = {
    coastWatch: 'https://coastwatch.pfeg.noaa.gov/erddap',
    neracoos: 'http://www.neracoos.org/erddap'
}

const NWW3: ErddapDataset = {
    datasetId: 'NWW3_Global_Best',
    datasetType: DatasetTypes.grid,
    server: erddapServers.coastWatch
}

const WW3: ErddapDataset = {
    datasetId: 'WW3_GulfOfMaine_latest',
    datasetType: DatasetTypes.grid,
    server: erddapServers.neracoos
}

export const datasets = {
    NWW3,
    WW3
}
