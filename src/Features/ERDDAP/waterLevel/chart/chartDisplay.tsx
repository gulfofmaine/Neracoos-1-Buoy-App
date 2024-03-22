import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { DatumSelector } from "../DatumSelector"
import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"
import { getDatumDisplayName } from "Shared/dataTypes"

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
  const params = useParams()
  const dataConverter = converter(standardName)
  const sensorId = decodeURIComponent(params.sensorId as string)

  const getDefaultTitle = () => {
    if (!Object.keys(timeSeries.datum_offsets).length) {
      return timeSeries.data_type.long_name
    }
  }

  useEffect(() => {
    if (timeSeries.flood_levels.length) {
      const floodLevelsMap = timeSeries.flood_levels.reduce((acc, level, index) => {
        if (!acc[level.name] && typeof datumOffset === "number") {
          acc[level.name] =
            level.name === "Major"
              ? {
                  minValue: dataConverter.convertToNumber(level.min_value, unitSystem) + datumOffset,
                  maxValue: dataConverter.convertToNumber(level.min_value, unitSystem) + 1 + datumOffset,
                }
              : {
                  minValue: dataConverter.convertToNumber(level.min_value, unitSystem) + datumOffset,
                  maxValue:
                    dataConverter.convertToNumber(timeSeries.flood_levels[index - 1].min_value, unitSystem) +
                    datumOffset,
                }
        }
        return acc
      }, {})
      setFloodThresholds(floodLevelsMap)
    }
  }, [timeSeries, datumOffset, unitSystem])

  useEffect(() => {
    if (params.datum) {
      const datum = decodeURIComponent(params.datum as string)
      const offsetName = Object.keys(timeSeries.datum_offsets).find((d) => d.includes(datum.toLowerCase()))
      offsetName && setDatumOffset(timeSeries.datum_offsets[offsetName])
    }
  }, [params.datum])

  useEffect(() => {
    if (timeSeries) {
      const graphTitle = Object.keys(timeSeries.datum_offsets).includes(params.datum as string)
        ? getDatumDisplayName(params.datum as string)
        : getDefaultTitle()
      setTitle(graphTitle)
    }
  }, [timeSeries])

  return (
    <div>
      <h4 style={{ width: "100%", textAlign: "center" }}>{`${title} for Station: ${sensorId}`}</h4>
      <LargeTimeSeriesWaterLevelChart
        timeSeries={dataset.timeSeries}
        predictedTidesTimeSeries={predictedTidesDataset?.timeSeries}
        predictedTidesName={predictedTidesDataset?.name}
        name={timeSeries.data_type.long_name}
        softMin={-5}
        softMax={{ English: 20, Metric: 10 }}
        unitSystem={unitSystem}
        data_type={standardName}
        datumOffset={datumOffset}
        floodThresholds={floodThresholds}
        startTime={startTime}
        endTime={endTime}
      />
      <DatumSelector datumOffsets={timeSeries.datum_offsets} />
    </div>
  )
}
