/**
 * Display all time series for a specific standard name
 */
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"

import { PlatformLoadingAlert } from "components/Alerts"
import { LargeTimeSeriesChart } from "components/Charts/LargeTimeSeries"
import { UnitSystem } from "Features/Units/types"
import { useUnitSystem } from "Features/Units"
import { TimeframePicker } from "Features/ERDDAP/TimeframeSelector/TimeframePicker"
import { TimeframeButtonGroup, TimeframeDropdown } from "Features/ERDDAP/TimeframeButtonGroup"
import { naturalBounds } from "Shared/dataTypes"
import { DataTimeSeries } from "Shared/timeSeries"
import { aWeekAgoRounded, daysInFuture, manuallySetFullEODIso } from "Shared/time"
import { BackToPlatformButton } from "../BackToPlatformButton"

import { UseDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { Info } from "./Info"
import { getStartFunction, Timeframes } from "Features/ERDDAP/TimeframeButtonGroup/timeframes"

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
  const [startDate, setStartDate] = useState(aWeekAgoRounded())
  const [endDate, setEndDate] = useState(daysInFuture(0))

  // Keep a timeframe to allow "unsetting" of the toggle
  const [timeFrame, setTimeFrame] = useState<Timeframes>("7d")
  const handleTimeframeChange = (val: Timeframes) => {
    if (val === null) return // No val no set
    setTimeFrame(val)
    const start = getStartFunction(val)
    setStartDate(start)
    setEndDate(daysInFuture(0))
  }

  const handleStartChoice = (start: Date) => setStartDate(start)
  const handleEndChoice = (end: Date) => setEndDate(end)

  const timeSeries: PlatformTimeSeries[] = platform.properties.readings.filter(
    (reading) => reading.data_type.standard_name === standardName,
  )

  timeSeries.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))

  const charts = timeSeries.map((ts: PlatformTimeSeries, index) => {
    const depth = ts.depth && ts.depth > 0 ? " at " + ts.depth + "m below" : ""

    return (
      <div key={ts.depth ? ts.depth : index} className="d-flex flex-column gap-2">
        <div className="d-flex flex-column flex-md-row gap-2 p-2 position-relative align-items-md-start justify-content-end justify-content-md-center">
          {index === 0 && <BackToPlatformButton className="d-flex back-button-positioning ps-0 bg-white border-0" />}
          <h2 className="d-flex gap-2 mx-auto align-items-center">
            {ts.data_type.long_name} {depth} <Info timeSeries={[ts]} id={index} startDate={startDate} />
          </h2>
        </div>
        {index === 0 && (
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
        )}

        {index === 0 && (
          <div className="d-flex d-lg-none justify-content-center justify-content-md-start">
            <TimeframeDropdown
              id="dropdown-timeframe"
              value={timeFrame}
              handleChange={handleTimeframeChange}
              className="align-items-center"
            />
          </div>
        )}

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
      </div>
    )
  })

  return charts
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
