"use client"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { Dropdown, Navbar, Nav } from "react-bootstrap"

import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { ForecastDropdown } from "Features/ERDDAP/ForecastsMetadata/Menu"
import { ErddapMoreInfoDropdown } from "Features/ERDDAP/Platform/MoreInfoMenu/index"
import { ErddapObservedDropdown } from "Features/ERDDAP/Platform/Observations/Menu"
import { UsePlatform } from "Features/ERDDAP/hooks/BuoyBarnComponents"
import { useDecodedUrl } from "util/hooks"

export function PlatformTabs() {
  const path = usePathname()
  const { platformId }: { platformId?: string } = useParams()
  const id = useDecodedUrl(platformId as string)

  if (typeof platformId === "undefined" || !path.startsWith("/platform")) {
    return null
  }

  return (
    <UsePlatform platformId={id}>
      {(platform_props) => (
        <div className="d-flex flex-row mb-4 bg-black bg-opacity-5 mid-page-nav-container">
          <Navbar collapseOnSelect expand="sm" className="w-100">
            <Navbar.Toggle className="dropdown-toggle w-100">
              <strong>Station Options</strong>
            </Navbar.Toggle>

            <Navbar.Collapse>
              <Nav className="w-100 mid-page-nav">
                <Tab to={paths.platforms.platform} path={path} name="Last 24 Hours" id={platformId} />
                <ErddapObservedDropdown {...platform_props} />
                <ForecastDropdown platformId={platformId} />
                <ErddapMoreInfoDropdown {...platform_props} />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
    </UsePlatform>
  )
}

interface TabProps {
  to: string
  id: string
  name: string
  path: string
}

/**
 * Mini component for Tabs that are part of the navbar.
 */
// tslint:disable-next-line:max-classes-per-file
function Tab(props: TabProps) {
  const { to, name, path, id } = props
  const linkTarget = urlPartReplacer(to, ":id", id)

  return (
    <Nav.Item>
      <Nav.Link as={Link} href={linkTarget} className={`${linkTarget === path && "mid-page-nav-active text-white"}`}>
        <strong>{name}</strong>
      </Nav.Link>
    </Nav.Item>
  )
}
