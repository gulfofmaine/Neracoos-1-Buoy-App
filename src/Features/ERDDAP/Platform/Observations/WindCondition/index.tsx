/**
 * Wind Observed conditions component
 */
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from "react"

import { WarningAlert } from "components/Alerts"
import { WindTimeSeriesChart } from "components/Charts"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { aWeekAgoRounded, daysInFuture, manuallySetFullEODIso } from "Shared/time"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { Info } from "../Condition/Info"
import { UseDatasets } from "Features/ERDDAP/hooks"
import { TimeframeSelector } from "Features/ERDDAP/TimeframeSelector"
import { useSearchParams } from "next/navigation"
import { getStartFunction, Timeframes } from "Features/ERDDAP/TimeframeButtonGroup/timeframes"
import { TimeframeButtonGroup } from "Features/ERDDAP/TimeframeButtonGroup"

interface Props {
  platform: PlatformFeature
}

interface DisplayProps extends Props {
  unitSystem: UnitSystem
  datasets: DataTimeSeries[]
  timeSeries: PlatformTimeSeries[]
  startDate: Date
  endDate: Date
}

/**
 * Wind Observed conditions component
 */
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }: Props) => {
  const unitSystem = useUnitSystem()
  const searchParams = useSearchParams()
  const [startDate, setStartDate] = useState(
    searchParams.get("start") ? new Date(searchParams.get("start") as string) : aWeekAgoRounded(),
  )
  const [endDate, setEndDate] = useState(
    searchParams.get("end") ? manuallySetFullEODIso(new Date(searchParams.get("end") as string)) : daysInFuture(0),
  )

  const [timeFrame, setTimeFrame] = useState<Timeframes>()
  const handleTimeframeChange = (val: Timeframes) => {
    if (val === null) return // No val no set
    setTimeFrame(val)
    const start = getStartFunction(val)
    setStartDate(start)
    setEndDate(daysInFuture(0))
  }

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <div>
      <h2 className="d-flex gap-2 justify-content-center align-items-center">
        Wind <Info timeSeries={timeSeries} id={0} startDate={startDate} />
      </h2>
      <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
        <TimeframeButtonGroup
          name="time-frame-group"
          type="radio"
          value={timeFrame ?? undefined}
          onChange={handleTimeframeChange}
          className="order-2 order-md-1"
        />
        <div className="d-flex flex-row ms-auto order-1 order-md-2">
          <TimeframeSelector graphFuture={false} />
        </div>
      </div>
      <UseDatasets timeSeries={timeSeries} startTime={startDate} endTime={endDate} platformId={platform.id}>
        {({ datasets }) => (
          <ErddapWindObservedConditionDisplay {...{ platform, unitSystem, timeSeries, datasets, startDate, endDate }} />
        )}
      </UseDatasets>
    </div>
  )
}

/**
 * Display wind datasets
 */
export const ErddapWindObservedConditionDisplay: React.FunctionComponent<DisplayProps> = ({
  platform,
  unitSystem,
  datasets,
  timeSeries,
  startDate,
  endDate,
}: DisplayProps) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)

  return (
    <WindTimeSeriesChart
      barbsPerDay={5}
      legend={true}
      {...{ speed, gust, direction, unitSystem }}
      startTime={startDate}
      endTime={endDate}
    />
  )
}

interface WindErrorProps {
  message: string
}

const WindError: React.FunctionComponent<WindErrorProps> = ({ message }) => (
  <Row>
    <Col>
      <WarningAlert>{message}</WarningAlert>
    </Col>
  </Row>
)
