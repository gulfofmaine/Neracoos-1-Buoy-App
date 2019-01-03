import * as React from "react"
import { Alert } from "reactstrap"

import { PlatformDataset, PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetStatus } from "../Status"

interface Props {
  standardName: string
  platform: PlatformFeatureWithDatasets
  children(props: RenderProps): JSX.Element
}

interface RenderProps {
  datasets: PlatformDataset[]
}

export const ErddapDatasetFinder: React.SFC<Props> = ({ children, standardName, platform }) => {
  const datasets = platform.properties.readings.filter(r => r.data_type.standard_name === standardName)

  if (datasets.length === 0) {
    return (
      <Alert color="danger">
        {platform.id as string} does not have any datasets matching {standardName}
      </Alert>
    )
  }

  return (
    <React.Fragment>
      <ErddapDatasetStatus datasets={datasets} />
      {children({ datasets })}
    </React.Fragment>
  )
}
