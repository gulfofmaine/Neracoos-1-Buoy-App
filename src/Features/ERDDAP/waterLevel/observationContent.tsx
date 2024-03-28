import { useParams } from "next/navigation"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { fullBeginningDateIso, manuallySetFullEODIso } from "Shared/time"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const params = useParams()
  const startTime = fullBeginningDateIso(new Date(decodeURIComponent(params.startTime as string)))
  const endTime = manuallySetFullEODIso(new Date(decodeURIComponent(params.endTime as string)))
  endTime?.setDate(endTime.getDate() + 1)

  return (
    <div>
      <WaterLevelSensorSelector platforms={platforms} />
      {sensor && <WaterLevelObservationBase platform={sensor} startTime={startTime} endTime={endTime} />}
    </div>
  )
}
