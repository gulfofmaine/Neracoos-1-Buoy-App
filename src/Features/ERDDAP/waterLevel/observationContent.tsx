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
  const [timeframe, setTimeframe] = useState<any>(
    timeframeOptions.find((t) => t.label === decodeURIComponent(params.timeframe as string)),
  )
  const [projectedTimeframe, setProjectedTimeframe] = useState<any>(
    projectedTimeframeOptions.find((t) => t.label === decodeURIComponent(params.projectedTimeframe as string)),
  )

  useEffect(() => {
    if (timeframe) {
      const timeframe = timeframeOptions.find((t) => t.label === decodeURIComponent(params.timeframe as string))
      setTimeframe(timeframe)
    }
    if (projectedTimeframe) {
      const timeframe = projectedTimeframeOptions.find(
        (t) => t.label === decodeURIComponent(params.projectedTimeframe as string),
      )
      setProjectedTimeframe(timeframe)
    }
  }, [timeframe, projectedTimeframe])

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      <TimeframeSelector
        timeframe={decodeURIComponent(params.timeframe as string)}
        projected={false}
        timeframeSelections={timeframeOptions}
      />
      <TimeframeSelector
        timeframe={decodeURIComponent(params.projectedTimeframe as string)}
        projected={true}
        timeframeSelections={projectedTimeframeOptions}
      />
      {sensor && (
        <WaterLevelObservationBase
          platform={sensor}
          timeframe={timeframe.function}
          projectedTimeframe={projectedTimeframe.function}
        />
      )}
    </div>
  )
}
