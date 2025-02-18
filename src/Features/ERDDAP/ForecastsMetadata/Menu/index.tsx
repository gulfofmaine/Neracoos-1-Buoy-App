"use client"
/**
 * Dropdown menu for accessing forecasts via buoy barn
 */
import * as React from "react"
import Link from "next/link"
import Dropdown from "react-bootstrap/Dropdown"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

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
      <Nav.Item>
        <div className="nav-link">Forecasts loading</div>
      </Nav.Item>
    )
  }

  if (data) {
    return <ForecastDropdownBase platformId={platformId} forecasts={data} />
  }

  return (
    <Nav.Item>
      <div className="nav-link">Unable to load forecasts</div>
    </Nav.Item>
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
    <Dropdown as={Nav.Item} isOpen={state.dropdownOpen} toggle={toggle}>
      <Dropdown.Toggle as={Nav.Link} id="forecast">
        Forecasts
      </Dropdown.Toggle>

      <Dropdown.Menu>{forecastItems}</Dropdown.Menu>
    </Dropdown>
  )
}
