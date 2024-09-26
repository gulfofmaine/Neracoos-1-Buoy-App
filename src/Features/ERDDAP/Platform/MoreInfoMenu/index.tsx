/**
 * Show more info about a platform
 */
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { Point } from "geojson"
import { useEffect, useState } from "react"
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

/**
 * Dropdown menu to more info about a platform
 */
export function ErddapMoreInfoDropdown({ platform }: UsePlatformRenderProps) {
  const [state, setState] = useState<State>(initialState)
  const [dynamicLinks, setDynamicLinks] = useState()

  const toggle = () => {
    setState((currentState) => ({
      dropdownOpen: !currentState.dropdownOpen,
    }))
  }

  useEffect(() => {
    if (platform) {
      const links = platform.properties.links?.map((link, index) => (
        <a
          className="dropdown-item nav-item"
          style={{ display: "flex", alignItems: "center" }}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
          key={`dynamic-link-#${index}`}
        >
          {link.title}
          <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: "12px", marginLeft: ".5rem" }} />
        </a>
      ))
      setDynamicLinks(links)
    }
  }, [platform])

  const { coordinates } = platform.geometry as Point
  const forecastUrl = `https://marine.weather.gov/MapClick.php?lon=${coordinates[0]}&lat=${coordinates[1]}`

  return (
    <Dropdown nav={true} isOpen={state.dropdownOpen} toggle={toggle} role="menu">
      <DropdownToggle nav={true} caret={true}>
        More info
      </DropdownToggle>

      <DropdownMenu>
        {dynamicLinks}
        <a
          className="dropdown-item nav-item"
          style={{ display: "flex", alignItems: "center" }}
          href={forecastUrl}
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
        >
          Marine Forecast
          <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: "12px", marginLeft: ".5rem" }} />
        </a>
        <a
          className="dropdown-item nav-item"
          style={{ display: "flex", alignItems: "center" }}
          href="https://tidesandcurrents.noaa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
        >
          Tides
          <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: "12px", marginLeft: ".5rem" }} />
        </a>
      </DropdownMenu>
    </Dropdown>
  )
}
