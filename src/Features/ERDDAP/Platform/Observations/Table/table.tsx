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

/**
 * Recent platform observation values
 * @param platform
 */
export const ErddapObservationTable: React.SFC<Props & RenderProps> = ({ platform, unitSelector }) => {
  const times = platform.properties.readings.filter(d => d.time !== null).map(d => new Date(d.time as string))
  times.sort((a, b) => a.valueOf() - b.valueOf())

  return (
    <ListGroup style={{ paddingTop: "1rem" }}>
      {times.length > 0 ? (
        <ListGroupItem style={itemStyle}>
          <b>Last updated at:</b> {times[times.length - 1].toLocaleString()}
        </ListGroupItem>
      ) : null}

      {unitSelector ? (
        <ListGroupItem style={{ padding: ".5rem", paddingLeft: "1rem", color: "black" }}>
          <b>Unit system:</b> {unitSelector}
        </ListGroupItem>
      ) : null}

      <TableItem
        platform={platform}
        data_type="wind_speed"
        name="Wind Speed"
        prefered_unit="knot"
        printed_unit="knots"
      />
      <TableItem
        platform={platform}
        data_type="wind_gust"
        name="Wind Gusts"
        prefered_unit="knot"
        printed_unit="knots"
      />
      <TableItem platform={platform} data_type="wind_from_direction" name="Wind Direction" printed_unit="degrees" />

      <TableItem
        platform={platform}
        data_type="sea_surface_wave_significant_height"
        name="Wave Height"
        printed_unit="feet"
        prefered_unit="ft"
      />
      <TableItem
        platform={platform}
        data_type="significant_height_of_wind_and_swell_waves"
        name="Wave Height"
        printed_unit="feet"
        prefered_unit="ft"
      />

      <TableItem
        platform={platform}
        data_type="sea_surface_swell_wave_period"
        name="Wave Period"
        printed_unit="seconds"
      />
      <TableItem platform={platform} data_type="dominant_wave_period" name="Wave Period" printed_unit="seconds" />

      <TableItem platform={platform} data_type="mean_wave_direction" name="Wave Direction" printed_unit="degrees" />
      <TableItem
        platform={platform}
        data_type="air_temperature"
        name="Air Temperature"
        printed_unit="F"
        prefered_unit="F"
      />
      <TableItem
        platform={platform}
        data_type="sea_water_temperature"
        name="Water Temperature"
        printed_unit="F"
        prefered_unit="F"
      />
      <TableItem
        platform={platform}
        data_type="visibility_in_air"
        name="Visibility"
        printed_unit="miles"
        prefered_unit="mi"
      />
    </ListGroup>
  )
}
