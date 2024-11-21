/**
 * Current observations table component
 */
import React, { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { currentConditionsTimeseries, filterTimeSeries } from "../../../utils/currentConditionsTimeseries"

import { itemStyle, TableItem } from "../Table/item"
import { DatumOffsets } from "Features/ERDDAP/types"
import { DatumSelector } from "Features/ERDDAP/waterLevel/DatumSelector"
import { platformName } from "Features/ERDDAP/utils/platformName"

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unitSystem: UnitSystem
  laterThan: Date
  children?: any
}

/**
 * Recent platform observation values
 * @param platform
 */
export const WLErddapObservationTable: React.FC<Props> = ({
  platform,
  unitSelector,
  unitSystem,
  laterThan,
  children,
}: Props) => {
  const [datumOptions, setDatumOptions] = useState<DatumOffsets | undefined>()
  const [highTide, setHighTide] = useState<Date>()
  const [lowTide, setLowTide] = useState<Date>()

  console.log(platform)
  useEffect(() => {
    if (platform.properties.readings.length && children) {
      const wlReading = platform.properties.readings.find((r) => Object.keys(r.datum_offsets).length)
      setDatumOptions(wlReading?.datum_offsets)
    }
  }, [platform])

  const waterLevelTimeseries = filterTimeSeries(
    platform.properties.readings.filter((ts) => ts.highlighted === "No"),
    ["tidal_sea_surface_height_above_mean_lower_low_water"],
    laterThan,
  )

  useEffect(() => {
    const futureTides = platform.properties.readings.find(
      (ts) => ts.type === "Prediction" && ts.variable === "predictedWL",
    )?.extrema_values.tides

    const nextTides = futureTides?.filter((t) => new Date(t.time) >= new Date(Date.now()))
    const nextHigh = nextTides?.find((t) => t.tide === "high")
    const nextLow = nextTides?.find((t) => t.tide === "low")
    setHighTide(new Date(nextHigh?.time as string))
    setLowTide(new Date(nextLow?.time as string))
  }, [platform])

  const time = waterLevelTimeseries?.time ? new Date(waterLevelTimeseries.time) : null

  const { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)
  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  const highTideListComponent = (
    <ListGroupItem style={itemStyle}>
      <b>Next High Tide: </b>
      {highTide?.toLocaleString(undefined, {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
        month: "short",
        day: "numeric",
      })}
    </ListGroupItem>
  )

  const lowTideListComponent = (
    <ListGroupItem style={itemStyle}>
      <b>Next Low Tide: </b>
      {lowTide?.toLocaleString(undefined, {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
        month: "short",
        day: "numeric",
      })}
    </ListGroupItem>
  )

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 && time ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated at:</b>{" "}
          {time.toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            month: "short",
            day: "numeric",
          })}
        </ListGroupItem>
      ) : (
        <ListGroupItem style={itemStyle}>There is no recent data from {platformName(platform)}</ListGroupItem>
      )}
      {waterLevelTimeseries && (
        <TableItem key="WL-ts" timeSeries={waterLevelTimeseries} platform={platform} unitSystem={unitSystem} />
      )}
      {highTide && lowTide && lowTide < highTide ? (
        <>
          {lowTideListComponent}
          {highTideListComponent}
        </>
      ) : (
        <>
          {highTideListComponent}
          {lowTideListComponent}
        </>
      )}
      {unitSelector ? (
        <ListGroupItem style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroupItem>
      ) : null}
      {children && <ListGroupItem>{children}</ListGroupItem>}
      {children && <DatumSelector datumOffsets={datumOptions as DatumOffsets} />}
    </ListGroup>
  )
}
