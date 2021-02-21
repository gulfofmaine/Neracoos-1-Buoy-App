/**
 * Load and display forecasts
 */
import { Point } from "@turf/helpers"
import React from "react"
import { Alert, Row, Col } from "reactstrap"

import { MultipleLargeTimeSeriesChartCurrent } from "components/Charts"
import { round } from "Shared/math"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { aDayAgoRounded } from "Shared/time"
import { DataTimeSeries, ReadingTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { useDataset, useForecastMeta, useForecasts } from "../../../hooks"
import { ForecastSource, PlatformFeature, PlatformTimeSeries } from "../../../types"
import { useUnitSystem } from "Features/Units"

interface Props {
  platform: PlatformFeature
  forecast_type: string
  unitSystem: UnitSystem
}

interface UrlDataTimeSeries extends DataTimeSeries {
  url: string
}

/**
 * Match relevant forecast to platform datasets
 */
export const Forecast = ({ platform, forecast_type, ...props }: Props) => {
  const standardNames = forecastToStandardNames[forecast_type]
  const timeSeries: PlatformTimeSeries | undefined = platform.properties.readings.find(
    (r) => standardNames?.has(r.data_type.standard_name) ?? false
  )

  const { data: forecastsInfo } = useForecastMeta()
  const { data: dataset } = useDataset(timeSeries)

  const forecasts = (forecastsInfo as ForecastSource[])?.filter(
    (f) => f.forecast_type.toLowerCase().replace(/ /g, "_") === forecast_type
  )

  const point = platform.geometry as Point
  const [lon, lat] = point.coordinates

  const results = useForecasts(lat, lon, forecasts ?? [])

  const forecastResults = (forecasts || []).map((f, index) => ({
    meta: f,
    result: results[index],
  }))

  const chartData: UrlDataTimeSeries[] = []

  if (dataset && timeSeries) {
    const aDayAgo = aDayAgoRounded()

    chartData.push({
      ...dataset,
      timeSeries: dataset.timeSeries.filter((r) => aDayAgo < r.time),
      name: `${timeSeries.dataset}: ${timeSeries.data_type.long_name}`,
      url: tabledapHtmlUrl(timeSeries.server, timeSeries.dataset, [timeSeries.variable], timeSeries.constraints),
    })
  }

  forecastResults.forEach(({ result, meta }) => {
    if (result?.data) {
      chartData.push({
        timeSeries: result.data as ReadingTimeSeries[],
        name: meta.name,
        unit: meta.units,
        url: meta.source_url,
      })
    }
  })

  const unitSystem = useUnitSystem()

  if (forecasts === undefined || forecasts.length < 1) {
    return (
      <Row>
        <Col>
          <Alert color="warning">
            <h4>No forecast available for {forecast_type}</h4>
          </Alert>
        </Col>
      </Row>
    )
  }

  return (
    <Row>
      <Col>
        <h4>{forecasts[0].forecast_type} Forecast</h4>

        <ForecastChart type={forecast_type} unitSystem={unitSystem} data={chartData} />

        <h6>Data sources</h6>
        <ul>
          {chartData.map(({ name, url }) => (
            <li key={name}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

/**
 * Which forecasts match up with which standard names
 */
export const forecastToStandardNames: { [key: string]: Set<string> } = {
  air_temperature: new Set(["air_temperature"]),
  significant_wave_height: new Set([
    "sea_surface_wave_significant_height",
    "significant_height_of_wind_and_swell_waves",
    "significant_wave_height",
  ]),
  wave_direction: new Set(["sea_surface_wave_from_direction"]),
  wave_height: new Set([
    "sea_surface_wave_significant_height",
    "significant_height_of_wind_and_swell_waves",
    "significant_wave_height",
    "max_wave_height",
  ]),
  wave_period: new Set(["sea_surface_swell_wave_period", "period"]),
  wind_direction: new Set(["wind_from_direction"]),
  wind_speed: new Set(["wind_speed"]),
}

const direction_forecast_types = new Set(["wave_direction", "wind_direction"])

interface ForecastChartProps {
  data: DataTimeSeries[]
  // forecast type
  type: string
  // Unit system to display in
  unitSystem: UnitSystem
}

/** Forecast chart component */
export const ForecastChart: React.FunctionComponent<ForecastChartProps> = ({ data, type, unitSystem }) => {
  const standardNames = forecastToStandardNames[type]

  if (!direction_forecast_types.has(type)) {
    const dataConverter = converter(Array.from(standardNames)[0])

    data = data.map((d) => ({
      ...d,
      unit: dataConverter.displayName(unitSystem),
      timeSeries: d.timeSeries.map((r) => ({
        ...r,
        reading: round(dataConverter.convertToNumber(r.reading, unitSystem), 2),
      })),
    }))
  }

  const units = Array.from(new Set(data.map((ts) => ts.unit)))

  if (units.length > 0) {
    return (
      <MultipleLargeTimeSeriesChartCurrent unit={units[0]} data={data} scatter={direction_forecast_types.has(type)} />
    )
  }
  return null
}
