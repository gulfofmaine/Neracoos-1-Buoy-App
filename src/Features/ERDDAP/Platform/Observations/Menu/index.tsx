import * as React from "react"
import { Link } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { paths } from "@app/constants"
import { urlPartReplacer } from "@app/Shared/urlParams"

import { DataType } from "../../../types"
import { RenderProps } from "../../Grabber"

const initialState = {
  dropdownOpen: false
}

type State = Readonly<typeof initialState>

const windStandardNames = new Set([
  "northward_wind",
  "eastward_wind",
  "wind_speed_of_gust",
  "wind_from_direction",
  "wind_speed"
])

export class ErddapObservedDropdown extends React.Component<RenderProps, State> {
  public state: State = initialState

  constructor(props: RenderProps) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  public render() {
    const { platform } = this.props

    const dropdownItems = Array.from(
      new Set(
        platform.properties.readings
          .filter(d => !windStandardNames.has(d.data_type.standard_name))
          .map(d => JSON.stringify(d.data_type))
      )
    )
      .map(d => JSON.parse(d) as DataType)
      .sort((a, b) => a.long_name.localeCompare(b.long_name))
      .map((d, index) => {
        const url = urlPartReplacer(
          urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
          ":type",
          d.standard_name
        )

        return (
          <Link className="dropdown-item nav-item" key={index} to={url}>
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
          {dropdownItems}
          {platform.properties.readings.filter(d => windStandardNames.has(d.data_type.standard_name)).length > 0 ? (
            <Link className="dropdown-item nav-item" to={windUrl}>
              Wind
            </Link>
          ) : null}
        </DropdownMenu>
      </Dropdown>
    )
  }

  private toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
}
