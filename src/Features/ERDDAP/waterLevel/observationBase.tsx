import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { threeDaysAgoRounded } from "Shared/time"
import { useEffect, useState } from "react"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets } from "../hooks"
import { PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

export const WaterLevelObservationBase = ({ platform }) => {
  const unitSystem = useUnitSystem()
  const threeDaysAgo = threeDaysAgoRounded()
  const [waterLevel, setWaterLevel] = useState<PlatformTimeSeries | null>()

  useEffect(() => {
    const waterLevelTimeseries = filterTimeSeries(platform.properties.readings, conditions.waterLevel, threeDaysAgo)
    setWaterLevel(waterLevelTimeseries)
  }, [platform])

  return (
    <div style={{ width: "60vw" }}>
      {waterLevel && (
        <UseDatasets timeSeries={[waterLevel]} startTime={threeDaysAgo}>
          {({ datasets }) => {
            const times = datasets
              .map((ds) => ds.timeSeries)
              .flat()
              .map((r) => r.time.valueOf())
            times.sort()
            console.log(waterLevel.data_type.standard_name)

            const waterLevelData = datasets[0]
            const standardName = waterLevel.data_type.standard_name

            return (
              <div>
                <WaterLevelChartDisplay
                  {...{ dataset: waterLevelData, standardName, unitSystem }}
                  timeSeries={waterLevel}
                />
              </div>
            )
          }}
        </UseDatasets>
      )}
    </div>
  )
}
