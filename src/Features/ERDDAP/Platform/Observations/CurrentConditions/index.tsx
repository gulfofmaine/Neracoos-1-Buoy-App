import React from "react"
import { Row } from "reactstrap"

import { PlatformFeature } from "../../../types"

import { DataCard } from "./data_card"
import { WindCard } from "./wind"

interface Props {
  platform: PlatformFeature
}

export const ErddapCurrentPlatformConditions: React.SFC<Props> = ({ platform }) => {
  const commonDataCardProps = { platform }

  return (
    <Row>
      <h4>Wind In progress</h4>

      {/* WindCard */}

      <DataCard {...commonDataCardProps} data_types={["air_temperature", "air_temperature_1m"]} />
      <DataCard
        {...commonDataCardProps}
        data_types={["air_pressure", "barometric_pressure", "sea_level_pressure", "air_pressure_at_sea_level"]}
      />
      <DataCard
        {...commonDataCardProps}
        data_types={[
          "sea_surface_wave_significant_height",
          "significant_height_of_wind_and_swell_waves",
          "significant_wave_height",
          "significant_height_of_wind_and_swell_waves_3",
        ]}
      />
      <DataCard
        {...commonDataCardProps}
        data_types={[
          "period",
          "sea_surface_swell_wave_period",
          "dominant_wave_period",
          "average_wave_period",
          "dominant_wave_period_3",
        ]}
      />
      <DataCard {...commonDataCardProps} data_types={["mean_wave_direction", "sea_surface_wave_to_direction"]} />
      <DataCard {...commonDataCardProps} data_types={["sea_surface_temperature", "sea_water_temperature"]} />
      <DataCard {...commonDataCardProps} data_types={["visibility_in_air"]} />
    </Row>
  )
}
