"use client"
/**
 * Dropdown menu for accessing forecasts via buoy barn
 */
import * as React from "react"
import Link from "next/link"
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
export function ForecastDropdownBase({ forecasts, platformId }: BaseProps) {
  const [state, setState] = React.useState<State>(initialState)

  const toggle = () => {
    setState((currentState) => ({
      dropdownOpen: !currentState.dropdownOpen,
    }))
  }

  const close = () => {
    setState({
      dropdownOpen: false,
    })
  }

  const forecastNames = Array.from(new Set(forecasts.map((forecast) => forecast.forecast_type)))
  forecastNames.sort()

  const forecastItems = forecastNames.map((forecastType) => (
    <Link
      key={forecastType}
      className="dropdown-item nav-item"
      onClick={close}
      href={urlPartReplacer(
        urlPartReplacer(paths.platforms.forecastType, ":id", platformId),
        ":type",
        forecastType.toLowerCase().replace(/ /g, "_"),
      )}
    >
      {forecastType}
    </Link>
  ))

  return (
    <Dropdown nav={true} isOpen={state.dropdownOpen} toggle={toggle}>
      <DropdownToggle nav={true} caret={true} id="forecast">
        Forecasts
      </DropdownToggle>

      <DropdownMenu>{forecastItems}</DropdownMenu>
    </Dropdown>
  )
}
