import { useEffect, useState } from "react"

import { PlatformFeature, PlatformTimeSeries } from "Features/ERDDAP/types"
import { TimeframeSelector } from "Features/ERDDAP/TimeframeSelector"
import { TidesTable } from "Features/ERDDAP/waterLevel/TidesTable"
import { converter } from "Features/Units/Converter"
import { getValueWithOffset } from "Features/Units/Converter/data_types/_tidal_level"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
import { getDatumDisplayName } from "Shared/dataTypes"
import { displayShortIso } from "Shared/time"

import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"
import { Datums, FloodThreshold } from "../../types"

interface ChartTimeSeriesDisplayProps {
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
  predictedTidesDataset: DataTimeSeries | null
  forecastedTidesDatasets: DataTimeSeries[] | null
  startTime: Date
  endTime: Date
  platform?: PlatformFeature
  datumOffset: number | undefined
  datum?: Datums
}

export const WaterLevelChartDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unitSystem,
  predictedTidesDataset,
  forecastedTidesDatasets,
  startTime,
  endTime,
  platform,
  datumOffset,
  datum,
}: ChartTimeSeriesDisplayProps) => {
  const [floodThresholds, setFloodThresholds] = useState<{ [key: string]: FloodThreshold }>({})
  const [yMax, setYMax] = useState<number>(0)
  const [yMin, setYMin] = useState<number>(0)

  const dataConverter = converter(standardName)
  const sensorId = platform?.id

  const getDefaultTitle = () => {
    if (!Object.keys(timeSeries.datum_offsets).length) {
      return timeSeries.data_type.long_name
    }
  }

  useEffect(() => {
    if (timeSeries.flood_levels.length > 0) {
      const floodLevelsMap = timeSeries.flood_levels
        .sort((a, b) => b.min_value - a.min_value)
        .reduce((acc, level, index) => {
          if (!acc[level.name] && typeof datumOffset === "number") {
            acc[level.name] =
              level.name === "Major"
                ? {
                    minValue: dataConverter.convertToNumber(
                      getValueWithOffset(level.min_value, datumOffset),
                      unitSystem,
                    ),
                    maxValue:
                      dataConverter.convertToNumber(getValueWithOffset(level.min_value, datumOffset), unitSystem) + 1,
                  }
                : {
                    minValue: dataConverter.convertToNumber(
                      getValueWithOffset(level.min_value, datumOffset),
                      unitSystem,
                    ),
                    maxValue: dataConverter.convertToNumber(
                      getValueWithOffset(timeSeries.flood_levels[index - 1].min_value, datumOffset),
                      unitSystem,
                    ),
                  }
          }
          return acc
        }, {})
      setFloodThresholds(floodLevelsMap)
    }
  }, [timeSeries, datumOffset, unitSystem, dataConverter])

  useEffect(() => {
    const getMaxThreshold = () => {
      return Object.keys(floodThresholds).reduce((max, f) => {
        return floodThresholds[f].maxValue > max ? floodThresholds[f].maxValue : max
      }, 0)
    }

    const allReadings = dataset.timeSeries.map((t) => t.reading)

    setYMax(
      floodThresholds
        ? dataConverter.convertToNumber(getMaxThreshold(), unitSystem)
        : dataConverter.convertToNumber(Math.max(...allReadings), unitSystem),
    )
    setYMin(dataConverter.convertToNumber(Math.min(...allReadings), unitSystem))
  }, [floodThresholds, dataset, unitSystem, dataConverter])

  const title = timeSeries && datum ? getDatumDisplayName(datum) : getDefaultTitle()

  return (
    <div>
      <div style={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "center" }}>
        <h4 style={{ width: "100%", textAlign: "center" }}>{`${title} for Station: ${sensorId}`}</h4>
        <p style={{ textAlign: "center", marginBottom: 0 }}>{`${displayShortIso(startTime)} - ${displayShortIso(
          endTime,
        )}`}</p>
      </div>
      <LargeTimeSeriesWaterLevelChart
        timeSeries={dataset.timeSeries}
        predictedDataset={predictedTidesDataset}
        forecastedTidesDatasets={forecastedTidesDatasets}
        name={title}
        softMin={yMin as number}
        softMax={yMax as number}
        unitSystem={unitSystem}
        data_type={standardName}
        datumOffset={datumOffset || 0}
        floodThresholds={floodThresholds}
        startTime={startTime}
        endTime={endTime}
      />{" "}
      <TimeframeSelector
        graphFuture={predictedTidesDataset || forecastedTidesDatasets ? true : false}
        isWaterLevel={true}
      />
      {platform && (
        <TidesTable
          platform={platform}
          standardName={standardName}
          datumOffset={datumOffset || 0}
          // dataset={dataset}
          predictedTidesDataset={predictedTidesDataset}
          forecastedTidesDatasets={forecastedTidesDatasets}
        />
      )}
    </div>
  )
}
