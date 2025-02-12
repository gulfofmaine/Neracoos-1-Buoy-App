"use client"
import React, { use } from "react"
import { ObservationChart } from "./chart"

export default function ObservedPlot(props: { params: Promise<{ platformId: string; standardName: string }> }) {
  const params = use(props.params)

  const { platformId, standardName } = params

  return <ObservationChart platformId={platformId} standardName={standardName} />
}
