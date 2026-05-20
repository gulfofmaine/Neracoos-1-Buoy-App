"use client"
/**
 * Generalized single time series data card
 */
import React from "react"
import Link from "next/link"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

import { SmallTimeSeriesChart } from "components/Charts/SmallTimeSeries"
import { naturalBounds } from "Shared/dataTypes"
import { round } from "Shared/math"
import { ReadingTimeSeries } from "Shared/timeSeries"
import { convertUnit } from "Shared/unitConversion"
import { UnitSystem } from "Features/Units/types"
import { converter } from "Features/Units/Converter"
import { ExpandIcon } from "Shared/icons/iconsMap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardUrl } from "./common_card"

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
export function DataCardDisplay({
  platform,
  readings,
  timeSeries,
  unitSystem,
  startTime,
  endTime,
}: DataCardDisplayProps) {
  const url = cardUrl(platform, timeSeries)
  const dataConverter = converter(timeSeries.data_type.standard_name)
  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  const latest = readings[readings.length - 1]

  const data = readings.map((r) => ({
    ...r,
    reading: round(dataConverter.convertToNumber(r.reading, unitSystem), 2),
  }))

  return (
    <Col>
      <Link href={url}>
        <Card className="chart-card">
          <Card.Header className="h-100 border-0">
            <p className="chart-title">
              <strong>
                {timeSeries.data_type.long_name} - {round(dataConverter.convertToNumber(latest.reading, unitSystem), 1)}{" "}
                {dataConverter.displayName(unitSystem)} {convertUnit(timeSeries.data_type.units, latest.reading)}
              </strong>
            </p>
          </Card.Header>

          <div className="p-1 pt-3">
            <SmallTimeSeriesChart
              name={timeSeries.data_type.standard_name}
              timeSeries={data}
              unit={dataConverter.displayName(unitSystem)}
              softMin={bounds[0]}
              softMax={bounds[1]}
              data_type={timeSeries.data_type.standard_name}
              {...{ unitSystem, startTime, endTime }}
            />
          </div>
          <ExpandIcon className="ms-auto mt-auto p-2" />
        </Card>
      </Link>
    </Col>
  )
}
