/**
 * Wind Observed conditions component
 */
import * as Sentry from "@sentry/react"
import * as React from "react"
import { SizeMeProps, withSize } from "react-sizeme"
import { Alert, Col, Row } from "reactstrap"

import { WindTimeSeriesChart } from "components/Charts"
import { UnitSystem } from "Features/Units/types"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"

interface Props {
  platform: PlatformFeatureWithDatasets
  unit_system: UnitSystem
}

export const windStandards = new Set(["wind_from_direction", "wind_speed", "wind_speed_of_gust"])

export const ErddapWindObservedConditionBase: React.SFC<Props & SizeMeProps> = ({ platform, size, unit_system }) => {
  // adjust number of barbs based on width
  let barbsPerDay = 5
  if (size && size.width && size.width < 800) {
    barbsPerDay = 2
  }

  const windDatasets = platform.properties.readings.filter((reading) =>
    windStandards.has(reading.data_type.standard_name)
  )

  const windTimeSeries: DataTimeSeries[] = windDatasets.map((reading) => ({
    name: reading.data_type.long_name,
    timeSeries: reading.readings,
    unit: reading.data_type.units,
  }))

  Sentry.addBreadcrumb({
    category: "ERDDAP Wind",
    data: {
      platformId: platform.id as string,
      windDatasets,
    },
  })

  if (windDatasets.length === 0) {
    Sentry.captureMessage(("Unable to display wind data for " + platform.id) as string)
    return noWind
  }

  return (
    <React.Fragment>
      <ErddapDatasetStatus datasets={windDatasets} />
      <ErddapDatasetLoader platformId={platform.id as string} datasets={windDatasets}>
        <React.Fragment>
          {windTimeSeries[0].timeSeries !== undefined && windTimeSeries[0].timeSeries.length > 0 ? (
            <WindChart barbsPerDay={barbsPerDay} data={windTimeSeries} unit_system={unit_system} />
          ) : null}
        </React.Fragment>
      </ErddapDatasetLoader>
    </React.Fragment>
  )
}

const noWind = (
  <Row>
    <Col>
      <Alert color="warning">Unable to display wind info</Alert>
    </Col>
  </Row>
)

export const ErddapWindObservedCondition = withSize()(ErddapWindObservedConditionBase)

interface WindChartProps {
  barbsPerDay: number
  data: DataTimeSeries[]
  unit_system: UnitSystem
}

export const WindChart: React.SFC<WindChartProps> = (props) => (
  <Row>
    <Col>
      <h4>Wind</h4>
      <WindTimeSeriesChart days={7} {...props} legend={true} />
    </Col>
  </Row>
)
