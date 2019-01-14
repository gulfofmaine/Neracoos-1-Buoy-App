import * as React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { paths, StoreState } from "@app/constants"
import { urlPartReplacer } from "@app/Shared/urlParams"

import { ForecastSource } from "../../types"

const initialState = {
  dropdownOpen: false
}

type State = Readonly<typeof initialState>

export interface Props {
  platformId: string
}

export interface ReduxProps {
  forecasts: ForecastSource[]
}

function mapStateToProps({ erddap }: StoreState): ReduxProps {
  return {
    forecasts: erddap.forecasts.forecasts
  }
}

export class ForecastDropdownBase extends React.Component<Props & ReduxProps, State> {
  public state: State = initialState

  constructor(props: Props & ReduxProps) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  public render() {
    const { forecasts, platformId } = this.props

    const forecastNames = Array.from(new Set(forecasts.map(forecast => forecast.forecast_type)))
    forecastNames.sort()

    const forecastItems = forecastNames.map(forecastType => (
      <Link
        key={forecastType}
        className="dropdown-item nav-item"
        to={urlPartReplacer(
          urlPartReplacer(paths.platforms.forecastType, ":id", platformId),
          ":type",
          forecastType.toLowerCase().replace(" ", "_")
        )}
      >
        {forecastType}
      </Link>
    ))

    return (
      <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav={true} caret={true}>
          Forecasts
        </DropdownToggle>

        <DropdownMenu>{forecastItems}</DropdownMenu>
      </Dropdown>
    )
  }

  private toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
}

export const ForecastDropdown = connect(mapStateToProps)(ForecastDropdownBase)
