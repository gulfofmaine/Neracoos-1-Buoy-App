import { aWeekAgoRounded, daysAgoRounded, daysInFuture, formatDate, getToday, YEAR } from "Shared/time"

import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, UncontrolledTooltip } from "reactstrap"

import { WarningAlert } from "components/Alerts"
import { Revert } from "Shared/icons/Revert"
import { buildSearchParamsQuery } from "Shared/urlParams"
import { DatumOffsetOptions } from "../types"
import { useEndTime, useStartTime } from "../waterLevel/hooks"

export const TimeframeSelector = ({
  graphFuture,
  isWaterLevel = false,
}: {
  graphFuture: boolean
  isWaterLevel?: boolean
}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { startTime, setStartTime } = useStartTime(isWaterLevel)
  const { endTime, setEndTime } = useEndTime(graphFuture)
  const [validDateMessage, setValidDateMessage] = useState<string>("")

  useEffect(() => {
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

    setValidDateMessage(validateTimeframe(startTime, endTime))
  }, [startTime, endTime, isWaterLevel])

  useEffect(() => {
    setStartTime(searchParams.get("start") || formatDate(isWaterLevel ? daysAgoRounded(2) : aWeekAgoRounded()))
    setEndTime(
      searchParams.get("end") ||
        formatDate(!isWaterLevel ? daysInFuture(0) : graphFuture ? daysInFuture(3) : daysInFuture(0)),
    )
  }, [searchParams, isWaterLevel, graphFuture, pathname, setEndTime, setStartTime])

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
            alignItems: "center",
          }}
        >
          <label style={{ marginRight: "20px", display: "flex", alignItems: "center" }} className="timeframe-label">
            <p style={{ marginBottom: 0, marginRight: "5px" }}>Start:</p>
            <input
              type="date"
              id="start"
              name="start"
              max={getToday()}
              value={formatDate(startTime)}
              onInput={(e) => setStartTime((e.target as HTMLInputElement).value)}
              required={true}
            />
          </label>
          <label style={{ marginRight: "20px", display: "flex", alignItems: "center" }} className="timeframe-label">
            <p style={{ marginBottom: 0, marginRight: "5px" }}>End:</p>
            <input
              type="date"
              id="end"
              name="end"
              min={formatDate(startTime)}
              max={graphFuture ? undefined : getToday()}
              value={formatDate(endTime)}
              onInput={(e) => setEndTime(formatDate(new Date((e.target as HTMLInputElement).value)))}
              required={true}
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
                      pathname: `${pathname}`,
                      query: buildSearchParamsQuery(
                        startTime,
                        endTime,
                        searchParams.get("datum") as DatumOffsetOptions,
                      ),
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
