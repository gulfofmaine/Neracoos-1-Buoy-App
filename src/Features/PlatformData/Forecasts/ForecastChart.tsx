import * as React from 'react'
import { connect } from 'react-redux'

import { MultipleLargeTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'
import { DataTimeSeries } from '@app/Shared/timeSeries'

import { 
    ErddapDatasetAndField,
    Platform 
} from '../types'

interface Props {
    platformId: string
    datasets: ErddapDatasetAndField[]
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

class ForecastChartBase extends React.Component<Props & ReduxProps, object> {
    public render() {
        const platform = this.props.platforms.filter((p) => p.id === this.props.platformId)[0]

        const requestedDatasets = platform.forecasts_types.filter((f) => {
            return this.props.datasets.filter((d) =>
                d.dataset.datasetId === f.dataset.dataset.datasetId
                && d.dataset.datasetType === f.dataset.dataset.datasetType
                && d.dataset.server === f.dataset.dataset.server
                && d.field === f.dataset.field).length > 0
        })

        const data: DataTimeSeries[] = requestedDatasets.map((f) => {
            return {
                name: f.dataset.name,
                timeSeries: f.data,
                unit: f.unit
            }
        })

        const yesterday = new Date()
        yesterday.setHours(-24)

        platform.data_types.filter(
            (d) => d.data_type.includes('wave') && !d.data_type.includes('period')
        ).map((d) => {
            data.push({
                name: 'Observed Wave height',
                timeSeries: d.data.filter((ts) => ts.time > yesterday),
                unit: d.unit
            })
        })

        return (
            <MultipleLargeTimeSeriesChart data={data} />
        )
    }
}

export const ForecastChart = connect(mapStateToProps)(ForecastChartBase)
