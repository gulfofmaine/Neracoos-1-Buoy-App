import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"

interface ErrorDataCardProps {
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

export const ErrorDataCard: React.FunctionComponent<ErrorDataCardProps> = ({ timeSeries, platform }) => {
  const url = cardUrl(platform, timeSeries)

  return (
    <Col {...cardProps}>
      <Link to={url}>
        <Card>
          <CardBody>Error loading {timeSeries.data_type.long_name} data</CardBody>
        </Card>
      </Link>
    </Col>
  )
}
