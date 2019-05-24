/**
 * Wind Observed conditions component
 */
import * as Sentry from "@sentry/browser"
import * as React from "react"
import sizeMe, { SizeMeProps } from "react-sizeme"
import { Alert, Col, Row } from "reactstrap"

import { WindTimeSeriesChart } from "components/Charts"
import { DataTimeSeries } from "Shared/timeSeries"

import { PlatformFeatureWithDatasets } from "../../../types"
import { ErddapDatasetLoader, ErddapDatasetStatus } from "../../Dataset"

interface Props {
  platform: PlatformFeatureWithDatasets
}

const windStandards = new Set(["wind_from_direction", "wind_speed", "wind_speed_of_gust"])

export const ErddapWindObservedConditionBase: React.SFC<Props & SizeMeProps> = ({ platform, size }) => {
  // adjust number of barbs based on width
  let barbsPerDay = 5
  if (size.width < 800) {
    barbsPerDay = 2
  }

  const windDatasets = platform.properties.readings.filter(reading =>
    windStandards.has(reading.data_type.standard_name)
  )

  const windTimeSeries: DataTimeSeries[] = windDatasets.map(reading => ({
    name: reading.data_type.long_name,
    timeSeries: reading.readings,
    unit: reading.data_type.units
  }))

  Sentry.addBreadcrumb({
    category: "ERDDAP Wind",
    data: {
      platformId: platform.id as string,
      windDatasets
    }
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
            <Row>
              <Col>
                <h4>Wind</h4>
                <WindTimeSeriesChart days={7} data={windTimeSeries} barbsPerDay={barbsPerDay} legend={true} />
              </Col>
            </Row>
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

export const ErddapWindObservedCondition = sizeMe()(ErddapWindObservedConditionBase)
