import { WaterLevelChartDisplay } from "Features/ERDDAP/waterLevel/chart/chartDisplay"
import { useUnitSystem } from "Features/Units"
import { useEffect, useState } from "react"
import { Alert } from "reactstrap"
import { filterTimeSeries } from "../Platform/Observations/CurrentConditions"
import { UseDatasets } from "../hooks"
import { PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

export const WaterLevelObservationBase = ({ platform, timeframe }) => {
  const unitSystem = useUnitSystem()
  const [waterLevel, setWaterLevel] = useState<PlatformTimeSeries | null>()

  useEffect(() => {
    const waterLevelTimeseries = filterTimeSeries(platform.properties.readings, conditions.waterLevel, timeframe)
    setWaterLevel(waterLevelTimeseries)
  }, [platform])

  // const { data: forecastInfo } = useForecastMeta()
  // const forecasts = (forecastInfo as ForecastSource[])?.filter((f) => {
  //   return f.forecast_type.toLowerCase().replace(/ /g, "_") === "sea_water_level"
  // })

  // const point = platform.geometry as Point
  // const [lon, lat] = point.coordinates

  // const forecast = useForecasts(lat, lon, forecasts ?? [])
  // const forecastResults = (forecasts || []).map((f, index) => ({
  //   meta: f,
  //   result: forecast[index],
  // }))

  return (
    <div style={{ width: "60vw" }}>
      {waterLevel ? (
        <>
          <UseDatasets timeSeries={[waterLevel]} startTime={timeframe}>
            {({ datasets }) => {
              const times = datasets
                .map((ds) => ds.timeSeries)
                .flat()
                .map((r) => r.time.valueOf())
              times.sort()

              const waterLevelData = datasets[0]
              const standardName = waterLevel.data_type.standard_name
              console.log(waterLevel)

              return (
                <div>
                  <WaterLevelChartDisplay
                    {...{ dataset: waterLevelData, standardName, unitSystem }}
                    timeSeries={waterLevel}
                    // forecasts={forecastResults}
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
