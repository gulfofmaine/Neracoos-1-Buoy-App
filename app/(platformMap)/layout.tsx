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
  const params: { regionId?: string; platformId?: string } = useParams()
  let [ref, { height }] = useMeasure<HTMLDivElement>()
  const platformId = params.platformId

  if (height < 420) {
    height = 420
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>
          <div ref={ref} style={{ marginBottom: ".5rem" }}>
            {sidebar}
          </div>
        </Col>

        <Col sm={{ size: true, order: 1 }}>
          <ErddapMap height={params.regionId ? "80vh" : height} width="100%" {...(path !== "/" && { platformId })} />
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {(path.startsWith("/platform") && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
