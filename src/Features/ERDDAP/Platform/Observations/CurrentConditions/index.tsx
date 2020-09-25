/**
 * Collection of cards to display a summary of
 * current conditions that a platform is experiencing.
 */
import * as React from "react"
import { Row } from "reactstrap"

import { useUnitSystem } from "Features/Units"
import { aDayAgoRounded } from "Shared/time"

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
export const ErddapCurrentPlatformConditions: React.FunctionComponent<Props> = ({ platform }) => {
  const unitSystem = useUnitSystem()

  const dayAgo = aDayAgoRounded()

  const airTemp = filterTimeSeries(platform.properties.readings, conditions.airTemp, dayAgo)
  const airPressure = filterTimeSeries(platform.properties.readings, conditions.airPressure, dayAgo)
  const waveHeight = filterTimeSeries(platform.properties.readings, conditions.waveHeight, dayAgo)
  const wavePeriod = filterTimeSeries(platform.properties.readings, conditions.wavePeriod, dayAgo)
  const waveDirection = filterTimeSeries(platform.properties.readings, conditions.waveDirection, dayAgo)
  const waterTemp = filterTimeSeries(platform.properties.readings, conditions.waterTemp, dayAgo)
  const visibility = filterTimeSeries(platform.properties.readings, conditions.visibility, dayAgo)

  const { timeSeries: windTimeSeries } = pickWindTimeSeries(platform, dayAgo)

  const timeSeriesWithNull = [
    airTemp,
    airPressure,
    waveHeight,
    wavePeriod,
    waveDirection,
    waterTemp,
    visibility,
    ...windTimeSeries,
  ]
  const timeSeries = timeSeriesWithNull.filter((ts) => ts !== null) as PlatformTimeSeries[]

  return (
    <UseDatasets timeSeries={timeSeries} startTime={dayAgo}>
      {({ datasets }) => (
        <Row>
          <DisplayWindCard timeSeries={windTimeSeries} {...{ datasets, platform, unitSystem }} />

          {datasets
            .sort((a, b) => {
              var nameA = a.name.toUpperCase()
              var nameB = b.name.toUpperCase()
              if (nameA < nameB) {
                return -1
              }
              if (nameA > nameB) {
                return 1
              }
              return 0
            })
            .map((dataset, index) => {
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
                  {...{ platform, unitSystem }}
                />
              )
            })}
        </Row>
      )}
    </UseDatasets>
  )
}

function filterTimeSeries(timeSeries: PlatformTimeSeries[], dataTypes: string[], laterThan: Date) {
  let filterTimeSeries: PlatformTimeSeries[] = []

  dataTypes.forEach((dataType) => {
    const matchStandard = timeSeries.filter((reading) => dataType === reading.data_type.standard_name) // match any that are the current data type
    const matchTime = matchStandard.filter((reading) => (reading.time ? laterThan < new Date(reading.time) : false)) // that have data in the last day
    const matchDepth = matchTime.filter((reading) => (reading.depth ? reading.depth < 2 : true)) // are near-surface
    matchDepth.forEach((ts) => filterTimeSeries.push(ts))
  })

  if (filterTimeSeries.length > 0) {
    return filterTimeSeries[0]
  }

  return null
}
