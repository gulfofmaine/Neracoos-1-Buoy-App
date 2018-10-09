/**
 * Display forecasted platform conditions
 */
import * as React from 'react'
import {
    Col,
    Row
} from 'reactstrap'

import { datasets } from '@app/Shared/erddap'

import { DatasetLoader,} from '../Erddap'
import { ErddapDatasetAndField } from '../types'

import { ForecastChart } from './ForecastChart'



interface Props {
    /** Platform ID to load forecasts for */
    platformId: string
}


/** Forecasts to load */
const forecastDatasets: ErddapDatasetAndField[] = [
    {
        dataset: datasets.NWW3,
        field: 'Thgt',
        name: 'WW3 Global Model Predicted Wave Height'
    },{
        dataset: datasets.WW3,
        field: 'hs',
        name: 'WW3 Bedford Institute Predicted Wave Height'
    }
]


/**
 * Platform forecast display component
 */
export class ForecastPlatformConditions extends React.Component<Props, object> {
    public render() {
        return (
            <div>
                <DatasetLoader 
                    platformId={this.props.platformId}
                    datasetsAndFields={forecastDatasets}>
                    <Row>
                        <Col>
                            <h2>Wave forecast</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ForecastChart 
                                platformId={this.props.platformId}
                                datasets={forecastDatasets} />
                        </Col>
                    </Row>
                        
                </DatasetLoader>
            </div>
        )
    }
}
