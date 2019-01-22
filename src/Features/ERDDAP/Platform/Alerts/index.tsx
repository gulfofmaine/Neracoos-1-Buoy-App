import * as React from "react"
import { UncontrolledAlert } from "reactstrap"

import { PlatformFeatureWithDatasets } from "../../types"

interface Props {
  platform: PlatformFeatureWithDatasets
}

export const PlatformAlerts: React.SFC<Props> = ({ platform }) => (
  <React.Fragment>
    {platform.properties.alerts.map((alert, index) => (
      <UncontrolledAlert key={index} color={alert.level.toLowerCase()}>
        <span dangerouslySetInnerHTML={{ __html: alert.message }} />
      </UncontrolledAlert>
    ))}
  </React.Fragment>
)
