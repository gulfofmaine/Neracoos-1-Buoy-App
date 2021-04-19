import React from "react"
import { Route, RouteComponentProps, Switch } from "react-router"
import { useMeasure } from "react-use"
import { Col, Row } from "reactstrap"

import { ErddapMap, ErddapPlatformList } from "Features/ERDDAP"

import { paths, regionList } from "Shared/constants"
import { Region } from "Shared/regions"
import urlParams from "Shared/urlParams"

import { PlatformInfo } from "./platformInfo"
import { PlatformTabs, PlatformTabsProps } from "./platformTabs"
import { RootInfo } from "./rootInfo"
import { PlatformMatchParams } from "./types"

/**
 * Top level platform page. Displays region level platform selection if no platform is selected.
 */
export const PlatformsPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  const params = urlParams(props.location.search)

  const platformId = props.match.params.hasOwnProperty("id") ? (props.match.params as PlatformMatchParams).id : ""

  let region: Region | undefined

  if (params.region !== undefined) {
    region = regionList.find((r) => r.slug === params.region)
  }

  console.log(height)

  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 6 }}>
          <div ref={ref}>
            {/* Show list of platforms in a region if no platform is selected */}
            <Switch>
              <Route path={paths.platforms.root} exact={true}>
                <div>
                  <h2>Platforms in {region ? region.name : ""}</h2>
                  <ErddapPlatformList boundingBox={region?.bbox} />
                </div>
              </Route>
              <Route path={paths.platforms.platform} component={PlatformInfo} />
            </Switch>
          </div>
        </Col>

        <Col sm={{ size: true, order: 1 }}>
          <ErddapMap platformId={platformId} boundingBox={region?.bbox} height={region ? "80vh" : height} />
        </Col>
      </Row>

      <div style={{ marginTop: "1rem" }}>
        <Switch>
          <Route path={paths.platforms.observations}>
            {(props) => <PlatformTabs {...(props as PlatformTabsProps)} />}
          </Route>
          <Route path={paths.platforms.forecast}>{(props) => <PlatformTabs {...(props as PlatformTabsProps)} />}</Route>
          <Route path={paths.platforms.platform}>{(props) => <PlatformTabs {...(props as PlatformTabsProps)} />}</Route>
          <Route path={paths.platforms.all}>{(props) => <PlatformTabs {...(props as PlatformTabsProps)} />}</Route>

          <Route path={paths.platforms.root} exact={true} component={RootInfo} />

          <Route>{(props) => <PlatformTabs {...(props as PlatformTabsProps)} />}</Route>
        </Switch>
      </div>
    </React.Fragment>
  )
}

export default PlatformsPage
