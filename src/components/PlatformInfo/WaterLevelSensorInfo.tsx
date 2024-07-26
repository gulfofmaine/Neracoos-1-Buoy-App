"use client"
import React from "react"

import { PlatformAlerts } from "Features/ERDDAP/Platform/Alerts"
import { ErddapPlatformInfoPanel } from "Features/ERDDAP/Platform/Info"

import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

import { PlatformMatchParams } from "./types"
import { WaterLevelSensorSelector } from "Features/ERDDAP/waterLevel/sensorSelector"
import { WLErddapObservationTable } from "Features/ERDDAP/Platform/Observations/WaterLevel/WLErddapObservationTable"
import { UsePlatform, ErddapObservationTable } from "Features/ERDDAP"

/**
 * Display our platform info panel for the select platform.
 */
export const WaterLevelSensorInfo: React.FC<PlatformMatchParams> = ({ id, sensors }: PlatformMatchParams) => {
  const unitSystem = useUnitSystem()
  const aDayAgo = aDayAgoRounded()

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
          >
            <WaterLevelSensorSelector sensors={sensors} />
          </ErddapObservationTable>
        </React.Fragment>
      )}
    </UsePlatform>
  )
}
