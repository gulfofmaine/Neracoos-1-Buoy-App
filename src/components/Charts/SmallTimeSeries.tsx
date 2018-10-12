/**
 * Small time series chart component (as seen on current conditions page)
 */
import Highcharts from 'highcharts'
import * as React from 'react'
import {
    Chart,
    HighchartsChart,
    SplineSeries,
    Tooltip,
    withHighcharts,
    XAxis,
    YAxis
} from 'react-jsx-highcharts'

import { round } from '@app/Shared/math'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'
import { convertUnit } from '@app/Shared/unitConversion'


/**
 * Wrap up our tooltip formatting function so we can specifiy the unit it should use
 * 
 * @param unit Unit that the chart should conver from
 * @returns A function ready to be called by tooltip to convert our units.
 */
function pointFormatMaker(unit: string) {
    return function pointFormatter(this: any) {
        return `${this.y} ${unit} ${convertUnit(unit, this.y)}`
    }
}


interface Props {
    /** Time series to display */
    timeSeries: ReadingTimeSeries[]
    /** Name of time series */
    name: string
    /** Unit time series is measured in */
    unit: string
    /** Soft minimum for Y axis */
    softMin: number | undefined
    /** Soft maximum for Y axis */
    softMax: number | undefined
}

/**
 * Small time series chart component (as seen on current conditions page)
 */
class SmallTimeSeriesChartBase extends React.Component<Props, object> {

    public render() {
        const { name, softMax, softMin, timeSeries, unit } = this.props
        const data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])

        return (
            <HighchartsChart>
                <Chart height={150}/>

                <XAxis type='datetime' />

                <YAxis
                    softMin={ softMin }
                    softMax={ softMax }>
                    <YAxis.Title>{ unit }</YAxis.Title>
                    <SplineSeries
                        name={ name }
                        marker={{enabled: false}}
                        data={data} />
                </YAxis>

                <Tooltip 
                    // pointFormat={'{point.y} ' + unit}
                    formatter={pointFormatMaker(unit)}
                />
            </HighchartsChart>
        )
    }
}

/** Hightcharts enabled SmallTimeSeriesChart component. See [[SmallTimeSeriesChartBase]] for details. */
export const SmallTimeSeriesChart = withHighcharts(SmallTimeSeriesChartBase, Highcharts)
