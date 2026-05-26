"use client"
import React from "react"

import { PlatformAlerts } from "Features/ERDDAP/Platform/Alerts"
import { ErddapPlatformInfoPanel } from "Features/ERDDAP/Platform/Info"
import { ErddapObservationCards } from "Features/ERDDAP/Platform/Observations/LatestObsCards/LatestObsCards"
import { UsePlatform } from "Features/ERDDAP/hooks/BuoyBarnComponents"
import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

import RegionIndexSidebar from "../../../app/(platformMap)/@sidebar/region/page"

/**
 * Display our platform info panel for the select platform.
 */
export const PlatformInfo = ({ id }: { id: string }) => {
  const unitSystem = useUnitSystem()
  const aDayAgo = aDayAgoRounded()
  return (
    <UsePlatform platformId={id} fallback={<RegionIndexSidebar />}>
      {({ platform }) => (
        <div className="d-flex flex-column gap-2">
          <PlatformAlerts platform={platform} />
          <ErddapPlatformInfoPanel platform={platform} />
          <ErddapObservationCards
            platform={platform}
            unitSelector={<UnitSelector />}
            unitSystem={unitSystem}
            laterThan={aDayAgo}
          />
        </div>
      )}
    </UsePlatform>
  )
}
