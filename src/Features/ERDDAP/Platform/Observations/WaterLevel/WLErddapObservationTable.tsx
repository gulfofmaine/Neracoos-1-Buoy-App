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

  const { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)
  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

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
        <ListGroupItem style={itemStyle}>There is no recent data from {platformName(platform)}</ListGroupItem>
      )}
      {waterLevelTimeseries && (
        <TableItem
          key="WL-ts"
          timeSeries={waterLevelTimeseries}
          platform={platform}
          unitSystem={unitSystem}
          startTime={laterThan}
        />
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
