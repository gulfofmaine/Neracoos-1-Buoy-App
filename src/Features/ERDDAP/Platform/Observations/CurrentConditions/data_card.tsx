/**
 * Generalized single time series data card
 */
import Link from "next/link"
import React from "react"
import { Card, CardBody, CardHeader, Col } from "reactstrap"

import { SmallTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { convertUnit } from "Shared/unitConversion"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { UseDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"
import { NoDataCard } from "./no_data_card"
import { LoadingDataCard } from "./loading_card"
import { ErrorDataCard } from "./error_card"

interface DataCardProps {
  /** Data Type standard names to display */
  data_types: string[]
  /** Platform */
  platform: PlatformFeature
}

/**
 * Filters data types for a platform and fetches appropriate one
 * to display based on preferential order and what is up to date
 * @param data_types Data Type standard names to display
 * @param platform Platform to display
 */
export const DataCard: React.FunctionComponent<DataCardProps> = ({ data_types, platform }) => {
  const unitSystem = useUnitSystem()

  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  let filteredTimeSeries: PlatformTimeSeries[] = []

  data_types.forEach((dataType) => {
    const matchStandard = platform.properties.readings.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    const matchTime = matchStandard.filter((reading) => (reading.time ? aDayAgo < new Date(reading.time) : false)) // that have data in the last day
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    matchDepth.forEach((reading) => filteredTimeSeries.push(reading))
  })

  // No current data or data types don't exist for platform
  if (filteredTimeSeries.length < 1) {
    let noFilteredTimeSeries: PlatformTimeSeries[] = []
    data_types.forEach((dataType) => {
      platform.properties.readings
        .filter((reading) => dataType === reading.data_type.standard_name && (reading.depth ? reading.depth < 2 : true))
        .forEach((reading) => noFilteredTimeSeries.push(reading))
    })

    // Platform does not contain any of the requested data types
    if (noFilteredTimeSeries.length < 1) {
      return null
    }

    return <NoDataCard platform={platform} timeSeries={noFilteredTimeSeries[0]} />
  }

  const timeSeries = filteredTimeSeries[0]

  return (
    <UseDataset
      timeSeries={timeSeries}
      loading={<LoadingDataCard platform={platform} timeSeries={timeSeries} />}
      error={<ErrorDataCard platform={platform} timeSeries={timeSeries} />}
    >
      {({ dataset }) => {
        const readings: ReadingTimeSeries[] = dataset.timeSeries.filter((reading) => aDayAgo < reading.time)

        if (readings.length > 1) {
          return (
            <DataCardDisplay readings={readings} unitSystem={unitSystem} timeSeries={timeSeries} platform={platform} />
          )
        }
        return <ErrorDataCard platform={platform} timeSeries={timeSeries} />
      }}
    </UseDataset>
  )
}

interface DataCardDisplayProps {
  readings: ReadingTimeSeries[]
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
  startTime?: Date
  endTime?: Date
}

/**
 * Format and display a data card
 */
export const DataCardDisplay: React.FunctionComponent<DataCardDisplayProps> = ({
  platform,
  readings,
  timeSeries,
  unitSystem,
  startTime,
  endTime,
}) => {
  const url = cardUrl(platform, timeSeries)
  const dataConverter = converter(timeSeries.data_type.standard_name)
  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  const latest = readings[readings.length - 1]

  const data = readings.map((r) => ({
    ...r,
    reading: round(dataConverter.convertToNumber(r.reading, unitSystem), 2),
  }))

  return (
    <Col {...cardProps}>
      <Link href={url}>
        <a>
          <Card>
            <CardHeader>
              {timeSeries.data_type.long_name} - {round(dataConverter.convertToNumber(latest.reading, unitSystem), 1)}{" "}
              {dataConverter.displayName(unitSystem)} {convertUnit(timeSeries.data_type.units, latest.reading)}
            </CardHeader>

            <CardBody style={{ padding: ".2rem" }}>
              <SmallTimeSeriesChart
                name={timeSeries.data_type.standard_name}
                timeSeries={data}
                unit={dataConverter.displayName(unitSystem)}
                softMin={bounds[0]}
                softMax={bounds[1]}
                data_type={timeSeries.data_type.standard_name}
                {...{ unitSystem, startTime, endTime }}
              />
            </CardBody>
          </Card>
        </a>
      </Link>
    </Col>
  )
}
