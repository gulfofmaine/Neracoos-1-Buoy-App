import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

import { ErddapObservationTable, ErddapPlatformGetter, ErddapPlatformInfoPanel, PlatformAlerts } from "Features/ERDDAP"

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
          {({ platform }) => (
            <React.Fragment>
              <PlatformAlerts platform={platform} />
              <ErddapPlatformInfoPanel platform={platform} />
              <ErddapObservationTable platform={platform} />
            </React.Fragment>
          )}
        </ErddapPlatformGetter>
      </div>
    )
  }
}
