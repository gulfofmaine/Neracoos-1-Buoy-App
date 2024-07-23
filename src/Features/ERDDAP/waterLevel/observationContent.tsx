import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { usePlatform } from "../hooks"
import { WaterLevelObservationBase } from "./observationBase"

export const WaterLevelObservationContent = ({ sensorId, platforms, allPlatforms }) => {
  const sensor = usePlatform(allPlatforms, sensorId)
  const searchParams = useSearchParams()

  return <div>{sensor ? <WaterLevelObservationBase platform={sensor} /> : null}</div>
}
