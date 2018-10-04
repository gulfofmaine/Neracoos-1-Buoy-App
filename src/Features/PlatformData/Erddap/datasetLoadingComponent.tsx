import { Feature } from '@turf/helpers'
import * as React from 'react'
import { connect } from 'react-redux'
import {
    Alert,
    Col,
    Row
} from 'reactstrap'
import {
    bindActionCreators,
    Dispatch
} from 'redux'

import { StoreState } from '@app/constants'
import { ErddapDataset } from '@app/Shared/erddap'

import { metadataLoad } from '../actions'
import { ErddapDatasetInfo, Status } from '../types'

interface Props {
    platformId: string
    datasets: ErddapDataset[]
}

interface ReduxProps {
    datasetInfo: ErddapDatasetInfo[]
    platforms: Feature[]
    loadMetadata: (dataset: ErddapDataset) => void
    // clearMessage: (datasetId: string, server: string) => void
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
            this.props.loadMetadata(dataset)
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

        const alerts = this.props.datasetInfo.filter(
            (dataset) => dataset.error_message.length > 0
        ).map((dataset, index) =>
            <Alert key={index} color="warning">{dataset.error_message}</Alert>
        )

        return (
            <div>
                <Row>
                    <Col>
                        {alerts}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert color="primary">
                            Dataset loader
                        </Alert>
                    </Col>
                </Row>
            </div>
        )
    }
}

export const DatasetLoader = connect(mapStateToProps, mapDispatchToProps)(DatasetLoaderBase)
