import React from "react"
import { Col, Row } from "reactstrap"

import { ErddapMap } from "Features/ERDDAP"
import { BoundingBox } from "Shared/regions"

import { BaseLayout } from "./Base"

interface MapLayoutProps {
  pageName?: string
  belowMap?: React.ReactNode
  rightCol: React.ReactNode
  platformId?: string
  boundingBox?: BoundingBox
}

export const MapLayout: React.FC<MapLayoutProps> = ({
  belowMap,
  boundingBox,
  children,
  pageName,
  platformId,
  rightCol,
}) => (
  <BaseLayout pageName={pageName}>
    <Row>
      <Col sm={6}>
        <ErddapMap platformId={platformId ?? ""} boundingBox={boundingBox} />
        {belowMap}
      </Col>

      <Col sm={6}>{rightCol}</Col>
    </Row>
    {children}
  </BaseLayout>
)
