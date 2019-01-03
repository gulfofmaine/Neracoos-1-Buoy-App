import * as React from "react"
import { Alert } from "reactstrap"

import { PlatformDataset } from "../../../types"

interface Props {
  datasets: PlatformDataset[]
}

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
      <Alert key={key}>
        Error loading {d.data_type.long_name}: {d.error}
      </Alert>
    ))

  return (
    <React.Fragment>
      {errors}
      {/* { errors.length > 0 ? ( { errors.map((d, key) => (<Alert color="warning" key={key}>Error loading {d.data_type.long_name}: {d.error}</Alert>))}) : null} */}
      {loading.length > 0 ? <Alert>{loadingString}</Alert> : null}
      <Alert>Data loaded from ERDDAP</Alert>
    </React.Fragment>
  )
}
