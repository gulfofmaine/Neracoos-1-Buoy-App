import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservationTable, ErddapPlatformGetter, ErddapPlatformInfoPanel, PlatformAlerts } from "Features/ERDDAP"
import { UnitSelector } from "Features/Units"

import { PlatformMatchParams } from "./types"

/**
 * Display our platform info panel for the select platform.
 */
export class PlatformInfo extends React.Component<RouteComponentProps, object> {
  public render() {
    const { id } = this.props.match.params as PlatformMatchParams

    return (
      <div>
        <ErddapPlatformGetter platformId={id}>
          {({ platform, unit_system }) => (
            <React.Fragment>
              <PlatformAlerts platform={platform} />
              <ErddapPlatformInfoPanel platform={platform} unit_system={unit_system} />
              <ErddapObservationTable platform={platform} unit_system={unit_system} unitSelector={<UnitSelector />} />
            </React.Fragment>
          )}
        </ErddapPlatformGetter>
      </div>
    )
  }
}
