import { getIsoForPicker, getToday, manuallySetFullEODIso, shortIso } from "Shared/time"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button, Col, Row } from "reactstrap"

// date picker eith start and end date (so two of them) and a "graph" button that changes the url based on the value of the two dates.
// Defaults should be the url defaults (which is 3 days prior and a week out)

export const TimeframeSelector = ({ graphFuture }: { graphFuture: boolean }) => {
  const params = useParams()
  const [startTime, setStartTime] = useState<any>(decodeURIComponent(params.startTime as string))
  const [endTime, setEndTime] = useState<any>(decodeURIComponent(params.endTime as string))
  const startTimeParams = decodeURIComponent(params.startTime as string)
  const endTimeParams = decodeURIComponent(params.endTime as string)

  const getEndTime = (date) => {
    const endTime = new Date(date)
    setEndTime(getIsoForPicker(endTime))
  }

  useEffect(() => {
    setStartTime(getIsoForPicker(new Date(startTimeParams)))
    setEndTime(graphFuture ? getIsoForPicker(new Date(endTimeParams)) : getToday())
  }, [startTimeParams, endTimeParams, graphFuture])

  return (
    <Row style={{ width: "75%", verticalAlign: "middle", marginBottom: "20px" }}>
      <Col style={{ width: "100%", margin: 0 }}>
        <h6 style={{ width: "100%", paddingTop: "10px", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      {startTime && endTime && (
        <div>
          <Col
            style={{
              margin: 0,
              padding: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label>
              Start date:
              <input
                className="ms-2"
                type="date"
                id="start"
                name="timeframe-start"
                max={getToday()}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </label>
            <label>
              End date:
              <input
                className="ms-2"
                type="date"
                id="end"
                name="timeframe-end"
                min={startTime}
                max={graphFuture ? undefined : getToday()}
                value={endTime}
                onChange={(e) => getEndTime(e.target.value)}
              />
            </label>
            <a
              href={`/water-level/sensor/${params.sensorId}/${startTime}/${endTime}/${params.datum}`}
              style={{ marginLeft: "10px" }}
            >
              <Button color="primary">Plot Dates</Button>
            </a>
          </Col>
        </div>
      )}
    </Row>
  )
}
