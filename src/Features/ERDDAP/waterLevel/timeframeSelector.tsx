import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Revert } from "Shared/icons/Revert"
import {
  getIsoForPicker,
  getToday,
  manuallySetFullEODIso,
  shortIso,
  threeDaysAgoRounded,
  weeksInFuture,
} from "Shared/time"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button, Col, Row, Tooltip, UncontrolledTooltip } from "reactstrap"

// date picker eith start and end date (so two of them) and a "graph" button that changes the url based on the value of the two dates.
// Defaults should be the url defaults (which is 3 days prior and a week out)

export const TimeframeSelector = ({ graphFuture }: { graphFuture: boolean }) => {
  const params = useParams()
  const [startTime, setStartTime] = useState<any>(decodeURIComponent(params.startTime as string))
  const [endTime, setEndTime] = useState<any>(decodeURIComponent(params.endTime as string))
  const [validDate, setValidDate] = useState<boolean>(true)
  const startTimeParams = decodeURIComponent(params.startTime as string)
  const endTimeParams = decodeURIComponent(params.endTime as string)

  const getEndTime = (date) => {
    const endTime = new Date(date)
    setEndTime(getIsoForPicker(endTime))
  }

  const validateTimeframe = (start, end) => {
    //check if timeFrame spans more than two weeks
    if ((new Date(end).getTime() - new Date(start).getTime()) / 86400000 > 14) {
      return false
    }
    //check if timeframe is recent enough
    if (new Date(start).getFullYear() < 2023 || new Date(end).getFullYear() < 2023) {
      return false
    }
    //check if endDate is before startDate
    if (new Date(end).getTime() - new Date(start).getTime() < 0) {
      return false
    }
    return true
  }

  const revertToDefaultDate = () => {
    setStartTime(getIsoForPicker(threeDaysAgoRounded()))
    setEndTime(getIsoForPicker(weeksInFuture(1)))
  }

  useEffect(() => {
    setValidDate(validateTimeframe(startTime, endTime))
  }, [startTime, endTime])

  useEffect(() => {
    setStartTime(getIsoForPicker(new Date(startTimeParams)))
    setEndTime(graphFuture ? getIsoForPicker(new Date(endTimeParams)) : getToday())
  }, [startTimeParams, endTimeParams, graphFuture])

  return (
    <Row style={{ width: "80%", verticalAlign: "middle", marginBottom: "20px" }}>
      <Col style={{ width: "100%", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      <div>
        <Col
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <label style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            Start date:
            <input
              type="date"
              id="start"
              name="timeframe-start"
              max={getToday()}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            End date:
            <input
              type="date"
              id="end"
              name="timeframe-end"
              min={startTime}
              max={graphFuture ? undefined : getToday()}
              value={endTime}
              onChange={(e) => getEndTime(e.target.value)}
            />
          </label>
          <div>
            <Button
              color="light"
              outline
              size="sm"
              style={{ marginRight: "5px", border: "grey" }}
              id="revert-default-date"
            >
              <a
                href={`/water-level/sensor/${params.sensorId}/${getIsoForPicker(
                  threeDaysAgoRounded(),
                )}/${getIsoForPicker(weeksInFuture(1))}/${params.datum}`}
              >
                <Revert fill={"#000000"} />
              </a>
            </Button>
            <UncontrolledTooltip placement="top" target="revert-default-date">
              Revert to default date
            </UncontrolledTooltip>
            <Button color="primary" size="sm" disabled={!startTime || !endTime || !validDate}>
              <a
                href={`/water-level/sensor/${params.sensorId}/${startTime}/${endTime}/${params.datum}`}
                style={{ color: "white", textDecoration: "none", width: "100%", height: "100%" }}
              >
                Plot Dates
              </a>
            </Button>
          </div>
        </Col>
      </div>
    </Row>
  )
}
