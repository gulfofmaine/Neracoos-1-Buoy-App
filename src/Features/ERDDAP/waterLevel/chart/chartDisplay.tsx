import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { DatumSelector } from "../DatumSelector"
import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"

interface ChartTimeSeriesDisplayProps {
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
}

export const WaterLevelChartDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unitSystem,
}: ChartTimeSeriesDisplayProps) => {
  const [floodThresholds, setFloodThresholds] = useState<any>()
  const [datumOffset, setDatumOffset] = useState<number>(0)
  const params = useParams()

  useEffect(() => {
    if (timeSeries.flood_levels.length) {
      const floodLevelsMap = timeSeries.flood_levels.reduce((acc, level, index) => {
        if (!acc[level.name]) {
          acc[level.name] =
            level.name === "Major"
              ? { minValue: level.min_value + datumOffset, maxValue: level.min_value + 1 + datumOffset }
              : {
                  minValue: level.min_value + datumOffset,
                  maxValue: timeSeries.flood_levels[index - 1].min_value + datumOffset,
                }
        }
        return acc
      }, {})
      setFloodThresholds(floodLevelsMap)
    }
  }, [timeSeries, datumOffset])

  useEffect(() => {
    if (params.datum) {
      const datum = decodeURIComponent(params.datum as string)
      const offsetName = Object.keys(timeSeries.datum_offsets).find((d) => d.includes(datum.toLowerCase()))
      offsetName && setDatumOffset(timeSeries.datum_offsets[offsetName])
    }
  }, [params.datum])

  return (
    <div>
      <LargeTimeSeriesWaterLevelChart
        timeSeries={dataset.timeSeries}
        name={timeSeries.data_type.long_name}
        softMin={-5}
        softMax={14}
        unitSystem={unitSystem}
        data_type={standardName}
        datumOffset={datumOffset}
        floodThresholds={floodThresholds}
      />
      <DatumSelector datumOffsets={timeSeries.datum_offsets} />
    </div>
  )
}
