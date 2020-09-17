import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservationTable, ErddapPlatformGetter, ErddapPlatformInfoPanel, PlatformAlerts } from "Features/ERDDAP"
import { UnitSelector, useUnitSystem } from "Features/Units"

import { PlatformMatchParams } from "./types"

/**
 * Display our platform info panel for the select platform.
 */
export const PlatformInfo: React.FunctionComponent<RouteComponentProps> = ({ match }) => {
  const { id } = match.params as PlatformMatchParams
  const unit_system = useUnitSystem()

  return (
    <ErddapPlatformGetter platformId={id}>
      {({ platform }) => (
        <React.Fragment>
          <PlatformAlerts platform={platform} />
          <ErddapPlatformInfoPanel platform={platform} />
          <ErddapObservationTable platform={platform} unitSelector={<UnitSelector />} unit_system={unit_system} />
        </React.Fragment>
      )}
    </ErddapPlatformGetter>
  )
}
