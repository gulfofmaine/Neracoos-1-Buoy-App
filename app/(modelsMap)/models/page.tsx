"use client"
import React, { Suspense } from "react"
import { ModelingPage } from "./modeling"

const StacMapFallback = () => <>Loading modeling data...</>


export default function ModelingIndexPage() {

    return (
      <Suspense fallback={<StacMapFallback />}>
        <ModelingPage />
      </Suspense>
    )
}
