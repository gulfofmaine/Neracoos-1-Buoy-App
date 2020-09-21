/**
 * Wind Observed conditions component
 */
import * as React from "react"
import { Alert, Col, Row } from "reactstrap"

import { WindTimeSeriesChart } from "components/Charts"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { pickWindDatasets, pickWindTimeSeries } from "../../../utils/wind"
import { UseDatasets } from "Features/ERDDAP/hooks"

interface Props {
  platform: PlatformFeature
}

interface DisplayProps extends Props {
  unit_system: UnitSystem
  datasets: DataTimeSeries[]
  timeSeries: PlatformTimeSeries[]
}

/**
 * Wind Observed conditions component
 */
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }) => {
  const unit_system = useUnitSystem()

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <UseDatasets
      timeSeries={timeSeries}
      error={<WindError message="Error loading wind data" />}
      loading={
        <Row>
          <Col>
            <h5>Loading wind data in progress</h5>
          </Col>
        </Row>
      }
    >
      {({ datasets }) => <ErddapWindObservedConditionDisplay {...{ platform, unit_system, timeSeries, datasets }} />}
    </UseDatasets>
  )
}

/**
 * Display wind datasets
 */
export const ErddapWindObservedConditionDisplay: React.FunctionComponent<DisplayProps> = ({
  platform,
  unit_system,
  datasets,
}) => {
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

const WindError: React.FunctionComponent<WindErrorProps> = ({ message }) => (
  <Row>
    <Col>
      <Alert color="warning">{message}</Alert>
    </Col>
  </Row>
)
