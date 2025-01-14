"use client"
/**
 * Single large time series chart component
 */
import Highcharts from "highcharts"
import addAccessibility from "highcharts/modules/accessibility"
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
  PlotLine,
} from "react-jsx-highcharts"

import { FloodThreshold } from "Features/ERDDAP/types"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { colorCycle, colors, waterLevelChartColorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { DataTimeSeries, ReadingTimeSeries } from "Shared/timeSeries"
import { pointFormatMaker } from "components/Charts/formatter"
import { getValueWithOffset } from "Features/Units/Converter/data_types/_tidal_level"
import { shortestDisplayIso } from "Shared/time"

addAccessibility(Highcharts)
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
  softMin: number
  /** Soft maximum for Y axis */
  softMax: number
  /** Unit system to display in */
  unitSystem: UnitSystem
  /** Data type to display */
  data_type: string
  /** Flood thresholds specific to sensor */
  floodThresholds: {
    [key: string]: FloodThreshold
  }
  predictedDataset: DataTimeSeries | null
  /** Datum offset BEFORE unit conversion */
  datumOffset: number
  startTime: Date
  endTime: Date
  forecastedTidesDatasets: DataTimeSeries[] | null
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
  predictedDataset,
  forecastedTidesDatasets,
  startTime,
  endTime,
}: Props) {
  const dataConverter = converter(data_type)

  const data = timeSeries.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(getValueWithOffset(r.reading as number, datumOffset), unitSystem) as number, 2),
  ])

  const latestTime = data.map((d) => d[0]).sort((a, b) => a - b)[data.length - 1]

  const predictedTidesData = predictedDataset?.timeSeries?.map((r) => [
    r.time.valueOf(),
    round(dataConverter.convertToNumber(getValueWithOffset(r.reading as number, datumOffset), unitSystem) as number, 2),
  ])

  const forecastedTidesData = forecastedTidesDatasets?.map((d) =>
    d.timeSeries.map((ts) => [
      ts.time.valueOf(),
      round(
        dataConverter.convertToNumber(getValueWithOffset(ts.reading as number, datumOffset), unitSystem) as number,
        2,
      ),
    ]),
  )

  return (
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart time={plotOptions.time} colors={waterLevelChartColorCycle}>
        <Chart height={"600px"} style={{ padding: "10px", border: "1px solid #d3d3d3" }} />
        <XAxis
          type="datetime"
          min={startTime?.valueOf()}
          max={endTime?.valueOf()}
          crosshair={true}
          gridLineWidth={0.5}
          showLastLabel={true}
          minTickInterval={24 * 3600 * 1000}
        >
          <PlotLine
            color={"#a1a1a1"}
            value={latestTime}
            width={1.5}
            label={{
              text: `Latest: ${shortestDisplayIso(new Date(latestTime))}`,
              rotation: 0,
              align: "right",
              verticalAlign: "bottom",
              y: -5,
              x: -5,
              style: {
                zIndex: 10,
                fontWeight: "600",
                padding: "5px",
                backgroundColor: "#d3d3d3",
                border: "1px solid black",
              },
            }}
          />
        </XAxis>
        <YAxis
          softMin={softMin}
          softMax={
            floodThresholds
              ? floodThresholds?.Major?.minValue + dataConverter.convertToNumber(0.5, unitSystem)
              : softMax
          }
          endOnTick={false}
        >
          {/* {floodThresholds && (
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
          )} */}
          <YAxis.Title>{dataConverter.displayName(unitSystem)}</YAxis.Title>
          <SplineSeries
            key="observed"
            name={`Observed ${name}`}
            marker={{ enabled: false }}
            data={data}
            lineWidth={1.5}
          />

          {predictedDataset && (
            <SplineSeries
              key="predicted"
              name={`${predictedDataset?.displayName} ${predictedDataset?.type}`}
              marker={{ enabled: false }}
              data={predictedTidesData}
              color={colors.whatOrange}
              dashStyle="Dash"
            />
          )}
          {forecastedTidesDatasets &&
            forecastedTidesDatasets.map((f, index) => (
              <SplineSeries
                key={`forecasted-${index}`}
                name={`${f.displayName} ${f.type}`}
                marker={{ enabled: false }}
                data={forecastedTidesData?.[index]}
                dashStyle="ShortDot"
              />
            ))}
        </YAxis>
        <Legend layout="horizontal" />
        <Tooltip formatter={pointFormatMaker(unitSystem, data_type)} />
      </HighchartsChart>
    </HighchartsProvider>
  )
}
