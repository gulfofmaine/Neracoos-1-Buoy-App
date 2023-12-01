"use client"
import React from "react"
import { ObservationChart } from "./chart"

export default function ObservedPlot({
  params: { platformId, standardName },
}: {
  params: { platformId: string; standardName: string }
}) {
  return (
    // <DehydratedPlatforms>
    <ObservationChart platformId={platformId} standardName={standardName} />
    // </DehydratedPlatforms>
  )
}
