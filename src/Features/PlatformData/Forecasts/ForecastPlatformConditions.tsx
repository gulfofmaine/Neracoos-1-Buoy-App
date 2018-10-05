import * as React from 'react'

import { 
    datasets,
} from '@app/Shared/erddap'

import { 
    DatasetLoader,
} from '../Erddap'
import {
    ErddapDatasetAndField
} from '../types'


interface Props {
    platformId: string
}

const forecastDatasets: ErddapDatasetAndField[] = [
    {
        dataset: datasets.NWW3,
        field: 'Thgt'
    },{
        dataset: datasets.WW3,
        field: 'hs'
    }
]

export class ForecastPlatformConditions extends React.Component<Props, object> {
    public render() {
        return (
            <div>
                <DatasetLoader 
                    platformId={this.props.platformId}
                    datasetsAndFields={forecastDatasets}>
                        Hi from ForecastPlatformConditions
                    </DatasetLoader>
            </div>
        )
    }
}
