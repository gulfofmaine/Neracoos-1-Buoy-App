/**
 * Wind specific current conditions card
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons"
import React from "react"
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
export const WindCard: React.FunctionComponent<WindCardProps> = ({ platform }: WindCardProps) => {
  const unitSystem = useUnitSystem()

  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  const { windTimeSeries, timeSeries } = pickWindTimeSeries(platform, aDayAgo)

  // No current data or wind data don't exist for the platform
  if (windTimeSeries.length < 1) {
    return null
  }

  if (timeSeries.length < 0) {
    return <OtherWindCard platform={platform}>No recent wind data available.</OtherWindCard>
  }

  return (
    <UseDatasets timeSeries={timeSeries}>
      {({ datasets }) => {
        const filteredDatasets = datasets
          .map((ds) => ({
            ...ds,
            timeSeries: ds.timeSeries.filter((r) => aDayAgo < r.time),
          }))
          .filter((ds) => ds.timeSeries.length > 0)

        if (filteredDatasets.length > 0) {
          return <DisplayWindCard {...{ platform, timeSeries, unitSystem }} datasets={filteredDatasets} />
        }
        return <OtherWindCard platform={platform}>Error loading wind data.</OtherWindCard>
      }}
    </UseDatasets>
  )
}

interface DisplayWindCardProps extends WindCardProps {
  datasets: DataTimeSeries[]
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries[]
  startTime?: Date
  endTime?: Date
}

/**
 * Display wind datasets on a current conditions card
 */
export const DisplayWindCard: React.FunctionComponent<DisplayWindCardProps> = ({
  platform,
  datasets,
  unitSystem,
  startTime,
  endTime,
}: DisplayWindCardProps) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)
  const { speed: speedTimeSeries, gust: gustTimeSeries } = pickWindTimeSeries(platform)

  if ((!speed && !gust) || !(speedTimeSeries || gustTimeSeries)) {
    return null
  }

  const dataConverter = converter(speedTimeSeries!.data_type.standard_name)

  let speedTitle: string = ""
  if (speed) {
    speedTitle =
      " - " +
      round(dataConverter.convertToNumber(speed.timeSeries[speed.timeSeries.length - 1].reading, unitSystem), 1) +
      " " +
      dataConverter.displayName(unitSystem)
  }

  let gustTitle: string = ""
  if (gust) {
    gustTitle =
      " gusting to " +
      round(dataConverter.convertToNumber(gust.timeSeries[gust.timeSeries.length - 1].reading, unitSystem), 1) +
      " " +
      dataConverter.displayName(unitSystem)
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
          <CardBody style={{ padding: ".2rem" }}>
            <WindTimeSeriesChart
              days={1}
              barbsPerDay={24}
              legend={false}
              height={150}
              {...{ speed, gust, direction, unitSystem, startTime, endTime }}
            />
            <FontAwesomeIcon icon={faExpandAlt} pull="right" />
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
