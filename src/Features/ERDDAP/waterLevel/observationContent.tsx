import { timeframeOptions } from "Shared/time"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { TimeframeSelector } from "./timeframeSelector"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const params = useParams()
  const [timeframe, setTimeframe] = useState<any>(
    timeframeOptions.find((t) => t.label === decodeURIComponent(params.timeframe as string)),
  )
  useEffect(() => {
    if (timeframe) {
      const timeframe = timeframeOptions.find((t) => t.label === decodeURIComponent(params.timeframe as string))
      setTimeframe(timeframe)
    }
  }, [timeframe])

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      <TimeframeSelector timeframe={decodeURIComponent(params.timeframe as string)} />
      {sensor && <WaterLevelObservationBase platform={sensor} timeframe={timeframe.function} />}
    </div>
  )
}
