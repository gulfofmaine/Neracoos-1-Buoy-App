import { useStringQueryParam } from "Shared/urlParams"
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
  const [value, setValue] = useStringQueryParam("end")

  return {
    endTime: new Date(value || getIsoForPicker(graphFuture ? daysInFuture(3) : daysInFuture(0))),
    setEndTime: setValue,
  }
}

export function useStartTime(isWaterLevel: boolean = false): {
  startTime: Date
  setStartTime: (newQuery: string) => void
} {
  const [value, setValue] = useStringQueryParam("start")

  return {
    startTime: new Date(value || getIsoForPicker(isWaterLevel ? daysAgoRounded(2) : aWeekAgoRounded())),
    setStartTime: setValue,
  }
}

export function useDatum(): { datum: Datums; setDatum: (newQuery: Datums) => void } {
  const [value, setValue] = useStringQueryParam("datum")

  return { datum: (value || Datums.MLLW) as Datums, setDatum: setValue }
}
