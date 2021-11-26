/**
 * Tabs that are displayed on a platform page.
 */

import React from "react"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap"

import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import {
  ErddapAllObservationsTable,
  ErddapMoreInfoDropdown,
  ErddapObservedDropdown,
  ForecastDropdown,
  UsePlatform,
} from "Features/ERDDAP"
import { useUnitSystem } from "Features/Units"

import { CurrentConditionsPage } from "./currentConditions"
import { ForecastTypePage } from "./forecastType"
import { ObservationsPage } from "./observations"
import { WindObservationsPage } from "./observationsWind"
import { PlatformMatchParams } from "./types"

/**
 * Display tab bar and tab data for individual platforms
 * @param param0 React-Router props
 */
export const PlatformTabs: React.FC<PlatformMatchParams> = ({ id }: PlatformMatchParams) => {
  const { pathname: path } = useLocation()
  const unitSystem = useUnitSystem()

  return (
    <UsePlatform platformId={id}>
      {(platform_props) => (
        <React.Fragment>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col>
              <Nav tabs={true}>
                <ErddapObservedDropdown {...platform_props} />
                <Tab to={paths.platforms.platform} path={path} name="Latest Conditions" id={id!} />
                <ForecastDropdown platformId={platform_props.platform.id as string} />
                <ErddapMoreInfoDropdown {...platform_props} />
              </Nav>
            </Col>
          </Row>

          {/* Display our pages for the platform. */}
          <Routes>
            <Route
              path={paths.platforms.all.replace(paths.platforms.root, "")}
              element={<ErddapAllObservationsTable {...platform_props} unitSystem={unitSystem} />}
            />
            <Route
              path={paths.platforms.observationsWind.replace(paths.platforms.root, "")}
              element={<WindObservationsPage {...platform_props} />}
            />
            <Route
              path={paths.platforms.observations.replace(paths.platforms.root, "")}
              element={<ObservationsPage {...platform_props} />}
            />
            <Route
              path={paths.platforms.forecastType.replace(paths.platforms.root, "")}
              element={<ForecastTypePage {...platform_props} />}
            />
            <Route path="*" element={<CurrentConditionsPage {...platform_props} />} />
          </Routes>
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
class Tab extends React.Component<TabProps, object> {
  public render() {
    const { to, name, path, id } = this.props

    return (
      <NavItem>
        <NavLink
          tag={Link}
          to={urlPartReplacer(to, ":id", id)}
          className={to === path ? "nav-link active" : "nav-link"}
        >
          {name}
        </NavLink>
      </NavItem>
    )
  }
}
