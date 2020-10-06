import { useRouter } from "next/router"
import React from "react"
import { Col, Row } from "reactstrap"

import { UsePlatform, PlatformAlerts, ErddapPlatformInfoPanel, ErddapObservationTable } from "Features/ERDDAP"
import { UnitSelector, useUnitSystem } from "Features/Units"

import { MapLayout } from "../Map"
import { PlatformTabs } from "./Tabs"
import { platform } from "os"

interface PlatformLayoutProps {
  pageName?: string
}

export const PlatformLayout: React.FC<PlatformLayoutProps> = ({ children, pageName }) => {
  const { query } = useRouter()
  const unitSystem = useUnitSystem()

  const platformId = query.id as string

  return (
    <MapLayout
      pageName={pageName ?? platformId}
      rightCol={
        <UsePlatform platformId={platformId}>
          {({ platform }) => (
            <React.Fragment>
              <PlatformAlerts platform={platform} />
              <ErddapPlatformInfoPanel platform={platform} />
              <ErddapObservationTable platform={platform} unitSelector={<UnitSelector />} unitSystem={unitSystem} />
            </React.Fragment>
          )}
        </UsePlatform>
      }
    >
      <Row>
        <Col>
          <UsePlatform platformId={platformId}>{({ platform }) => <PlatformTabs platform={platform} />}</UsePlatform>
        </Col>
      </Row>

      {children}
    </MapLayout>
  )
}
