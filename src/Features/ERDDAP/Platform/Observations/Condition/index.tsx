/**
 * Display all time series for a specific standard name
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Button, ButtonGroup, Col, Input, InputGroup, InputGroupText, InputGroupAddon, Row, Tooltip } from "reactstrap"

import { LargeTimeSeriesChart } from "components/Charts"
import { naturalBounds } from "Shared/dataTypes"
import { useDebounce } from "Shared/debounce"
import { tabledapProtocolUrl } from "Shared/erddap/tabledap"
import { aWeekAgoRounded, aYearAgoRounded } from "Shared/time"
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
export const ErddapObservedCondition: React.FunctionComponent<Props> = ({ platform, standardName }: Props) => {
  const unitSystem = useUnitSystem()
  const [startDate, setStartDate] = React.useState<Date>(aWeekAgoRounded())
  const debouncedStartDate = useDebounce<Date>(startDate, 250)

  const timeSeries: PlatformTimeSeries[] = platform.properties.readings.filter(
    (reading) => reading.data_type.standard_name === standardName
  )
  timeSeries.sort((a, b) => (a.depth && b.depth ? a.depth - b.depth : 0))

  const latestStartTime = timeSeries.reduce((latest, ts) => {
    let date = new Date(ts.start_time)
    if (latest < date) {
      return date
    }

    return latest
  }, new Date(timeSeries[0].start_time))
  // }, aYearAgoRounded())

  const charts = timeSeries.map((ts: PlatformTimeSeries, index) => {
    const depth = ts.depth && ts.depth > 0 ? " at " + ts.depth + "m below" : ""

    return (
      <Row key={index}>
        <Col>
          <h4>
            {ts.data_type.long_name} {depth} <Info timeSeries={ts} id={index} startDate={debouncedStartDate} />
          </h4>
          <UseDataset timeSeries={ts} startTime={debouncedStartDate}>
            {({ dataset }) => <ChartTimeSeriesDisplay {...{ dataset, standardName, unitSystem }} timeSeries={ts} />}
          </UseDataset>
        </Col>
      </Row>
    )
  })

  return (
    <div style={{ textAlign: "center" }}>
      <Row>
        <Col md={{ offset: 6, size: 6 }}>
          <Row>
            <Col>
              <ButtonGroup size="sm" style={{ float: "right" }}>
                <Button>Charts</Button>
                <Button>Table</Button>
              </ButtonGroup>
            </Col>

            <Col>
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Start Date</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="date"
                  value={startDate.toISOString().slice(0, 10)}
                  min={latestStartTime.toISOString().slice(0, 10)}
                  onChange={(e) => {
                    const newStartDate = new Date(e.target.value)
                    // eslint-disable-next-line:eqeqeq
                    if ((newStartDate as any) != "Invalid Date" && latestStartTime < newStartDate) {
                      setStartDate(newStartDate)
                    }
                  }}
                />
                <InputGroupAddon addonType="append">
                  <Button
                    size="sm"
                    onClick={() => {
                      setStartDate(aWeekAgoRounded())
                    }}
                  >
                    Reset
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      {charts}
    </div>
  )
}

interface InfoProps {
  timeSeries: PlatformTimeSeries
  id: number
  startDate: Date
}

/**
 * Display tooltip for a chart
 *
 * @param timeSeries PlatformTimeSeries to display tooltip for
 * @param id Unique key to identify tooltip, usually index from map
 */
const Info: React.FC<InfoProps> = ({ timeSeries, id, startDate }: InfoProps) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)

  const protocolUrl = (protocol: string) =>
    tabledapProtocolUrl(timeSeries.server, timeSeries.dataset, protocol, [timeSeries.variable], {
      ...timeSeries.constraints,
      "time>=": startDate.toISOString(),
    })

  const target = `Tooltip-${id}`
  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "1rem", verticalAlign: "middle" }} id={target} />
      <Tooltip isOpen={tooltipOpen} toggle={toggle} target={target} autohide={false} style={{ textAlign: "left" }}>
        Data access:
        <ul style={{ paddingLeft: "1rem" }}>
          <li>
            <a href={protocolUrl("htmlTable")}>Data table</a>
          </li>
          <li>
            <a href={protocolUrl("csv")}>Download CSV</a>
          </li>
          <li>
            <a href={protocolUrl("html")}>ERDDAP dataset</a>
          </li>
        </ul>
      </Tooltip>
    </React.Fragment>
  )
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
