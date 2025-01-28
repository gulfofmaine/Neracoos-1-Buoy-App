import { usePlatforms } from "Features/ERDDAP/hooks"
import { useDefaultStringQueryParam } from "Shared/urlParams"
import { aWeekAgoRounded, daysAgoRounded, daysInFuture, formatDate } from "Shared/time"

import { Datums, PlatformFeatureCollection } from "../types"
import { conditions } from "../utils/conditions"

// Access and set the end time value for water level pages with a reasonable default if platform should show future data
export function useEndTime(graphFuture: boolean = false): { endTime: Date; setEndTime: (newQuery: string) => void } {
  const { value, setValue } = useDefaultStringQueryParam(
    "end",
    formatDate(graphFuture ? daysInFuture(3) : daysInFuture(0)),
  )

  return {
    endTime: new Date(value),
    setEndTime: setValue,
  }
}

// Access and set the start time value for water level pages with a reasonable default for how many days ago should be shown
export function useStartTime(isWaterLevel: boolean = false): {
  startTime: Date
  setStartTime: (newQuery: string) => void
} {
  const { value, setValue } = useDefaultStringQueryParam(
    "start",
    formatDate(isWaterLevel ? daysAgoRounded(2) : aWeekAgoRounded()),
  )

  return {
    startTime: new Date(value),
    setStartTime: setValue,
  }
}

// Access and set the datum value for water level pages with a reasonable default
export function useDatum(): { datum: Datums; setDatum: (newQuery: Datums) => void } {
  const { value, setValue } = useDefaultStringQueryParam("datum", Datums.MLLW)

  return { datum: (value || Datums.MLLW) as Datums, setDatum: setValue }
}

export const filterForSensors = (platforms: PlatformFeatureCollection) => {
  return platforms?.features.filter((p) => {
    return (
      p.properties.platform_type === "Tide Station" ||
      p.properties.platform_type === "Overland Flood" ||
      // p.properties.readings.find((r) => r.data_type.short_name === "SWL") ||
      p.properties.attribution[0]?.attribution === "Hohonu" ||
      conditions.waterLevel.find((c) => p.properties.readings.find((r) => r.data_type.standard_name === c))
    )
  })
}

// Return just the platforms with water level sensors
export const useWaterLevelPlatforms = () => {
  const { data } = usePlatforms()
  if (!data) {
    return undefined
  }

  return filterForSensors(data)
}
