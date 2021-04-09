/**
 * Card to wrap errors loading datasets
 */
import * as React from "react"
import Link from "next/link"
import { Card, CardBody, Col } from "reactstrap"

import { PlatformFeature, PlatformTimeSeries } from "../../../types"

import { cardProps, cardUrl } from "./common_card"

interface ErrorDataCardProps {
  timeSeries: PlatformTimeSeries
  platform: PlatformFeature
}

/**
 * Card to display when there are errors loading datasets
 */
export const ErrorDataCard: React.FunctionComponent<ErrorDataCardProps> = ({ timeSeries, platform }) => {
  const url = cardUrl(platform, timeSeries)

  return (
    <Col {...cardProps}>
      <Link href={url}>
        <a>
          <Card>
            <CardBody>Error loading {timeSeries.data_type.long_name} data</CardBody>
          </Card>
        </a>
      </Link>
    </Col>
  )
}
