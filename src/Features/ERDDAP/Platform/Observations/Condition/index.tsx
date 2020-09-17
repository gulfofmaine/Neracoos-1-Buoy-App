/**
 * Display all timeseries for a specific standard name
 */
import * as React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { useUnitSystem } from "Features/Units"

import { useDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"

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

const ChartTimeSeries: React.FunctionComponent<ChartTimeSeriesProps> = ({ timeSeries, standardName }) => {
  const unit_system = useUnitSystem()
  const { isLoading, data } = useDataset(timeSeries)

  if (isLoading) {
    return <h4>Loading {timeSeries.data_type.long_name} data</h4>
  }

  if (data) {
    const depth = timeSeries.depth > 0 ? " at " + timeSeries.depth + "m below" : ""

    const bounds = naturalBounds(timeSeries.data_type.standard_name)

    return (
      <Row>
        <Col>
          <h4>
            {timeSeries.data_type.long_name} {depth}
          </h4>
          <LargeTimeSeriesChart
            timeSeries={data.timeSeries}
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

  return <h4>Error loading {timeSeries.data_type.long_name}</h4>
}
