import { PlatformTimeSeries } from "Features/ERDDAP/types"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"
import { LargeTimeSeriesWaterLevelChart } from "./largeTimeSeriesChart"

interface ChartTimeSeriesDisplayProps {
  forecasts: any
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
}

export const WaterLevelChartDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  forecasts,
  timeSeries,
  dataset,
  standardName,
  unitSystem,
}: ChartTimeSeriesDisplayProps) => {
  return (
    <LargeTimeSeriesWaterLevelChart
      timeSeries={dataset.timeSeries}
      forecast={forecasts}
      name={timeSeries.data_type.long_name}
      softMin={-5}
      softMax={14}
      unitSystem={unitSystem}
      data_type={standardName}
    />
  )
}
