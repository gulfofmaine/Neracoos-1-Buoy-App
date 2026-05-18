import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps, ToggleButtonProps } from "react-bootstrap"

import { calcAnyHourAgoRounded, daysAgoRounded, daysInFuture } from "Shared/time"

import { TimeFrameRange } from "../types"

type Timeframes = "24h" | "7d" | "30d"
type TimeframeToggleGroupProps = ToggleButtonGroupProps<Timeframes> & {
  onTimeframeChange: (range: TimeFrameRange) => void
}
type TimeframeToggleProps = ToggleButtonProps & {
  handlePresetDates: (start: Date) => void
  start: Date
}

const TimeframeButton = ({ start, handlePresetDates, children, ...props }: TimeframeToggleProps) => {
  return (
    <ToggleButton
      onClick={() => {
        handlePresetDates(start)
      }}
      variant="light"
      className="border text-black-20"
      {...props}
    >
      {children}
    </ToggleButton>
  )
}

export const TimeframeButtonGroup = ({ onTimeframeChange, ...props }: TimeframeToggleGroupProps) => {
  const handlePresetDates = (start: Date) => {
    onTimeframeChange({ start, end: daysInFuture(0) })
  }

  return (
    <ToggleButtonGroup {...props}>
      <TimeframeButton
        id="timeframe-24h"
        value="24h"
        start={calcAnyHourAgoRounded(24)}
        handlePresetDates={handlePresetDates}
      >
        Last 24 hours
      </TimeframeButton>
      <TimeframeButton id="timeframe-7d" value="7d" start={daysAgoRounded(7)} handlePresetDates={handlePresetDates}>
        Last 7 days
      </TimeframeButton>
      <TimeframeButton id="timeframe-30d" value="30d" start={daysAgoRounded(30)} handlePresetDates={handlePresetDates}>
        Last 30 days
      </TimeframeButton>
    </ToggleButtonGroup>
  )
}
