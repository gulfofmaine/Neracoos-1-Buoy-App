import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    bindActionCreators,
    Dispatch
} from 'redux'

import { StoreState } from '@app/constants'

import { metadataLoad } from '../actions'
import { ErddapDataset, ErddapDatasetInfo, Status } from '../types'

interface Props {
    platformId: string
    datasets: ErddapDataset[]
}

interface ReduxProps {
    datasetInfo: ErddapDatasetInfo[]
    platforms: Feature[]
    loadMetadata: (datasetId: string, server: string) => void
    // loadDataset: (platformId: string, datasetName: string, server: string) => void
}

function mapStateToProps({ platformData, platformMap }: StoreState) {
    return {
        datasetInfo: platformData.datasetInfo,
        platforms: platformMap.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadMetadata: metadataLoad
}, dispatch)

export class DatasetLoaderBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        const notLoaded = this.props.datasets.filter((dataset) => {
            return this.props.datasetInfo.filter(
                (d) => (d.datasetId === dataset.datasetId && d.server === dataset.server)
                ).length < 1
        })

        notLoaded.map((dataset) => {
            this.props.loadMetadata(dataset.datasetId, dataset.server)
        })

        const loaded = this.props.datasets.filter((dataset) => 
            this.props.datasetInfo.filter((d) =>
                d.datasetId === dataset.datasetId &&
                d.server === dataset.server && 
                d.status === Status.Loaded
            ).length > 0
        )

        // tslint:disable-next-line:no-console
        console.log(loaded)

        return (
            <div>Dataset loader</div>
        )
    }
}

export const DatasetLoader = connect(mapStateToProps, mapDispatchToProps)(DatasetLoaderBase)
