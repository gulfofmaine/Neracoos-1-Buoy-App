import { projectedTimeframeOptions, timeframeOptions } from "Shared/time"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { TimeframeSelector } from "./timeframeSelector"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const params = useParams()
  const startDate = new Date(params.startTime as string)
  const endDate = new Date(params.endTime as string)

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      <TimeframeSelector />
      {/* <TimeframeSelector
        timeframe={decodeURIComponent(params.projectedTimeframe as string)}
        projected={true}
        timeframeSelections={projectedTimeframeOptions}
      /> */}
      {sensor && <WaterLevelObservationBase platform={sensor} startTime={startDate} endTime={endDate} />}
    </div>
  )
}
