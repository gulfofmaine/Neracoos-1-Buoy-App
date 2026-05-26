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
import { getGroupData } from "../Platform/Observations/LatestObsCards/latestObs"
import { LocationArrowIcon } from "Shared/icons/iconsMap"
import { group } from "node:console"

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

const PopupMetric = ({ data }: { data: PlatformTimeSeries }) => {
  const unitSystem = useUnitSystem()
  const popupData: popupData = getPopupData(data, unitSystem)
  const value = popupData.value

  return (
    <div className="caption d-flex flex-row gap-1">
      <strong>{`${popupData.name}:`}</strong>
      <span>{typeof value === "number" ? round(value as number, 1) : value}</span>
      <span>{popupData.unit_converter.displayName(unitSystem)}</span>
    </div>
  )
}

const MetricsWithGroups = ({ data }: { data: PlatformTimeSeries[] }) => {
  const unitSystem = useUnitSystem()
  console.log(data)

  const groupName = data[0]?.data_type.long_name.match("Wave") ? "Waves" : "Wind"
  if (!groupName) return null

  const metricData = getGroupData(unitSystem, groupName, data).getWindOrWaveData()
  if (!metricData) return null

  // Degrees for direction icon
  let rotationDeg = 0
  if (metricData.directionDeg !== null) {
    const iconBaseDegrees = 45
    rotationDeg = (metricData.directionDeg + 90 + iconBaseDegrees) % 360
  }

  return (
    <div className="caption d-flex flex-row gap-1">
      <strong>{`${groupName}:`}</strong>
      <span>{metricData.primary}</span>
      <span>{metricData.primaryUnit}</span>

      {/* Just for waves */}
      {groupName === "Waves" && (
        <span>
          {metricData.secondary && metricData.secondaryUnit
            ? `at ${metricData.secondary} ${metricData.secondaryUnit}`
            : ""}
        </span>
      )}

      {/* Just for wind */}
      {groupName === "Wind" && (
        <span>
          {metricData.secondary && metricData.secondaryUnit
            ? `(Gust ${metricData.secondary} ${metricData.secondaryUnit})`
            : ""}
        </span>
      )}

      {metricData.direction && (
        <span>
          {metricData.direction ? `, ${metricData.direction} ${metricData.directionUnit}` : ""}
          <LocationArrowIcon
            className="fa-sm text-info ms-1"
            rotateBy
            style={{ "--fa-rotate-angle": `${rotationDeg}deg` }}
          />
        </span>
      )}
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
  let { windTimeSeries, waveTimeSeries, nonGroupTimeSeries, allCurrentConditionsTimeseries } =
    currentConditionsTimeseries(platform, aDayAgoRounded())

  // Aim to have no more than 4 metrics in the popup
  const limit = windTimeSeries.length > 0 && waveTimeSeries.length > 0 ? 1 : 3
  nonGroupTimeSeries = nonGroupTimeSeries.slice(0, limit)

  return (
    <React.Fragment>
      <LastUpdated allData={allCurrentConditionsTimeseries} />
      {windTimeSeries.length > 0 && <MetricsWithGroups data={windTimeSeries} />}
      {waveTimeSeries.length > 0 && <MetricsWithGroups data={waveTimeSeries} />}
      {nonGroupTimeSeries.map((timeSeries, index) => (
        <PopupMetric key={index} data={timeSeries} />
      ))}
    </React.Fragment>
  )
}

const StationName = ({ platform }: DataRendererProps) => {
  return (
    <p className="m-0 d-flex justify-content-start">
      <strong>Station: {platform.id}</strong>
    </p>
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
