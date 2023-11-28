"use client"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { useMeasure } from "react-use"
import { Col, Row } from "reactstrap"
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

  if (height < 420) {
    height = 420
  }

  return (
    <React.Fragment>
      <Row>
        <Col xs={{ size: "12", order: "2" }} md={{ size: "6", order: "2" }}>
          <div ref={ref} style={{ marginBottom: ".5rem" }}>
            {sidebar}
          </div>
        </Col>

        <Col xs={{ size: "12", order: `${isPlatformView ? "2" : "1"}` }} md={{ size: "6", order: "1" }}>
          <ErddapMap height={params.regionId ? "80vh" : height} width="100%" {...(isPlatformView && { platformId })} />
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {(isPlatformView && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
