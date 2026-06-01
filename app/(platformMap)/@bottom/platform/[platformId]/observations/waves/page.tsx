import { DehydratedPlatforms } from "Features/ERDDAP/hooks/DehydrateComponent"

import { WavesCharts } from "./chart"
import React from "react"

export default async function WavePlots(props: { params: Promise<{ platformId: string }> }) {
  const params = await props.params

  const { platformId } = params

  return (
    <DehydratedPlatforms>
      <WavesCharts platformId={platformId} />
    </DehydratedPlatforms>
  )
}
