/**
 * Wind Observed conditions component
 */
import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

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
  const startDate = searchParams.get("start") ? new Date(searchParams.get("start") as string) : aWeekAgoRounded()
  const endDate = searchParams.get("end")
    ? manuallySetFullEODIso(new Date(searchParams.get("end") as string))
    : daysInFuture(0)

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <UseDatasets timeSeries={timeSeries} startTime={startDate} endTime={endDate} platformId={platform.id}>
      {({ datasets }) => (
        <ErddapWindObservedConditionDisplay {...{ platform, unitSystem, timeSeries, datasets, startDate, endDate }} />
      )}
    </UseDatasets>
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
    <Row>
      <Col>
        <div className="observation-title-container">
          <h4 className="obervation-title">
            Wind <Info timeSeries={timeSeries} id={0} startDate={startDate} />
          </h4>
          <div className="observation-timeframe-selector">
            <TimeframeSelector graphFuture={false} />
          </div>
        </div>
        <WindTimeSeriesChart
          barbsPerDay={5}
          legend={true}
          {...{ speed, gust, direction, unitSystem }}
          startTime={startDate}
          endTime={endDate}
        />
      </Col>
    </Row>
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
