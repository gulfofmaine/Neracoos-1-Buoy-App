import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { forecastLoad } from "../../../actions"
import { ForecastSource, PlatformFeatureWithDatasets } from "../../../types"

interface Props {
  children: React.ReactNode
  forecasts: ForecastSource[]
  platform: PlatformFeatureWithDatasets
}

interface ReduxProps {
  loadForecast: (platform: PlatformFeatureWithDatasets, forecast: ForecastSource) => void
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadForecast: forecastLoad
    },
    dispatch
  )

export const ForecastLoaderBase: React.SFC<Props & ReduxProps> = ({ children, forecasts, platform, loadForecast }) => {
  forecasts.map(forecast => {
    const index = platform.properties.forecasts.findIndex(f => f.source === forecast)
    if (
      index < 0 ||
      (platform.properties.forecasts[index].loading === false &&
        platform.properties.forecasts[index].error.length < 1 &&
        platform.properties.forecasts[index].readings.length < 1)
    ) {
      loadForecast(platform, forecast)
    }
  })
  return <React.Fragment>{children}</React.Fragment>
}

export const ForecastLoader = connect(
  null,
  mapDispatchToProps
)(ForecastLoaderBase)
