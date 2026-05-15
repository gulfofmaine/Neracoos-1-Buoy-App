import { Button, ButtonGroup, ButtonGroupProps, ButtonProps } from "react-bootstrap"

import { calcAnyHourAgoRounded, daysAgoRounded, daysInFuture } from "Shared/time"

import { TimeFrameRange } from "../types"

type TimeframeButtonGroupProps = ButtonGroupProps & {
  onTimeframeChange: (range: TimeFrameRange) => void
}
type TimeframeButtonProps = ButtonProps & {
  handlePresetDates: (start: Date) => void
  start: Date
}

const TimeframeButton = ({ start, handlePresetDates, children, ...props }: TimeframeButtonProps) => {
  return (
    <Button
      onClick={() => {
        handlePresetDates(start)
      }}
      variant="light"
      {...props}
    >
      {children}
    </Button>
  )
}

export const TimeframeButtonGroup = ({ onTimeframeChange, ...props }: TimeframeButtonGroupProps) => {
  const handlePresetDates = (start: Date) => {
    onTimeframeChange({ start, end: daysInFuture(0) })
  }

  return (
    <ButtonGroup {...props}>
      <TimeframeButton start={calcAnyHourAgoRounded(24)} handlePresetDates={handlePresetDates}>
        Last 24 hours
      </TimeframeButton>
      <TimeframeButton start={daysAgoRounded(7)} handlePresetDates={handlePresetDates}>
        Last 7 days
      </TimeframeButton>
      <TimeframeButton start={daysAgoRounded(30)} handlePresetDates={handlePresetDates}>
        Last 30 days
      </TimeframeButton>
    </ButtonGroup>
  )
}
