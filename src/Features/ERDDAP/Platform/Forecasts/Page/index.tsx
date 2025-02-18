"use client"
/**
 * Load and display forecasts
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import type { Point } from "geojson"
import React from "react"
import { Tooltip } from "reactstrap"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { LoadingAlert, WarningAlert } from "components/Alerts"
import { MultipleLargeTimeSeriesChartCurrent } from "components/Charts/MultipleLargeTimeSeriesCurrent"
import { colorCycle } from "Shared/colors"
import { round } from "Shared/math"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { aDayAgoRounded, weeksInFuture } from "Shared/time"
import { StyledTimeSeries } from "Shared/timeSeries"
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

  const aDayAgo = aDayAgoRounded()
  const twoWeeksFromNow = weeksInFuture(2)

  const forecastResults = (forecasts || []).flatMap((f, index) => {
    const result = results[index]

    if (result?.data) {
      const filteredData = result.data.filter((r) => aDayAgoRounded() < r.time && r.time < twoWeeksFromNow)

      if (filteredData.length <= 0) {
        return []
      }

      return [
        {
          meta: f,
          data: filteredData,
        },
      ]
    }

    return []
  })

  const chartData: UrlStyledTimeSeries[] = []

  if (dataset && timeSeries) {
    chartData.push({
      ...dataset,
      timeSeries: dataset.timeSeries.filter((r) => aDayAgo < r.time),
      name: `${timeSeries.dataset}: ${timeSeries.data_type.long_name} - observations`,
      url: tabledapHtmlUrl(timeSeries.server, timeSeries.dataset, [timeSeries.variable], timeSeries.constraints),
      color: colorCycle[0],
      dashStyle: "Dash",
    })
  }

  forecastResults?.forEach(({ data, meta }, index) => {
    chartData.push({
      timeSeries: data,
      name: meta.name + " - forecast",
      unit: meta.units,
      url: meta.source_url,
      dashStyle: "Solid",
      color: colorCycle[index + 1],
      displayName: meta.name,
      type: "Forecast",
    })
  })

  const unitSystem = useUnitSystem()
  const isPending = results.some((r) => r.isLoading)
  if (forecasts === undefined || forecasts?.length < 1 || (isPending === false && forecastResults?.length < 1)) {
    return (
      <Row>
        <Col>
          <WarningAlert>
            <h4>No current forecast available for {forecast_type}</h4>
          </WarningAlert>
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
            {forecastResults?.length > 0 ? (
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
            ) : null}
          </h4>
          {isPending ? <LoadingAlert>Loading forecast data...</LoadingAlert> : null}
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
