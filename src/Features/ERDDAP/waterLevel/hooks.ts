import { useDefaultStringQueryParam } from "Shared/urlParams"
import {
  aDayAgoRounded,
  aWeekAgoRounded,
  daysAgoRounded,
  daysInFuture,
  fullBeginningDateIso,
  getIsoForPicker,
  manuallySetFullEODIso,
} from "Shared/time"
import { Datums } from "../types"

export function useEndTime(graphFuture: boolean = false): { endTime: Date; setEndTime: (newQuery: string) => void } {
  const { value, setValue } = useDefaultStringQueryParam(
    "end",
    getIsoForPicker(graphFuture ? daysInFuture(3) : daysInFuture(0)),
  )

  return {
    endTime: new Date(value),
    setEndTime: setValue,
  }
}

export function useStartTime(isWaterLevel: boolean = false): {
  startTime: Date
  setStartTime: (newQuery: string) => void
} {
  const { value, setValue } = useDefaultStringQueryParam(
    "start",
    getIsoForPicker(isWaterLevel ? daysAgoRounded(2) : aWeekAgoRounded()),
  )

  return {
    startTime: new Date(value),
    setStartTime: setValue,
  }
}

export function useDatum(): { datum: Datums; setDatum: (newQuery: Datums) => void } {
  const { value, setValue } = useDefaultStringQueryParam("datum", Datums.MLLW)

  return { datum: (value || Datums.MLLW) as Datums, setDatum: setValue }
}
