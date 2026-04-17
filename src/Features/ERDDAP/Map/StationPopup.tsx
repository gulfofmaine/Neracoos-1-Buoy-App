import * as React from "react"

import { useUnitSystem } from "Features/Units"
import { converter } from "Features/Units/Converter"
import { round } from "Shared/math"
import { aDayAgoRounded } from "Shared/time"
import { UsePlatform } from "Features/ERDDAP/hooks/BuoyBarnComponents"
import { currentConditionsTimeseries } from "../utils/currentConditionsTimeseries"
import { PlatformFeature, PlatformTimeSeries } from "../types"
import { DataTypeConversion } from "Features/Units/Converter/conversions"
import { UnitSystem } from "Features/Units/types"

interface Props {
  platformId: string
}

interface DataRendererProps {
  platform: PlatformFeature
}

type popupData = {
  name: string | undefined
  value: number | string
  unit_converter: DataTypeConversion
}

const getPopupData = (data: PlatformTimeSeries, unitSystem: UnitSystem): popupData => {
  const shortNameThreshold: number = 50
  let name = data.data_type.long_name.length > shortNameThreshold ? data.data_type.short_name : data.data_type.long_name

  if (data.depth && data.depth > 0) {
    name = `${name} @ ${data.depth}m`
  }

  const unit_converter = converter(data.data_type.standard_name)
  const value = unit_converter.convertTo(data.value as number, unitSystem)

  return { name: name, unit_converter: unit_converter, value: value }
}

const getTimes = (data: PlatformTimeSeries[]): Date[] => {
  const times = data.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  return times.sort((a, b) => a.valueOf() - b.valueOf())
}

const StationName = ({ platform }: DataRendererProps) => {
  return (
    <p className="m-0 d-flex justify-content-start">
      <strong>Station: {platform.id}</strong>
    </p>
  )
}

const PopupMetric = ({ data }: { data: PlatformTimeSeries }) => {
  const unitSystem = useUnitSystem()
  const popupData: popupData = getPopupData(data, unitSystem)
  const value = popupData.value

  return (
    <div className="caption d-flex flex-row gap-1">
      <strong>{popupData.name}</strong>
      <span>{typeof value === "number" ? round(value as number, 1) : value}</span>
      <span>{popupData.unit_converter.displayName(unitSystem)}</span>
    </div>
  )
}

const LastUpdated = ({ allData }: { allData: PlatformTimeSeries[] }) => {
  const times = getTimes(allData)
  if (times.length <= 0) {
    return null
  }
  const timeVal = times[times.length - 1].toLocaleString(undefined, {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    month: "short",
    day: "numeric",
  })

  return (
    <span className="caption d-flex gap-1">
      <strong>Last updated:</strong>
      <span> {timeVal}</span>
    </span>
  )
}

const DataRenderer = ({ platform }: DataRendererProps) => {
  const limit = 2
  let { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, aDayAgoRounded())
  allCurrentConditionsTimeseries = allCurrentConditionsTimeseries.slice(0, limit)
  return (
    <React.Fragment>
      <LastUpdated allData={allCurrentConditionsTimeseries} />
      {allCurrentConditionsTimeseries.map((timeSeries, index) => (
        <PopupMetric key={index} data={timeSeries} />
      ))}
    </React.Fragment>
  )
}

export const StationPopup = ({ platformId }: Props) => {
  return (
    <UsePlatform platformId={platformId}>
      {({ platform }) => (
        <div className="d-flex flex-column justify-content-start">
          <StationName platform={platform} />
          <DataRenderer platform={platform} />
        </div>
      )}
    </UsePlatform>
  )
}
