"use client"
/**
 * Collection of cards to display a summary of
 * current conditions that a platform is experiencing.
 */
import React from "react"
import { Row } from "reactstrap"

import { useUnitSystem } from "Features/Units"
import { halfADayAgoRounded } from "Shared/time"

import { UseDatasets } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { conditions } from "../../../utils/conditions"
import { pickWindTimeSeries } from "../../../utils/wind"

import { DataCardDisplay } from "./data_card"
import { DisplayWindCard } from "./wind"

interface Props {
  platform: PlatformFeature
}

/**
 * Collection of cards to display a summary of the current conditions that a platform is experiencing.
 *
 * @param platform Platform to display data for
 */
export const ErddapCurrentPlatformConditions: React.FunctionComponent<Props> = ({ platform }: Props) => {
  const unitSystem = useUnitSystem()

  const halfDayAgo = halfADayAgoRounded()

  const airTemp = filterTimeSeries(platform.properties.readings, conditions.airTemp, halfDayAgo)
  const airPressure = filterTimeSeries(platform.properties.readings, conditions.airPressure, halfDayAgo)
  const waveHeight = filterTimeSeries(platform.properties.readings, conditions.waveHeight, halfDayAgo)
  const wavePeriod = filterTimeSeries(platform.properties.readings, conditions.wavePeriod, halfDayAgo)
  const waveDirection = filterTimeSeries(platform.properties.readings, conditions.waveDirection, halfDayAgo)
  const waterTemp = filterTimeSeries(platform.properties.readings, conditions.waterTemp, halfDayAgo)
  const waterLevel = filterTimeSeries(platform.properties.readings, conditions.waterLevel, halfDayAgo)
  const visibility = filterTimeSeries(platform.properties.readings, conditions.visibility, halfDayAgo)

  const { timeSeries: windTimeSeries } = pickWindTimeSeries(platform, halfDayAgo)

  const timeSeriesWithNull = [
    waveHeight,
    wavePeriod,
    waveDirection,
    airPressure,
    airTemp,
    waterTemp,
    waterLevel,
    visibility,
    ...windTimeSeries,
  ]
  const timeSeries = timeSeriesWithNull.filter((ts) => ts !== null) as PlatformTimeSeries[]

  return (
    <UseDatasets timeSeries={timeSeries} startTime={halfDayAgo}>
      {({ datasets }) => {
        const times = datasets
          .map((ds) => ds.timeSeries)
          .flat()
          .map((r) => r.time.valueOf())
        times.sort()

        const startTime = new Date(times[0])
        const endTime = new Date(times[times.length - 1])

        return (
          <Row>
            <DisplayWindCard timeSeries={windTimeSeries} {...{ datasets, platform, unitSystem, startTime, endTime }} />

            {datasets.map((dataset, index) => {
              const datasetTimeSeries = timeSeries.find((ts) => ts.variable === dataset.name)
              if (
                !datasetTimeSeries ||
                new Set(windTimeSeries.map((ts) => ts.variable)).has(datasetTimeSeries.variable)
              ) {
                return null
              }
              return (
                <DataCardDisplay
                  key={index}
                  timeSeries={datasetTimeSeries}
                  readings={dataset.timeSeries}
                  {...{ platform, unitSystem, startTime, endTime }}
                />
              )
            })}
          </Row>
        )
      }}
    </UseDatasets>
  )
}

export function filterTimeSeries(timeSeries: PlatformTimeSeries[], dataTypes: string[], laterThan: Date) {
  let filterTimeSeries: PlatformTimeSeries[] = []

  dataTypes.forEach((dataType) => {
    const matchStandard = timeSeries.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    // console.log(matchStandard)
    const matchTime = matchStandard.filter((reading) => (reading.time ? laterThan < new Date(reading.time) : false)) // that have data in the last day
    // console.log("banana matchTime", matchTime)
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    matchDepth.forEach((ts) => filterTimeSeries.push(ts))
  })

  if (filterTimeSeries.length > 0) {
    return filterTimeSeries[0]
  }

  return null
}
