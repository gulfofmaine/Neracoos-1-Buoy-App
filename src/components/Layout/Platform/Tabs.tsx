import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

import { PATHS } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import { ErddapMoreInfoDropdown, ErddapObservedDropdown, ForecastDropdown } from "Features/ERDDAP"
import { PlatformFeature } from "Features/ERDDAP/types"

interface PlatformTabsProps {
  platform: PlatformFeature
}

export const PlatformTabs: React.FC<PlatformTabsProps> = ({ platform }) => (
  <Nav tabs={true}>
    <ErddapObservedDropdown platform={platform} />
    <Tab to={PATHS.platforms.platform} name="Latest Conditions" id={platform.id} />
    <ForecastDropdown platformId={platform.id} />
    <ErddapMoreInfoDropdown platform={platform} />
  </Nav>
)

interface TabProps {
  to: string
  id: string
  name: string
}

const Tab: React.FC<TabProps> = ({ to, id, name }) => {
  const { pathname } = useRouter()
  const url = urlPartReplacer(to, "[id]", id)

  return (
    <NavItem>
      <Link href={url}>
        <NavLink className={to === pathname ? "nav-link active" : "nav-link"}>{name}</NavLink>
      </Link>
    </NavItem>
  )
}
