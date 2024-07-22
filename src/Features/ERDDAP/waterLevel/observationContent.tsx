import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)

  return <div>{sensor ? <WaterLevelObservationBase platform={sensor} /> : null}</div>
}
