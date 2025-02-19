/**
 * Show more info about a platform
 */
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { Point } from "geojson"
import { useEffect, useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import Nav from "react-bootstrap/Nav"

import { UsePlatformRenderProps } from "../../hooks/BuoyBarnComponents"

const initialState = {
  dropdownOpen: false,
}

type State = Readonly<typeof initialState>

/**
 * Dropdown menu to more info about a platform
 */
export function ErddapMoreInfoDropdown({ platform }: UsePlatformRenderProps) {
  const [dynamicLinks, setDynamicLinks] = useState()

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
    <Dropdown as={Nav.Item} role="menu">
      <Dropdown.Toggle as={Nav.Link}>
        More info
      </Dropdown.Toggle>

      <Dropdown.Menu>
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
      </Dropdown.Menu>
    </Dropdown>
  )
}
