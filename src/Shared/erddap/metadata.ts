import { ErddapDataset } from './types'

/**
 * Return the metadata URL for a given dataset.
 * 
 * @param dataset Source dataset to extract URL from.
 * @returns String with URL to ERDDAP server dataset metadata.
 */
export function datasetInfoJson(dataset: ErddapDataset): string {
    return dataset.server + '/info/' + dataset.datasetId + '/index.json'
}
