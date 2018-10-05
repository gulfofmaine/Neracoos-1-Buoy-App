import { ErddapDataset } from './types'

export function datasetInfoJson(dataset: ErddapDataset): string {
    return dataset.server + '/info/' + dataset.datasetId + '/index.json'
}
