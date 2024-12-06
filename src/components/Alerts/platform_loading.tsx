import { PlatformTimeSeries } from "Features/ERDDAP/types"

import { LoadingAlert } from "./loading"

export const PlatformLoadingAlert = ({ time_series }: { time_series: PlatformTimeSeries }) => (
  <LoadingAlert>Loading {time_series.type} dataset</LoadingAlert>
)
