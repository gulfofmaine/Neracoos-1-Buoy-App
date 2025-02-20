/**
 * Wind specific current conditions card
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import * as Sentry from "@sentry/react"

import { round } from "Shared/math"
import { DataTimeSeries } from "Shared/timeSeries"
import { compassDirection } from "Shared/unitConversion/compassDirection"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { WindTimeSeriesChart } from "components/Charts/WindTimeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { cardProps, observationLink } from "./common_card"

interface DisplayWindCardProps {
  platform: PlatformFeature
  datasets: DataTimeSeries[]
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries[]
  startTime?: Date
  endTime?: Date
}

export const DisplayWindCard: React.FC<DisplayWindCardProps> = (props: DisplayWindCardProps) => (
  <Sentry.ErrorBoundary
    showDialog={false}
    fallback={() => (
      <OtherWindCard platform={props.platform}>
        <p>Error displaying wind data</p>
      </OtherWindCard>
    )}
  >
    <DisplayWindCardInner {...props} />
  </Sentry.ErrorBoundary>
)

/**
 * Display wind datasets on a current conditions card
 */
export const DisplayWindCardInner: React.FC<DisplayWindCardProps> = ({
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

  const dataConverter = converter((speedTimeSeries ?? gustTimeSeries)!.data_type.standard_name)

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
      <Link href={observationLink(platform, "wind")}>
        <Card>
          <Card.Header>
            Winds{speedTitle}
            {gustTitle}
            {directionTitle}
          </Card.Header>
          <Card.Body style={{ padding: ".2rem" }}>
            <WindTimeSeriesChart
              days={1}
              barbsPerDay={24}
              legend={false}
              height={150}
              {...{ speed, gust, direction, unitSystem, startTime, endTime }}
            />
            <FontAwesomeIcon icon={faExpand} pull="right" />
          </Card.Body>
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
    <Link href={observationLink(platform, "wind")}>
      <Card>
        <Card.Header>{children}</Card.Header>
      </Card>
    </Link>
  </Col>
)
