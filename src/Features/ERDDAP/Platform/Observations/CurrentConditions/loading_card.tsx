/**
 * Card to show when loading data for current conditions
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"

interface LoadingDataCardProps {
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

/**
 * Card to show when loading data for current conditions
 */
export const LoadingDataCard: React.FunctionComponent<LoadingDataCardProps> = ({ timeSeries, platform }) => {
  const url = cardUrl(platform, timeSeries)

  return (
    <Col {...cardProps}>
      <Link to={url}>
        <Card>
          <CardBody>Loading {timeSeries.data_type.long_name} data</CardBody>
        </Card>
      </Link>
    </Col>
  )
}
