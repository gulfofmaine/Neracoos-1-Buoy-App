import { getIsoForPicker, getToday, manuallySetFullEODIso, threeDaysAgoRounded, weeksInFuture } from "Shared/time"
import queryString from "query-string"

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

import { useEffect, useState } from "react"
import { Alert, Button, Card, Col, Row, UncontrolledTooltip } from "reactstrap"
import { Revert } from "Shared/icons/Revert"

export const TimeframeSelector = ({ graphFuture }: { graphFuture: boolean }) => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startTime = searchParams.get("start") as string
  const endTime = searchParams.get("end") as string
  const [validDate, setValidDate] = useState<string>("")

  const validateTimeframe = (start, end) => {
    //check if timeFrame spans more than two weeks
    if ((new Date(end).getTime() - new Date(start).getTime()) / 86400000 > 14) {
      return "Please choose a timeframe that spans less than two weeks"
    }
    //check if timeframe is recent enough
    if (new Date(start).getFullYear() < 2023 || new Date(end).getFullYear() < 2023) {
      return "Please choose a more recent date"
    }
    //check if endDate is before startDate
    if (new Date(end).getTime() - new Date(start).getTime() < 0) {
      return "Please choose a date where the start is before the end"
    }
    return ""
  }

  const cleanedParams = {
    start: searchParams.get("start"),
    end: searchParams.get("end"),
    datum: searchParams.get("datum"),
  }

  const handleSearchParamChange = (e) => {
    if (e.target.name === "end") {
      const newParams = {
        ...cleanedParams,
        [e.target.name]: getIsoForPicker(new Date(e.target.value)),
      }
      const valid = validateTimeframe(searchParams.get("start"), e.target.value)
      valid === "" ? router.push(`${pathname}?${queryString.stringify(newParams)}`) : setValidDate(valid)
    } else {
      const newParams = {
        ...cleanedParams,
        [e.target.name]: e.target.value,
      }
      const valid = validateTimeframe(e.target.value, searchParams.get("end"))
      valid === "" ? router.push(`${pathname}?${queryString.stringify(newParams)}`) : setValidDate(valid)
    }
  }

  return (
    <Card
      style={{
        width: "fit-content",
        padding: "20px",
        marginTop: "20px",
        verticalAlign: "middle",
        marginBottom: "20px",
      }}
    >
      <Col style={{ width: "100%", margin: 0 }}>
        <h6 style={{ width: "100%", fontWeight: "bold" }}>Timeframe: </h6>
      </Col>
      {validDate !== "" && <Alert color="warning">{validDate}</Alert>}
      <div>
        <Col
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <label style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "20px" }}>
            Start date:
            <input
              type="date"
              id="start"
              name="start"
              max={getToday()}
              value={startTime}
              onChange={(e) => handleSearchParamChange(e)}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "20px" }}>
            End date:
            <input
              type="date"
              id="end"
              name="end"
              min={startTime}
              max={graphFuture ? undefined : getToday()}
              value={endTime}
              onChange={(e) => handleSearchParamChange(e)}
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
              <Link
                href={{
                  pathname: `/water-level/sensor/${params.sensorId}`,
                  query: {
                    start: getIsoForPicker(threeDaysAgoRounded()),
                    end: getIsoForPicker(weeksInFuture(1)),
                    datum: searchParams.get("datum"),
                  },
                }}
              >
                <Revert fill={"#000000"} />
              </Link>
            </Button>
            <UncontrolledTooltip placement="top" target="revert-default-date">
              Revert to default date
            </UncontrolledTooltip>
          </div>
        </Col>
      </div>
    </Card>
  )
}
