import { 
    Feature,
    Geometry 
} from '@turf/helpers'
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

import { 
    forecastDataLoad,
    metadataLoad,
    platformForecastClearError
} from '../actions'
import { 
    ErddapDatasetAndField, 
    ErddapDatasetInfo, 
    Platform,
    Status 
} from '../types'

import { LoadingAlert } from './AlertComponent'

interface Props {
    platformId: string
    datasetsAndFields: ErddapDatasetAndField[]
}

interface ReduxProps {
    datasetInfo: ErddapDatasetInfo[]
    features: Feature[]
    platforms: Platform[]
    loadMetadata: (dataset: ErddapDataset) => void
    loadDataset: (platformId: string, dataset: ErddapDatasetInfo, lat: number, lon: number, field: string) => void
    clearError: (platformId: string, dataset: ErddapDatasetAndField) => void
}

function mapStateToProps({ platformData, platformMap }: StoreState) {
    return {
        datasetInfo: platformData.datasetInfo,
        features: platformMap.platforms,
        platforms: platformData.platforms
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    clearError: platformForecastClearError,
    loadDataset: forecastDataLoad,
    loadMetadata: metadataLoad
}, dispatch)

export class DatasetLoaderBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        const notLoaded = this.props.datasetsAndFields.filter((datasetAndField) => {
            return this.props.datasetInfo.filter(
                (d) => (d.datasetId === datasetAndField.dataset.datasetId && d.server === datasetAndField.dataset.server)
                ).length < 1
        })

        notLoaded.map((datasetAndField) => {
            this.props.loadMetadata(datasetAndField.dataset)
        })

        const loaded = this.props.datasetsAndFields.filter((datasetAndField) => 
            this.props.datasetInfo.filter((d) =>
                d.datasetId === datasetAndField.dataset.datasetId &&
                d.server === datasetAndField.dataset.server && 
                d.status === Status.Loaded
            ).length > 0
        )

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
                { loaded.length > 0 ?  this.renderForecastLoading() : (
                    <Row>
                        <Col>
                            <Alert color="primary">
                                Loading metadata
                            </Alert>
                        </Col>
                    </Row>
                )}
                
            </div>
        )
    }

    private renderForecastLoading() {
        const platform = this.props.platforms.filter((p) => p.id === this.props.platformId)[0]

        const requestedDatasets = platform.forecasts_types.filter((f) => {
            return this.props.datasetsAndFields.filter(
                (d) => d.dataset.datasetId === f.dataset.dataset.datasetId
                && d.dataset.datasetType === f.dataset.dataset.datasetType
                && d.dataset.server === f.dataset.dataset.server
                && d.field === f.dataset.field).length > 0
        })

        if (requestedDatasets.length !== this.props.datasetsAndFields.length) {
            const feature = this.props.features.filter((p) => p.properties!.name === this.props.platformId)[0]
            const coordinates = (feature.geometry as Geometry).coordinates as number[]
    
            this.props.datasetInfo.map((datasetInfo) => {
                const datasetsAndField = this.props.datasetsAndFields.filter(
                    (d) => d.dataset.datasetId === datasetInfo.datasetId 
                        && d.dataset.datasetType === datasetInfo.datasetType 
                        && d.dataset.server === datasetInfo.server)[0]
                if (datasetsAndField !== undefined) {
                    if (platform.forecasts_types.filter(
                        (f) => f.dataset.dataset.datasetId === datasetsAndField.dataset.datasetId
                            && f.dataset.dataset.datasetType === datasetsAndField.dataset.datasetType
                            && f.dataset.dataset.server === datasetsAndField.dataset.server
                            && f.dataset.field === datasetsAndField.field).length < 1) {
                        // tslint:disable-next-line:no-console
                        console.log('Should load dataset for ', datasetsAndField)
    
                        this.props.loadDataset(platform.id, datasetInfo, coordinates[1], coordinates[0], datasetsAndField.field)
                    }
                }
            })

            return (
                <Alert color="primary">Forecasts Loading</Alert>
            )
        } else {
            const errors = requestedDatasets.filter(
                (d) => d.error_message.length > 0
            ).map((d, index) =>
                <LoadingAlert key={index} dataset={d} platformId={platform.id} clearError={this.props.clearError} />
            )

            return (
                <div>
                    { errors }
                    Forecasts loaded
                </div>
            )
        }
        

        
    }
}

export const DatasetLoader = connect(mapStateToProps, mapDispatchToProps)(DatasetLoaderBase)
