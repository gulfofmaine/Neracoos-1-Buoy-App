/**
 * Dropdown menu for various types of observations
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle, NavItem, NavLink } from "reactstrap"

import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { DataType } from "../../../types"
import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

const windStandardNames = new Set([
  "northward_wind",
  "eastward_wind",
  "wind_speed_of_gust",
  "wind_from_direction",
  "wind_speed",
])

/**
 * Dropdown menu for various types of observations
 */
export class ErddapObservedDropdown extends React.Component<UsePlatformRenderProps, State> {
  public state: State = initialState

  constructor(props: UsePlatformRenderProps) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
  }

  public render() {
    const { platform } = this.props

    if (platform.properties.readings.length === 0) {
      return (
        <NavItem>
          <NavLink disabled={true}>No Observations available</NavLink>
        </NavItem>
      )
    }

    const dropdownItems = Array.from(
      new Set(
        platform.properties.readings
          .filter((d) => !windStandardNames.has(d.data_type.standard_name))
          .map((d) => JSON.stringify(d.data_type))
      )
    )
      .map((d) => JSON.parse(d) as DataType)
      .sort((a, b) => a.long_name.localeCompare(b.long_name))
      .map((d, index) => {
        const url = urlPartReplacer(
          urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
          ":type",
          d.standard_name
        )

        return (
          <Link className="dropdown-item nav-item" key={index} to={url} onClick={this.close}>
            {d.long_name}
          </Link>
        )
      })

    const windUrl = urlPartReplacer(
      urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
      ":type",
      "wind"
    )

    return (
      <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          Observations
        </DropdownToggle>

        <DropdownMenu>
          <Link
            className="dropdown-item nav-item"
            to={urlPartReplacer(paths.platforms.all, ":id", platform.id as string)}
          >
            <b>All Observations</b>
          </Link>
          {dropdownItems}
          {platform.properties.readings.filter((d) => windStandardNames.has(d.data_type.standard_name)).length > 0 ? (
            <Link className="dropdown-item nav-item" to={windUrl} onClick={this.close}>
              Wind
            </Link>
          ) : null}
        </DropdownMenu>
      </Dropdown>
    )
  }

  private toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  private close() {
    this.setState({
      dropdownOpen: false,
    })
  }
}
