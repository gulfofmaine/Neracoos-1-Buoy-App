/**
 * Display the current loading and error status of datasets
 */
import * as React from "react"
import { Alert } from "reactstrap"

import { PlatformDataset } from "../../../types"

interface Props {
  datasets: PlatformDataset[]
}

/**
 * Display the current loading and error status of datasets
 * @param datasets
 */
export const ErddapDatasetStatus: React.SFC<Props> = ({ datasets }) => {
  const loading = Array.from(new Set(datasets.filter(d => d.loading).map(d => d.data_type.long_name)))
  let loadingString: string
  if (loading.length > 1) {
    loadingString = `Currently loading ${loading.slice(0, -1).join(", ")}, and ${loading.slice(-1)[0]} datasets.`
  } else if (loading.length === 1) {
    loadingString = `Currently loading ${loading[0]} dataset.`
  } else {
    loadingString = ""
  }

  const errors = datasets
    .filter(d => d.error.length > 0)
    .map((d, key) => (
      <Alert key={key} color="warning">
        Error loading {d.data_type.long_name}: {d.error}
      </Alert>
    ))

  return (
    <React.Fragment>
      {errors}
      {loading.length > 0 ? <Alert color="info">{loadingString}</Alert> : null}
      {process.env.NODE_ENV === "development" ? <Alert>Development info: Data loaded from ERDDAP</Alert> : null}
    </React.Fragment>
  )
}
