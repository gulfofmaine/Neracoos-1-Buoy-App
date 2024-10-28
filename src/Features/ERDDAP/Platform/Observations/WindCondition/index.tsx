/**
 * Wind Observed conditions component
 */
import React, { useEffect } from "react"
import { Button, Col, Collapse, Row } from "reactstrap"

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
import { TimeframeSelector } from "Features/ERDDAP/TimeframeSelector"
import { useSearchParams } from "next/navigation"
import { Calendar } from "Shared/icons/Calendar"

interface Props {
  platform: PlatformFeature
}

interface DisplayProps extends Props {
  unitSystem: UnitSystem
  datasets: DataTimeSeries[]
  timeSeries: PlatformTimeSeries[]
  startDate: Date
  endDate: Date
}

/**
 * Wind Observed conditions component
 */
export const ErddapWindObservedCondition: React.FunctionComponent<Props> = ({ platform }: Props) => {
  const unitSystem = useUnitSystem()
  const searchParams = useSearchParams()
  const startDate = new Date(searchParams.get("start") as string)
  const endDate = new Date(searchParams.get("end") as string)
  // const startDate = aWeekAgoRounded()

  const { timeSeries } = pickWindTimeSeries(platform)

  if (timeSeries.length < 0) {
    return <WindError message="No wind data" />
  }

  return (
    <UseDatasets timeSeries={timeSeries} startTime={startDate} endTime={endDate} platformId={platform.id}>
      {({ datasets }) => (
        <ErddapWindObservedConditionDisplay {...{ platform, unitSystem, timeSeries, datasets, startDate, endDate }} />
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
  endDate,
}: DisplayProps) => {
  const { speed, gust, direction } = pickWindDatasets(platform, datasets)
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  const toggle = () => setOpen(!isOpen)

  useEffect(() => {
    setOpen(false)
  }, [searchParams])

  return (
    <Row>
      <Col>
        <div style={{ textAlign: "center" }}>
          <h4>
            Wind <Info timeSeries={timeSeries} id={0} startDate={startDate} />
          </h4>
        </div>
        <div>
          <Button color="light" outline onClick={() => toggle()} className="timeframe-collapse-button">
            <p style={{ marginBottom: 0, marginRight: "5px", color: "#083d52" }}>Change Timeframe</p>
            <Calendar width={"20px"} height={"20px"} />
          </Button>
          <Collapse isOpen={isOpen} className="timeframe-collapse">
            <div className="observation-timeframe-selection">
              <TimeframeSelector graphFuture={false} />
            </div>
          </Collapse>
        </div>

        <WindTimeSeriesChart
          barbsPerDay={5}
          legend={true}
          {...{ speed, gust, direction, unitSystem }}
          startTime={startDate}
          endTime={endDate}
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
      <WarningAlert>{message}</WarningAlert>
    </Col>
  </Row>
)
