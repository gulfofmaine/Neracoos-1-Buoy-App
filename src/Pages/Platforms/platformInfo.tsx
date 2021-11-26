import React from "react"

import { ErddapObservationTable, ErddapPlatformInfoPanel, PlatformAlerts, UsePlatform } from "Features/ERDDAP"
import { UnitSelector, useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

import { PlatformMatchParams } from "./types"

/**
 * Display our platform info panel for the select platform.
 */
export const PlatformInfo: React.FC<PlatformMatchParams> = ({ id }: PlatformMatchParams) => {
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
          />
        </React.Fragment>
      )}
    </UsePlatform>
  )
}
