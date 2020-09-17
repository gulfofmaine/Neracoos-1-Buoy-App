import * as React from "react"
import { UncontrolledAlert } from "reactstrap"

import { PlatformFeature } from "../../types"

interface Props {
  platform: PlatformFeature
}

export const PlatformAlerts: React.FunctionComponent<Props> = ({ platform }) => (
  <React.Fragment>
    {platform.properties.alerts.map((alert, index) => (
      <UncontrolledAlert key={index} color={alert.level.toLowerCase()}>
        <span dangerouslySetInnerHTML={{ __html: alert.message }} />
      </UncontrolledAlert>
    ))}
  </React.Fragment>
)
