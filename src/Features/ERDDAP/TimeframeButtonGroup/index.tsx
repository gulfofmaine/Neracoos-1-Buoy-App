import {
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
  DropdownButton,
  DropdownButtonProps,
  ToggleButtonGroupProps,
} from "react-bootstrap"

import { Timeframes, possibleTimeframes, getPresetLabel } from "./timeframes"

type TimeframeToggleGroupProps = ToggleButtonGroupProps<Timeframes> & {}
type TimeframeDropdownProps = Omit<DropdownButtonProps, "children" | "title"> & {
  id: string
  value: Timeframes
  handleChange: (val: Timeframes) => void
}

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
      <ToggleButton id="timeframe-custom" value="custom" variant="light" className="border text-black-20">
        Custom...
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export const TimeframeDropdown = ({ id, value, handleChange, ...props }: TimeframeDropdownProps) => {
  return (
    <DropdownButton
      id={id}
      title={getPresetLabel(value)}
      variant="light"
      // When selecting a dropdown change the timeframe
      onSelect={(key) => key && handleChange(key as Timeframes)}
      {...props}
    >
      {possibleTimeframes.map(({ label, value }) => (
        <Dropdown.Item key={value} eventKey={value}>
          {label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  )
}
