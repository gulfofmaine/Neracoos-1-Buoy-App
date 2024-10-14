/**
 * Wind Observed conditions component
 */
import React from "react"
import { Col, Row } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { WindTimeSeriesChart } from "components/Charts"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { aWeekAgoRounded } from "Shared/time"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { Info } from "../Condition/Info"
import { UseDatasets } from "Features/ERDDAP/hooks"

interface Props {
  platform: PlatformFeature
}

interface DisplayProps extends Props {
  unitSystem: UnitSystem
  datasets: DataTimeSeries[]
  timeSeries: PlatformTimeSeries[]
  startDate: Date
}

/**
 * Wind Observed conditions component
 */
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }: Props) => {
  const unitSystem = useUnitSystem()
  const startDate = aWeekAgoRounded()

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <UseDatasets timeSeries={timeSeries} startTime={startDate} platformId={platform.id}>
      {({ datasets }) => (
        <ErddapWindObservedConditionDisplay {...{ platform, unitSystem, timeSeries, datasets, startDate }} />
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
}: DisplayProps) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)

  return (
    <Row>
      <Col>
        <div style={{ textAlign: "center" }}>
          <h4>
            Wind <Info timeSeries={timeSeries} id={0} startDate={startDate} />
          </h4>
        </div>

        <WindTimeSeriesChart barbsPerDay={5} legend={true} {...{ speed, gust, direction, unitSystem }} />
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
