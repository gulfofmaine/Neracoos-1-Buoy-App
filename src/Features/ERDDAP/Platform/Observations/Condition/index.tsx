/**
 * Display all time series for a specific standard name
 */
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { PlatformLoadingAlert } from "components/Alerts"
import { LargeTimeSeriesChart } from "components/Charts/LargeTimeSeries"
import { UnitSystem } from "Features/Units/types"
import { useUnitSystem } from "Features/Units"
import { TimeframeSelector } from "Features/ERDDAP/TimeframeSelector"
import { naturalBounds } from "Shared/dataTypes"
import { DataTimeSeries } from "Shared/timeSeries"
import { aWeekAgoRounded, daysInFuture, manuallySetFullEODIso } from "Shared/time"

import { UseDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { Info } from "./Info"

interface Props {
  /** Platform to display */
  platform: PlatformFeature
  /** Standard name to display */
  standardName: string
}

/**
 *
 * @param platform
 * @param standardName
 */
export const ErddapObservedCondition: React.FunctionComponent<Props> = ({ platform, standardName }: Props) => {
  const unitSystem = useUnitSystem()
  const searchParams = useSearchParams()
  const [startDate, setStartDate] = useState(
    searchParams.get("start") ? new Date(searchParams.get("start") as string) : aWeekAgoRounded(),
  )
  const [endDate, setEndDate] = useState(
    searchParams.get("end") ? manuallySetFullEODIso(new Date(searchParams.get("end") as string)) : daysInFuture(0),
  )

  const timeSeries: PlatformTimeSeries[] = platform.properties.readings.filter(
    (reading) => reading.data_type.standard_name === standardName,
  )
  timeSeries.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))

  const charts = timeSeries.map((ts: PlatformTimeSeries, index) => {
    const depth = ts.depth && ts.depth > 0 ? " at " + ts.depth + "m below" : ""

    return (
      <Row key={index}>
        <Col>
          <div className="observation-title-container">
            <h4 className="obervation-title">
              {ts.data_type.long_name} {depth} <Info timeSeries={[ts]} id={index} startDate={startDate} />
            </h4>
            <div className="observation-timeframe-selector">
              {index === 0 && <TimeframeSelector graphFuture={false} />}
            </div>
          </div>
          <UseDataset
            timeSeries={ts}
            startTime={startDate}
            endTime={endDate}
            loading={<PlatformLoadingAlert time_series={ts} />}
          >
            {({ dataset }) => (
              <ChartTimeSeriesDisplay
                {...{ dataset, standardName, unitSystem }}
                timeSeries={ts}
                startTime={startDate}
                endTime={endDate}
              />
            )}
          </UseDataset>
        </Col>
      </Row>
    )
  })

  return <div style={{ textAlign: "center" }}>{charts}</div>
}

interface ChartTimeSeriesDisplayProps {
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
  startTime?: Date
  endTime?: Date
}

/**
 * Display a loaded time series
 */
export const ChartTimeSeriesDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unitSystem,
  startTime,
  endTime,
}: ChartTimeSeriesDisplayProps) => {
  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  return (
    <>
      <LargeTimeSeriesChart
        timeSeries={dataset.timeSeries}
        name={timeSeries.data_type.long_name}
        softMin={bounds[0]}
        softMax={bounds[1]}
        unitSystem={unitSystem}
        data_type={standardName}
        startTime={startTime}
        endTime={endTime}
      />
    </>
  )
}
