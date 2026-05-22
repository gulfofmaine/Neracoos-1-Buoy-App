import { Button, Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useState, useEffect } from "react"

import { WarningAlert } from "components/Alerts"
import { daysAgoRounded, daysInFuture, formatDate, getToday, YEAR } from "Shared/time"
import { Revert } from "Shared/icons/Revert"

type TimeframePickerProps = {
  start: Date
  end: Date
  handleStart: (start: Date) => void
  handleEnd: (end: Date) => void
  graphFuture: boolean
}

export const TimeframePicker = ({ start, end, graphFuture, handleStart, handleEnd }: TimeframePickerProps) => {
  const [validDateMessage, setValidDateMessage] = useState<string>("")
  const [inputStart, setInputStart] = useState<Date>(start)
  const [inputEnd, setInputEnd] = useState<Date>(end)

  useEffect(() => {
    const validateTimeframe = (start, end) => {
      if ((new Date(end).getTime() - new Date(start).getTime()) / YEAR > 1) {
        return "Please choose a timeframe that spans less than one year"
      }
      if (new Date(end).getTime() - new Date(start).getTime() < 0) {
        return "Please choose a date where the start is before the end"
      }
      return ""
    }
    setValidDateMessage(validateTimeframe(start, end))
  }, [start, end])

  return (
    <Card className="p-2">
      {validDateMessage !== "" && <WarningAlert>{validDateMessage}</WarningAlert>}
      <div>
        <Col className="gap-2 w-100 d-flex flex-row align-items-center justify-content-around">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center align-items-end gap-2">
            <label className="d-flex align-items-center">
              <p className="mb-0 me-1">Start:</p>
              <input
                type="date"
                id="start"
                name="start"
                max={getToday()}
                value={formatDate(inputStart)}
                onInput={(e) => setInputStart(new Date((e.target as HTMLInputElement).value))}
                required={true}
              />
            </label>

            <label className="d-flex align-items-center">
              <p className="mb-0 pe-1">End:</p>
              <input
                type="date"
                id="end"
                name="end"
                min={formatDate(inputStart)}
                max={graphFuture ? undefined : getToday()}
                value={formatDate(inputEnd)}
                onInput={(e) => setInputEnd(new Date((e.target as HTMLInputElement).value))}
                required={true}
              />
            </label>
          </div>
          <OverlayTrigger overlay={<Tooltip>Revert to default date</Tooltip>}>
            <Button
              onClick={() => {
                const revertStart = daysAgoRounded(7)
                const revertEnd = daysInFuture(0)

                setInputStart(revertStart)
                setInputEnd(revertEnd)
                handleStart(revertStart)
                handleEnd(revertEnd)
              }}
              className="bg-info"
            >
              <Revert fill="#FFFFFF" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={(props) => {
              return validDateMessage !== "" ? <Tooltip {...props}>{validDateMessage}</Tooltip> : <span />
            }}
          >
            <Button
              onClick={() => {
                handleStart(inputStart)
                handleEnd(inputEnd)
              }}
              disabled={!inputStart || !inputEnd || validDateMessage !== ""}
              className="bg-info"
            >
              Plot
            </Button>
          </OverlayTrigger>
        </Col>
      </div>
    </Card>
  )
}
