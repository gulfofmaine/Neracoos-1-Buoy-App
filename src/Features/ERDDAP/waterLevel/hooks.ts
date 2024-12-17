import { useStringQueryParam } from "Shared/urlParams"
import {
    aDayAgoRounded,
    daysAgoRounded,
    daysInFuture,
    fullBeginningDateIso,
    getIsoForPicker,
    manuallySetFullEODIso,
  } from "Shared/time"
import { Datums } from "../types"

export function useEndTime(): {endTime: Date, setEndTime: (newQuery: string) => void} {
    const [value, setValue] =  useStringQueryParam("end")

    return {endTime: new Date(value || getIsoForPicker(daysInFuture(3))), setEndTime: setValue}
}

export function useStartTime(): {startTime: Date, setStartTime: (newQuery: string) => void} {
    const [value, setValue] = useStringQueryParam("start")

    return {startTime: new Date(value || getIsoForPicker(daysAgoRounded(2))), setStartTime: setValue}
}

export function useDatum(): {datum: Datums, setDatum: (newQuery: Datums) => void} {
    const [value, setValue] = useStringQueryParam("datum")

    return {datum: (value || Datums.MLLW) as Datums, setDatum: setValue}
}
