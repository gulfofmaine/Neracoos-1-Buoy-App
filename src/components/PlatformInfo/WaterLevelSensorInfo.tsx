"use client"
import React from "react"

import { PlatformAlerts } from "Features/ERDDAP/Platform/Alerts"
import { ErddapPlatformInfoPanel } from "Features/ERDDAP/Platform/Info"
import { WLErddapObservationTable } from "Features/ERDDAP/Platform/Observations/WaterLevel/WLErddapObservationTable"
import { WaterLevelSensorSelector } from "Features/ERDDAP/waterLevel/sensorSelector"
import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

import type { PlatformMatchParams } from "./types"

/**
 * Display our platform info panel for the select platform.
 */
export const WaterLevelSensorInfo: React.FC<PlatformMatchParams> = ({ platform, sensors }: PlatformMatchParams) => {
  const unitSystem = useUnitSystem()
  const aDayAgo = aDayAgoRounded()

  return (
    <React.Fragment>
      <PlatformAlerts platform={platform} />
      <ErddapPlatformInfoPanel platform={platform} />
      <WLErddapObservationTable
        platform={platform}
        unitSelector={<UnitSelector />}
        unitSystem={unitSystem}
        laterThan={aDayAgo}
      >
        <WaterLevelSensorSelector sensors={sensors} />
      </WLErddapObservationTable>
    </React.Fragment>
  )
}
