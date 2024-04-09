/**
 * Current observations table component
 */
import React, { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { UnitSystem } from "Features/Units/types"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { conditions } from "../../../utils/conditions"

import { itemStyle, TableItem } from "./item"
import { DatumOffsets } from "Features/ERDDAP/types"
import { useParams, usePathname } from "next/navigation"
import { DatumSelector } from "Features/ERDDAP/waterLevel/DatumSelector"

interface Props extends UsePlatformRenderProps {
  unitSelector?: React.ReactNode
  unitSystem: UnitSystem
  laterThan?: Date
  children?: any
}

const timeDelta = 60 * 60 * 1000

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationTable: React.FC<Props> = ({
  platform,
  unitSelector,
  unitSystem,
  laterThan,
  children,
}: Props) => {
  const pathname = usePathname()
  const [datumOptions, setDatumOptions] = useState<DatumOffsets | undefined>()

  useEffect(() => {
    if (platform.properties.readings.length) {
      const wlReading = platform.properties.readings.find((r) => Object.keys(r.datum_offsets).length)
      setDatumOptions(wlReading?.datum_offsets)
    }
  }, [])

  const readings = platform.properties.readings.filter((d) => {
    if (d.time) {
      if (laterThan) {
        return laterThan <= new Date(d.time)
      }

      return true
    }
    return false
  })

  const times = readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  /** Sixty minute window for updated times */
  const timeWindow = times.length > 0 ? new Date(times[times.length - 1].getTime() - timeDelta) : undefined

  const commonProps = { platform, readings, unitSystem, later_than: timeWindow }

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated at:</b>{" "}
          {times[times.length - 1].toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            month: "short",
            day: "numeric",
          })}
        </ListGroupItem>
      ) : (
        <ListGroupItem style={itemStyle}>There is no recent data from {platform.id}</ListGroupItem>
      )}

      <TableItem {...commonProps} data_type={conditions.windSpeed} name="Wind Speed" />
      <TableItem {...commonProps} data_type={conditions.windGust} name="Wind Gusts" />
      <TableItem {...commonProps} data_type={conditions.windDirection} name="Wind Direction" />

      <TableItem {...commonProps} data_type={conditions.waveHeight} name="Wave Height" />

      <TableItem {...commonProps} data_type={conditions.wavePeriod} name="Wave Period" />

      <TableItem {...commonProps} data_type={conditions.waveDirection} name="Wave Direction" />
      <TableItem {...commonProps} data_type={conditions.airTemp} name="Air Temperature" />
      <TableItem {...commonProps} data_type={conditions.waterTemp} name="Water Temperature" />
      <TableItem {...commonProps} data_type={conditions.visibility} name="Visibility" />
      <TableItem {...commonProps} data_type={conditions.waterLevel} name="Water Level" />

      {unitSelector ? (
        <ListGroupItem style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroupItem>
      ) : null}
      {children && <ListGroupItem>{children}</ListGroupItem>}
      {pathname.includes("water-level") && datumOptions ? <DatumSelector datumOffsets={datumOptions} /> : null}
    </ListGroup>
  )
}
