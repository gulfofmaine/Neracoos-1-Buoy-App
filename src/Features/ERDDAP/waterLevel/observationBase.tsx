import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { threeDaysAgoRounded } from "Shared/time"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets } from "../hooks"
import { PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

export const WaterLevelObservationBase = ({ platform }) => {
  const unitSystem = useUnitSystem()
  const threeDaysAgo = threeDaysAgoRounded()
  const [waterLevel, setWaterLevel] = useState<PlatformTimeSeries | null>()

  useEffect(() => {
    console.log(platform)
    const waterLevelTimeseries = filterTimeSeries(platform.properties.readings, conditions.waterLevel, threeDaysAgo)
    setWaterLevel(waterLevelTimeseries)
  }, [platform])

  return (
    <div style={{ width: "60vw" }}>
      {waterLevel ? (
        <>
          <h3 style={{ width: "100%", textAlign: "center" }}>Sea Water Level for {platform.id}</h3>
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
        </>
      ) : (
        <Alert color="info">Tidal data for this sensor is unavailable</Alert>
      )}
    </div>
  )
}
