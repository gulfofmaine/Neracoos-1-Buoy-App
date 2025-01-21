import { useDefaultStringQueryParam } from "Shared/urlParams"
import {
  aDayAgoRounded,
  aWeekAgoRounded,
  daysAgoRounded,
  daysInFuture,
  fullBeginningDateIso,
  formatDate,
  manuallySetFullEODIso,
} from "Shared/time"
import { Datums } from "../types"

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
