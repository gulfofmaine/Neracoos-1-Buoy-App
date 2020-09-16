/**
 * Wind Observed conditions component
 */
import React from "react"
import { Alert, Col, Row } from "reactstrap"

import { WindTimeSeriesChart } from "components/Charts"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { useDatasets } from "Features/ERDDAP/hooks"

interface Props {
  platform: PlatformFeature
}

interface LoadingProps extends Props {
  timeSeries: PlatformTimeSeries[]
}

interface DisplayProps extends LoadingProps {
  unit_system: UnitSystem
  datasets: DataTimeSeries[]
}

export const ErddapWindObservedCondition: React.FC<Props> = ({ platform }) => {
  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return <LoadWindObservedConditionDisplay platform={platform} timeSeries={timeSeries} />
}

export const LoadWindObservedConditionDisplay: React.FC<LoadingProps> = ({ platform, timeSeries }) => {
  const unit_system = useUnitSystem()
  const { isLoading, data } = useDatasets(timeSeries)

  if (isLoading) {
    return (
      <Row>
        <Col>
          <h5>Loading wind data in progress</h5>
        </Col>
      </Row>
    )
  }

  if (data) {
    return <ErddapWindObservedConditionDisplay {...{ platform, unit_system, timeSeries }} datasets={data} />
  }

  return <WindError message="Error loading wind data" />
}

export const ErddapWindObservedConditionDisplay: React.FC<DisplayProps> = ({ platform, unit_system, datasets }) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)

  return (
    <Row>
      <Col>
        <h4>Wind</h4>
        <WindTimeSeriesChart
          barbsPerDay={5}
          data={datasets}
          legend={true}
          {...{ speed, gust, direction, unit_system }}
        />
      </Col>
    </Row>
  )
}

interface WindErrorProps {
  message: string
}

const WindError: React.FC<WindErrorProps> = ({ message }) => (
  <Row>
    <Col>
      <Alert color="warning">{message}</Alert>
    </Col>
  </Row>
)
