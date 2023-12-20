import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      {sensor && <WaterLevelObservationBase platform={sensor} />}
    </div>
  )
}
