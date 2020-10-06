/**
 * Dropdown menu for various types of observations
 */
import Link from "next/link"
import React from "react"
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
          <Link href={url} key={index}>
            <a className="dropdown-item nav-item" onClick={this.close}>
              {d.long_name}
            </a>
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
          <Link href={urlPartReplacer(paths.platforms.all, ":id", platform.id as string)}>
            <a className="dropdown-item nav-item">
              <b>All Observations</b>
            </a>
          </Link>
          {dropdownItems}
          {platform.properties.readings.filter((d) => windStandardNames.has(d.data_type.standard_name)).length > 0 ? (
            <Link href={windUrl}>
              <a className="dropdown-item nav-item" onClick={this.close}>
                Wind
              </a>
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
