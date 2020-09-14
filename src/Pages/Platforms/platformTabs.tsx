/**
 * Tabs that are displayed on a platform page.
 */

import React from "react"
import { Link, match, Route, RouteComponentProps, Switch } from "react-router-dom"
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap"

import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import {
  ErddapAllObservationsTable,
  ErddapMoreInfoDropdown,
  ErddapObservedDropdown,
  ErddapPlatformGetter,
  ForecastDropdown,
  ForecastMetadataLoader,
} from "Features/ERDDAP"
import { useUnitSystem } from "Features/Units"

import { CurrentConditionsPage } from "./currentConditions"
import { ForecastTypePage, ForecastTypePageProps } from "./forecastType"
import { ObservationsPage, ObservationPageProps } from "./observations"
import { WindObservationsPage } from "./observationsWind"

export interface PlatformTabsProps extends RouteComponentProps {
  match: match<{ id: string }>
}

/**
 * Display tab bar and tab data for individual platforms
 * @param param0 React-Router props
 */
export const PlatformTabs: React.SFC<PlatformTabsProps> = ({ match }) => {
  const { id } = match.params
  const { path } = match
  const unit_system = useUnitSystem()

  return (
    <ErddapPlatformGetter platformId={id}>
      {(platform_props) => (
        <React.Fragment>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col>
              <Nav tabs={true}>
                <ErddapObservedDropdown {...platform_props} />

                <Tab to={paths.platforms.platform} path={path} name="Latest Conditions" id={id} />
                <ForecastMetadataLoader>
                  <React.Fragment>
                    <ForecastDropdown platformId={platform_props.platform.id as string} />
                  </React.Fragment>
                </ForecastMetadataLoader>

                <ErddapMoreInfoDropdown {...platform_props} />
              </Nav>
            </Col>
          </Row>

          {/* Display our pages for the platform. */}
          <Switch>
            <Route path={paths.platforms.all}>
              {(props) => <ErddapAllObservationsTable {...platform_props} unit_system={unit_system} />}
            </Route>
            <Route path={paths.platforms.observationsWind}>
              <WindObservationsPage {...platform_props} />
            </Route>
            <Route path={paths.platforms.observations}>
              {(route_props) => <ObservationsPage {...(route_props as ObservationPageProps)} {...platform_props} />}
            </Route>
            <Route path={paths.platforms.forecastType}>
              {(route_props) => <ForecastTypePage {...(route_props as ForecastTypePageProps)} {...platform_props} />}
            </Route>
            <Route path={paths.platforms.platform}>
              <CurrentConditionsPage {...platform_props} />
            </Route>
          </Switch>
        </React.Fragment>
      )}
    </ErddapPlatformGetter>
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
