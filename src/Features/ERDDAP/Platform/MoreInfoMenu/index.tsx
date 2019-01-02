import { Geometry } from "@turf/helpers"
import * as React from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"

import { RenderProps } from "../Grabber"

const initialState = {
  dropdownOpen: false
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
    const id = platform.id as string
    const { coordinates } = platform.geometry as Geometry
    const forecastUrl = `https://marine.weather.gov/MapClick.php?lon=${coordinates[0]}&lat=${coordinates[1]}`

    return (
      <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          More info
        </DropdownToggle>

        <DropdownMenu>
          <a className="dropdown-item nav-item" href={"http://neracoos.org/datatools/realtime/all_data?platform=" + id}>
            All Data From This Station
          </a>
          <a
            className="dropdown-item nav-item"
            href={"http://neracoos.org/datatools/realtime/compare_stations?platform=" + id}
          >
            Compare Stations
          </a>
          <a className="dropdown-item nav-item" href="http://neracoos.org/datatools/historical/graphing_download">
            Graphing and Download
          </a>
          <a
            className="dropdown-item nav-item"
            href={"http://neracoos.org/datatools/realtime/12_hour_history?platform=" + id}
          >
            12 Hour History
          </a>
          <a className="dropdown-item nav-item" href={"http://neracoos.org/datatools/realtime/location?platform=" + id}>
            Station Description
          </a>
          <a
            className="dropdown-item nav-item"
            href={"http://neracoos.org/datatools/realtime/quick_history?platform=" + id}
          >
            Quick History
          </a>
          <a className="dropdown-item nav-item" href="http://neracoos.org/datatools/realtime/data_types">
            Explanation of Data Types
          </a>
          <DropdownItem divider={true} />
          <a className="dropdown-item nav-item" href={forecastUrl}>
            Marine Forecast
          </a>
          <a className="dropdown-item nav-item" href="https://tidesandcurrents.noaa.gov/">
            Tides
          </a>
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
