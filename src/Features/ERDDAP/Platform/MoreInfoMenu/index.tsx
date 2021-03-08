/**
 * Show more info about a platform
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { Geometry } from "@turf/helpers"
import React from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

/**
 * Dropdown menu to more info about a platform
 */
export class ErddapMoreInfoDropdown extends React.Component<UsePlatformRenderProps, State> {
  public state: State = initialState

  constructor(props: UsePlatformRenderProps) {
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
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: ".5rem" }} />
          </a>
          <a
            className="dropdown-item nav-item"
            href="https://tidesandcurrents.noaa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tides
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: ".5rem" }} />
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
