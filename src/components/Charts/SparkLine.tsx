import Highcharts from 'highcharts'
import * as React from 'react'
import { 
    // AreaSeries, 
    HighchartsSparkline, 
    SplineSeries,
    Tooltip,
    withHighcharts,
} from 'react-jsx-highcharts'

import { ReadingTimeSeries } from '@app/Shared/timeSeries'

interface Props {
    timeSeries: ReadingTimeSeries[]
    name: string
}

class SparkLineChartBase extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const data = this.props.timeSeries.map((reading) => [reading.time, reading.reading])

        const positioner = (w: any, h: any, point: any) => ({x: point.plotX - w / 2, y: point.plotY - h})
        return (
            <HighchartsSparkline>
                {/* <AreaSeries 
                name={this.props.name} 
                data={data} /> */}
                <SplineSeries
                    name={this.props.name}
                    data={data} />
                <Tooltip
                    useHtml={true}
                    borderWidth={1}
                    shadow={false}
                    hideDelay={0}
                    padding={8}
                    headerFormat={ '<b>' + this.props.name + '</b>' }
                    pointFormat={'{point.y:,.0f}'}
                    positioner={positioner} />
            </HighchartsSparkline>
        )
    }
}


export const SparkLineChart = withHighcharts(SparkLineChartBase, Highcharts)