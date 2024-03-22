import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets, useDataset } from "../hooks"
import { PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

export const WaterLevelObservationBase = ({ platform, timeframe, projectedTimeframe }) => {
  const unitSystem = useUnitSystem()
  const [waterLevel, setWaterLevel] = useState<PlatformTimeSeries | null>()
  const [predictedTides, setPredictedTides] = useState<PlatformTimeSeries | null>()
  console.log("future", projectedTimeframe)

  useEffect(() => {
    const waterLevelTimeseries = filterTimeSeries(platform.properties.readings, conditions.waterLevel, timeframe)
    setWaterLevel(waterLevelTimeseries)
    const predictedTidesTimeseries = filterTimeSeries(
      platform.properties.readings,
      conditions.waterLevelPredicted,
      timeframe,
    )
    setPredictedTides(predictedTidesTimeseries)
  }, [platform])

  return (
    <div style={{ width: "60vw" }}>
      {waterLevel ? (
        <>
          <UseDatasets
            timeSeries={predictedTides ? [waterLevel, predictedTides] : [waterLevel]}
            startTime={timeframe}
            endTime={projectedTimeframe}
          >
            {({ datasets }) => {
              console.log("testing", datasets)
              const times = datasets
                .map((ds) => ds.timeSeries)
                .flat()
                .map((r) => r.time.valueOf())
              times.sort()

              const startTime = new Date(times[0])
              const endTime = new Date(times[times.length - 1])

              const waterLevelData = datasets[0]
              const predictedTidesDataset = predictedTides ? datasets[1] : null
              const standardName = waterLevel.data_type.standard_name

              return (
                <div>
                  <WaterLevelChartDisplay
                    {...{ dataset: waterLevelData, standardName, unitSystem }}
                    timeSeries={waterLevel}
                    predictedTidesDataset={predictedTidesDataset}
                    startTime={startTime}
                    endTime={endTime}
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
