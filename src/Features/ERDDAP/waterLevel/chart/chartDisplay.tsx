import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"
import { getDatumDisplayName } from "Shared/dataTypes"
import { TimeframeSelector } from "../timeframeSelector"
import {
  displayShortIso,
  fullBeginningDateIso,
  getIsoForPicker,
  manuallySetFullEODIso,
  roundDate,
  shortIso,
} from "Shared/time"
import { round } from "@turf/helpers"
import { getValueWithOffset } from "Features/Units/Converter/data_types/_tidal_level"

interface ChartTimeSeriesDisplayProps {
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
  predictedTidesDataset: DataTimeSeries | null
  startTime: Date
  endTime: Date
}

export const WaterLevelChartDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unitSystem,
  predictedTidesDataset,
  startTime,
  endTime,
}: ChartTimeSeriesDisplayProps) => {
  const [floodThresholds, setFloodThresholds] = useState<any>()
  const [datumOffset, setDatumOffset] = useState<number | undefined>()
  const [title, setTitle] = useState<string>()
  const [yMax, setYMax] = useState<number>()
  const [yMin, setYMin] = useState<number>()

  const params = useParams()
  const searchParams = useSearchParams()
  const dataConverter = converter(standardName)
  const sensorId = decodeURIComponent(params.sensorId as string)

  const getDefaultTitle = () => {
    if (!Object.keys(timeSeries.datum_offsets).length) {
      return timeSeries.data_type.long_name
    }
  }

  const getMaxThreshold = () => {
    return Object.keys(floodThresholds).reduce((max, f) => {
      return floodThresholds[f].maxValue > max ? floodThresholds[f].maxValue : max
    }, 0)
  }

  useEffect(() => {
    if (timeSeries.flood_levels.length) {
      const floodLevelsMap = timeSeries.flood_levels.reduce((acc, level, index) => {
        if (!acc[level.name] && typeof datumOffset === "number") {
          acc[level.name] =
            level.name === "Major"
              ? {
                  minValue: dataConverter.convertToNumber(getValueWithOffset(level.min_value, datumOffset), unitSystem),
                  maxValue:
                    dataConverter.convertToNumber(getValueWithOffset(level.min_value, datumOffset), unitSystem) + 1,
                }
              : {
                  minValue: dataConverter.convertToNumber(getValueWithOffset(level.min_value, datumOffset), unitSystem),
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
  }, [timeSeries, datumOffset, unitSystem])

  useEffect(() => {
    if (searchParams.get("datum")) {
      const datum = searchParams.get("datum") as string
      const offsetName = Object.keys(timeSeries.datum_offsets).find((d) => d.includes(datum.toLowerCase()))
      offsetName && setDatumOffset(timeSeries.datum_offsets[offsetName])
    }
  }, [searchParams, timeSeries])

  useEffect(() => {
    const allReadings = dataset.timeSeries.map((t) => t.reading)
    setYMax(
      floodThresholds
        ? dataConverter.convertToNumber(getMaxThreshold(), unitSystem)
        : dataConverter.convertToNumber(Math.max(...allReadings), unitSystem),
    )
    setYMin(dataConverter.convertToNumber(Math.min(...allReadings), unitSystem))
  }, [floodThresholds, dataset, unitSystem])

  useEffect(() => {
    if (timeSeries) {
      const graphTitle = Object.keys(timeSeries.datum_offsets).includes(searchParams.get("datum") as string)
        ? getDatumDisplayName(searchParams.get("datum") as string)
        : getDefaultTitle()
      setTitle(graphTitle)
    }
  }, [timeSeries, searchParams])

  return (
    <div>
      <h4 style={{ width: "100%", textAlign: "center" }}>{`${title} for Station: ${sensorId}`}</h4>
      <p style={{ textAlign: "center" }}>{`${displayShortIso(startTime)} - ${displayShortIso(endTime)}`}</p>
      <LargeTimeSeriesWaterLevelChart
        timeSeries={dataset.timeSeries}
        predictedTidesTimeSeries={predictedTidesDataset?.timeSeries}
        predictedTidesName={predictedTidesDataset?.name}
        name={title}
        softMin={yMin as number}
        softMax={yMax as number}
        unitSystem={unitSystem}
        data_type={standardName}
        datumOffset={datumOffset || 0}
        floodThresholds={floodThresholds}
        startTime={startTime}
        endTime={endTime}
      />
      <TimeframeSelector graphFuture={predictedTidesDataset ? true : false} />
      {/* <DatumSelector datumOffsets={timeSeries.datum_offsets} /> */}
    </div>
  )
}
