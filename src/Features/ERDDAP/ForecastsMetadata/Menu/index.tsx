/**
 * Dropdown menu for accessing forecasts via buoy barn
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle, NavItem } from "reactstrap"

import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { useForecastMeta } from "../../hooks"
import { ForecastSource } from "../../types"

export interface Props {
  platformId: string
}

/**
 * Wraps and loads the forecast menu
 */
export const ForecastDropdown: React.FunctionComponent<Props> = ({ platformId }) => {
  const { isLoading, data } = useForecastMeta()

  if (isLoading) {
    return (
      <NavItem>
        <div className="nav-link">Forecasts loading</div>
      </NavItem>
    )
  }

  if (data) {
    return <ForecastDropdownBase platformId={platformId} forecasts={data} />
  }

  return (
    <NavItem>
      <div className="nav-link">Unable to load forecasts</div>
    </NavItem>
  )
}

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

interface BaseProps extends Props {
  forecasts: ForecastSource[]
}

/**
//  * Dropdown menu with links to the available forecasts.
 */
export class ForecastDropdownBase extends React.Component<BaseProps, State> {
  public state: State = initialState

  constructor(props: BaseProps) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
  }

  public render() {
    const { forecasts, platformId } = this.props

    const forecastNames = Array.from(new Set(forecasts.map((forecast) => forecast.forecast_type)))
    forecastNames.sort()

    const forecastItems = forecastNames.map((forecastType) => (
      <Link
        key={forecastType}
        className="dropdown-item nav-item"
        onClick={this.close}
        to={urlPartReplacer(
          urlPartReplacer(paths.platforms.forecastType, ":id", platformId),
          ":type",
          forecastType.toLowerCase().replace(/ /g, "_")
        )}
      >
        {forecastType}
      </Link>
    ))

    return (
      <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true} id="forecast">
          Forecasts
        </DropdownToggle>

        <DropdownMenu>{forecastItems}</DropdownMenu>
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
