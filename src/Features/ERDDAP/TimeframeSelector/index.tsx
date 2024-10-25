import { getIsoForPicker, getToday, threeDaysAgoRounded, weeksInFuture, YEAR } from "Shared/time"

import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, UncontrolledTooltip } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { Revert } from "Shared/icons/Revert"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { DatumOffsetOptions } from "../types"

export const TimeframeSelector = ({ graphFuture }: { graphFuture: boolean }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [startTime, setStartTime] = useState<any>(searchParams.get("start"))
  const [endTime, setEndTime] = useState<any>(searchParams.get("end"))
  const [validDateMessage, setValidDateMessage] = useState<string>("")

  const validateTimeframe = (start, end) => {
    //check if timeFrame spans more than two weeks
    if (pathname.includes("water-level")) {
      if ((new Date(end).getTime() - new Date(start).getTime()) / 86400000 > 14) {
        return "Please choose a timeframe that spans less than two weeks"
      }
      //check if timeframe is recent enough
      if (new Date(start).getFullYear() < 2023 || new Date(end).getFullYear() < 2023) {
        return "Please choose a more recent date"
      }
    } else {
      //check if timeFrame spans less than one month
      if ((new Date(end).getTime() - new Date(start).getTime()) / YEAR > 1) {
        return "Please choose a timeframe that spans less than one year"
      }
    }
    //check if endDate is before startDate
    if (new Date(end).getTime() - new Date(start).getTime() < 0) {
      return "Please choose a date where the start is before the end"
    }
    return ""
  }

  useEffect(() => {
    setValidDateMessage(validateTimeframe(startTime, endTime))
  }, [startTime, endTime])

  return (
    <Card className={`${pathname.includes("water-level") ? "timeframe-card" : "timeframe-card main"}`}>
      {validDateMessage !== "" && <WarningAlert>{validDateMessage}</WarningAlert>}
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
          <label style={{ marginRight: "20px", display: "flex", alignItems: "center" }} className="timeframe-label">
            <p style={{ marginBottom: 0, marginRight: "5px" }}>Start:</p>
            <input
              type="date"
              id="start"
              name="start"
              max={getToday()}
              value={startTime}
              onInput={(e) => setStartTime((e.target as HTMLInputElement).value)}
              required
            />
          </label>
          <label style={{ marginRight: "20px", display: "flex", alignItems: "center" }} className="timeframe-label">
            <p style={{ marginBottom: 0, marginRight: "5px" }}>End:</p>
            <input
              type="date"
              id="end"
              name="end"
              min={startTime}
              max={graphFuture ? undefined : getToday()}
              value={endTime}
              onInput={(e) => setEndTime(getIsoForPicker(new Date((e.target as HTMLInputElement).value)))}
              required
            />
          </label>
          <Button
            color="light"
            outline
            size="sm"
            style={{ marginRight: "5px", border: "grey" }}
            id="revert-default-date"
          >
            <Link
              href={{
                pathname,
                query: buildSearchParamsQuery(
                  getIsoForPicker(threeDaysAgoRounded()),
                  getIsoForPicker(weeksInFuture(1)),
                  searchParams.get("datum") as DatumOffsetOptions,
                ),
              }}
            >
              <Revert fill={"#000000"} />
            </Link>
          </Button>
          <UncontrolledTooltip placement="top" target="revert-default-date">
            Revert to default date
          </UncontrolledTooltip>
          <Button
            color="primary"
            size="sm"
            id="plot-date-button"
            disabled={!startTime || !endTime || validDateMessage !== ""}
          >
            <Link
              href={{
                pathname,
                query: buildSearchParamsQuery(
                  startTime,
                  endTime,
                  (searchParams.get("datum") as DatumOffsetOptions) &&
                    (searchParams.get("datum") as DatumOffsetOptions),
                ),
              }}
              style={{ color: "white", textDecoration: "none", width: "100%", height: "100%" }}
            >
              Plot Dates
            </Link>
          </Button>
          {validDateMessage !== "" && (
            <UncontrolledTooltip placement="top" target="plot-date-button">
              {validDateMessage}
            </UncontrolledTooltip>
          )}
        </Col>
      </div>
    </Card>
  )
}
