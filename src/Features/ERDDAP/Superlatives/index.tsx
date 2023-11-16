"use client"
/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
import Link from "next/link"
import * as React from "react"
import { useEffect, useState } from "react"
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap"

import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { UnitSystem } from "Features/Units/types"
import { paths } from "Shared/constants"
import { round } from "Shared/math"
import { anHourAgoRounded, calcAnyHourAgoRounded } from "Shared/time"
import { urlPartReplacer } from "Shared/urlParams"

import { UsePlatforms } from "../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { conditions } from "../utils/conditions"

const waveHeight = new Set(conditions.waveHeight)
const windSpeed = new Set(conditions.windSpeed)

/**
 * Superlatives, or what platforms experiencing the most extreme conditions right now
 */
export const Superlatives: React.FunctionComponent = () => {
  const unitSystem = useUnitSystem()

  const lastHour = anHourAgoRounded()

  return (
    <UsePlatforms>
      {({ platforms }) => <ShowSuperlatives laterThan={lastHour} {...{ platforms, unitSystem }} />}
    </UsePlatforms>
  )
}

interface ShowSuperlativesProps {
  platforms: PlatformFeature[]
  unitSystem: UnitSystem
  laterThan: Date
}

interface HighestCondition {
  platform?: PlatformFeature
  timeSeries?: PlatformTimeSeries
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
export const ShowSuperlatives: React.FunctionComponent<ShowSuperlativesProps> = ({
  platforms,
  unitSystem,
  laterThan,
}) => {
  const backoffHours = 6
  const [windSuperlative, setWindSuperlative] = useState<HighestCondition>()
  const [waveSuperlative, setWaveSuperlative] = useState<HighestCondition>()

  useEffect(() => {
    for (let hours = 0; hours < backoffHours; hours++) {
      const backOffHour = calcAnyHourAgoRounded(hours)
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
    for (let hours = 0; hours < backoffHours; hours++) {
      const backOffHour = calcAnyHourAgoRounded(hours)
      const { platform: wavePlatform, timeSeries: waveTimeSeries } = findHighestCondition(
        platforms,
        backOffHour,
        waveHeight,
      )
      console.log("damn", wavePlatform, waveTimeSeries)
      if (wavePlatform || waveTimeSeries) {
        setWaveSuperlative({ platform: wavePlatform, timeSeries: waveTimeSeries })
        return
      }
    }
  }, [])

  // console.log(waveSuperlative, windSuperlative)

  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <CardHeader>
        <h5>Latest Conditions</h5>
      </CardHeader>

      <CardBody>
        <Row>
          {windSuperlative?.platform && windSuperlative?.timeSeries && (
            <Col>
              <HighestConditions
                title="Highest Winds"
                platform={windSuperlative.platform}
                timeSeries={windSuperlative.timeSeries}
                unitSystem={unitSystem}
              />
            </Col>
          )}

          {waveSuperlative?.platform && waveSuperlative?.timeSeries && (
            <Col>
              <HighestConditions
                title="Biggest Waves"
                platform={waveSuperlative.platform}
                timeSeries={waveSuperlative.timeSeries}
                unitSystem={unitSystem}
              />
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
  )
}
// return <h4>Error showing Superlatives</h4>

/**
 * Filter down and find the most extreme values from the selected set of standard names
 *
 * @param platforms Platforms to search through
 * @param laterThan Time window to make sure found timeSeries are before
 * @param compareSet Set of standard names to include in search
 */
function findHighestCondition(
  platforms: PlatformFeature[],
  laterThan: Date,
  compareSet: Set<string>,
): HighestCondition {
  let highestPlatform: PlatformFeature | undefined = undefined
  let highestTimeSeries: PlatformTimeSeries | undefined = undefined
  // let qualifiedReadings: PlatformTimeSeries[] = []
  // platforms.forEach((platform) => {
  //   const filteredReadings = platform.properties.readings.filter((reading) => {
  //     const readingTime = reading.time ? laterThan < new Date(reading.time) : null
  //     return compareSet.has(reading.data_type.standard_name) && reading.value && readingTime
  //   })
  //   qualifiedReadings = [...qualifiedReadings, ...filteredReadings]
  //   console.log("filtered readings", qualifiedReadings)
  // })
  // qualifiedReadings.sort((a, b) => (a.value && b.value ? a.value - b.value : 0))

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
  title: string
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
const HighestConditions: React.FunctionComponent<HighestConditionsProps> = ({
  platform,
  timeSeries,
  unitSystem,
  title,
}) => {
  const dataConverter = converter(timeSeries.data_type.standard_name)

  const url = urlPartReplacer(paths.platforms.platform, ":id", platform.id as string)

  return (
    <React.Fragment>
      <Link href={url}>
        <h6>{title}</h6>
      </Link>
      <div>
        {round(dataConverter.convertToNumber(timeSeries.value!, unitSystem), 1)} {dataConverter.displayName(unitSystem)}
      </div>
      <Link href={url}>
        <div>
          {platform.id} - {platform.properties.mooring_site_desc}
        </div>
      </Link>
    </React.Fragment>
  )
}
