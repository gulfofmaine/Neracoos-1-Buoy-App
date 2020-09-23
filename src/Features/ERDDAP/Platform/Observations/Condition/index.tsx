/**
 * Display all time series for a specific standard name
 */
import * as React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { tabledapHtmlUrl } from "Shared/erddap/tabledap"
import { DataTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { useUnitSystem } from "Features/Units"

import { UseDataset } from "../../../hooks"
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
  const unitSystem = useUnitSystem()
  const timeSeries = platform.properties.readings.filter((reading) => reading.data_type.standard_name === standardName)

  timeSeries.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))

  const charts = timeSeries.map((ts, index) => (
    <UseDataset key={index} timeSeries={ts}>
      {({ dataset }) => <ChartTimeSeriesDisplay {...{ dataset, standardName, unitSystem }} timeSeries={ts} />}
    </UseDataset>
  ))

  return <React.Fragment>{charts}</React.Fragment>
}

interface ChartTimeSeriesDisplayProps {
  dataset: DataTimeSeries
  unitSystem: UnitSystem
  timeSeries: PlatformTimeSeries
  standardName: string
}

/**
 * Display a loaded time series
 */
export const ChartTimeSeriesDisplay: React.FunctionComponent<ChartTimeSeriesDisplayProps> = ({
  timeSeries,
  dataset,
  standardName,
  unitSystem,
}) => {
  const depth = timeSeries.depth && timeSeries.depth > 0 ? " at " + timeSeries.depth + "m below" : ""

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
          unitSystem={unitSystem}
          data_type={standardName}
        />
        <p>
          Data from the {timeSeries.variable} variable in the{" "}
          <a
            href={tabledapHtmlUrl(timeSeries.server, timeSeries.dataset, [timeSeries.variable], timeSeries.constraints)}
          >
            {timeSeries.dataset} dataset
          </a>
          .
        </p>
      </Col>
    </Row>
  )
}
