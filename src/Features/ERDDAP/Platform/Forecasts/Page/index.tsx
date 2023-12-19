"use client"
/**
 * Load and display forecasts
 */
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Point } from "@turf/helpers"
import React from "react"
import { Alert, Col, Row, Tooltip } from "reactstrap"

import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { colorCycle } from "Shared/colors"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { round } from "Shared/math"
import { aDayAgoRounded, threeDaysAgoRounded } from "Shared/time"
import { ReadingTimeSeries, StyledTimeSeries } from "Shared/timeSeries"
import { MultipleLargeTimeSeriesChartCurrent } from "components/Charts/MultipleLargeTimeSeriesCurrent"

import { useUnitSystem } from "Features/Units"
import { useDataset, useForecastMeta, useForecasts } from "../../../hooks"
import { ForecastSource, PlatformFeature, PlatformTimeSeries } from "../../../types"

interface Props {
  platform: PlatformFeature
  forecast_type: string
  unitSystem: UnitSystem
}

interface UrlStyledTimeSeries extends StyledTimeSeries {
  url: string
}

const ForecastInfo = ({ children }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const toggle = () => setTooltipOpen((open) => !open)

  const target = "Forecast-Tooltip"
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "1rem", verticalAlign: "middle" }} id={target} />
      <Tooltip isOpen={tooltipOpen} toggle={toggle} target={target} autohide={false} style={{ textAlign: "left" }}>
        {children}
      </Tooltip>
    </React.Fragment>
  )
}

/**
 * Match relevant forecast to platform datasets
 */
export const Forecast = ({ platform, forecast_type, ...props }: Props) => {
  const standardNames = forecastToStandardNames[forecast_type]
  const timeSeries: PlatformTimeSeries | undefined = platform.properties.readings.find(
    (r) => standardNames?.has(r.data_type.standard_name) ?? false,
  )

  const { data: forecastsInfo } = useForecastMeta()
  const { data: dataset } = useDataset(timeSeries)

  const forecasts = (forecastsInfo as ForecastSource[])?.filter(
    (f) => f.forecast_type.toLowerCase().replace(/ /g, "_") === forecast_type,
  )

  const point = platform.geometry as Point
  const [lon, lat] = point.coordinates

  const results = useForecasts(lat, lon, forecasts ?? [])

  const forecastResults = (forecasts || []).map((f, index) => ({
    meta: f,
    result: results[index],
  }))

  const chartData: UrlStyledTimeSeries[] = []

  if (dataset && timeSeries) {
    const aDayAgo = aDayAgoRounded()
    chartData.push({
      ...dataset,
      timeSeries: dataset.timeSeries.filter((r) => aDayAgo < r.time),
      name: `${timeSeries.dataset}: ${timeSeries.data_type.long_name} - observations`,
      url: tabledapHtmlUrl(timeSeries.server, timeSeries.dataset, [timeSeries.variable], timeSeries.constraints),
      color: colorCycle[0],
      dashStyle: "Dash",
    })
  }

  forecastResults
    .filter((r) => {
      if (r.result.data) {
        return r.result.data[0].time > threeDaysAgoRounded()
      }
    })
    .forEach(({ result, meta }, index) => {
      if (result?.data) {
        chartData.push({
          timeSeries: result.data as ReadingTimeSeries[],
          name: meta.name + " - forecast",
          unit: meta.units,
          url: meta.source_url,
          dashStyle: "Solid",
          color: colorCycle[index + 1],
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
        <div style={{ textAlign: "center" }}>
          <h4>
            {forecasts[0].forecast_type} Forecast{" "}
            <ForecastInfo>
              Data access:
              <ul style={{ paddingLeft: "1rem" }}>
                {chartData.map((ts, id) => (
                  <li key={id}>
                    <a href={ts.url}>{ts.name}</a>
                  </li>
                ))}
              </ul>
            </ForecastInfo>
          </h4>
        </div>

        <ForecastChart type={forecast_type} unitSystem={unitSystem} data={chartData} />
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
  data: StyledTimeSeries[]
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
