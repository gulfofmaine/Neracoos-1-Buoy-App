"use client"
/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import {
  Chart,
  Legend,
  HighchartsChart,
  HighchartsProvider,
  PlotBand,
  SplineSeries,
  Tooltip,
  XAxis,
  YAxis,
} from "react-jsx-highcharts"

import { FloodThreshold } from "Features/ERDDAP/types"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { colorCycle, colors } from "Shared/colors"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { pointFormatMaker } from "components/Charts/formatter"

const plotOptions = {
  time: {
    useUTC: false,
  },
}

interface Props {
  /** Time series data to dispaly */
  timeSeries: ReadingTimeSeries[]
  /** Name of data */
  name: string | undefined
  /** Soft minimum for Y axis */
  softMin: number | undefined
  /** Soft maximum for Y axis */
  softMax: any
  /** Unit system to display in */
  unitSystem: UnitSystem
  /** Data type to display */
  data_type: string
  /** Flood thresholds specific to sensor */
  floodThresholds: {
    [key: string]: FloodThreshold
  }
  predictedTidesTimeSeries: ReadingTimeSeries[] | undefined
  predictedTidesName: string | undefined
  datumOffset: number | undefined
  startTime: Date
  endTime: Date
}

/**
 * Single large time series chart component
 */
export function LargeTimeSeriesWaterLevelChart({
  name,
  softMax,
  softMin,
  timeSeries,
  data_type,
  unitSystem,
  floodThresholds,
  datumOffset,
  predictedTidesTimeSeries,
  predictedTidesName,
  startTime,
  endTime,
}: Props) {
  const dataConverter = converter(data_type)

  const data = timeSeries.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(r.reading as number, unitSystem) as number, 2) +
      (datumOffset ? datumOffset : 0),
  ])

  const predictedTidesData = predictedTidesTimeSeries?.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(r.reading as number, unitSystem) as number, 2) +
      (datumOffset ? datumOffset : 0),
  ])

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart height={"600px"} style={{ padding: "10px", border: "1px solid #d3d3d3" }} />
        <XAxis
          type="datetime"
          min={startTime?.valueOf()}
          max={endTime?.valueOf()}
          crosshair={true}
          gridLineWidth={0.5}
        />
        <YAxis
          softMin={softMin}
          softMax={floodThresholds ? floodThresholds?.Major?.minValue + 3 : softMax[unitSystem]}
          endOnTick={false}
        >
          {floodThresholds && (
            <div>
              <PlotBand
                from={floodThresholds.Minor?.minValue}
                to={floodThresholds.Minor?.maxValue}
                color={`${colors.minorThreshold}30`}
                label={{
                  text: `Minor Flooding ${round(floodThresholds.Minor?.minValue, 1)} ${dataConverter.unitName(
                    unitSystem,
                  )}`,
                  verticalAlign: "bottom",
                  y: -3,
                  style: { fontSize: "11px", color: "gray" },
                }}
              />
              <PlotBand
                from={floodThresholds.Moderate?.minValue}
                to={floodThresholds.Moderate?.maxValue}
                color={`${colors.moderateThreshold}30`}
                label={{
                  text: `Moderate Flooding ${round(floodThresholds.Moderate?.minValue, 1)} ${dataConverter.unitName(
                    unitSystem,
                  )}`,
                  verticalAlign: "bottom",
                  y: -3,
                  style: { fontSize: "11px", color: "gray" },
                }}
              />
              <PlotBand
                from={floodThresholds.Major?.minValue}
                to={floodThresholds?.Major?.minValue + 3}
                color={`${colors.majorThreshold}30`}
                acrossPanes={false}
                label={{
                  text: `Major Flooding: ${round(floodThresholds.Major?.minValue, 1)} ${dataConverter.unitName(
                    unitSystem,
                  )}`,
                  verticalAlign: "bottom",
                  y: -3,
                  style: { fontSize: "11px", color: "gray" },
                }}
              />
              <PlotBand
                from={floodThresholds.Action?.minValue}
                to={floodThresholds.Action?.maxValue}
                color={`${colors.actionThreshold}30`}
                label={{
                  text: `Action ${round(floodThresholds.Action?.minValue, 1)} ${dataConverter.unitName(unitSystem)}`,
                  verticalAlign: "bottom",
                  y: -3,
                  style: { fontSize: "11px", color: "gray" },
                }}
              />
            </div>
          )}
          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries
            name={`Observed ${name}`}
            marker={{ enabled: false }}
            data={data}
            color={colors.coastalMeadow}
          />
          {predictedTidesData && (
            <SplineSeries
              name={predictedTidesName}
              marker={{ enabled: false }}
              data={predictedTidesData}
              color={colors.buoyYellow}
            />
          )}
        </YAxis>
        <Legend layout="horizontal" />
        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
