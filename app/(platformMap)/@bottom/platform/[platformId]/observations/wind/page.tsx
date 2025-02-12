import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { WindChart } from "./chart"
import React from "react"

export default async function WindPlot(props: { params: Promise<{ platformId: string }> }) {
  const params = await props.params

  const { platformId } = params

  return (
    <DehydratedPlatforms>
      <WindChart platformId={platformId} />
    </DehydratedPlatforms>
  )
}
