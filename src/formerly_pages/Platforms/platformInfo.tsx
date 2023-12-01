"use client"
import React, { useEffect, useState } from "react"

import { PlatformAlerts } from "Features/ERDDAP/Platform/Alerts"
import { ErddapPlatformInfoPanel } from "Features/ERDDAP/Platform/Info"
import { ErddapObservationTable } from "Features/ERDDAP/Platform/Observations/Table/table"
import { UsePlatform } from "Features/ERDDAP/hooks/BuoyBarnComponents"

import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

import { PlatformMatchParams } from "./types"

/**
 * Display our platform info panel for the select platform.
 */
export const PlatformInfo: React.FC<PlatformMatchParams> = ({ id }: PlatformMatchParams) => {
  const unitSystem = useUnitSystem()
  const aDayAgo = aDayAgoRounded()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return (
      <UsePlatform platformId={id}>
        {({ platform }) => (
          <React.Fragment>
            <PlatformAlerts platform={platform} />
            <ErddapPlatformInfoPanel platform={platform} />
            <ErddapObservationTable
              platform={platform}
              unitSelector={<UnitSelector />}
              unitSystem={unitSystem}
              laterThan={aDayAgo}
            />
          </React.Fragment>
        )}
      </UsePlatform>
    )
  }
  return null
}
