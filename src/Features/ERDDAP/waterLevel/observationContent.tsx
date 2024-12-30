import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries, filterSingleTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets } from "../hooks"
import { DatumOffsetOptions, PlatformFeature, PlatformTimeSeries, Datums } from "../types"
import { conditions } from "../utils/conditions"
import { filterWaterLevelTimeSeries } from "../Platform/Observations/CurrentConditions/waterLevel"
import { aDayAgoRounded, fullBeginningDateIso, getIsoForPicker, manuallySetFullEODIso } from "Shared/time"
import { usePathname } from "next/navigation"
import { useRouter } from "next-nprogress-bar"
import queryString from "query-string"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { DataTimeSeries } from "Shared/timeSeries"

import { useEndTime, useStartTime, useDatum } from "./hooks"

export const WaterLevelObservationContent = ({ platform }: { platform: PlatformFeature }) => {
  const unitSystem = useUnitSystem()
  const pathname = usePathname()
  const { startTime } = useStartTime()
  const { endTime } = useEndTime()
  const { datum } = useDatum()

  const router = useRouter()
  const windowWidth = window.innerWidth
  const waterLevel = filterWaterLevelTimeSeries(platform.properties.readings, conditions.waterLevel, startTime)

  let datumOffset: number | undefined
  if (waterLevel) {
    if (datum == Datums.NAVD88) {
      datumOffset = 0
    } else {
      datumOffset = waterLevel.datum_offsets[datum]
    }
  }

  const predictedTides = filterSingleTimeSeries(
    platform.properties.readings,
    [...conditions.waterLevel, ...conditions.waterLevelPredicted],
    startTime,
    "Prediction",
  )

  const forecastedTides = filterTimeSeries(platform.properties.readings, conditions.waterLevel, startTime, "Forecast")
  // useEffect(() => {
  //   if ((predictedTidesTimeseries || forecastedTidesTimeseries) && windowWidth < 576) {
  //     const newParams = buildSearchParamsQuery(
  //       getIsoForPicker(aDayAgoRounded()),
  //       getIsoForPicker(manuallySetFullEODIso(new Date(Date.now()))),
  //       datumOffset,
  //     )
  //     router.push(`${pathname}?${queryString.stringify(newParams as any)}`)
  //   }
  //   if (!predictedTidesTimeseries) {
  //     // const newParams = buildSearchParamsQuery(
  //     //   getIsoForPicker(startTime),
  //     //   new Date(getToday()).getTime() > endTime.getTime() ? getIsoForPicker(endTime) : getToday(),
  //     //   searchParams.get("datum") as DatumOffsetOptions,
  //     // )
  //     // router.push(`${pathname}?${queryString.stringify(newParams as any)}`)
  //   }
  // }, [platform])

  return (
    <div className="chart-display">
      {waterLevel ? (
        <>
          <UseDatasets
            timeSeries={
              predictedTides
                ? forecastedTides
                  ? [waterLevel, predictedTides, ...forecastedTides]
                  : [waterLevel, predictedTides]
                : [waterLevel]
            }
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
              const predictedTidesDataset = predictedTides ? datasets.find((d) => d.type === "Prediction") : null
              const forecastedTidesDatasets = forecastedTides ? datasets.filter((d) => d.type === "Forecast") : null
              const standardName = waterLevel.data_type.standard_name

              return (
                <div style={{ marginTop: "10px" }}>
                  <WaterLevelChartDisplay
                    {...{ dataset: waterLevelData, standardName, unitSystem }}
                    platform={platform}
                    timeSeries={waterLevel}
                    predictedTidesDataset={predictedTidesDataset as DataTimeSeries | null}
                    forecastedTidesDatasets={forecastedTidesDatasets}
                    startTime={startTime}
                    endTime={endTime}
                    datumOffset={datumOffset}
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
