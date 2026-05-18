import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps } from "react-bootstrap"

import { Timeframes, possibleTimeframes } from "./timeframes"

type TimeframeToggleGroupProps = ToggleButtonGroupProps<Timeframes> & {}

export const TimeframeButtonGroup = ({ ...props }: TimeframeToggleGroupProps) => {
  return (
    <ToggleButtonGroup {...props}>
      {possibleTimeframes.map(({ label, value }) => (
        <ToggleButton
          key={value}
          id={`timeframe-${value}`}
          value={value}
          variant="light"
          className="border text-black-20"
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
