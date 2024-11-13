import {
  aWeekAgoRounded,
  daysInFuture,
  getIsoForPicker,
  getToday,
  threeDaysAgoRounded,
  weeksInFuture,
  YEAR,
} from "Shared/time"

import { useParams, usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, UncontrolledTooltip } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { Revert } from "Shared/icons/Revert"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { DatumOffsetOptions } from "../types"

export const TimeframeSelector = ({ graphFuture }: { graphFuture: boolean }) => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const [startTime, setStartTime] = useState<any>(searchParams.get("start")) || getIsoForPicker(aWeekAgoRounded())
  const [endTime, setEndTime] = useState<any>(searchParams.get("end")) || getIsoForPicker(daysInFuture(0))
  const [validDateMessage, setValidDateMessage] = useState<string>("")
  const isWaterLevel = pathname.includes("water-level")

  const validateTimeframe = (start, end) => {
    //check if timeFrame spans more than two weeks
    if (isWaterLevel) {
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

  useEffect(() => {
    setStartTime(searchParams.get("start") || getIsoForPicker(aWeekAgoRounded()))
  }, [searchParams.get("start")])

  useEffect(() => {
    setEndTime(searchParams.get("end") || getIsoForPicker(daysInFuture(0)))
  }, [searchParams.get("end")])

  return (
    <Card className={`${isWaterLevel ? "timeframe-card" : "timeframe-card main"}`}>
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
              href={
                searchParams.get("datum")
                  ? {
                      pathname: `${pathname}${params.sensorId}`,
                      query: buildSearchParamsQuery("", "", searchParams.get("datum") as DatumOffsetOptions),
                    }
                  : pathname
              }
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
