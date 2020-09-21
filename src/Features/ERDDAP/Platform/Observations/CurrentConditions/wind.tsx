/**
 * Wind specific current conditions card
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Col } from "reactstrap"

import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { compassDirection } from "Shared/unitConversion"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { WindTimeSeriesChart } from "components/Charts"

import { UseDatasets } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { cardProps, observationLink } from "./common_card"

interface WindCardProps {
  platform: PlatformFeature
}

/**
 * If there are wind time series for a platform load and display recent data.
 *
 * @param platform Platform GeoJSON feature to display wind data from
 */
export const WindCard: React.FunctionComponent<WindCardProps> = ({ platform }) => {
  const unit_system = useUnitSystem()

  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  const { windTimeSeries, timeSeries } = pickWindTimeSeries(platform, aDayAgo)

  // No current data or wind data don't exist for the platform
  if (windTimeSeries.length < 1) {
    const noWindTimeSeries = platform.properties.readings.filter((timeSeries) =>
      timeSeries.data_type.standard_name.includes("wind")
    )

    if (noWindTimeSeries.length < 1) {
      return null
    }

    return <OtherWindCard platform={platform}>No recent wind data available.</OtherWindCard>
  }

  if (timeSeries.length < 0) {
    return <OtherWindCard platform={platform}>No wind data</OtherWindCard>
  }

  return (
    <UseDatasets
      timeSeries={timeSeries}
      loading={<OtherWindCard platform={platform}>Loading wind data</OtherWindCard>}
      error={<OtherWindCard platform={platform}>Error loading wind data.</OtherWindCard>}
    >
      {({ datasets }) => {
        const filteredDatasets = datasets
          .map((ds) => ({
            ...ds,
            timeSeries: ds.timeSeries.filter((r) => aDayAgo < r.time),
          }))
          .filter((ds) => ds.timeSeries.length > 0)

        if (filteredDatasets.length > 0) {
          return <DisplayWindCard {...{ platform, timeSeries, unit_system }} datasets={filteredDatasets} />
        }
        return <OtherWindCard platform={platform}>Error loading wind data.</OtherWindCard>
      }}
    </UseDatasets>
  )
}

interface DisplayWindCardProps extends WindCardProps {
  datasets: DataTimeSeries[]
  unit_system: UnitSystem
  timeSeries: PlatformTimeSeries[]
}

/**
 * Display wind datasets on a current conditions card
 */
export const DisplayWindCard: React.FunctionComponent<DisplayWindCardProps> = ({ platform, datasets, unit_system }) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)
  const { speed: speedTimeSeries, gust: gustTimeSeries } = pickWindTimeSeries(platform)

  if ((!speed && !gust) || !(speedTimeSeries || gustTimeSeries)) {
    return null
  }

  const data_converter = converter(speedTimeSeries!.data_type.standard_name)

  let speedTitle: string = ""
  if (speed) {
    speedTitle =
      " - " +
      round(data_converter.convertToNumber(speed.timeSeries[speed.timeSeries.length - 1].reading, unit_system), 1) +
      " " +
      data_converter.displayName(unit_system)
  }

  let gustTitle: string = ""
  if (gust) {
    gustTitle =
      " gusting to " +
      round(data_converter.convertToNumber(gust.timeSeries[gust.timeSeries.length - 1].reading, unit_system), 1) +
      " " +
      data_converter.displayName(unit_system)
  }

  let directionTitle: string = ""
  if (direction) {
    const reading = direction.timeSeries[direction.timeSeries.length - 1].reading
    const compass = compassDirection(reading)
    directionTitle = " from " + compass[1]
  }

  return (
    <Col {...cardProps}>
      <Link to={observationLink(platform, "wind")}>
        <Card>
          <CardHeader>
            Winds{speedTitle}
            {gustTitle}
            {directionTitle}
          </CardHeader>
          <CardBody>
            <WindTimeSeriesChart
              days={1}
              barbsPerDay={10}
              data={datasets}
              height={150}
              {...{ speed, gust, direction, unit_system }}
            />
          </CardBody>
        </Card>
      </Link>
    </Col>
  )
}

interface OtherWindCardProps {
  platform: PlatformFeature
  children: React.ReactNode
}

/**
 * Card to display various information when the wind data is not avaliable or loaded
 */
const OtherWindCard: React.FunctionComponent<OtherWindCardProps> = ({ platform, children }) => (
  <Col {...cardProps}>
    <Link to={observationLink(platform, "wind")}>
      <Card>
        <CardHeader>{children}</CardHeader>
      </Card>
    </Link>
  </Col>
)
