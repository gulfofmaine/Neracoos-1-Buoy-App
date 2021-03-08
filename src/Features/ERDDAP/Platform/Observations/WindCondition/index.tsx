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
import { UseDatasets } from "Features/ERDDAP/hooks"

interface Props {
  platform: PlatformFeature
}

interface DisplayProps extends Props {
  unitSystem: UnitSystem
  datasets: DataTimeSeries[]
  timeSeries: PlatformTimeSeries[]
}

/**
 * Wind Observed conditions component
 */
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }: Props) => {
  const unitSystem = useUnitSystem()

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <UseDatasets timeSeries={timeSeries}>
      {({ datasets }) => <ErddapWindObservedConditionDisplay {...{ platform, unitSystem, timeSeries, datasets }} />}
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
}: DisplayProps) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)

  return (
    <Row>
      <Col>
        <h4>Wind</h4>
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
      <Alert color="warning">{message}</Alert>
    </Col>
  </Row>
)
