"use client"
import * as React from "react"
import { Col, Row } from "reactstrap"
import { useMeasure } from "react-use"
import { usePathname } from "next/navigation"

import { Map } from "./map"

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
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  const path = usePathname()

  return (
    <React.Fragment>
      <Row>
        <Col sm={{ size: true, order: 2 }}>
          <div ref={ref} style={{ marginBottom: ".5rem" }}>
            {sidebar}
          </div>
        </Col>

        <Col sm={{ size: true, order: 1 }}>
          <Map height={height} />
          {belowMap ?? <React.Fragment>{belowMap}</React.Fragment>}
        </Col>
      </Row>

      {(path.startsWith("/platform") && bottom) ?? <Row>{bottom}</Row>}
    </React.Fragment>
  )
}
