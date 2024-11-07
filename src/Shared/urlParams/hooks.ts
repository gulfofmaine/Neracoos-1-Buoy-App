"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getIsoForPicker, daysAgoRounded } from "Shared/time"

/**
 * Set of custom hooks to take care of setting state for url params
 */

export const useStartTime = (newStartTime?) => {
  const searchParams = useSearchParams()
  const [startDate, setStartDate] = useState(searchParams.get("start") || getIsoForPicker(daysAgoRounded(2)))

  useEffect(() => {
    console.log("is this running", startTime, newStartTime)
    setStartTime(newStartTime)
  }, [newStartTime])

  return [startTime, setStart]
}

export const useEndTime = () => {}

export const useDatum = () => {}
