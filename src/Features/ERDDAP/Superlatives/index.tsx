"use client"
/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
import Link from "next/link"
import * as React from "react"
import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Tooltip, OverlayTrigger } from "react-bootstrap"

import { WarningAlert } from "components/Alerts"
import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { anHourAgoRounded, hoursBefore } from "Shared/time"
import { urlPartReplacer } from "Shared/urlParams"
import { InfoCircleIcon } from "Shared/icons/iconsMap"

import { usePlatforms } from "../hooks/buoyBarn"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"
import { platformName } from "../utils/platformName"

const waveHeight = new Set(conditions.waveHeight)
const windSpeed = new Set(conditions.windSpeed)

/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
export const Superlatives: React.FunctionComponent = () => {
  const unitSystem = useUnitSystem()
  const { data } = usePlatforms()

  const startTime = anHourAgoRounded()

  return (
    <>
      {data ? (
        <ShowSuperlatives platforms={data?.features} unitSystem={unitSystem} searchStartTime={startTime} />
      ) : (
        <WarningAlert>Trouble loading platform data</WarningAlert>
      )}
    </>
  )
}

/**
 * Show the highest winds and biggest waves for selected platforms
 *
 * Only shows if both wind and wave data is available
 *
 * @param platforms A selection of PlatformFeatures
 * @param unitSystem unit system to display with
 * @param laterThan a date to make sure all the readings are more recent then
 */

interface ShowSuperlativesProps {
  platforms: PlatformFeature[]
  unitSystem: UnitSystem
  searchStartTime: Date
}

interface HighestCondition {
  platform?: PlatformFeature
  timeSeries?: PlatformTimeSeries
}

export const ShowSuperlatives: React.FunctionComponent<ShowSuperlativesProps> = ({
  platforms,
  unitSystem,
  searchStartTime,
}) => {
  const [windSuperlative, setWindSuperlative] = useState<HighestCondition>()
  const [waveSuperlative, setWaveSuperlative] = useState<HighestCondition>()
  const backOffHours = 6

  useEffect(() => {
    for (let hours = 0; hours < backOffHours; hours++) {
      const backOffHour = hoursBefore(searchStartTime, hours)
      const { platform: windPlatform, timeSeries: windTimeSeries } = findHighestCondition(
        platforms,
        backOffHour,
        windSpeed,
      )
      if (windPlatform || windTimeSeries) {
        setWindSuperlative({ platform: windPlatform, timeSeries: windTimeSeries })
        return
      }
    }
  }, [platforms, searchStartTime])

  useEffect(() => {
    for (let hours = 0; hours < backOffHours; hours++) {
      const backOffHour = hoursBefore(searchStartTime, hours)
      const { platform: wavePlatform, timeSeries: waveTimeSeries } = findHighestCondition(
        platforms,
        backOffHour,
        waveHeight,
      )
      if (wavePlatform || waveTimeSeries) {
        setWaveSuperlative({ platform: wavePlatform, timeSeries: waveTimeSeries })
        return
      }
    }
  }, [platforms, searchStartTime])

  const renderToolTip = (props) => {
    if (windSuperlative?.timeSeries?.time && waveSuperlative?.timeSeries?.time) {
      return (
        <Tooltip {...props} id="superlatives-tooltip" className="superlatives-tooltip">
          <div>{`Wind observation from: ${new Date(windSuperlative.timeSeries.time).toLocaleString()}`}</div>
          <div>{`Wave observation from: ${new Date(waveSuperlative.timeSeries.time).toLocaleString()}`}</div>
        </Tooltip>
      )
    } else {
      return (
        <Tooltip {...props} id="superlatives-tooltip">
          Data not available.
        </Tooltip>
      )
    }
  }
  return (
    <Card className="mt-5">
      <Card.Header className="d-flex flex-row gap-2 align-items-center bg-black bg-opacity-5">
        <h3 className="d-flex m-0">Top Wind & Waves - All Regions</h3>
        <OverlayTrigger placement="right" delay={{ show: 250, hide: 250 }} overlay={renderToolTip}>
          <InfoCircleIcon className="fa-md" />
        </OverlayTrigger>
      </Card.Header>

      <Card.Body>
        <Row>
          <Col>
            <p className="m-0">
              <strong>Highest Winds</strong>
            </p>
            {windSuperlative?.platform && windSuperlative?.timeSeries ? (
              <HighestConditions
                platform={windSuperlative.platform}
                timeSeries={windSuperlative.timeSeries}
                unitSystem={unitSystem}
              />
            ) : (
              <div> -- -- </div>
            )}
          </Col>

          <Col>
            <p className="m-0">
              <strong>Biggest Waves</strong>
            </p>
            {waveSuperlative?.platform && waveSuperlative?.timeSeries ? (
              <HighestConditions
                platform={waveSuperlative.platform}
                timeSeries={waveSuperlative.timeSeries}
                unitSystem={unitSystem}
              />
            ) : (
              <div> -- -- </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

/**
 * Filter down and find the most extreme values from the selected set of standard names
 *
 * @param platforms Platforms to search through
 * @param laterThan Time window to make sure found timeSeries are before
 * @param compareSet Set of standard names to include in search
 */
function findHighestCondition(
  platforms: PlatformFeature[],
  laterThan: Date | number,
  compareSet: Set<string>,
): HighestCondition {
  let highestPlatform: PlatformFeature | undefined = undefined
  let highestTimeSeries: PlatformTimeSeries | undefined = undefined

  platforms.forEach((platform) => {
    platform.properties.readings.forEach((reading) => {
      //Check to make validate the set has certain properties
      if (compareSet.has(reading.data_type.standard_name) && reading.value) {
        //Check to validate if the reading is within the appropriate timeframe
        if (reading.time ? laterThan < new Date(reading.time) : false) {
          //Does a superlative exist already? If so, check to see if the newest reading outranks it. if it doesn't, return the current superlative.
          if (highestTimeSeries ? (highestTimeSeries.value ? highestTimeSeries.value < reading.value : true) : true) {
            highestTimeSeries = reading
            highestPlatform = platform
          }
        }
      }
    })
  })

  return {
    platform: highestPlatform,
    timeSeries: highestTimeSeries,
  }
}

interface HighestConditionsProps {
  platform: PlatformFeature
  timeSeries: PlatformTimeSeries
  unitSystem: UnitSystem
}

/**
 * Display a summary of a platform's condition
 *
 * @param platform to display
 * @param timeSeries Time series of interest
 * @param unitSystem Unit system to display values in
 * @param title Title to display
 */
const HighestConditions: React.FunctionComponent<HighestConditionsProps> = ({ platform, timeSeries, unitSystem }) => {
  const dataConverter = converter(timeSeries.data_type.standard_name)

  const url = urlPartReplacer(paths.platforms.platform, ":id", platform.id as string)

  return (
    <React.Fragment>
      <p className="m-0">
        {round(dataConverter.convertToNumber(timeSeries.value!, unitSystem), 1)} {dataConverter.displayName(unitSystem)}
      </p>
      <Link href={url}>{platformName(platform)}</Link>
    </React.Fragment>
  )
}
