import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets } from "../hooks"
import { DatumOffsetOptions, PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"
import { filterWaterLevelTimeSeries } from "../Platform/Observations/CurrentConditions/waterLevel"
import {
  aDayAgoRounded,
  daysAgoRounded,
  daysInFuture,
  fullBeginningDateIso,
  getIsoForPicker,
  getToday,
  manuallySetFullEODIso,
} from "Shared/time"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next-nprogress-bar"
import queryString from "query-string"
import { buildSearchParamsQuery } from "Shared/urlParams"

export const WaterLevelObservationBase = ({ platform }) => {
  const unitSystem = useUnitSystem()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startTime = new Date((searchParams.get("start") as string) || getIsoForPicker(daysAgoRounded(2)))
  const endTime = new Date((searchParams.get("end") as string) || getIsoForPicker(daysInFuture(3)))

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
      const newParams = buildSearchParamsQuery(
        getIsoForPicker(aDayAgoRounded()),
        getIsoForPicker(manuallySetFullEODIso(new Date(Date.now()))),
        searchParams.get("datum") as DatumOffsetOptions,
      )
      router.push(`${pathname}?${queryString.stringify(newParams as any)}`)
    }
    if (!predictedTidesTimeseries) {
      // const newParams = buildSearchParamsQuery(
      //   getIsoForPicker(startTime),
      //   new Date(getToday()).getTime() > endTime.getTime() ? getIsoForPicker(endTime) : getToday(),
      //   searchParams.get("datum") as DatumOffsetOptions,
      // )
      // router.push(`${pathname}?${queryString.stringify(newParams as any)}`)
    }
    setPredictedTides(predictedTidesTimeseries)
  }, [platform])

  return (
    <div className="chart-display">
      {waterLevel ? (
        <>
          <UseDatasets
            timeSeries={predictedTides ? [waterLevel, predictedTides] : [waterLevel]}
            startTime={fullBeginningDateIso(startTime)}
            endTime={manuallySetFullEODIso(endTime)}
            platformId={platform.id}
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
                <div style={{ marginTop: "10px" }}>
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
