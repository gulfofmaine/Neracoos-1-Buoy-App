"use client"
import { Row, Col } from "react-bootstrap"

import { UsePlatform } from "Features/ERDDAP/hooks"
import { PlatformFeature } from "Features/ERDDAP/types"
import { ErddapCurrentPlatformConditions } from "Features/ERDDAP/Platform/Observations/CurrentConditions"
import {ErddapObservationCards} from "Features/ERDDAP/Platform/Observations/LatestObsCards/LatestObsCards"
import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

export function CurrentConditions({ platformId }: { platformId: string }) {
  const unitSystem = useUnitSystem()
  const aDayAgo = aDayAgoRounded()

  return (
    <UsePlatform platformId={platformId}>
      {({ platform }: { platform: PlatformFeature }) => {
        return (
          <Row className="align-items-start">
            <Col xs={12} md={9} className="mb-4 order-2 order-md-1">
              <ErddapCurrentPlatformConditions platform={platform} />
            </Col>
            <Col
              xs={12}
              md={3}
              className="d-flex flex-column order-1 order-md-2 mb-4 p-4 bg-black bg-opacity-5 rounded-3"
            >
              <ErddapObservationCards
                platform={platform}
                unitSelector={<UnitSelector />}
                unitSystem={unitSystem}
                laterThan={aDayAgo}
              />
            </Col>
          </Row>
        )
      }}
    </UsePlatform>
  )
}
