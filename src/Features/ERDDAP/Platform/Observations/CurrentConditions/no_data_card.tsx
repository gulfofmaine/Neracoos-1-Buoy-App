import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"

interface NoDataCardProps {
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

export const NoDataCard: React.SFC<NoDataCardProps> = ({ timeSeries, platform }) => {
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
