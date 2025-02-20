/**
 * Show alert messages based on data from buoy barn
 */
import * as React from "react"
import Alert from "react-bootstrap/Alert"

import { PlatformFeature } from "../../types"

interface Props {
  platform: PlatformFeature
}

/**
 * Show alert messages based on data from buoy barn for platforms.
 */
export const PlatformAlerts: React.FunctionComponent<Props> = ({ platform }) => (
  <React.Fragment>
    {platform.properties.alerts.map((alert, index) => (
      <Alert dismissible={true} key={index} color={alert.level.toLowerCase()}>
        <span dangerouslySetInnerHTML={{ __html: alert.message }} />
      </Alert>
    ))}
  </React.Fragment>
)
