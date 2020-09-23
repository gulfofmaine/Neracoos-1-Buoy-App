/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { urlPartReplacer } from "Shared/urlParams"

import { UsePlatforms } from "../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { conditions } from "../Platform/Observations/CurrentConditions/conditions"

const waveHeight = new Set(conditions.waveHeight)
const windSpeed = new Set(conditions.windSpeed)

/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
export const Superlatives: React.FunctionComponent = () => {
  const unit_system = useUnitSystem()

  const lastHour = new Date()
  lastHour.setUTCHours(lastHour.getUTCHours() - 1)

  return (
    <UsePlatforms>
      {({ platforms }) => <ShowSuperlatives laterThan={lastHour} {...{ platforms, unit_system }} />}
    </UsePlatforms>
  )
}

interface ShowSuperlativesProps {
  platforms: PlatformFeature[]
  unit_system: UnitSystem
  laterThan: Date
}

/**
 * Show the highest winds and biggest waves for selected platforms
 *
 * @param platforms A selection of PlatformFeatures
 * @param unit_system unit system to display with
 * @param laterThan a date to make sure all the readings are more recent then
 */
export const ShowSuperlatives: React.FunctionComponent<ShowSuperlativesProps> = ({
  platforms,
  unit_system,
  laterThan,
}) => (
  <Card style={{ marginTop: "1rem" }}>
    <CardHeader>
      <h5>Latest Conditions</h5>
    </CardHeader>

    <CardBody>
      <Row>
        <Col>
          <HighestConditions title="Highest Winds" compareSet={windSpeed} {...{ platforms, unit_system, laterThan }} />
        </Col>

        <Col>
          <HighestConditions title="Biggest Waves" compareSet={waveHeight} {...{ platforms, unit_system, laterThan }} />
        </Col>
      </Row>
    </CardBody>
  </Card>
)

interface HighestConditionsProps extends ShowSuperlativesProps {
  title: string
  compareSet: Set<string>
}

/**
 * Find the platform experiencing the most extreme condition
 *
 * @param platforms Selection of platforms to search through
 * @param unit_system Unit system to display values in
 * @param laterThan Earliest that a reading can be
 * @param title Title to display
 * @param compareSet Set of CF standard name strings to find standards for
 */
const HighestConditions: React.FunctionComponent<HighestConditionsProps> = ({
  platforms,
  unit_system,
  laterThan,
  title,
  compareSet,
}) => {
  let highestPlatform: PlatformFeature | undefined = undefined
  let highestReading: PlatformTimeSeries | undefined = undefined

  platforms.forEach((platform) => {
    platform.properties.readings.forEach((reading) => {
      if (compareSet.has(reading.data_type.standard_name) && reading.value) {
        if (reading.time ? laterThan < new Date(reading.time) : false) {
          if (highestReading ? (highestReading.value ? highestReading.value < reading.value : true) : true) {
            highestReading = reading
            highestPlatform = platform
          }
        }
      }
    })
  })

  if (highestPlatform && highestReading) {
    const dataConverter = converter(highestReading!.data_type.standard_name)

    const url = urlPartReplacer(paths.platforms.platform, ":id", highestPlatform!.id! as string)

    return (
      <React.Fragment>
        <Link to={url}>
          <h6>{title}</h6>
        </Link>
        <div>
          {round(dataConverter.convertToNumber(highestReading!.value!, unit_system), 1)}{" "}
          {dataConverter.displayName(unit_system)}
        </div>
        <Link to={url}>
          <div>
            {highestPlatform!.id} - {highestPlatform!.properties.mooring_site_desc}
          </div>
        </Link>
      </React.Fragment>
    )
  }

  return null
}
