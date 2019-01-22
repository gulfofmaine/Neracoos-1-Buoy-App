/**
 * Tabs that are displayed on a platform page.
 */

import * as React from "react"
import { Link, Route, RouteComponentProps, Switch } from "react-router-dom"
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap"

import { paths } from "@app/constants"
import { urlPartReplacer } from "@app/Shared/urlParams"

import {
  ErddapMoreInfoDropdown,
  ErddapObservedDropdown,
  ErddapPlatformGetter,
  ForecastDropdown,
  ForecastMetadataLoader
} from "@app/Features/ERDDAP"

import { CurrentConditionsPage } from "./currentConditions"
import { ForecastTypePage } from "./forecastType"
import { ObservationsPage } from "./observations"
import { WindObservationsPage } from "./observationsWind"
import { PlatformMatchParams } from "./types"

/**
 * Display tab bar and tab data for individual platforms
 * @param param0 React-Router props
 */
export const PlatformTabs: React.SFC<RouteComponentProps> = ({ match }) => {
  const { id } = match.params as PlatformMatchParams
  const { path } = match

  return (
    <ErddapPlatformGetter platformId={id}>
      {({ platform }) => (
        <React.Fragment>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col>
              <Nav tabs={true}>
                <ErddapObservedDropdown platform={platform} />

                <Tab to={paths.platforms.platform} path={path} name="Current Conditions" id={id} />
                <ForecastMetadataLoader>
                  <React.Fragment>
                    <ForecastDropdown platformId={platform.id as string} />
                  </React.Fragment>
                </ForecastMetadataLoader>

                <ErddapMoreInfoDropdown platform={platform} />
              </Nav>
            </Col>
          </Row>

          {/* Display our pages for the platform. */}
          <Switch>
            <Route path={paths.platforms.observationsWind}>
              <WindObservationsPage platform={platform} />
            </Route>
            <Route path={paths.platforms.observations}>
              {props => <ObservationsPage {...props} platform={platform} />}
            </Route>
            <Route path={paths.platforms.forecastType}>
              {props => <ForecastTypePage {...props} platform={platform} />}
            </Route>
            <Route path={paths.platforms.platform}>
              <CurrentConditionsPage platform={platform} />
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
