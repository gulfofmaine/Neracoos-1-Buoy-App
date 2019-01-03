import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { erddapDatasetsOrganizeLoadGroups } from "../../../actions"
import { PlatformDataset } from "../../../types"

interface Props {
  children: React.ReactNode
  platformId: string
  datasets: PlatformDataset[]
  startTime?: Date
  // endTime?: Date
}

interface ReduxProps {
  loadDatasets: (platformId: string, datasets: PlatformDataset[], startTime: Date, endTime?: Date) => void
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadDatasets: erddapDatasetsOrganizeLoadGroups
    },
    dispatch
  )

export const ErddapDatasetLoaderBase: React.SFC<Props & ReduxProps> = ({
  children,
  platformId,
  datasets,
  startTime,
  loadDatasets
}) => {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  startTime = startTime ? startTime : sevenDaysAgo

  const buffer = new Date(startTime.getTime())
  buffer.setHours(buffer.getHours() + 2) // Erddap will return values after our start time

  const datasetsToLoad = datasets.filter(
    dataset =>
      dataset.loading === false && // If the dataset isn't currently loading
      (dataset.readings.length === 0 || // and there aren't any readings
        !dataset.readings.some(reading => new Date(reading.time) < buffer)) // or there are no readings with values before the buffer time
  ) // these datasets should be loaded

  if (datasetsToLoad.length > 0) {
    loadDatasets(platformId, datasetsToLoad, startTime)
  }

  return <React.Fragment>{children}</React.Fragment>
}

export const ErddapDatasetLoader = connect(
  null,
  mapDispatchToProps
)(ErddapDatasetLoaderBase)
