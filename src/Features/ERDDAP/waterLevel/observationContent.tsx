import { useParams, useSearchParams } from "next/navigation"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"
import { WaterLevelSensorSelector } from "./sensorSelector"
import { fullBeginningDateIso, manuallySetFullEODIso } from "Shared/time"
import { useEffect, useState } from "react"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const searchParams = useSearchParams()

  const [cleanedSearchParams, setCleanedSearchParams] = useState({
    startTime: searchParams.get("start"),
    endTime: searchParams.get("end"),
  })
  const [startTime, setStartTime] = useState<Date>(
    fullBeginningDateIso(new Date(cleanedSearchParams.startTime as string)),
  )
  const [endTime, setEndTime] = useState<Date>(manuallySetFullEODIso(new Date(cleanedSearchParams.endTime as string)))

  useEffect(() => {
    setStartTime(fullBeginningDateIso(new Date(cleanedSearchParams.startTime as string)))
    setEndTime(manuallySetFullEODIso(new Date(cleanedSearchParams.endTime as string)))
  }, [cleanedSearchParams])

  console.log(manuallySetFullEODIso(new Date(cleanedSearchParams.endTime as string)))

  useEffect(() => {
    setCleanedSearchParams({
      startTime: searchParams.get("start"),
      endTime: searchParams.get("end"),
    })
  }, [searchParams])

  // useEffect(() => {
  //   const endTime = manuallySetFullEODIso(new Date(decodeURIComponent(cleanedSearchParams.endTime as string)))
  //   endTime?.setDate(endTime.getDate() + 1)
  // }, [cleanedSearchParams])

  // const startTime = fullBeginningDateIso(new Date(decodeURIComponent(params.startTime as string)))
  // const endTime = manuallySetFullEODIso(new Date(decodeURIComponent(params.endTime as string)))
  // endTime?.setDate(endTime.getDate() + 1)

  //REMEMBER TO ADD A DAY TO ENDTIME AFTER REFACTOR - I think this is done

  return (
    // <p>Hello</p>
    <div>
      {sensor && startTime && endTime ? (
        <WaterLevelObservationBase
          platform={sensor}
          startTime={fullBeginningDateIso(new Date(decodeURIComponent(cleanedSearchParams.startTime as string)))}
          endTime={manuallySetFullEODIso(new Date(decodeURIComponent(cleanedSearchParams.endTime as string)))}
        />
      ) : null}
    </div>
  )
}
