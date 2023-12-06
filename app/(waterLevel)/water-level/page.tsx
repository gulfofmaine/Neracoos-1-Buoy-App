"use client"
import { ErddapMap } from "Features/ERDDAP"
import { Suspense } from "react"

const WaterLevelFallback = () => <>Loading water level data...</>

export default function WaterLevelIndexPage() {
  return (
    <Suspense fallback={<WaterLevelFallback />}>
      {/* <div>Testing</div> */}
      <ErddapMap height={"80vh"} width="100%" />
    </Suspense>
  )
}
