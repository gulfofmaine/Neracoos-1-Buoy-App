"use client"
/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import {
  Chart,
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
  name: string
  /** Soft minimum for Y axis */
  softMin: number | undefined
  /** Soft maximum for Y axis */
  softMax: number | undefined
  /** Unit system to display in */
  unitSystem: UnitSystem
  /** Data type to display */
  data_type: string
  /** Flood thresholds specific to sensor */
  floodThresholds: {
    [key: string]: FloodThreshold
  }
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
}: Props) {
  const dataConverter = converter(data_type)

  const data = timeSeries.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(r.reading as number, unitSystem) as number, 2),
  ])
  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={colorCycle}>
        <Chart height={"600px"} style={{ padding: "10px", border: "1px solid #d3d3d3" }} />

        <XAxis type="datetime" />

        <YAxis softMin={softMin} softMax={floodThresholds?.Major.maxValue}>
          <PlotBand
            from={floodThresholds?.Minor.minValue}
            to={floodThresholds?.Minor.maxValue}
            color={"#79A4FF50 "}
            label={{ text: "Minor Flooding", style: { fontSize: "11px", color: "gray" } }}
          />
          <PlotBand
            from={floodThresholds?.Moderate.minValue}
            to={floodThresholds?.Moderate.maxValue}
            color={"#BE84FF50"}
            label={{ text: "Moderate Flooding", style: { fontSize: "11px", color: "gray" } }}
          />
          <PlotBand
            from={floodThresholds?.Major.minValue}
            to={floodThresholds?.Major.maxValue}
            color={"#FF798B50"}
            label={{ text: "Major Flooding", style: { fontSize: "11px", color: "gray" } }}
          />
          <PlotBand
            from={floodThresholds?.Action.minValue}
            to={floodThresholds?.Action.maxValue}
            color={"#ffff6e50"}
            label={{ text: "Action", style: { fontSize: "11px", color: "gray" } }}
          />

          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries name={name} marker={{ enabled: false }} data={data} color={colors.coastalMeadow} />
        </YAxis>

        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
