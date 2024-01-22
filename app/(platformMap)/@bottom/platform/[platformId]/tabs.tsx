"use client"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap"

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
        <React.Fragment>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col>
              <Nav tabs={true}>
                <ErddapObservedDropdown {...platform_props} />
                <Tab to={paths.platforms.platform} path={path} name="Latest Conditions" id={platformId} />
                <ForecastDropdown platformId={platformId} />
                <ErddapMoreInfoDropdown {...platform_props} />
              </Nav>
            </Col>
          </Row>
        </React.Fragment>
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

  return (
    <NavItem>
      <NavLink
        tag={Link}
        href={urlPartReplacer(to, ":id", id)}
        className={to === path ? "nav-link active" : "nav-link"}
      >
        {name}
      </NavLink>
    </NavItem>
  )
}
