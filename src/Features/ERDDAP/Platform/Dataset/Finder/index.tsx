import { SFC } from "react"

import { PlatformDataset, PlatformFeatureWithDatasets } from "../../../types"

interface Props {
  standardName: string
  platform: PlatformFeatureWithDatasets
  children(props: RenderProps): JSX.Element
}

interface RenderProps {
  datasets: PlatformDataset[]
}

export const ErddapDatasetFinder: SFC<Props> = ({ children, standardName, platform }) => {
  const datasets = platform.properties.readings.filter(r => r.data_type.standard_name === standardName)

  return children({ datasets })
}
