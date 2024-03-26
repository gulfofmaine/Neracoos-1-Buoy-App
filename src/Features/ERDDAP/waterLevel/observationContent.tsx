import { useParams } from "next/navigation"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { TimeframeSelector } from "./timeframeSelector"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const params = useParams()
  const startTime = new Date(params.startTime as string)
  const endTime = new Date(params.endTime as string)

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      {sensor && <WaterLevelObservationBase platform={sensor} startTime={startTime} endTime={endTime} />}
    </div>
  )
}
