/**
 * Current observations table component
 */
import React, { useEffect, useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"

import { DatumOffsets } from "Features/ERDDAP/types"
import { DatumSelector } from "Features/ERDDAP/waterLevel/DatumSelector"
import { platformName } from "Features/ERDDAP/utils/platformName"
import { UnitSystem } from "Features/Units/types"
import { WATER_LEVEL_STANDARDS } from "Shared/constants/standards"

import { UsePlatformRenderProps } from "../../../hooks/BuoyBarnComponents"
import { currentConditionsTimeseries, filterTimeSeries } from "../../../utils/currentConditionsTimeseries"
import { itemStyle, TableItem } from "../Table/item"

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
  }, [platform, children])

  const waterLevelTimeseries = filterTimeSeries(
    platform.properties.readings.filter((ts) => ts.highlighted === "No"),
    WATER_LEVEL_STANDARDS,
    laterThan,
  )

  const time = waterLevelTimeseries?.time ? new Date(waterLevelTimeseries.time) : null

  const { allCurrentConditionsTimeseries } = currentConditionsTimeseries(platform, laterThan)
  const times = allCurrentConditionsTimeseries.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 && time ? (
        <ListGroup.Item style={itemStyle}>
          <b>Last updated at:</b>{" "}
          {time.toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            month: "short",
            day: "numeric",
          })}
        </ListGroup.Item>
      ) : (
        <ListGroup.Item style={itemStyle}>There is no recent data from {platformName(platform)}</ListGroup.Item>
      )}
      {waterLevelTimeseries && (
        <TableItem key="WL-ts" timeSeries={waterLevelTimeseries} platform={platform} unitSystem={unitSystem} />
      )}
      {unitSelector ? (
        <ListGroup.Item style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroup.Item>
      ) : null}
      {children && <ListGroup.Item>{children}</ListGroup.Item>}
      {children && <DatumSelector datumOffsets={datumOptions as DatumOffsets} />}
    </ListGroup>
  )
}
