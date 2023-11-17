"use client"
import { ErddapMap } from "Features/ERDDAP/Map"
import { useParams, usePathname } from "next/navigation"
import * as React from "react"
import { Col, Row } from "reactstrap"

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
  const params: { regionId?: string } = useParams()

  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>
          <div style={{ marginBottom: ".5rem" }}>{sidebar}</div>
        </Col>

        <Col sm={{ size: true, order: 1 }}>
          <ErddapMap height={params.regionId ? "80vh" : "60vh"} width="100%" />
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {(path.startsWith("/platform") && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
