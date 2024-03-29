/**
 * Display all time series for a specific standard name
 */
import React from "react"
import { Col, Row } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts/LargeTimeSeries"
import { naturalBounds } from "Shared/dataTypes"
import { aWeekAgoRounded } from "Shared/time"
import { DataTimeSeries } from "Shared/timeSeries"
import { UnitSystem } from "Features/Units/types"
import { useUnitSystem } from "Features/Units"

import { UseDataset } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { Info } from "./Info"

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
  const startDate = aWeekAgoRounded()

  const timeSeries: PlatformTimeSeries[] = platform.properties.readings.filter(
    (reading) => reading.data_type.standard_name === standardName,
  )
  timeSeries.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))

  const charts = timeSeries.map((ts: PlatformTimeSeries, index) => {
    const depth = ts.depth && ts.depth > 0 ? " at " + ts.depth + "m below" : ""

    return (
      <Row key={index}>
        <Col>
          <h4>
            {ts.data_type.long_name} {depth} <Info timeSeries={[ts]} id={index} startDate={startDate} />
          </h4>
          <UseDataset timeSeries={ts} startTime={startDate}>
            {({ dataset }) => <ChartTimeSeriesDisplay {...{ dataset, standardName, unitSystem }} timeSeries={ts} />}
          </UseDataset>
        </Col>
      </Row>
    )
  })

  return <div style={{ textAlign: "center" }}>{charts}</div>
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
}: ChartTimeSeriesDisplayProps) => {
  const bounds = naturalBounds(timeSeries.data_type.standard_name)

  return (
    <LargeTimeSeriesChart
      timeSeries={dataset.timeSeries}
      name={timeSeries.data_type.long_name}
      softMin={bounds[0]}
      softMax={bounds[1]}
      unitSystem={unitSystem}
      data_type={standardName}
    />
  )
}
