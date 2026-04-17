"use client"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { ErddapMap } from "../../src/Features/ERDDAP/Map"

export default function Layout({
  children,
  sidebar,
  belowMap,
  bottom,
}: {
  children: React.ReactNode
  sidebar: React.ReactNode
  bottom: React.ReactNode
  belowMap: React.ReactNode
}) {
  const path = usePathname()
  const isPlatformView = path.startsWith("/platform")
  const isRegionView = path.startsWith("/region")
  const params: { regionId?: string; platformId?: string } = useParams()
  const platformId = params.platformId
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  //Removing warning in console re:Highcharts library defaultProps. Not an active warning for us--until this issues is solved on Highcharts' end, keep this to remove huge console error
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  return (
    <React.Fragment>
      <Row className="g-5 align-items-stretch">
        <Col xs={12} md={6} className="order-2 d-flex">
          <div className="platform-map-layout flex-fill">
            {/* Second div layer decouples sidebar from map to allow for scrolling */}
            <div className={isRegionView ? "h-60" : ""}>{sidebar}</div>
          </div>
        </Col>

        <Col xs={12} md={6} className="order-1 d-flex flex-column">
          <div className="platform-map-layout flex-fill">
            <ErddapMap
              // Pass minimum height requirement only on landing page
              className={`${!(isPlatformView || isRegionView) ? "landing-min-height" : ""} map`}
              {...(isPlatformView && { platformId })}
            />
          </div>

          {/* Below Map = Superlatives */}
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {/* Bottom = Platform obs data */}
      <Row className="mt-4 d-flex justify-content-center">
        {(isPlatformView && isClient && bottom) ?? <React.Fragment>{bottom}</React.Fragment>}
      </Row>
    </React.Fragment>
  )
}
