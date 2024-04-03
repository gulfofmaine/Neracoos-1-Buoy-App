import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets, useDataset } from "../hooks"
import { PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"
import { filterWaterLevelTimeSeries } from "../Platform/Observations/CurrentConditions/waterLevel"
import {
  aDayAgoRounded,
  daysInFuture,
  getIsoForPicker,
  getToday,
  manuallySetFullEODIso,
  threeDaysAgoRounded,
} from "Shared/time"
import { useParams, useRouter } from "next/navigation"

export const WaterLevelObservationBase = ({ platform, startTime, endTime }) => {
  const unitSystem = useUnitSystem()
  const params = useParams()
  const router = useRouter()
  const windowWidth = window.innerWidth
  const [waterLevel, setWaterLevel] = useState<PlatformTimeSeries | null>()
  const [predictedTides, setPredictedTides] = useState<PlatformTimeSeries | null>()

  useEffect(() => {
    const waterLevelTimeseries = filterWaterLevelTimeSeries(
      platform.properties.readings,
      conditions.waterLevel,
      startTime,
    )
    setWaterLevel(waterLevelTimeseries)
    const predictedTidesTimeseries = filterTimeSeries(
      platform.properties.readings,
      conditions.waterLevelPredicted,
      startTime,
    )
    if (predictedTidesTimeseries && windowWidth < 576) {
      const startTime = aDayAgoRounded()
      const endTime = daysInFuture(1)
      router.push(
        `/water-level/sensor/${params.sensorId}/${getIsoForPicker(startTime)}/${getIsoForPicker(
          manuallySetFullEODIso(endTime),
        )}/${params.datum}`,
      )
    }
    if (params.endTime > getToday() && !predictedTidesTimeseries) {
      router.push(`/water-level/sensor/${params.sensorId}/${getIsoForPicker(startTime)}/${getToday()}/${params.datum}`)
    }
    setPredictedTides(predictedTidesTimeseries)
  }, [platform])

  return (
    <div className="chart-display">
      {waterLevel ? (
        <>
          <UseDatasets
            timeSeries={predictedTides ? [waterLevel, predictedTides] : [waterLevel]}
            startTime={startTime}
            endTime={endTime}
          >
            {({ datasets }) => {
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
