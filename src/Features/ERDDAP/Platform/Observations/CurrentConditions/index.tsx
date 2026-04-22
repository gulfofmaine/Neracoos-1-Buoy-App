"use client"
/**
 * Collection of cards to display a summary of
 * current conditions that a platform is experiencing.
 */
import React from "react"
import Row from "react-bootstrap/Row"

import { useUnitSystem } from "Features/Units"
import { halfADayAgoRounded } from "Shared/time"

import { DataCardDisplay } from "./data_card"
import { DisplayWindCard } from "./wind"
import { UseDatasets } from "../../../hooks"
import { PlatformFeature, PlatformTimeSeries } from "../../../types"
import { currentConditionsTimeseries } from "../../../utils/currentConditionsTimeseries"

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
  const { before, windTimeSeries, timeSeries, after, allCurrentConditionsTimeseries } = currentConditionsTimeseries(
    platform,
    halfDayAgo,
  )

  return (
    <UseDatasets timeSeries={allCurrentConditionsTimeseries} startTime={halfDayAgo} platformId={platform.id}>
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
            {datasets.map((dataset, index) => {
              const datasetTimeSeries = before.find((ts) => ts.variable === dataset.name)
              if (!datasetTimeSeries) {
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

            <DisplayWindCard timeSeries={windTimeSeries} {...{ datasets, platform, unitSystem, startTime, endTime }} />

            {datasets.map((dataset, index) => {
              const datasetTimeSeries = timeSeries.find((ts) => ts.variable === dataset.name)
              if (!datasetTimeSeries) {
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

            {datasets.map((dataset, index) => {
              const datasetTimeSeries = after.find((ts) => ts.variable === dataset.name)
              if (!datasetTimeSeries) {
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

export function filterTimeSeries(
  timeSeries: PlatformTimeSeries[],
  dataTypes: string[],
  laterThan: Date,
  type?: "Forecast" | "Observation" | "Prediction",
) {
  let filteredTimeSeries: PlatformTimeSeries[] = []

  dataTypes.forEach((dataType) => {
    const matchStandard = timeSeries.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    const matchTime = matchStandard.filter((reading) => (reading.time ? laterThan < new Date(reading.time) : false)) // that have data in the last day
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    const matchType = type ? matchDepth.filter((reading) => reading.type === type) : matchDepth
    matchType.forEach((ts) => filteredTimeSeries.push(ts))
  })

  if (filteredTimeSeries.length > 0) {
    return filteredTimeSeries
  }

  return null
}

export function filterSingleTimeSeries(
  timeSeries: PlatformTimeSeries[],
  dataTypes: string[],
  laterThan: Date,
  type?: "Forecast" | "Observation" | "Prediction",
) {
  const filteredTimeSeries = filterTimeSeries(timeSeries, dataTypes, laterThan, type)

  if (filteredTimeSeries && filteredTimeSeries.length > 0) {
    return filteredTimeSeries[0]
  }

  return null
}
