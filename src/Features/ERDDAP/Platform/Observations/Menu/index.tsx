"use client"
/**
 * Dropdown menu for various types of observations
 */
import * as React from "react"
import Link from "next/link"
import { Dropdown, DropdownMenu, DropdownToggle, NavItem, NavLink } from "reactstrap"

import { paths } from "Shared/constants"
import { buildSearchParamsQuery, urlPartReplacer } from "Shared/urlParams"

import { DataType } from "../../../types"
import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { aWeekAgoRounded, getIsoForPicker, weeksInFuture } from "Shared/time"

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
export function ErddapObservedDropdown({ platform }: UsePlatformRenderProps) {
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
        .map((d) => JSON.stringify(d.data_type)),
    ),
  )
    .map((d) => JSON.parse(d) as DataType)
    .sort((a, b) => a.long_name.localeCompare(b.long_name))
    .map((d, index) => {
      const url = urlPartReplacer(
        urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
        ":type",
        d.standard_name,
      )

      return (
        <Link
          className="dropdown-item nav-item"
          key={index}
          href={{
            pathname: url,
            query: buildSearchParamsQuery(getIsoForPicker(aWeekAgoRounded()), getIsoForPicker(weeksInFuture(0))),
          }}
          onClick={close}
          role="menuitem"
        >
          {d.long_name}
        </Link>
      )
    })

  const windUrl = urlPartReplacer(
    urlPartReplacer(paths.platforms.observations, ":id", platform.id as string),
    ":type",
    "wind",
  )

  return (
    <Dropdown nav={true} isOpen={state.dropdownOpen} toggle={toggle} role="menu">
      <DropdownToggle nav={true} caret={true}>
        Observations
      </DropdownToggle>

      <DropdownMenu>
        <Link
          className="dropdown-item nav-item"
          href={urlPartReplacer(paths.platforms.all, ":id", platform.id as string)}
          role="menuitem"
        >
          <b>All Observations</b>
        </Link>
        {dropdownItems}
        {platform.properties.readings.filter((d) => windStandardNames.has(d.data_type.standard_name)).length > 0 ? (
          <Link
            className="dropdown-item nav-item"
            href={{
              pathname: windUrl,
              query: buildSearchParamsQuery(getIsoForPicker(aWeekAgoRounded()), getIsoForPicker(weeksInFuture(0))),
            }}
            onClick={close}
            role="menuitem"
          >
            Wind
          </Link>
        ) : null}
      </DropdownMenu>
    </Dropdown>
  )
}
