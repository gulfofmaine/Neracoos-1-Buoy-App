import { calcAnyHourAgoRounded, daysAgoRounded } from "Shared/time"

export type Timeframes = "24h" | "7d" | "30d" | "custom"
// An array of preset values
type TimeFrame = { label: string; value: Timeframes; start: () => Date }[]

export const possibleTimeframes = [
  { label: "Last 24 hours", value: "24h", start: () => calcAnyHourAgoRounded(24) },
  { label: "Last 7 days", value: "7d", start: () => daysAgoRounded(7) },
  { label: "Last 30 days", value: "30d", start: () => daysAgoRounded(30) },
] satisfies TimeFrame // Satisfies helps ensure that values are limited to the contract

export const getStartFunction = (val: string) => {
  return val === "24h" ? calcAnyHourAgoRounded(24) : val === "30d" ? daysAgoRounded(30) : daysAgoRounded(7)
}

export const getPresetLabel = (value: Timeframes) => {
  let label = possibleTimeframes.find((timeframe) => timeframe.value === value)?.label
  return label ? label : "Timeframes"
}
