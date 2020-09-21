/**
 * Card to display when their is no data available
 */
import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"

interface NoDataCardProps {
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

/**
 * Card to display when their is no data available
 */
export const NoDataCard: React.FunctionComponent<NoDataCardProps> = ({ timeSeries, platform }) => {
  const url = cardUrl(platform, timeSeries)

  return (
    <Col {...cardProps}>
      <Link to={url}>
        <Card>
          <CardBody>No data for {timeSeries.data_type.long_name} in the last day</CardBody>
        </Card>
      </Link>
    </Col>
  )
}
