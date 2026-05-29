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
import { TimeframePicker } from "Features/ERDDAP/TimeframeSelector/TimeframePicker"
import { useSearchParams } from "next/navigation"
import { getStartFunction, Timeframes } from "Features/ERDDAP/TimeframeButtonGroup/timeframes"
import { TimeframeButtonGroup, TimeframeDropdown } from "Features/ERDDAP/TimeframeButtonGroup"

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
  const [startDate, setStartDate] = useState(aWeekAgoRounded())
  const [endDate, setEndDate] = useState(daysInFuture(0))

  const [timeFrame, setTimeFrame] = useState<Timeframes>("7d")
  // State handlers for the presets and the time picker
  const handleTimeframeChange = (val: Timeframes) => {
    if (val === null) return // No val no set
    setTimeFrame(val)
    const start = getStartFunction(val)
    setStartDate(start)
    setEndDate(daysInFuture(0))
  }
  const handleStartChoice = (start: Date) => setStartDate(start)
  const handleEndChoice = (end: Date) => setEndDate(end)

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <div>
      <h2 className="d-flex gap-2 justify-content-center align-items-center">
        Wind <Info timeSeries={timeSeries} id={0} startDate={startDate} />
      </h2>
      <div className="d-none d-lg-flex flex-column flex-md-row gap-2 align-items-center">
        <TimeframeButtonGroup
          name="time-frame-group"
          type="radio"
          value={timeFrame ?? "7d"}
          onChange={handleTimeframeChange}
          className="order-2 order-md-1"
        />
        <div className="flex-row ms-auto order-1 order-md-2">
          {timeFrame === "custom" && (
            <TimeframePicker
              start={startDate}
              end={endDate}
              handleStart={handleStartChoice}
              handleEnd={handleEndChoice}
              graphFuture={false}
            />
          )}
        </div>
      </div>

      <div className="d-flex d-lg-none justify-content-center">
        <TimeframeDropdown
          id="dropdown-timeframe"
          value={timeFrame}
          handleChange={handleTimeframeChange}
          className="align-items-center"
        />
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