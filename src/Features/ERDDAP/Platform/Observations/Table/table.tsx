/**
 * Current observations table component
 */
import * as React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

import { RenderProps } from "../../Grabber"
import { itemStyle, TableItem } from "./item"

interface Props {
  unitSelector?: React.ReactNode
}

const timeDelta = 15 * 60 * 1000

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationTable: React.SFC<Props & RenderProps> = ({ platform, unitSelector, unit_system }) => {
  const times = platform.properties.readings.filter((d) => d.time !== null).map((d) => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  debugger

  /** Fifteen minute window for updated times */
  const timeWindow = times.length > 0 ? new Date(times[times.length - 1].getTime() - timeDelta) : undefined

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated around:</b>{" "}
          {times[times.length - 1].toLocaleString(undefined, {
            hour: "2-digit",
            hour12: true,
            minute: "2-digit",
            // month: "short",
            // day: "numeric",
          })}
        </ListGroupItem>
      ) : null}

      <TableItem
        platform={platform}
        data_type="wind_speed"
        name="Wind Speed"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type="wind_gust"
        name="Wind Gusts"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type="wind_from_direction"
        name="Wind Direction"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type={[
          "sea_surface_wave_significant_height",
          "significant_wave_height",
          "significant_height_of_wind_and_swell_waves",
          "significant_height_of_wind_and_swell_waves_3",
        ]}
        name="Wave Height"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type={["sea_surface_swell_wave_period", "dominant_wave_period"]}
        name="Wave Period"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      <TableItem
        platform={platform}
        data_type="mean_wave_direction"
        name="Wave Direction"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type="air_temperature"
        name="Air Temperature"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type="sea_water_temperature"
        name="Water Temperature"
        unit_system={unit_system}
        later_then={timeWindow}
      />
      <TableItem
        platform={platform}
        data_type="visibility_in_air"
        name="Visibility"
        unit_system={unit_system}
        later_then={timeWindow}
      />

      {unitSelector ? (
        <ListGroupItem style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroupItem>
      ) : null}
    </ListGroup>
  )
}
