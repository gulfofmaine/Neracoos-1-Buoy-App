/**
 * Single large time series chart component
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

import { humanUnitName } from '@app/Shared/dataTypes'
import { round } from '@app/Shared/math'
import { ReadingTimeSeries } from '@app/Shared/timeSeries'
import { conversion, convertUnit } from '@app/Shared/unitConversion'


/**
 * Wrap up our tooltip formatting function so we can specifiy the unit it should use
 * 
 * @param unit Unit that the chart should conver from
 * @returns A function ready to be called by tooltip to convert our units.
 */
function pointFormatMaker(unit: string) {
    return function pointFormatter(this: any) {
        return `${(new Date(this.x).toLocaleString())}<br />${this.y} ${unit} ${convertUnit(unit, this.y)}`
    }
}


interface Props {
    /** Time series data to dispaly */
    timeSeries: ReadingTimeSeries[]
    /** Name of data */
    name: string
    /** Unit to display on Y axis */
    unit: string
    /** Soft minimum for Y axis */
    softMin: number | undefined
    /** Soft maximum for Y axis */
    softMax: number | undefined
}

/**
 * Single large time series chart component
 */
class LargeTimeSeriesChartBase extends React.Component<Props, object> {

    public render() {
        const { name, softMax, softMin, timeSeries } = this.props
        let { unit } = this.props
        let data = timeSeries.map((r) => [r.time.valueOf(), round(r.reading, 2)])
        if (unit === 'Deg C') {
            data = timeSeries.map((r) => [r.time.valueOf(), conversion(r.reading, unit, 'F')])
            unit = 'F'
        }
        if (name === 'visibility_in_air') {
            data = timeSeries.map((r) => [r.time.valueOf(), conversion(r.reading, 'm', 'mi')])
            unit = 'Miles'
        }
        if (name === 'significant_height_of_wind_and_swell_waves') {
            data = timeSeries.map((r) => [r.time.valueOf(), conversion(r.reading, 'm', 'ft')])
            unit = 'Feet'
        }

        return (
            <HighchartsChart>
                <Chart />

                <XAxis type="datetime" />

                <YAxis 
                    softMin={softMin}
                    softMax={softMax}>
                    <YAxis.Title>{ humanUnitName(unit) }</YAxis.Title>
                    <SplineSeries
                        name={ name }
                        marker={{enabled: false}}
                        data={ data } />
                </YAxis>

                <Tooltip
                    formatter={pointFormatMaker(unit)} />
            </HighchartsChart>
        )
    }
}

/** Highcharts connected LargeTimeSeriesChart component. See [[LargeTimeSeriesChartBase]] for details. */
export const LargeTimeSeriesChart = withHighcharts(LargeTimeSeriesChartBase, Highcharts)
