import { Geometry } from "@turf/helpers"
import * as React from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { RenderProps } from "../Grabber"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

export class ErddapMoreInfoDropdown extends React.Component<RenderProps, State> {
  public state: State = initialState

  constructor(props: RenderProps) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  public render() {
    const { platform } = this.props
    const { coordinates } = platform.geometry as Geometry
    const forecastUrl = `https://marine.weather.gov/MapClick.php?lon=${coordinates[0]}&lat=${coordinates[1]}`

    return (
      <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          More info
        </DropdownToggle>

        <DropdownMenu>
          <a className="dropdown-item nav-item" href={forecastUrl} target="_blank" rel="noopener noreferrer">
            Marine Forecast
          </a>
          <a
            className="dropdown-item nav-item"
            href="https://tidesandcurrents.noaa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tides
          </a>
        </DropdownMenu>
      </Dropdown>
    )
  }

  private toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }
}
