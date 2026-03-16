/**
 * Show more info about a platform
 */
import Icon from "Shared/icons/iconComponent"
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
          <Icon iconName="externalLinkAltIcon" className="fa-xs ms-2" />
        </a>
      ))
      setDynamicLinks(links)
    }
  }, [platform])

  const { coordinates } = platform.geometry as Point
  const forecastUrl = `https://marine.weather.gov/MapClick.php?lon=${coordinates[0]}&lat=${coordinates[1]}`

  return (
    <Dropdown as={Nav.Item} role="menu">
      <Dropdown.Toggle as={Nav.Link}>More info</Dropdown.Toggle>

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
          <Icon iconName="externalLinkAltIcon" className="fa-xs ms-2" />
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
          <Icon iconName="externalLinkAltIcon" className="fa-xs ms-2" />
        </a>
      </Dropdown.Menu>
    </Dropdown>
  )
}
