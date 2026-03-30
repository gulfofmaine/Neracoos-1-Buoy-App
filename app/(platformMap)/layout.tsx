"use client"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import { useMeasure } from "react-use"
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
  const params: { regionId?: string; platformId?: string } = useParams()
  let [ref, { height }] = useMeasure<HTMLDivElement>()
  const platformId = params.platformId
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (height < 420) {
    height = 420
  }

  //Removing warning in console re:Highcharts library defaultProps. Not an active warning for us--until this issues is solved on Highcharts' end, keep this to remove huge console error
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  return (
    <React.Fragment>
      <Row className="g-5">
        <Col xs={12} md={6} className="order-2">
          <div ref={ref}>{sidebar}</div>
        </Col>

        <Col xs={12} md={6} className="order-1">
          <ErddapMap height={params.regionId ? "80vh" : height} {...(isPlatformView && { platformId })} />
        </Col>
        {belowMap ?? (
          <Col xs={12} md={12} className="order-3">
            {belowMap}
          </Col>
        )}
      </Row>

      {(isPlatformView && isClient && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
