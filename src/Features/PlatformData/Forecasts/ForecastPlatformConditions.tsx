import * as React from 'react'

import { 
    DatasetLoader,
    datasets
} from '../Erddap'
import { ErddapDataset } from '../types'


interface Props {
    platformId: string
}

const forecastDatasets: ErddapDataset[] = [
    datasets.NWW3,
    datasets.WW3
]

export class ForecastPlatformConditions extends React.Component<Props, object> {
    public render() {
        return (
            <div>
                <DatasetLoader 
                    platformId={this.props.platformId}
                    datasets={forecastDatasets} />
            </div>
        )
    }
}
