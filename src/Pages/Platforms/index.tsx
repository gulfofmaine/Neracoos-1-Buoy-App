import * as React from "react"
import { Route, RouteComponentProps, Switch } from "react-router"
import { Col, Row } from "reactstrap"

import { ErddapMap, ErddapPlatformList, ErddapPlatformsLoader } from "Features/ERDDAP"

import { paths, regionList } from "Shared/constants"
import { Region } from "Shared/regions"
import urlParams from "Shared/urlParams"

import { PlatformInfo } from "./platformInfo"
import { PlatformTabs } from "./platformTabs"
import { RootInfo } from "./rootInfo"
import { PlatformMatchParams } from "./types"

/**
 * Top level platform page. Displays region level platform selection if no platform is selected.
 */
export class PlatformsPage extends React.Component<RouteComponentProps, object> {
  public render() {
    const params = urlParams(this.props.location.search)

    const platformId = this.props.match.params.hasOwnProperty("id")
      ? (this.props.match.params as PlatformMatchParams).id
      : ""

    let regions: Region[] = []

    if (params.region !== undefined) {
      regions = regionList.filter(r => r.slug === params.region)
    }

    return (
      <ErddapPlatformsLoader>
        <Row>
          <Col sm={{ size: true, order: 6 }}>
            {/* Show list of platfroms in a region if no platform is selected */}
            <Switch>
              <Route path={paths.platforms.root} exact={true}>
                <div>
                  <h2>Platforms in {regions.length > 0 ? regions[0].name : ""}</h2>
                  <ErddapPlatformList boundingBox={regions.length > 0 ? regions[0].bbox : undefined} />
                </div>
              </Route>
              <Route path={paths.platforms.platform} component={PlatformInfo} />
            </Switch>
          </Col>

          <Col sm={{ size: true, order: 1 }}>
            <ErddapMap platformId={platformId} boundingBox={regions.length > 0 ? regions[0].bbox : undefined} />
          </Col>
        </Row>

        <div style={{ marginTop: "1rem" }}>
          {/* Show general platform info if no platform is selected */}
          <Switch>
            <Route path={paths.platforms.observations}>{props => <PlatformTabs {...props} />}</Route>
            <Route path={paths.platforms.forecast}>{props => <PlatformTabs {...props} />}</Route>
            <Route path={paths.platforms.platform}>{props => <PlatformTabs {...props} />}</Route>
            <Route path={paths.platforms.all}>{props => <PlatformTabs {...props} />}</Route>

            <Route path={paths.platforms.root} exact={true} component={RootInfo} />
          </Switch>
        </div>
      </ErddapPlatformsLoader>
    )
  }
}

export default PlatformsPage
