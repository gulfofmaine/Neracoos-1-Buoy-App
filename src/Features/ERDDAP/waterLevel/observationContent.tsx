import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"

export const WaterLevelObservationContent = ({ sensorId, platforms}) => {
  const sensor = usePlatform(sensorId)

  return <div>{sensor ? <WaterLevelObservationBase platform={sensor} /> : null}</div>
}
