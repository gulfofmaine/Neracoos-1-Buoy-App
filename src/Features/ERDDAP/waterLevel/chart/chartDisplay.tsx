import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
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
  const [datumOffset, setDatumOffset] = useState<string>()

  useEffect(() => {
    if (timeSeries.flood_levels.length) {
      const floodLevelsMap = timeSeries.flood_levels.reduce((acc, level, index) => {
        if (!acc[level.name]) {
          acc[level.name] =
            level.name === "Major"
              ? { minValue: level.min_value, maxValue: level.min_value + 1 }
              : { minValue: level.min_value, maxValue: timeSeries.flood_levels[index - 1].min_value }
        }
        return acc
      }, {})
      setFloodThresholds(floodLevelsMap)
    }
    if (timeSeries.datum_offsets) {
      const currentOffset = timeSeries.constraints["datum="] as string
      setDatumOffset(Object.keys(timeSeries.datum_offsets).find((d) => d.includes(currentOffset.toLowerCase())))
    }
  }, [timeSeries])

  return (
    <div>
      <LargeTimeSeriesWaterLevelChart
        timeSeries={dataset.timeSeries}
        name={timeSeries.data_type.long_name}
        softMin={-5}
        softMax={14}
        unitSystem={unitSystem}
        data_type={standardName}
        floodThresholds={floodThresholds}
      />
      <DatumSelector datumOffsets={timeSeries.datum_offsets} currentDatumOffset={datumOffset} />
    </div>
  )
}
