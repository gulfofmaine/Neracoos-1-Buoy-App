"use client"
import { Row, Col } from "react-bootstrap"

import { UsePlatform } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapCurrentPlatformConditions } from "Features/ERDDAP/Platform/Observations/CurrentConditions"

export function CurrentConditions({ platformId }: { platformId: string }) {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }: { platform: PlatformFeature }) => {
        return (
          <Row className="align-items-start px-0">
            <Col xs={12} md={12} className="mb-4">
              <ErddapCurrentPlatformConditions platform={platform} />
            </Col>
          </Row>
        )
      }}
    </UsePlatform>
  )
}
