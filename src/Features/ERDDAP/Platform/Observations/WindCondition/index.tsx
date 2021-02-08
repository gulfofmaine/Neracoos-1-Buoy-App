/**
 * Wind Observed conditions component
 */
import * as React from "react"
import { Alert, Col, Row } from "reactstrap"

import { WindTimeSeriesChart } from "components/Charts"
import { useUnitSystem } from "Features/Units"
import { UnitSystem } from "Features/Units/types"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
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
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }) => {
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
}) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)
  const { timeSeries } = pickWindTimeSeries(platform)

  return (
    <Row>
      <Col>
        <h4>Wind</h4>
        <WindTimeSeriesChart barbsPerDay={5} legend={true} {...{ speed, gust, direction, unitSystem }} />
        {timeSeries.length > 0 ? (
          <p>
            Data from the {timeSeries.map((ts) => ts.variable).join(", ")}{" "}
            {timeSeries.length > 1 ? "variables" : "variable"} from{" "}
            <a
              href={tabledapHtmlUrl(
                timeSeries[0].server,
                timeSeries[0].dataset,
                timeSeries.map((ts) => ts.variable),
                timeSeries[0].constraints
              )}
            >
              {timeSeries[0].dataset} dataset.
            </a>
          </p>
        ) : null}
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
