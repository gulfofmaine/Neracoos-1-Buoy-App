import React from "react"
import { useSearchParams, useLocation, matchPath, useNavigate } from "react-router-dom"
import { useMeasure } from "react-use"
import { Col, Row } from "reactstrap"

import { ErddapMap, ErddapPlatformList } from "Features/ERDDAP"

import { paths, regionList } from "Shared/constants"
import { Region } from "Shared/regions"

import { PlatformInfo } from "./platformInfo"
import { PlatformTabs } from "./platformTabs"
import { RootInfo } from "./rootInfo"
import { urlPartReplacer } from "Shared/urlParams"

/**
 * Top level platform page. Displays region level platform selection if no platform is selected.
 */
export const PlatformsPage: React.FC = () => {
  // Because we are matching /platform/* we need to figure out if
  // We are actually matching for /platform/:id
  // but react-router 6 does not make that as easy,
  // since <Routes> isn't hierarchal like a <Switch>
  const location = useLocation()
  const navigate = useNavigate()
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  let [searchParams, setSearchParams] = useSearchParams()

  const match = matchPath({ path: paths.platforms.platform_tailing }, location.pathname)
  const platformId = match?.params.id ?? ""

  // Redirect when a 5 character NDBC ID was part of the URL
  const splitPlatformID = platformId.split(" - ")
  if (splitPlatformID.length === 2 && splitPlatformID[1].length === 5) {
    const basePlatformId = splitPlatformID[0]
    const url = urlPartReplacer(paths.platforms.platform, ":id", basePlatformId)

    console.log(`Should redirect from ${platformId} to ${basePlatformId}: ${url}`)
    navigate(url)
  }

  let region: Region | undefined
  const paramsRegion = searchParams.get("region")

  if (paramsRegion !== null) {
    region = regionList.find((r) => r.slug === paramsRegion)
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>
          <div ref={ref} style={{ marginBottom: ".5rem" }}>
            {platformId ? <PlatformInfo id={platformId} /> : null}
            {region ? (
              <div>
                <h2>Platforms in {region ? region.name : ""}</h2>
                <ErddapPlatformList boundingBox={region?.bbox} />
              </div>
            ) : null}
          </div>
        </Col>

        <Col sm={{ size: true, order: 1 }}>
          <ErddapMap platformId={platformId} boundingBox={region?.bbox} height={region ? "80vh" : height} />
        </Col>
      </Row>

      <div style={{ marginTop: "1rem" }}>{platformId ? <PlatformTabs id={platformId} /> : <RootInfo />}</div>
    </React.Fragment>
  )
}

export default PlatformsPage
