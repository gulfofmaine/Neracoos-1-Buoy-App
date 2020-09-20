/**
 * Display all time series for a specific standard name
 */
import * as React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { useUnitSystem } from "Features/Units"

import { useDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { DataTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"

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
export const ErddapObservedCondition: React.FunctionComponent<Props> = ({ platform, standardName }) => {
  const timeSeries = platform.properties.readings.filter((reading) => reading.data_type.standard_name === standardName)

  timeSeries.sort((a, b) => a.depth - b.depth)

  const charts = timeSeries.map((ts, index) => (
    <ChartTimeSeries key={index} timeSeries={ts} standardName={standardName} />
  ))

  return <React.Fragment>{charts}</React.Fragment>
}

interface ChartTimeSeriesProps {
  timeSeries: PlatformTimeSeries
  standardName: string
}

/**
 * Load a time series and connect to the current unit system
 */
export const ChartTimeSeries: React.FunctionComponent<ChartTimeSeriesProps> = ({ timeSeries, standardName }) => {
  const unit_system = useUnitSystem()
  const { isLoading, data } = useDataset(timeSeries)

  if (isLoading) {
    return <h4>Loading {timeSeries.data_type.long_name} data</h4>
  }

  if (data) {
    return <ChartTimeSeriesDisplay dataset={data} {...{ unit_system, timeSeries, standardName }} />
  }

  return <h4>Error loading {timeSeries.data_type.long_name}</h4>
}

interface ChartTimeSeriesDisplayProps extends ChartTimeSeriesProps {
  dataset: DataTimeSeries
  unit_system: UnitSystem
}

/**
 * Display a loaded time series
 */
export const ChartTimeSeriesDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unit_system,
}) => {
  const depth = timeSeries.depth > 0 ? " at " + timeSeries.depth + "m below" : ""

  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  return (
    <Row>
      <Col>
        <h4>
          {timeSeries.data_type.long_name} {depth}
        </h4>
        <LargeTimeSeriesChart
          timeSeries={dataset.timeSeries}
          name={timeSeries.data_type.long_name}
          softMin={bounds[0]}
          softMax={bounds[1]}
          unit_system={unit_system}
          data_type={standardName}
        />
      </Col>
    </Row>
  )
}
