import { timeframeOptions } from "Shared/time"
import { useState } from "react"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { TimeframeSelector } from "./timeframeSelector"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const [timeframe, setTimeframe] = useState(timeframeOptions.threeDays)

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      <TimeframeSelector setTimeframe={setTimeframe} timeframe={timeframe} />
      {sensor && <WaterLevelObservationBase platform={sensor} timeframe={timeframe.function} />}
    </div>
  )
}
