/**
 * Generalized single time series data card
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Col } from "reactstrap"

import { SmallTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { round } from "Shared/math"
import { DataTimeSeries, ReadingTimeSeries } from "Shared/timeSeries"
import { convertUnit } from "Shared/unitConversion"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"

import { useDataset } from "../../../hooks"
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
  const aDayAgo = new Date()
  aDayAgo.setDate(aDayAgo.getDate() - 1)

  let filteredTimeSeries: PlatformTimeSeries[] = []

  data_types.forEach((dataType) => {
    platform.properties.readings
      .filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
      .filter((reading) => (reading.time ? aDayAgo < new Date(reading.time) : false) && reading.depth < 2) // that have data in the last day, and that are near-surface
      .forEach((reading) => filteredTimeSeries.push(reading))
  })

  // No current data or data types don't exist for platform
  if (filteredTimeSeries.length < 1) {
    let noFilteredTimeSeries: PlatformTimeSeries[] = []
    data_types.forEach((dataType) => {
      platform.properties.readings
        .filter((reading) => dataType === reading.data_type.standard_name && reading.depth < 2)
        .forEach((reading) => noFilteredTimeSeries.push(reading))
    })

    // Platform does not contain any of the requested data types
    if (noFilteredTimeSeries.length < 1) {
      return null
    }

    return <NoDataCard platform={platform} timeSeries={noFilteredTimeSeries[0]} />
  }

  const timeSeries = filteredTimeSeries[0]

  return <LoadDataCard timeSeries={timeSeries} platform={platform} />
}

interface LoadDataCardProps {
  platform: PlatformFeature
  timeSeries: PlatformTimeSeries
}

/**
 * Load the data for a time series and connect units to the data card to display
 * additionally filter data to the last day
 *
 * @param platform
 * @param timeSeries Time series to load data for
 */
const LoadDataCard: React.FunctionComponent<LoadDataCardProps> = ({ platform, timeSeries }) => {
  const { isLoading, data } = useDataset(timeSeries)
  const unit_system = useUnitSystem()

  if (isLoading) {
    return <LoadingDataCard platform={platform} timeSeries={timeSeries} />
  }

  if (data) {
    const aDayAgo = new Date()
    aDayAgo.setDate(aDayAgo.getDate() - 1)

    const readings: ReadingTimeSeries[] = (data as DataTimeSeries).timeSeries.filter(
      (reading) => aDayAgo < reading.time
    )

    if (readings.length > 0) {
      return (
        <DataCardDisplay readings={readings} unit_system={unit_system} timeSeries={timeSeries} platform={platform} />
      )
    }
  }

  return <ErrorDataCard platform={platform} timeSeries={timeSeries} />
}

interface DataCardDisplayProps {
  readings: ReadingTimeSeries[]
  unit_system: UnitSystem
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

/**
 * Format and display a data card
 */
export const DataCardDisplay: React.FunctionComponent<DataCardDisplayProps> = ({
  platform,
  readings,
  timeSeries,
  unit_system,
}) => {
  const url = cardUrl(platform, timeSeries)
  const data_converter = converter(timeSeries.data_type.standard_name)
  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  const latest = readings[readings.length - 1]

  const data = readings.map((r) => ({
    ...r,
    reading: round(data_converter.convertToNumber(r.reading, unit_system), 2),
  }))

  return (
    <Col {...cardProps}>
      <Link to={url}>
        <Card>
          <CardHeader>
            {timeSeries.data_type.long_name} - {round(data_converter.convertToNumber(latest.reading, unit_system), 1)}{" "}
            {data_converter.displayName(unit_system)} {convertUnit(timeSeries.data_type.units, latest.reading)}
          </CardHeader>

          <CardBody style={{ padding: ".2rem" }}>
            <SmallTimeSeriesChart
              name={timeSeries.data_type.standard_name}
              timeSeries={data}
              unit={data_converter.displayName(unit_system)}
              softMin={bounds[0]}
              softMax={bounds[1]}
              unit_system={unit_system}
              data_type={timeSeries.data_type.standard_name}
            />
          </CardBody>
        </Card>
      </Link>
    </Col>
  )
}
